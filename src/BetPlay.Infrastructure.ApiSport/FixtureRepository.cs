using BetPlay.ApiSport.Dto;
using BetPlay.ApiSport.Dto.Fixture;
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

    public async Task<FixtureResponseApiDto> GetFixtureById(int id)
    {
        var fixtureApiDtoTmp = await _client.GetFixtureByIdAsync(id);
        return fixtureApiDtoTmp;
    }

    public async Task<IEnumerable<Fixture>> GetFixturesByDate(DateTime date, IEnumerable<int> leaguesToDisplay)
    {
        var fixturesOfThatDayFromDb = await _context.Fixtures
            .Include(x => x.Venue)
            .Include(x => x.FixtureLeague)
            .ThenInclude(fl => fl.League)
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

    public async Task<IEnumerable<Fixture>> GetLiveFixturesByLeagueIds(IEnumerable<int> leaguesToDisplay)
    {
        var liveFixturesFromDb = await _context.Fixtures
            .Include(x => x.Venue)
            .Include(x => x.FixtureLeague)
            .Include(x => x.FixtureLeague.League)
            .Where(x => x.Short == "1H"
                        || x.Short == "HT"
                        || x.Short == "2H"
                        || x.Short == "ET"
                        || x.Short == "BT"
                        || x.Short == "P")
            .Where(x => leaguesToDisplay.Contains(x.FixtureLeague.League.LeagueId))
            .ToListAsync();

        bool isDataValid = liveFixturesFromDb.All(f => f.IsValidForLive());
        if (isDataValid && liveFixturesFromDb.Any())
        {
            return liveFixturesFromDb;
        }

        _context.Fixtures.RemoveRange(liveFixturesFromDb);
        await _context.SaveChangesAsync();

        IEnumerable<Fixture> liveFixturesToDisplay = new List<Fixture>();

        foreach (var leagueToDisplay in leaguesToDisplay)
        {
            var liveFixturesFromLeagueApiDto =
                await _client.GetLiveFixturesByLeagueIdAsync(leagueToDisplay);
            foreach (var liveFixtureApiDto in liveFixturesFromLeagueApiDto)
            {
                var venue = await _context.Venues.FirstOrDefaultAsync(x =>
                    x.VenueId == liveFixtureApiDto.Fixture.Venue.Id);
                if (venue == null && liveFixtureApiDto.Fixture.Venue.Id != null)
                {
                    var venueApiDto = await _client.GetVenueByIdAsync(liveFixtureApiDto.Fixture.Venue.Id);
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
                                x.League.LeagueId == liveFixtureApiDto.League.Id &&
                                x.Season == liveFixtureApiDto.League.Season &&
                                x.Round == liveFixtureApiDto.League.Round);
                if (fixtureLeague == null)
                {
                    var league = await _leagueRepository.GetLeagueById(liveFixtureApiDto.League.Id);
                    fixtureLeague = new FixtureLeague(liveFixtureApiDto, league);

                    _context.FixtureLeagues.Add(fixtureLeague);
                    await _context.SaveChangesAsync();
                }

                var fixture = new Fixture(liveFixtureApiDto, venue, fixtureLeague);
                _context.Fixtures.Add(fixture);
                await _context.SaveChangesAsync();

                liveFixturesToDisplay = liveFixturesToDisplay.Append(fixture);
            }
        }

        return liveFixturesToDisplay;
    }

    public async Task<IEnumerable<Fixture>> GetAllLiveFixtures()
    {
        var liveFixturesFromDb = await _context.Fixtures
            .Include(x => x.Venue)
            .Include(x => x.FixtureLeague)
            .Include(x => x.FixtureLeague.League)
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
        _context.Fixtures.RemoveRange(fixturesToDelete);
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
}