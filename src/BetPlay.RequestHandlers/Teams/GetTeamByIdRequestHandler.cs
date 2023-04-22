using BetPlay.Dto.Team;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Teams;
using BetPlay.Responses.Teams;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Teams;

public class GetTeamByIdRequestHandler : IRequestHandler<GetTeamByIdRequest, GetTeamByIdResponse>
{
    private readonly ITeamRepository _teamRepository;

    public GetTeamByIdRequestHandler(ITeamRepository teamRepository)
    {
        _teamRepository = teamRepository;
    }

    public async Task<GetTeamByIdResponse> Handle(GetTeamByIdRequest request, CancellationToken cancellationToken)
    {
        var team = await _teamRepository.GetTeamById(request.TeamId);
        return new GetTeamByIdResponse
        {
            Team = team.Adapt<TeamDto>()
        };
    }
}