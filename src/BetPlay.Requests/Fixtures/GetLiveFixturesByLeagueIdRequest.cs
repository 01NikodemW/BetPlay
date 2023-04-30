using BetPlay.Responses.Fixture;
using MediatR;

namespace BetPlay.Requests.Fixtures;

public class GetLiveFixturesByLeagueIdRequest : IRequest<GetLiveFixturesByLeagueIdResponse>
{
    public int LeagueId { get; set; } = default!;
}