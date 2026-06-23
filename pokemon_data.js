const POKEMON_DB = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "evolutions": [
      {
        "id": 2,
        "level": 16
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "evolutions": [
      {
        "id": 3,
        "level": 32
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "special-attack": 80,
      "special-defense": 80,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 3,
    "name": "Venusaur",
    "evolutions": [],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 4,
    "name": "Charmander",
    "evolutions": [
      {
        "id": 5,
        "level": 16
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special-attack": 60,
      "special-defense": 50,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "evolutions": [
      {
        "id": 6,
        "level": 36
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "special-attack": 80,
      "special-defense": 65,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 6,
    "name": "Charizard",
    "evolutions": [],
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special-attack": 109,
      "special-defense": 85,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 7,
    "name": "Squirtle",
    "evolutions": [
      {
        "id": 8,
        "level": 16
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "special-attack": 50,
      "special-defense": 64,
      "speed": 43
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 8,
    "name": "Wartortle",
    "evolutions": [
      {
        "id": 9,
        "level": 36
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "special-attack": 65,
      "special-defense": 80,
      "speed": 58
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 9,
    "name": "Blastoise",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "special-attack": 85,
      "special-defense": 105,
      "speed": 78
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 10,
    "name": "Caterpie",
    "evolutions": [
      {
        "id": 11,
        "level": 7
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "special-attack": 20,
      "special-defense": 20,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 11,
    "name": "Metapod",
    "evolutions": [
      {
        "id": 12,
        "level": 10
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "special-attack": 25,
      "special-defense": 25,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 12,
    "name": "Butterfree",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "special-attack": 90,
      "special-defense": 80,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 13,
    "name": "Weedle",
    "evolutions": [
      {
        "id": 14,
        "level": 7
      }
    ],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "special-attack": 20,
      "special-defense": 20,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 14,
    "name": "Kakuna",
    "evolutions": [
      {
        "id": 15,
        "level": 10
      }
    ],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "special-attack": 25,
      "special-defense": 25,
      "speed": 35
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 15,
    "name": "Beedrill",
    "evolutions": [],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "special-attack": 45,
      "special-defense": 80,
      "speed": 75
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 16,
    "name": "Pidgey",
    "evolutions": [
      {
        "id": 17,
        "level": 18
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 56
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "evolutions": [
      {
        "id": 18,
        "level": 36
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 71
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 101
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 19,
    "name": "Rattata",
    "evolutions": [
      {
        "id": 20,
        "level": 20
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "special-attack": 25,
      "special-defense": 35,
      "speed": 72
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 20,
    "name": "Raticate",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "special-attack": 50,
      "special-defense": 70,
      "speed": 97
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 21,
    "name": "Spearow",
    "evolutions": [
      {
        "id": 22,
        "level": 20
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "special-attack": 31,
      "special-defense": 31,
      "speed": 70
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 22,
    "name": "Fearow",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "special-attack": 61,
      "special-defense": 61,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 23,
    "name": "Ekans",
    "evolutions": [
      {
        "id": 24,
        "level": 22
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "special-attack": 40,
      "special-defense": 54,
      "speed": 55
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 24,
    "name": "Arbok",
    "evolutions": [],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special-attack": 65,
      "special-defense": 79,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 25,
    "name": "Pikachu",
    "evolutions": [
      {
        "id": 26,
        "level": 30
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 26,
    "name": "Raichu",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "special-attack": 90,
      "special-defense": 80,
      "speed": 110
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "evolutions": [
      {
        "id": 28,
        "level": 22
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "special-attack": 20,
      "special-defense": 30,
      "speed": 40
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 28,
    "name": "Sandslash",
    "evolutions": [],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "special-attack": 45,
      "special-defense": 55,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 29,
    "name": "Nidoran-f",
    "evolutions": [
      {
        "id": 30,
        "level": 16
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 41
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 30,
    "name": "Nidorina",
    "evolutions": [
      {
        "id": 31,
        "level": 30
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 56
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "evolutions": [],
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "special-attack": 75,
      "special-defense": 85,
      "speed": 76
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 32,
    "name": "Nidoran-m",
    "evolutions": [
      {
        "id": 33,
        "level": 16
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 33,
    "name": "Nidorino",
    "evolutions": [
      {
        "id": 34,
        "level": 30
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 34,
    "name": "Nidoking",
    "evolutions": [],
    "types": [
      "poison",
      "ground"
    ],
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 35,
    "name": "Clefairy",
    "evolutions": [
      {
        "id": 36,
        "level": 30
      }
    ],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "special-attack": 60,
      "special-defense": 65,
      "speed": 35
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 36,
    "name": "Clefable",
    "evolutions": [],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 37,
    "name": "Vulpix",
    "evolutions": [
      {
        "id": 38,
        "level": 30
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 65,
      "speed": 65
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 38,
    "name": "Ninetales",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "special-attack": 81,
      "special-defense": 100,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "evolutions": [
      {
        "id": 40,
        "level": 30
      }
    ],
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "special-attack": 45,
      "special-defense": 25,
      "speed": 20
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "evolutions": [],
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "special-attack": 85,
      "special-defense": 50,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 41,
    "name": "Zubat",
    "evolutions": [
      {
        "id": 42,
        "level": 22
      }
    ],
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special-attack": 30,
      "special-defense": 40,
      "speed": 55
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 42,
    "name": "Golbat",
    "evolutions": [
      {
        "id": 169,
        "level": 30
      }
    ],
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "special-attack": 65,
      "special-defense": 75,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 43,
    "name": "Oddish",
    "evolutions": [
      {
        "id": 44,
        "level": 21
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "special-attack": 75,
      "special-defense": 65,
      "speed": 30
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 44,
    "name": "Gloom",
    "evolutions": [
      {
        "id": 45,
        "level": 30
      },
      {
        "id": 182,
        "level": 30
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 45,
    "name": "Vileplume",
    "evolutions": [],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "special-attack": 110,
      "special-defense": 90,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 46,
    "name": "Paras",
    "evolutions": [
      {
        "id": 47,
        "level": 24
      }
    ],
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "special-attack": 45,
      "special-defense": 55,
      "speed": 25
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 47,
    "name": "Parasect",
    "evolutions": [],
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 80,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 48,
    "name": "Venonat",
    "evolutions": [
      {
        "id": 49,
        "level": 31
      }
    ],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 55,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 49,
    "name": "Venomoth",
    "evolutions": [],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "special-attack": 90,
      "special-defense": 75,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 50,
    "name": "Diglett",
    "evolutions": [
      {
        "id": 51,
        "level": 26
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "special-attack": 35,
      "special-defense": 45,
      "speed": 95
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "evolutions": [],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "special-attack": 50,
      "special-defense": 70,
      "speed": 120
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 52,
    "name": "Meowth",
    "evolutions": [
      {
        "id": 53,
        "level": 28
      },
      {
        "id": 863,
        "level": 28
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 90
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 53,
    "name": "Persian",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 115
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 54,
    "name": "Psyduck",
    "evolutions": [
      {
        "id": 55,
        "level": 33
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "special-attack": 65,
      "special-defense": 50,
      "speed": 55
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 55,
    "name": "Golduck",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "special-attack": 95,
      "special-defense": 80,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 56,
    "name": "Mankey",
    "evolutions": [
      {
        "id": 57,
        "level": 28
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "special-attack": 35,
      "special-defense": 45,
      "speed": 70
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 57,
    "name": "Primeape",
    "evolutions": [
      {
        "id": 979,
        "level": 30
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 58,
    "name": "Growlithe",
    "evolutions": [
      {
        "id": 59,
        "level": 30
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "special-attack": 70,
      "special-defense": 50,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 59,
    "name": "Arcanine",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 60,
    "name": "Poliwag",
    "evolutions": [
      {
        "id": 61,
        "level": 25
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 90
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "evolutions": [
      {
        "id": 62,
        "level": 30
      },
      {
        "id": 186,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "evolutions": [],
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "special-attack": 70,
      "special-defense": 90,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 63,
    "name": "Abra",
    "evolutions": [
      {
        "id": 64,
        "level": 16
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "special-attack": 105,
      "special-defense": 55,
      "speed": 90
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 64,
    "name": "Kadabra",
    "evolutions": [
      {
        "id": 65,
        "level": 30
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "special-attack": 120,
      "special-defense": 70,
      "speed": 105
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 65,
    "name": "Alakazam",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "special-attack": 135,
      "special-defense": 95,
      "speed": 120
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 66,
    "name": "Machop",
    "evolutions": [
      {
        "id": 67,
        "level": 28
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 67,
    "name": "Machoke",
    "evolutions": [
      {
        "id": 68,
        "level": 30
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "special-attack": 50,
      "special-defense": 60,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 68,
    "name": "Machamp",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "special-attack": 65,
      "special-defense": 85,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "evolutions": [
      {
        "id": 70,
        "level": 21
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "special-attack": 70,
      "special-defense": 30,
      "speed": 40
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "evolutions": [
      {
        "id": 71,
        "level": 30
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "special-attack": 85,
      "special-defense": 45,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 71,
    "name": "Victreebel",
    "evolutions": [],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 70,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 72,
    "name": "Tentacool",
    "evolutions": [
      {
        "id": 73,
        "level": 30
      }
    ],
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "special-attack": 50,
      "special-defense": 100,
      "speed": 70
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "evolutions": [],
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "special-attack": 80,
      "special-defense": 120,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 74,
    "name": "Geodude",
    "evolutions": [
      {
        "id": 75,
        "level": 25
      }
    ],
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 75,
    "name": "Graveler",
    "evolutions": [
      {
        "id": 76,
        "level": 30
      }
    ],
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "special-attack": 45,
      "special-defense": 45,
      "speed": 35
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 76,
    "name": "Golem",
    "evolutions": [],
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 77,
    "name": "Ponyta",
    "evolutions": [
      {
        "id": 78,
        "level": 40
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 90
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 78,
    "name": "Rapidash",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "special-attack": 80,
      "special-defense": 80,
      "speed": 105
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "evolutions": [
      {
        "id": 80,
        "level": 37
      },
      {
        "id": 199,
        "level": 30
      }
    ],
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 15
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 80,
    "name": "Slowbro",
    "evolutions": [],
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 81,
    "name": "Magnemite",
    "evolutions": [
      {
        "id": 82,
        "level": 30
      }
    ],
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "special-attack": 95,
      "special-defense": 55,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 82,
    "name": "Magneton",
    "evolutions": [
      {
        "id": 462,
        "level": 30
      }
    ],
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "special-attack": 120,
      "special-defense": 70,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 83,
    "name": "Farfetchd",
    "evolutions": [
      {
        "id": 865,
        "level": 30
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "special-attack": 58,
      "special-defense": 62,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 84,
    "name": "Doduo",
    "evolutions": [
      {
        "id": 85,
        "level": 31
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 75
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 85,
    "name": "Dodrio",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 110
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 86,
    "name": "Seel",
    "evolutions": [
      {
        "id": 87,
        "level": 34
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "special-attack": 45,
      "special-defense": 70,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 87,
    "name": "Dewgong",
    "evolutions": [],
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 95,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 88,
    "name": "Grimer",
    "evolutions": [
      {
        "id": 89,
        "level": 38
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 25
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 89,
    "name": "Muk",
    "evolutions": [],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "special-attack": 65,
      "special-defense": 100,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 90,
    "name": "Shellder",
    "evolutions": [
      {
        "id": 91,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "special-attack": 45,
      "special-defense": 25,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 91,
    "name": "Cloyster",
    "evolutions": [],
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "special-attack": 85,
      "special-defense": 45,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 92,
    "name": "Gastly",
    "evolutions": [
      {
        "id": 93,
        "level": 25
      }
    ],
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "special-attack": 100,
      "special-defense": 35,
      "speed": 80
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 93,
    "name": "Haunter",
    "evolutions": [
      {
        "id": 94,
        "level": 30
      }
    ],
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "special-attack": 115,
      "special-defense": 55,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 94,
    "name": "Gengar",
    "evolutions": [],
    "types": [
      "ghost",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "special-attack": 130,
      "special-defense": 75,
      "speed": 110
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 95,
    "name": "Onix",
    "evolutions": [
      {
        "id": 208,
        "level": 30
      }
    ],
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "special-attack": 30,
      "special-defense": 45,
      "speed": 70
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 96,
    "name": "Drowzee",
    "evolutions": [
      {
        "id": 97,
        "level": 26
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "special-attack": 43,
      "special-defense": 90,
      "speed": 42
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 97,
    "name": "Hypno",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "special-attack": 73,
      "special-defense": 115,
      "speed": 67
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 98,
    "name": "Krabby",
    "evolutions": [
      {
        "id": 99,
        "level": 28
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "special-attack": 25,
      "special-defense": 25,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 99,
    "name": "Kingler",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 75
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 100,
    "name": "Voltorb",
    "evolutions": [
      {
        "id": 101,
        "level": 30
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 100
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 101,
    "name": "Electrode",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "special-attack": 80,
      "special-defense": 80,
      "speed": 150
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "evolutions": [
      {
        "id": 103,
        "level": 30
      }
    ],
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 45,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "evolutions": [],
    "types": [
      "grass",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "special-attack": 125,
      "special-defense": 75,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 104,
    "name": "Cubone",
    "evolutions": [
      {
        "id": 105,
        "level": 28
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 105,
    "name": "Marowak",
    "evolutions": [],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "special-attack": 50,
      "special-defense": 80,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "special-attack": 35,
      "special-defense": 110,
      "speed": 87
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "special-attack": 35,
      "special-defense": 110,
      "speed": 76
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 108,
    "name": "Lickitung",
    "evolutions": [
      {
        "id": 463,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 30
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 109,
    "name": "Koffing",
    "evolutions": [
      {
        "id": 110,
        "level": 35
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "special-attack": 60,
      "special-defense": 45,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 110,
    "name": "Weezing",
    "evolutions": [],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "special-attack": 85,
      "special-defense": 70,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "evolutions": [
      {
        "id": 112,
        "level": 42
      }
    ],
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 25
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 112,
    "name": "Rhydon",
    "evolutions": [
      {
        "id": 464,
        "level": 30
      }
    ],
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "special-attack": 45,
      "special-defense": 45,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 113,
    "name": "Chansey",
    "evolutions": [
      {
        "id": 242,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "special-attack": 35,
      "special-defense": 105,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 114,
    "name": "Tangela",
    "evolutions": [
      {
        "id": 465,
        "level": 30
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "special-attack": 100,
      "special-defense": 40,
      "speed": 60
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "special-attack": 40,
      "special-defense": 80,
      "speed": 90
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 116,
    "name": "Horsea",
    "evolutions": [
      {
        "id": 117,
        "level": 32
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 25,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 117,
    "name": "Seadra",
    "evolutions": [
      {
        "id": 230,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "special-attack": 95,
      "special-defense": 45,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 118,
    "name": "Goldeen",
    "evolutions": [
      {
        "id": 119,
        "level": 33
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "special-attack": 35,
      "special-defense": 50,
      "speed": 63
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 119,
    "name": "Seaking",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "special-attack": 65,
      "special-defense": 80,
      "speed": 68
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 120,
    "name": "Staryu",
    "evolutions": [
      {
        "id": 121,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "special-attack": 70,
      "special-defense": 55,
      "speed": 85
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 121,
    "name": "Starmie",
    "evolutions": [],
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "special-attack": 100,
      "special-defense": 85,
      "speed": 115
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 122,
    "name": "Mr-mime",
    "evolutions": [
      {
        "id": 866,
        "level": 42
      }
    ],
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 120,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 123,
    "name": "Scyther",
    "evolutions": [
      {
        "id": 212,
        "level": 30
      },
      {
        "id": 900,
        "level": 30
      }
    ],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special-attack": 55,
      "special-defense": 80,
      "speed": 105
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 124,
    "name": "Jynx",
    "evolutions": [],
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "special-attack": 115,
      "special-defense": 95,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "evolutions": [
      {
        "id": 466,
        "level": 30
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "special-attack": 95,
      "special-defense": 85,
      "speed": 105
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 126,
    "name": "Magmar",
    "evolutions": [
      {
        "id": 467,
        "level": 30
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "special-attack": 100,
      "special-defense": 85,
      "speed": 93
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 127,
    "name": "Pinsir",
    "evolutions": [],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 70,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 128,
    "name": "Tauros",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "special-attack": 40,
      "special-defense": 70,
      "speed": 110
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 129,
    "name": "Magikarp",
    "evolutions": [
      {
        "id": 130,
        "level": 20
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "special-attack": 15,
      "special-defense": 20,
      "speed": 80
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 130,
    "name": "Gyarados",
    "evolutions": [],
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "special-attack": 60,
      "special-defense": 100,
      "speed": 81
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 131,
    "name": "Lapras",
    "evolutions": [],
    "types": [
      "water",
      "ice"
    ],
    "stats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "special-attack": 85,
      "special-defense": 95,
      "speed": 60
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 132,
    "name": "Ditto",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "special-attack": 48,
      "special-defense": 48,
      "speed": 48
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 133,
    "name": "Eevee",
    "evolutions": [
      {
        "id": 134,
        "level": 30
      },
      {
        "id": 135,
        "level": 30
      },
      {
        "id": 136,
        "level": 30
      },
      {
        "id": 196,
        "level": 30
      },
      {
        "id": 197,
        "level": 30
      },
      {
        "id": 470,
        "level": 30
      },
      {
        "id": 471,
        "level": 30
      },
      {
        "id": 700,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "special-attack": 45,
      "special-defense": 65,
      "speed": 55
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 135,
    "name": "Jolteon",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 130
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 136,
    "name": "Flareon",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special-attack": 95,
      "special-defense": 110,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 137,
    "name": "Porygon",
    "evolutions": [
      {
        "id": 233,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 138,
    "name": "Omanyte",
    "evolutions": [
      {
        "id": 139,
        "level": 40
      }
    ],
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "special-attack": 90,
      "special-defense": 55,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 139,
    "name": "Omastar",
    "evolutions": [],
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "special-attack": 115,
      "special-defense": 70,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 140,
    "name": "Kabuto",
    "evolutions": [
      {
        "id": 141,
        "level": 40
      }
    ],
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "special-attack": 55,
      "special-defense": 45,
      "speed": 55
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 141,
    "name": "Kabutops",
    "evolutions": [],
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "evolutions": [],
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 130
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 143,
    "name": "Snorlax",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "special-attack": 65,
      "special-defense": 110,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 144,
    "name": "Articuno",
    "evolutions": [],
    "types": [
      "ice",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "special-attack": 95,
      "special-defense": 125,
      "speed": 85
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 145,
    "name": "Zapdos",
    "evolutions": [],
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "special-attack": 125,
      "special-defense": 90,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 146,
    "name": "Moltres",
    "evolutions": [],
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "special-attack": 125,
      "special-defense": 85,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 147,
    "name": "Dratini",
    "evolutions": [
      {
        "id": 148,
        "level": 30
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 148,
    "name": "Dragonair",
    "evolutions": [
      {
        "id": 149,
        "level": 55
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 149,
    "name": "Dragonite",
    "evolutions": [],
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "special-attack": 154,
      "special-defense": 90,
      "speed": 130
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 151,
    "name": "Mew",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 152,
    "name": "Chikorita",
    "evolutions": [
      {
        "id": 153,
        "level": 16
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "special-attack": 49,
      "special-defense": 65,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 153,
    "name": "Bayleef",
    "evolutions": [
      {
        "id": 154,
        "level": 32
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "special-attack": 63,
      "special-defense": 80,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 154,
    "name": "Meganium",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "special-attack": 83,
      "special-defense": 100,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 155,
    "name": "Cyndaquil",
    "evolutions": [
      {
        "id": 156,
        "level": 14
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special-attack": 60,
      "special-defense": 50,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 156,
    "name": "Quilava",
    "evolutions": [
      {
        "id": 157,
        "level": 36
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "special-attack": 80,
      "special-defense": 65,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 157,
    "name": "Typhlosion",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special-attack": 109,
      "special-defense": 85,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 158,
    "name": "Totodile",
    "evolutions": [
      {
        "id": 159,
        "level": 18
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "special-attack": 44,
      "special-defense": 48,
      "speed": 43
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 159,
    "name": "Croconaw",
    "evolutions": [
      {
        "id": 160,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "special-attack": 59,
      "special-defense": 63,
      "speed": 58
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "special-attack": 79,
      "special-defense": 83,
      "speed": 78
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 161,
    "name": "Sentret",
    "evolutions": [
      {
        "id": 162,
        "level": 15
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "special-attack": 35,
      "special-defense": 45,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 162,
    "name": "Furret",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "special-attack": 45,
      "special-defense": 55,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 163,
    "name": "Hoothoot",
    "evolutions": [
      {
        "id": 164,
        "level": 20
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "special-attack": 36,
      "special-defense": 56,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 164,
    "name": "Noctowl",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "special-attack": 86,
      "special-defense": 96,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 165,
    "name": "Ledyba",
    "evolutions": [
      {
        "id": 166,
        "level": 18
      }
    ],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "special-attack": 40,
      "special-defense": 80,
      "speed": 55
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 166,
    "name": "Ledian",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "special-attack": 55,
      "special-defense": 110,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 167,
    "name": "Spinarak",
    "evolutions": [
      {
        "id": 168,
        "level": 22
      }
    ],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 168,
    "name": "Ariados",
    "evolutions": [],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 169,
    "name": "Crobat",
    "evolutions": [],
    "types": [
      "poison",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 130
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 170,
    "name": "Chinchou",
    "evolutions": [
      {
        "id": 171,
        "level": 27
      }
    ],
    "types": [
      "water",
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "special-attack": 56,
      "special-defense": 56,
      "speed": 67
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 171,
    "name": "Lanturn",
    "evolutions": [],
    "types": [
      "water",
      "electric"
    ],
    "stats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "special-attack": 76,
      "special-defense": 76,
      "speed": 67
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 172,
    "name": "Pichu",
    "evolutions": [
      {
        "id": 25,
        "level": 30
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 173,
    "name": "Cleffa",
    "evolutions": [
      {
        "id": 35,
        "level": 30
      }
    ],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "special-attack": 45,
      "special-defense": 55,
      "speed": 15
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 174,
    "name": "Igglybuff",
    "evolutions": [
      {
        "id": 39,
        "level": 30
      }
    ],
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "special-attack": 40,
      "special-defense": 20,
      "speed": 15
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 175,
    "name": "Togepi",
    "evolutions": [
      {
        "id": 176,
        "level": 30
      }
    ],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "special-attack": 40,
      "special-defense": 65,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 176,
    "name": "Togetic",
    "evolutions": [
      {
        "id": 468,
        "level": 30
      }
    ],
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "special-attack": 80,
      "special-defense": 105,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 177,
    "name": "Natu",
    "evolutions": [
      {
        "id": 178,
        "level": 25
      }
    ],
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "special-attack": 70,
      "special-defense": 45,
      "speed": 70
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 178,
    "name": "Xatu",
    "evolutions": [],
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "special-attack": 95,
      "special-defense": 70,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 179,
    "name": "Mareep",
    "evolutions": [
      {
        "id": 180,
        "level": 15
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "special-attack": 65,
      "special-defense": 45,
      "speed": 35
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 180,
    "name": "Flaaffy",
    "evolutions": [
      {
        "id": 181,
        "level": 30
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "special-attack": 80,
      "special-defense": 60,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 181,
    "name": "Ampharos",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "special-attack": 115,
      "special-defense": 90,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 182,
    "name": "Bellossom",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "special-attack": 90,
      "special-defense": 100,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 183,
    "name": "Marill",
    "evolutions": [
      {
        "id": 184,
        "level": 18
      }
    ],
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "special-attack": 20,
      "special-defense": 50,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 184,
    "name": "Azumarill",
    "evolutions": [],
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 80,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 185,
    "name": "Sudowoodo",
    "evolutions": [],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "special-attack": 30,
      "special-defense": 65,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 186,
    "name": "Politoed",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "special-attack": 90,
      "special-defense": 100,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 187,
    "name": "Hoppip",
    "evolutions": [
      {
        "id": 188,
        "level": 18
      }
    ],
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "special-attack": 35,
      "special-defense": 55,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 188,
    "name": "Skiploom",
    "evolutions": [
      {
        "id": 189,
        "level": 27
      }
    ],
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "special-attack": 45,
      "special-defense": 65,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 189,
    "name": "Jumpluff",
    "evolutions": [],
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "special-attack": 55,
      "special-defense": 95,
      "speed": 110
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 190,
    "name": "Aipom",
    "evolutions": [
      {
        "id": 424,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "special-attack": 40,
      "special-defense": 55,
      "speed": 85
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 191,
    "name": "Sunkern",
    "evolutions": [
      {
        "id": 192,
        "level": 30
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 192,
    "name": "Sunflora",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "special-attack": 105,
      "special-defense": 85,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 193,
    "name": "Yanma",
    "evolutions": [
      {
        "id": 469,
        "level": 30
      }
    ],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "special-attack": 75,
      "special-defense": 45,
      "speed": 95
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 194,
    "name": "Wooper",
    "evolutions": [
      {
        "id": 195,
        "level": 20
      },
      {
        "id": 980,
        "level": 20
      }
    ],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "special-attack": 25,
      "special-defense": 25,
      "speed": 15
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 195,
    "name": "Quagsire",
    "evolutions": [],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 35
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 196,
    "name": "Espeon",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special-attack": 130,
      "special-defense": 95,
      "speed": 110
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 197,
    "name": "Umbreon",
    "evolutions": [],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "special-attack": 60,
      "special-defense": 130,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 198,
    "name": "Murkrow",
    "evolutions": [
      {
        "id": 430,
        "level": 30
      }
    ],
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "special-attack": 85,
      "special-defense": 42,
      "speed": 91
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 199,
    "name": "Slowking",
    "evolutions": [],
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 110,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 200,
    "name": "Misdreavus",
    "evolutions": [
      {
        "id": 429,
        "level": 30
      }
    ],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special-attack": 85,
      "special-defense": 85,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 201,
    "name": "Unown",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "special-attack": 72,
      "special-defense": 48,
      "speed": 48
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 202,
    "name": "Wobbuffet",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "special-attack": 33,
      "special-defense": 58,
      "speed": 33
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 203,
    "name": "Girafarig",
    "evolutions": [
      {
        "id": 981,
        "level": 30
      }
    ],
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "special-attack": 90,
      "special-defense": 65,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 204,
    "name": "Pineco",
    "evolutions": [
      {
        "id": 205,
        "level": 31
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 15
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 205,
    "name": "Forretress",
    "evolutions": [],
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 206,
    "name": "Dunsparce",
    "evolutions": [
      {
        "id": 982,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 45
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 207,
    "name": "Gligar",
    "evolutions": [
      {
        "id": 472,
        "level": 30
      }
    ],
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "special-attack": 35,
      "special-defense": 65,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 208,
    "name": "Steelix",
    "evolutions": [],
    "types": [
      "steel",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 209,
    "name": "Snubbull",
    "evolutions": [
      {
        "id": 210,
        "level": 23
      }
    ],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 210,
    "name": "Granbull",
    "evolutions": [],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 211,
    "name": "Qwilfish",
    "evolutions": [
      {
        "id": 904,
        "level": 30
      }
    ],
    "types": [
      "water",
      "poison"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 212,
    "name": "Scizor",
    "evolutions": [],
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 80,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 213,
    "name": "Shuckle",
    "evolutions": [],
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "special-attack": 10,
      "special-defense": 230,
      "speed": 5
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 214,
    "name": "Heracross",
    "evolutions": [],
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "special-attack": 40,
      "special-defense": 95,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 215,
    "name": "Sneasel",
    "evolutions": [
      {
        "id": 461,
        "level": 30
      },
      {
        "id": 903,
        "level": 30
      }
    ],
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "special-attack": 35,
      "special-defense": 75,
      "speed": 115
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 216,
    "name": "Teddiursa",
    "evolutions": [
      {
        "id": 217,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 217,
    "name": "Ursaring",
    "evolutions": [
      {
        "id": 901,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "special-attack": 75,
      "special-defense": 75,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 218,
    "name": "Slugma",
    "evolutions": [
      {
        "id": 219,
        "level": 38
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "special-attack": 70,
      "special-defense": 40,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 219,
    "name": "Magcargo",
    "evolutions": [],
    "types": [
      "fire",
      "rock"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "special-attack": 90,
      "special-defense": 80,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 220,
    "name": "Swinub",
    "evolutions": [
      {
        "id": 221,
        "level": 33
      }
    ],
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 221,
    "name": "Piloswine",
    "evolutions": [
      {
        "id": 473,
        "level": 30
      }
    ],
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 222,
    "name": "Corsola",
    "evolutions": [
      {
        "id": 864,
        "level": 38
      }
    ],
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "special-attack": 65,
      "special-defense": 95,
      "speed": 35
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 223,
    "name": "Remoraid",
    "evolutions": [
      {
        "id": 224,
        "level": 25
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "special-attack": 65,
      "special-defense": 35,
      "speed": 65
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 224,
    "name": "Octillery",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "special-attack": 105,
      "special-defense": 75,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 225,
    "name": "Delibird",
    "evolutions": [],
    "types": [
      "ice",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "special-attack": 65,
      "special-defense": 45,
      "speed": 75
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 226,
    "name": "Mantine",
    "evolutions": [],
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "special-attack": 80,
      "special-defense": 140,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 227,
    "name": "Skarmory",
    "evolutions": [],
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "special-attack": 40,
      "special-defense": 70,
      "speed": 70
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 228,
    "name": "Houndour",
    "evolutions": [
      {
        "id": 229,
        "level": 24
      }
    ],
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "special-attack": 80,
      "special-defense": 50,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 229,
    "name": "Houndoom",
    "evolutions": [],
    "types": [
      "dark",
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "special-attack": 110,
      "special-defense": 80,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 230,
    "name": "Kingdra",
    "evolutions": [],
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "special-attack": 95,
      "special-defense": 95,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 231,
    "name": "Phanpy",
    "evolutions": [
      {
        "id": 232,
        "level": 25
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 232,
    "name": "Donphan",
    "evolutions": [],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 233,
    "name": "Porygon2",
    "evolutions": [
      {
        "id": 474,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "special-attack": 105,
      "special-defense": 95,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 234,
    "name": "Stantler",
    "evolutions": [
      {
        "id": 899,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "special-attack": 85,
      "special-defense": 65,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 235,
    "name": "Smeargle",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "special-attack": 20,
      "special-defense": 45,
      "speed": 75
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 236,
    "name": "Tyrogue",
    "evolutions": [
      {
        "id": 106,
        "level": 20
      },
      {
        "id": 107,
        "level": 20
      },
      {
        "id": 237,
        "level": 20
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 35
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 237,
    "name": "Hitmontop",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "special-attack": 35,
      "special-defense": 110,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 238,
    "name": "Smoochum",
    "evolutions": [
      {
        "id": 124,
        "level": 30
      }
    ],
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "special-attack": 85,
      "special-defense": 65,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 239,
    "name": "Elekid",
    "evolutions": [
      {
        "id": 125,
        "level": 30
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "special-attack": 65,
      "special-defense": 55,
      "speed": 95
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 240,
    "name": "Magby",
    "evolutions": [
      {
        "id": 126,
        "level": 30
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "special-attack": 70,
      "special-defense": 55,
      "speed": 83
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 241,
    "name": "Miltank",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "special-attack": 40,
      "special-defense": 70,
      "speed": 100
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 242,
    "name": "Blissey",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "special-attack": 75,
      "special-defense": 135,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 243,
    "name": "Raikou",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "special-attack": 115,
      "special-defense": 100,
      "speed": 115
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 244,
    "name": "Entei",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "special-attack": 90,
      "special-defense": 75,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 245,
    "name": "Suicune",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "special-attack": 90,
      "special-defense": 115,
      "speed": 85
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 246,
    "name": "Larvitar",
    "evolutions": [
      {
        "id": 247,
        "level": 30
      }
    ],
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "special-attack": 45,
      "special-defense": 50,
      "speed": 41
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 247,
    "name": "Pupitar",
    "evolutions": [
      {
        "id": 248,
        "level": 55
      }
    ],
    "types": [
      "rock",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 51
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "evolutions": [],
    "types": [
      "rock",
      "dark"
    ],
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "special-attack": 95,
      "special-defense": 100,
      "speed": 61
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 249,
    "name": "Lugia",
    "evolutions": [],
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "special-attack": 90,
      "special-defense": 154,
      "speed": 110
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 250,
    "name": "Ho-oh",
    "evolutions": [],
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "special-attack": 110,
      "special-defense": 154,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 251,
    "name": "Celebi",
    "evolutions": [],
    "types": [
      "psychic",
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 252,
    "name": "Treecko",
    "evolutions": [
      {
        "id": 253,
        "level": 16
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special-attack": 65,
      "special-defense": 55,
      "speed": 70
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 253,
    "name": "Grovyle",
    "evolutions": [
      {
        "id": 254,
        "level": 36
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "special-attack": 85,
      "special-defense": 65,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 254,
    "name": "Sceptile",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special-attack": 105,
      "special-defense": 85,
      "speed": 120
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 255,
    "name": "Torchic",
    "evolutions": [
      {
        "id": 256,
        "level": 16
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "special-attack": 70,
      "special-defense": 50,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 256,
    "name": "Combusken",
    "evolutions": [
      {
        "id": 257,
        "level": 36
      }
    ],
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "special-attack": 85,
      "special-defense": 60,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 257,
    "name": "Blaziken",
    "evolutions": [],
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 70,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 258,
    "name": "Mudkip",
    "evolutions": [
      {
        "id": 259,
        "level": 16
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 259,
    "name": "Marshtomp",
    "evolutions": [
      {
        "id": 260,
        "level": 36
      }
    ],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 260,
    "name": "Swampert",
    "evolutions": [],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "special-attack": 85,
      "special-defense": 90,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 261,
    "name": "Poochyena",
    "evolutions": [
      {
        "id": 262,
        "level": 18
      }
    ],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 35
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 262,
    "name": "Mightyena",
    "evolutions": [],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 263,
    "name": "Zigzagoon",
    "evolutions": [
      {
        "id": 264,
        "level": 20
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "special-attack": 30,
      "special-defense": 41,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 264,
    "name": "Linoone",
    "evolutions": [
      {
        "id": 862,
        "level": 35
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "special-attack": 50,
      "special-defense": 61,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 265,
    "name": "Wurmple",
    "evolutions": [
      {
        "id": 266,
        "level": 7
      },
      {
        "id": 268,
        "level": 7
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "special-attack": 20,
      "special-defense": 30,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 266,
    "name": "Silcoon",
    "evolutions": [
      {
        "id": 267,
        "level": 10
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "special-attack": 25,
      "special-defense": 25,
      "speed": 15
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 267,
    "name": "Beautifly",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "special-attack": 100,
      "special-defense": 50,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 268,
    "name": "Cascoon",
    "evolutions": [
      {
        "id": 269,
        "level": 10
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "special-attack": 25,
      "special-defense": 25,
      "speed": 15
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 269,
    "name": "Dustox",
    "evolutions": [],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "special-attack": 50,
      "special-defense": 90,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 270,
    "name": "Lotad",
    "evolutions": [
      {
        "id": 271,
        "level": 14
      }
    ],
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 271,
    "name": "Lombre",
    "evolutions": [
      {
        "id": 272,
        "level": 30
      }
    ],
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 272,
    "name": "Ludicolo",
    "evolutions": [],
    "types": [
      "water",
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "special-attack": 90,
      "special-defense": 100,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 273,
    "name": "Seedot",
    "evolutions": [
      {
        "id": 274,
        "level": 14
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 274,
    "name": "Nuzleaf",
    "evolutions": [
      {
        "id": 275,
        "level": 30
      }
    ],
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "special-attack": 60,
      "special-defense": 40,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 275,
    "name": "Shiftry",
    "evolutions": [],
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "special-attack": 90,
      "special-defense": 60,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 276,
    "name": "Taillow",
    "evolutions": [
      {
        "id": 277,
        "level": 22
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 85
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 277,
    "name": "Swellow",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 50,
      "speed": 125
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 278,
    "name": "Wingull",
    "evolutions": [
      {
        "id": 279,
        "level": 25
      }
    ],
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "special-attack": 55,
      "special-defense": 30,
      "speed": 85
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 279,
    "name": "Pelipper",
    "evolutions": [],
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "special-attack": 95,
      "special-defense": 70,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 280,
    "name": "Ralts",
    "evolutions": [
      {
        "id": 281,
        "level": 20
      }
    ],
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "special-attack": 45,
      "special-defense": 35,
      "speed": 40
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 281,
    "name": "Kirlia",
    "evolutions": [
      {
        "id": 282,
        "level": 30
      },
      {
        "id": 475,
        "level": 30
      }
    ],
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "special-attack": 65,
      "special-defense": 55,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "evolutions": [],
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "special-attack": 125,
      "special-defense": 115,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 283,
    "name": "Surskit",
    "evolutions": [
      {
        "id": 284,
        "level": 22
      }
    ],
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "special-attack": 50,
      "special-defense": 52,
      "speed": 65
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 284,
    "name": "Masquerain",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "special-attack": 100,
      "special-defense": 82,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 285,
    "name": "Shroomish",
    "evolutions": [
      {
        "id": 286,
        "level": 23
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "special-attack": 40,
      "special-defense": 60,
      "speed": 35
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 286,
    "name": "Breloom",
    "evolutions": [],
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 287,
    "name": "Slakoth",
    "evolutions": [
      {
        "id": 288,
        "level": 18
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 288,
    "name": "Vigoroth",
    "evolutions": [
      {
        "id": 289,
        "level": 36
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 289,
    "name": "Slaking",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "special-attack": 95,
      "special-defense": 65,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 290,
    "name": "Nincada",
    "evolutions": [
      {
        "id": 291,
        "level": 20
      },
      {
        "id": 292,
        "level": 30
      }
    ],
    "types": [
      "bug",
      "ground"
    ],
    "stats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 40
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 291,
    "name": "Ninjask",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 160
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 292,
    "name": "Shedinja",
    "evolutions": [],
    "types": [
      "bug",
      "ghost"
    ],
    "stats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 293,
    "name": "Whismur",
    "evolutions": [
      {
        "id": 294,
        "level": 20
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "special-attack": 51,
      "special-defense": 23,
      "speed": 28
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 294,
    "name": "Loudred",
    "evolutions": [
      {
        "id": 295,
        "level": 40
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "special-attack": 71,
      "special-defense": 43,
      "speed": 48
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 295,
    "name": "Exploud",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "special-attack": 91,
      "special-defense": 73,
      "speed": 68
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 296,
    "name": "Makuhita",
    "evolutions": [
      {
        "id": 297,
        "level": 24
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "special-attack": 20,
      "special-defense": 30,
      "speed": 25
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 297,
    "name": "Hariyama",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "special-attack": 40,
      "special-defense": 60,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 298,
    "name": "Azurill",
    "evolutions": [
      {
        "id": 183,
        "level": 30
      }
    ],
    "types": [
      "normal",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "special-attack": 20,
      "special-defense": 40,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 299,
    "name": "Nosepass",
    "evolutions": [
      {
        "id": 476,
        "level": 30
      }
    ],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "special-attack": 45,
      "special-defense": 90,
      "speed": 30
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 300,
    "name": "Skitty",
    "evolutions": [
      {
        "id": 301,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 301,
    "name": "Delcatty",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 302,
    "name": "Sableye",
    "evolutions": [],
    "types": [
      "dark",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 303,
    "name": "Mawile",
    "evolutions": [],
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 304,
    "name": "Aron",
    "evolutions": [
      {
        "id": 305,
        "level": 32
      }
    ],
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 30
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 305,
    "name": "Lairon",
    "evolutions": [
      {
        "id": 306,
        "level": 42
      }
    ],
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 306,
    "name": "Aggron",
    "evolutions": [],
    "types": [
      "steel",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 307,
    "name": "Meditite",
    "evolutions": [
      {
        "id": 308,
        "level": 37
      }
    ],
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "special-attack": 40,
      "special-defense": 55,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 308,
    "name": "Medicham",
    "evolutions": [],
    "types": [
      "fighting",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 309,
    "name": "Electrike",
    "evolutions": [
      {
        "id": 310,
        "level": 26
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special-attack": 65,
      "special-defense": 40,
      "speed": 65
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 310,
    "name": "Manectric",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "special-attack": 105,
      "special-defense": 60,
      "speed": 105
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 311,
    "name": "Plusle",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 95
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 312,
    "name": "Minun",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "special-attack": 75,
      "special-defense": 85,
      "speed": 95
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 313,
    "name": "Volbeat",
    "evolutions": [],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "special-attack": 47,
      "special-defense": 85,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 314,
    "name": "Illumise",
    "evolutions": [],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "special-attack": 73,
      "special-defense": 85,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 315,
    "name": "Roselia",
    "evolutions": [
      {
        "id": 407,
        "level": 30
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 316,
    "name": "Gulpin",
    "evolutions": [
      {
        "id": 317,
        "level": 26
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "special-attack": 43,
      "special-defense": 53,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 317,
    "name": "Swalot",
    "evolutions": [],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "special-attack": 73,
      "special-defense": 83,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 318,
    "name": "Carvanha",
    "evolutions": [
      {
        "id": 319,
        "level": 30
      }
    ],
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "special-attack": 65,
      "special-defense": 20,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 319,
    "name": "Sharpedo",
    "evolutions": [],
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "special-attack": 95,
      "special-defense": 40,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 320,
    "name": "Wailmer",
    "evolutions": [
      {
        "id": 321,
        "level": 40
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "special-attack": 70,
      "special-defense": 35,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 321,
    "name": "Wailord",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "special-attack": 90,
      "special-defense": 45,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 322,
    "name": "Numel",
    "evolutions": [
      {
        "id": 323,
        "level": 33
      }
    ],
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "special-attack": 65,
      "special-defense": 45,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 323,
    "name": "Camerupt",
    "evolutions": [],
    "types": [
      "fire",
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special-attack": 105,
      "special-defense": 75,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 324,
    "name": "Torkoal",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "special-attack": 85,
      "special-defense": 70,
      "speed": 20
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 325,
    "name": "Spoink",
    "evolutions": [
      {
        "id": 326,
        "level": 32
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 326,
    "name": "Grumpig",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "special-attack": 90,
      "special-defense": 110,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 327,
    "name": "Spinda",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 328,
    "name": "Trapinch",
    "evolutions": [
      {
        "id": 329,
        "level": 35
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "special-attack": 45,
      "special-defense": 45,
      "speed": 10
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 329,
    "name": "Vibrava",
    "evolutions": [
      {
        "id": 330,
        "level": 45
      }
    ],
    "types": [
      "ground",
      "dragon"
    ],
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 330,
    "name": "Flygon",
    "evolutions": [],
    "types": [
      "ground",
      "dragon"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "special-attack": 80,
      "special-defense": 80,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 331,
    "name": "Cacnea",
    "evolutions": [
      {
        "id": 332,
        "level": 32
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "special-attack": 85,
      "special-defense": 40,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 332,
    "name": "Cacturne",
    "evolutions": [],
    "types": [
      "grass",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "special-attack": 115,
      "special-defense": 60,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 333,
    "name": "Swablu",
    "evolutions": [
      {
        "id": 334,
        "level": 35
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "special-attack": 40,
      "special-defense": 75,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 334,
    "name": "Altaria",
    "evolutions": [],
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "special-attack": 70,
      "special-defense": 105,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 335,
    "name": "Zangoose",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 90
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 336,
    "name": "Seviper",
    "evolutions": [],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "special-attack": 100,
      "special-defense": 60,
      "speed": 65
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 337,
    "name": "Lunatone",
    "evolutions": [],
    "types": [
      "rock",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "special-attack": 95,
      "special-defense": 85,
      "speed": 70
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 338,
    "name": "Solrock",
    "evolutions": [],
    "types": [
      "rock",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 70
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 339,
    "name": "Barboach",
    "evolutions": [
      {
        "id": 340,
        "level": 30
      }
    ],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "special-attack": 46,
      "special-defense": 41,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 340,
    "name": "Whiscash",
    "evolutions": [],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "special-attack": 76,
      "special-defense": 71,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 341,
    "name": "Corphish",
    "evolutions": [
      {
        "id": 342,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "special-attack": 50,
      "special-defense": 35,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 342,
    "name": "Crawdaunt",
    "evolutions": [],
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "special-attack": 90,
      "special-defense": 55,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 343,
    "name": "Baltoy",
    "evolutions": [
      {
        "id": 344,
        "level": 36
      }
    ],
    "types": [
      "ground",
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "special-attack": 40,
      "special-defense": 70,
      "speed": 55
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 344,
    "name": "Claydol",
    "evolutions": [],
    "types": [
      "ground",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "special-attack": 70,
      "special-defense": 120,
      "speed": 75
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 345,
    "name": "Lileep",
    "evolutions": [
      {
        "id": 346,
        "level": 40
      }
    ],
    "types": [
      "rock",
      "grass"
    ],
    "stats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "special-attack": 61,
      "special-defense": 87,
      "speed": 23
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 346,
    "name": "Cradily",
    "evolutions": [],
    "types": [
      "rock",
      "grass"
    ],
    "stats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "special-attack": 81,
      "special-defense": 107,
      "speed": 43
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 347,
    "name": "Anorith",
    "evolutions": [
      {
        "id": 348,
        "level": 40
      }
    ],
    "types": [
      "rock",
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 75
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 348,
    "name": "Armaldo",
    "evolutions": [],
    "types": [
      "rock",
      "bug"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 349,
    "name": "Feebas",
    "evolutions": [
      {
        "id": 350,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "special-attack": 10,
      "special-defense": 55,
      "speed": 80
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 350,
    "name": "Milotic",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "special-attack": 100,
      "special-defense": 125,
      "speed": 81
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 351,
    "name": "Castform",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 70
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 352,
    "name": "Kecleon",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "special-attack": 60,
      "special-defense": 120,
      "speed": 40
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 353,
    "name": "Shuppet",
    "evolutions": [
      {
        "id": 354,
        "level": 37
      }
    ],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "special-attack": 63,
      "special-defense": 33,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 354,
    "name": "Banette",
    "evolutions": [],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "special-attack": 83,
      "special-defense": 63,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 355,
    "name": "Duskull",
    "evolutions": [
      {
        "id": 356,
        "level": 37
      }
    ],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "special-attack": 30,
      "special-defense": 90,
      "speed": 25
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 356,
    "name": "Dusclops",
    "evolutions": [
      {
        "id": 477,
        "level": 30
      }
    ],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "special-attack": 60,
      "special-defense": 130,
      "speed": 25
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 357,
    "name": "Tropius",
    "evolutions": [],
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "special-attack": 72,
      "special-defense": 87,
      "speed": 51
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 358,
    "name": "Chimecho",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 359,
    "name": "Absol",
    "evolutions": [],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 60,
      "speed": 75
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 360,
    "name": "Wynaut",
    "evolutions": [
      {
        "id": 202,
        "level": 15
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "special-attack": 23,
      "special-defense": 48,
      "speed": 23
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 361,
    "name": "Snorunt",
    "evolutions": [
      {
        "id": 362,
        "level": 42
      },
      {
        "id": 478,
        "level": 30
      }
    ],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 362,
    "name": "Glalie",
    "evolutions": [],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special-attack": 80,
      "special-defense": 80,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 363,
    "name": "Spheal",
    "evolutions": [
      {
        "id": 364,
        "level": 32
      }
    ],
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "special-attack": 55,
      "special-defense": 50,
      "speed": 25
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 364,
    "name": "Sealeo",
    "evolutions": [
      {
        "id": 365,
        "level": 44
      }
    ],
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "special-attack": 75,
      "special-defense": 70,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 365,
    "name": "Walrein",
    "evolutions": [],
    "types": [
      "ice",
      "water"
    ],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 366,
    "name": "Clamperl",
    "evolutions": [
      {
        "id": 367,
        "level": 30
      },
      {
        "id": 368,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "special-attack": 74,
      "special-defense": 55,
      "speed": 32
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 367,
    "name": "Huntail",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "special-attack": 94,
      "special-defense": 75,
      "speed": 52
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 368,
    "name": "Gorebyss",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "special-attack": 114,
      "special-defense": 75,
      "speed": 52
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 369,
    "name": "Relicanth",
    "evolutions": [],
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "special-attack": 45,
      "special-defense": 65,
      "speed": 55
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 370,
    "name": "Luvdisc",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "special-attack": 40,
      "special-defense": 65,
      "speed": 97
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 371,
    "name": "Bagon",
    "evolutions": [
      {
        "id": 372,
        "level": 30
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "special-attack": 40,
      "special-defense": 30,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 372,
    "name": "Shelgon",
    "evolutions": [
      {
        "id": 373,
        "level": 50
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "special-attack": 60,
      "special-defense": 50,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 373,
    "name": "Salamence",
    "evolutions": [],
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "special-attack": 110,
      "special-defense": 80,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 374,
    "name": "Beldum",
    "evolutions": [
      {
        "id": 375,
        "level": 20
      }
    ],
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "special-attack": 35,
      "special-defense": 60,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 375,
    "name": "Metang",
    "evolutions": [
      {
        "id": 376,
        "level": 45
      }
    ],
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 80,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 376,
    "name": "Metagross",
    "evolutions": [],
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "special-attack": 95,
      "special-defense": 90,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 377,
    "name": "Regirock",
    "evolutions": [],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "special-attack": 50,
      "special-defense": 100,
      "speed": 50
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 378,
    "name": "Regice",
    "evolutions": [],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "special-attack": 100,
      "special-defense": 200,
      "speed": 50
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 379,
    "name": "Registeel",
    "evolutions": [],
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "special-attack": 75,
      "special-defense": 150,
      "speed": 50
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 380,
    "name": "Latias",
    "evolutions": [],
    "types": [
      "dragon",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "special-attack": 110,
      "special-defense": 130,
      "speed": 110
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 381,
    "name": "Latios",
    "evolutions": [],
    "types": [
      "dragon",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "special-attack": 130,
      "special-defense": 110,
      "speed": 110
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 382,
    "name": "Kyogre",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "special-attack": 150,
      "special-defense": 140,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 383,
    "name": "Groudon",
    "evolutions": [],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "special-attack": 100,
      "special-defense": 90,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 384,
    "name": "Rayquaza",
    "evolutions": [],
    "types": [
      "dragon",
      "flying"
    ],
    "stats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "special-attack": 150,
      "special-defense": 90,
      "speed": 95
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 385,
    "name": "Jirachi",
    "evolutions": [],
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 386,
    "name": "Deoxys",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "special-attack": 150,
      "special-defense": 50,
      "speed": 150
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 387,
    "name": "Turtwig",
    "evolutions": [
      {
        "id": 388,
        "level": 18
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 55,
      "attack": 68,
      "defense": 64,
      "special-attack": 45,
      "special-defense": 55,
      "speed": 31
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 388,
    "name": "Grotle",
    "evolutions": [
      {
        "id": 389,
        "level": 32
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 89,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 36
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 389,
    "name": "Torterra",
    "evolutions": [],
    "types": [
      "grass",
      "ground"
    ],
    "stats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "special-attack": 75,
      "special-defense": 85,
      "speed": 56
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 390,
    "name": "Chimchar",
    "evolutions": [
      {
        "id": 391,
        "level": 14
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 44,
      "attack": 58,
      "defense": 44,
      "special-attack": 58,
      "special-defense": 44,
      "speed": 61
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 391,
    "name": "Monferno",
    "evolutions": [
      {
        "id": 392,
        "level": 36
      }
    ],
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 64,
      "attack": 78,
      "defense": 52,
      "special-attack": 78,
      "special-defense": 52,
      "speed": 81
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 392,
    "name": "Infernape",
    "evolutions": [],
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "special-attack": 104,
      "special-defense": 71,
      "speed": 108
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 393,
    "name": "Piplup",
    "evolutions": [
      {
        "id": 394,
        "level": 16
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 53,
      "attack": 51,
      "defense": 53,
      "special-attack": 61,
      "special-defense": 56,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 394,
    "name": "Prinplup",
    "evolutions": [
      {
        "id": 395,
        "level": 36
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 64,
      "attack": 66,
      "defense": 68,
      "special-attack": 81,
      "special-defense": 76,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 395,
    "name": "Empoleon",
    "evolutions": [],
    "types": [
      "water",
      "steel"
    ],
    "stats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "special-attack": 111,
      "special-defense": 101,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 396,
    "name": "Starly",
    "evolutions": [
      {
        "id": 397,
        "level": 14
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 397,
    "name": "Staravia",
    "evolutions": [
      {
        "id": 398,
        "level": 34
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 398,
    "name": "Staraptor",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "special-attack": 50,
      "special-defense": 60,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 399,
    "name": "Bidoof",
    "evolutions": [
      {
        "id": 400,
        "level": 15
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 40,
      "special-attack": 35,
      "special-defense": 40,
      "speed": 31
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 400,
    "name": "Bibarel",
    "evolutions": [],
    "types": [
      "normal",
      "water"
    ],
    "stats": {
      "hp": 79,
      "attack": 85,
      "defense": 60,
      "special-attack": 55,
      "special-defense": 60,
      "speed": 71
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 401,
    "name": "Kricketot",
    "evolutions": [
      {
        "id": 402,
        "level": 10
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 37,
      "attack": 25,
      "defense": 41,
      "special-attack": 25,
      "special-defense": 41,
      "speed": 25
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 402,
    "name": "Kricketune",
    "evolutions": [],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 77,
      "attack": 85,
      "defense": 51,
      "special-attack": 55,
      "special-defense": 51,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 403,
    "name": "Shinx",
    "evolutions": [
      {
        "id": 404,
        "level": 15
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 34,
      "special-attack": 40,
      "special-defense": 34,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 404,
    "name": "Luxio",
    "evolutions": [
      {
        "id": 405,
        "level": 30
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 49,
      "special-attack": 60,
      "special-defense": 49,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 405,
    "name": "Luxray",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "special-attack": 95,
      "special-defense": 79,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 406,
    "name": "Budew",
    "evolutions": [
      {
        "id": 315,
        "level": 30
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "special-attack": 50,
      "special-defense": 70,
      "speed": 55
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 407,
    "name": "Roserade",
    "evolutions": [],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "special-attack": 125,
      "special-defense": 105,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 408,
    "name": "Cranidos",
    "evolutions": [
      {
        "id": 409,
        "level": 30
      }
    ],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 67,
      "attack": 125,
      "defense": 40,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 58
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 409,
    "name": "Rampardos",
    "evolutions": [],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 50,
      "speed": 58
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 410,
    "name": "Shieldon",
    "evolutions": [
      {
        "id": 411,
        "level": 30
      }
    ],
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 30,
      "attack": 42,
      "defense": 118,
      "special-attack": 42,
      "special-defense": 88,
      "speed": 30
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 411,
    "name": "Bastiodon",
    "evolutions": [],
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "special-attack": 47,
      "special-defense": 138,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 412,
    "name": "Burmy",
    "evolutions": [
      {
        "id": 413,
        "level": 20
      },
      {
        "id": 414,
        "level": 20
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 40,
      "attack": 29,
      "defense": 45,
      "special-attack": 29,
      "special-defense": 45,
      "speed": 36
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 413,
    "name": "Wormadam",
    "evolutions": [],
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 59,
      "defense": 85,
      "special-attack": 79,
      "special-defense": 105,
      "speed": 36
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 414,
    "name": "Mothim",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 94,
      "defense": 50,
      "special-attack": 94,
      "special-defense": 50,
      "speed": 66
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 415,
    "name": "Combee",
    "evolutions": [
      {
        "id": 416,
        "level": 21
      }
    ],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 42,
      "special-attack": 30,
      "special-defense": 42,
      "speed": 70
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 416,
    "name": "Vespiquen",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 102,
      "special-attack": 80,
      "special-defense": 102,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 417,
    "name": "Pachirisu",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "special-attack": 45,
      "special-defense": 90,
      "speed": 95
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 418,
    "name": "Buizel",
    "evolutions": [
      {
        "id": 419,
        "level": 26
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "special-attack": 60,
      "special-defense": 30,
      "speed": 85
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 419,
    "name": "Floatzel",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "special-attack": 85,
      "special-defense": 50,
      "speed": 115
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 420,
    "name": "Cherubi",
    "evolutions": [
      {
        "id": 421,
        "level": 25
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 45,
      "special-attack": 62,
      "special-defense": 53,
      "speed": 35
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 421,
    "name": "Cherrim",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 70,
      "special-attack": 87,
      "special-defense": 78,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 422,
    "name": "Shellos",
    "evolutions": [
      {
        "id": 423,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 76,
      "attack": 48,
      "defense": 48,
      "special-attack": 57,
      "special-defense": 62,
      "speed": 34
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 423,
    "name": "Gastrodon",
    "evolutions": [],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 111,
      "attack": 83,
      "defense": 68,
      "special-attack": 92,
      "special-defense": 82,
      "speed": 39
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 424,
    "name": "Ambipom",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 66,
      "special-attack": 60,
      "special-defense": 66,
      "speed": 115
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 425,
    "name": "Drifloon",
    "evolutions": [
      {
        "id": 426,
        "level": 28
      }
    ],
    "types": [
      "ghost",
      "flying"
    ],
    "stats": {
      "hp": 90,
      "attack": 50,
      "defense": 34,
      "special-attack": 60,
      "special-defense": 44,
      "speed": 70
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 426,
    "name": "Drifblim",
    "evolutions": [],
    "types": [
      "ghost",
      "flying"
    ],
    "stats": {
      "hp": 150,
      "attack": 80,
      "defense": 44,
      "special-attack": 90,
      "special-defense": 54,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 427,
    "name": "Buneary",
    "evolutions": [
      {
        "id": 428,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 66,
      "defense": 44,
      "special-attack": 44,
      "special-defense": 56,
      "speed": 85
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 428,
    "name": "Lopunny",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "special-attack": 54,
      "special-defense": 96,
      "speed": 105
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 429,
    "name": "Mismagius",
    "evolutions": [],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special-attack": 105,
      "special-defense": 105,
      "speed": 105
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 430,
    "name": "Honchkrow",
    "evolutions": [],
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 52,
      "special-attack": 105,
      "special-defense": 52,
      "speed": 71
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 431,
    "name": "Glameow",
    "evolutions": [
      {
        "id": 432,
        "level": 38
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 49,
      "attack": 55,
      "defense": 42,
      "special-attack": 42,
      "special-defense": 37,
      "speed": 85
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 432,
    "name": "Purugly",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 71,
      "attack": 82,
      "defense": 64,
      "special-attack": 64,
      "special-defense": 59,
      "speed": 112
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 433,
    "name": "Chingling",
    "evolutions": [
      {
        "id": 358,
        "level": 30
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "special-attack": 65,
      "special-defense": 50,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 434,
    "name": "Stunky",
    "evolutions": [
      {
        "id": 435,
        "level": 34
      }
    ],
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 63,
      "attack": 63,
      "defense": 47,
      "special-attack": 41,
      "special-defense": 41,
      "speed": 74
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 435,
    "name": "Skuntank",
    "evolutions": [],
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 103,
      "attack": 93,
      "defense": 67,
      "special-attack": 71,
      "special-defense": 61,
      "speed": 84
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 436,
    "name": "Bronzor",
    "evolutions": [
      {
        "id": 437,
        "level": 33
      }
    ],
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 57,
      "attack": 24,
      "defense": 86,
      "special-attack": 24,
      "special-defense": 86,
      "speed": 23
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 437,
    "name": "Bronzong",
    "evolutions": [],
    "types": [
      "steel",
      "psychic"
    ],
    "stats": {
      "hp": 67,
      "attack": 89,
      "defense": 116,
      "special-attack": 79,
      "special-defense": 116,
      "speed": 33
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 438,
    "name": "Bonsly",
    "evolutions": [
      {
        "id": 185,
        "level": 30
      }
    ],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 80,
      "defense": 95,
      "special-attack": 10,
      "special-defense": 45,
      "speed": 10
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 439,
    "name": "Mime-jr",
    "evolutions": [
      {
        "id": 122,
        "level": 30
      }
    ],
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 20,
      "attack": 25,
      "defense": 45,
      "special-attack": 70,
      "special-defense": 90,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 440,
    "name": "Happiny",
    "evolutions": [
      {
        "id": 113,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 100,
      "attack": 5,
      "defense": 5,
      "special-attack": 15,
      "special-defense": 65,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 441,
    "name": "Chatot",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 76,
      "attack": 65,
      "defense": 45,
      "special-attack": 92,
      "special-defense": 42,
      "speed": 91
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 442,
    "name": "Spiritomb",
    "evolutions": [],
    "types": [
      "ghost",
      "dark"
    ],
    "stats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "special-attack": 92,
      "special-defense": 108,
      "speed": 35
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 443,
    "name": "Gible",
    "evolutions": [
      {
        "id": 444,
        "level": 24
      }
    ],
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 58,
      "attack": 70,
      "defense": 45,
      "special-attack": 40,
      "special-defense": 45,
      "speed": 42
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 444,
    "name": "Gabite",
    "evolutions": [
      {
        "id": 445,
        "level": 48
      }
    ],
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 68,
      "attack": 90,
      "defense": 65,
      "special-attack": 50,
      "special-defense": 55,
      "speed": 82
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 445,
    "name": "Garchomp",
    "evolutions": [],
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "special-attack": 80,
      "special-defense": 85,
      "speed": 102
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 446,
    "name": "Munchlax",
    "evolutions": [
      {
        "id": 143,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 135,
      "attack": 85,
      "defense": 40,
      "special-attack": 40,
      "special-defense": 85,
      "speed": 5
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 447,
    "name": "Riolu",
    "evolutions": [
      {
        "id": 448,
        "level": 30
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 40,
      "special-attack": 35,
      "special-defense": 40,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 448,
    "name": "Lucario",
    "evolutions": [],
    "types": [
      "fighting",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "special-attack": 115,
      "special-defense": 70,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 449,
    "name": "Hippopotas",
    "evolutions": [
      {
        "id": 450,
        "level": 34
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 68,
      "attack": 72,
      "defense": 78,
      "special-attack": 38,
      "special-defense": 42,
      "speed": 32
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 450,
    "name": "Hippowdon",
    "evolutions": [],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "special-attack": 68,
      "special-defense": 72,
      "speed": 47
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 451,
    "name": "Skorupi",
    "evolutions": [
      {
        "id": 452,
        "level": 40
      }
    ],
    "types": [
      "poison",
      "bug"
    ],
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 90,
      "special-attack": 30,
      "special-defense": 55,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 452,
    "name": "Drapion",
    "evolutions": [],
    "types": [
      "poison",
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 110,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 453,
    "name": "Croagunk",
    "evolutions": [
      {
        "id": 454,
        "level": 37
      }
    ],
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 48,
      "attack": 61,
      "defense": 40,
      "special-attack": 61,
      "special-defense": 40,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 454,
    "name": "Toxicroak",
    "evolutions": [],
    "types": [
      "poison",
      "fighting"
    ],
    "stats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "special-attack": 86,
      "special-defense": 65,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 455,
    "name": "Carnivine",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 74,
      "attack": 100,
      "defense": 72,
      "special-attack": 90,
      "special-defense": 72,
      "speed": 46
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 456,
    "name": "Finneon",
    "evolutions": [
      {
        "id": 457,
        "level": 31
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 49,
      "attack": 49,
      "defense": 56,
      "special-attack": 49,
      "special-defense": 61,
      "speed": 66
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 457,
    "name": "Lumineon",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 69,
      "attack": 69,
      "defense": 76,
      "special-attack": 69,
      "special-defense": 86,
      "speed": 91
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 458,
    "name": "Mantyke",
    "evolutions": [
      {
        "id": 226,
        "level": 30
      }
    ],
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 50,
      "special-attack": 60,
      "special-defense": 120,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 459,
    "name": "Snover",
    "evolutions": [
      {
        "id": 460,
        "level": 40
      }
    ],
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 50,
      "special-attack": 62,
      "special-defense": 60,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 460,
    "name": "Abomasnow",
    "evolutions": [],
    "types": [
      "grass",
      "ice"
    ],
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "special-attack": 92,
      "special-defense": 85,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 461,
    "name": "Weavile",
    "evolutions": [],
    "types": [
      "dark",
      "ice"
    ],
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "special-attack": 45,
      "special-defense": 85,
      "speed": 125
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 462,
    "name": "Magnezone",
    "evolutions": [],
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 115,
      "special-attack": 130,
      "special-defense": 90,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 463,
    "name": "Lickilicky",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 95,
      "special-attack": 80,
      "special-defense": 95,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 464,
    "name": "Rhyperior",
    "evolutions": [],
    "types": [
      "ground",
      "rock"
    ],
    "stats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 465,
    "name": "Tangrowth",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 125,
      "special-attack": 110,
      "special-defense": 50,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 466,
    "name": "Electivire",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "special-attack": 95,
      "special-defense": 85,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 467,
    "name": "Magmortar",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 67,
      "special-attack": 125,
      "special-defense": 95,
      "speed": 83
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 468,
    "name": "Togekiss",
    "evolutions": [],
    "types": [
      "fairy",
      "flying"
    ],
    "stats": {
      "hp": 85,
      "attack": 50,
      "defense": 95,
      "special-attack": 120,
      "special-defense": 115,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 469,
    "name": "Yanmega",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 86,
      "attack": 76,
      "defense": 86,
      "special-attack": 116,
      "special-defense": 56,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 470,
    "name": "Leafeon",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "special-attack": 60,
      "special-defense": 65,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 471,
    "name": "Glaceon",
    "evolutions": [],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "special-attack": 130,
      "special-defense": 95,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 472,
    "name": "Gliscor",
    "evolutions": [],
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "special-attack": 45,
      "special-defense": 75,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 473,
    "name": "Mamoswine",
    "evolutions": [],
    "types": [
      "ice",
      "ground"
    ],
    "stats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 60,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 474,
    "name": "Porygon-z",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 70,
      "special-attack": 135,
      "special-defense": 75,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 475,
    "name": "Gallade",
    "evolutions": [],
    "types": [
      "psychic",
      "fighting"
    ],
    "stats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "special-attack": 65,
      "special-defense": 115,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 476,
    "name": "Probopass",
    "evolutions": [],
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 145,
      "special-attack": 75,
      "special-defense": 150,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 477,
    "name": "Dusknoir",
    "evolutions": [],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 135,
      "special-attack": 65,
      "special-defense": 135,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 478,
    "name": "Froslass",
    "evolutions": [],
    "types": [
      "ice",
      "ghost"
    ],
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "special-attack": 80,
      "special-defense": 70,
      "speed": 110
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 479,
    "name": "Rotom",
    "evolutions": [],
    "types": [
      "electric",
      "ghost"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "special-attack": 95,
      "special-defense": 77,
      "speed": 91
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 480,
    "name": "Uxie",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 130,
      "special-attack": 75,
      "special-defense": 130,
      "speed": 95
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 481,
    "name": "Mesprit",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 105,
      "special-attack": 105,
      "special-defense": 105,
      "speed": 80
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 482,
    "name": "Azelf",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "special-attack": 125,
      "special-defense": 70,
      "speed": 115
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 483,
    "name": "Dialga",
    "evolutions": [],
    "types": [
      "steel",
      "dragon"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 120,
      "special-attack": 150,
      "special-defense": 100,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 484,
    "name": "Palkia",
    "evolutions": [],
    "types": [
      "water",
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 100,
      "special-attack": 150,
      "special-defense": 120,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 485,
    "name": "Heatran",
    "evolutions": [],
    "types": [
      "fire",
      "steel"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 106,
      "special-attack": 130,
      "special-defense": 106,
      "speed": 77
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 486,
    "name": "Regigigas",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 110,
      "attack": 160,
      "defense": 110,
      "special-attack": 80,
      "special-defense": 110,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 487,
    "name": "Giratina",
    "evolutions": [],
    "types": [
      "ghost",
      "dragon"
    ],
    "stats": {
      "hp": 150,
      "attack": 100,
      "defense": 120,
      "special-attack": 100,
      "special-defense": 120,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 488,
    "name": "Cresselia",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 120,
      "attack": 70,
      "defense": 110,
      "special-attack": 75,
      "special-defense": 120,
      "speed": 85
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 489,
    "name": "Phione",
    "evolutions": [
      {
        "id": 490,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special-attack": 80,
      "special-defense": 80,
      "speed": 80
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 490,
    "name": "Manaphy",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 491,
    "name": "Darkrai",
    "evolutions": [],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 90,
      "special-attack": 135,
      "special-defense": 90,
      "speed": 125
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 492,
    "name": "Shaymin",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 493,
    "name": "Arceus",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 120,
      "attack": 120,
      "defense": 120,
      "special-attack": 120,
      "special-defense": 120,
      "speed": 120
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 494,
    "name": "Victini",
    "evolutions": [],
    "types": [
      "psychic",
      "fire"
    ],
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 100
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 495,
    "name": "Snivy",
    "evolutions": [
      {
        "id": 496,
        "level": 17
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 55,
      "special-attack": 45,
      "special-defense": 55,
      "speed": 63
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 496,
    "name": "Servine",
    "evolutions": [
      {
        "id": 497,
        "level": 36
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "special-attack": 60,
      "special-defense": 75,
      "speed": 83
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 497,
    "name": "Serperior",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "special-attack": 75,
      "special-defense": 95,
      "speed": 113
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 498,
    "name": "Tepig",
    "evolutions": [
      {
        "id": 499,
        "level": 17
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 63,
      "defense": 45,
      "special-attack": 45,
      "special-defense": 45,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 499,
    "name": "Pignite",
    "evolutions": [
      {
        "id": 500,
        "level": 36
      }
    ],
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 90,
      "attack": 93,
      "defense": 55,
      "special-attack": 70,
      "special-defense": 55,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 500,
    "name": "Emboar",
    "evolutions": [],
    "types": [
      "fire",
      "fighting"
    ],
    "stats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "special-attack": 100,
      "special-defense": 65,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 501,
    "name": "Oshawott",
    "evolutions": [
      {
        "id": 502,
        "level": 17
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 45,
      "special-attack": 63,
      "special-defense": 45,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 502,
    "name": "Dewott",
    "evolutions": [
      {
        "id": 503,
        "level": 36
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 60,
      "special-attack": 83,
      "special-defense": 60,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 503,
    "name": "Samurott",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "special-attack": 108,
      "special-defense": 70,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 504,
    "name": "Patrat",
    "evolutions": [
      {
        "id": 505,
        "level": 20
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 39,
      "special-attack": 35,
      "special-defense": 39,
      "speed": 42
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 505,
    "name": "Watchog",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "special-attack": 60,
      "special-defense": 69,
      "speed": 77
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 506,
    "name": "Lillipup",
    "evolutions": [
      {
        "id": 507,
        "level": 16
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 45,
      "special-attack": 25,
      "special-defense": 45,
      "speed": 55
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 507,
    "name": "Herdier",
    "evolutions": [
      {
        "id": 508,
        "level": 32
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 65,
      "special-attack": 35,
      "special-defense": 65,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 508,
    "name": "Stoutland",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 90,
      "special-attack": 45,
      "special-defense": 90,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 509,
    "name": "Purrloin",
    "evolutions": [
      {
        "id": 510,
        "level": 20
      }
    ],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 41,
      "attack": 50,
      "defense": 37,
      "special-attack": 50,
      "special-defense": 37,
      "speed": 66
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 510,
    "name": "Liepard",
    "evolutions": [],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "special-attack": 88,
      "special-defense": 50,
      "speed": 106
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 511,
    "name": "Pansage",
    "evolutions": [
      {
        "id": 512,
        "level": 30
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special-attack": 53,
      "special-defense": 48,
      "speed": 64
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 512,
    "name": "Simisage",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 513,
    "name": "Pansear",
    "evolutions": [
      {
        "id": 514,
        "level": 30
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special-attack": 53,
      "special-defense": 48,
      "speed": 64
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 514,
    "name": "Simisear",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 515,
    "name": "Panpour",
    "evolutions": [
      {
        "id": 516,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special-attack": 53,
      "special-defense": 48,
      "speed": 64
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 516,
    "name": "Simipour",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special-attack": 98,
      "special-defense": 63,
      "speed": 101
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 517,
    "name": "Munna",
    "evolutions": [
      {
        "id": 518,
        "level": 30
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 76,
      "attack": 25,
      "defense": 45,
      "special-attack": 67,
      "special-defense": 55,
      "speed": 24
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 518,
    "name": "Musharna",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "special-attack": 107,
      "special-defense": 95,
      "speed": 29
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 519,
    "name": "Pidove",
    "evolutions": [
      {
        "id": 520,
        "level": 21
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 50,
      "attack": 55,
      "defense": 50,
      "special-attack": 36,
      "special-defense": 30,
      "speed": 43
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 520,
    "name": "Tranquill",
    "evolutions": [
      {
        "id": 521,
        "level": 32
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 77,
      "defense": 62,
      "special-attack": 50,
      "special-defense": 42,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 521,
    "name": "Unfezant",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 115,
      "defense": 80,
      "special-attack": 65,
      "special-defense": 55,
      "speed": 93
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 522,
    "name": "Blitzle",
    "evolutions": [
      {
        "id": 523,
        "level": 27
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 32,
      "special-attack": 50,
      "special-defense": 32,
      "speed": 76
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 523,
    "name": "Zebstrika",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 63,
      "special-attack": 80,
      "special-defense": 63,
      "speed": 116
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 524,
    "name": "Roggenrola",
    "evolutions": [
      {
        "id": 525,
        "level": 25
      }
    ],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 85,
      "special-attack": 25,
      "special-defense": 25,
      "speed": 15
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 525,
    "name": "Boldore",
    "evolutions": [
      {
        "id": 526,
        "level": 30
      }
    ],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 105,
      "special-attack": 50,
      "special-defense": 40,
      "speed": 20
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 526,
    "name": "Gigalith",
    "evolutions": [],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 85,
      "attack": 135,
      "defense": 130,
      "special-attack": 60,
      "special-defense": 80,
      "speed": 25
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 527,
    "name": "Woobat",
    "evolutions": [
      {
        "id": 528,
        "level": 30
      }
    ],
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 43,
      "special-attack": 55,
      "special-defense": 43,
      "speed": 72
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 528,
    "name": "Swoobat",
    "evolutions": [],
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 67,
      "attack": 57,
      "defense": 55,
      "special-attack": 77,
      "special-defense": 55,
      "speed": 114
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 529,
    "name": "Drilbur",
    "evolutions": [
      {
        "id": 530,
        "level": 31
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 40,
      "special-attack": 30,
      "special-defense": 45,
      "speed": 68
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 530,
    "name": "Excadrill",
    "evolutions": [],
    "types": [
      "ground",
      "steel"
    ],
    "stats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "special-attack": 50,
      "special-defense": 65,
      "speed": 88
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 531,
    "name": "Audino",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "special-attack": 60,
      "special-defense": 86,
      "speed": 50
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 532,
    "name": "Timburr",
    "evolutions": [
      {
        "id": 533,
        "level": 25
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 55,
      "special-attack": 25,
      "special-defense": 35,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 533,
    "name": "Gurdurr",
    "evolutions": [
      {
        "id": 534,
        "level": 30
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 534,
    "name": "Conkeldurr",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 535,
    "name": "Tympole",
    "evolutions": [
      {
        "id": 536,
        "level": 25
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 40,
      "speed": 64
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 536,
    "name": "Palpitoad",
    "evolutions": [
      {
        "id": 537,
        "level": 36
      }
    ],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 75,
      "attack": 65,
      "defense": 55,
      "special-attack": 65,
      "special-defense": 55,
      "speed": 69
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 537,
    "name": "Seismitoad",
    "evolutions": [],
    "types": [
      "water",
      "ground"
    ],
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 75,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 74
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 538,
    "name": "Throh",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 120,
      "attack": 100,
      "defense": 85,
      "special-attack": 30,
      "special-defense": 85,
      "speed": 45
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 539,
    "name": "Sawk",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 75,
      "special-attack": 30,
      "special-defense": 75,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 540,
    "name": "Sewaddle",
    "evolutions": [
      {
        "id": 541,
        "level": 20
      }
    ],
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "special-attack": 40,
      "special-defense": 60,
      "speed": 42
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 541,
    "name": "Swadloon",
    "evolutions": [
      {
        "id": 542,
        "level": 30
      }
    ],
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "special-attack": 50,
      "special-defense": 80,
      "speed": 42
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 542,
    "name": "Leavanny",
    "evolutions": [],
    "types": [
      "bug",
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 92
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 543,
    "name": "Venipede",
    "evolutions": [
      {
        "id": 544,
        "level": 22
      }
    ],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 59,
      "special-attack": 30,
      "special-defense": 39,
      "speed": 57
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 544,
    "name": "Whirlipede",
    "evolutions": [
      {
        "id": 545,
        "level": 30
      }
    ],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 99,
      "special-attack": 40,
      "special-defense": 79,
      "speed": 47
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 545,
    "name": "Scolipede",
    "evolutions": [],
    "types": [
      "bug",
      "poison"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "special-attack": 55,
      "special-defense": 69,
      "speed": 112
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 546,
    "name": "Cottonee",
    "evolutions": [
      {
        "id": 547,
        "level": 30
      }
    ],
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 27,
      "defense": 60,
      "special-attack": 37,
      "special-defense": 50,
      "speed": 66
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 547,
    "name": "Whimsicott",
    "evolutions": [],
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "special-attack": 77,
      "special-defense": 75,
      "speed": 116
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 548,
    "name": "Petilil",
    "evolutions": [
      {
        "id": 549,
        "level": 30
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 50,
      "special-attack": 70,
      "special-defense": 50,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 549,
    "name": "Lilligant",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 75,
      "special-attack": 110,
      "special-defense": 75,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 550,
    "name": "Basculin",
    "evolutions": [
      {
        "id": 902,
        "level": 30
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "special-attack": 80,
      "special-defense": 55,
      "speed": 98
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 551,
    "name": "Sandile",
    "evolutions": [
      {
        "id": 552,
        "level": 29
      }
    ],
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 50,
      "attack": 72,
      "defense": 35,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 65
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 552,
    "name": "Krokorok",
    "evolutions": [
      {
        "id": 553,
        "level": 40
      }
    ],
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 82,
      "defense": 45,
      "special-attack": 45,
      "special-defense": 45,
      "speed": 74
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 553,
    "name": "Krookodile",
    "evolutions": [],
    "types": [
      "ground",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 92
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 554,
    "name": "Darumaka",
    "evolutions": [
      {
        "id": 555,
        "level": 35
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "special-attack": 15,
      "special-defense": 45,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 555,
    "name": "Darmanitan",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "special-attack": 30,
      "special-defense": 55,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 556,
    "name": "Maractus",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 75,
      "attack": 86,
      "defense": 67,
      "special-attack": 106,
      "special-defense": 67,
      "speed": 60
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 557,
    "name": "Dwebble",
    "evolutions": [
      {
        "id": 558,
        "level": 34
      }
    ],
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 85,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 55
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 558,
    "name": "Crustle",
    "evolutions": [],
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 125,
      "special-attack": 65,
      "special-defense": 75,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 559,
    "name": "Scraggy",
    "evolutions": [
      {
        "id": 560,
        "level": 39
      }
    ],
    "types": [
      "dark",
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 70,
      "special-attack": 35,
      "special-defense": 70,
      "speed": 48
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 560,
    "name": "Scrafty",
    "evolutions": [],
    "types": [
      "dark",
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "special-attack": 45,
      "special-defense": 115,
      "speed": 58
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 561,
    "name": "Sigilyph",
    "evolutions": [],
    "types": [
      "psychic",
      "flying"
    ],
    "stats": {
      "hp": 72,
      "attack": 58,
      "defense": 80,
      "special-attack": 103,
      "special-defense": 80,
      "speed": 97
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 562,
    "name": "Yamask",
    "evolutions": [
      {
        "id": 563,
        "level": 34
      },
      {
        "id": 867,
        "level": 30
      }
    ],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 85,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 30
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 563,
    "name": "Cofagrigus",
    "evolutions": [],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "special-attack": 95,
      "special-defense": 105,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 564,
    "name": "Tirtouga",
    "evolutions": [
      {
        "id": 565,
        "level": 37
      }
    ],
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 54,
      "attack": 78,
      "defense": 103,
      "special-attack": 53,
      "special-defense": 45,
      "speed": 22
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 565,
    "name": "Carracosta",
    "evolutions": [],
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 74,
      "attack": 108,
      "defense": 133,
      "special-attack": 83,
      "special-defense": 65,
      "speed": 32
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 566,
    "name": "Archen",
    "evolutions": [
      {
        "id": 567,
        "level": 37
      }
    ],
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 112,
      "defense": 45,
      "special-attack": 74,
      "special-defense": 45,
      "speed": 70
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 567,
    "name": "Archeops",
    "evolutions": [],
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 140,
      "defense": 65,
      "special-attack": 112,
      "special-defense": 65,
      "speed": 110
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 568,
    "name": "Trubbish",
    "evolutions": [
      {
        "id": 569,
        "level": 36
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 62,
      "special-attack": 40,
      "special-defense": 62,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 569,
    "name": "Garbodor",
    "evolutions": [],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "special-attack": 60,
      "special-defense": 82,
      "speed": 75
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 570,
    "name": "Zorua",
    "evolutions": [
      {
        "id": 571,
        "level": 30
      }
    ],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 40,
      "special-attack": 80,
      "special-defense": 40,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 571,
    "name": "Zoroark",
    "evolutions": [],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "special-attack": 120,
      "special-defense": 60,
      "speed": 105
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 572,
    "name": "Minccino",
    "evolutions": [
      {
        "id": 573,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 40,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 75
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 573,
    "name": "Cinccino",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 60,
      "speed": 115
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 574,
    "name": "Gothita",
    "evolutions": [
      {
        "id": 575,
        "level": 32
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 575,
    "name": "Gothorita",
    "evolutions": [
      {
        "id": 576,
        "level": 41
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "special-attack": 75,
      "special-defense": 85,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 576,
    "name": "Gothitelle",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 95,
      "special-attack": 95,
      "special-defense": 110,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 577,
    "name": "Solosis",
    "evolutions": [
      {
        "id": 578,
        "level": 32
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 40,
      "special-attack": 105,
      "special-defense": 50,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 578,
    "name": "Duosion",
    "evolutions": [
      {
        "id": 579,
        "level": 41
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 65,
      "attack": 40,
      "defense": 50,
      "special-attack": 125,
      "special-defense": 60,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 579,
    "name": "Reuniclus",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "special-attack": 125,
      "special-defense": 85,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 580,
    "name": "Ducklett",
    "evolutions": [
      {
        "id": 581,
        "level": 35
      }
    ],
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 44,
      "defense": 50,
      "special-attack": 44,
      "special-defense": 50,
      "speed": 55
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 581,
    "name": "Swanna",
    "evolutions": [],
    "types": [
      "water",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 87,
      "defense": 63,
      "special-attack": 87,
      "special-defense": 63,
      "speed": 98
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 582,
    "name": "Vanillite",
    "evolutions": [
      {
        "id": 583,
        "level": 35
      }
    ],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 36,
      "attack": 50,
      "defense": 50,
      "special-attack": 65,
      "special-defense": 60,
      "speed": 44
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 583,
    "name": "Vanillish",
    "evolutions": [
      {
        "id": 584,
        "level": 47
      }
    ],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 51,
      "attack": 65,
      "defense": 65,
      "special-attack": 80,
      "special-defense": 75,
      "speed": 59
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 584,
    "name": "Vanilluxe",
    "evolutions": [],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "special-attack": 110,
      "special-defense": 95,
      "speed": 79
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 585,
    "name": "Deerling",
    "evolutions": [
      {
        "id": 586,
        "level": 34
      }
    ],
    "types": [
      "normal",
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 75
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 586,
    "name": "Sawsbuck",
    "evolutions": [],
    "types": [
      "normal",
      "grass"
    ],
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 587,
    "name": "Emolga",
    "evolutions": [],
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "special-attack": 75,
      "special-defense": 60,
      "speed": 103
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 588,
    "name": "Karrablast",
    "evolutions": [
      {
        "id": 589,
        "level": 30
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 45,
      "special-attack": 40,
      "special-defense": 45,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 589,
    "name": "Escavalier",
    "evolutions": [],
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 105,
      "special-attack": 60,
      "special-defense": 105,
      "speed": 20
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 590,
    "name": "Foongus",
    "evolutions": [
      {
        "id": 591,
        "level": 39
      }
    ],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 69,
      "attack": 55,
      "defense": 45,
      "special-attack": 55,
      "special-defense": 55,
      "speed": 15
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 591,
    "name": "Amoonguss",
    "evolutions": [],
    "types": [
      "grass",
      "poison"
    ],
    "stats": {
      "hp": 114,
      "attack": 85,
      "defense": 70,
      "special-attack": 85,
      "special-defense": 80,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 592,
    "name": "Frillish",
    "evolutions": [
      {
        "id": 593,
        "level": 40
      }
    ],
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "special-attack": 65,
      "special-defense": 85,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 593,
    "name": "Jellicent",
    "evolutions": [],
    "types": [
      "water",
      "ghost"
    ],
    "stats": {
      "hp": 100,
      "attack": 60,
      "defense": 70,
      "special-attack": 85,
      "special-defense": 105,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 594,
    "name": "Alomomola",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 165,
      "attack": 75,
      "defense": 80,
      "special-attack": 40,
      "special-defense": 45,
      "speed": 65
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 595,
    "name": "Joltik",
    "evolutions": [
      {
        "id": 596,
        "level": 36
      }
    ],
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 50,
      "attack": 47,
      "defense": 50,
      "special-attack": 57,
      "special-defense": 50,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 596,
    "name": "Galvantula",
    "evolutions": [],
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 70,
      "attack": 77,
      "defense": 60,
      "special-attack": 97,
      "special-defense": 60,
      "speed": 108
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 597,
    "name": "Ferroseed",
    "evolutions": [
      {
        "id": 598,
        "level": 40
      }
    ],
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 44,
      "attack": 50,
      "defense": 91,
      "special-attack": 24,
      "special-defense": 86,
      "speed": 10
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 598,
    "name": "Ferrothorn",
    "evolutions": [],
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 74,
      "attack": 94,
      "defense": 131,
      "special-attack": 54,
      "special-defense": 116,
      "speed": 20
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 599,
    "name": "Klink",
    "evolutions": [
      {
        "id": 600,
        "level": 38
      }
    ],
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 70,
      "special-attack": 45,
      "special-defense": 60,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 600,
    "name": "Klang",
    "evolutions": [
      {
        "id": 601,
        "level": 49
      }
    ],
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 95,
      "special-attack": 70,
      "special-defense": 85,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 601,
    "name": "Klinklang",
    "evolutions": [],
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 115,
      "special-attack": 70,
      "special-defense": 85,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 602,
    "name": "Tynamo",
    "evolutions": [
      {
        "id": 603,
        "level": 39
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 45,
      "special-defense": 40,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 603,
    "name": "Eelektrik",
    "evolutions": [
      {
        "id": 604,
        "level": 30
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 70,
      "special-attack": 75,
      "special-defense": 70,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 604,
    "name": "Eelektross",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "special-attack": 105,
      "special-defense": 80,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 605,
    "name": "Elgyem",
    "evolutions": [
      {
        "id": 606,
        "level": 42
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "special-attack": 85,
      "special-defense": 55,
      "speed": 30
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 606,
    "name": "Beheeyem",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 75,
      "special-attack": 125,
      "special-defense": 95,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 607,
    "name": "Litwick",
    "evolutions": [
      {
        "id": 608,
        "level": 41
      }
    ],
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "special-attack": 65,
      "special-defense": 55,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 608,
    "name": "Lampent",
    "evolutions": [
      {
        "id": 609,
        "level": 30
      }
    ],
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "special-attack": 95,
      "special-defense": 60,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 609,
    "name": "Chandelure",
    "evolutions": [],
    "types": [
      "ghost",
      "fire"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "special-attack": 145,
      "special-defense": 90,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 610,
    "name": "Axew",
    "evolutions": [
      {
        "id": 611,
        "level": 38
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 46,
      "attack": 87,
      "defense": 60,
      "special-attack": 30,
      "special-defense": 40,
      "speed": 57
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 611,
    "name": "Fraxure",
    "evolutions": [
      {
        "id": 612,
        "level": 48
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 66,
      "attack": 117,
      "defense": 70,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 67
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 612,
    "name": "Haxorus",
    "evolutions": [],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 76,
      "attack": 147,
      "defense": 90,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 97
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 613,
    "name": "Cubchoo",
    "evolutions": [
      {
        "id": 614,
        "level": 37
      }
    ],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 40,
      "special-attack": 60,
      "special-defense": 40,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 614,
    "name": "Beartic",
    "evolutions": [],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 615,
    "name": "Cryogonal",
    "evolutions": [],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 50,
      "special-attack": 95,
      "special-defense": 135,
      "speed": 105
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 616,
    "name": "Shelmet",
    "evolutions": [
      {
        "id": 617,
        "level": 30
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 85,
      "special-attack": 40,
      "special-defense": 65,
      "speed": 25
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 617,
    "name": "Accelgor",
    "evolutions": [],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 40,
      "special-attack": 100,
      "special-defense": 60,
      "speed": 145
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 618,
    "name": "Stunfisk",
    "evolutions": [],
    "types": [
      "ground",
      "electric"
    ],
    "stats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "special-attack": 81,
      "special-defense": 99,
      "speed": 32
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 619,
    "name": "Mienfoo",
    "evolutions": [
      {
        "id": 620,
        "level": 50
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 50,
      "special-attack": 55,
      "special-defense": 50,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 620,
    "name": "Mienshao",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 60,
      "special-attack": 95,
      "special-defense": 60,
      "speed": 105
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 621,
    "name": "Druddigon",
    "evolutions": [],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 77,
      "attack": 120,
      "defense": 90,
      "special-attack": 60,
      "special-defense": 90,
      "speed": 48
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 622,
    "name": "Golett",
    "evolutions": [
      {
        "id": 623,
        "level": 43
      }
    ],
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 59,
      "attack": 74,
      "defense": 50,
      "special-attack": 35,
      "special-defense": 50,
      "speed": 35
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 623,
    "name": "Golurk",
    "evolutions": [],
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "special-attack": 55,
      "special-defense": 80,
      "speed": 55
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 624,
    "name": "Pawniard",
    "evolutions": [
      {
        "id": 625,
        "level": 52
      }
    ],
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 70,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 625,
    "name": "Bisharp",
    "evolutions": [
      {
        "id": 983,
        "level": 30
      }
    ],
    "types": [
      "dark",
      "steel"
    ],
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 626,
    "name": "Bouffalant",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 110,
      "defense": 95,
      "special-attack": 40,
      "special-defense": 95,
      "speed": 55
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 627,
    "name": "Rufflet",
    "evolutions": [
      {
        "id": 628,
        "level": 54
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 83,
      "defense": 50,
      "special-attack": 37,
      "special-defense": 50,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 628,
    "name": "Braviary",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 100,
      "attack": 123,
      "defense": 75,
      "special-attack": 57,
      "special-defense": 75,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 629,
    "name": "Vullaby",
    "evolutions": [
      {
        "id": 630,
        "level": 54
      }
    ],
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 75,
      "special-attack": 45,
      "special-defense": 65,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 630,
    "name": "Mandibuzz",
    "evolutions": [],
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 105,
      "special-attack": 55,
      "special-defense": 95,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 631,
    "name": "Heatmor",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 85,
      "attack": 97,
      "defense": 66,
      "special-attack": 105,
      "special-defense": 66,
      "speed": 65
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 632,
    "name": "Durant",
    "evolutions": [],
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 58,
      "attack": 109,
      "defense": 112,
      "special-attack": 48,
      "special-defense": 48,
      "speed": 109
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 633,
    "name": "Deino",
    "evolutions": [
      {
        "id": 634,
        "level": 50
      }
    ],
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 52,
      "attack": 65,
      "defense": 50,
      "special-attack": 45,
      "special-defense": 50,
      "speed": 38
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 634,
    "name": "Zweilous",
    "evolutions": [
      {
        "id": 635,
        "level": 64
      }
    ],
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 72,
      "attack": 85,
      "defense": 70,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 58
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 635,
    "name": "Hydreigon",
    "evolutions": [],
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "special-attack": 125,
      "special-defense": 90,
      "speed": 98
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 636,
    "name": "Larvesta",
    "evolutions": [
      {
        "id": 637,
        "level": 59
      }
    ],
    "types": [
      "bug",
      "fire"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 55,
      "special-attack": 50,
      "special-defense": 55,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 637,
    "name": "Volcarona",
    "evolutions": [],
    "types": [
      "bug",
      "fire"
    ],
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "special-attack": 135,
      "special-defense": 105,
      "speed": 100
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 638,
    "name": "Cobalion",
    "evolutions": [],
    "types": [
      "steel",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 129,
      "special-attack": 90,
      "special-defense": 72,
      "speed": 108
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 639,
    "name": "Terrakion",
    "evolutions": [],
    "types": [
      "rock",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 129,
      "defense": 90,
      "special-attack": 72,
      "special-defense": 90,
      "speed": 108
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 640,
    "name": "Virizion",
    "evolutions": [],
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 72,
      "special-attack": 90,
      "special-defense": 129,
      "speed": 108
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 641,
    "name": "Tornadus",
    "evolutions": [],
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "special-attack": 125,
      "special-defense": 80,
      "speed": 111
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 642,
    "name": "Thundurus",
    "evolutions": [],
    "types": [
      "electric",
      "flying"
    ],
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "special-attack": 125,
      "special-defense": 80,
      "speed": 111
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 643,
    "name": "Reshiram",
    "evolutions": [],
    "types": [
      "dragon",
      "fire"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 100,
      "special-attack": 150,
      "special-defense": 120,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 644,
    "name": "Zekrom",
    "evolutions": [],
    "types": [
      "dragon",
      "electric"
    ],
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 120,
      "special-attack": 120,
      "special-defense": 100,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 645,
    "name": "Landorus",
    "evolutions": [],
    "types": [
      "ground",
      "flying"
    ],
    "stats": {
      "hp": 89,
      "attack": 125,
      "defense": 90,
      "special-attack": 115,
      "special-defense": 80,
      "speed": 101
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 646,
    "name": "Kyurem",
    "evolutions": [],
    "types": [
      "dragon",
      "ice"
    ],
    "stats": {
      "hp": 125,
      "attack": 130,
      "defense": 90,
      "special-attack": 130,
      "special-defense": 90,
      "speed": 95
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 647,
    "name": "Keldeo",
    "evolutions": [],
    "types": [
      "water",
      "fighting"
    ],
    "stats": {
      "hp": 91,
      "attack": 72,
      "defense": 90,
      "special-attack": 129,
      "special-defense": 90,
      "speed": 108
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 648,
    "name": "Meloetta",
    "evolutions": [],
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "special-attack": 128,
      "special-defense": 128,
      "speed": 90
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 649,
    "name": "Genesect",
    "evolutions": [],
    "types": [
      "bug",
      "steel"
    ],
    "stats": {
      "hp": 71,
      "attack": 120,
      "defense": 95,
      "special-attack": 120,
      "special-defense": 95,
      "speed": 99
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 650,
    "name": "Chespin",
    "evolutions": [
      {
        "id": 651,
        "level": 16
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 56,
      "attack": 61,
      "defense": 65,
      "special-attack": 48,
      "special-defense": 45,
      "speed": 38
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 651,
    "name": "Quilladin",
    "evolutions": [
      {
        "id": 652,
        "level": 36
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 61,
      "attack": 78,
      "defense": 95,
      "special-attack": 56,
      "special-defense": 58,
      "speed": 57
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 652,
    "name": "Chesnaught",
    "evolutions": [],
    "types": [
      "grass",
      "fighting"
    ],
    "stats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "special-attack": 74,
      "special-defense": 75,
      "speed": 64
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 653,
    "name": "Fennekin",
    "evolutions": [
      {
        "id": 654,
        "level": 16
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special-attack": 62,
      "special-defense": 60,
      "speed": 60
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 654,
    "name": "Braixen",
    "evolutions": [
      {
        "id": 655,
        "level": 36
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 59,
      "attack": 59,
      "defense": 58,
      "special-attack": 90,
      "special-defense": 70,
      "speed": 73
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 655,
    "name": "Delphox",
    "evolutions": [],
    "types": [
      "fire",
      "psychic"
    ],
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "special-attack": 114,
      "special-defense": 100,
      "speed": 104
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 656,
    "name": "Froakie",
    "evolutions": [
      {
        "id": 657,
        "level": 16
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 41,
      "attack": 56,
      "defense": 40,
      "special-attack": 62,
      "special-defense": 44,
      "speed": 71
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 657,
    "name": "Frogadier",
    "evolutions": [
      {
        "id": 658,
        "level": 36
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 54,
      "attack": 63,
      "defense": 52,
      "special-attack": 83,
      "special-defense": 56,
      "speed": 97
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 658,
    "name": "Greninja",
    "evolutions": [],
    "types": [
      "water",
      "dark"
    ],
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "special-attack": 103,
      "special-defense": 71,
      "speed": 122
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 659,
    "name": "Bunnelby",
    "evolutions": [
      {
        "id": 660,
        "level": 20
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 38,
      "attack": 36,
      "defense": 38,
      "special-attack": 32,
      "special-defense": 36,
      "speed": 57
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 660,
    "name": "Diggersby",
    "evolutions": [],
    "types": [
      "normal",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "special-attack": 50,
      "special-defense": 77,
      "speed": 78
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 661,
    "name": "Fletchling",
    "evolutions": [
      {
        "id": 662,
        "level": 17
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 43,
      "special-attack": 40,
      "special-defense": 38,
      "speed": 62
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 662,
    "name": "Fletchinder",
    "evolutions": [
      {
        "id": 663,
        "level": 35
      }
    ],
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 62,
      "attack": 73,
      "defense": 55,
      "special-attack": 56,
      "special-defense": 52,
      "speed": 84
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 663,
    "name": "Talonflame",
    "evolutions": [],
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "special-attack": 74,
      "special-defense": 69,
      "speed": 126
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 664,
    "name": "Scatterbug",
    "evolutions": [
      {
        "id": 665,
        "level": 9
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 40,
      "special-attack": 27,
      "special-defense": 25,
      "speed": 35
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 665,
    "name": "Spewpa",
    "evolutions": [
      {
        "id": 666,
        "level": 12
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 45,
      "attack": 22,
      "defense": 60,
      "special-attack": 27,
      "special-defense": 30,
      "speed": 29
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 666,
    "name": "Vivillon",
    "evolutions": [],
    "types": [
      "bug",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "special-attack": 90,
      "special-defense": 50,
      "speed": 89
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 667,
    "name": "Litleo",
    "evolutions": [
      {
        "id": 668,
        "level": 35
      }
    ],
    "types": [
      "fire",
      "normal"
    ],
    "stats": {
      "hp": 62,
      "attack": 50,
      "defense": 58,
      "special-attack": 73,
      "special-defense": 54,
      "speed": 72
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 668,
    "name": "Pyroar",
    "evolutions": [],
    "types": [
      "fire",
      "normal"
    ],
    "stats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "special-attack": 109,
      "special-defense": 66,
      "speed": 106
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 669,
    "name": "Flabebe",
    "evolutions": [
      {
        "id": 670,
        "level": 19
      }
    ],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 39,
      "special-attack": 61,
      "special-defense": 79,
      "speed": 42
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 670,
    "name": "Floette",
    "evolutions": [
      {
        "id": 671,
        "level": 30
      }
    ],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "special-attack": 75,
      "special-defense": 98,
      "speed": 52
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 671,
    "name": "Florges",
    "evolutions": [],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "special-attack": 112,
      "special-defense": 154,
      "speed": 75
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 672,
    "name": "Skiddo",
    "evolutions": [
      {
        "id": 673,
        "level": 32
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 66,
      "attack": 65,
      "defense": 48,
      "special-attack": 62,
      "special-defense": 57,
      "speed": 52
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 673,
    "name": "Gogoat",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "special-attack": 97,
      "special-defense": 81,
      "speed": 68
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 674,
    "name": "Pancham",
    "evolutions": [
      {
        "id": 675,
        "level": 32
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 67,
      "attack": 82,
      "defense": 62,
      "special-attack": 46,
      "special-defense": 48,
      "speed": 43
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 675,
    "name": "Pangoro",
    "evolutions": [],
    "types": [
      "fighting",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "special-attack": 69,
      "special-defense": 71,
      "speed": 58
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 676,
    "name": "Furfrou",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "special-attack": 65,
      "special-defense": 90,
      "speed": 102
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 677,
    "name": "Espurr",
    "evolutions": [
      {
        "id": 678,
        "level": 25
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 54,
      "special-attack": 63,
      "special-defense": 60,
      "speed": 68
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 678,
    "name": "Meowstic",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "special-attack": 83,
      "special-defense": 81,
      "speed": 104
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 679,
    "name": "Honedge",
    "evolutions": [
      {
        "id": 680,
        "level": 35
      }
    ],
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 45,
      "attack": 80,
      "defense": 100,
      "special-attack": 35,
      "special-defense": 37,
      "speed": 28
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 680,
    "name": "Doublade",
    "evolutions": [
      {
        "id": 681,
        "level": 30
      }
    ],
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 59,
      "attack": 110,
      "defense": 150,
      "special-attack": 45,
      "special-defense": 49,
      "speed": 35
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 681,
    "name": "Aegislash",
    "evolutions": [],
    "types": [
      "steel",
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "special-attack": 50,
      "special-defense": 140,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 682,
    "name": "Spritzee",
    "evolutions": [
      {
        "id": 683,
        "level": 30
      }
    ],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "special-attack": 63,
      "special-defense": 65,
      "speed": 23
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 683,
    "name": "Aromatisse",
    "evolutions": [],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "special-attack": 99,
      "special-defense": 89,
      "speed": 29
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 684,
    "name": "Swirlix",
    "evolutions": [
      {
        "id": 685,
        "level": 30
      }
    ],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 66,
      "special-attack": 59,
      "special-defense": 57,
      "speed": 49
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 685,
    "name": "Slurpuff",
    "evolutions": [],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "special-attack": 85,
      "special-defense": 75,
      "speed": 72
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 686,
    "name": "Inkay",
    "evolutions": [
      {
        "id": 687,
        "level": 30
      }
    ],
    "types": [
      "dark",
      "psychic"
    ],
    "stats": {
      "hp": 53,
      "attack": 54,
      "defense": 53,
      "special-attack": 37,
      "special-defense": 46,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 687,
    "name": "Malamar",
    "evolutions": [],
    "types": [
      "dark",
      "psychic"
    ],
    "stats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "special-attack": 68,
      "special-defense": 75,
      "speed": 73
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 688,
    "name": "Binacle",
    "evolutions": [
      {
        "id": 689,
        "level": 39
      }
    ],
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 42,
      "attack": 52,
      "defense": 67,
      "special-attack": 39,
      "special-defense": 56,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 689,
    "name": "Barbaracle",
    "evolutions": [],
    "types": [
      "rock",
      "water"
    ],
    "stats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "special-attack": 54,
      "special-defense": 86,
      "speed": 68
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 690,
    "name": "Skrelp",
    "evolutions": [
      {
        "id": 691,
        "level": 48
      }
    ],
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 60,
      "special-attack": 60,
      "special-defense": 60,
      "speed": 30
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 691,
    "name": "Dragalge",
    "evolutions": [],
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "special-attack": 97,
      "special-defense": 123,
      "speed": 44
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 692,
    "name": "Clauncher",
    "evolutions": [
      {
        "id": 693,
        "level": 37
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "special-attack": 58,
      "special-defense": 63,
      "speed": 44
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 693,
    "name": "Clawitzer",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "special-attack": 120,
      "special-defense": 89,
      "speed": 59
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 694,
    "name": "Helioptile",
    "evolutions": [
      {
        "id": 695,
        "level": 30
      }
    ],
    "types": [
      "electric",
      "normal"
    ],
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 33,
      "special-attack": 61,
      "special-defense": 43,
      "speed": 70
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 695,
    "name": "Heliolisk",
    "evolutions": [],
    "types": [
      "electric",
      "normal"
    ],
    "stats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "special-attack": 109,
      "special-defense": 94,
      "speed": 109
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 696,
    "name": "Tyrunt",
    "evolutions": [
      {
        "id": 697,
        "level": 39
      }
    ],
    "types": [
      "rock",
      "dragon"
    ],
    "stats": {
      "hp": 58,
      "attack": 89,
      "defense": 77,
      "special-attack": 45,
      "special-defense": 45,
      "speed": 48
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 697,
    "name": "Tyrantrum",
    "evolutions": [],
    "types": [
      "rock",
      "dragon"
    ],
    "stats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "special-attack": 69,
      "special-defense": 59,
      "speed": 71
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 698,
    "name": "Amaura",
    "evolutions": [
      {
        "id": 699,
        "level": 39
      }
    ],
    "types": [
      "rock",
      "ice"
    ],
    "stats": {
      "hp": 77,
      "attack": 59,
      "defense": 50,
      "special-attack": 67,
      "special-defense": 63,
      "speed": 46
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 699,
    "name": "Aurorus",
    "evolutions": [],
    "types": [
      "rock",
      "ice"
    ],
    "stats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "special-attack": 99,
      "special-defense": 92,
      "speed": 58
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 700,
    "name": "Sylveon",
    "evolutions": [],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "special-attack": 110,
      "special-defense": 130,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 701,
    "name": "Hawlucha",
    "evolutions": [],
    "types": [
      "fighting",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "special-attack": 74,
      "special-defense": 63,
      "speed": 118
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 702,
    "name": "Dedenne",
    "evolutions": [],
    "types": [
      "electric",
      "fairy"
    ],
    "stats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "special-attack": 81,
      "special-defense": 67,
      "speed": 101
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 703,
    "name": "Carbink",
    "evolutions": [],
    "types": [
      "rock",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 150,
      "special-attack": 50,
      "special-defense": 150,
      "speed": 50
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 704,
    "name": "Goomy",
    "evolutions": [
      {
        "id": 705,
        "level": 40
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 35,
      "special-attack": 55,
      "special-defense": 75,
      "speed": 40
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 705,
    "name": "Sliggoo",
    "evolutions": [
      {
        "id": 706,
        "level": 50
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 68,
      "attack": 75,
      "defense": 53,
      "special-attack": 83,
      "special-defense": 113,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 706,
    "name": "Goodra",
    "evolutions": [],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "special-attack": 110,
      "special-defense": 150,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 707,
    "name": "Klefki",
    "evolutions": [],
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "special-attack": 80,
      "special-defense": 87,
      "speed": 75
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 708,
    "name": "Phantump",
    "evolutions": [
      {
        "id": 709,
        "level": 30
      }
    ],
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 43,
      "attack": 70,
      "defense": 48,
      "special-attack": 50,
      "special-defense": 60,
      "speed": 38
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 709,
    "name": "Trevenant",
    "evolutions": [],
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "special-attack": 65,
      "special-defense": 82,
      "speed": 56
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 710,
    "name": "Pumpkaboo",
    "evolutions": [
      {
        "id": 711,
        "level": 30
      }
    ],
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 49,
      "attack": 66,
      "defense": 70,
      "special-attack": 44,
      "special-defense": 55,
      "speed": 51
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 711,
    "name": "Gourgeist",
    "evolutions": [],
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "special-attack": 58,
      "special-defense": 75,
      "speed": 84
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 712,
    "name": "Bergmite",
    "evolutions": [
      {
        "id": 713,
        "level": 37
      }
    ],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 55,
      "attack": 69,
      "defense": 85,
      "special-attack": 32,
      "special-defense": 35,
      "speed": 28
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 713,
    "name": "Avalugg",
    "evolutions": [],
    "types": [
      "ice"
    ],
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "special-attack": 44,
      "special-defense": 46,
      "speed": 28
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 714,
    "name": "Noibat",
    "evolutions": [
      {
        "id": 715,
        "level": 48
      }
    ],
    "types": [
      "flying",
      "dragon"
    ],
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "special-attack": 45,
      "special-defense": 40,
      "speed": 55
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 715,
    "name": "Noivern",
    "evolutions": [],
    "types": [
      "flying",
      "dragon"
    ],
    "stats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "special-attack": 97,
      "special-defense": 80,
      "speed": 123
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 716,
    "name": "Xerneas",
    "evolutions": [],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "special-attack": 131,
      "special-defense": 98,
      "speed": 99
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 717,
    "name": "Yveltal",
    "evolutions": [],
    "types": [
      "dark",
      "flying"
    ],
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "special-attack": 131,
      "special-defense": 98,
      "speed": 99
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 718,
    "name": "Zygarde",
    "evolutions": [],
    "types": [
      "dragon",
      "ground"
    ],
    "stats": {
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "special-attack": 81,
      "special-defense": 95,
      "speed": 95
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 719,
    "name": "Diancie",
    "evolutions": [],
    "types": [
      "rock",
      "fairy"
    ],
    "stats": {
      "hp": 50,
      "attack": 100,
      "defense": 150,
      "special-attack": 100,
      "special-defense": 150,
      "speed": 50
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 720,
    "name": "Hoopa",
    "evolutions": [],
    "types": [
      "psychic",
      "ghost"
    ],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 60,
      "special-attack": 150,
      "special-defense": 130,
      "speed": 70
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 721,
    "name": "Volcanion",
    "evolutions": [],
    "types": [
      "fire",
      "water"
    ],
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 120,
      "special-attack": 130,
      "special-defense": 90,
      "speed": 70
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 722,
    "name": "Rowlet",
    "evolutions": [
      {
        "id": 723,
        "level": 17
      }
    ],
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 68,
      "attack": 55,
      "defense": 55,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 42
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 723,
    "name": "Dartrix",
    "evolutions": [
      {
        "id": 724,
        "level": 34
      }
    ],
    "types": [
      "grass",
      "flying"
    ],
    "stats": {
      "hp": 78,
      "attack": 75,
      "defense": 75,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 52
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 724,
    "name": "Decidueye",
    "evolutions": [],
    "types": [
      "grass",
      "ghost"
    ],
    "stats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "special-attack": 100,
      "special-defense": 100,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 725,
    "name": "Litten",
    "evolutions": [
      {
        "id": 726,
        "level": 17
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "special-attack": 60,
      "special-defense": 40,
      "speed": 70
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 726,
    "name": "Torracat",
    "evolutions": [
      {
        "id": 727,
        "level": 34
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 50,
      "special-attack": 80,
      "special-defense": 50,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 727,
    "name": "Incineroar",
    "evolutions": [],
    "types": [
      "fire",
      "dark"
    ],
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "special-attack": 80,
      "special-defense": 90,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 728,
    "name": "Popplio",
    "evolutions": [
      {
        "id": 729,
        "level": 17
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 54,
      "defense": 54,
      "special-attack": 66,
      "special-defense": 56,
      "speed": 40
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 729,
    "name": "Brionne",
    "evolutions": [
      {
        "id": 730,
        "level": 34
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 60,
      "attack": 69,
      "defense": 69,
      "special-attack": 91,
      "special-defense": 81,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 730,
    "name": "Primarina",
    "evolutions": [],
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "special-attack": 126,
      "special-defense": 116,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 731,
    "name": "Pikipek",
    "evolutions": [
      {
        "id": 732,
        "level": 14
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 35,
      "attack": 75,
      "defense": 30,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 65
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 732,
    "name": "Trumbeak",
    "evolutions": [
      {
        "id": 733,
        "level": 28
      }
    ],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 75
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 733,
    "name": "Toucannon",
    "evolutions": [],
    "types": [
      "normal",
      "flying"
    ],
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "special-attack": 75,
      "special-defense": 75,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 734,
    "name": "Yungoos",
    "evolutions": [
      {
        "id": 735,
        "level": 20
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 48,
      "attack": 70,
      "defense": 30,
      "special-attack": 30,
      "special-defense": 30,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 735,
    "name": "Gumshoos",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "special-attack": 55,
      "special-defense": 60,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 736,
    "name": "Grubbin",
    "evolutions": [
      {
        "id": 737,
        "level": 20
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 47,
      "attack": 62,
      "defense": 45,
      "special-attack": 55,
      "special-defense": 45,
      "speed": 46
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 737,
    "name": "Charjabug",
    "evolutions": [
      {
        "id": 738,
        "level": 30
      }
    ],
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 57,
      "attack": 82,
      "defense": 95,
      "special-attack": 55,
      "special-defense": 75,
      "speed": 36
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 738,
    "name": "Vikavolt",
    "evolutions": [],
    "types": [
      "bug",
      "electric"
    ],
    "stats": {
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "special-attack": 145,
      "special-defense": 75,
      "speed": 43
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 739,
    "name": "Crabrawler",
    "evolutions": [
      {
        "id": 740,
        "level": 30
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 47,
      "attack": 82,
      "defense": 57,
      "special-attack": 42,
      "special-defense": 47,
      "speed": 63
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 740,
    "name": "Crabominable",
    "evolutions": [],
    "types": [
      "fighting",
      "ice"
    ],
    "stats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "special-attack": 62,
      "special-defense": 67,
      "speed": 43
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 741,
    "name": "Oricorio",
    "evolutions": [],
    "types": [
      "fire",
      "flying"
    ],
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "special-attack": 98,
      "special-defense": 70,
      "speed": 93
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 742,
    "name": "Cutiefly",
    "evolutions": [
      {
        "id": 743,
        "level": 25
      }
    ],
    "types": [
      "bug",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special-attack": 55,
      "special-defense": 40,
      "speed": 84
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 743,
    "name": "Ribombee",
    "evolutions": [],
    "types": [
      "bug",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "special-attack": 95,
      "special-defense": 70,
      "speed": 124
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 744,
    "name": "Rockruff",
    "evolutions": [
      {
        "id": 745,
        "level": 25
      }
    ],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "special-attack": 30,
      "special-defense": 40,
      "speed": 60
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 745,
    "name": "Lycanroc",
    "evolutions": [],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "special-attack": 55,
      "special-defense": 65,
      "speed": 112
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 746,
    "name": "Wishiwashi",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 20,
      "special-attack": 25,
      "special-defense": 25,
      "speed": 40
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 747,
    "name": "Mareanie",
    "evolutions": [
      {
        "id": 748,
        "level": 38
      }
    ],
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "special-attack": 43,
      "special-defense": 52,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 748,
    "name": "Toxapex",
    "evolutions": [],
    "types": [
      "poison",
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "special-attack": 53,
      "special-defense": 142,
      "speed": 35
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 749,
    "name": "Mudbray",
    "evolutions": [
      {
        "id": 750,
        "level": 30
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special-attack": 45,
      "special-defense": 55,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 750,
    "name": "Mudsdale",
    "evolutions": [],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "special-attack": 55,
      "special-defense": 85,
      "speed": 35
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 751,
    "name": "Dewpider",
    "evolutions": [
      {
        "id": 752,
        "level": 22
      }
    ],
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 38,
      "attack": 40,
      "defense": 52,
      "special-attack": 40,
      "special-defense": 72,
      "speed": 27
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 752,
    "name": "Araquanid",
    "evolutions": [],
    "types": [
      "water",
      "bug"
    ],
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "special-attack": 50,
      "special-defense": 132,
      "speed": 42
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 753,
    "name": "Fomantis",
    "evolutions": [
      {
        "id": 754,
        "level": 34
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 35,
      "special-attack": 50,
      "special-defense": 35,
      "speed": 35
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 754,
    "name": "Lurantis",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "special-attack": 80,
      "special-defense": 90,
      "speed": 45
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 755,
    "name": "Morelull",
    "evolutions": [
      {
        "id": 756,
        "level": 24
      }
    ],
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 55,
      "special-attack": 65,
      "special-defense": 75,
      "speed": 15
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 756,
    "name": "Shiinotic",
    "evolutions": [],
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 80,
      "special-attack": 90,
      "special-defense": 100,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 757,
    "name": "Salandit",
    "evolutions": [
      {
        "id": 758,
        "level": 33
      }
    ],
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 48,
      "attack": 44,
      "defense": 40,
      "special-attack": 71,
      "special-defense": 40,
      "speed": 77
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 758,
    "name": "Salazzle",
    "evolutions": [],
    "types": [
      "poison",
      "fire"
    ],
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "special-attack": 111,
      "special-defense": 60,
      "speed": 117
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 759,
    "name": "Stufful",
    "evolutions": [
      {
        "id": 760,
        "level": 27
      }
    ],
    "types": [
      "normal",
      "fighting"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "special-attack": 45,
      "special-defense": 50,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 760,
    "name": "Bewear",
    "evolutions": [],
    "types": [
      "normal",
      "fighting"
    ],
    "stats": {
      "hp": 120,
      "attack": 125,
      "defense": 80,
      "special-attack": 55,
      "special-defense": 60,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 761,
    "name": "Bounsweet",
    "evolutions": [
      {
        "id": 762,
        "level": 18
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 38,
      "special-attack": 30,
      "special-defense": 38,
      "speed": 32
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 762,
    "name": "Steenee",
    "evolutions": [
      {
        "id": 763,
        "level": 30
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 52,
      "attack": 40,
      "defense": 48,
      "special-attack": 40,
      "special-defense": 48,
      "speed": 62
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 763,
    "name": "Tsareena",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "special-attack": 50,
      "special-defense": 98,
      "speed": 72
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 764,
    "name": "Comfey",
    "evolutions": [],
    "types": [
      "fairy"
    ],
    "stats": {
      "hp": 51,
      "attack": 52,
      "defense": 90,
      "special-attack": 82,
      "special-defense": 110,
      "speed": 100
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 765,
    "name": "Oranguru",
    "evolutions": [],
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "special-attack": 90,
      "special-defense": 110,
      "speed": 60
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 766,
    "name": "Passimian",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "special-attack": 40,
      "special-defense": 60,
      "speed": 80
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 767,
    "name": "Wimpod",
    "evolutions": [
      {
        "id": 768,
        "level": 30
      }
    ],
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 40,
      "special-attack": 20,
      "special-defense": 30,
      "speed": 80
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 768,
    "name": "Golisopod",
    "evolutions": [],
    "types": [
      "bug",
      "water"
    ],
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "special-attack": 60,
      "special-defense": 90,
      "speed": 40
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 769,
    "name": "Sandygast",
    "evolutions": [
      {
        "id": 770,
        "level": 42
      }
    ],
    "types": [
      "ghost",
      "ground"
    ],
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 80,
      "special-attack": 70,
      "special-defense": 45,
      "speed": 15
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 770,
    "name": "Palossand",
    "evolutions": [],
    "types": [
      "ghost",
      "ground"
    ],
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 110,
      "special-attack": 100,
      "special-defense": 75,
      "speed": 35
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 771,
    "name": "Pyukumuku",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 55,
      "attack": 60,
      "defense": 130,
      "special-attack": 30,
      "special-defense": 130,
      "speed": 5
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 772,
    "name": "Type-null",
    "evolutions": [
      {
        "id": 773,
        "level": 30
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "special-attack": 95,
      "special-defense": 95,
      "speed": 59
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 773,
    "name": "Silvally",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "special-attack": 95,
      "special-defense": 95,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 774,
    "name": "Minior",
    "evolutions": [],
    "types": [
      "rock",
      "flying"
    ],
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "special-attack": 60,
      "special-defense": 100,
      "speed": 60
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 775,
    "name": "Komala",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 65,
      "attack": 115,
      "defense": 65,
      "special-attack": 75,
      "special-defense": 95,
      "speed": 65
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 776,
    "name": "Turtonator",
    "evolutions": [],
    "types": [
      "fire",
      "dragon"
    ],
    "stats": {
      "hp": 60,
      "attack": 78,
      "defense": 135,
      "special-attack": 91,
      "special-defense": 85,
      "speed": 36
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 777,
    "name": "Togedemaru",
    "evolutions": [],
    "types": [
      "electric",
      "steel"
    ],
    "stats": {
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "special-attack": 40,
      "special-defense": 73,
      "speed": 96
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 778,
    "name": "Mimikyu",
    "evolutions": [],
    "types": [
      "ghost",
      "fairy"
    ],
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 96
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 779,
    "name": "Bruxish",
    "evolutions": [],
    "types": [
      "water",
      "psychic"
    ],
    "stats": {
      "hp": 68,
      "attack": 105,
      "defense": 70,
      "special-attack": 70,
      "special-defense": 70,
      "speed": 92
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 780,
    "name": "Drampa",
    "evolutions": [],
    "types": [
      "normal",
      "dragon"
    ],
    "stats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "special-attack": 135,
      "special-defense": 91,
      "speed": 36
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 781,
    "name": "Dhelmise",
    "evolutions": [],
    "types": [
      "ghost",
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 131,
      "defense": 100,
      "special-attack": 86,
      "special-defense": 90,
      "speed": 40
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 782,
    "name": "Jangmo-o",
    "evolutions": [
      {
        "id": 783,
        "level": 35
      }
    ],
    "types": [
      "dragon"
    ],
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 65,
      "special-attack": 45,
      "special-defense": 45,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 783,
    "name": "Hakamo-o",
    "evolutions": [
      {
        "id": 784,
        "level": 45
      }
    ],
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 90,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 784,
    "name": "Kommo-o",
    "evolutions": [],
    "types": [
      "dragon",
      "fighting"
    ],
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "special-attack": 100,
      "special-defense": 105,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 785,
    "name": "Tapu-koko",
    "evolutions": [],
    "types": [
      "electric",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 85,
      "special-attack": 95,
      "special-defense": 75,
      "speed": 130
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 786,
    "name": "Tapu-lele",
    "evolutions": [],
    "types": [
      "psychic",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 75,
      "special-attack": 130,
      "special-defense": 115,
      "speed": 95
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 787,
    "name": "Tapu-bulu",
    "evolutions": [],
    "types": [
      "grass",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 115,
      "special-attack": 85,
      "special-defense": 95,
      "speed": 75
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 788,
    "name": "Tapu-fini",
    "evolutions": [],
    "types": [
      "water",
      "fairy"
    ],
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 115,
      "special-attack": 95,
      "special-defense": 130,
      "speed": 85
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 789,
    "name": "Cosmog",
    "evolutions": [
      {
        "id": 790,
        "level": 43
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 31,
      "special-attack": 29,
      "special-defense": 31,
      "speed": 37
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 790,
    "name": "Cosmoem",
    "evolutions": [
      {
        "id": 791,
        "level": 53
      },
      {
        "id": 792,
        "level": 53
      }
    ],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 131,
      "special-attack": 29,
      "special-defense": 131,
      "speed": 37
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 791,
    "name": "Solgaleo",
    "evolutions": [],
    "types": [
      "psychic",
      "steel"
    ],
    "stats": {
      "hp": 137,
      "attack": 137,
      "defense": 107,
      "special-attack": 113,
      "special-defense": 89,
      "speed": 97
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 792,
    "name": "Lunala",
    "evolutions": [],
    "types": [
      "psychic",
      "ghost"
    ],
    "stats": {
      "hp": 137,
      "attack": 113,
      "defense": 89,
      "special-attack": 137,
      "special-defense": 107,
      "speed": 97
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 793,
    "name": "Nihilego",
    "evolutions": [],
    "types": [
      "rock",
      "poison"
    ],
    "stats": {
      "hp": 109,
      "attack": 53,
      "defense": 47,
      "special-attack": 127,
      "special-defense": 131,
      "speed": 103
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 794,
    "name": "Buzzwole",
    "evolutions": [],
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 107,
      "attack": 139,
      "defense": 139,
      "special-attack": 53,
      "special-defense": 53,
      "speed": 79
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 795,
    "name": "Pheromosa",
    "evolutions": [],
    "types": [
      "bug",
      "fighting"
    ],
    "stats": {
      "hp": 71,
      "attack": 137,
      "defense": 37,
      "special-attack": 137,
      "special-defense": 37,
      "speed": 151
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 796,
    "name": "Xurkitree",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 83,
      "attack": 89,
      "defense": 71,
      "special-attack": 173,
      "special-defense": 71,
      "speed": 83
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 797,
    "name": "Celesteela",
    "evolutions": [],
    "types": [
      "steel",
      "flying"
    ],
    "stats": {
      "hp": 97,
      "attack": 101,
      "defense": 103,
      "special-attack": 107,
      "special-defense": 101,
      "speed": 61
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 798,
    "name": "Kartana",
    "evolutions": [],
    "types": [
      "grass",
      "steel"
    ],
    "stats": {
      "hp": 59,
      "attack": 181,
      "defense": 131,
      "special-attack": 59,
      "special-defense": 31,
      "speed": 109
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 799,
    "name": "Guzzlord",
    "evolutions": [],
    "types": [
      "dark",
      "dragon"
    ],
    "stats": {
      "hp": 223,
      "attack": 101,
      "defense": 53,
      "special-attack": 97,
      "special-defense": 53,
      "speed": 43
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 800,
    "name": "Necrozma",
    "evolutions": [],
    "types": [
      "psychic"
    ],
    "stats": {
      "hp": 97,
      "attack": 107,
      "defense": 101,
      "special-attack": 127,
      "special-defense": 89,
      "speed": 79
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 801,
    "name": "Magearna",
    "evolutions": [],
    "types": [
      "steel",
      "fairy"
    ],
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "special-attack": 130,
      "special-defense": 115,
      "speed": 65
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 802,
    "name": "Marshadow",
    "evolutions": [],
    "types": [
      "fighting",
      "ghost"
    ],
    "stats": {
      "hp": 90,
      "attack": 125,
      "defense": 80,
      "special-attack": 90,
      "special-defense": 90,
      "speed": 125
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 803,
    "name": "Poipole",
    "evolutions": [
      {
        "id": 804,
        "level": 30
      }
    ],
    "types": [
      "poison"
    ],
    "stats": {
      "hp": 67,
      "attack": 73,
      "defense": 67,
      "special-attack": 73,
      "special-defense": 67,
      "speed": 73
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 804,
    "name": "Naganadel",
    "evolutions": [],
    "types": [
      "poison",
      "dragon"
    ],
    "stats": {
      "hp": 73,
      "attack": 73,
      "defense": 73,
      "special-attack": 127,
      "special-defense": 73,
      "speed": 121
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 805,
    "name": "Stakataka",
    "evolutions": [],
    "types": [
      "rock",
      "steel"
    ],
    "stats": {
      "hp": 61,
      "attack": 131,
      "defense": 211,
      "special-attack": 53,
      "special-defense": 101,
      "speed": 13
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 806,
    "name": "Blacephalon",
    "evolutions": [],
    "types": [
      "fire",
      "ghost"
    ],
    "stats": {
      "hp": 53,
      "attack": 127,
      "defense": 53,
      "special-attack": 151,
      "special-defense": 79,
      "speed": 107
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 807,
    "name": "Zeraora",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 88,
      "attack": 112,
      "defense": 75,
      "special-attack": 102,
      "special-defense": 80,
      "speed": 143
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 808,
    "name": "Meltan",
    "evolutions": [],
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 46,
      "attack": 65,
      "defense": 65,
      "special-attack": 55,
      "special-defense": 35,
      "speed": 34
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 809,
    "name": "Melmetal",
    "evolutions": [],
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "special-attack": 80,
      "special-defense": 65,
      "speed": 34
    },
    "rarity": 5,
    "isBase": true
  },
  {
    "id": 810,
    "name": "Grookey",
    "evolutions": [
      {
        "id": 811,
        "level": 16
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 65
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 811,
    "name": "Thwackey",
    "evolutions": [
      {
        "id": 812,
        "level": 35
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "special-attack": 55,
      "special-defense": 60,
      "speed": 80
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 812,
    "name": "Rillaboom",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 813,
    "name": "Scorbunny",
    "evolutions": [
      {
        "id": 814,
        "level": 16
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 50,
      "attack": 71,
      "defense": 40,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 69
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 814,
    "name": "Raboot",
    "evolutions": [
      {
        "id": 815,
        "level": 35
      }
    ],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 65,
      "attack": 86,
      "defense": 60,
      "special-attack": 55,
      "special-defense": 60,
      "speed": 94
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 815,
    "name": "Cinderace",
    "evolutions": [],
    "types": [
      "fire"
    ],
    "stats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "special-attack": 65,
      "special-defense": 75,
      "speed": 119
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 816,
    "name": "Sobble",
    "evolutions": [
      {
        "id": 817,
        "level": 16
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 40,
      "special-attack": 70,
      "special-defense": 40,
      "speed": 70
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 817,
    "name": "Drizzile",
    "evolutions": [
      {
        "id": 818,
        "level": 35
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 55,
      "special-attack": 95,
      "special-defense": 55,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 818,
    "name": "Inteleon",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special-attack": 125,
      "special-defense": 65,
      "speed": 120
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 819,
    "name": "Skwovet",
    "evolutions": [
      {
        "id": 820,
        "level": 24
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "special-attack": 35,
      "special-defense": 35,
      "speed": 25
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 820,
    "name": "Greedent",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 120,
      "attack": 95,
      "defense": 95,
      "special-attack": 55,
      "special-defense": 75,
      "speed": 20
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 821,
    "name": "Rookidee",
    "evolutions": [
      {
        "id": 822,
        "level": 18
      }
    ],
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 38,
      "attack": 47,
      "defense": 35,
      "special-attack": 33,
      "special-defense": 35,
      "speed": 57
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 822,
    "name": "Corvisquire",
    "evolutions": [
      {
        "id": 823,
        "level": 38
      }
    ],
    "types": [
      "flying"
    ],
    "stats": {
      "hp": 68,
      "attack": 67,
      "defense": 55,
      "special-attack": 43,
      "special-defense": 55,
      "speed": 77
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 823,
    "name": "Corviknight",
    "evolutions": [],
    "types": [
      "flying",
      "steel"
    ],
    "stats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "special-attack": 53,
      "special-defense": 85,
      "speed": 67
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 824,
    "name": "Blipbug",
    "evolutions": [
      {
        "id": 825,
        "level": 10
      }
    ],
    "types": [
      "bug"
    ],
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 20,
      "special-attack": 25,
      "special-defense": 45,
      "speed": 45
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 825,
    "name": "Dottler",
    "evolutions": [
      {
        "id": 826,
        "level": 30
      }
    ],
    "types": [
      "bug",
      "psychic"
    ],
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 80,
      "special-attack": 50,
      "special-defense": 90,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 826,
    "name": "Orbeetle",
    "evolutions": [],
    "types": [
      "bug",
      "psychic"
    ],
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "special-attack": 80,
      "special-defense": 120,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 827,
    "name": "Nickit",
    "evolutions": [
      {
        "id": 828,
        "level": 18
      }
    ],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 40,
      "attack": 28,
      "defense": 28,
      "special-attack": 47,
      "special-defense": 52,
      "speed": 50
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 828,
    "name": "Thievul",
    "evolutions": [],
    "types": [
      "dark"
    ],
    "stats": {
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "special-attack": 87,
      "special-defense": 92,
      "speed": 90
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 829,
    "name": "Gossifleur",
    "evolutions": [
      {
        "id": 830,
        "level": 20
      }
    ],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 60,
      "special-attack": 40,
      "special-defense": 60,
      "speed": 10
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 830,
    "name": "Eldegoss",
    "evolutions": [],
    "types": [
      "grass"
    ],
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 90,
      "special-attack": 80,
      "special-defense": 120,
      "speed": 60
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 831,
    "name": "Wooloo",
    "evolutions": [
      {
        "id": 832,
        "level": 24
      }
    ],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 42,
      "attack": 40,
      "defense": 55,
      "special-attack": 40,
      "special-defense": 45,
      "speed": 48
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 832,
    "name": "Dubwool",
    "evolutions": [],
    "types": [
      "normal"
    ],
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 100,
      "special-attack": 60,
      "special-defense": 90,
      "speed": 88
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 833,
    "name": "Chewtle",
    "evolutions": [
      {
        "id": 834,
        "level": 22
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "special-attack": 38,
      "special-defense": 38,
      "speed": 44
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 834,
    "name": "Drednaw",
    "evolutions": [],
    "types": [
      "water",
      "rock"
    ],
    "stats": {
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "special-attack": 48,
      "special-defense": 68,
      "speed": 74
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 835,
    "name": "Yamper",
    "evolutions": [
      {
        "id": 836,
        "level": 25
      }
    ],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 26
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 836,
    "name": "Boltund",
    "evolutions": [],
    "types": [
      "electric"
    ],
    "stats": {
      "hp": 69,
      "attack": 90,
      "defense": 60,
      "special-attack": 90,
      "special-defense": 60,
      "speed": 121
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 837,
    "name": "Rolycoly",
    "evolutions": [
      {
        "id": 838,
        "level": 18
      }
    ],
    "types": [
      "rock"
    ],
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 50,
      "special-attack": 40,
      "special-defense": 50,
      "speed": 30
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 838,
    "name": "Carkol",
    "evolutions": [
      {
        "id": 839,
        "level": 34
      }
    ],
    "types": [
      "rock",
      "fire"
    ],
    "stats": {
      "hp": 80,
      "attack": 60,
      "defense": 90,
      "special-attack": 60,
      "special-defense": 70,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 839,
    "name": "Coalossal",
    "evolutions": [],
    "types": [
      "rock",
      "fire"
    ],
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "special-attack": 80,
      "special-defense": 90,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 840,
    "name": "Applin",
    "evolutions": [
      {
        "id": 841,
        "level": 30
      },
      {
        "id": 842,
        "level": 30
      },
      {
        "id": 1011,
        "level": 30
      }
    ],
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 80,
      "special-attack": 40,
      "special-defense": 40,
      "speed": 20
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 841,
    "name": "Flapple",
    "evolutions": [],
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special-attack": 95,
      "special-defense": 60,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 842,
    "name": "Appletun",
    "evolutions": [],
    "types": [
      "grass",
      "dragon"
    ],
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "special-attack": 100,
      "special-defense": 80,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 843,
    "name": "Silicobra",
    "evolutions": [
      {
        "id": 844,
        "level": 36
      }
    ],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 52,
      "attack": 57,
      "defense": 75,
      "special-attack": 35,
      "special-defense": 50,
      "speed": 46
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 844,
    "name": "Sandaconda",
    "evolutions": [],
    "types": [
      "ground"
    ],
    "stats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "special-attack": 65,
      "special-defense": 70,
      "speed": 71
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 845,
    "name": "Cramorant",
    "evolutions": [],
    "types": [
      "flying",
      "water"
    ],
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "special-attack": 85,
      "special-defense": 95,
      "speed": 85
    },
    "rarity": 3,
    "isBase": true
  },
  {
    "id": 846,
    "name": "Arrokuda",
    "evolutions": [
      {
        "id": 847,
        "level": 26
      }
    ],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 41,
      "attack": 63,
      "defense": 40,
      "special-attack": 40,
      "special-defense": 30,
      "speed": 66
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 847,
    "name": "Barraskewda",
    "evolutions": [],
    "types": [
      "water"
    ],
    "stats": {
      "hp": 61,
      "attack": 123,
      "defense": 60,
      "special-attack": 60,
      "special-defense": 50,
      "speed": 136
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 848,
    "name": "Toxel",
    "evolutions": [
      {
        "id": 849,
        "level": 30
      }
    ],
    "types": [
      "electric",
      "poison"
    ],
    "stats": {
      "hp": 40,
      "attack": 38,
      "defense": 35,
      "special-attack": 54,
      "special-defense": 35,
      "speed": 40
    },
    "rarity": 1,
    "isBase": true
  },
  {
    "id": 849,
    "name": "Toxtricity",
    "evolutions": [],
    "types": [
      "electric",
      "poison"
    ],
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "special-attack": 114,
      "special-defense": 70,
      "speed": 75
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 850,
    "name": "Sizzlipede",
    "evolutions": [
      {
        "id": 851,
        "level": 28
      }
    ],
    "types": [
      "fire",
      "bug"
    ],
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 45
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 851,
    "name": "Centiskorch",
    "evolutions": [],
    "types": [
      "fire",
      "bug"
    ],
    "stats": {
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "special-attack": 90,
      "special-defense": 90,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 852,
    "name": "Clobbopus",
    "evolutions": [
      {
        "id": 853,
        "level": 30
      }
    ],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 50,
      "attack": 68,
      "defense": 60,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 32
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 853,
    "name": "Grapploct",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "special-attack": 70,
      "special-defense": 80,
      "speed": 42
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 854,
    "name": "Sinistea",
    "evolutions": [
      {
        "id": 855,
        "level": 30
      }
    ],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "special-attack": 74,
      "special-defense": 54,
      "speed": 50
    },
    "rarity": 2,
    "isBase": true
  },
  {
    "id": 855,
    "name": "Polteageist",
    "evolutions": [],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "special-attack": 134,
      "special-defense": 114,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 862,
    "name": "Obstagoon",
    "evolutions": [],
    "types": [
      "dark",
      "normal"
    ],
    "stats": {
      "hp": 93,
      "attack": 90,
      "defense": 101,
      "special-attack": 60,
      "special-defense": 81,
      "speed": 95
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 863,
    "name": "Perrserker",
    "evolutions": [],
    "types": [
      "steel"
    ],
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "special-attack": 50,
      "special-defense": 60,
      "speed": 50
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 864,
    "name": "Cursola",
    "evolutions": [],
    "types": [
      "ghost"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 50,
      "special-attack": 145,
      "special-defense": 130,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 865,
    "name": "Sirfetchd",
    "evolutions": [],
    "types": [
      "fighting"
    ],
    "stats": {
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "special-attack": 68,
      "special-defense": 82,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 866,
    "name": "Mr-rime",
    "evolutions": [],
    "types": [
      "ice",
      "psychic"
    ],
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "special-attack": 110,
      "special-defense": 100,
      "speed": 70
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 867,
    "name": "Runerigus",
    "evolutions": [],
    "types": [
      "ground",
      "ghost"
    ],
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "special-attack": 50,
      "special-defense": 105,
      "speed": 30
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 899,
    "name": "Wyrdeer",
    "evolutions": [],
    "types": [
      "normal",
      "psychic"
    ],
    "stats": {
      "hp": 103,
      "attack": 105,
      "defense": 72,
      "special-attack": 105,
      "special-defense": 75,
      "speed": 65
    },
    "rarity": 4,
    "isBase": false
  },
  {
    "id": 900,
    "name": "Kleavor",
    "evolutions": [],
    "types": [
      "bug",
      "rock"
    ],
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 95,
      "special-attack": 45,
      "special-defense": 70,
      "speed": 85
    },
    "rarity": 4,
    "isBase": false
  }
];
