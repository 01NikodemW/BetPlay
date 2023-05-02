using VenueDto = BetPlay.Dto.Team.VenueDto;


namespace BetPlay.Dto.Fixture;

public class FixtureDetailsDto
{
    public int FixtureId { get; set; }
    public string Referee { get; set; } = default!;
    public string Timezone { get; set; } = default!;
    public string Date { get; set; } = default!;
    public int Timestamp { get; set; }
    public string Long { get; set; } = default!;
    public string Short { get; set; } = default!;
    public int? Elapsed { get; set; }
    public string HomeName { get; set; } = default!;
    public string AwayName { get; set; } = default!;
    public string HomeLogo { get; set; } = default!;
    public string AwayLogo { get; set; } = default!;
    public int? GoalsHomeTeam { get; set; }
    public int? GoalsAwayTeam { get; set; }
    public VenueDto Venue { get; set; } = default!;
    public FixtureLeagueDto FixtureLeague { get; set; } = default!;
    public ScoreDto Score { get; set; } = default!;
}