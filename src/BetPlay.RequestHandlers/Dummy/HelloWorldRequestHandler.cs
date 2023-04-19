using BetPlay.Requests.Dummy;
using BetPlay.Responses.Dummy;
using MediatR;

namespace BetPlay.RequestHandlers.Dummy;

public class HelloWorldRequestHandler : IRequestHandler<HelloWorldRequest, HelloWorldResponse>
{
    public Task<HelloWorldResponse> Handle(HelloWorldRequest request, CancellationToken cancellationToken)
    {
        return Task.FromResult(new HelloWorldResponse()
        {
            Value = request.InputValue
        });
    }
}