namespace BetPlay.ApiSport.Dto.Team;

public class TeamResponseApiDto
{
    public TeamApiDto Team { get; set; } = default!;
    public VenueApiDto? Venue { get; set; } 
}