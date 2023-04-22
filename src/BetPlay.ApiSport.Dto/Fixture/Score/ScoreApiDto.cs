namespace BetPlay.ApiSport.Dto.Fixture.Score;

public class ScoreApiDto
{
    public HalftimeApiDto Halftime { get; set; }
    public FulltimeApiDto Fulltime { get; set; }
    public ExtratimeApiDto Extratime { get; set; }
    public PenaltyApiDto Penalty { get; set; }
}