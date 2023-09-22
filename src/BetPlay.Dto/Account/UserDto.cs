using BetPlay.Dto.Bets;

namespace BetPlay.Dto.Account;

public class UserDto
{
    // public Guid Id { get; set; }
    public string Auth0Id { get; set; }
    public float Balance { get; set; }
    public List<BettingSlipDto> BettingSlips { get; set; }
}