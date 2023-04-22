using BetPlay.Requests.Teams;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class TeamsController : BetPlayControllerBase
{
    public TeamsController(IMediator mediator) : base(mediator)
    {
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> GetTeamById([FromBody] GetTeamByIdRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
    
    [HttpPost("[action]")]
    public async Task<IActionResult> GetTeamsByLeagueId([FromBody] GetTeamsByLeagueIdRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}