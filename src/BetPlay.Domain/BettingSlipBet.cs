namespace BetPlay.Domain;

public class BettingSlipBet : Entity
{
    public Guid BettingSlipId { get; set; }
    public virtual BettingSlip BettingSlip { get; set; }

    public Guid BetId { get; set; }
    public virtual Bet Bet { get; set; }
}