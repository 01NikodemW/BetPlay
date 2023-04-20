namespace BetPlay.Options;

public class ApiSportOptions
{
    public string BaseUrl { get; set; } = default!;

    public string ApiKey { get; set; } = default!;

    public const string SectionName = "ApiSport";
}