using BetPlay.Domain;
using BetPlay.Dto.Bets;

namespace BetPlay.Infrastructure.ApiSport;

public interface IBettingSlipRepository
{
    Task CreateBettingSlip(float stake, IEnumerable<BetToCreateDto> bets);

    Task VerifyUserBets();

    Task<IEnumerable<BettingSlipWithoutBetsDto>> GetAllBettingSlips();
}