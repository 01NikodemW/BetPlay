using BetPlay.Responses.Fixture;
using MediatR;

namespace BetPlay.Requests.Fixtures;

public class GetFixtureByIdRequest : IRequest<GetFixtureByIdResponse>
{
    public int FixtureId { get; set; } = default!;
}