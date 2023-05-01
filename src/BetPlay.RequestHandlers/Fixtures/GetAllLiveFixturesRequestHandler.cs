using BetPlay.Dto.Fixture;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Fixtures;
using BetPlay.Responses.Fixture;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Fixtures;

public class GetAllLiveFixturesRequestHandler : IRequestHandler<GetAllLiveFixturesRequest,
    GetAllLiveFixturesResponse>
{
    private readonly IFixtureRepository _fixtureRepository;

    public GetAllLiveFixturesRequestHandler(IFixtureRepository fixtureRepository)
    {
        _fixtureRepository = fixtureRepository;
    }


    public async Task<GetAllLiveFixturesResponse> Handle(GetAllLiveFixturesRequest request,
        CancellationToken cancellationToken)
    {
        var fixtures = await _fixtureRepository.GetAllLiveFixtures();

        return new GetAllLiveFixturesResponse()
        {
            Fixtures = fixtures.Adapt<IEnumerable<FixtureDto>>().ToList()
        };
    }
}