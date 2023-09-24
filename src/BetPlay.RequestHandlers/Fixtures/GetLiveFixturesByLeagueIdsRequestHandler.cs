using BetPlay.Dto.Fixture;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Infrastructure.EfCore;
using BetPlay.Requests.Fixtures;
using BetPlay.Responses.Fixture;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Fixtures;

public class GetLiveFixturesByLeagueIdsRequestHandler : IRequestHandler<GetLiveFixturesByLeagueIdsRequest,
    GetLiveFixturesByLeagueIdsResponse
>
{
    private readonly IFixtureRepository _fixtureRepository;
    private readonly BetPlayDbContext _context;

    public GetLiveFixturesByLeagueIdsRequestHandler(IFixtureRepository fixtureRepository, BetPlayDbContext context)
    {
        _fixtureRepository = fixtureRepository;
        _context = context;
    }

    public async Task<GetLiveFixturesByLeagueIdsResponse> Handle(GetLiveFixturesByLeagueIdsRequest request,
        CancellationToken cancellationToken)
    {
        var fixtures = await _fixtureRepository.GetLiveFixturesByLeagueIds(request.LeagueIds);


        return new GetLiveFixturesByLeagueIdsResponse()
        {
            Fixtures = fixtures.Adapt<IEnumerable<FixtureDto>>().ToList()
        };
    }
}