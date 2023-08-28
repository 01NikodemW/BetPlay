using System.Security.Claims;
using BetPlay.ApiSport.Dto;
using BetPlay.Domain;
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


    public async Task CreateUser(string Auth0Id)
    {
        var userAuth0Id = _httpContextAccessor.HttpContext?.User.Claims
            .FirstOrDefault(x => x.Type == ClaimTypes.NameIdentifier)?.Value;
        var user = await _context.Users.FirstOrDefaultAsync(x => x.Auth0Id == userAuth0Id);
        if (user != null)
            throw new InvalidOperationException("User already exists.");
        var newUser = new User
        {
            Auth0Id = Auth0Id
        };
        _context.Users.Add(newUser);
        _context.SaveChanges();
    }
}