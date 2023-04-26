using BetPlay.Dto.Fixture.Goals;

namespace BetPlay.Dto.Fixture.Score;

public class ScoreDto
{
    public GoalsDto Halftime { get; set; } 
    public GoalsDto Fulltime { get; set; } 
    public GoalsDto Extratime { get; set; } 
    public GoalsDto Penalty { get; set; } 
}