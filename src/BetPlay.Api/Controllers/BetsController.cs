using BetPlay.Requests.Bets;
using BetPlay.Requests.Fixtures;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class BetsController : BetPlayControllerBase
{
    public BetsController(IMediator mediator) : base(mediator)
    {
    }


    [HttpPost("[action]")]
    public async Task<IActionResult> GetFixtureById([FromBody] GetBetsByFixtureIdRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}