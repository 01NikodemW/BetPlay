namespace BetPlay.Dto.Bets;

public class BetDto
{
    // public Guid Id { get; set; }
    public string Name { get; set; }
    public string Value { get; set; }
    public float Odd { get; set; }
    public int FixtureId { get; set; }
    public BetStatus Status { get; set; }
}

public enum BetStatus
{
    Pending,
    Won,
    Lost
}