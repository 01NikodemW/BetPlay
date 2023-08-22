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
    public async Task<IActionResult> CreateBettingSlip([FromBody] CreateBettingSlipRequest request)
    {
        return Ok(await Mediator.Send(request));
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> VerifyBettingSlip([FromBody] VerifyBettingSlipRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}