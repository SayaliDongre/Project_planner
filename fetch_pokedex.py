import asyncio
import aiohttp
import json

async def fetch_all():
    print("Starting PokeAPI fetch...")
    async with aiohttp.ClientSession() as session:
        chains = []
        tasks = []
        for i in range(1, 450):
            tasks.append(session.get(f"https://pokeapi.co/api/v2/evolution-chain/{i}/"))
        
        print("Fetching evolution chains...")
        responses = await asyncio.gather(*tasks, return_exceptions=True)
        
        poke_data = {}
        base_forms = set()
        
        for r in responses:
            if isinstance(r, Exception):
                continue
            if r.status != 200:
                continue
            chain_data = await r.json()
            chain = chain_data.get('chain')
            if not chain: continue
            
            def parse_chain(node):
                species_url = node['species']['url']
                species_id = int(species_url.split('/')[-2])
                name = node['species']['name']
                
                evolves_to = []
                for child in node['evolves_to']:
                    child_id = int(child['species']['url'].split('/')[-2])
                    min_level = 30 # default
                    if child.get('evolution_details') and len(child['evolution_details']) > 0:
                        det = child['evolution_details'][0]
                        if det.get('min_level'):
                            min_level = det['min_level']
                    evolves_to.append({"id": child_id, "level": min_level})
                    parse_chain(child)
                
                poke_data[species_id] = {
                    "id": species_id,
                    "name": name.capitalize(),
                    "evolutions": evolves_to
                }
            
            base_species_id = int(chain['species']['url'].split('/')[-2])
            base_forms.add(base_species_id)
            parse_chain(chain)

        print("Fetched evolution chains. Fetching types/stats for base forms and their evos...")
        
        stat_tasks = []
        valid_ids = list(poke_data.keys())
        for pid in valid_ids:
            if pid > 900: continue
            stat_tasks.append(session.get(f"https://pokeapi.co/api/v2/pokemon/{pid}/"))
        
        stat_responses = await asyncio.gather(*stat_tasks, return_exceptions=True)
        
        final_array = []
        for r in stat_responses:
            if isinstance(r, Exception) or r.status != 200:
                continue
            p = await r.json()
            pid = p['id']
            if pid not in poke_data: continue
            
            types = [t['type']['name'] for t in p['types']]
            stats = {s['stat']['name']: s['base_stat'] for s in p['stats']}
            
            bst = sum(stats.values())
            rarity = 1
            if pid not in base_forms:
                rarity = 4 
            else:
                if bst > 550: rarity = 5 
                elif bst > 400: rarity = 3
                elif bst > 300: rarity = 2
                else: rarity = 1
                
            poke_data[pid]['types'] = types
            poke_data[pid]['stats'] = stats
            poke_data[pid]['rarity'] = rarity
            poke_data[pid]['isBase'] = pid in base_forms
            
            final_array.append(poke_data[pid])
            
        final_array.sort(key=lambda x: x['id'])
        
        with open('pokemon_data.js', 'w', encoding='utf-8') as f:
            f.write("const POKEMON_DB = ")
            json.dump(final_array, f, indent=2)
            f.write(";\n")
            
        print(f"Done! Wrote {len(final_array)} pokemon to pokemon_data.js")

if __name__ == '__main__':
    asyncio.run(fetch_all())
