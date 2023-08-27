using Auth0.AspNetCore.Authentication;
using MediatR;
using Microsoft.AspNetCore.Authentication;

namespace BetPlay.Api.Controllers;

public class AccountController : BetPlayControllerBase
{
    public AccountController(IMediator mediator) : base(mediator)
    {
    }

    public async Task Login(string returnUrl = "/")
    {
        var authenticationProperties = new LoginAuthenticationPropertiesBuilder()
            .WithRedirectUri(returnUrl)
            .Build();

        await HttpContext.ChallengeAsync(Auth0Constants.AuthenticationScheme, authenticationProperties);
    }
}