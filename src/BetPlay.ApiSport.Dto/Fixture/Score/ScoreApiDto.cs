namespace BetPlay.ApiSport.Dto.Fixture.Score;

public class ScoreApiDto
{
    public ScoreDetailApiDto Halftime { get; set; }
    public ScoreDetailApiDto Fulltime { get; set; }
    public ScoreDetailApiDto Extratime { get; set; }
    public ScoreDetailApiDto Penalty { get; set; }
}

public class ScoreDetailApiDto
{
    public int? Home { get; set; }
    public int? Away { get; set; }
}