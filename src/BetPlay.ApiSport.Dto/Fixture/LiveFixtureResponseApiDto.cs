using BetPlay.ApiSport.Dto.Fixture.Events;
using BetPlay.ApiSport.Dto.Fixture.Fixture;
using BetPlay.ApiSport.Dto.Fixture.Goals;
using BetPlay.ApiSport.Dto.Fixture.League;
using BetPlay.ApiSport.Dto.Fixture.Score;
using BetPlay.ApiSport.Dto.Fixture.Teams;

namespace BetPlay.ApiSport.Dto.Fixture;

public class LiveFixtureResponseApiDto
{
    public FixtureApiDto Fixture { get; set; } = default!;
    public LeagueApiDto League { get; set; } = default!;
    public TeamsApiDto Teams { get; set; } = default!;
    public GoalsApiDto Goals { get; set; } = default!;
    public ScoreApiDto Score { get; set; } = default!;
    public IEnumerable<EventApiDto>? Events { get; set; } = default!;
}