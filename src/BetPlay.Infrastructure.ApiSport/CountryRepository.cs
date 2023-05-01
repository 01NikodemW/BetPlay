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

        if (countries.Count != 166)
        {
            var countriesApiDto = await _client.GetCountriesAsync();
            countries = countriesApiDto.Where(x => !string.IsNullOrEmpty(x.Code)).Select(x => new Country(x)).ToList();
            foreach (var country in countries)
            {
                var countryInDb = await _context.Countries.FirstOrDefaultAsync(x => x.Name == country.Name);
                if (countryInDb == null)
                {
                    _context.Countries.Add(country);
                }
            }


            await _context.SaveChangesAsync();
        }

        return countries;
    }
}