using BetPlay.Dto.League;

namespace BetPlay.Responses.Countries;

public class GetCountriesResponse
{
    public IEnumerable<CountryDto> Countries { get; set; } = default!;
}