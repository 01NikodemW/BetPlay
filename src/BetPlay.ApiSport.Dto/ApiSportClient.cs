using BetPlay.ApiSport.Dto.Common;
using BetPlay.ApiSport.Dto.League;
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
}