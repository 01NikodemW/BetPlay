using BetPlay.Requests.Bets;
using BetPlay.Requests.Fixtures;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class BetsController : BetPlayControllerBase
{
    public BetsController(IMediator mediator) : base(mediator)
    {
    }


    [Authorize]
    [HttpPost("[action]")]
    public async Task<IActionResult> CreateBettingSlip([FromBody] CreateBettingSlipRequest request)
    {
        return Ok(await Mediator.Send(request));
    }


    [HttpPost("[action]")]
    public async Task<IActionResult> GetBetsByFixtureId([FromBody] GetBetsByFixtureIdRequest request)
    {
        return Ok(await Mediator.Send(request));
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> VerifyUserBets([FromBody] VerifyUserBetsRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}