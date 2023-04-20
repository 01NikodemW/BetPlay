namespace BetPlay.Dto.League;

public class LeagueDto
{
    public string Name { get; set; } = default!;
    public string Type { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public CountryDto Country { get; set; } = default!;
}