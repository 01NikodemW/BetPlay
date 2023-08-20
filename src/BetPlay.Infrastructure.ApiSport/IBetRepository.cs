using BetPlay.ApiSport.Dto.Bet;

namespace BetPlay.Infrastructure.ApiSport;

public interface IBetRepository
{
    Task<BetResponseApiDto> GetBetsByFixtreId(int id);
}