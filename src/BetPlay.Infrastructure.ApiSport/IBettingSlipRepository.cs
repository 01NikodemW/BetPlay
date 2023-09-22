using BetPlay.Domain;
using BetPlay.Dto.Bets;

namespace BetPlay.Infrastructure.ApiSport;

public interface IBettingSlipRepository
{
    Task CreateBettingSlip(float stake, IEnumerable<BetToCreateDto> bets);
    Task VerifyBettingSlip(Guid id);
    Task<IEnumerable<BettingSlip>> GetUserBettingSlips();
    Task VerifyUserBets();
}