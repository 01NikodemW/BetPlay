namespace BetPlay.Dto.Fixture.Events;

public class EventDto
{
    public TimeDto Time { get; set; } = default!;
    public TeamDto Team { get; set; } = default!;
    public PlayerDto Player { get; set; } = default!;
    public AssistDto Assist { get; set; } = default!;
    public string Type { get; set; } = default!;
    public string Detail { get; set; } = default!;
    public string Comments { get; set; } = default!;
}