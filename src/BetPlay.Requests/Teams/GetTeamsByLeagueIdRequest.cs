using BetPlay.Responses.Teams;
using MediatR;

namespace BetPlay.Requests.Teams;

public class GetTeamsByLeagueIdRequest : IRequest<GetTeamsByLeagueIdResponse>
{
    public int LeagueId { get; set; } = default!;
    public int Season { get; set; } = 2022;
}