using BetPlay.Dto.Fixture;

namespace BetPlay.Responses.Fixture;

public class GetAllLiveFixturesResponse
{
    public IEnumerable<FixtureDto> Fixtures { get; set; } = default!;
}