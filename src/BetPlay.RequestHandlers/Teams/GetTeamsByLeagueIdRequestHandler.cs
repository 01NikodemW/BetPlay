using BetPlay.Dto.Team;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Teams;
using BetPlay.Responses.Teams;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Teams;

public class GetTeamsByLeagueIdRequestHandler : IRequestHandler<GetTeamsByLeagueIdRequest, GetTeamsByLeagueIdResponse>
{
    private readonly ITeamRepository _teamRepository;

    public GetTeamsByLeagueIdRequestHandler(ITeamRepository teamRepository)
    {
        _teamRepository = teamRepository;
    }

    public async Task<GetTeamsByLeagueIdResponse> Handle(GetTeamsByLeagueIdRequest request,
        CancellationToken cancellationToken)
    {
        var teams = await _teamRepository.GetTeamsByLeagueId(request.LeagueId, request.Season);

        return new GetTeamsByLeagueIdResponse
        {
            Teams = teams.Select(x => x.Adapt<TeamDto>()).ToList()
        };
    }
}