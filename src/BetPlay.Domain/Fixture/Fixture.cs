using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.Domain.Team;

namespace BetPlay.Domain.Fixture;

public class Fixture : Entity
{
    public Fixture(FixtureResponseApiDto fixtureResponseApiDto, Venue? venue, FixtureLeague fixtureLeague, Score score,
        IEnumerable<Event> events)
    {
        FixtureId = fixtureResponseApiDto.Fixture.Id;
        Referee = fixtureResponseApiDto.Fixture.Referee ?? "N/A";
        Timezone = fixtureResponseApiDto.Fixture.Timezone;
        Date = fixtureResponseApiDto.Fixture.Date;
        Timestamp = fixtureResponseApiDto.Fixture.Timestamp;
        Long = fixtureResponseApiDto.Fixture.Status.Long;
        Short = fixtureResponseApiDto.Fixture.Status.Short;
        Elapsed = fixtureResponseApiDto.Fixture.Status.Elapsed;
        HomeName = fixtureResponseApiDto.Teams.Home.Name;
        AwayName = fixtureResponseApiDto.Teams.Away.Name;
        HomeLogo = fixtureResponseApiDto.Teams.Home.Logo;
        AwayLogo = fixtureResponseApiDto.Teams.Away.Logo;
        GoalsHomeTeam = fixtureResponseApiDto.Goals.Home;
        GoalsAwayTeam = fixtureResponseApiDto.Goals.Away;
        UpdateDate = DateTime.Now;
        Venue = venue;
        FixtureLeague = fixtureLeague;
        Events = events;
        Score = score;
    }

    public Fixture(LiveFixtureResponseApiDto fixtureResponseApiDto, Venue venue, FixtureLeague fixtureLeague)
    {
        FixtureId = fixtureResponseApiDto.Fixture.Id;
        Referee = fixtureResponseApiDto.Fixture.Referee;
        Timezone = fixtureResponseApiDto.Fixture.Timezone;
        Date = fixtureResponseApiDto.Fixture.Date;
        Timestamp = fixtureResponseApiDto.Fixture.Timestamp;
        Long = fixtureResponseApiDto.Fixture.Status.Long;
        Short = fixtureResponseApiDto.Fixture.Status.Short;
        Elapsed = fixtureResponseApiDto.Fixture.Status.Elapsed;
        HomeName = fixtureResponseApiDto.Teams.Home.Name;
        AwayName = fixtureResponseApiDto.Teams.Away.Name;
        HomeLogo = fixtureResponseApiDto.Teams.Home.Logo;
        AwayLogo = fixtureResponseApiDto.Teams.Away.Logo;
        GoalsHomeTeam = fixtureResponseApiDto.Goals.Home;
        GoalsAwayTeam = fixtureResponseApiDto.Goals.Away;
        UpdateDate = DateTime.Now;
        Venue = venue;
        FixtureLeague = fixtureLeague;
    }

    public Winner GetWinner()
    {
        return Short switch
        {
            "FT" => GoalsHomeTeam > GoalsAwayTeam ? Winner.Home : Winner.Away,
            "NS" => Winner.Draw,
            _ => Winner.Draw
        };
    }

    public Fixture()
    {
    }

    public int FixtureId { get; set; }

    // public string Referee { get; set; } = "N/A"; // assign default value
    public string? Referee { get; set; }
    public string Timezone { get; set; } = default!;
    public string Date { get; set; } = default!;
    public int Timestamp { get; set; }
    public string Long { get; set; } = default!;
    public string Short { get; set; } = default!;
    public int? Elapsed { get; set; }
    public Guid? VenueId { get; set; }
    public virtual Venue? Venue { get; set; } = default!;
    public Guid FixtureLeagueId { get; set; }
    public virtual FixtureLeague FixtureLeague { get; set; } = default!;
    public string HomeName { get; set; } = default!;
    public string AwayName { get; set; } = default!;
    public string HomeLogo { get; set; } = default!;
    public string AwayLogo { get; set; } = default!;
    public int? GoalsHomeTeam { get; set; }
    public int? GoalsAwayTeam { get; set; }
    public virtual Score? Score { get; set; }
    public Guid? ScoreId { get; set; }
    public virtual IEnumerable<Event>? Events { get; set; } = default!;
    public DateTime UpdateDate { get; set; }

    public bool IsValid()
    {
        return UpdateDate.AddDays(7) > DateTime.Now;
    }

    public bool IsValidForLive()
    {
        return UpdateDate.AddMinutes(1) > DateTime.Now;
    }

    public bool IsValidForNormalPreview()
    {
        return UpdateDate.AddMinutes(10) > DateTime.Now;
    }
}