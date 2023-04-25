using BetPlay.ApiSport.Dto;
using BetPlay.Domain.Team;
using BetPlay.Infrastructure.EfCore;
using Microsoft.EntityFrameworkCore;

namespace BetPlay.Infrastructure.ApiSport;

public class TeamRepository : ITeamRepository
{
    private readonly BetPlayDbContext _context;
    private readonly IApiSportClient _client;


    public TeamRepository(BetPlayDbContext context, IApiSportClient client)
    {
        _context = context;
        _client = client;
    }

    public async Task<Team> GetTeamById(int id)
    {
        var team = await _context.Teams.Include(x => x.Venue).FirstOrDefaultAsync(x => x.TeamId == id);
        if (team == null || !team.isValid())
        {
            if (team != null)
            {
                _context.Teams.Remove(team);
                _context.Venues.Remove(team.Venue);
            }

            var teamApiDto = await _client.GetTeamByIdAsync(id);
            team = new Team(teamApiDto);
            _context.Teams.Add(team);

            await _context.SaveChangesAsync();
        }

        return team;
    }

    public async Task<IEnumerable<Team>> GetTeamsByLeagueId(int id)
    {
        var teamsApiDto = await _client.GetTeamsByLeagueIdAsync(id);
        var teams = teamsApiDto.Select(x => new Team(x));

        return teams;
    }
}