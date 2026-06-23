import urllib.request
import os
import json
import concurrent.futures

os.makedirs('assets/sprites', exist_ok=True)
os.makedirs('assets/gifs', exist_ok=True)
os.makedirs('assets/avatars', exist_ok=True)

AVATARS = {
    'ash': 'https://play.pokemonshowdown.com/sprites/trainers/ash.png',
    'misty': 'https://play.pokemonshowdown.com/sprites/trainers/misty.png',
    'brock': 'https://play.pokemonshowdown.com/sprites/trainers/brock.png',
    'serena': 'https://play.pokemonshowdown.com/sprites/trainers/serena.png',
    'gary': 'https://play.pokemonshowdown.com/sprites/trainers/blue.png',
    'dawn': 'https://play.pokemonshowdown.com/sprites/trainers/dawn.png',
    'may': 'https://play.pokemonshowdown.com/sprites/trainers/may.png',
    'clemont': 'https://play.pokemonshowdown.com/sprites/trainers/clemont.png',
    'lillie': 'https://play.pokemonshowdown.com/sprites/trainers/lillie.png',
    'oak': 'https://play.pokemonshowdown.com/sprites/trainers/oak.png',
    'tracy': 'https://play.pokemonshowdown.com/sprites/trainers/red.png',
    'max': 'https://play.pokemonshowdown.com/sprites/trainers/ethan.png',
    'paul': 'https://play.pokemonshowdown.com/sprites/trainers/silver.png'
}

def download_file(url, dest):
    if os.path.exists(dest):
        return True
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    try:
        with urllib.request.urlopen(req) as response:
            with open(dest, 'wb') as out_file:
                out_file.write(response.read())
            return True
    except Exception as e:
        return False

def main():
    print("Downloading avatars...")
    for name, url in AVATARS.items():
        download_file(url, f"assets/avatars/{name}.png")

    print("Fetching Pokemon DB to know which IDs to download...")
    with open('pokemon_data.js', 'r', encoding='utf-8') as f:
        content = f.read()
        json_str = content.replace('const POKEMON_DB = ', '').strip().rstrip(';')
        db = json.loads(json_str)

    ids = [p['id'] for p in db]
    # Also ensure starter fallbacks are in there just in case
    for x in [25, 4, 7, 1]:
        if x not in ids: ids.append(x)
        
    print(f"Found {len(ids)} pokemon to download sprites for.")

    def download_pokemon(pid):
        # Static
        static_url = f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pid}.png"
        download_file(static_url, f"assets/sprites/{pid}.png")

        # Animated showdown
        gif_url = f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/{pid}.gif"
        
        # If gif fails to download, download static png and name it .gif as a fallback
        if not download_file(gif_url, f"assets/gifs/{pid}.gif"):
            download_file(static_url, f"assets/gifs/{pid}.gif")

    with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
        executor.map(download_pokemon, ids)

    print("Finished downloading all assets!")

if __name__ == '__main__':
    main()
