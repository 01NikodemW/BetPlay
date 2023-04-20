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
    
    public League()
    {
    }

    public int LeagueId { get; set; }
    public string Name { get; set; } = default!;
    public string Type { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public Country Country { get; set; } = default!;
    public Guid CountryId { get; set; }
    public DateTime UpdateDate { get; set; }

    public bool isValid()
    {
        return UpdateDate.AddDays(7) > DateTime.Now;
    }
}