using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.Domain.Fixture.FixtureObject;
using BetPlay.Domain.Fixture.ScoreObject;
using BetPlay.Domain.Fixture.TeamsObject;
using BetPlay.Domain.Team;

namespace BetPlay.Domain.Fixture;

public class Fixture : Entity
{
    public Fixture(FixtureResponseApiDto fixtureResponseApiDto)
    {
        FixtureId = fixtureResponseApiDto.Fixture.Id;
        Referee = fixtureResponseApiDto.Fixture.Referee;
        Timezone = fixtureResponseApiDto.Fixture.Timezone;
        Date = fixtureResponseApiDto.Fixture.Date;
        Timestamp = fixtureResponseApiDto.Fixture.Timestamp;
        Periods = new Periods(fixtureResponseApiDto);
        Status = new Status(fixtureResponseApiDto);
        Venue = new Venue(fixtureResponseApiDto);
        League = new League.League(fixtureResponseApiDto);
        Teams = new Teams(fixtureResponseApiDto);
        Goals = new Goals(fixtureResponseApiDto);
        Score = new Score(fixtureResponseApiDto);
    }

    public Fixture()
    {
    }

    public int FixtureId { get; set; }

    public string Referee { get; set; } = default!;

    public string Timezone { get; set; } = default!;

    public string Date { get; set; } = default!;

    public int Timestamp { get; set; }

    public Periods Periods { get; set; } = default!;

    public Status Status { get; set; } = default!;

    public Venue Venue { get; set; } = default!;
    public League.League League { get; set; } = default!;
    public Teams Teams { get; set; } = default!;
    public Goals Goals { get; set; } = default!;
    public Score Score { get; set; } = default!;
}