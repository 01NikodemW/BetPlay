using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

[ApiController, Route("[controller]")]
public class BetPlayControllerBase : ControllerBase
{
    protected IMediator Mediator;

    public BetPlayControllerBase(IMediator mediator)
    {
        Mediator = mediator;
    }
}