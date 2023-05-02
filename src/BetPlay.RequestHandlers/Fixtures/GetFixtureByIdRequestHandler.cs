using BetPlay.Dto.Fixture;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Requests.Fixtures;
using BetPlay.Responses.Fixture;
using Mapster;
using MediatR;

namespace BetPlay.RequestHandlers.Fixtures;

public class GetFixtureByIdRequestHandler : IRequestHandler<GetFixtureByIdRequest, GetFixtureByIdResponse>
{
    private readonly IFixtureRepository _fixtureRepository;

    public GetFixtureByIdRequestHandler(IFixtureRepository fixtureRepository)
    {
        _fixtureRepository = fixtureRepository;
    }


    public async Task<GetFixtureByIdResponse> Handle(GetFixtureByIdRequest request, CancellationToken cancellationToken)
    {
        var fixture = await _fixtureRepository.GetFixtureById(request.FixtureId);

        return new GetFixtureByIdResponse
        {
            Fixture = fixture.Adapt<FixtureDetailsDto>()
        };
    }
}