import { Position, Stats, Team } from "./domain";

import { SportsSimulator } from "./sports-simulator";

// Client Code
const simulator = new SportsSimulator();

const forward = new Position('Forward', 'Attacker');
const midfielder = new Position('Midfielder', 'Support');
const defender = new Position('Defender', 'Defender');
const goalkeeper = new Position('Goalkeeper', 'Goalkeeper');

const positions = [goalkeeper, defender, midfielder, forward]

const teams: Team[] = [
    new Team("New Team", "Roberto Sedinho"),
    new Team("Furano FC", "Koujiro Hyuuga"),
    new Team("Toho Academy", "Kira Hiroto"),
    new Team("Nankatsu SC", "Tsubasa Ozora"),
    new Team("Otomo FC", "Shingo Aoi"),
    new Team("Hirado FC", "Hajime Taki"),
    new Team("Mamoru United", "Taro Misaki"),
    new Team("Meiwa FC", "Jun Misugi")
];

const captainTsubasaCharacters: string[] = [
    "Tsubasa Ozora",
    "Koujiro Hyuuga",
    "Genzo Wakabayashi",
    "Taro Misaki",
    "Shingo Aoi",
    "Hikaru Matsuyama",
    "Jun Misugi",
    "Ken Wakashimazu",
    "Kazuo Tachibana",
    "Masao Tachibana",
    "Ryo Ishizaki",
    "Kojiro Hyuga",
    "Teppei Kisugi",
    "Hiroshi Jito",
    "Shun Nitta",
    "Mamoru Izawa",
    "Hanji Urabe",
    "Shingo Takasugi",
    "Mitsuru Sano",
    "Makoto Soda"
];


for(let i = 0; i < 25*teams.length -1; i++){
    const team = teams[i % teams.length];
    const position = positions[i % positions.length];
    const playerName = captainTsubasaCharacters[i % captainTsubasaCharacters.length];
  
    simulator.addPlayer(playerName, position, team, new Stats(Math.floor(Math.random() * 20), Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)));
}

simulator.displayPlayers();
