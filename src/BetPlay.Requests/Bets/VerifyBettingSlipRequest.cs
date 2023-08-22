using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.Requests.Bets;

public class VerifyBettingSlipRequest : IRequest<VerifyBettingSlipResponse>
{
    public Guid Id { get; set; } = default!;
}