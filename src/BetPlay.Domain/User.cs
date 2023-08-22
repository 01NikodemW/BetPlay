namespace BetPlay.Domain;

public class User : Entity
{
    public User()
    {
    }
    
    

    public string Email { get; set; } = default!;
    public string Password { get; set; } = default!;
    public string Name { get; set; } = default!;
    public string Surname { get; set; } = default!;
    public IEnumerable<BettingSlip> BettingSlips { get; set; } = default!;
}