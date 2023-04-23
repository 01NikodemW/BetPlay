using BetPlay.ApiSport.Dto.Country;
using BetPlay.ApiSport.Dto.League;
using BetPlay.ApiSport.Dto.Team;

namespace BetPlay.ApiSport.Dto;

public interface IApiSportClient
{
    Task<LeagueResponseApiDto> GetLeagueByIdAsync(int id);
    Task<TeamResponseApiDto> GetTeamByIdAsync(int id);

    Task<IEnumerable<TeamResponseApiDto>> GetTeamsByLeagueIdAsync(int id, int season);
    
    Task<IEnumerable<LeagueResponseApiDto>> GetLeaguesByCountryAsync(string country);
    
    Task<IEnumerable<CountryResponseApiDto>> GetCountriesAsync();
}