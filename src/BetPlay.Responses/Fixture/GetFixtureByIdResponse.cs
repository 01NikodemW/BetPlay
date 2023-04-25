using BetPlay.ApiSport.Dto.Fixture;
using BetPlay.Dto.Fixture;

namespace BetPlay.Responses.Fixture;

public class GetFixtureByIdResponse
{
    public FixtureResponseApiDto Fixture { get; set; } = default!;
}