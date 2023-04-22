namespace BetPlay.ApiSport.Dto.Fixture.League;

public class LeagueApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Country { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public string Flag { get; set; } = default!;
    public int Season { get; set; }
    public string Round { get; set; } = default!;
}