using BetPlay.Responses.Fixture;
using MediatR;

namespace BetPlay.Requests.Fixtures;

public class GetFixturesByDateRequest : IRequest<GetFixturesByDateResponse>
{
    public DateTime Date { get; set; } = default!;
    public IEnumerable<int>? LeagueIds { get; set; } = new List<int> { };
}