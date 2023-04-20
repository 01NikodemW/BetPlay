using BetPlay.ApiSport.Dto.League;

namespace BetPlay.ApiSport.Dto;

public interface IApiSportClient
{
    Task<LeagueResponseApiDto> GetLeagueByIdAsync(int id);
}