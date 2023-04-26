using BetPlay.Domain.Fixture;

namespace BetPlay.Infrastructure.ApiSport;

public interface IFixtureRepository
{
    Task<Fixture> GetFixtureById(int id);
}