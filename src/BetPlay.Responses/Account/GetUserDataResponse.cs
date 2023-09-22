using BetPlay.Dto.Account;
using BetPlay.Dto.Bets;

namespace BetPlay.Responses.Account;

public class GetUserDataResponse
{
    public string Auth0Id { get; set; }
    public float Balance { get; set; }
    public List<BettingSlipDto> BettingSlips { get; set; }
}