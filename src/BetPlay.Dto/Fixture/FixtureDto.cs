using BetPlay.Dto.Fixture.Events;

namespace BetPlay.Dto.Fixture;

public class FixtureDto
{
    // public FixtureApiDto Fixture { get; set; } = default!;
    // public LeagueApiDto League { get; set; } = default!;
    // public TeamsApiDto Teams { get; set; } = default!;
    // public GoalsApiDto Goals { get; set; } = default!;
    // public ScoreApiDto Score { get; set; } = default!;
    public IEnumerable<EventDto> Events { get; set; } = default!;
    // public IEnumerable<LineupApiDto>? Lineups { get; set; } = default!;
    // public IEnumerable<StatisticsApiDto>? Statistics { get; set; } = default!;
    // public IEnumerable<PlayersApiDto>? Players { get; set; } = default!;
}