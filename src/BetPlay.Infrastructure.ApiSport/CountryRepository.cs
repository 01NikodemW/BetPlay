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
        var countries = await _context.Countries.ToListAsync();

        if (countries.Count != 166 || countries.Any(c => c.IsValid() != true))
        {
            _context.Countries.RemoveRange(countries);

            var countriesApiDto = await _client.GetCountriesAsync();
            countries = countriesApiDto.Where(x => !string.IsNullOrEmpty(x.Code)).Select(x => new Country(x)).ToList();
            _context.Countries.AddRange(countries);

            await _context.SaveChangesAsync();
        }

        return countries;
    }
}