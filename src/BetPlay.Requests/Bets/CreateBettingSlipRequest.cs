using BetPlay.Dto.Bets;
using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.Requests.Bets;

public class CreateBettingSlipRequest : IRequest<CreateBettingSlipResponse>
{
    public float Stake { get; set; }
    public IEnumerable<BetToCreateDto> Bets { get; set; } = default!;
}