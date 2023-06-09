namespace BetPlay.ApiSport.Dto.League;

public class CoverageApiDto
{
    public FixturesApiDto FixturesApiDto { get; set; } = default!;
    public bool Standings { get; set; }
    public bool Players { get; set; }
    public bool TopScorers { get; set; }
    public bool TopAssists { get; set; }
    public bool TopCards { get; set; }
    public bool Injuries { get; set; }
    public bool Predictions { get; set; }
    public bool Odds { get; set; }
}