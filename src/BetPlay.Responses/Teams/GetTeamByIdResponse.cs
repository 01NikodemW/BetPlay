using BetPlay.Dto.Team;

namespace BetPlay.Responses.Teams;

public class GetTeamByIdResponse
{
    public TeamDto Team { get; set; } = default!;
}