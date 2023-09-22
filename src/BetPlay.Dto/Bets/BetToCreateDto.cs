namespace BetPlay.Dto.Bets;

public class BetToCreateDto
{
    public string HomeTeam { get; set; } = default!;
    public string AwayTeam { get; set; } = default!;
    public string Name { get; set; } = default!;
    public string Value { get; set; } = default!;
    public float Odd { get; set; }
    public int FixtureId { get; set; }
}