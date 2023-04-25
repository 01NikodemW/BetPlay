using BetPlay.Dto.League;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Leagues;
using BetPlay.Responses.Leagues;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Leagues;

public class
    GetLeaguesByCountryRequestHandler : IRequestHandler<GetLeaguesByCountryRequest, GetLeaguesByCountryResponse>
{
    private readonly ILeagueRepository _leagueRepository;

    public GetLeaguesByCountryRequestHandler(ILeagueRepository leagueRepository)
    {
        _leagueRepository = leagueRepository;
    }

    public async Task<GetLeaguesByCountryResponse> Handle(GetLeaguesByCountryRequest request,
        CancellationToken cancellationToken)
    {
        var leagues = await _leagueRepository.GetLeaguesByCountry(request.Country);


        return new GetLeaguesByCountryResponse
        {
            Leagues = leagues.Adapt<IEnumerable<LeagueDto>>().ToList()
        };
    }
}