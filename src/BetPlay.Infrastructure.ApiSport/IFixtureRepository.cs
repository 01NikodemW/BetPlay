using BetPlay.Domain.Fixture;

namespace BetPlay.Infrastructure.ApiSport;

public interface IFixtureRepository
{
    Task<Fixture> GetFixtureById(int id);
    Task<IEnumerable<Fixture>> GetLiveFixturesByLeagueId(int leagueId);
    Task<IEnumerable<Fixture>> GetAllLiveFixtures();
}