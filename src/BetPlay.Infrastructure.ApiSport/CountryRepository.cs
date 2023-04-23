using BetPlay.ApiSport.Dto;
using BetPlay.Domain.League;
using BetPlay.Infrastructure.EfCore;
using Microsoft.EntityFrameworkCore;

namespace BetPlay.Infrastructure.ApiSport;

public class CountryRepository : ICountryRepository
{
    private readonly BetPlayDbContext _context;
    private readonly IApiSportClient _client;

    public CountryRepository(BetPlayDbContext context, IApiSportClient client)
    {
        _context = context;
        _client = client;
    }

    public async Task<IEnumerable<Country>> GetCountries()
    {
        var countriesApiDto = await _client.GetCountriesAsync();
        var countries = countriesApiDto.Select(x => new Country(x));

        return countries;
    }
}