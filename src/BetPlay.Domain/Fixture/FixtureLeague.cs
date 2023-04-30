using BetPlay.ApiSport.Dto.Fixture;

namespace BetPlay.Domain.Fixture;

public class FixtureLeague : Entity
{
    public FixtureLeague(FixtureResponseApiDto fixtureResponseApiDto, League.League league)
    {
        League = league;
        Round = fixtureResponseApiDto.League.Round;
        Season = fixtureResponseApiDto.League.Season;
    }

    public FixtureLeague(LiveFixtureResponseApiDto fixtureResponseApiDto, League.League league)
    {
        League = league;
        Round = fixtureResponseApiDto.League.Round;
        Season = fixtureResponseApiDto.League.Season;
    }

    public FixtureLeague()
    {
    }


    // public Guid FixtureId { get; set; }
    // public virtual Fixture Fixture { get; set; } = default!;
    public virtual League.League League { get; set; } = default!;
    public Guid LeagueId { get; set; }
    public string Round { get; set; }
    public int Season { get; set; }
}