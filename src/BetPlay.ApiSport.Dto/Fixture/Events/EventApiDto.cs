namespace BetPlay.ApiSport.Dto.Fixture.Events;

public class EventApiDto
{
    public TimeApiDto Time { get; set; } = default!;
    public TeamApiDto Team { get; set; } = default!;
    public PlayerApiDto Player { get; set; } = default!;
    public AssistApiDto Assist { get; set; } = default!;
    public string Type { get; set; } = default!;
    public string Detail { get; set; } = default!;
    public string? Comments { get; set; } = default!;
}

public class TimeApiDto
{
    public int Elapsed { get; set; }
    public int? Extra { get; set; }
}

public class TeamApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Logo { get; set; } = default!;
}

public class PlayerApiDto
{
    public int? Id { get; set; }
    public string? Name { get; set; } = default!;
}

public class AssistApiDto
{
    public int? Id { get; set; }
    public string? Name { get; set; }
}