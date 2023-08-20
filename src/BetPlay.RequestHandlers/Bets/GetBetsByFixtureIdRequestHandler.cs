using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Bets;
using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.RequestHandlers.Bets;

public class GetBetsByFixtureIdRequestHandler : IRequestHandler<GetBetsByFixtureIdRequest, GetBetsByFixtureIdResponse>
{
    private readonly IBetRepository _betRepository;

    public GetBetsByFixtureIdRequestHandler(IBetRepository betRepository)
    {
        _betRepository = betRepository;
    }

    public async Task<GetBetsByFixtureIdResponse> Handle(GetBetsByFixtureIdRequest request,
        CancellationToken cancellationToken)
    {
        var bets = await _betRepository.GetBetsByFixtreId(request.FixtureId);

        return new GetBetsByFixtureIdResponse
        {
            Bet = bets
        };
    }
}