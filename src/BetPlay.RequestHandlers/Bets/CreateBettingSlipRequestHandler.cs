using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Bets;
using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.RequestHandlers.Bets;

public class CreateBettingSlipRequestHandler : IRequestHandler<CreateBettingSlipRequest, CreateBettingSlipResponse>
{
    private readonly IBettingSlipRepository _bettingSlipRepository;

    public CreateBettingSlipRequestHandler(IBettingSlipRepository bettingSlipRepository)
    {
        _bettingSlipRepository = bettingSlipRepository;
    }

    public async Task<CreateBettingSlipResponse> Handle(CreateBettingSlipRequest request,
        CancellationToken cancellationToken)
    {
        await _bettingSlipRepository.CreateBettingSlip(request.Bets);

        return new CreateBettingSlipResponse
        {
        };
    }
}