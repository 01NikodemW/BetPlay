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

public class PeriodsApiDto
{
    public int? First { get; set; }
    public int? Second { get; set; }
}

public class VenueApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string City { get; set; } = default!;
}

public class StatusApiDto
{
    public string Long { get; set; } = default!;
    public string Short { get; set; } = default!;
    public int? Elapsed { get; set; }
}