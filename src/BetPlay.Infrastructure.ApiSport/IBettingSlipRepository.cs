using BetPlay.Domain;
using BetPlay.Dto.Bets;

namespace BetPlay.Infrastructure.ApiSport;

public interface IBettingSlipRepository
{
    Task CreateBettingSlip(IEnumerable<CreateBet> bets);
    Task VerifyBettingSlip(Guid id);
}