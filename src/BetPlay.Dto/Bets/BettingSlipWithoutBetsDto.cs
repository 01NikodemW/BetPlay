namespace BetPlay.Dto.Bets;

public class BettingSlipWithoutBetsDto
{
    public Guid Id { get; set; }
    public float TotalStake { get; set; }
    public float TotalOdds { get; set; }
    public BettingSlipStatus Status { get; set; }
    public DateTime Date { get; set; }
}