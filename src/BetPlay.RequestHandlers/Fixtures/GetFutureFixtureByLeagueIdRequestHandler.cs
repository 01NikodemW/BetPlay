using BetPlay.Requests.Fixtures;
using BetPlay.Responses.Fixture;
using MediatR;

namespace BetPlay.RequestHandlers.Fixtures;

public class
    GetFutureFixtureByLeagueIdRequestHandler : IRequestHandler<GetFutureFixturesByLeagueIdRequest,
        GetFutureFixturesByLeagueIdResponse>
{
    public Task<GetFutureFixturesByLeagueIdResponse> Handle(GetFutureFixturesByLeagueIdRequest request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}