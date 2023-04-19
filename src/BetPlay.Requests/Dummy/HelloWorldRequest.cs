using BetPlay.Responses.Dummy;
using MediatR;

namespace BetPlay.Requests.Dummy;

public class HelloWorldRequest : IRequest<HelloWorldResponse>
{
    public string InputValue { get; set; } = default!;
}