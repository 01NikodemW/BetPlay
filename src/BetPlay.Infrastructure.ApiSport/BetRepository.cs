using BetPlay.ApiSport.Dto;
using BetPlay.ApiSport.Dto.Bet;
using BetPlay.Infrastructure.EfCore;

namespace BetPlay.Infrastructure.ApiSport;

public class BetRepository : IBetRepository
{
    private readonly IApiSportClient _client;

    public BetRepository(IApiSportClient client, BetPlayDbContext context)
    {
        _client = client;
    }

    public async Task<BetResponseApiDto> GetBetsByFixtreId(int id)
    {
        var betApiDtoTmp = await _client.GetBetsByFixtureIdAsync(id);
        return betApiDtoTmp;
    }
}