namespace BetPlay.Domain;

public class TrackedLeague : Entity
{
    public int LeagueId { get; set; }
    public string Name { get; set; } = default!;

    public string LogoUrl { get; set; } = default!;
}