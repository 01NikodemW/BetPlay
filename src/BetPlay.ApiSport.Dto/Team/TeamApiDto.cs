namespace BetPlay.ApiSport.Dto.Team;

public class TeamApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string? Code { get; set; }
    public string Country { get; set; } = default!;
    public int? Founded { get; set; }
    public bool National { get; set; }
    public string Logo { get; set; } = default!;
}