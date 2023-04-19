using BetPlay.Requests.Leagues;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class LeaguesController : BetPlayControllerBase
{
    public LeaguesController(IMediator mediator) : base(mediator)
    {
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> GetTopFiveLeagues()
    {
        return Ok(await Mediator.Send(new GetTopFiveLeaguesRequest()));
    }
}