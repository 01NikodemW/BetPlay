namespace BetPlay.Domain;

public class User : Entity
{
    public User()
    {
    }

    public string Auth0Id { get; set; } = default!;

    public IEnumerable<BettingSlip> BettingSlips { get; set; } = default!;
}