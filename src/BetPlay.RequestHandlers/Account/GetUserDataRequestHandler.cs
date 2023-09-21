using BetPlay.Dto.Account;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Account;
using BetPlay.Responses.Account;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Account;

public class GetUserDataRequestHandler : IRequestHandler<GetUserDataRequest, GetUserDataResponse>
{
    private readonly IAccountRepository _accountRepository;

    public GetUserDataRequestHandler(IAccountRepository accountRepository)
    {
        _accountRepository = accountRepository;
    }

    public async Task<GetUserDataResponse> Handle(GetUserDataRequest request,
        CancellationToken cancellationToken)
    {
        var userData = await _accountRepository.GetUserData();

        return new GetUserDataResponse
        {
            User = userData.Adapt<UserDto>()
        };
    }
}