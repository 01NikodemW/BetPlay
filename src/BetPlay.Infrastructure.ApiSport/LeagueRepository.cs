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

        if (league == null || !league.IsValid())
        {
            if (league != null)
            {
                _context.Leagues.Remove(league);
            }

            var leagueApiDto = await _client.GetLeagueByIdAsync(id);
            league = new League(leagueApiDto);
            var countryInDb = await _context.Countries.FirstOrDefaultAsync(x => x.Name == league.Country.Name);
            if (countryInDb != null)
            {
                league.Country = countryInDb;
            }

            _context.Leagues.Add(league);
            await _context.SaveChangesAsync();
        }

        return league;
    }

    public async Task<IEnumerable<League>> GetLeaguesByCountry(string country)
    {
        var leaguesByCountry = await _context.Leagues.Include(x => x.Country).Where(x => x.Country.Name == country)
            .ToListAsync();

        if (leaguesByCountry.Count == 0 || leaguesByCountry.Count == 1 ||
            leaguesByCountry.Any(x => x.IsValid() != true))
        {
            _context.Leagues.RemoveRange(leaguesByCountry);
            _context.Countries.RemoveRange(leaguesByCountry.Select(x => x.Country));

            var leaguesApiDto = await _client.GetLeaguesByCountryAsync(country);
            leaguesByCountry = leaguesApiDto.Select(x => new League(x)).ToList();
            _context.Leagues.AddRange(leaguesByCountry);

            await _context.SaveChangesAsync();
        }


        return leaguesByCountry;
    }
}