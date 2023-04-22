using BetPlay.Domain.Team;

namespace BetPlay.Infrastructure.ApiSport;

public interface ITeamRepository
{
    Task<Team> GetTeamById(int id);

    Task<IEnumerable<Team>> GetTeamsByLeagueId(int id, int season);
}