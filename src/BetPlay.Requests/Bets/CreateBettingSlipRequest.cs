using BetPlay.Dto.Bets;
using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.Requests.Bets;

public class CreateBettingSlipRequest : IRequest<CreateBettingSlipResponse>
{
    public IEnumerable<CreateBet> Bets { get; set; } = default!;
}