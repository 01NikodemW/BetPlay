using BetPlay.ApiSport.Dto.Team;

namespace BetPlay.Domain.Team;

public class Venue : Entity
{
    public Venue(VenueApiDto venueApiDto)
    {
        VenueId = venueApiDto.Id;
        Name = venueApiDto.Name;
        // Address = venueApiDto.Address ?? "N/A";
        Address = venueApiDto.Address;
        City = venueApiDto.City;
        Capacity = venueApiDto.Capacity;
        Surface = venueApiDto.Surface;
        Image = venueApiDto.Image;
    }

    public Venue()
    {
    }

    public int VenueId { get; set; }

    public string Name { get; set; } = default!;

    // public string Address { get; set; } = "N/A"; // assign default value
    public string? Address { get; set; }
    public string City { get; set; } = default!;
    public int Capacity { get; set; }
    public string Surface { get; set; } = default!;
    public string Image { get; set; } = default!;
}