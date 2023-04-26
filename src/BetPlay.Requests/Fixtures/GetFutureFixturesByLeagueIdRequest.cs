using BetPlay.Responses.Fixture;
using MediatR;

namespace BetPlay.Requests.Fixtures;

public class GetFutureFixturesByLeagueIdRequest : IRequest<GetFutureFixturesByLeagueIdResponse>
{
    public int LeagueId { get; set; } = default!;
}