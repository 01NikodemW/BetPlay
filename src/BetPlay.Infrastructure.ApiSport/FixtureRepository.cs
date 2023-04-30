using BetPlay.ApiSport.Dto;
using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.Domain.Fixture;
using BetPlay.Domain.League;
using BetPlay.Domain.Team;
using BetPlay.Dto.Fixture;
using BetPlay.Infrastructure.EfCore;
using Microsoft.EntityFrameworkCore;

namespace BetPlay.Infrastructure.ApiSport;

public class FixtureRepository : IFixtureRepository
{
    private readonly BetPlayDbContext _context;
    private readonly IApiSportClient _client;
    private readonly ILeagueRepository _leagueRepository;

    public FixtureRepository(BetPlayDbContext context, IApiSportClient client, ILeagueRepository leagueRepository)
    {
        _context = context;
        _client = client;
        _leagueRepository = leagueRepository;
    }

    public async Task<Fixture> GetFixtureById(int id)
    {
        var fixture = await _context.Fixtures
            .Include(x => x.Venue)
            .Include(x => x.FixtureLeague)
            .FirstOrDefaultAsync(x => x.FixtureId == id);


        if (fixture == null || !fixture.IsValid())
        {
            var fixtureApiDto = await _client.GetFixtureByIdAsync(id);
            var venue = await _context.Venues.FirstOrDefaultAsync(x => x.VenueId == fixtureApiDto.Fixture.Venue.Id);
            if (venue == null)
            {
                var venueApiDto = await _client.GetVenueByIdAsync(fixtureApiDto.Fixture.Venue.Id);
                venue = new Venue(venueApiDto);

                _context.Venues.Add(venue);
                await _context.SaveChangesAsync();
            }

            var fixtureLeague =
                await _context.FixtureLeagues.FirstOrDefaultAsync(x =>
                    x.League.LeagueId == fixtureApiDto.League.Id);
            if (fixtureLeague == null)
            {
                var league = await _leagueRepository.GetLeagueById(fixtureApiDto.League.Id);
                fixtureLeague = new FixtureLeague(fixtureApiDto, league);

                _context.FixtureLeagues.Add(fixtureLeague);
                await _context.SaveChangesAsync();
            }


            fixture = new Fixture(fixtureApiDto, venue, fixtureLeague);

            _context.Fixtures.Add(fixture);
            await _context.SaveChangesAsync();
        }


        return fixture;
    }

    public async Task<IEnumerable<Fixture>> GetLiveFixturesByLeagueId(int leagueId)
    {
        var liveFixturesApiDto = await _client.GetLiveFixturesByLeagueIdAsync(leagueId);

        var liveFixtures = new List<Fixture>();
        foreach (var fixtureApiDto in liveFixturesApiDto)
        {
            var venue = await _context.Venues.FirstOrDefaultAsync(x => x.VenueId == fixtureApiDto.Fixture.Venue.Id);
            if (venue == null)
            {
                var venueApiDto = await _client.GetVenueByIdAsync(fixtureApiDto.Fixture.Venue.Id);
                venue = new Venue(venueApiDto);

                _context.Venues.Add(venue);
                await _context.SaveChangesAsync();
            }

            var fixtureLeague =
                await _context.FixtureLeagues.FirstOrDefaultAsync(x =>
                    x.League.LeagueId == fixtureApiDto.League.Id);
            if (fixtureLeague == null)
            {
                var league = await _leagueRepository.GetLeagueById(fixtureApiDto.League.Id);
                fixtureLeague = new FixtureLeague(fixtureApiDto, league);

                _context.FixtureLeagues.Add(fixtureLeague);
                await _context.SaveChangesAsync();
            }

            var fixture = new Fixture(fixtureApiDto, venue, fixtureLeague);
            liveFixtures.Add(fixture);

            _context.Fixtures.Add(fixture);
            await _context.SaveChangesAsync();
        }


        return liveFixtures;
    }
}