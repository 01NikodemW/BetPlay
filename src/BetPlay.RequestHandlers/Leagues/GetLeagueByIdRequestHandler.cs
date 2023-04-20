using BetPlay.Dto.League;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Leagues;
using BetPlay.Responses.Leagues;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Leagues;

public class GetLeagueByIdRequestHandler : IRequestHandler<GetLeagueByIdRequest, GetLeagueByIdResponse>
{
    private readonly ILeagueRepository _leagueRepository;

    public GetLeagueByIdRequestHandler(ILeagueRepository leagueRepository)
    {
        _leagueRepository = leagueRepository;
    }


    public async Task<GetLeagueByIdResponse> Handle(GetLeagueByIdRequest request, CancellationToken cancellationToken)
    {
        var league = await _leagueRepository.GetLeagueById(request.LeagueId);
        return new GetLeagueByIdResponse
        {
            League = league.Adapt<LeagueDto>()
            
        };
    }
}