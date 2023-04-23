using BetPlay.Requests.Countries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BetPlay.Api.Controllers;

public class CountriesController : BetPlayControllerBase
{
    public CountriesController(IMediator mediator) : base(mediator)
    {
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> GetCountries([FromBody] GetCountriesRequest request)
    {
        return Ok(await Mediator.Send(request));
    }
}