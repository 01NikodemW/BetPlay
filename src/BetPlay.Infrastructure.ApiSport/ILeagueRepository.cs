using BetPlay.Domain.League;

namespace BetPlay.Infrastructure.ApiSport;

public interface ILeagueRepository
{
    Task<League> GetLeagueById(int id);
}