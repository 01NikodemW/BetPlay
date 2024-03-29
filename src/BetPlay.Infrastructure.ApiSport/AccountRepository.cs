using System.Security.Claims;
using BetPlay.Domain;
using BetPlay.Dto.Account;
using BetPlay.Dto.Bets;
using BetPlay.Infrastructure.EfCore;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace BetPlay.Infrastructure.ApiSport;

public class AccountRepository : IAccountRepository
{
    private readonly BetPlayDbContext _context;
    private readonly IHttpContextAccessor _httpContextAccessor;

    public AccountRepository(BetPlayDbContext context, IHttpContextAccessor httpContextAccessor)
    {
        _context = context;
        _httpContextAccessor = httpContextAccessor;
    }


    public async Task CreateUser()
    {
        var userAuth0Id = _httpContextAccessor.HttpContext?.User.Claims
            .FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
        if (userAuth0Id == null)
        {
            throw new InvalidOperationException("Wrong user token");
        }

        var user = await _context.Users.FirstOrDefaultAsync(x => x.Auth0Id == userAuth0Id);
        if (user != null)
            return;

        var newUser = new User
        {
            Auth0Id = userAuth0Id,
            Balance = 100
        };
        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();
    }

    public async Task<UserDto> GetUserData()
    {
        var userAuth0Id = _httpContextAccessor.HttpContext?.User.Claims
            .FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;

        var user = await _context.Users
            .Include(u => u.BettingSlips)
            .ThenInclude(bs => bs.Bets)
            .ThenInclude(bsb => bsb.Bet)
            .FirstOrDefaultAsync(x => x.Auth0Id == userAuth0Id);


        if (user == null)
            throw new InvalidOperationException("User not found.");

        var userDto = new UserDto
        {
            Auth0Id = user.Auth0Id,
            Balance = user.Balance,
            BettingSlips = user.BettingSlips.Select(bs => new BettingSlipDto
            {
                Id = bs.Id,
                TotalStake = bs.Stake,
                TotalOdds = bs.TotalOdds,
                Status = bs.Status,
                Date = bs.Date,
                Bets = bs.Bets.Select(bsb => new BetDto
                {
                    Id = bsb.Bet.Id,
                    Name = bsb.Bet.Name,
                    Value = bsb.Bet.Value,
                    Odd = bsb.Bet.Odd,
                    FixtureId = bsb.Bet.FixtureId,
                    HomeTeam = bsb.Bet.HomeTeam,
                    AwayTeam = bsb.Bet.AwayTeam,
                    Status = bsb.Bet.Status
                }).ToList()
            }).ToList()
        };

        return userDto;
    }
}