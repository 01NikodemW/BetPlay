using BetPlay.ApiSport.Dto.Fixture;

namespace BetPlay.Domain.Fixture.FixtureObject;

public class Status
{
    public Status(FixtureResponseApiDto fixtureResponseApiDto)
    {
        Long = fixtureResponseApiDto.Fixture.Status.Long;
        Short = fixtureResponseApiDto.Fixture.Status.Short;
        Elapsed = fixtureResponseApiDto.Fixture.Status.Elapsed;
    }

    public Status()
    {
    }

    public string Long { get; set; } = default!;
    public string Short { get; set; } = default!;
    public int? Elapsed { get; set; }
}