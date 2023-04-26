using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.ApiSport.Dto.Fixture.Score;

namespace BetPlay.Domain.Fixture;

public class Goals : Entity
{
    public Goals(FixtureResponseApiDto fixtureResponseApiDto)
    {
        Home = fixtureResponseApiDto.Goals.Home;
        Away = fixtureResponseApiDto.Goals.Away;
    }
    
    public Goals(ScoreDetailApiDto scoreDetailApiDto)
    {
        Home = scoreDetailApiDto.Home;
        Away = scoreDetailApiDto.Away;
    }

    public Goals()
    {
    }

    public int? Home { get; set; }
    public int? Away { get; set; }
}