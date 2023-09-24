using BetPlay.Responses.Fixture;
using MediatR;

namespace BetPlay.Requests.Fixtures;

public class GetLiveFixturesByLeagueIdsRequest : IRequest<GetLiveFixturesByLeagueIdsResponse>
{
    public IEnumerable<int> LeagueIds { get; set; } = new List<int> { };
}