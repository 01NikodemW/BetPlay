using BetPlay.ApiSport.Dto.Country;
using BetPlay.ApiSport.Dto.League;

namespace BetPlay.Domain.League;

public class Country : Entity
{
    public Country(CountryApiDto countryApiDto)
    {
        Name = countryApiDto.Name;
        Code = countryApiDto.Code;
        Flag = countryApiDto.Flag;
        UpdateDate = DateTime.Now;
    }

    public Country(CountryResponseApiDto countryApiDto)
    {
        Name = countryApiDto.Name;
        Code = countryApiDto.Code;
        Flag = countryApiDto.Flag;
        UpdateDate = DateTime.Now;
    }

    public Country()
    {
    }

    public string Name { get; set; } = default!;
    public string? Code { get; set; } = default!;
    public string? Flag { get; set; } = default!;
    public DateTime UpdateDate { get; set; }

    public bool IsValid()
    {
        return UpdateDate.AddDays(7) > DateTime.Now;
    }
}