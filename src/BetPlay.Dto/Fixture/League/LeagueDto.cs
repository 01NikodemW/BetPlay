namespace BetPlay.Dto.Fixture.LeagueObject;

public class LeagueDto
{
    public int LeagueId { get; set; }
    public string Name { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public string Flag { get; set; } = default!;
    public int Season { get; set; }
    public string Round { get; set; } = default!;
}