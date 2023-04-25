using BetPlay.Responses.Leagues;
using MediatR;

namespace BetPlay.Requests.Leagues;

public class GetLeagueByIdRequest : IRequest<GetLeagueByIdResponse>
{
    public int LeagueId { get; set; } = default!;
}