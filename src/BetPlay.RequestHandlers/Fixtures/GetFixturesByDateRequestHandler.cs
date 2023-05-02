using BetPlay.Domain.Fixture;
using BetPlay.Dto.Fixture;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Infrastructure.EfCore;
using BetPlay.Requests.Fixtures;
using BetPlay.Responses.Fixture;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Fixtures;

public class GetFixturesByDateRequestHandler : IRequestHandler<GetFixturesByDateRequest,
    GetFixturesByDateResponse>
{
    private readonly IFixtureRepository _fixtureRepository;
    private readonly BetPlayDbContext _context;

    public GetFixturesByDateRequestHandler(IFixtureRepository fixtureRepository, BetPlayDbContext context)
    {
        _fixtureRepository = fixtureRepository;
        _context = context;
    }

    public async Task<GetFixturesByDateResponse> Handle(GetFixturesByDateRequest request,
        CancellationToken cancellationToken)
    {
        IEnumerable<int> leaguesToDisplay;
        if (request.LeagueIds.All(x => x != 0) && request.LeagueIds.Count() != 0 && request.LeagueIds != null)
        {
            leaguesToDisplay = request.LeagueIds;
        }
        else
        {
            var topFiveLeaguesFromDb = _context.TrackedLeagues.ToList();
            leaguesToDisplay = topFiveLeaguesFromDb.Select(l => l.LeagueId).ToList();
        }


        var fixtures = await _fixtureRepository.GetFixturesByDate(request.Date, leaguesToDisplay);


        return new GetFixturesByDateResponse()
        {
            Fixtures = fixtures.Adapt<IEnumerable<FixtureDto>>().ToList()
        };
    }
}