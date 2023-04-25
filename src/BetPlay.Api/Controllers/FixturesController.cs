using BetPlay.Requests.Fixtures;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class FixturesController : BetPlayControllerBase
{
    public FixturesController(IMediator mediator) : base(mediator)
    {
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> GetFixtureById([FromBody] GetFixtureByIdRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}