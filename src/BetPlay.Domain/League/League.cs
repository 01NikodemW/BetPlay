using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.ApiSport.Dto.League;

namespace BetPlay.Domain.League;

public class League : Entity
{
    public League(LeagueResponseApiDto leagueResponseApiDto)
    {
        LeagueId = leagueResponseApiDto.League.Id;
        Name = leagueResponseApiDto.League.Name;
        Type = leagueResponseApiDto.League.Type;
        Logo = leagueResponseApiDto.League.Logo;
        Country = new Country(leagueResponseApiDto.Country);
        UpdateDate = DateTime.Now;
    }

    public League(FixtureResponseApiDto fixtureResponseApiDto)
    {
        LeagueId = fixtureResponseApiDto.League.Id;
        Name = fixtureResponseApiDto.League.Name;
        Logo = fixtureResponseApiDto.League.Logo;
        Flag = fixtureResponseApiDto.League.Flag;
        Season = fixtureResponseApiDto.League.Season;
        Round = fixtureResponseApiDto.League.Round;
        UpdateDate = DateTime.Now;
    }

    public League()
    {
    }

    public int LeagueId { get; set; }
    public string Name { get; set; } = default!;
    public string? Type { get; set; } = default!;
    public string? Logo { get; set; } = default!;
    public string? Flag { get; set; } = default!;
    public string? Round { get; set; } = default!;
    public int? Season { get; set; }
    public Country? Country { get; set; } = default!;
    public Guid? CountryId { get; set; }
    public DateTime UpdateDate { get; set; }

    public bool isValid()
    {
        return UpdateDate.AddDays(7) > DateTime.Now;
    }
}