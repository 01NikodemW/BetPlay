using BetPlay.Requests.Leagues;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class LeaguesController : BetPlayControllerBase
{
    public LeaguesController(IMediator mediator) : base(mediator)
    {
    }


    [HttpPost("[action]")]
    public async Task<IActionResult> GetLeagueById([FromBody] GetLeagueByIdRequest request)
    {
        return Ok(await Mediator.Send(request));
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> GetLeaguesByCountry([FromBody] GetLeaguesByCountryRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}