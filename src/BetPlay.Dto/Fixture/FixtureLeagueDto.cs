using BetPlay.Dto.League;

namespace BetPlay.Dto.Fixture;

public class FixtureLeagueDto
{
    public LeagueDto League { get; set; } = default!;
    public string Round { get; set; }
    public int Season { get; set; }
}