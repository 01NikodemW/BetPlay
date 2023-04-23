using BetPlay.Domain.League;

namespace BetPlay.Infrastructure.ApiSport;

public interface ICountryRepository
{
    Task<IEnumerable<Country>> GetCountries();
}