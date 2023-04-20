using BetPlay.ApiSport.Dto;
using BetPlay.Domain.League;
using BetPlay.Infrastructure.EfCore;
using Microsoft.EntityFrameworkCore;

namespace BetPlay.Infrastructure.ApiSport;

public class LeagueRepository : ILeagueRepository
{
    private readonly BetPlayDbContext _context;
    private readonly IApiSportClient _client;

    public LeagueRepository(BetPlayDbContext context, IApiSportClient client)
    {
        _context = context;
        _client = client;
    }

    public async Task<League> GetLeagueById(int id)
    {
        var league = await _context.Leagues.Include(x => x.Country).FirstOrDefaultAsync(x => x.LeagueId == id);

        if (league == null || !league.isValid())
        {
            if (league != null)
            {
                _context.Leagues.Remove(league);
                _context.Countries.Remove(league.Country);
            }

            var leagueApiDto = await _client.GetLeagueByIdAsync(id);
            league = new League(leagueApiDto);
            _context.Leagues.Add(league);


            await _context.SaveChangesAsync();
        }

        return league;
    }
}