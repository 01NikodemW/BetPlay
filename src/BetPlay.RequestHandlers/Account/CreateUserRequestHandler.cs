using System.Security.Claims;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Account;
using BetPlay.Responses.Account;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace BetPlay.RequestHandlers.Account;

public class CreateUserRequestHandler : IRequestHandler<CreateUserRequest, CreateUserResponse>
{
    public readonly IAccountRepository _accountRepository;
    public readonly IHttpContextAccessor _httpContextAccessor;

    public CreateUserRequestHandler(IAccountRepository accountRepository, IHttpContextAccessor httpContextAccessor)
    {
        _accountRepository = accountRepository;
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<CreateUserResponse> Handle(CreateUserRequest request,
        CancellationToken cancellationToken)
    {
        var Auth0UserId = _httpContextAccessor.HttpContext.User.FindFirst(
            ClaimTypes.NameIdentifier)?.Value;

        await _accountRepository.CreateUser(Auth0UserId!);

        return new CreateUserResponse();
    }
}