using BetPlay.Dto.Fixture;

namespace BetPlay.Responses.Fixture;

public class GetFixturesByDateResponse
{
    public IEnumerable<FixtureDto> Fixtures { get; set; } = default!;
}