using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Account;
using BetPlay.Requests.Bets;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class AccountController : BetPlayControllerBase
{
    public AccountController(IMediator mediator) : base(mediator)
    {
    }


    [Authorize]
    [HttpPost("[action]")]
    public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
    {
        return Ok(await Mediator.Send(request));
    }

    [Authorize]
    [HttpPost("[action]")]
    public async Task<IActionResult> GetUserData([FromBody] GetUserDataRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}