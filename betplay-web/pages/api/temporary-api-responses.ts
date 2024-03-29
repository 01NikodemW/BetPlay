import { BetsResponse } from "@/types/bets/bets-response";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

export const exampleFixtureDetails: FixtureDetails = {
  fixture: {
    id: 878192,
    referee: "José Munuera",
    timezone: "UTC",
    date: "2023-03-18T20:00:00+00:00",
    timestamp: 1679169600,
    periods: {
      first: 1679169600,
      second: 1679173200,
    },
    venue: {
      id: 19217,
      name: "Estádio Cívitas Metropolitano",
      city: "Madrid",
    },
    status: {
      long: "Match Finished",
      short: "FT",
      elapsed: 90,
    },
    league: null,
  },
  league: {
    id: 140,
    name: "La Liga",
    country: "Spain",
    logo: "https://media-1.api-sports.io/football/leagues/140.png",
    flag: "https://media-1.api-sports.io/flags/es.svg",
    season: 2022,
    round: "Regular Season - 26",
  },
  teams: {
    home: {
      id: 530,
      name: "Atletico Madrid",
      logo: "https://media-2.api-sports.io/football/teams/530.png",
      winner: true,
    },
    away: {
      id: 532,
      name: "Valencia",
      logo: "https://media-2.api-sports.io/football/teams/532.png",
      winner: false,
    },
  },
  goals: {
    home: 3,
    away: 0,
  },
  score: {
    halftime: {
      home: 1,
      away: 0,
    },
    fulltime: {
      home: 3,
      away: 0,
    },
    extratime: {
      home: null,
      away: null,
    },
    penalty: {
      home: null,
      away: null,
    },
    // penalty: {
    //   home: 1,
    //   away: 1,
    // },
  },
  events: [
    {
      time: {
        elapsed: 4,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 56,
        name: "Antoine Griezmann",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Card",
      detail: "Yellow Card",
      comments: "Foul",
    },
    {
      time: {
        elapsed: 23,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-1.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 56,
        name: "A. Griezmann",
      },
      assist: {
        id: 753,
        name: "Marcos Llorente",
      },
      type: "Goal",
      detail: "Normal Goal",
      comments: null,
    },
    {
      time: {
        elapsed: 42,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 753,
        name: "Marcos Llorente",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Card",
      detail: "Yellow Card",
      comments: "Foul",
    },
    {
      time: {
        elapsed: 49,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-2.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 2923,
        name: "Y. Carrasco",
      },
      assist: {
        id: 2472,
        name: "R. De Paul",
      },
      type: "Goal",
      detail: "Normal Goal",
      comments: null,
    },
    {
      time: {
        elapsed: 63,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-3.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 162106,
        name: "Y. Musah",
      },
      assist: {
        id: 162123,
        name: "I. Moriba",
      },
      type: "subst",
      detail: "Substitution 1",
      comments: null,
    },
    {
      time: {
        elapsed: 63,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 1482,
        name: "Thierry Correia",
      },
      assist: {
        id: 126936,
        name: "Samuel Lino",
      },
      type: "subst",
      detail: "Substitution 2",
      comments: null,
    },
    {
      time: {
        elapsed: 64,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 2472,
        name: "R. De Paul",
      },
      assist: {
        id: 45,
        name: "T. Lemar",
      },
      type: "subst",
      detail: "Substitution 1",
      comments: null,
    },
    {
      time: {
        elapsed: 64,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-1.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 667,
        name: "M. Depay",
      },
      assist: {
        id: 59,
        name: "Álvaro Morata",
      },
      type: "subst",
      detail: "Substitution 2",
      comments: null,
    },
    {
      time: {
        elapsed: 67,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 45,
        name: "T. Lemar",
      },
      assist: {
        id: 59,
        name: "Álvaro Morata",
      },
      type: "Goal",
      detail: "Normal Goal",
      comments: null,
    },
    {
      time: {
        elapsed: 70,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-2.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 753,
        name: "Marcos Llorente",
      },
      assist: {
        id: 336594,
        name: "Pablo Barrios",
      },
      type: "subst",
      detail: "Substitution 3",
      comments: null,
    },
    {
      time: {
        elapsed: 70,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-1.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 2923,
        name: "Y. Carrasco",
      },
      assist: {
        id: 53,
        name: "Á. Correa",
      },
      type: "subst",
      detail: "Substitution 4",
      comments: null,
    },
    {
      time: {
        elapsed: 70,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-2.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 161933,
        name: "Nico González",
      },
      assist: {
        id: 41157,
        name: "André Almeida",
      },
      type: "subst",
      detail: "Substitution 3",
      comments: null,
    },
    {
      time: {
        elapsed: 70,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 47264,
        name: "Hugo Duro",
      },
      assist: {
        id: 274,
        name: "E. Cavani",
      },
      type: "subst",
      detail: "Substitution 4",
      comments: null,
    },
    {
      time: {
        elapsed: 77,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-2.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 50,
        name: "Koke",
      },
      assist: {
        id: 20,
        name: "A. Witsel",
      },
      type: "subst",
      detail: "Substitution 5",
      comments: null,
    },
    {
      time: {
        elapsed: 77,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-3.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 792,
        name: "J. Kluivert",
      },
      assist: {
        id: 1641,
        name: "Samu Castillejo",
      },
      type: "subst",
      detail: "Substitution 5",
      comments: null,
    },
  ],
  lineups: [
    {
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
        colors: {
          player: {
            primary: "f00000",
            number: "ffffff",
            border: "f00000",
          },
          goalkeeper: {
            primary: "ccff00",
            number: "000000",
            border: "ccff00",
          },
        },
      },
      coach: {
        id: 1595,
        name: "D. Simeone",
        photo: "https://media-3.api-sports.io/football/coachs/1595.png",
      },
      formation: "5-3-2",
      startXI: [
        {
          player: {
            id: 29,
            name: "J. Oblak",
            number: 13,
            pos: "G",
            grid: "1:1",
          },
        },
        {
          player: {
            id: 6503,
            name: "N. Molina",
            number: 16,
            pos: "D",
            grid: "2:5",
          },
        },
        {
          player: {
            id: 39,
            name: "S. Savić",
            number: 15,
            pos: "D",
            grid: "2:4",
          },
        },
        {
          player: {
            id: 31,
            name: "J. Giménez",
            number: 2,
            pos: "D",
            grid: "2:3",
          },
        },
        {
          player: {
            id: 2669,
            name: "Hermoso",
            number: 22,
            pos: "D",
            grid: "2:2",
          },
        },
        {
          player: {
            id: 2923,
            name: "Y. Carrasco",
            number: 21,
            pos: "D",
            grid: "2:1",
          },
        },
        {
          player: {
            id: 753,
            name: "Marcos Llorente",
            number: 14,
            pos: "M",
            grid: "3:3",
          },
        },
        {
          player: {
            id: 50,
            name: "Koke",
            number: 6,
            pos: "M",
            grid: "3:2",
          },
        },
        {
          player: {
            id: 2472,
            name: "R. De Paul",
            number: 5,
            pos: "M",
            grid: "3:1",
          },
        },
        {
          player: {
            id: 667,
            name: "M. Depay",
            number: 9,
            pos: "F",
            grid: "4:2",
          },
        },
        {
          player: {
            id: 56,
            name: "A. Griezmann",
            number: 8,
            pos: "F",
            grid: "4:1",
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 45,
            name: "T. Lemar",
            number: 11,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 59,
            name: "Álvaro Morata",
            number: 19,
            pos: "F",
            grid: null,
          },
        },
        {
          player: {
            id: 336594,
            name: "Pablo Barrios",
            number: 24,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 53,
            name: "Á. Correa",
            number: 10,
            pos: "F",
            grid: null,
          },
        },
        {
          player: {
            id: 20,
            name: "A. Witsel",
            number: 20,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 48,
            name: "Saúl",
            number: 17,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 18742,
            name: "M. Doherty",
            number: 12,
            pos: "D",
            grid: null,
          },
        },
        {
          player: {
            id: 315604,
            name: "Alejandro Iturbe",
            number: 33,
            pos: "G",
            grid: null,
          },
        },
        {
          player: {
            id: 14382,
            name: "I. Grbić",
            number: 1,
            pos: "G",
            grid: null,
          },
        },
        {
          player: {
            id: 926,
            name: "G. Kondogbia",
            number: 4,
            pos: "M",
            grid: null,
          },
        },
      ],
    },
    {
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
        colors: {
          player: {
            primary: "ffffff",
            number: "040404",
            border: "ffffff",
          },
          goalkeeper: {
            primary: "6666ff",
            number: "ffffff",
            border: "6666ff",
          },
        },
      },
      coach: {
        id: 3234,
        name: "Rubén Baraja",
        photo: "https://media-2.api-sports.io/football/coachs/3234.png",
      },
      formation: "4-5-1",
      startXI: [
        {
          player: {
            id: 24760,
            name: "G. Mamardashvili",
            number: 25,
            pos: "G",
            grid: "1:1",
          },
        },
        {
          player: {
            id: 47251,
            name: "D. Foulquier",
            number: 20,
            pos: "D",
            grid: "2:4",
          },
        },
        {
          player: {
            id: 48372,
            name: "E. Cömert",
            number: 24,
            pos: "D",
            grid: "2:3",
          },
        },
        {
          player: {
            id: 72048,
            name: "C. Özkacar",
            number: 15,
            pos: "D",
            grid: "2:2",
          },
        },
        {
          player: {
            id: 918,
            name: "José Gayà",
            number: 14,
            pos: "D",
            grid: "2:1",
          },
        },
        {
          player: {
            id: 1482,
            name: "Thierry Correia",
            number: 2,
            pos: "M",
            grid: "3:5",
          },
        },
        {
          player: {
            id: 162106,
            name: "Y. Musah",
            number: 4,
            pos: "M",
            grid: "3:4",
          },
        },
        {
          player: {
            id: 919,
            name: "Hugo Guillamón",
            number: 6,
            pos: "M",
            grid: "3:3",
          },
        },
        {
          player: {
            id: 161933,
            name: "Nico González",
            number: 17,
            pos: "M",
            grid: "3:2",
          },
        },
        {
          player: {
            id: 792,
            name: "J. Kluivert",
            number: 9,
            pos: "M",
            grid: "3:1",
          },
        },
        {
          player: {
            id: 47264,
            name: "Hugo Duro",
            number: 19,
            pos: "F",
            grid: "4:1",
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 162123,
            name: "I. Moriba",
            number: 8,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 126936,
            name: "Samuel Lino",
            number: 16,
            pos: "F",
            grid: null,
          },
        },
        {
          player: {
            id: 41157,
            name: "André Almeida",
            number: 18,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 274,
            name: "E. Cavani",
            number: 7,
            pos: "F",
            grid: null,
          },
        },
        {
          player: {
            id: 1641,
            name: "Samu Castillejo",
            number: 11,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 162931,
            name: "Fran Pérez",
            number: 29,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 162175,
            name: "Jesús Vázquez",
            number: 21,
            pos: "D",
            grid: null,
          },
        },
        {
          player: {
            id: 333682,
            name: "Cristhian Mosquera",
            number: 33,
            pos: "D",
            grid: null,
          },
        },
        {
          player: {
            id: 916,
            name: "M. Diakhaby",
            number: 12,
            pos: "D",
            grid: null,
          },
        },
        {
          player: {
            id: 913,
            name: "Cristian Rivero",
            number: 13,
            pos: "G",
            grid: null,
          },
        },
        {
          player: {
            id: 47267,
            name: "Iago Herrerín",
            number: 1,
            pos: "G",
            grid: null,
          },
        },
      ],
    },
  ],
  statistics: [
    {
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-1.api-sports.io/football/teams/530.png",
      },
      statistics: [
        {
          type: "Shots on Goal",
          value: 6,
        },
        {
          type: "Shots off Goal",
          value: 7,
        },
        {
          type: "Total Shots",
          value: 14,
        },
        {
          type: "Blocked Shots",
          value: 1,
        },
        {
          type: "Shots insidebox",
          value: 12,
        },
        {
          type: "Shots outsidebox",
          value: 2,
        },
        {
          type: "Fouls",
          value: 12,
        },
        {
          type: "Corner Kicks",
          value: 4,
        },
        {
          type: "Offsides",
          value: null,
        },
        {
          type: "Ball Possession",
          value: "56%",
        },
        {
          type: "Yellow Cards",
          value: 2,
        },
        {
          type: "Red Cards",
          value: null,
        },
        {
          type: "Goalkeeper Saves",
          value: 1,
        },
        {
          type: "Total passes",
          value: 566,
        },
        {
          type: "Passes accurate",
          value: 488,
        },
        {
          type: "Passes %",
          value: "86%",
        },
        {
          type: "expected_goals",
          value: "2.23",
        },
      ],
    },
    {
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
      },
      statistics: [
        {
          type: "Shots on Goal",
          value: 1,
        },
        {
          type: "Shots off Goal",
          value: 5,
        },
        {
          type: "Total Shots",
          value: 9,
        },
        {
          type: "Blocked Shots",
          value: 3,
        },
        {
          type: "Shots insidebox",
          value: 4,
        },
        {
          type: "Shots outsidebox",
          value: 5,
        },
        {
          type: "Fouls",
          value: 9,
        },
        {
          type: "Corner Kicks",
          value: 2,
        },
        {
          type: "Offsides",
          value: 1,
        },
        {
          type: "Ball Possession",
          value: "44%",
        },
        {
          type: "Yellow Cards",
          value: null,
        },
        {
          type: "Red Cards",
          value: null,
        },
        {
          type: "Goalkeeper Saves",
          value: 3,
        },
        {
          type: "Total passes",
          value: 440,
        },
        {
          type: "Passes accurate",
          value: 358,
        },
        {
          type: "Passes %",
          value: "81%",
        },
        {
          type: "expected_goals",
          value: "0.95",
        },
      ],
    },
  ],
  players: [
    {
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
        update: "2023-06-06T04:12:54+00:00",
      },
      players: [
        {
          player: {
            id: 29,
            name: "Jan Oblak",
            photo: "https://media-1.api-sports.io/football/players/29.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 13,
                position: "G",
                rating: "7.2",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: 1,
              },
              passes: {
                total: 28,
                key: null,
                accuracy: "21",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 6503,
            name: "Nahuel Molina",
            photo: "https://media-3.api-sports.io/football/players/6503.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 16,
                position: "D",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 49,
                key: 1,
                accuracy: "38",
              },
              tackles: {
                total: 1,
                blocks: 1,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 2,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 2,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 39,
            name: "Stefan Savić",
            photo: "https://media-3.api-sports.io/football/players/39.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 15,
                position: "D",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 61,
                key: null,
                accuracy: "54",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 9,
                won: 7,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 31,
            name: "José María Giménez",
            photo: "https://media-3.api-sports.io/football/players/31.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 2,
                position: "D",
                rating: "7.2",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 53,
                key: null,
                accuracy: "44",
              },
              tackles: {
                total: 2,
                blocks: 1,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 4,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2669,
            name: "Mario Hermoso",
            photo: "https://media-2.api-sports.io/football/players/2669.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 22,
                position: "D",
                rating: "7.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 69,
                key: 1,
                accuracy: "57",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 9,
                won: 5,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2923,
            name: "Yannick Carrasco",
            photo: "https://media-2.api-sports.io/football/players/2923.png",
          },
          statistics: [
            {
              games: {
                minutes: 70,
                number: 21,
                position: "D",
                rating: "7.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 3,
                on: 2,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 35,
                key: null,
                accuracy: "30",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 9,
                won: 4,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: 2,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 753,
            name: "Marcos Llorente",
            photo: "https://media-1.api-sports.io/football/players/753.png",
          },
          statistics: [
            {
              games: {
                minutes: 70,
                number: 14,
                position: "M",
                rating: "7.5",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 2,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 31,
                key: 2,
                accuracy: "29",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 4,
                won: 1,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 2,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 50,
            name: "Koke",
            photo: "https://media-3.api-sports.io/football/players/50.png",
          },
          statistics: [
            {
              games: {
                minutes: 77,
                number: 6,
                position: "M",
                rating: "7.5",
                captain: true,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 77,
                key: null,
                accuracy: "72",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 6,
                won: 5,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 2,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2472,
            name: "Rodrigo de Paul",
            photo: "https://media-1.api-sports.io/football/players/2472.png",
          },
          statistics: [
            {
              games: {
                minutes: 64,
                number: 5,
                position: "M",
                rating: "7.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 46,
                key: 2,
                accuracy: "40",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 5,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 667,
            name: "Memphis Depay",
            photo: "https://media-1.api-sports.io/football/players/667.png",
          },
          statistics: [
            {
              games: {
                minutes: 64,
                number: 9,
                position: "F",
                rating: "5.6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 4,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 14,
                key: 1,
                accuracy: "13",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 10,
                won: 4,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 3,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 56,
            name: "Antoine Griezmann",
            photo: "https://media-2.api-sports.io/football/players/56.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 8,
                position: "F",
                rating: "7.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 2,
                on: 1,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 48,
                key: 2,
                accuracy: "42",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 11,
                won: 5,
              },
              dribbles: {
                attempts: 2,
                success: 2,
                past: 2,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 14382,
            name: "Ivo Grbić",
            photo: "https://media-1.api-sports.io/football/players/14382.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 1,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 315604,
            name: "Alejandro Iturbe",
            photo: "https://media-1.api-sports.io/football/players/315604.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 33,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 45,
            name: "Thomas Lemar",
            photo: "https://media-2.api-sports.io/football/players/45.png",
          },
          statistics: [
            {
              games: {
                minutes: 26,
                number: 11,
                position: "M",
                rating: "7.6",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 13,
                key: 1,
                accuracy: "12",
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 4,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 20,
            name: "Axel Witsel",
            photo: "https://media-3.api-sports.io/football/players/20.png",
          },
          statistics: [
            {
              games: {
                minutes: 13,
                number: 20,
                position: "M",
                rating: "6.5",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 15,
                key: null,
                accuracy: "14",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 336594,
            name: "Pablo Barrios",
            photo: "https://media-3.api-sports.io/football/players/336594.png",
          },
          statistics: [
            {
              games: {
                minutes: 20,
                number: 24,
                position: "M",
                rating: "6.9",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 10,
                key: null,
                accuracy: "8",
              },
              tackles: {
                total: null,
                blocks: 1,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: 1,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 18742,
            name: "Matt Doherty",
            photo: "https://media-3.api-sports.io/football/players/18742.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 12,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 926,
            name: "Geoffrey Kondogbia",
            photo: "https://media-3.api-sports.io/football/players/926.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 4,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 48,
            name: "Saúl Ñíguez",
            photo: "https://media-1.api-sports.io/football/players/48.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 17,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 53,
            name: "Ángel Correa",
            photo: "https://media-1.api-sports.io/football/players/53.png",
          },
          statistics: [
            {
              games: {
                minutes: 20,
                number: 10,
                position: "F",
                rating: "6.3",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 9,
                key: null,
                accuracy: "8",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 7,
                won: 3,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 59,
            name: "Álvaro Morata",
            photo: "https://media-3.api-sports.io/football/players/59.png",
          },
          statistics: [
            {
              games: {
                minutes: 26,
                number: 19,
                position: "F",
                rating: "7.2",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 8,
                key: 1,
                accuracy: "6",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 3,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
      ],
    },
    {
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
        update: "2023-06-06T04:12:54+00:00",
      },
      players: [
        {
          player: {
            id: 24760,
            name: "Giorgi Mamardashvili",
            photo: "https://media-2.api-sports.io/football/players/24760.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 25,
                position: "G",
                rating: "6.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 3,
                assists: null,
                saves: 3,
              },
              passes: {
                total: 20,
                key: null,
                accuracy: "7",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 47251,
            name: "Dimitri Foulquier",
            photo: "https://media-1.api-sports.io/football/players/47251.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 20,
                position: "D",
                rating: "5.6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 56,
                key: null,
                accuracy: "41",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 1,
              },
              dribbles: {
                attempts: 3,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 48372,
            name: "Eray Cömert",
            photo: "https://media-2.api-sports.io/football/players/48372.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 24,
                position: "D",
                rating: "6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 43,
                key: null,
                accuracy: "40",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 4,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 3,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 72048,
            name: "Cenk Özkaçar",
            photo: "https://media-3.api-sports.io/football/players/72048.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 15,
                position: "D",
                rating: "6.6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 48,
                key: 1,
                accuracy: "38",
              },
              tackles: {
                total: 2,
                blocks: 1,
                interceptions: 1,
              },
              duels: {
                total: 8,
                won: 7,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 918,
            name: "José Luis Gayà",
            photo: "https://media-1.api-sports.io/football/players/918.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 14,
                position: "D",
                rating: "6.6",
                captain: true,
                substitute: false,
              },
              offsides: 1,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 44,
                key: 1,
                accuracy: "37",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 2,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1482,
            name: "Thierry Correia",
            photo: "https://media-3.api-sports.io/football/players/1482.png",
          },
          statistics: [
            {
              games: {
                minutes: 63,
                number: 2,
                position: "M",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 24,
                key: null,
                accuracy: "17",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 7,
                won: 6,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 2,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 162106,
            name: "Yunus Musah",
            photo: "https://media-2.api-sports.io/football/players/162106.png",
          },
          statistics: [
            {
              games: {
                minutes: 63,
                number: 4,
                position: "M",
                rating: "6.7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 29,
                key: 1,
                accuracy: "24",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 3,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 919,
            name: "Hugo Guillamón",
            photo: "https://media-2.api-sports.io/football/players/919.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 6,
                position: "M",
                rating: "6.7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 67,
                key: null,
                accuracy: "60",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 7,
                won: 3,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 161933,
            name: "Nicolás González",
            photo: "https://media-2.api-sports.io/football/players/161933.png",
          },
          statistics: [
            {
              games: {
                minutes: 71,
                number: 17,
                position: "M",
                rating: "6.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 29,
                key: null,
                accuracy: "25",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 9,
                won: 3,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 3,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 792,
            name: "Justin Kluivert",
            photo: "https://media-2.api-sports.io/football/players/792.png",
          },
          statistics: [
            {
              games: {
                minutes: 77,
                number: 9,
                position: "M",
                rating: "5.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 11,
                key: 2,
                accuracy: "7",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 11,
                won: 2,
              },
              dribbles: {
                attempts: 5,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 47264,
            name: "Hugo Duro",
            photo: "https://media-2.api-sports.io/football/players/47264.png",
          },
          statistics: [
            {
              games: {
                minutes: 71,
                number: 19,
                position: "F",
                rating: "6.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 8,
                key: null,
                accuracy: "8",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 17,
                won: 3,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 2,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 913,
            name: "Cristian Rivero",
            photo: "https://media-3.api-sports.io/football/players/913.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 13,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 47267,
            name: "Iago Herrerín",
            photo: "https://media-3.api-sports.io/football/players/47267.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 1,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 916,
            name: "Mouctar Diakhaby",
            photo: "https://media-2.api-sports.io/football/players/916.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 12,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 162175,
            name: "Jesús Vázquez",
            photo: "https://media-3.api-sports.io/football/players/162175.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 21,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 333682,
            name: "Cristhian Mosquera",
            photo: "https://media-1.api-sports.io/football/players/333682.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 33,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 41157,
            name: "André Almeida",
            photo: "https://media-3.api-sports.io/football/players/41157.png",
          },
          statistics: [
            {
              games: {
                minutes: 19,
                number: 18,
                position: "M",
                rating: "6.6",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 16,
                key: null,
                accuracy: "16",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 3,
              },
              dribbles: {
                attempts: 3,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 162123,
            name: "Ilaix Moriba",
            photo: "https://media-3.api-sports.io/football/players/162123.png",
          },
          statistics: [
            {
              games: {
                minutes: 27,
                number: 8,
                position: "M",
                rating: "6.6",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 20,
                key: 1,
                accuracy: "19",
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1641,
            name: "Samu Castillejo",
            photo: "https://media-1.api-sports.io/football/players/1641.png",
          },
          statistics: [
            {
              games: {
                minutes: 13,
                number: 11,
                position: "M",
                rating: "6.5",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 6,
                key: 1,
                accuracy: "4",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: 1,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 126936,
            name: "Samuel Lino",
            photo: "https://media-2.api-sports.io/football/players/126936.png",
          },
          statistics: [
            {
              games: {
                minutes: 27,
                number: 16,
                position: "F",
                rating: "6.5",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 2,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 16,
                key: null,
                accuracy: "13",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 2,
                won: 1,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 274,
            name: "Edinson Cavani",
            photo: "https://media-3.api-sports.io/football/players/274.png",
          },
          statistics: [
            {
              games: {
                minutes: 19,
                number: 7,
                position: "F",
                rating: "6.7",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 3,
                key: null,
                accuracy: "2",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: 1,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 162931,
            name: "Francisco Pérez",
            photo: "https://media-3.api-sports.io/football/players/162931.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 29,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
      ],
    },
  ],
};

export const exampleFixtureWithPenalties = {
  fixture: {
    id: 1030795,
    referee: "S. Attwell",
    timezone: "UTC",
    date: "2023-08-06T15:00:00+00:00",
    timestamp: 1691334000,
    periods: {
      first: 1691334000,
      second: 1691337600,
    },
    venue: {
      id: 489,
      name: "Wembley Stadium",
      city: "London",
    },
    status: {
      long: "Match Finished",
      short: "PEN",
      elapsed: 120,
    },
    league: null,
  },
  league: {
    id: 528,
    name: "Community Shield",
    country: "England",
    logo: "https://media-2.api-sports.io/football/leagues/528.png",
    flag: "https://media-1.api-sports.io/flags/gb.svg",
    season: 2023,
    round: "Final",
  },
  teams: {
    home: {
      id: 42,
      name: "Arsenal",
      logo: "https://media-2.api-sports.io/football/teams/42.png",
      winner: true,
    },
    away: {
      id: 50,
      name: "Manchester City",
      logo: "https://media-2.api-sports.io/football/teams/50.png",
      winner: false,
    },
  },
  goals: {
    home: 1,
    away: 1,
  },
  score: {
    halftime: {
      home: 0,
      away: 0,
    },
    fulltime: {
      home: 1,
      away: 1,
    },
    extratime: {
      home: 0,
      away: 0,
    },
    penalty: {
      home: 4,
      away: 1,
    },
  },
  events: [
    {
      time: {
        elapsed: 8,
        extra: null,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-1.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 49,
        name: "Thomas Partey",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Card",
      detail: "Yellow Card",
      comments: "Time wasting",
    },
    {
      time: {
        elapsed: 27,
        extra: null,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-3.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 978,
        name: "Kai Havertz",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Card",
      detail: "Yellow Card",
      comments: "Foul",
    },
    {
      time: {
        elapsed: 31,
        extra: null,
      },
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-1.api-sports.io/football/teams/50.png",
      },
      player: {
        id: 6009,
        name: "Julián Álvarez",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Card",
      detail: "Yellow Card",
      comments: "Time wasting",
    },
    {
      time: {
        elapsed: 58,
        extra: null,
      },
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-3.api-sports.io/football/teams/50.png",
      },
      player: {
        id: 19187,
        name: "J. Grealish",
      },
      assist: {
        id: 631,
        name: "P. Foden",
      },
      type: "subst",
      detail: "Substitution 1",
      comments: null,
    },
    {
      time: {
        elapsed: 64,
        extra: null,
      },
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-2.api-sports.io/football/teams/50.png",
      },
      player: {
        id: 1100,
        name: "E. Haaland",
      },
      assist: {
        id: 152982,
        name: "C. Palmer",
      },
      type: "subst",
      detail: "Substitution 2",
      comments: null,
    },
    {
      time: {
        elapsed: 64,
        extra: null,
      },
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-3.api-sports.io/football/teams/50.png",
      },
      player: {
        id: 2291,
        name: "M. Kovačić",
      },
      assist: {
        id: 629,
        name: "K. De Bruyne",
      },
      type: "subst",
      detail: "Substitution 3",
      comments: null,
    },
    {
      time: {
        elapsed: 66,
        extra: null,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-3.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 22224,
        name: "Gabriel Magalhães",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Card",
      detail: "Yellow Card",
      comments: "Foul",
    },
    {
      time: {
        elapsed: 75,
        extra: null,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-3.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 127769,
        name: "Gabriel Martinelli",
      },
      assist: {
        id: 1946,
        name: "L. Trossard",
      },
      type: "subst",
      detail: "Substitution 1",
      comments: null,
    },
    {
      time: {
        elapsed: 76,
        extra: null,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-2.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 38746,
        name: "J. Timber",
      },
      assist: {
        id: 1117,
        name: "K. Tierney",
      },
      type: "subst",
      detail: "Substitution 2",
      comments: null,
    },
    {
      time: {
        elapsed: 77,
        extra: null,
      },
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-1.api-sports.io/football/teams/50.png",
      },
      player: {
        id: 152982,
        name: "C. Palmer",
      },
      assist: {
        id: 629,
        name: "K. De Bruyne",
      },
      type: "Goal",
      detail: "Normal Goal",
      comments: null,
    },
    {
      time: {
        elapsed: 81,
        extra: null,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-3.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 2937,
        name: "D. Rice",
      },
      assist: {
        id: 1468,
        name: "E. Nketiah",
      },
      type: "subst",
      detail: "Substitution 3",
      comments: null,
    },
    {
      time: {
        elapsed: 87,
        extra: null,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-2.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 22224,
        name: "Gabriel Magalhães",
      },
      assist: {
        id: 1161,
        name: "E. Smith Rowe",
      },
      type: "subst",
      detail: "Substitution 4",
      comments: null,
    },
    {
      time: {
        elapsed: 87,
        extra: null,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-3.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 978,
        name: "K. Havertz",
      },
      assist: {
        id: 41725,
        name: "Fábio Vieira",
      },
      type: "subst",
      detail: "Substitution 5",
      comments: null,
    },
    {
      time: {
        elapsed: 90,
        extra: 11,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-1.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 1946,
        name: "L. Trossard",
      },
      assist: {
        id: 1460,
        name: "B. Saka",
      },
      type: "Goal",
      detail: "Normal Goal",
      comments: null,
    },
    {
      time: {
        elapsed: 120,
        extra: 1,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-1.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 37127,
        name: "M. Ødegaard",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Goal",
      detail: "Penalty",
      comments: "Penalty Shootout",
    },
    {
      time: {
        elapsed: 120,
        extra: 2,
      },
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-1.api-sports.io/football/teams/50.png",
      },
      player: {
        id: 629,
        name: "K. De Bruyne",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Goal",
      detail: "Missed Penalty",
      comments: "Penalty Shootout",
    },
    {
      time: {
        elapsed: 120,
        extra: 3,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-3.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 1946,
        name: "L. Trossard",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Goal",
      detail: "Penalty",
      comments: "Penalty Shootout",
    },
    {
      time: {
        elapsed: 120,
        extra: 4,
      },
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-1.api-sports.io/football/teams/50.png",
      },
      player: {
        id: 636,
        name: "Bernardo Silva",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Goal",
      detail: "Penalty",
      comments: "Penalty Shootout",
    },
    {
      time: {
        elapsed: 120,
        extra: 5,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-1.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 1460,
        name: "B. Saka",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Goal",
      detail: "Penalty",
      comments: "Penalty Shootout",
    },
    {
      time: {
        elapsed: 120,
        extra: 6,
      },
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-3.api-sports.io/football/teams/50.png",
      },
      player: {
        id: 44,
        name: "Rodri",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Goal",
      detail: "Missed Penalty",
      comments: "Penalty Shootout",
    },
    {
      time: {
        elapsed: 120,
        extra: 7,
      },
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-1.api-sports.io/football/teams/42.png",
      },
      player: {
        id: 41725,
        name: "Fábio Vieira",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Goal",
      detail: "Penalty",
      comments: "Penalty Shootout",
    },
  ],
  lineups: [
    {
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-2.api-sports.io/football/teams/42.png",
        colors: {
          player: {
            primary: "e10000",
            number: "ffffff",
            border: "e10000",
          },
          goalkeeper: {
            primary: "44c62a",
            number: "ffffff",
            border: "44c62a",
          },
        },
      },
      coach: {
        id: 7248,
        name: "Mikel Arteta",
        photo: "https://media-1.api-sports.io/football/coachs/7248.png",
      },
      formation: "4-3-3",
      startXI: [
        {
          player: {
            id: 20355,
            name: "A. Ramsdale",
            number: 1,
            pos: null,
            grid: "1:1",
          },
        },
        {
          player: {
            id: 22224,
            name: "Gabriel Magalhães",
            number: 6,
            pos: null,
            grid: "2:4",
          },
        },
        {
          player: {
            id: 19959,
            name: "B. White",
            number: 4,
            pos: null,
            grid: "2:3",
          },
        },
        {
          player: {
            id: 38746,
            name: "J. Timber",
            number: 12,
            pos: null,
            grid: "2:2",
          },
        },
        {
          player: {
            id: 22090,
            name: "W. Saliba",
            number: 2,
            pos: null,
            grid: "2:1",
          },
        },
        {
          player: {
            id: 49,
            name: "T. Partey",
            number: 5,
            pos: null,
            grid: "3:3",
          },
        },
        {
          player: {
            id: 37127,
            name: "M. Ødegaard",
            number: 8,
            pos: null,
            grid: "3:2",
          },
        },
        {
          player: {
            id: 2937,
            name: "D. Rice",
            number: 41,
            pos: null,
            grid: "3:1",
          },
        },
        {
          player: {
            id: 978,
            name: "K. Havertz",
            number: 29,
            pos: null,
            grid: "4:3",
          },
        },
        {
          player: {
            id: 1460,
            name: "B. Saka",
            number: 7,
            pos: null,
            grid: "4:2",
          },
        },
        {
          player: {
            id: 127769,
            name: "Gabriel Martinelli",
            number: 11,
            pos: null,
            grid: "4:1",
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 1946,
            name: "L. Trossard",
            number: 19,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 1117,
            name: "K. Tierney",
            number: 3,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 1468,
            name: "E. Nketiah",
            number: 14,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 1161,
            name: "E. Smith Rowe",
            number: 10,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 41725,
            name: "Fábio Vieira",
            number: 21,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 2597,
            name: "T. Tomiyasu",
            number: 18,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 1440,
            name: "R. Holding",
            number: 16,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 50999,
            name: "M. Turner",
            number: 30,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 61431,
            name: "J. Kiwior",
            number: 15,
            pos: null,
            grid: null,
          },
        },
      ],
    },
    {
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-1.api-sports.io/football/teams/50.png",
        colors: {
          player: {
            primary: "5badff",
            number: "000000",
            border: "5badff",
          },
          goalkeeper: {
            primary: "99ff99",
            number: "000000",
            border: "99ff99",
          },
        },
      },
      coach: {
        id: 4,
        name: "Pep Guardiola",
        photo: "https://media-2.api-sports.io/football/coachs/4.png",
      },
      formation: "4-2-3-1",
      startXI: [
        {
          player: {
            id: 25004,
            name: "S. Ortega",
            number: 18,
            pos: null,
            grid: "1:1",
          },
        },
        {
          player: {
            id: 627,
            name: "K. Walker",
            number: 2,
            pos: null,
            grid: "2:4",
          },
        },
        {
          player: {
            id: 626,
            name: "J. Stones",
            number: 5,
            pos: null,
            grid: "2:3",
          },
        },
        {
          player: {
            id: 567,
            name: "Rúben Dias",
            number: 3,
            pos: null,
            grid: "2:2",
          },
        },
        {
          player: {
            id: 5,
            name: "M. Akanji",
            number: 25,
            pos: null,
            grid: "2:1",
          },
        },
        {
          player: {
            id: 2291,
            name: "M. Kovačić",
            number: 8,
            pos: null,
            grid: "3:2",
          },
        },
        {
          player: {
            id: 19187,
            name: "J. Grealish",
            number: 10,
            pos: null,
            grid: "3:1",
          },
        },
        {
          player: {
            id: 636,
            name: "Bernardo Silva",
            number: 20,
            pos: null,
            grid: "4:3",
          },
        },
        {
          player: {
            id: 44,
            name: "Rodri",
            number: 16,
            pos: null,
            grid: "4:2",
          },
        },
        {
          player: {
            id: 1100,
            name: "E. Haaland",
            number: 9,
            pos: null,
            grid: "4:1",
          },
        },
        {
          player: {
            id: 6009,
            name: "J. Álvarez",
            number: 19,
            pos: null,
            grid: "5:1",
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 631,
            name: "P. Foden",
            number: 47,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 629,
            name: "K. De Bruyne",
            number: 17,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 152982,
            name: "C. Palmer",
            number: 80,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 19130,
            name: "K. Phillips",
            number: 4,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 284230,
            name: "R. Lewis",
            number: 82,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 617,
            name: "Ederson",
            number: 31,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 622,
            name: "Aymeric Laporte",
            number: 14,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 23,
            name: "Sergio Gómez",
            number: 21,
            pos: null,
            grid: null,
          },
        },
        {
          player: {
            id: 158697,
            name: "J. McAtee",
            number: 87,
            pos: null,
            grid: null,
          },
        },
      ],
    },
  ],
  statistics: [
    {
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-2.api-sports.io/football/teams/42.png",
      },
      statistics: [
        {
          type: "Shots on Goal",
          value: 3,
        },
        {
          type: "Shots off Goal",
          value: 3,
        },
        {
          type: "Total Shots",
          value: 7,
        },
        {
          type: "Blocked Shots",
          value: 1,
        },
        {
          type: "Shots insidebox",
          value: 6,
        },
        {
          type: "Shots outsidebox",
          value: 1,
        },
        {
          type: "Fouls",
          value: 6,
        },
        {
          type: "Corner Kicks",
          value: 5,
        },
        {
          type: "Offsides",
          value: null,
        },
        {
          type: "Ball Possession",
          value: "45%",
        },
        {
          type: "Yellow Cards",
          value: 3,
        },
        {
          type: "Red Cards",
          value: null,
        },
        {
          type: "Goalkeeper Saves",
          value: 4,
        },
        {
          type: "Total passes",
          value: 485,
        },
        {
          type: "Passes accurate",
          value: 428,
        },
        {
          type: "Passes %",
          value: "88%",
        },
        {
          type: "expected_goals",
          value: null,
        },
      ],
    },
    {
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-2.api-sports.io/football/teams/50.png",
      },
      statistics: [
        {
          type: "Shots on Goal",
          value: 4,
        },
        {
          type: "Shots off Goal",
          value: 2,
        },
        {
          type: "Total Shots",
          value: 8,
        },
        {
          type: "Blocked Shots",
          value: 2,
        },
        {
          type: "Shots insidebox",
          value: 5,
        },
        {
          type: "Shots outsidebox",
          value: 3,
        },
        {
          type: "Fouls",
          value: 11,
        },
        {
          type: "Corner Kicks",
          value: 6,
        },
        {
          type: "Offsides",
          value: null,
        },
        {
          type: "Ball Possession",
          value: "55%",
        },
        {
          type: "Yellow Cards",
          value: 1,
        },
        {
          type: "Red Cards",
          value: null,
        },
        {
          type: "Goalkeeper Saves",
          value: 2,
        },
        {
          type: "Total passes",
          value: 590,
        },
        {
          type: "Passes accurate",
          value: 522,
        },
        {
          type: "Passes %",
          value: "88%",
        },
        {
          type: "expected_goals",
          value: null,
        },
      ],
    },
  ],
  players: [
    {
      team: {
        id: 50,
        name: "Manchester City",
        logo: "https://media-3.api-sports.io/football/teams/50.png",
        update: "2023-08-07T14:40:34+01:00",
      },
      players: [
        {
          player: {
            id: 25004,
            name: "Stefan Ortega",
            photo: "https://media-3.api-sports.io/football/players/25004.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 18,
                position: "G",
                rating: "6.7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 1,
                assists: null,
                saves: 2,
              },
              passes: {
                total: 51,
                key: null,
                accuracy: "39",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 627,
            name: "Kyle Walker",
            photo: "https://media-3.api-sports.io/football/players/627.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 2,
                position: "D",
                rating: "6.6",
                captain: true,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 53,
                key: null,
                accuracy: "47",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 4,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 626,
            name: "John Stones",
            photo: "https://media-3.api-sports.io/football/players/626.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 5,
                position: "D",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 68,
                key: null,
                accuracy: "65",
              },
              tackles: {
                total: null,
                blocks: 1,
                interceptions: 1,
              },
              duels: {
                total: 7,
                won: 4,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 567,
            name: "Rúben Dias",
            photo: "https://media-2.api-sports.io/football/players/567.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 3,
                position: "D",
                rating: "6.6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 101,
                key: null,
                accuracy: "92",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 4,
                won: 2,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 5,
            name: "Manuel Akanji",
            photo: "https://media-3.api-sports.io/football/players/5.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 25,
                position: "D",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 46,
                key: null,
                accuracy: "42",
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 5,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 44,
            name: "Rodri",
            photo: "https://media-1.api-sports.io/football/players/44.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 16,
                position: "M",
                rating: "7.5",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 2,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 88,
                key: null,
                accuracy: "81",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 14,
                won: 8,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 3,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2291,
            name: "Mateo Kovačić",
            photo: "https://media-1.api-sports.io/football/players/2291.png",
          },
          statistics: [
            {
              games: {
                minutes: 64,
                number: 8,
                position: "M",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 61,
                key: 1,
                accuracy: "54",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 2,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 636,
            name: "Bernardo Silva",
            photo: "https://media-3.api-sports.io/football/players/636.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 20,
                position: "M",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 39,
                key: null,
                accuracy: "36",
              },
              tackles: {
                total: 4,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 14,
                won: 7,
              },
              dribbles: {
                attempts: 4,
                success: 2,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 3,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 6009,
            name: "Julián Álvarez",
            photo: "https://media-2.api-sports.io/football/players/6009.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 19,
                position: "M",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 19,
                key: 3,
                accuracy: "17",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 10,
                won: 3,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 4,
              },
              fouls: {
                drawn: 2,
                committed: null,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19187,
            name: "Jack Grealish",
            photo: "https://media-1.api-sports.io/football/players/19187.png",
          },
          statistics: [
            {
              games: {
                minutes: 58,
                number: 10,
                position: "M",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 18,
                key: null,
                accuracy: "13",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 8,
                won: 5,
              },
              dribbles: {
                attempts: 3,
                success: 2,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1100,
            name: "Erling Haaland",
            photo: "https://media-1.api-sports.io/football/players/1100.png",
          },
          statistics: [
            {
              games: {
                minutes: 64,
                number: 9,
                position: "F",
                rating: "6.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 9,
                key: null,
                accuracy: "6",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 631,
            name: "Phil Foden",
            photo: "https://media-1.api-sports.io/football/players/631.png",
          },
          statistics: [
            {
              games: {
                minutes: 32,
                number: 47,
                position: "M",
                rating: "7",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 17,
                key: 1,
                accuracy: "16",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 4,
              },
              dribbles: {
                attempts: 2,
                success: 2,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 152982,
            name: "Cole Palmer",
            photo: "https://media-1.api-sports.io/football/players/152982.png",
          },
          statistics: [
            {
              games: {
                minutes: 26,
                number: 80,
                position: "M",
                rating: "7",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 5,
                key: null,
                accuracy: "4",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 2,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 629,
            name: "Kevin De Bruyne",
            photo: "https://media-1.api-sports.io/football/players/629.png",
          },
          statistics: [
            {
              games: {
                minutes: 26,
                number: 17,
                position: "M",
                rating: "6.3",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 15,
                key: 2,
                accuracy: "10",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: 1,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 617,
            name: "Ederson",
            photo: "https://media-1.api-sports.io/football/players/617.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 31,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 284230,
            name: "Rico Lewis",
            photo: "https://media-3.api-sports.io/football/players/284230.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 82,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 622,
            name: "Aymeric Laporte",
            photo: "https://media-3.api-sports.io/football/players/622.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 14,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 23,
            name: "Sergio Gómez",
            photo: "https://media-3.api-sports.io/football/players/23.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 21,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 19130,
            name: "Kalvin Phillips",
            photo: "https://media-1.api-sports.io/football/players/19130.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 4,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 158697,
            name: "James McAtee",
            photo: "https://media-1.api-sports.io/football/players/158697.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 87,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
      ],
    },
    {
      team: {
        id: 42,
        name: "Arsenal",
        logo: "https://media-3.api-sports.io/football/teams/42.png",
        update: "2023-08-07T14:40:34+01:00",
      },
      players: [
        {
          player: {
            id: 20355,
            name: "Aaron Ramsdale",
            photo: "https://media-3.api-sports.io/football/players/20355.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 1,
                position: "G",
                rating: "7.5",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 1,
                assists: null,
                saves: 4,
              },
              passes: {
                total: 30,
                key: null,
                accuracy: "16",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 19959,
            name: "Benjamin White",
            photo: "https://media-1.api-sports.io/football/players/19959.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 4,
                position: "D",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 43,
                key: 2,
                accuracy: "38",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 3,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 22090,
            name: "William Saliba",
            photo: "https://media-1.api-sports.io/football/players/22090.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 2,
                position: "D",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 74,
                key: null,
                accuracy: "71",
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 7,
                won: 4,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 22224,
            name: "Gabriel Magalhães",
            photo: "https://media-1.api-sports.io/football/players/22224.png",
          },
          statistics: [
            {
              games: {
                minutes: 87,
                number: 6,
                position: "D",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 56,
                key: null,
                accuracy: "53",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 5,
                won: 4,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 38746,
            name: "Jurriën Timber",
            photo: "https://media-2.api-sports.io/football/players/38746.png",
          },
          statistics: [
            {
              games: {
                minutes: 76,
                number: 12,
                position: "D",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 25,
                key: null,
                accuracy: "23",
              },
              tackles: {
                total: 1,
                blocks: 1,
                interceptions: 2,
              },
              duels: {
                total: 7,
                won: 3,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 37127,
            name: "Martin Ødegaard",
            photo: "https://media-2.api-sports.io/football/players/37127.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 8,
                position: "M",
                rating: "7.2",
                captain: true,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 46,
                key: null,
                accuracy: "39",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: 3,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 49,
            name: "Thomas Partey",
            photo: "https://media-3.api-sports.io/football/players/49.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 5,
                position: "M",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 57,
                key: 1,
                accuracy: "51",
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 15,
                won: 8,
              },
              dribbles: {
                attempts: 2,
                success: 2,
                past: 1,
              },
              fouls: {
                drawn: 3,
                committed: 1,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2937,
            name: "Declan Rice",
            photo: "https://media-1.api-sports.io/football/players/2937.png",
          },
          statistics: [
            {
              games: {
                minutes: 81,
                number: 41,
                position: "M",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 38,
                key: null,
                accuracy: "33",
              },
              tackles: {
                total: 2,
                blocks: 1,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 4,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1460,
            name: "Bukayo Saka",
            photo: "https://media-2.api-sports.io/football/players/1460.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 7,
                position: "F",
                rating: "7.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 2,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 31,
                key: 3,
                accuracy: "29",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 8,
                won: 1,
              },
              dribbles: {
                attempts: 2,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 978,
            name: "Kai Havertz",
            photo: "https://media-3.api-sports.io/football/players/978.png",
          },
          statistics: [
            {
              games: {
                minutes: 87,
                number: 29,
                position: "F",
                rating: "6.2",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 2,
                on: 2,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 16,
                key: null,
                accuracy: "15",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 9,
                won: 2,
              },
              dribbles: {
                attempts: 2,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 127769,
            name: "Gabriel Martinelli",
            photo: "https://media-2.api-sports.io/football/players/127769.png",
          },
          statistics: [
            {
              games: {
                minutes: 75,
                number: 11,
                position: "F",
                rating: "6.7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 22,
                key: null,
                accuracy: "17",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 8,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1946,
            name: "Leandro Trossard",
            photo: "https://media-1.api-sports.io/football/players/1946.png",
          },
          statistics: [
            {
              games: {
                minutes: 15,
                number: 19,
                position: "F",
                rating: "7.6",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 10,
                key: null,
                accuracy: "9",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: 2,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1117,
            name: "Kieran Tierney",
            photo: "https://media-2.api-sports.io/football/players/1117.png",
          },
          statistics: [
            {
              games: {
                minutes: 14,
                number: 3,
                position: "D",
                rating: "6.7",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 17,
                key: null,
                accuracy: "14",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 2,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1468,
            name: "Edward Nketiah",
            photo: "https://media-3.api-sports.io/football/players/1468.png",
          },
          statistics: [
            {
              games: {
                minutes: 9,
                number: 14,
                position: "F",
                rating: "6.5",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 2,
                key: null,
                accuracy: "2",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 41725,
            name: "Fábio Vieira",
            photo: "https://media-2.api-sports.io/football/players/41725.png",
          },
          statistics: [
            {
              games: {
                minutes: 16,
                number: 21,
                position: "M",
                rating: "6.9",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 7,
                key: null,
                accuracy: "7",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1161,
            name: "Emile Smith Rowe",
            photo: "https://media-2.api-sports.io/football/players/1161.png",
          },
          statistics: [
            {
              games: {
                minutes: 16,
                number: 10,
                position: "M",
                rating: "6.6",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 11,
                key: null,
                accuracy: "11",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 3,
                won: 1,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 50999,
            name: "Matt Turner",
            photo: "https://media-1.api-sports.io/football/players/50999.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 30,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1440,
            name: "Rob Holding",
            photo: "https://media-3.api-sports.io/football/players/1440.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 16,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 61431,
            name: "Jakub Kiwior",
            photo: "https://media-2.api-sports.io/football/players/61431.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 15,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2597,
            name: "Takehiro Tomiyasu",
            photo: "https://media-3.api-sports.io/football/players/2597.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 18,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
      ],
    },
  ],
};

export const exampleBets: BetsResponse = {
  league: {
    id: 140,
    name: "La Liga",
    country: "Spain",
    logo: "https://media-2.api-sports.io/football/leagues/140.png",
    flag: "https://media-3.api-sports.io/flags/es.svg",
    season: 2023,
  },
  fixture: {
    id: 1037963,
    timezone: "UTC",
    date: "2023-08-20T19:30:00+02:00",
    timestamp: 1692552600,
  },
  update: "2023-08-15T04:45:21+02:00",
  bookmakers: [
    {
      id: 8,
      name: "Bet365",
      bets: [
        {
          id: 1,
          name: "Match Winner",
          values: [
            {
              value: "Home",
              odd: "1.20",
            },
            {
              value: "Draw",
              odd: "6.50",
            },
            {
              value: "Away",
              odd: "12.00",
            },
          ],
        },
        {
          id: 2,
          name: "Home/Away",
          values: [
            {
              value: "Home",
              odd: "1.06",
            },
            {
              value: "Away",
              odd: "10.00",
            },
          ],
        },
        {
          id: 3,
          name: "Second Half Winner",
          values: [
            {
              value: "Home",
              odd: "1.44",
            },
            {
              value: "Draw",
              odd: "3.20",
            },
            {
              value: "Away",
              odd: "9.00",
            },
          ],
        },
        {
          id: 4,
          name: "Asian Handicap",
          values: [
            {
              value: "Home -0.25",
              odd: "1.14",
            },
            {
              value: "Away -0.25",
              odd: "5.75",
            },
            {
              value: "Home -0.5",
              odd: "1.21",
            },
            {
              value: "Away -0.5",
              odd: "4.25",
            },
            {
              value: "Home -0.75",
              odd: "1.25",
            },
            {
              value: "Away -0.75",
              odd: "3.80",
            },
            {
              value: "Home -1",
              odd: "1.30",
            },
            {
              value: "Away -1",
              odd: "3.45",
            },
            {
              value: "Home -1.5",
              odd: "1.65",
            },
            {
              value: "Away -1.5",
              odd: "2.20",
            },
            {
              value: "Home -1.25",
              odd: "1.48",
            },
            {
              value: "Away -1.25",
              odd: "2.60",
            },
            {
              value: "Home -1.75",
              odd: "1.86",
            },
            {
              value: "Away -1.75",
              odd: "2.04",
            },
            {
              value: "Home -2",
              odd: "2.08",
            },
            {
              value: "Away -2",
              odd: "1.73",
            },
            {
              value: "Home -3",
              odd: "4.00",
            },
            {
              value: "Away -3",
              odd: "1.23",
            },
            {
              value: "Home -2.5",
              odd: "2.60",
            },
            {
              value: "Away -2.5",
              odd: "1.48",
            },
            {
              value: "Home -2.25",
              odd: "2.35",
            },
            {
              value: "Away -2.25",
              odd: "1.58",
            },
            {
              value: "Home -2.75",
              odd: "3.10",
            },
            {
              value: "Away -2.75",
              odd: "1.35",
            },
            {
              value: "Home -3.25",
              odd: "4.40",
            },
            {
              value: "Away -3.25",
              odd: "1.20",
            },
            {
              value: "Home -3.75",
              odd: "6.25",
            },
            {
              value: "Away -3.75",
              odd: "1.12",
            },
            {
              value: "Home -3.5",
              odd: "4.80",
            },
            {
              value: "Away -3.5",
              odd: "1.18",
            },
          ],
        },
        {
          id: 5,
          name: "Goals Over/Under",
          values: [
            {
              value: "Over 3.5",
              odd: "2.38",
            },
            {
              value: "Under 3.5",
              odd: "1.57",
            },
            {
              value: "Over 1.5",
              odd: "1.17",
            },
            {
              value: "Under 1.5",
              odd: "5.00",
            },
            {
              value: "Over 4.5",
              odd: "4.33",
            },
            {
              value: "Under 4.5",
              odd: "1.22",
            },
            {
              value: "Over 2.5",
              odd: "1.57",
            },
            {
              value: "Under 2.5",
              odd: "2.38",
            },
            {
              value: "Over 0.5",
              odd: "1.03",
            },
            {
              value: "Under 0.5",
              odd: "17.00",
            },
            {
              value: "Over 5.5",
              odd: "8.00",
            },
            {
              value: "Under 5.5",
              odd: "1.08",
            },
            {
              value: "Over 2.25",
              odd: "1.40",
            },
            {
              value: "Under 2.25",
              odd: "2.85",
            },
            {
              value: "Over 3.25",
              odd: "2.15",
            },
            {
              value: "Under 3.25",
              odd: "1.68",
            },
            {
              value: "Over 2.75",
              odd: "1.70",
            },
            {
              value: "Under 2.75",
              odd: "2.10",
            },
            {
              value: "Over 1.25",
              odd: "1.10",
            },
            {
              value: "Under 1.25",
              odd: "7.00",
            },
            {
              value: "Over 4.25",
              odd: "3.80",
            },
            {
              value: "Under 4.25",
              odd: "1.25",
            },
            {
              value: "Over 1.75",
              odd: "1.20",
            },
            {
              value: "Under 1.75",
              odd: "4.40",
            },
            {
              value: "Over 3.75",
              odd: "2.75",
            },
            {
              value: "Under 3.75",
              odd: "1.43",
            },
            {
              value: "Over 4.75",
              odd: "5.50",
            },
            {
              value: "Under 4.75",
              odd: "1.15",
            },
            {
              value: "Over 6.5",
              odd: "17.00",
            },
            {
              value: "Under 6.5",
              odd: "1.03",
            },
            {
              value: "Over 7.5",
              odd: "29.00",
            },
            {
              value: "Under 7.5",
              odd: "1.01",
            },
            {
              value: "Over 3.0",
              odd: "1.97",
            },
            {
              value: "Under 3.0",
              odd: "1.93",
            },
            {
              value: "Over 2.0",
              odd: "1.24",
            },
            {
              value: "Under 2.0",
              odd: "3.90",
            },
            {
              value: "Over 4.0",
              odd: "3.55",
            },
            {
              value: "Under 4.0",
              odd: "1.28",
            },
          ],
        },
        {
          id: 6,
          name: "Goals Over/Under First Half",
          values: [
            {
              value: "Over 3.5",
              odd: "15.00",
            },
            {
              value: "Under 3.5",
              odd: "1.03",
            },
            {
              value: "Over 1.5",
              odd: "2.25",
            },
            {
              value: "Under 1.5",
              odd: "1.57",
            },
            {
              value: "Over 2.5",
              odd: "5.50",
            },
            {
              value: "Under 2.5",
              odd: "1.14",
            },
            {
              value: "Over 0.5",
              odd: "1.29",
            },
            {
              value: "Under 0.5",
              odd: "3.50",
            },
            {
              value: "Over 2.25",
              odd: "4.65",
            },
            {
              value: "Under 2.25",
              odd: "1.18",
            },
            {
              value: "Over 1.25",
              odd: "1.98",
            },
            {
              value: "Under 1.25",
              odd: "1.88",
            },
            {
              value: "Over 1.75",
              odd: "2.85",
            },
            {
              value: "Under 1.75",
              odd: "1.40",
            },
            {
              value: "Over 0.75",
              odd: "1.38",
            },
            {
              value: "Under 0.75",
              odd: "3.00",
            },
            {
              value: "Over 2.0",
              odd: "4.10",
            },
            {
              value: "Under 2.0",
              odd: "1.23",
            },
            {
              value: "Over 1.0",
              odd: "1.55",
            },
            {
              value: "Under 1.0",
              odd: "2.38",
            },
          ],
        },
        {
          id: 26,
          name: "Goals Over/Under - Second Half",
          values: [
            {
              value: "Over 3.5",
              odd: "8.00",
            },
            {
              value: "Under 3.5",
              odd: "1.08",
            },
            {
              value: "Over 1.5",
              odd: "1.80",
            },
            {
              value: "Under 1.5",
              odd: "1.91",
            },
            {
              value: "Over 4.5",
              odd: "21.00",
            },
            {
              value: "Under 4.5",
              odd: "1.02",
            },
            {
              value: "Over 2.5",
              odd: "3.50",
            },
            {
              value: "Under 2.5",
              odd: "1.29",
            },
            {
              value: "Over 0.5",
              odd: "1.17",
            },
            {
              value: "Under 0.5",
              odd: "5.00",
            },
          ],
        },
        {
          id: 7,
          name: "HT/FT Double",
          values: [
            {
              value: "Home/Draw",
              odd: "21.00",
            },
            {
              value: "Home/Away",
              odd: "51.00",
            },
            {
              value: "Draw/Away",
              odd: "23.00",
            },
            {
              value: "Draw/Draw",
              odd: "9.00",
            },
            {
              value: "Home/Home",
              odd: "1.73",
            },
            {
              value: "Draw/Home",
              odd: "3.75",
            },
            {
              value: "Away/Home",
              odd: "19.00",
            },
            {
              value: "Away/Draw",
              odd: "23.00",
            },
            {
              value: "Away/Away",
              odd: "21.00",
            },
          ],
        },
        {
          id: 27,
          name: "Clean Sheet - Home",
          values: [
            {
              value: "Yes",
              odd: "1.73",
            },
            {
              value: "No",
              odd: "2.00",
            },
          ],
        },
        {
          id: 28,
          name: "Clean Sheet - Away",
          values: [
            {
              value: "Yes",
              odd: "10.00",
            },
            {
              value: "No",
              odd: "1.06",
            },
          ],
        },
        {
          id: 8,
          name: "Both Teams Score",
          values: [
            {
              value: "Yes",
              odd: "2.20",
            },
            {
              value: "No",
              odd: "1.62",
            },
          ],
        },
        {
          id: 9,
          name: "Handicap Result",
          values: [
            {
              value: "Home -1",
              odd: "1.67",
            },
            {
              value: "Away -1",
              odd: "4.33",
            },
            {
              value: "Draw -1",
              odd: "4.00",
            },
            {
              value: "Home +1",
              odd: "1.05",
            },
            {
              value: "Away +1",
              odd: "29.00",
            },
            {
              value: "Draw +1",
              odd: "13.00",
            },
            {
              value: "Home -2",
              odd: "2.63",
            },
            {
              value: "Draw -2",
              odd: "4.00",
            },
            {
              value: "Away -2",
              odd: "2.20",
            },
            {
              value: "Home -3",
              odd: "4.75",
            },
            {
              value: "Draw -3",
              odd: "5.00",
            },
            {
              value: "Away -3",
              odd: "1.44",
            },
            {
              value: "Home -4",
              odd: "10.00",
            },
            {
              value: "Away -4",
              odd: "1.17",
            },
            {
              value: "Draw -4",
              odd: "8.00",
            },
          ],
        },
        {
          id: 10,
          name: "Exact Score",
          values: [
            {
              value: "1:0",
              odd: "7.50",
            },
            {
              value: "2:0",
              odd: "6.00",
            },
            {
              value: "2:1",
              odd: "9.50",
            },
            {
              value: "3:0",
              odd: "7.00",
            },
            {
              value: "3:1",
              odd: "11.00",
            },
            {
              value: "3:2",
              odd: "29.00",
            },
            {
              value: "4:0",
              odd: "11.00",
            },
            {
              value: "4:1",
              odd: "17.00",
            },
            {
              value: "4:2",
              odd: "41.00",
            },
            {
              value: "4:3",
              odd: "101.00",
            },
            {
              value: "5:0",
              odd: "21.00",
            },
            {
              value: "5:1",
              odd: "29.00",
            },
            {
              value: "5:2",
              odd: "51.00",
            },
            {
              value: "5:3",
              odd: "201.00",
            },
            {
              value: "6:0",
              odd: "41.00",
            },
            {
              value: "6:1",
              odd: "51.00",
            },
            {
              value: "6:2",
              odd: "101.00",
            },
            {
              value: "0:0",
              odd: "15.00",
            },
            {
              value: "1:1",
              odd: "13.00",
            },
            {
              value: "2:2",
              odd: "29.00",
            },
            {
              value: "3:3",
              odd: "81.00",
            },
            {
              value: "4:4",
              odd: "501.00",
            },
            {
              value: "0:1",
              odd: "23.00",
            },
            {
              value: "0:2",
              odd: "51.00",
            },
            {
              value: "0:3",
              odd: "151.00",
            },
            {
              value: "1:2",
              odd: "29.00",
            },
            {
              value: "1:3",
              odd: "81.00",
            },
            {
              value: "1:4",
              odd: "351.00",
            },
            {
              value: "2:3",
              odd: "67.00",
            },
            {
              value: "2:4",
              odd: "301.00",
            },
            {
              value: "3:4",
              odd: "351.00",
            },
            {
              value: "6:3",
              odd: "401.00",
            },
            {
              value: "7:0",
              odd: "67.00",
            },
            {
              value: "7:1",
              odd: "101.00",
            },
            {
              value: "7:2",
              odd: "251.00",
            },
            {
              value: "8:0",
              odd: "151.00",
            },
            {
              value: "8:1",
              odd: "201.00",
            },
            {
              value: "9:0",
              odd: "451.00",
            },
          ],
        },
        {
          id: 11,
          name: "Highest Scoring Half",
          values: [
            {
              value: "Draw",
              odd: "3.75",
            },
            {
              value: "1st Half",
              odd: "3.00",
            },
            {
              value: "2nd Half",
              odd: "2.00",
            },
          ],
        },
        {
          id: 31,
          name: "Correct Score - First Half",
          values: [
            {
              value: "1:0",
              odd: "3.20",
            },
            {
              value: "2:0",
              odd: "5.50",
            },
            {
              value: "2:1",
              odd: "17.00",
            },
            {
              value: "3:0",
              odd: "13.00",
            },
            {
              value: "3:1",
              odd: "41.00",
            },
            {
              value: "3:2",
              odd: "126.00",
            },
            {
              value: "4:0",
              odd: "41.00",
            },
            {
              value: "4:1",
              odd: "81.00",
            },
            {
              value: "4:2",
              odd: "351.00",
            },
            {
              value: "5:0",
              odd: "81.00",
            },
            {
              value: "5:1",
              odd: "251.00",
            },
            {
              value: "6:0",
              odd: "351.00",
            },
            {
              value: "0:0",
              odd: "3.50",
            },
            {
              value: "1:1",
              odd: "10.00",
            },
            {
              value: "2:2",
              odd: "67.00",
            },
            {
              value: "0:1",
              odd: "11.00",
            },
            {
              value: "0:2",
              odd: "51.00",
            },
            {
              value: "0:3",
              odd: "301.00",
            },
            {
              value: "1:2",
              odd: "51.00",
            },
            {
              value: "1:3",
              odd: "251.00",
            },
            {
              value: "2:3",
              odd: "401.00",
            },
          ],
        },
        {
          id: 12,
          name: "Double Chance",
          values: [
            {
              value: "Home/Draw",
              odd: "1.05",
            },
            {
              value: "Home/Away",
              odd: "1.11",
            },
            {
              value: "Draw/Away",
              odd: "4.33",
            },
          ],
        },
        {
          id: 13,
          name: "First Half Winner",
          values: [
            {
              value: "Home",
              odd: "1.62",
            },
            {
              value: "Draw",
              odd: "2.75",
            },
            {
              value: "Away",
              odd: "10.00",
            },
          ],
        },
        {
          id: 14,
          name: "Team To Score First",
          values: [
            {
              value: "Home",
              odd: "1.17",
            },
            {
              value: "Draw",
              odd: "15.00",
            },
            {
              value: "Away",
              odd: "5.50",
            },
          ],
        },
        {
          id: 15,
          name: "Team To Score Last",
          values: [
            {
              value: "Home",
              odd: "1.17",
            },
            {
              value: "Draw",
              odd: "15.00",
            },
            {
              value: "Away",
              odd: "5.50",
            },
          ],
        },
        {
          id: 32,
          name: "Win Both Halves",
          values: [
            {
              value: "Home",
              odd: "2.50",
            },
            {
              value: "Away",
              odd: "51.00",
            },
          ],
        },
        {
          id: 16,
          name: "Total - Home",
          values: [
            {
              value: "Over 3.5",
              odd: "3.50",
            },
            {
              value: "Under 3.5",
              odd: "1.29",
            },
            {
              value: "Over 1.5",
              odd: "1.33",
            },
            {
              value: "Under 1.5",
              odd: "3.25",
            },
            {
              value: "Over 4.5",
              odd: "8.00",
            },
            {
              value: "Under 4.5",
              odd: "1.08",
            },
            {
              value: "Over 2.5",
              odd: "2.00",
            },
            {
              value: "Under 2.5",
              odd: "1.73",
            },
            {
              value: "Over 5.5",
              odd: "17.00",
            },
            {
              value: "Under 5.5",
              odd: "1.03",
            },
            {
              value: "Over 6.5",
              odd: "34.00",
            },
            {
              value: "Under 6.5",
              odd: "1.01",
            },
          ],
        },
        {
          id: 17,
          name: "Total - Away",
          values: [
            {
              value: "Over 1.5",
              odd: "7.00",
            },
            {
              value: "Under 1.5",
              odd: "1.10",
            },
            {
              value: "Over 2.5",
              odd: "26.00",
            },
            {
              value: "Under 2.5",
              odd: "1.01",
            },
          ],
        },
        {
          id: 18,
          name: "Handicap Result - First Half",
          values: [
            {
              value: "Home -1",
              odd: "3.40",
            },
            {
              value: "Away -1",
              odd: "2.20",
            },
            {
              value: "Draw -1",
              odd: "2.75",
            },
            {
              value: "Home +1",
              odd: "1.03",
            },
            {
              value: "Away +1",
              odd: "41.00",
            },
            {
              value: "Draw +1",
              odd: "10.00",
            },
            {
              value: "Home -2",
              odd: "9.00",
            },
            {
              value: "Draw -2",
              odd: "4.75",
            },
            {
              value: "Away -2",
              odd: "1.25",
            },
            {
              value: "Home -3",
              odd: "26.00",
            },
            {
              value: "Draw -3",
              odd: "12.00",
            },
            {
              value: "Away -3",
              odd: "1.06",
            },
          ],
        },
        {
          id: 19,
          name: "Asian Handicap First Half",
          values: [
            {
              value: "Home +0",
              odd: "1.12",
            },
            {
              value: "Away +0",
              odd: "6.40",
            },
            {
              value: "Home -0.25",
              odd: "1.38",
            },
            {
              value: "Away -0.25",
              odd: "3.00",
            },
            {
              value: "Home -0.5",
              odd: "1.63",
            },
            {
              value: "Away -0.5",
              odd: "2.25",
            },
            {
              value: "Home -0.75",
              odd: "1.93",
            },
            {
              value: "Away -0.75",
              odd: "1.93",
            },
            {
              value: "Home -1",
              odd: "2.43",
            },
            {
              value: "Away -1",
              odd: "1.53",
            },
            {
              value: "Home -1.5",
              odd: "3.45",
            },
            {
              value: "Away -1.5",
              odd: "1.30",
            },
            {
              value: "Home -1.25",
              odd: "3.00",
            },
            {
              value: "Away -1.25",
              odd: "1.38",
            },
            {
              value: "Home -1.75",
              odd: "4.50",
            },
            {
              value: "Away -1.75",
              odd: "1.19",
            },
          ],
        },
        {
          id: 20,
          name: "Double Chance - First Half",
          values: [
            {
              value: "Home/Draw",
              odd: "1.03",
            },
            {
              value: "Home/Away",
              odd: "1.40",
            },
            {
              value: "Draw/Away",
              odd: "2.20",
            },
          ],
        },
        {
          id: 34,
          name: "Both Teams Score - First Half",
          values: [
            {
              value: "Yes",
              odd: "5.50",
            },
            {
              value: "No",
              odd: "1.14",
            },
          ],
        },
        {
          id: 35,
          name: "Both Teams To Score - Second Half",
          values: [
            {
              value: "Yes",
              odd: "4.00",
            },
            {
              value: "No",
              odd: "1.22",
            },
          ],
        },
        {
          id: 36,
          name: "Win To Nil",
          values: [
            {
              value: "Home",
              odd: "1.83",
            },
            {
              value: "Away",
              odd: "19.00",
            },
          ],
        },
        {
          id: 21,
          name: "Odd/Even",
          values: [
            {
              value: "Odd",
              odd: "1.95",
            },
            {
              value: "Even",
              odd: "1.90",
            },
          ],
        },
        {
          id: 22,
          name: "Odd/Even - First Half",
          values: [
            {
              value: "Odd",
              odd: "2.00",
            },
            {
              value: "Even",
              odd: "1.80",
            },
          ],
        },
        {
          id: 39,
          name: "To Win Either Half",
          values: [
            {
              value: "Home",
              odd: "1.13",
            },
            {
              value: "Away",
              odd: "5.00",
            },
          ],
        },
        {
          id: 40,
          name: "Home Team Exact Goals Number",
          values: [
            {
              value: 2,
              odd: "3.40",
            },
            {
              value: 1,
              odd: "4.33",
            },
            {
              value: 0,
              odd: "10.00",
            },
            {
              value: "more 3",
              odd: "2.00",
            },
          ],
        },
        {
          id: 41,
          name: "Away Team Exact Goals Number",
          values: [
            {
              value: 2,
              odd: "8.00",
            },
            {
              value: 1,
              odd: "2.63",
            },
            {
              value: 0,
              odd: "1.73",
            },
            {
              value: "more 3",
              odd: "26.00",
            },
          ],
        },
        {
          id: 24,
          name: "Results/Both Teams Score",
          values: [
            {
              value: "Home/Yes",
              odd: "3.00",
            },
            {
              value: "Draw/Yes",
              odd: "8.50",
            },
            {
              value: "Away/Yes",
              odd: "21.00",
            },
            {
              value: "Home/No",
              odd: "1.83",
            },
            {
              value: "Draw/No",
              odd: "15.00",
            },
            {
              value: "Away/No",
              odd: "19.00",
            },
          ],
        },
        {
          id: 25,
          name: "Result/Total Goals",
          values: [
            {
              value: "Home/Over 2.5",
              odd: "1.73",
            },
            {
              value: "Draw/Over 2.5",
              odd: "23.00",
            },
            {
              value: "Away/Over 2.5",
              odd: "19.00",
            },
            {
              value: "Home/Under 2.5",
              odd: "3.50",
            },
            {
              value: "Draw/Under 2.5",
              odd: "7.50",
            },
            {
              value: "Away/Under 2.5",
              odd: "19.00",
            },
          ],
        },
        {
          id: 43,
          name: "Home Team Score a Goal",
          values: [
            {
              value: "Yes",
              odd: "1.06",
            },
            {
              value: "No",
              odd: "10.00",
            },
          ],
        },
        {
          id: 44,
          name: "Away Team Score a Goal",
          values: [
            {
              value: "Yes",
              odd: "2.00",
            },
            {
              value: "No",
              odd: "1.73",
            },
          ],
        },
        {
          id: 54,
          name: "First 10 min Winner",
          values: [
            {
              value: "Home",
              odd: "4.75",
            },
            {
              value: "Draw",
              odd: "1.18",
            },
            {
              value: "Away",
              odd: "17.00",
            },
          ],
        },
        {
          id: 45,
          name: "Corners Over Under",
          values: [
            {
              value: "Over 9.5",
              odd: "1.91",
            },
            {
              value: "Under 9.5",
              odd: "1.80",
            },
          ],
        },
        {
          id: 47,
          name: "Winning Margin",
          values: [
            {
              value: "Draw",
              odd: "15.00",
            },
            {
              value: "1 by 1",
              odd: "4.00",
            },
            {
              value: "2 by 1",
              odd: "13.00",
            },
            {
              value: "1 by 2",
              odd: "4.00",
            },
            {
              value: "2 by 2",
              odd: "41.00",
            },
            {
              value: "1 by 3",
              odd: "5.00",
            },
            {
              value: "2 by 3",
              odd: "101.00",
            },
            {
              value: "1 by 4+",
              odd: "4.75",
            },
            {
              value: "2 by 4+",
              odd: "401.00",
            },
            {
              value: "Score Draw",
              odd: "9.00",
            },
          ],
        },
        {
          id: 48,
          name: "To Score In Both Halves By Teams",
          values: [
            {
              value: "Home",
              odd: "1.83",
            },
            {
              value: "Away",
              odd: "11.00",
            },
          ],
        },
        {
          id: 49,
          name: "Total Goals/Both Teams To Score",
          values: [
            {
              value: "o/yes 2.5",
              odd: "2.50",
            },
            {
              value: "o/no 2.5",
              odd: "3.40",
            },
            {
              value: "u/yes 2.5",
              odd: "13.00",
            },
            {
              value: "u/no 2.5",
              odd: "2.75",
            },
          ],
        },
        {
          id: 91,
          name: "Total Goals (3 way)",
          values: [
            {
              value: "Under 2 ",
              odd: "5.00",
            },
            {
              value: "2 Or 3 ",
              odd: "2.10",
            },
            {
              value: "Over 3 ",
              odd: "2.38",
            },
          ],
        },
        {
          id: 50,
          name: "Goal Line",
          values: [
            {
              value: "Over 3.5",
              odd: "2.38",
            },
            {
              value: "Under 3.5",
              odd: "1.55",
            },
            {
              value: "Over 1.5",
              odd: "1.18",
            },
            {
              value: "Under 1.5",
              odd: "4.80",
            },
            {
              value: "Over 4.5",
              odd: "4.15",
            },
            {
              value: "Under 4.5",
              odd: "1.22",
            },
            {
              value: "Over 2.5",
              odd: "1.55",
            },
            {
              value: "Under 2.5",
              odd: "2.38",
            },
            {
              value: "Over 2",
              odd: "1.24",
            },
            {
              value: "Under 2",
              odd: "3.90",
            },
            {
              value: "Over 3",
              odd: "1.97",
            },
            {
              value: "Under 3",
              odd: "1.93",
            },
            {
              value: "Over 4",
              odd: "3.55",
            },
            {
              value: "Under 4",
              odd: "1.28",
            },
            {
              value: "Over 2.25",
              odd: "1.40",
            },
            {
              value: "Under 2.25",
              odd: "2.85",
            },
            {
              value: "Over 3.25",
              odd: "2.15",
            },
            {
              value: "Under 3.25",
              odd: "1.68",
            },
            {
              value: "Over 2.75",
              odd: "1.70",
            },
            {
              value: "Under 2.75",
              odd: "2.10",
            },
            {
              value: "Over 1.25",
              odd: "1.10",
            },
            {
              value: "Under 1.25",
              odd: "7.00",
            },
            {
              value: "Over 4.25",
              odd: "3.80",
            },
            {
              value: "Under 4.25",
              odd: "1.25",
            },
            {
              value: "Over 1.75",
              odd: "1.20",
            },
            {
              value: "Under 1.75",
              odd: "4.40",
            },
            {
              value: "Over 3.75",
              odd: "2.75",
            },
            {
              value: "Under 3.75",
              odd: "1.43",
            },
            {
              value: "Over 4.75",
              odd: "5.50",
            },
            {
              value: "Under 4.75",
              odd: "1.15",
            },
          ],
        },
        {
          id: 72,
          name: "Goal Line (1st Half)",
          values: [
            {
              value: "Over 1.5",
              odd: "2.30",
            },
            {
              value: "Under 1.5",
              odd: "1.60",
            },
            {
              value: "Over 2.5",
              odd: "5.50",
            },
            {
              value: "Under 2.5",
              odd: "1.15",
            },
            {
              value: "Over 0.5",
              odd: "1.28",
            },
            {
              value: "Under 0.5",
              odd: "3.55",
            },
            {
              value: "Over 2",
              odd: "4.10",
            },
            {
              value: "Under 2",
              odd: "1.23",
            },
            {
              value: "Over 2.25",
              odd: "4.65",
            },
            {
              value: "Under 2.25",
              odd: "1.18",
            },
            {
              value: "Over 1.25",
              odd: "1.98",
            },
            {
              value: "Under 1.25",
              odd: "1.88",
            },
            {
              value: "Over 1.75",
              odd: "2.85",
            },
            {
              value: "Under 1.75",
              odd: "1.40",
            },
            {
              value: "Over 1",
              odd: "1.55",
            },
            {
              value: "Under 1",
              odd: "2.38",
            },
            {
              value: "Over 0.75",
              odd: "1.38",
            },
            {
              value: "Under 0.75",
              odd: "3.00",
            },
          ],
        },
        {
          id: 97,
          name: "First Goal Method",
          values: [
            {
              value: "Shot",
              odd: "1.44",
            },
            {
              value: "Header",
              odd: "6.00",
            },
            {
              value: "Penalty",
              odd: "7.00",
            },
            {
              value: "FreeKick",
              odd: "21.00",
            },
            {
              value: "OwnGoal",
              odd: "26.00",
            },
            {
              value: "Draw",
              odd: "15.00",
            },
          ],
        },
        {
          id: 52,
          name: "Halftime Result/Both Teams Score",
          values: [
            {
              value: "Home/Yes",
              odd: "12.00",
            },
            {
              value: "Draw/Yes",
              odd: "9.50",
            },
            {
              value: "Away/Yes",
              odd: "41.00",
            },
            {
              value: "Home/No",
              odd: "1.83",
            },
            {
              value: "Draw/No",
              odd: "3.50",
            },
            {
              value: "Away/No",
              odd: "10.00",
            },
          ],
        },
        {
          id: 59,
          name: "Own Goal",
          values: [
            {
              value: "Yes",
              odd: "10.00",
            },
            {
              value: "No",
              odd: "1.06",
            },
          ],
        },
        {
          id: 92,
          name: "Anytime Goal Scorer",
          values: [
            {
              value: "Oriol Romeu",
              odd: "8.00",
            },
            {
              value: "Marcos Alonso",
              odd: "11.00",
            },
            {
              value: "Andreas Christensen",
              odd: "15.00",
            },
            {
              value: "Ilkay Gundogan",
              odd: "4.50",
            },
            {
              value: "Raphael Raphinha",
              odd: "2.40",
            },
            {
              value: "Jorge Mere",
              odd: "34.00",
            },
            {
              value: "Robert Lewandowski",
              odd: "1.67",
            },
            {
              value: "Gonzalo Escalante",
              odd: "9.00",
            },
            {
              value: "Luis Hernandez",
              odd: "67.00",
            },
            {
              value: "Javier Hernandez",
              odd: "13.00",
            },
            {
              value: "Youba Diarra",
              odd: "19.00",
            },
            {
              value: "Awer Mabil",
              odd: "9.00",
            },
            {
              value: "Ruben Alcaraz",
              odd: "9.00",
            },
            {
              value: "Fede San Emeterio",
              odd: "19.00",
            },
            {
              value: "Chris Ramos",
              odd: "7.50",
            },
            {
              value: "Tomas Alarcon",
              odd: "19.00",
            },
            {
              value: "Milutin Osmajic",
              odd: "5.00",
            },
            {
              value: "Victor Chust",
              odd: "29.00",
            },
            {
              value: "Alvaro Negredo",
              odd: "6.00",
            },
            {
              value: "Ruben Sobrino",
              odd: "11.00",
            },
            {
              value: "Ivan Alejo",
              odd: "13.00",
            },
            {
              value: "Jose Mari",
              odd: "15.00",
            },
            {
              value: "Fernandez Alex",
              odd: "11.00",
            },
            {
              value: "Isaac Carcelen",
              odd: "23.00",
            },
            {
              value: "Rafael Fali",
              odd: "23.00",
            },
            {
              value: "Inigo Martinez",
              odd: "8.00",
            },
            {
              value: "Darwin Machis",
              odd: "6.00",
            },
            {
              value: "Jules Kounde",
              odd: "19.00",
            },
            {
              value: "Joseba Zaldua",
              odd: "34.00",
            },
            {
              value: "Anssumane Fati",
              odd: "2.25",
            },
            {
              value: "Pablo Martin Gavi",
              odd: "5.00",
            },
            {
              value: "Carnicer Sergi Roberto",
              odd: "4.75",
            },
            {
              value: "Frenkie De Jong",
              odd: "6.50",
            },
            {
              value: "Sergino Dest",
              odd: "10.00",
            },
            {
              value: "Alex Balde",
              odd: "8.00",
            },
            {
              value: "Clement Lenglet",
              odd: "10.00",
            },
            {
              value: "Eric Garcia",
              odd: "10.00",
            },
            {
              value: "Marti Roger",
              odd: "7.50",
            },
            {
              value: "Ronald Araujo",
              odd: "11.00",
            },
            {
              value: "Abdessamad Ezzalzouli",
              odd: "3.00",
            },
            {
              value: "Ferran Torres",
              odd: "3.00",
            },
            {
              value: "Pedro Gonzalez",
              odd: "4.75",
            },
            {
              value: "Silva Lucas Pires",
              odd: "23.00",
            },
            {
              value: "Momo Mbaye",
              odd: "23.00",
            },
            {
              value: "Marc Casado",
              odd: "6.50",
            },
            {
              value: "Angel Alarcon",
              odd: "3.00",
            },
            {
              value: "Lamine Yamal",
              odd: "2.75",
            },
            {
              value: "Jose Antonio De La Rosa",
              odd: "9.00",
            },
            {
              value: "Fermin Lopez",
              odd: "3.00",
            },
            {
              value: "Mikayil Faye",
              odd: "8.00",
            },
          ],
        },
        {
          id: 93,
          name: "First Goal Scorer",
          values: [
            {
              value: "No Goalscorer",
              odd: "15.00",
            },
            {
              value: "Oriol Romeu",
              odd: "21.00",
            },
            {
              value: "Marcos Alonso",
              odd: "29.00",
            },
            {
              value: "Andreas Christensen",
              odd: "41.00",
            },
            {
              value: "Ilkay Gundogan",
              odd: "11.00",
            },
            {
              value: "Raphael Raphinha",
              odd: "5.50",
            },
            {
              value: "Jorge Mere",
              odd: "101.00",
            },
            {
              value: "Robert Lewandowski",
              odd: "3.20",
            },
            {
              value: "Gonzalo Escalante",
              odd: "23.00",
            },
            {
              value: "Luis Hernandez",
              odd: "201.00",
            },
            {
              value: "Javier Hernandez",
              odd: "34.00",
            },
            {
              value: "Youba Diarra",
              odd: "51.00",
            },
            {
              value: "Awer Mabil",
              odd: "23.00",
            },
            {
              value: "Ruben Alcaraz",
              odd: "23.00",
            },
            {
              value: "Fede San Emeterio",
              odd: "51.00",
            },
            {
              value: "Chris Ramos",
              odd: "19.00",
            },
            {
              value: "Tomas Alarcon",
              odd: "51.00",
            },
            {
              value: "Milutin Osmajic",
              odd: "13.00",
            },
            {
              value: "Victor Chust",
              odd: "81.00",
            },
            {
              value: "Alvaro Negredo",
              odd: "15.00",
            },
            {
              value: "Ruben Sobrino",
              odd: "29.00",
            },
            {
              value: "Ivan Alejo",
              odd: "34.00",
            },
            {
              value: "Jose Mari",
              odd: "41.00",
            },
            {
              value: "Fernandez Alex",
              odd: "29.00",
            },
            {
              value: "Isaac Carcelen",
              odd: "67.00",
            },
            {
              value: "Rafael Fali",
              odd: "67.00",
            },
            {
              value: "Inigo Martinez",
              odd: "21.00",
            },
            {
              value: "Darwin Machis",
              odd: "15.00",
            },
            {
              value: "Jules Kounde",
              odd: "51.00",
            },
            {
              value: "Joseba Zaldua",
              odd: "101.00",
            },
            {
              value: "Anssumane Fati",
              odd: "5.00",
            },
            {
              value: "Pablo Martin Gavi",
              odd: "13.00",
            },
            {
              value: "Carnicer Sergi Roberto",
              odd: "12.00",
            },
            {
              value: "Frenkie De Jong",
              odd: "17.00",
            },
            {
              value: "Sergino Dest",
              odd: "26.00",
            },
            {
              value: "Alex Balde",
              odd: "21.00",
            },
            {
              value: "Clement Lenglet",
              odd: "26.00",
            },
            {
              value: "Eric Garcia",
              odd: "26.00",
            },
            {
              value: "Marti Roger",
              odd: "19.00",
            },
            {
              value: "Ronald Araujo",
              odd: "29.00",
            },
            {
              value: "Abdessamad Ezzalzouli",
              odd: "7.00",
            },
            {
              value: "Ferran Torres",
              odd: "7.00",
            },
            {
              value: "Pedro Gonzalez",
              odd: "12.00",
            },
            {
              value: "Silva Lucas Pires",
              odd: "67.00",
            },
            {
              value: "Momo Mbaye",
              odd: "67.00",
            },
            {
              value: "Marc Casado",
              odd: "17.00",
            },
            {
              value: "Angel Alarcon",
              odd: "7.00",
            },
            {
              value: "Lamine Yamal",
              odd: "6.50",
            },
            {
              value: "Jose Antonio De La Rosa",
              odd: "23.00",
            },
            {
              value: "Fermin Lopez",
              odd: "7.00",
            },
            {
              value: "Mikayil Faye",
              odd: "21.00",
            },
          ],
        },
        {
          id: 94,
          name: "Last Goal Scorer",
          values: [
            {
              value: "No Goalscorer",
              odd: "15.00",
            },
            {
              value: "Oriol Romeu",
              odd: "21.00",
            },
            {
              value: "Marcos Alonso",
              odd: "29.00",
            },
            {
              value: "Andreas Christensen",
              odd: "41.00",
            },
            {
              value: "Ilkay Gundogan",
              odd: "11.00",
            },
            {
              value: "Raphael Raphinha",
              odd: "5.50",
            },
            {
              value: "Jorge Mere",
              odd: "101.00",
            },
            {
              value: "Robert Lewandowski",
              odd: "3.20",
            },
            {
              value: "Gonzalo Escalante",
              odd: "23.00",
            },
            {
              value: "Luis Hernandez",
              odd: "201.00",
            },
            {
              value: "Javier Hernandez",
              odd: "34.00",
            },
            {
              value: "Youba Diarra",
              odd: "51.00",
            },
            {
              value: "Awer Mabil",
              odd: "23.00",
            },
            {
              value: "Ruben Alcaraz",
              odd: "23.00",
            },
            {
              value: "Fede San Emeterio",
              odd: "51.00",
            },
            {
              value: "Chris Ramos",
              odd: "19.00",
            },
            {
              value: "Tomas Alarcon",
              odd: "51.00",
            },
            {
              value: "Milutin Osmajic",
              odd: "13.00",
            },
            {
              value: "Victor Chust",
              odd: "81.00",
            },
            {
              value: "Alvaro Negredo",
              odd: "15.00",
            },
            {
              value: "Ruben Sobrino",
              odd: "29.00",
            },
            {
              value: "Ivan Alejo",
              odd: "34.00",
            },
            {
              value: "Jose Mari",
              odd: "41.00",
            },
            {
              value: "Fernandez Alex",
              odd: "29.00",
            },
            {
              value: "Isaac Carcelen",
              odd: "67.00",
            },
            {
              value: "Rafael Fali",
              odd: "67.00",
            },
            {
              value: "Inigo Martinez",
              odd: "21.00",
            },
            {
              value: "Darwin Machis",
              odd: "15.00",
            },
            {
              value: "Jules Kounde",
              odd: "51.00",
            },
            {
              value: "Joseba Zaldua",
              odd: "101.00",
            },
            {
              value: "Anssumane Fati",
              odd: "5.00",
            },
            {
              value: "Pablo Martin Gavi",
              odd: "13.00",
            },
            {
              value: "Carnicer Sergi Roberto",
              odd: "12.00",
            },
            {
              value: "Frenkie De Jong",
              odd: "17.00",
            },
            {
              value: "Sergino Dest",
              odd: "26.00",
            },
            {
              value: "Alex Balde",
              odd: "21.00",
            },
            {
              value: "Clement Lenglet",
              odd: "26.00",
            },
            {
              value: "Eric Garcia",
              odd: "26.00",
            },
            {
              value: "Marti Roger",
              odd: "19.00",
            },
            {
              value: "Ronald Araujo",
              odd: "29.00",
            },
            {
              value: "Abdessamad Ezzalzouli",
              odd: "7.00",
            },
            {
              value: "Ferran Torres",
              odd: "7.00",
            },
            {
              value: "Pedro Gonzalez",
              odd: "12.00",
            },
            {
              value: "Silva Lucas Pires",
              odd: "67.00",
            },
            {
              value: "Momo Mbaye",
              odd: "67.00",
            },
            {
              value: "Marc Casado",
              odd: "17.00",
            },
            {
              value: "Angel Alarcon",
              odd: "7.00",
            },
            {
              value: "Lamine Yamal",
              odd: "6.50",
            },
            {
              value: "Jose Antonio De La Rosa",
              odd: "23.00",
            },
            {
              value: "Fermin Lopez",
              odd: "7.00",
            },
            {
              value: "Mikayil Faye",
              odd: "21.00",
            },
          ],
        },
        {
          id: 95,
          name: "To Score Two or More Goals",
          values: [
            {
              value: "Oriol Romeu",
              odd: "101.00",
            },
            {
              value: "Marcos Alonso",
              odd: "101.00",
            },
            {
              value: "Andreas Christensen",
              odd: "126.00",
            },
            {
              value: "Ilkay Gundogan",
              odd: "29.00",
            },
            {
              value: "Raphael Raphinha",
              odd: "8.50",
            },
            {
              value: "Jorge Mere",
              odd: "401.00",
            },
            {
              value: "Robert Lewandowski",
              odd: "3.75",
            },
            {
              value: "Gonzalo Escalante",
              odd: "101.00",
            },
            {
              value: "Luis Hernandez",
              odd: "501.00",
            },
            {
              value: "Javier Hernandez",
              odd: "126.00",
            },
            {
              value: "Youba Diarra",
              odd: "151.00",
            },
            {
              value: "Awer Mabil",
              odd: "101.00",
            },
            {
              value: "Ruben Alcaraz",
              odd: "101.00",
            },
            {
              value: "Fede San Emeterio",
              odd: "151.00",
            },
            {
              value: "Chris Ramos",
              odd: "81.00",
            },
            {
              value: "Tomas Alarcon",
              odd: "151.00",
            },
            {
              value: "Milutin Osmajic",
              odd: "41.00",
            },
            {
              value: "Victor Chust",
              odd: "301.00",
            },
            {
              value: "Alvaro Negredo",
              odd: "51.00",
            },
            {
              value: "Ruben Sobrino",
              odd: "101.00",
            },
            {
              value: "Ivan Alejo",
              odd: "126.00",
            },
            {
              value: "Jose Mari",
              odd: "126.00",
            },
            {
              value: "Fernandez Alex",
              odd: "101.00",
            },
            {
              value: "Isaac Carcelen",
              odd: "201.00",
            },
            {
              value: "Rafael Fali",
              odd: "201.00",
            },
            {
              value: "Inigo Martinez",
              odd: "101.00",
            },
            {
              value: "Darwin Machis",
              odd: "51.00",
            },
            {
              value: "Jules Kounde",
              odd: "151.00",
            },
            {
              value: "Joseba Zaldua",
              odd: "401.00",
            },
            {
              value: "Anssumane Fati",
              odd: "7.50",
            },
            {
              value: "Pablo Martin Gavi",
              odd: "41.00",
            },
            {
              value: "Carnicer Sergi Roberto",
              odd: "34.00",
            },
            {
              value: "Frenkie De Jong",
              odd: "67.00",
            },
            {
              value: "Sergino Dest",
              odd: "101.00",
            },
            {
              value: "Alex Balde",
              odd: "101.00",
            },
            {
              value: "Clement Lenglet",
              odd: "101.00",
            },
            {
              value: "Eric Garcia",
              odd: "101.00",
            },
            {
              value: "Marti Roger",
              odd: "81.00",
            },
            {
              value: "Ronald Araujo",
              odd: "101.00",
            },
            {
              value: "Abdessamad Ezzalzouli",
              odd: "13.00",
            },
            {
              value: "Ferran Torres",
              odd: "13.00",
            },
            {
              value: "Pedro Gonzalez",
              odd: "34.00",
            },
            {
              value: "Silva Lucas Pires",
              odd: "201.00",
            },
            {
              value: "Momo Mbaye",
              odd: "201.00",
            },
            {
              value: "Marc Casado",
              odd: "67.00",
            },
            {
              value: "Angel Alarcon",
              odd: "13.00",
            },
            {
              value: "Lamine Yamal",
              odd: "12.00",
            },
            {
              value: "Jose Antonio De La Rosa",
              odd: "101.00",
            },
            {
              value: "Fermin Lopez",
              odd: "13.00",
            },
            {
              value: "Mikayil Faye",
              odd: "101.00",
            },
          ],
        },
        {
          id: 96,
          name: "Last Goal Scorer",
          values: [
            {
              value: "Oriol Romeu",
              odd: "301.00",
            },
            {
              value: "Marcos Alonso",
              odd: "501.00",
            },
            {
              value: "Andreas Christensen",
              odd: "501.00",
            },
            {
              value: "Ilkay Gundogan",
              odd: "101.00",
            },
            {
              value: "Raphael Raphinha",
              odd: "34.00",
            },
            {
              value: "Jorge Mere",
              odd: "501.00",
            },
            {
              value: "Robert Lewandowski",
              odd: "11.00",
            },
            {
              value: "Gonzalo Escalante",
              odd: "401.00",
            },
            {
              value: "Luis Hernandez",
              odd: "501.00",
            },
            {
              value: "Javier Hernandez",
              odd: "501.00",
            },
            {
              value: "Youba Diarra",
              odd: "501.00",
            },
            {
              value: "Awer Mabil",
              odd: "401.00",
            },
            {
              value: "Ruben Alcaraz",
              odd: "401.00",
            },
            {
              value: "Fede San Emeterio",
              odd: "501.00",
            },
            {
              value: "Chris Ramos",
              odd: "251.00",
            },
            {
              value: "Tomas Alarcon",
              odd: "501.00",
            },
            {
              value: "Milutin Osmajic",
              odd: "126.00",
            },
            {
              value: "Victor Chust",
              odd: "501.00",
            },
            {
              value: "Alvaro Negredo",
              odd: "151.00",
            },
            {
              value: "Ruben Sobrino",
              odd: "501.00",
            },
            {
              value: "Ivan Alejo",
              odd: "501.00",
            },
            {
              value: "Jose Mari",
              odd: "501.00",
            },
            {
              value: "Fernandez Alex",
              odd: "501.00",
            },
            {
              value: "Isaac Carcelen",
              odd: "501.00",
            },
            {
              value: "Rafael Fali",
              odd: "501.00",
            },
            {
              value: "Inigo Martinez",
              odd: "301.00",
            },
            {
              value: "Darwin Machis",
              odd: "151.00",
            },
            {
              value: "Jules Kounde",
              odd: "501.00",
            },
            {
              value: "Joseba Zaldua",
              odd: "501.00",
            },
            {
              value: "Anssumane Fati",
              odd: "29.00",
            },
            {
              value: "Pablo Martin Gavi",
              odd: "126.00",
            },
            {
              value: "Carnicer Sergi Roberto",
              odd: "126.00",
            },
            {
              value: "Frenkie De Jong",
              odd: "201.00",
            },
            {
              value: "Sergino Dest",
              odd: "501.00",
            },
            {
              value: "Alex Balde",
              odd: "301.00",
            },
            {
              value: "Clement Lenglet",
              odd: "501.00",
            },
            {
              value: "Eric Garcia",
              odd: "501.00",
            },
            {
              value: "Marti Roger",
              odd: "251.00",
            },
            {
              value: "Ronald Araujo",
              odd: "501.00",
            },
            {
              value: "Abdessamad Ezzalzouli",
              odd: "67.00",
            },
            {
              value: "Ferran Torres",
              odd: "67.00",
            },
            {
              value: "Pedro Gonzalez",
              odd: "126.00",
            },
            {
              value: "Silva Lucas Pires",
              odd: "501.00",
            },
            {
              value: "Momo Mbaye",
              odd: "501.00",
            },
            {
              value: "Marc Casado",
              odd: "201.00",
            },
            {
              value: "Angel Alarcon",
              odd: "67.00",
            },
            {
              value: "Lamine Yamal",
              odd: "51.00",
            },
            {
              value: "Jose Antonio De La Rosa",
              odd: "401.00",
            },
            {
              value: "Fermin Lopez",
              odd: "67.00",
            },
            {
              value: "Mikayil Faye",
              odd: "301.00",
            },
          ],
        },
        {
          id: 85,
          name: "Total Corners (3 way)",
          values: [
            {
              value: "Over 9",
              odd: "1.91",
            },
            {
              value: "Under 9",
              odd: "2.38",
            },
            {
              value: "Exactly 9",
              odd: "8.00",
            },
          ],
        },
        {
          id: 73,
          name: "Both Teams to Score 1st Half - 2nd Half",
          values: [
            {
              value: "Yes/Yes",
              odd: "21.00",
            },
            {
              value: "Yes/No",
              odd: "6.50",
            },
            {
              value: "No/Yes",
              odd: "4.50",
            },
            {
              value: "No/No",
              odd: "1.44",
            },
          ],
        },
        {
          id: 74,
          name: "10 Over/Under",
          values: [
            {
              value: "Over 0.5",
              odd: "4.00",
            },
            {
              value: "Under 0.5",
              odd: "1.22",
            },
          ],
        },
        {
          id: 78,
          name: "RTG_H1",
          values: [
            {
              value: "Home/Over 1.5",
              odd: "3.00",
            },
            {
              value: "Away/Over 1.5",
              odd: "29.00",
            },
            {
              value: "Draw/Over 1.5",
              odd: "10.00",
            },
            {
              value: "Draw/Under 1.5",
              odd: "3.50",
            },
            {
              value: "Home/Under 1.5",
              odd: "3.20",
            },
            {
              value: "Away/Under 1.5",
              odd: "11.00",
            },
          ],
        },
        {
          id: 99,
          name: "To Score A Penalty",
          values: [
            {
              value: "Home",
              odd: "3.50",
            },
            {
              value: "Away",
              odd: "13.00",
            },
          ],
        },
        {
          id: 100,
          name: "To Miss A Penalty",
          values: [
            {
              value: "Home",
              odd: "11.00",
            },
            {
              value: "Away",
              odd: "29.00",
            },
          ],
        },
      ],
    },
  ],
};

//////////

export const countries = [
  {
    name: "Albania",
    code: "AL",
    flag: "https://media-1.api-sports.io/flags/al.svg",
  },
  {
    name: "Algeria",
    code: "DZ",
    flag: "https://media-1.api-sports.io/flags/dz.svg",
  },
  {
    name: "Andorra",
    code: "AD",
    flag: "https://media-3.api-sports.io/flags/ad.svg",
  },
  {
    name: "Angola",
    code: "AO",
    flag: "https://media-3.api-sports.io/flags/ao.svg",
  },
  {
    name: "Argentina",
    code: "AR",
    flag: "https://media-1.api-sports.io/flags/ar.svg",
  },
  {
    name: "Armenia",
    code: "AM",
    flag: "https://media-3.api-sports.io/flags/am.svg",
  },
  {
    name: "Aruba",
    code: "AW",
    flag: "https://media-3.api-sports.io/flags/aw.svg",
  },
  {
    name: "Australia",
    code: "AU",
    flag: "https://media-1.api-sports.io/flags/au.svg",
  },
  {
    name: "Austria",
    code: "AT",
    flag: "https://media-1.api-sports.io/flags/at.svg",
  },
  {
    name: "Azerbaidjan",
    code: "AZ",
    flag: "https://media-2.api-sports.io/flags/az.svg",
  },
  {
    name: "Bahrain",
    code: "BH",
    flag: "https://media-3.api-sports.io/flags/bh.svg",
  },
  {
    name: "Bangladesh",
    code: "BD",
    flag: "https://media-3.api-sports.io/flags/bd.svg",
  },
  {
    name: "Barbados",
    code: "BB",
    flag: "https://media-2.api-sports.io/flags/bb.svg",
  },
  {
    name: "Belarus",
    code: "BY",
    flag: "https://media-1.api-sports.io/flags/by.svg",
  },
  {
    name: "Belgium",
    code: "BE",
    flag: "https://media-3.api-sports.io/flags/be.svg",
  },
  {
    name: "Belize",
    code: "BZ",
    flag: "https://media-1.api-sports.io/flags/bz.svg",
  },
  {
    name: "Benin",
    code: "BJ",
    flag: "https://media-3.api-sports.io/flags/bj.svg",
  },
  {
    name: "Bermuda",
    code: "BM",
    flag: "https://media-2.api-sports.io/flags/bm.svg",
  },
  {
    name: "Bhutan",
    code: "BT",
    flag: "https://media-2.api-sports.io/flags/bt.svg",
  },
  {
    name: "Bolivia",
    code: "BO",
    flag: "https://media-2.api-sports.io/flags/bo.svg",
  },
  {
    name: "Bosnia",
    code: "BA",
    flag: "https://media-2.api-sports.io/flags/ba.svg",
  },
  {
    name: "Botswana",
    code: "BW",
    flag: "https://media-3.api-sports.io/flags/bw.svg",
  },
  {
    name: "Brazil",
    code: "BR",
    flag: "https://media-3.api-sports.io/flags/br.svg",
  },
  {
    name: "Bulgaria",
    code: "BG",
    flag: "https://media-2.api-sports.io/flags/bg.svg",
  },
  {
    name: "Burkina-Faso",
    code: "BF",
    flag: "https://media-1.api-sports.io/flags/bf.svg",
  },
  {
    name: "Burundi",
    code: "BI",
    flag: "https://media-2.api-sports.io/flags/bi.svg",
  },
  {
    name: "Cambodia",
    code: "KH",
    flag: "https://media-3.api-sports.io/flags/kh.svg",
  },
  {
    name: "Cameroon",
    code: "CM",
    flag: "https://media-2.api-sports.io/flags/cm.svg",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "https://media-2.api-sports.io/flags/ca.svg",
  },
  {
    name: "Chile",
    code: "CL",
    flag: "https://media-1.api-sports.io/flags/cl.svg",
  },
  {
    name: "China",
    code: "CN",
    flag: "https://media-2.api-sports.io/flags/cn.svg",
  },
  {
    name: "Chinese-Taipei",
    code: "TW",
    flag: "https://media-1.api-sports.io/flags/tw.svg",
  },
  {
    name: "Colombia",
    code: "CO",
    flag: "https://media-3.api-sports.io/flags/co.svg",
  },
  {
    name: "Congo",
    code: "CD",
    flag: "https://media-1.api-sports.io/flags/cd.svg",
  },
  {
    name: "Congo-DR",
    code: "CG",
    flag: "https://media-2.api-sports.io/flags/cg.svg",
  },
  {
    name: "Costa-Rica",
    code: "CR",
    flag: "https://media-2.api-sports.io/flags/cr.svg",
  },
  {
    name: "Crimea",
    code: "UA",
    flag: "https://media-2.api-sports.io/flags/ua.svg",
  },
  {
    name: "Croatia",
    code: "HR",
    flag: "https://media-3.api-sports.io/flags/hr.svg",
  },
  {
    name: "Cuba",
    code: "CU",
    flag: "https://media-2.api-sports.io/flags/cu.svg",
  },
  {
    name: "Curacao",
    code: "CW",
    flag: "https://media-3.api-sports.io/flags/cw.svg",
  },
  {
    name: "Cyprus",
    code: "CY",
    flag: "https://media-3.api-sports.io/flags/cy.svg",
  },
  {
    name: "Czech-Republic",
    code: "CZ",
    flag: "https://media-1.api-sports.io/flags/cz.svg",
  },
  {
    name: "Denmark",
    code: "DK",
    flag: "https://media-2.api-sports.io/flags/dk.svg",
  },
  {
    name: "Dominican-Republic",
    code: "DO",
    flag: "https://media-2.api-sports.io/flags/do.svg",
  },
  {
    name: "Ecuador",
    code: "EC",
    flag: "https://media-2.api-sports.io/flags/ec.svg",
  },
  {
    name: "Egypt",
    code: "EG",
    flag: "https://media-2.api-sports.io/flags/eg.svg",
  },
  {
    name: "El-Salvador",
    code: "SV",
    flag: "https://media-2.api-sports.io/flags/sv.svg",
  },
  {
    name: "England",
    code: "GB",
    flag: "https://media-1.api-sports.io/flags/gb.svg",
  },
  {
    name: "Estonia",
    code: "EE",
    flag: "https://media-3.api-sports.io/flags/ee.svg",
  },
  {
    name: "Eswatini",
    code: "SZ",
    flag: "https://media-3.api-sports.io/flags/sz.svg",
  },
  {
    name: "Ethiopia",
    code: "ET",
    flag: "https://media-3.api-sports.io/flags/et.svg",
  },
  {
    name: "Faroe-Islands",
    code: "FO",
    flag: "https://media-2.api-sports.io/flags/fo.svg",
  },
  {
    name: "Fiji",
    code: "FJ",
    flag: "https://media-3.api-sports.io/flags/fj.svg",
  },
  {
    name: "Finland",
    code: "FI",
    flag: "https://media-3.api-sports.io/flags/fi.svg",
  },
  {
    name: "France",
    code: "FR",
    flag: "https://media-1.api-sports.io/flags/fr.svg",
  },
  {
    name: "Gabon",
    code: "GA",
    flag: "https://media-2.api-sports.io/flags/ga.svg",
  },
  {
    name: "Gambia",
    code: "GM",
    flag: "https://media-2.api-sports.io/flags/gm.svg",
  },
  {
    name: "Georgia",
    code: "GE",
    flag: "https://media-3.api-sports.io/flags/ge.svg",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "https://media-3.api-sports.io/flags/de.svg",
  },
  {
    name: "Ghana",
    code: "GH",
    flag: "https://media-2.api-sports.io/flags/gh.svg",
  },
  {
    name: "Gibraltar",
    code: "GI",
    flag: "https://media-2.api-sports.io/flags/gi.svg",
  },
  {
    name: "Greece",
    code: "GR",
    flag: "https://media-3.api-sports.io/flags/gr.svg",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    flag: "https://media-2.api-sports.io/flags/gp.svg",
  },
  {
    name: "Guatemala",
    code: "GT",
    flag: "https://media-1.api-sports.io/flags/gt.svg",
  },
  {
    name: "Guinea",
    code: "GN",
    flag: "https://media-2.api-sports.io/flags/gn.svg",
  },
  {
    name: "Haiti",
    code: "HT",
    flag: "https://media-2.api-sports.io/flags/ht.svg",
  },
  {
    name: "Honduras",
    code: "HN",
    flag: "https://media-1.api-sports.io/flags/hn.svg",
  },
  {
    name: "Hong-Kong",
    code: "HK",
    flag: "https://media-3.api-sports.io/flags/hk.svg",
  },
  {
    name: "Hungary",
    code: "HU",
    flag: "https://media-1.api-sports.io/flags/hu.svg",
  },
  {
    name: "Iceland",
    code: "IS",
    flag: "https://media-3.api-sports.io/flags/is.svg",
  },
  {
    name: "India",
    code: "IN",
    flag: "https://media-3.api-sports.io/flags/in.svg",
  },
  {
    name: "Indonesia",
    code: "ID",
    flag: "https://media-2.api-sports.io/flags/id.svg",
  },
  {
    name: "Iran",
    code: "IR",
    flag: "https://media-1.api-sports.io/flags/ir.svg",
  },
  {
    name: "Iraq",
    code: "IQ",
    flag: "https://media-1.api-sports.io/flags/iq.svg",
  },
  {
    name: "Ireland",
    code: "IE",
    flag: "https://media-1.api-sports.io/flags/ie.svg",
  },
  {
    name: "Israel",
    code: "IL",
    flag: "https://media-3.api-sports.io/flags/il.svg",
  },
  {
    name: "Italy",
    code: "IT",
    flag: "https://media-2.api-sports.io/flags/it.svg",
  },
  {
    name: "Ivory-Coast",
    code: "CI",
    flag: "https://media-2.api-sports.io/flags/ci.svg",
  },
  {
    name: "Jamaica",
    code: "JM",
    flag: "https://media-2.api-sports.io/flags/jm.svg",
  },
  {
    name: "Japan",
    code: "JP",
    flag: "https://media-3.api-sports.io/flags/jp.svg",
  },
  {
    name: "Jordan",
    code: "JO",
    flag: "https://media-2.api-sports.io/flags/jo.svg",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    flag: "https://media-2.api-sports.io/flags/kz.svg",
  },
  {
    name: "Kenya",
    code: "KE",
    flag: "https://media-3.api-sports.io/flags/ke.svg",
  },
  {
    name: "Kosovo",
    code: "XK",
    flag: "https://media-3.api-sports.io/flags/xk.svg",
  },
  {
    name: "Kuwait",
    code: "KW",
    flag: "https://media-1.api-sports.io/flags/kw.svg",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    flag: "https://media-1.api-sports.io/flags/kg.svg",
  },
  {
    name: "Laos",
    code: "LA",
    flag: "https://media-3.api-sports.io/flags/la.svg",
  },
  {
    name: "Latvia",
    code: "LV",
    flag: "https://media-1.api-sports.io/flags/lv.svg",
  },
  {
    name: "Lebanon",
    code: "LB",
    flag: "https://media-3.api-sports.io/flags/lb.svg",
  },
  {
    name: "Lesotho",
    code: "LS",
    flag: "https://media-1.api-sports.io/flags/ls.svg",
  },
  {
    name: "Liberia",
    code: "LR",
    flag: "https://media-3.api-sports.io/flags/lr.svg",
  },
  {
    name: "Libya",
    code: "LY",
    flag: "https://media-2.api-sports.io/flags/ly.svg",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    flag: "https://media-1.api-sports.io/flags/li.svg",
  },
  {
    name: "Lithuania",
    code: "LT",
    flag: "https://media-2.api-sports.io/flags/lt.svg",
  },
  {
    name: "Luxembourg",
    code: "LU",
    flag: "https://media-3.api-sports.io/flags/lu.svg",
  },
  {
    name: "Macao",
    code: "MO",
    flag: "https://media-3.api-sports.io/flags/mo.svg",
  },
  {
    name: "Macedonia",
    code: "MK",
    flag: "https://media-1.api-sports.io/flags/mk.svg",
  },
  {
    name: "Malawi",
    code: "MW",
    flag: "https://media-2.api-sports.io/flags/mw.svg",
  },
  {
    name: "Malaysia",
    code: "MY",
    flag: "https://media-2.api-sports.io/flags/my.svg",
  },
  {
    name: "Maldives",
    code: "MV",
    flag: "https://media-1.api-sports.io/flags/mv.svg",
  },
  {
    name: "Mali",
    code: "ML",
    flag: "https://media-1.api-sports.io/flags/ml.svg",
  },
  {
    name: "Malta",
    code: "MT",
    flag: "https://media-2.api-sports.io/flags/mt.svg",
  },
  {
    name: "Mauritania",
    code: "MR",
    flag: "https://media-3.api-sports.io/flags/mr.svg",
  },
  {
    name: "Mauritius",
    code: "MU",
    flag: "https://media-1.api-sports.io/flags/mu.svg",
  },
  {
    name: "Mexico",
    code: "MX",
    flag: "https://media-3.api-sports.io/flags/mx.svg",
  },
  {
    name: "Moldova",
    code: "MD",
    flag: "https://media-1.api-sports.io/flags/md.svg",
  },
  {
    name: "Mongolia",
    code: "MN",
    flag: "https://media-1.api-sports.io/flags/mn.svg",
  },
  {
    name: "Montenegro",
    code: "ME",
    flag: "https://media-3.api-sports.io/flags/me.svg",
  },
  {
    name: "Morocco",
    code: "MA",
    flag: "https://media-1.api-sports.io/flags/ma.svg",
  },
  {
    name: "Myanmar",
    code: "MM",
    flag: "https://media-3.api-sports.io/flags/mm.svg",
  },
  {
    name: "Namibia",
    code: "NA",
    flag: "https://media-2.api-sports.io/flags/na.svg",
  },
  {
    name: "Nepal",
    code: "NP",
    flag: "https://media-3.api-sports.io/flags/np.svg",
  },
  {
    name: "Netherlands",
    code: "NL",
    flag: "https://media-1.api-sports.io/flags/nl.svg",
  },
  {
    name: "New-Zealand",
    code: "NZ",
    flag: "https://media-1.api-sports.io/flags/nz.svg",
  },
  {
    name: "Nicaragua",
    code: "NI",
    flag: "https://media-3.api-sports.io/flags/ni.svg",
  },
  {
    name: "Nigeria",
    code: "NG",
    flag: "https://media-1.api-sports.io/flags/ng.svg",
  },
  {
    name: "Northern-Ireland",
    code: "GB",
    flag: "https://media-2.api-sports.io/flags/gb.svg",
  },
  {
    name: "Norway",
    code: "NO",
    flag: "https://media-3.api-sports.io/flags/no.svg",
  },
  {
    name: "Oman",
    code: "OM",
    flag: "https://media-1.api-sports.io/flags/om.svg",
  },
  {
    name: "Pakistan",
    code: "PK",
    flag: "https://media-3.api-sports.io/flags/pk.svg",
  },
  {
    name: "Palestine",
    code: "PS",
    flag: "https://media-2.api-sports.io/flags/ps.svg",
  },
  {
    name: "Panama",
    code: "PA",
    flag: "https://media-3.api-sports.io/flags/pa.svg",
  },
  {
    name: "Paraguay",
    code: "PY",
    flag: "https://media-2.api-sports.io/flags/py.svg",
  },
  {
    name: "Peru",
    code: "PE",
    flag: "https://media-3.api-sports.io/flags/pe.svg",
  },
  {
    name: "Philippines",
    code: "PH",
    flag: "https://media-3.api-sports.io/flags/ph.svg",
  },
  {
    name: "Poland",
    code: "PL",
    flag: "https://media-1.api-sports.io/flags/pl.svg",
  },
  {
    name: "Portugal",
    code: "PT",
    flag: "https://media-1.api-sports.io/flags/pt.svg",
  },
  {
    name: "Qatar",
    code: "QA",
    flag: "https://media-1.api-sports.io/flags/qa.svg",
  },
  {
    name: "Romania",
    code: "RO",
    flag: "https://media-1.api-sports.io/flags/ro.svg",
  },
  {
    name: "Russia",
    code: "RU",
    flag: "https://media-2.api-sports.io/flags/ru.svg",
  },
  {
    name: "Rwanda",
    code: "RW",
    flag: "https://media-2.api-sports.io/flags/rw.svg",
  },
  {
    name: "San-Marino",
    code: "SM",
    flag: "https://media-2.api-sports.io/flags/sm.svg",
  },
  {
    name: "Saudi-Arabia",
    code: "SA",
    flag: "https://media-2.api-sports.io/flags/sa.svg",
  },
  {
    name: "Scotland",
    code: "GB",
    flag: "https://media-3.api-sports.io/flags/gb.svg",
  },
  {
    name: "Senegal",
    code: "SN",
    flag: "https://media-2.api-sports.io/flags/sn.svg",
  },
  {
    name: "Serbia",
    code: "RS",
    flag: "https://media-1.api-sports.io/flags/rs.svg",
  },
  {
    name: "Singapore",
    code: "SG",
    flag: "https://media-1.api-sports.io/flags/sg.svg",
  },
  {
    name: "Slovakia",
    code: "SK",
    flag: "https://media-2.api-sports.io/flags/sk.svg",
  },
  {
    name: "Slovenia",
    code: "SI",
    flag: "https://media-1.api-sports.io/flags/si.svg",
  },
  {
    name: "Somalia",
    code: "SO",
    flag: "https://media-2.api-sports.io/flags/so.svg",
  },
  {
    name: "South-Africa",
    code: "ZA",
    flag: "https://media-3.api-sports.io/flags/za.svg",
  },
  {
    name: "South-Korea",
    code: "KR",
    flag: "https://media-1.api-sports.io/flags/kr.svg",
  },
  {
    name: "Spain",
    code: "ES",
    flag: "https://media-3.api-sports.io/flags/es.svg",
  },
  {
    name: "Sudan",
    code: "SD",
    flag: "https://media-3.api-sports.io/flags/sd.svg",
  },
  {
    name: "Surinam",
    code: "SR",
    flag: "https://media-1.api-sports.io/flags/sr.svg",
  },
  {
    name: "Sweden",
    code: "SE",
    flag: "https://media-2.api-sports.io/flags/se.svg",
  },
  {
    name: "Switzerland",
    code: "CH",
    flag: "https://media-3.api-sports.io/flags/ch.svg",
  },
  {
    name: "Syria",
    code: "SY",
    flag: "https://media-3.api-sports.io/flags/sy.svg",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    flag: "https://media-1.api-sports.io/flags/tj.svg",
  },
  {
    name: "Tanzania",
    code: "TZ",
    flag: "https://media-3.api-sports.io/flags/tz.svg",
  },
  {
    name: "Thailand",
    code: "TH",
    flag: "https://media-1.api-sports.io/flags/th.svg",
  },
  {
    name: "Trinidad-And-Tobago",
    code: "TT",
    flag: "https://media-2.api-sports.io/flags/tt.svg",
  },
  {
    name: "Tunisia",
    code: "TN",
    flag: "https://media-1.api-sports.io/flags/tn.svg",
  },
  {
    name: "Turkey",
    code: "TR",
    flag: "https://media-3.api-sports.io/flags/tr.svg",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    flag: "https://media-3.api-sports.io/flags/tm.svg",
  },
  {
    name: "Uganda",
    code: "UG",
    flag: "https://media-3.api-sports.io/flags/ug.svg",
  },
  {
    name: "Ukraine",
    code: "UA",
    flag: "https://media-1.api-sports.io/flags/ua.svg",
  },
  {
    name: "United-Arab-Emirates",
    code: "AE",
    flag: "https://media-2.api-sports.io/flags/ae.svg",
  },
  {
    name: "Uruguay",
    code: "UY",
    flag: "https://media-1.api-sports.io/flags/uy.svg",
  },
  {
    name: "USA",
    code: "US",
    flag: "https://media-1.api-sports.io/flags/us.svg",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    flag: "https://media-3.api-sports.io/flags/uz.svg",
  },
  {
    name: "Venezuela",
    code: "VE",
    flag: "https://media-2.api-sports.io/flags/ve.svg",
  },
  {
    name: "Vietnam",
    code: "VN",
    flag: "https://media-3.api-sports.io/flags/vn.svg",
  },
  {
    name: "Wales",
    code: "GB",
    flag: "https://media-3.api-sports.io/flags/gb.svg",
  },
  {
    name: "Zambia",
    code: "ZM",
    flag: "https://media-1.api-sports.io/flags/zm.svg",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    flag: "https://media-3.api-sports.io/flags/zw.svg",
  },
];

export const countriesForAllLeagues = [
  {
    name: "Spain",
    code: "ES",
    flag: "https://media-3.api-sports.io/flags/es.svg",
  },

  {
    name: "Italy",
    code: "IT",
    flag: "https://media-2.api-sports.io/flags/it.svg",
  },

  {
    name: "France",
    code: "FR",
    flag: "https://media-1.api-sports.io/flags/fr.svg",
  },

  {
    name: "England",
    code: "GB",
    flag: "https://media-1.api-sports.io/flags/gb.svg",
  },

  {
    name: "Poland",
    code: "PL",
    flag: "https://media-1.api-sports.io/flags/pl.svg",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "https://media-3.api-sports.io/flags/de.svg",
  },
  {
    name: "World",
    code: null,
    flag: "https://blog.logomyway.com/wp-content/uploads/2011/09/country-flags.jpg",
  },
];

export const popularLeagues = [
  {
    id: 140,
    name: "La Liga",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/140.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-2.api-sports.io/flags/es.svg",
    },
  },
  {
    id: 39,
    name: "Premier League",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/39.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-2.api-sports.io/flags/gb.svg",
    },
  },
  {
    id: 135,
    name: "Serie A",
    type: "League",
    logo: "https://vectorseek.com/wp-content/uploads/2023/06/Serie-A-2022-Logo-Vector.jpg",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-2.api-sports.io/flags/it.svg",
    },
  },
  {
    id: 78,
    name: "Bundesliga",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/78.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-2.api-sports.io/flags/de.svg",
    },
  },
  {
    id: 61,
    name: "Ligue 1",
    type: "League",
    logo: "https://logodownload.org/wp-content/uploads/2019/09/ligue-1-logo-0.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-2.api-sports.io/flags/fr.svg",
    },
  },
];

export const englandLeagues = [
  {
    leagueId: 39,
    name: "Premier League",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/39.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 40,
    name: "Championship",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/40.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 41,
    name: "League One",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/41.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 42,
    name: "League Two",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/42.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 45,
    name: "FA Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/45.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 48,
    name: "League Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/48.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 43,
    name: "National League",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/43.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 528,
    name: "Community Shield",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/528.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 46,
    name: "EFL Trophy",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/46.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 44,
    name: "FA WSL",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/44.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 50,
    name: "National League - North",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/50.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 51,
    name: "National League - South",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/51.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 58,
    name: "Non League Premier - Isthmian",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/58.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 59,
    name: "Non League Premier - Northern",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/59.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 60,
    name: "Non League Premier - Southern South",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/60.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 931,
    name: "Non League Premier - Southern Central",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/931.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 697,
    name: "WSL Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/697.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 54,
    name: "Non League Div One - Northern West",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/54.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 55,
    name: "Non League Div One - Northern Midlands",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/55.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 932,
    name: "Non League Div One - Northern East",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/932.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 933,
    name: "Non League Div One - Southern Central",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/933.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 47,
    name: "FA Trophy",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/47.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 702,
    name: "Premier League 2 Division One",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/702.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 695,
    name: "U18 Premier League - North",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/695.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 696,
    name: "U18 Premier League - South",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/696.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 703,
    name: "Professional Development League",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/703.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 871,
    name: "Premier League Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/871.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 57,
    name: "Non League Div One - Isthmian South East",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/57.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 698,
    name: "FA Women's Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/698.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 984,
    name: "National League - North - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/984.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 985,
    name: "National League - South - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/985.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 986,
    name: "Non League Div One - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/986.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 987,
    name: "U18 Premier League - Championship",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/987.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 993,
    name: "Non League Premier - Isthmian - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/993.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 994,
    name: "Non League Premier - Northern - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/994.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 995,
    name: "Non League Premier - Southern South - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/995.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 996,
    name: "Non League Premier - Southern Central - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/996.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },

  {
    leagueId: 699,
    name: "Women's Championship",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/699.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },

  {
    leagueId: 52,
    name: "Non League Div One - Isthmian North",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/52.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 53,
    name: "Non League Div One - Isthmian South Central",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/53.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
  {
    leagueId: 56,
    name: "Non League Div One - Southern South",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/56.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-4.api-sports.io/flags/gb.svg",
    },
  },
];

export const germanyLeagues = [
  {
    leagueId: 78,
    name: "Bundesliga",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/78.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 79,
    name: "2. Bundesliga",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/79.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 80,
    name: "3. Liga",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/80.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },

  {
    leagueId: 81,
    name: "DFB Pokal",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/81.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 751,
    name: "Oberliga - Niederrhein",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/751.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 1003,
    name: "Regionalliga - Relegation Round",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/1003.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 1002,
    name: "Regionalliga - Promotion Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/1002.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 989,
    name: "Oberliga - Relegation Round",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/989.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 988,
    name: "Oberliga - Promotion Round",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/988.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 947,
    name: "DFB Pokal - Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/947.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 939,
    name: "Oberliga - Bayern Süd",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/939.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 938,
    name: "Oberliga - Bayern Nord",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/938.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 749,
    name: "Oberliga - Bremen",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/749.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 748,
    name: "Oberliga - Niedersachsen",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/748.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 752,
    name: "Oberliga - Rheinland-Pfalz / Saar",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/752.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 744,
    name: "Oberliga - Schleswig-Holstein",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/744.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 745,
    name: "Oberliga - Hamburg",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/745.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 750,
    name: "Oberliga - Hessen",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/750.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 753,
    name: "Oberliga - Baden-Württemberg",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/753.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 747,
    name: "Oberliga - Westfalen",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/747.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 529,
    name: "Super Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/529.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 746,
    name: "Oberliga - Mittelrhein",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/746.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 755,
    name: "Oberliga - Nordost-Süd",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/755.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 754,
    name: "Oberliga - Nordost-Nord",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/754.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 84,
    name: "Regionalliga - Nord",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/84.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 87,
    name: "Regionalliga - West",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/87.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 86,
    name: "Regionalliga - SudWest",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/86.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 85,
    name: "Regionalliga - Nordost",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/85.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 83,
    name: "Regionalliga - Bayern",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/83.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 488,
    name: "U19 Bundesliga",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/488.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 715,
    name: "DFB Junioren Pokal",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/715.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
  {
    leagueId: 82,
    name: "Frauen Bundesliga",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/82.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-4.api-sports.io/flags/de.svg",
    },
  },
];

export const spainLeagues = [
  {
    leagueId: 140,
    name: "La Liga",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/140.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 141,
    name: "Segunda División",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/141.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 454,
    name: "Tercera División RFEF - Group 16",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/454.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 445,
    name: "Tercera División RFEF - Group 7",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/445.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 446,
    name: "Tercera División RFEF - Group 8",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/446.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 447,
    name: "Tercera División RFEF - Group 9",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/447.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 449,
    name: "Tercera División RFEF - Group 11",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/449.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 450,
    name: "Tercera División RFEF - Group 12",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/450.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 451,
    name: "Tercera División RFEF - Group 13",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/451.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 452,
    name: "Tercera División RFEF - Group 14",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/452.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 453,
    name: "Tercera División RFEF - Group 15",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/453.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 444,
    name: "Tercera División RFEF - Group 6",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/444.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 455,
    name: "Tercera División RFEF - Group 17",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/455.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 456,
    name: "Tercera División RFEF - Group 18",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/456.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 735,
    name: "Copa Federacion",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/735.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 143,
    name: "Copa del Rey",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/143.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 977,
    name: "Tercera División RFEF - Promotion - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/977.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 1000,
    name: "Segunda División RFEF - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/1000.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 1006,
    name: "Primera División RFEF - Play Offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/1006.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 878,
    name: "Segunda División RFEF - Group 4",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/878.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },

  {
    leagueId: 436,
    name: "Primera División RFEF - Group 2",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/436.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 435,
    name: "Primera División RFEF - Group 1",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/435.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 142,
    name: "Primera División Femenina",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/142.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 875,
    name: "Segunda División RFEF - Group 1",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/875.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 876,
    name: "Segunda División RFEF - Group 2",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/876.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 877,
    name: "Segunda División RFEF - Group 3",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/877.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 556,
    name: "Super Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/556.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 879,
    name: "Segunda División RFEF - Group 5",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/879.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 439,
    name: "Tercera División RFEF - Group 1",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/439.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 448,
    name: "Tercera División RFEF - Group 10",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/448.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 440,
    name: "Tercera División RFEF - Group 2",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/440.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 441,
    name: "Tercera División RFEF - Group 3",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/441.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 442,
    name: "Tercera División RFEF - Group 4",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/442.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
  {
    leagueId: 443,
    name: "Tercera División RFEF - Group 5",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/443.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-4.api-sports.io/flags/es.svg",
    },
  },
];

export const franceLeagues = [
  {
    leagueId: 61,
    name: "Ligue 1",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/61.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 62,
    name: "Ligue 2",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/62.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },

  {
    leagueId: 463,
    name: "National 3 - Group C",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/463.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 66,
    name: "Coupe de France",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/66.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 472,
    name: "National 3 - Group M",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/472.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 471,
    name: "National 3 - Group L",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/471.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 470,
    name: "National 3 - Group K",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/470.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 469,
    name: "National 3 - Group J",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/469.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 468,
    name: "National 3 - Group I",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/468.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 467,
    name: "National 3 - Group H",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/467.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 466,
    name: "National 3 - Group F",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/466.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 465,
    name: "National 3 - Group E",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/465.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 464,
    name: "National 3 - Group D",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/464.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 526,
    name: "Trophée des Champions",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/526.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 462,
    name: "National 3 - Group B",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/462.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 461,
    name: "National 3 - Group A",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/461.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 64,
    name: "Feminine Division 1",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/64.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 70,
    name: "National 2 - Group D",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/70.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 69,
    name: "National 2 - Group C",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/69.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 68,
    name: "National 2 - Group B",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/68.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 67,
    name: "National 2 - Group A",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/67.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
  {
    leagueId: 63,
    name: "National 1",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/63.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-4.api-sports.io/flags/fr.svg",
    },
  },
];

export const italyLeagues = [
  {
    leagueId: 135,
    name: "Serie A",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/135.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 136,
    name: "Serie B",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/136.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 137,
    name: "Coppa Italia",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/137.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 547,
    name: "Super Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/547.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 431,
    name: "Serie D - Girone F",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/431.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 999,
    name: "Serie D - Championship Round",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/999.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 998,
    name: "Serie D - Relegation - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/998.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 997,
    name: "Serie D - Promotion - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/997.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 974,
    name: "Serie C - Supercoppa Lega Finals",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/974.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 976,
    name: "Serie C - Promotion - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/976.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 975,
    name: "Serie C - Relegation - Play-offs",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/975.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 817,
    name: "Super Cup Primavera",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/817.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 891,
    name: "Coppa Italia Serie C",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/891.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 434,
    name: "Serie D - Girone I",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/434.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 943,
    name: "Serie C - Girone C",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/943.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 942,
    name: "Serie C - Girone B",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/942.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 138,
    name: "Serie C - Girone A",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/138.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 433,
    name: "Serie D - Girone H",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/433.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 432,
    name: "Serie D - Girone G",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/432.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },

  {
    leagueId: 430,
    name: "Serie D - Girone E",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/430.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 429,
    name: "Serie D - Girone D",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/429.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 428,
    name: "Serie D - Girone C",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/428.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 427,
    name: "Serie D - Girone B",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/427.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 426,
    name: "Serie D - Girone A",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/426.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 706,
    name: "Campionato Primavera - 2",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/706.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 892,
    name: "Coppa Italia Serie D",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/892.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 704,
    name: "Coppa Italia Primavera",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/704.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 139,
    name: "Serie A Women",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/139.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
  {
    leagueId: 705,
    name: "Campionato Primavera - 1",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/705.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-4.api-sports.io/flags/it.svg",
    },
  },
];

export const polandLeagues = [
  {
    leagueId: 106,
    name: "Ekstraklasa",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/106.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 108,
    name: "Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/108.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 727,
    name: "Super Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/727.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 107,
    name: "I Liga",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/107.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 109,
    name: "II Liga - East",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/109.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 780,
    name: "III Liga - Group 1",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/780.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 781,
    name: "III Liga - Group 2",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/781.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 782,
    name: "III Liga - Group 3",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/782.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 783,
    name: "III Liga - Group 4",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/783.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
  {
    leagueId: 676,
    name: "Central Youth League",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/676.png",
    country: {
      name: "Poland",
      code: "PL",
      flag: "https://media-4.api-sports.io/flags/pl.svg",
    },
  },
];

export const worldLeagues = [
  {
    leagueId: 2,
    name: "UEFA Champions League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/2.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 3,
    name: "UEFA Europa League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/3.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 921,
    name: "UEFA U17 Championship",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/921.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 12,
    name: "CAF Champions League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/12.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },

  {
    leagueId: 937,
    name: "Emirates Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/937.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 934,
    name: "Arab Championship - U20",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/934.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 533,
    name: "CAF Super Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/533.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 928,
    name: "AFF U19 Championship",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/928.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 927,
    name: "World Cup - Women - Qualification Concacaf",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/927.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 926,
    name: "Copa America Femenina",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/926.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 922,
    name: "Africa Cup of Nations - Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/922.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 20,
    name: "CAF Confederation Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/20.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 920,
    name: "World Cup - U20 - Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/920.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 919,
    name: "Mediterranean Games",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/919.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 918,
    name: "UEFA U19 Championship - Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/918.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 525,
    name: "UEFA Champions League Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/525.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 859,
    name: "COSAFA Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/859.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 667,
    name: "Friendlies Clubs",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/667.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 916,
    name: "Kirin Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/916.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 848,
    name: "UEFA Europa Conference League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/848.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 949,
    name: "CONMEBOL Libertadores Femenina",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/949.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 803,
    name: "Asian Games",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/803.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 1016,
    name: "CAC Games",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/1016.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 890,
    name: "U20 Elite League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/890.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 15,
    name: "FIFA Club World Cup",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/15.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 953,
    name: "Africa U23 Cup of Nations - Qualification",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/953.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 952,
    name: "AFC U23 Asian Cup - Qualification",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/952.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 951,
    name: "South American Youth Games",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/951.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 950,
    name: "World Cup - U17 - Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/950.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 767,
    name: "CONCACAF League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/767.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 849,
    name: "Baltic Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/849.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 19,
    name: "African Nations Championship",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/19.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 771,
    name: "COSAFA U20 Championship",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/771.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 24,
    name: "AFF Championship",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/24.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 945,
    name: "International Champions Cup - Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/945.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 14,
    name: "UEFA Youth League",
    type: "League",
    logo: "https://media-4.api-sports.io/football/leagues/14.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 941,
    name: "Islamic Solidarity Games",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/941.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 940,
    name: "COTIF Tournament",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/940.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 541,
    name: "CONMEBOL Recopa",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/541.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 900,
    name: "Tipsport Malta Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/900.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 18,
    name: "AFC Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/18.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 17,
    name: "AFC Champions League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/17.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 897,
    name: "Asian Cup Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/897.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 666,
    name: "Friendlies Women",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/666.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 10,
    name: "Friendlies",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/10.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 11,
    name: "CONMEBOL Sudamericana",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/11.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 13,
    name: "CONMEBOL Libertadores",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/13.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 16,
    name: "CONCACAF Champions League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/16.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 904,
    name: "SheBelieves Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/904.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 33,
    name: "World Cup - Qualification Oceania",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/33.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 894,
    name: "Asian Cup Women - Qualification",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/894.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 893,
    name: "UEFA U19 Championship - Qualification",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/893.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 886,
    name: "UEFA U17 Championship - Qualification",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/886.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 35,
    name: "Asian Cup - Qualification",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/35.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 31,
    name: "World Cup - Qualification CONCACAF",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/31.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 34,
    name: "World Cup - Qualification South America",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/34.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 30,
    name: "World Cup - Qualification Asia",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/30.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 772,
    name: "Leagues Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/772.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },

  {
    leagueId: 531,
    name: "UEFA Super Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/531.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 914,
    name: "Tournoi Maurice Revello",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/914.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 913,
    name: "CONMEBOL - UEFA Finalissima",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/913.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 885,
    name: "Campeones Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/885.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 856,
    name: "CONCACAF Caribbean Club Championship",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/856.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 912,
    name: "CONCACAF Women U17",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/912.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 911,
    name: "Southeast Asian Games",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/911.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 29,
    name: "World Cup - Qualification Africa",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/29.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 536,
    name: "CONCACAF Nations League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/536.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 1,
    name: "World Cup",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/1.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 37,
    name: "World Cup - Qualification Intercontinental Play-offs",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/37.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 5,
    name: "UEFA Nations League",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/5.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 534,
    name: "CONCACAF Caribbean Club Shield",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/534.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 532,
    name: "AFC U23 Championship",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/532.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 537,
    name: "CONCACAF U20",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/537.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
  {
    leagueId: 908,
    name: "AFF U23 Championship",
    type: "Cup",
    logo: "https://media-4.api-sports.io/football/leagues/908.png",
    country: {
      name: "World",
      code: null,
      flag: null,
    },
  },
];
