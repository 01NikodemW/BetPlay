namespace BetPlay.Infrastructure.ApiSport;

public interface IAccountRepository
{
    Task CreateUser(string Auth0Id);
}