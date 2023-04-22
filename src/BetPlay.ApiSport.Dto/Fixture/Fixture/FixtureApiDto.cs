namespace BetPlay.ApiSport.Dto.Fixture.Fixture;

public class FixtureApiDto
{
    public int Id { get; set; }

    public string Referee { get; set; } = default!;

    public string Timezone { get; set; } = default!;

    public string Date { get; set; } = default!;

    public int Timestamp { get; set; }

    public PeriodsApiDto Periods { get; set; } = default!;

    public VenueApiDto Venue { get; set; } = default!;

    public StatusApiDto Status { get; set; } = default!;
}