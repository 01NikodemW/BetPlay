using BetPlay.ApiSport.Dto.Bet;
using BetPlay.ApiSport.Dto.Common;
using BetPlay.ApiSport.Dto.Country;
using BetPlay.ApiSport.Dto.Fixture;
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

    //Leagues
    public async Task<LeagueResponseApiDto> GetLeagueByIdAsync(int id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("leagues");
        request.AddQueryParameter("id", id.ToString());
        request.AddQueryParameter("season", 2022);

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<LeagueResponseApiDto>>(request);

        if (!response.Data.Response.Any())
        {
            request.AddQueryParameter("season", 2023);
            response = await client.ExecuteAsync<ApiSportResponse<LeagueResponseApiDto>>(request);
        }

        return response.Data.Response.First();
    }

    public async Task<IEnumerable<LeagueResponseApiDto>> GetLeaguesByCountryAsync(string country)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("leagues");
        request.AddQueryParameter("country", country);
        request.AddQueryParameter("season", 2022);

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<LeagueResponseApiDto>>(request);

        return response.Data.Response.AsEnumerable();
    }

    //Teams
    public async Task<TeamResponseApiDto> GetTeamByIdAsync(int id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("teams");
        request.AddQueryParameter("id", id.ToString());

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<TeamResponseApiDto>>(request);

        try
        {
            return response.Data.Response.First();
        }
        catch (Exception e)
        {
            return null;
        }
    }

    public async Task<IEnumerable<TeamResponseApiDto>> GetTeamsByLeagueIdAsync(int id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("teams");
        request.AddQueryParameter("league", id.ToString());
        request.AddQueryParameter("season", 2022);

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<TeamResponseApiDto>>(request);

        return response.Data.Response.AsEnumerable();
    }


    //Countries
    public async Task<IEnumerable<CountryResponseApiDto>> GetCountriesAsync()
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("countries");

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<CountryResponseApiDto>>(request);

        return response.Data.Response.AsEnumerable();
    }

    //Bets
    public async Task<BetResponseApiDto> GetBetsByFixtureIdAsync(int id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("odds");

        request.AddQueryParameter("fixture", id.ToString());
        request.AddQueryParameter("bookmaker", "8");

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<BetResponseApiDto>>(request);

        return response.Data.Response.First();
    }


    //Fixtures
    public async Task<FixtureResponseApiDto> GetFixtureByIdAsync(int id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("fixtures");

        request.AddQueryParameter("id", id.ToString());

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<FixtureResponseApiDto>>(request);

        return response.Data.Response.First();
    }

    public async Task<IEnumerable<LiveFixtureResponseApiDto>> GetLiveFixturesByLeagueIdAsync(int id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("fixtures");

        request.AddQueryParameter("league", id.ToString());
        request.AddQueryParameter("season", 2022);
        request.AddQueryParameter("live", "all");

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<LiveFixtureResponseApiDto>>(request);

        return response.Data.Response.AsEnumerable();
    }

    public async Task<IEnumerable<LiveFixtureResponseApiDto>> GetAllLiveFixturesAsync()
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("fixtures");

        request.AddQueryParameter("live", "all");

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<LiveFixtureResponseApiDto>>(request);

        return response.Data.Response.AsEnumerable();
    }

    public async Task<IEnumerable<LiveFixtureResponseApiDto>> GetFixturesFromLeagueByDateAsync(int id, DateTime date)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("fixtures");

        request.AddQueryParameter("league", id.ToString());
        request.AddQueryParameter("season", 2023);
        request.AddQueryParameter("date", date.ToString("yyyy-MM-dd"));

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<LiveFixtureResponseApiDto>>(request);

        return response.Data.Response.AsEnumerable();
    }


    //Venues
    public async Task<VenueApiDto> GetVenueByIdAsync(int? id)
    {
        var client = new RestClient(_options.BaseUrl);
        var request = new RestRequest("venues");

        request.AddQueryParameter("id", id.ToString());

        request.AddHeader("x-rapidapi-key", _options.ApiKey);
        request.AddHeader("x-rapidapi-host", "v3.football.api-sports.io");

        var response = await client.ExecuteAsync<ApiSportResponse<VenueApiDto>>(request);

        try
        {
            return response.Data.Response.First();
        }
        catch (InvalidOperationException e)
        {
            return null;
        }
    }
}