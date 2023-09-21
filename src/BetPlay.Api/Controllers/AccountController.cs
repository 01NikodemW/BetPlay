using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Account;
using BetPlay.Requests.Bets;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class AccountController : BetPlayControllerBase
{
    private readonly IAccountRepository _accountRepository;

    public AccountController(IMediator mediator, IAccountRepository accountRepository) : base(mediator)
    {
        _accountRepository = accountRepository;
    }


    [Authorize]
    [HttpPost("login")]
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