namespace BetPlay.Domain;

public class BettingSlip : Entity
{
    public BettingSlip()
    {
        Bets = new List<BettingSlipBet>();
    }

    public float Stake { get; set; }
    public float TotalOdds { get; set; }
    public Dto.Bets.BettingSlipStatus Status { get; set; }
    public DateTime Date { get; set; }
    public Guid UserId { get; set; }
    public virtual User User { get; set; }
    public virtual List<BettingSlipBet> Bets { get; set; }
}

public enum BettingSlipStatus
{
    Pending,
    Won,
    Lost
}