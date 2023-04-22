using BetPlay.Responses.Teams;
using MediatR;

namespace BetPlay.Requests.Teams;

public class GetTeamByIdRequest : IRequest<GetTeamByIdResponse>
{
    public int TeamId { get; set; } = default!;
}