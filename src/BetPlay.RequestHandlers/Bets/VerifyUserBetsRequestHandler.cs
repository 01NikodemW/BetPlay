using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Bets;
using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.RequestHandlers.Bets;

public class VerifyUserBetsRequestHandler :
    IRequestHandler<VerifyUserBetsRequest, VerifyUserBetsResponse>
{
    private readonly IBettingSlipRepository _bettingSlipRepository;

    public VerifyUserBetsRequestHandler(IBettingSlipRepository bettingSlipRepository)
    {
        _bettingSlipRepository = bettingSlipRepository;
    }

    public async Task<VerifyUserBetsResponse> Handle(VerifyUserBetsRequest request, CancellationToken cancellationToken)
    {
        await _bettingSlipRepository.VerifyUserBets();
        return new VerifyUserBetsResponse
        {
        };
    }
}