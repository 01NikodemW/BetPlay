namespace BetPlay.ApiSport.Dto.League;

public class SeasonApiDto
{
    public int Year { get; set; }
    public string Start { get; set; } = default!;
    public string End { get; set; } = default!;
    public bool Current { get; set; }
    public CoverageApiDto CoverageApiDto { get; set; } = default!;
}