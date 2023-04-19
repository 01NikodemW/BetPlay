using BetPlay.Requests.Dummy;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class HelloWorldController : BetPlayControllerBase
{
    public HelloWorldController(IMediator mediator) : base(mediator)
    {
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> HelloWorldDummy([FromBody] HelloWorldRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}