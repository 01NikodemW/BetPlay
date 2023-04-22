using BetPlay.ApiSport.Dto.Fixture.Players.Player;
using BetPlay.ApiSport.Dto.Fixture.Players.Team;

namespace BetPlay.ApiSport.Dto.Fixture.Players;

public class PlayersApiDto
{
    public TeamApiDto Team { get; set; } = default!;
    public IEnumerable<PlayerApiDto> Players { get; set; } = default!;
}