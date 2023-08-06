using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.Domain.Fixture;

namespace BetPlay.Infrastructure.ApiSport;

public interface IFixtureRepository
{
    Task<FixtureResponseApiDto> GetFixtureById(int id);

    // Task<Fixture> GetFixtureById(int id);
    Task<IEnumerable<Fixture>> GetLiveFixturesByLeagueId(int leagueId);
    Task<IEnumerable<Fixture>> GetAllLiveFixtures();
    Task<IEnumerable<Fixture>> GetFixturesByDate(DateTime date, IEnumerable<int> leaguesToDisplay);
}