using BetPlay.Dto.Account;

namespace BetPlay.Infrastructure.ApiSport;

public interface IAccountRepository
{
    Task CreateUser(string Auth0Id);
    Task<UserDto> GetUserData();
}