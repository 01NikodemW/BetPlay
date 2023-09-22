namespace BetPlay.Dto.Bets;

public class BettingSlipDto
{
    public Guid Id { get; set; }
    public float TotalStake { get; set; }
    public float TotalOdds { get; set; }
    public BettingSlipStatus Status { get; set; }
    public DateTime Date { get; set; }
    public List<BetDto> Bets { get; set; }
}

public enum BettingSlipStatus
{
    Pending,
    Won,
    Lost
}