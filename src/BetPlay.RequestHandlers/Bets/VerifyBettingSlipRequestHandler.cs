using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Bets;
using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.RequestHandlers.Bets;

public class VerifyBettingSlipRequestHandler : IRequestHandler<VerifyBettingSlipRequest, VerifyBettingSlipResponse>
{
    private readonly IBettingSlipRepository _bettingSlipRepository;

    public VerifyBettingSlipRequestHandler(IBettingSlipRepository bettingSlipRepository)
    {
        _bettingSlipRepository = bettingSlipRepository;
    }


    public async Task<VerifyBettingSlipResponse> Handle(VerifyBettingSlipRequest request,
        CancellationToken cancellationToken)
    {
        await _bettingSlipRepository.VerifyBettingSlip(request.Id);
        return new VerifyBettingSlipResponse
        {
        };
    }
}