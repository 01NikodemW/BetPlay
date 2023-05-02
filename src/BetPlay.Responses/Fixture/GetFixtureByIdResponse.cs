using BetPlay.Dto.Fixture;

namespace BetPlay.Responses.Fixture;

public class GetFixtureByIdResponse
{
    public FixtureDetailsDto Fixture { get; set; } = default!;
}