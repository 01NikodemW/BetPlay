namespace BetPlay.Options;

public class Auth0Options
{
    public string Authority { get; set; } = default!;
    public string Audience { get; set; } = default!;
    public const string SectionName = "Auth0";
}