namespace BetPlay.ApiSport.Dto.Team;

public class VenueApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Address { get; set; } = default!;
    public string City { get; set; } = default!;
    public int Capacity { get; set; }
    public string Surface { get; set; } = default!;
    public string Image { get; set; } = default!;
}