using System.Security.Claims;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Account;
using BetPlay.Responses.Account;
using MediatR;
using Microsoft.AspNetCore.Http;

namespace BetPlay.RequestHandlers.Account;

public class CreateUserRequestHandler : IRequestHandler<CreateUserRequest, CreateUserResponse>
{
    private readonly IAccountRepository _accountRepository;

    public CreateUserRequestHandler(IAccountRepository accountRepository)
    {
        _accountRepository = accountRepository;
    }

    public async Task<CreateUserResponse> Handle(CreateUserRequest request,
        CancellationToken cancellationToken)
    {
        await _accountRepository.CreateUser();
        return new CreateUserResponse();
    }
}