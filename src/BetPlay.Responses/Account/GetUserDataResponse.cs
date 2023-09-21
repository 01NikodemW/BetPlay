using BetPlay.Dto.Account;

namespace BetPlay.Responses.Account;

public class GetUserDataResponse
{
    public UserDto User { get; set; } = default!;
}