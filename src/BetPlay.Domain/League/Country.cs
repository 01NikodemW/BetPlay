using BetPlay.ApiSport.Dto.League;

namespace BetPlay.Domain.League;

public class Country : Entity
{
    public Country(CountryApiDto countryApiDto)
    {
        Name = countryApiDto.Name;
        Code = countryApiDto.Code;
        Flag = countryApiDto.Flag;
    }

    public Country()
    {
        
    }
    
    public string Name { get; set; } = default!;
    public string Code { get; set; } = default!;
    public string Flag { get; set; } = default!;
}