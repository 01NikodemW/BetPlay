using BetPlay.Dto.Team;

namespace BetPlay.Responses.Teams;

public class GetTeamsByLeagueIdResponse
{
    public IEnumerable<TeamDto> Teams { get; set; } = default!;
}