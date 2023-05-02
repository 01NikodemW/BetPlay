using BetPlay.ApiSport.Dto.Fixture;

namespace BetPlay.Domain.Fixture;

public class Score : Entity
{
    public Score()
    {
    }

    public Score(FixtureResponseApiDto fixtureApiDto)
    {
        FixtureId = fixtureApiDto.Fixture.Id;
        HalftimeHome = fixtureApiDto.Score.Halftime.Home;
        HalftimeAway = fixtureApiDto.Score.Halftime.Away;
        FulltimeHome = fixtureApiDto.Score.Fulltime.Home;
        FulltimeAway = fixtureApiDto.Score.Fulltime.Away;
        ExtratimeHome = fixtureApiDto.Score.Extratime.Home;
        ExtratimeAway = fixtureApiDto.Score.Extratime.Away;
        PenaltyHome = fixtureApiDto.Score.Penalty.Home;
        PenaltyAway = fixtureApiDto.Score.Penalty.Away;
    }

    public int FixtureId { get; set; }
    public int? HalftimeHome { get; set; }
    public int? HalftimeAway { get; set; }
    public int? FulltimeHome { get; set; }
    public int? FulltimeAway { get; set; }
    public int? ExtratimeHome { get; set; }
    public int? ExtratimeAway { get; set; }
    public int? PenaltyHome { get; set; }
    public int? PenaltyAway { get; set; }
}