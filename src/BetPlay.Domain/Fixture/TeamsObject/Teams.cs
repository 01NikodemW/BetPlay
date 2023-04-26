using BetPlay.ApiSport.Dto.Fixture;

namespace BetPlay.Domain.Fixture.TeamsObject;

public class Teams
{
    public Teams(FixtureResponseApiDto fixtureResponseApiDto)
    {
        Home = new Team.Team(fixtureResponseApiDto.Teams.Home);
        Away = new Team.Team(fixtureResponseApiDto.Teams.Away);
    }

    public Team.Team Home { get; set; } = default!;
    public Team.Team Away { get; set; } = default!;
}