using BetPlay.ApiSport.Dto;
using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.Dto.Fixture;
using BetPlay.Infrastructure.EfCore;

namespace BetPlay.Infrastructure.ApiSport;

public class FixtureRepository : IFixtureRepository
{
    private readonly BetPlayDbContext _context;
    private readonly IApiSportClient _client;

    public FixtureRepository(BetPlayDbContext context, IApiSportClient client)
    {
        _context = context;
        _client = client;
    }

    public async Task<FixtureResponseApiDto> GetFixtureById(int id)
    {
        var fixtureApiDto = await _client.GetFixtureByIdAsync(id);

        return fixtureApiDto;
    }
}