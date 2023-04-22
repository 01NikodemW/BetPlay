using BetPlay.ApiSport.Dto.Common;
using BetPlay.ApiSport.Dto.League;
using BetPlay.ApiSport.Dto.Team;
using BetPlay.Options;
using Microsoft.Extensions.Options;
using RestSharp;

namespace BetPlay.ApiSport.Dto;

public class ApiSportClient : IApiSportClient
{
    private readonly ApiSportOptions _options;

    public ApiSportClient(IOptions<ApiSportOptions> options)
    {
        _options = options.Value;
    }

    public async Task<LeagueResponseApiDto> GetLeagueByIdAsync(int id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("leagues");
        request.AddQueryParameter("id", id.ToString());
        request.AddQueryParameter("season", 2022);

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<LeagueResponseApiDto>>(request);
        return response.Data.Response.First();
    }

    public async Task<TeamResponseApiDto> GetTeamByIdAsync(int id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("teams");
        request.AddQueryParameter("id", id.ToString());

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<TeamResponseApiDto>>(request);
        return response.Data.Response.First();
    }

    public Task<IEnumerable<TeamResponseApiDto>> GetTeamsByLeagueIdAsync(int id, int season)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("teams");
        request.AddQueryParameter("league", id.ToString());
        request.AddQueryParameter("season", season.ToString());

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = client.ExecuteAsync<ApiSportResponse<TeamResponseApiDto>>(request);

        return Task.FromResult(response.Result.Data.Response.AsEnumerable());
    }
}