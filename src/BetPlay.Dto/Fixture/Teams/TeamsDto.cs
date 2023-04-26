namespace BetPlay.Dto.Fixture.TeamsObject;

public class TeamsDto
{
    public Team Home { get; set; } = default!;
    public Team Away { get; set; } = default!;
}

public class Team
{
    public int TeamId { get; set; }
    public string Name { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public bool? Winner { get; set; }
}