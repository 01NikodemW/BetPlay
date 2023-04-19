using BetPlay.Infrastructure.EfCore;
using BetPlay.Requests.Leagues;
using BetPlay.Responses.Leagues;
using MediatR;

namespace BetPlay.RequestHandlers.Leagues;

public class GetTopFiveLeaguesRequestHandler : IRequestHandler<GetTopFiveLeaguesRequest, GetTopFiveLeaguesResponse>
{
    private readonly BetPlayDbContext _context;

    public GetTopFiveLeaguesRequestHandler(BetPlayDbContext context)
    {
        _context = context;
    }

    public async Task<GetTopFiveLeaguesResponse> Handle(GetTopFiveLeaguesRequest request,
        CancellationToken cancellationToken)
    {
        return new GetTopFiveLeaguesResponse()
        {
            Leagues = _context.TrackedLeagues.ToList()
        };
    }
}