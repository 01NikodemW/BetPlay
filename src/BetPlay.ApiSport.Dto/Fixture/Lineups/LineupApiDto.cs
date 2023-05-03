namespace BetPlay.ApiSport.Dto.Fixture.Lineups;

public class LineupApiDto
{
    public TeamApiDto Team { get; set; } = default!;
    public CoachApiDto Coach { get; set; } = default!;
    public string Formation { get; set; } = default!;
    public IEnumerable<PlayerWrapper> StartXI { get; set; } = default!;
    public IEnumerable<PlayerWrapper> Substitutes { get; set; } = default!;
}

public class TeamApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public TeamColors Colors { get; set; }
}

public class TeamColors
{
    public Color Player { get; set; }
    public Color Goalkeeper { get; set; }
}

public class Color
{
    public string Primary { get; set; } = default!;
    public string Number { get; set; } = default!;
    public string Border { get; set; } = default!;
}

public class CoachApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Photo { get; set; } = default!;
}

public class PlayerWrapper
{
    public PlayerApiDto Player { get; set; } = default!;
}

public class PlayerApiDto
{
    public int? Id { get; set; }
    public string Name { get; set; } = default!;
    public int Number { get; set; }
    public string? Pos { get; set; } = default!;
    public string? Grid { get; set; }
}