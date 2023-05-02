using BetPlay.Responses.Fixture;
using MediatR;

namespace BetPlay.Requests.Fixtures;

public class GetAllLiveFixturesRequest : IRequest<GetAllLiveFixturesResponse>
{
    // public IEnumerable<int> LeagueIds { get; set; } = new List<int> { };
}