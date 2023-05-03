namespace BetPlay.Dto.Team;

public class TeamDto
{
    public string Name { get; set; } = default!;
    public string? Code { get; set; } = default!;
    public string Country { get; set; } = default!;
    public int? Founded { get; set; }
    public bool National { get; set; }
    public string Logo { get; set; } = default!;
    public VenueDto Venue { get; set; } = default!;
}