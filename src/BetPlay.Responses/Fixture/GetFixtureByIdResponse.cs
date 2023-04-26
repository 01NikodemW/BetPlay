using BetPlay.Dto.Fixture;

namespace BetPlay.Responses.Fixture;

public class GetFixtureByIdResponse
{
    public FixtureDto Fixture { get; set; } = default!;
}