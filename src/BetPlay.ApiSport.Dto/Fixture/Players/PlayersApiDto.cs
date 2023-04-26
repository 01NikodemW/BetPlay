namespace BetPlay.ApiSport.Dto.Fixture.Players;

public class PlayersApiDto
{
    public TeamApiDto Team { get; set; } = default!;
    public IEnumerable<PlayerApiDto> Players { get; set; } = default!;
}

public class TeamApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public string Update { get; set; } = default!;
}

public class PlayerApiDto
{
    public Player Player { get; set; } = default!;
    public IEnumerable<Statistic> Statistics { get; set; } = default!;
}

public class Player
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Photo { get; set; } = default!;
}

public class Statistic
{
    public Games Games { get; set; } = default!;
    public int? Offsides { get; set; }
    public Shots Shots { get; set; } = default!;
    public Goals Goals { get; set; } = default!;
    public Passes Passes { get; set; } = default!;
    public Tackles Tackles { get; set; } = default!;
    public Duels Duels { get; set; } = default!;
    public Dribbles Dribbles { get; set; } = default!;
    public Fouls Fouls { get; set; } = default!;
    public Cards Cards { get; set; } = default!;
    public Penalty Penalty { get; set; } = default!;
}

public class Games
{
    public int? Minutes { get; set; }
    public int? Number { get; set; }
    public string? Position { get; set; }
    public string? Rating { get; set; }
    public bool? Captain { get; set; }
    public bool? Substitute { get; set; }
}

public class Shots
{
    public int? Total { get; set; }
    public int? On { get; set; }
}

public class Goals
{
    public int? Total { get; set; }
    public int? Conceded { get; set; }
    public int? Assists { get; set; }
    public int? Saves { get; set; }
}

public class Passes
{
    public int? Total { get; set; }
    public int? Key { get; set; }
    public string? Accuracy { get; set; }
}

public class Tackles
{
    public int? Total { get; set; }
    public int? Blocks { get; set; }
    public int? Interceptions { get; set; }
}

public class Duels
{
    public int? Total { get; set; }
    public int? Won { get; set; }
}

public class Dribbles
{
    public int? Attempts { get; set; }
    public int? Success { get; set; }
    public int? Past { get; set; }
}

public class Fouls
{
    public int? Drawn { get; set; }
    public int? Committed { get; set; }
}

public class Cards
{
    public int? Yellow { get; set; }
    public int? Red { get; set; }
}

public class Penalty
{
    public int? Won { get; set; }
    public int? Committed { get; set; }
    public int? Scored { get; set; }
    public int? Missed { get; set; }
    public int? Saved { get; set; }
}


//
// players: [
//     {
//         team: {
//             id: 529
//             name: "Barcelona"
//             logo: "https://media-2.api-sports.io/football/teams/529.png"
//             update: "2023-04-25T04:15:00+00:00"
//         }
//         players: [
//         {
//             player: {
//                 id: 127
//                 name: "Marc-André ter Stegen"
//                 photo: "https://media-2.api-sports.io/football/players/127.png"
//             }
//             statistics: [
//             {
//                 games: {
//                     minutes: 90
//                     number: 1
//                     position: "G"
//                     rating: "7.7"
//                     captain: false
//                     substitute: false
//                 }
//                 offsides: null
//                 shots: {
//                     total: null
//                     on: null
//                 }
//                 goals: {
//                     total: null
//                     conceded: 0
//                     assists: null
//                     saves: 3
//                 }
//                 passes: {
//                     total: 33
//                     key: null
//                     accuracy: "24"
//                 }
//                 tackles: {
//                     total: null
//                     blocks: null
//                     interceptions: null
//                 }
//                 duels: {
//                     total: null
//                     won: null
//                 }
//                 dribbles: {
//                     attempts: null
//                     success: null
//                     past: null
//                 }
//                 fouls: {
//                     drawn: null
//                     committed: null
//                 }
//                 cards: {
//                     yellow: 0
//                     red: 0
//                 }
//                 penalty: {
//                     won: null
//                     commited: null
//                     scored: 0
//                     missed: 0
//                     saved: 0
//                 }
//             }
//             ]
//         }
//         ]
//     }
// ]