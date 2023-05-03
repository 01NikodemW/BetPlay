using BetPlay.Dto.Team;

namespace BetPlay.Dto.Fixture;

public class EventDto
{
    public int FixtureId { get; set; }
    public int Elapsed { get; set; }
    public int? Extra { get; set; }
    public TeamDto Team { get; set; } = default!;
    public int? PlayerId { get; set; }
    public string? PlayerName { get; set; } = default!;
    public int? AssistId { get; set; }
    public string? AssistName { get; set; } = default!;
    public string Type { get; set; } = default!;
    public string Detail { get; set; } = default!;
    public string? Comments { get; set; } = default!;
}