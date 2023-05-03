using BetPlay.ApiSport.Dto;
using BetPlay.Domain.Fixture;
using BetPlay.Domain.Team;
using BetPlay.Infrastructure.EfCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;

namespace BetPlay.Infrastructure.ApiSport;

public class FixtureRepository : IFixtureRepository
{
    private readonly BetPlayDbContext _context;
    private readonly IApiSportClient _client;
    private readonly ILeagueRepository _leagueRepository;
    private readonly ITeamRepository _teamRepository;

    public FixtureRepository(BetPlayDbContext context, IApiSportClient client, ILeagueRepository leagueRepository,
        ITeamRepository teamRepository)
    {
        _context = context;
        _client = client;
        _leagueRepository = leagueRepository;
        _teamRepository = teamRepository;
    }

    public async Task<Fixture> GetFixtureById(int id)
    {
        var fixture = await _context.Fixtures
            .Include(x => x.Venue)
            .Include(x => x.FixtureLeague)
            .Include(x => x.FixtureLeague.League)
            .Include(x => x.Score)
            .Include(x => x.Events)
            .FirstOrDefaultAsync(x => x.FixtureId == id);
        if (fixture == null || !fixture.IsValidForLive())
        {
            if (fixture != null)
            {
                _context.Fixtures.Remove(fixture);
                if (fixture.Score != null)
                {
                    _context.Scores.Remove(fixture.Score);
                }
            }

            var fixtureApiDto = await _client.GetFixtureByIdAsync(id);
            var venue = await _context.Venues.FirstOrDefaultAsync(x => x.VenueId == fixtureApiDto.Fixture.Venue.Id);
            if (venue == null && fixtureApiDto.Fixture.Venue.Id != null)
            {
                var venueApiDto = await _client.GetVenueByIdAsync(fixtureApiDto.Fixture.Venue.Id);
                venue = new Venue(venueApiDto);

                _context.Venues.Add(venue);
                await _context.SaveChangesAsync();
            }


            var fixtureLeague =
                await _context.FixtureLeagues
                    .Include(x => x.League)
                    .Include(x => x.League.Country)
                    .FirstOrDefaultAsync(
                        x =>
                            x.League.LeagueId == fixtureApiDto.League.Id && x.Season == fixtureApiDto.League.Season &&
                            x.Round == fixtureApiDto.League.Round);
            if (fixtureLeague == null)
            {
                var league = await _leagueRepository.GetLeagueById(fixtureApiDto.League.Id);
                fixtureLeague = new FixtureLeague(fixtureApiDto, league);

                _context.FixtureLeagues.Add(fixtureLeague);
                await _context.SaveChangesAsync();
            }


            var score = new Score(fixtureApiDto);
            _context.Scores.Add(score);

            var events = new List<Event>();

            foreach (var particularEvent in fixtureApiDto.Events)
            {
                var team = await _context.Teams.Include(x => x.Venue)
                    .FirstOrDefaultAsync(x => x.TeamId == particularEvent.Team.Id);
                if (team == null)
                {
                    team = await _teamRepository.GetTeamById(particularEvent.Team.Id);
                }

                var newEvent = new Event(fixtureApiDto.Fixture.Id, particularEvent, team);
                events.Add(newEvent);
            }

            fixture = new Fixture(fixtureApiDto, venue, fixtureLeague, score, events);

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
            if (venue == null && fixtureApiDto.Fixture.Venue.Id != null)
            {
                var venueApiDto = await _client.GetVenueByIdAsync(fixtureApiDto.Fixture.Venue.Id);
                venue = new Venue(venueApiDto);

                _context.Venues.Add(venue);
                await _context.SaveChangesAsync();
            }


            var fixtureLeague =
                await _context.FixtureLeagues
                    .Include(x => x.League)
                    .Include(x => x.League.Country)
                    .FirstOrDefaultAsync(
                        x =>
                            x.League.LeagueId == fixtureApiDto.League.Id && x.Season == fixtureApiDto.League.Season &&
                            x.Round == fixtureApiDto.League.Round);
            if (fixtureLeague == null)
            {
                var league = await _leagueRepository.GetLeagueById(fixtureApiDto.League.Id);
                fixtureLeague = new FixtureLeague(fixtureApiDto, league);

                _context.FixtureLeagues.Add(fixtureLeague);
                await _context.SaveChangesAsync();
            }


            fixtureApiDto.Fixture.Referee ??= "";

            var fixture = new Fixture(fixtureApiDto, venue, fixtureLeague);
            liveFixtures.Add(fixture);

            _context.Fixtures.Add(fixture);
            await _context.SaveChangesAsync();
        }


        return liveFixtures;
    }

    public async Task<IEnumerable<Fixture>> GetAllLiveFixtures()
    {
        var liveFixturesFromDb = await _context.Fixtures
            .Include(x => x.Venue)
            .Include(x => x.FixtureLeague)
            .Where(x => x.Short == "1H"
                        || x.Short == "HT"
                        || x.Short == "2H"
                        || x.Short == "ET"
                        || x.Short == "BT"
                        || x.Short == "P")
            .ToListAsync();


        bool isDataValid = liveFixturesFromDb.All(f => f.IsValidForLive());
        if (isDataValid && liveFixturesFromDb.Count != 0)
        {
            return liveFixturesFromDb;
        }

        var allFixtures = await _context.Fixtures.ToListAsync();
        var liveFixturesApiDto = await _client.GetAllLiveFixturesAsync();
        var liveFixturesIds = liveFixturesApiDto.Select(f => f.Fixture.Id).ToList();
        var fixturesToDelete = allFixtures.Where(f => liveFixturesIds.Contains(f.FixtureId)).ToList();
        _context.Fixtures.RemoveRange(liveFixturesFromDb);
        await _context.SaveChangesAsync();

        var liveFixtures = new List<Fixture>();

        foreach (var fixtureApiDto in liveFixturesApiDto)
        {
            var venue = await _context.Venues.FirstOrDefaultAsync(x => x.VenueId == fixtureApiDto.Fixture.Venue.Id);
            if (venue == null && fixtureApiDto.Fixture.Venue.Id != null)
            {
                var venueApiDto = await _client.GetVenueByIdAsync(fixtureApiDto.Fixture.Venue.Id);
                if (venueApiDto != null)
                {
                    venue = new Venue(venueApiDto);

                    _context.Venues.Add(venue);
                    await _context.SaveChangesAsync();
                }
            }


            var fixtureLeague =
                await _context.FixtureLeagues
                    .Include(x => x.League)
                    .Include(x => x.League.Country)
                    .FirstOrDefaultAsync(
                        x =>
                            x.League.LeagueId == fixtureApiDto.League.Id &&
                            x.Season == fixtureApiDto.League.Season &&
                            x.Round == fixtureApiDto.League.Round);
            if (fixtureLeague == null)
            {
                var league = await _leagueRepository.GetLeagueById(fixtureApiDto.League.Id);
                fixtureLeague = new FixtureLeague(fixtureApiDto, league);

                _context.FixtureLeagues.Add(fixtureLeague);
                await _context.SaveChangesAsync();
            }

            var fixture = new Fixture(fixtureApiDto, venue, fixtureLeague);
            _context.Fixtures.Add(fixture);
            await _context.SaveChangesAsync();

            liveFixtures.Add(fixture);
        }

        return liveFixtures;
    }

    public async Task<IEnumerable<Fixture>> GetFixturesByDate(DateTime date, IEnumerable<int> leaguesToDisplay)
    {
        var fixturesOfThatDayFromDb = await _context.Fixtures
            .Include(x => x.Venue)
            .Include(x => x.FixtureLeague)
            .Where(x => x.Date.Substring(0, 10) == date.ToString("yyyy-MM-dd"))
            .Where(x => leaguesToDisplay.Contains(x.FixtureLeague.League.LeagueId))
            .ToListAsync();

        bool isDataValid = fixturesOfThatDayFromDb.All(f => f.IsValidForNormalPreview());
        if (isDataValid && fixturesOfThatDayFromDb.Any())
        {
            return fixturesOfThatDayFromDb;
        }

        _context.Fixtures.RemoveRange(fixturesOfThatDayFromDb);
        await _context.SaveChangesAsync();

        IEnumerable<Fixture> fixturesToDisplay = new List<Fixture>();

        foreach (var leagueToDisplay in leaguesToDisplay)
        {
            var fixturesFromLeagueApiDto =
                await _client.GetFixturesFromLeagueByDateAsync(leagueToDisplay, date);
            foreach (var fixtureApiDto in fixturesFromLeagueApiDto)
            {
                var venue = await _context.Venues.FirstOrDefaultAsync(x => x.VenueId == fixtureApiDto.Fixture.Venue.Id);
                if (venue == null && fixtureApiDto.Fixture.Venue.Id != null)
                {
                    var venueApiDto = await _client.GetVenueByIdAsync(fixtureApiDto.Fixture.Venue.Id);
                    venue = new Venue(venueApiDto);

                    _context.Venues.Add(venue);
                    await _context.SaveChangesAsync();
                }


                var fixtureLeague =
                    await _context.FixtureLeagues
                        .Include(x => x.League)
                        .Include(x => x.League.Country)
                        .FirstOrDefaultAsync(
                            x =>
                                x.League.LeagueId == fixtureApiDto.League.Id &&
                                x.Season == fixtureApiDto.League.Season &&
                                x.Round == fixtureApiDto.League.Round);
                if (fixtureLeague == null)
                {
                    var league = await _leagueRepository.GetLeagueById(fixtureApiDto.League.Id);
                    fixtureLeague = new FixtureLeague(fixtureApiDto, league);

                    _context.FixtureLeagues.Add(fixtureLeague);
                    await _context.SaveChangesAsync();
                }

                var fixture = new Fixture(fixtureApiDto, venue, fixtureLeague);
                _context.Fixtures.Add(fixture);
                await _context.SaveChangesAsync();

                fixturesToDisplay = fixturesToDisplay.Append(fixture);
            }
        }

        return fixturesToDisplay;
    }
}