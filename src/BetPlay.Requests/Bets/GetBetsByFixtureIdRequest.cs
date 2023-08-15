using BetPlay.Responses.Bets;
using MediatR;

namespace BetPlay.Requests.Bets;

public class GetBetsByFixtureIdRequest : IRequest<GetBetsByFixtureIdResponse>
{
    public int FixtureId { get; set; } = default!;
}