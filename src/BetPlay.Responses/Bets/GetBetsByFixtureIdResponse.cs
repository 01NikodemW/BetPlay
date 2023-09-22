using BetPlay.ApiSport.Dto.Bet;

namespace BetPlay.Responses.Bets;

public class GetBetsByFixtureIdResponse
{
    // public BetResponseApiDto Bet { get; set; } = default!;
    public IEnumerable<Bookmaker.Bet> Bets { get; set; } = default!;
}


