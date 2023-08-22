namespace BetPlay.Dto.Bets;

public class CreateBet
{
    public string Name { get; set; } = default!;
    public string Value { get; set; } = default!;
    public float Odd { get; set; }
    public int FixtureId { get; set; }
}