namespace BetPlay.ApiSport.Dto.Fixture.Lineups.Team;

public class TeamApiDto
{
    public int Id { get; set; }

    public string Name { get; set; } = default!;

    public string Logo { get; set; } = default!;

    public ColorsApiDto Colors { get; set; } = default!;
}