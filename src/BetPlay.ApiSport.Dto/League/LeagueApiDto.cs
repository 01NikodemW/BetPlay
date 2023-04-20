namespace BetPlay.ApiSport.Dto.League;

public class LeagueApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Type { get; set; } = default!;
    public string Logo { get; set; } = default!;
}