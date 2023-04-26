using BetPlay.Dto.Fixture.FixtureObject;
using BetPlay.Dto.Fixture.Goals;
using BetPlay.Dto.Fixture.LeagueObject;
using BetPlay.Dto.Fixture.Score;
using BetPlay.Dto.Fixture.TeamsObject;

namespace BetPlay.Dto.Fixture;

public class FixtureDto
{
    public int FixtureId { get; set; }

    public string Referee { get; set; } = default!;

    public string Timezone { get; set; } = default!;

    public string Date { get; set; } = default!;

    public int Timestamp { get; set; }

    public PeriodsDto Periods { get; set; } = default!;

    public StatusDto Status { get; set; } = default!;

    public VenueDto Venue { get; set; } = default!;

    public LeagueDto League { get; set; } = default!;

    public TeamsDto Teams { get; set; } = default!;
    public GoalsDto Goals { get; set; } = default!;
    public ScoreDto Score { get; set; } = default!;
}