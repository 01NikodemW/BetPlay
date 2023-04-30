using BetPlay.Dto.Fixture;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Fixtures;
using BetPlay.Responses.Fixture;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Fixtures;

public class
    GetLiveFixturesByLeagueIdRequestHandler : IRequestHandler<GetLiveFixturesByLeagueIdRequest,
        GetLiveFixturesByLeagueIdResponse>
{
    private readonly IFixtureRepository _fixtureRepository;

    public GetLiveFixturesByLeagueIdRequestHandler(IFixtureRepository fixtureRepository)
    {
        _fixtureRepository = fixtureRepository;
    }

    public async Task<GetLiveFixturesByLeagueIdResponse> Handle(GetLiveFixturesByLeagueIdRequest request,
        CancellationToken cancellationToken)
    {
        var fixtures = await _fixtureRepository.GetLiveFixturesByLeagueId(request.LeagueId);

        return new GetLiveFixturesByLeagueIdResponse
        {
            Fixtures = fixtures.Adapt<IEnumerable<FixtureDto>>().ToList()
        };
    }
}