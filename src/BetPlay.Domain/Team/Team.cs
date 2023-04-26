using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.ApiSport.Dto.Fixture.Teams;
using BetPlay.ApiSport.Dto.Team;

namespace BetPlay.Domain.Team;

public class Team : Entity
{
    public Team(TeamResponseApiDto teamResponseApi)
    {
        TeamId = teamResponseApi.Team.Id;
        Name = teamResponseApi.Team.Name;
        Code = teamResponseApi.Team.Code;
        Country = teamResponseApi.Team.Country;
        Founded = teamResponseApi.Team.Founded;
        National = teamResponseApi.Team.National;
        Logo = teamResponseApi.Team.Logo;
        Venue = new Venue(teamResponseApi.Venue);
        UpdateDate = DateTime.Now;
    }

    public Team(TeamDetailApiDto teamDetailApiDto)
    {
        TeamId = teamDetailApiDto.Id;
        Name = teamDetailApiDto.Name;
        Logo = teamDetailApiDto.Logo;
        Winner = teamDetailApiDto.Winner;
    }

    public Team()
    {
    }
    
    public int TeamId { get; set; }
    public string Name { get; set; } = default!;
    public string Code { get; set; } = default!;
    public string Country { get; set; } = default!;
    public int Founded { get; set; }
    public bool National { get; set; }
    public string Logo { get; set; } = default!;
    public bool? Winner { get; set; }

    public Venue Venue { get; set; } = default!;
    public Guid VenueId { get; set; }
    public DateTime UpdateDate { get; set; }

    public bool isValid()
    {
        return UpdateDate.AddDays(7) > DateTime.Now;
    }
}