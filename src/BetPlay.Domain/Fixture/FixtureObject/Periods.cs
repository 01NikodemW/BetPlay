using BetPlay.ApiSport.Dto.Fixture;

namespace BetPlay.Domain.Fixture.FixtureObject;

public class Periods
{
    public Periods(FixtureResponseApiDto fixtureResponseApiDto)
    {
        First = fixtureResponseApiDto.Fixture.Periods.First;
        Second = fixtureResponseApiDto.Fixture.Periods.Second;
    }

    public Periods()
    {
    }

    public int? First { get; set; }
    public int? Second { get; set; }
}