using BetPlay.Dto.Bets;

namespace BetPlay.Responses.Bets;

public class GetAllBettingSlipsResponse
{
    public IEnumerable<BettingSlipWithoutBetsDto> BettingSlips { get; set; }
}