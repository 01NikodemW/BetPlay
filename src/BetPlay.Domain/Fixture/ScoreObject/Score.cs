using BetPlay.ApiSport.Dto.Fixture;

namespace BetPlay.Domain.Fixture.ScoreObject;

public class Score
{
    public Score(FixtureResponseApiDto fixtureResponseApiDto)
    {
        Halftime = new Goals(fixtureResponseApiDto.Score.Halftime);
        Fulltime = new Goals(fixtureResponseApiDto.Score.Fulltime);
        Extratime = new Goals(fixtureResponseApiDto.Score.Extratime);
        Penalty = new Goals(fixtureResponseApiDto.Score.Penalty);
    }

    public Goals Halftime { get; set; }
    public Goals Fulltime { get; set; }
    public Goals Extratime { get; set; }
    public Goals Penalty { get; set; }
}