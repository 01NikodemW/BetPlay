namespace BetPlay.ApiSport.Dto.Fixture.Teams;

public class TeamsApiDto
{
    public TeamDetailApiDto Home { get; set; } = default!;
    public TeamDetailApiDto Away { get; set; } = default!;
}

public class TeamDetailApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public bool? Winner { get; set; }
}