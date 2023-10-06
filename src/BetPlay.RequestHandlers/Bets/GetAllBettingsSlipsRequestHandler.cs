using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Bets;
using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.RequestHandlers.Bets;

public class GetAllBettingsSlipsRequestHandler : IRequestHandler<GetAllBettingSlipsRequest, GetAllBettingSlipsResponse>
{
    private readonly IBettingSlipRepository _bettingSlipRepository;

    public GetAllBettingsSlipsRequestHandler(IBettingSlipRepository bettingSlipRepository)
    {
        _bettingSlipRepository = bettingSlipRepository;
    }


    public async Task<GetAllBettingSlipsResponse> Handle(GetAllBettingSlipsRequest request,
        CancellationToken cancellationToken)
    {
        var bettingSlips = await _bettingSlipRepository.GetAllBettingSlips();
        return new GetAllBettingSlipsResponse
        {
            BettingSlips = bettingSlips
        };
    }
}