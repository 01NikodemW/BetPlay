using System.Collections;
using BetPlay.ApiSport.Dto.Country;
using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.ApiSport.Dto.League;
using BetPlay.ApiSport.Dto.Team;

namespace BetPlay.ApiSport.Dto;

public interface IApiSportClient
{
    //Leagues
    Task<LeagueResponseApiDto> GetLeagueByIdAsync(int id);
    Task<IEnumerable<LeagueResponseApiDto>> GetLeaguesByCountryAsync(string country);

    //Teams
    Task<TeamResponseApiDto> GetTeamByIdAsync(int id);
    Task<IEnumerable<TeamResponseApiDto>> GetTeamsByLeagueIdAsync(int id);

    //Countries
    Task<IEnumerable<CountryResponseApiDto>> GetCountriesAsync();

    //Fixtures
    Task<FixtureResponseApiDto> GetFixtureByIdAsync(int id);
}