using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.Dto.Fixture;

namespace BetPlay.Infrastructure.ApiSport;

public interface IFixtureRepository
{
    Task<FixtureResponseApiDto> GetFixtureById(int id);
}