using BetPlay.ApiSport.Dto.Fixture.Lineups.Coach;
using BetPlay.ApiSport.Dto.Fixture.Lineups.Team;

namespace BetPlay.ApiSport.Dto.Fixture.Lineups;

public class LineupApiDto
{
    public TeamApiDto Team { get; set; } = default!;
    public CoachApiDto Coach { get; set; } = default!;
    public string Formation { get; set; } = default!;
    public IEnumerable<PlayerApiDto> StartXI { get; set; } = default!;
    public IEnumerable<PlayerApiDto> Substitutes { get; set; } = default!;
}