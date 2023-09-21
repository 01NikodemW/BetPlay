using BetPlay.Dto.Bets;

namespace BetPlay.Domain;

public class Bet : Entity
{
    public Bet()
    {
        BettingSlips = new List<BettingSlipBet>();
    }

    public Bet(CreateBet createBet)
    {
        Name = createBet.Name;
        Value = createBet.Value;
        Odd = createBet.Odd;
        FixtureId = createBet.FixtureId;
        Status = (Dto.Bets.BetStatus)BetStatus.Pending;
    }

    public string Name { get; set; } = default!;
    public string Value { get; set; } = default!;
    public float Odd { get; set; }
    public int FixtureId { get; set; }
    public Dto.Bets.BetStatus Status { get; set; }

    public virtual IEnumerable<BettingSlipBet> BettingSlips { get; set; }
}

public enum BetStatus
{
    Pending,
    Won,
    Lost
}