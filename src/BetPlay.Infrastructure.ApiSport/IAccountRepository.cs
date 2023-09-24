using BetPlay.Dto.Account;

namespace BetPlay.Infrastructure.ApiSport;

public interface IAccountRepository
{
    Task CreateUser();
    Task<UserDto> GetUserData();
}