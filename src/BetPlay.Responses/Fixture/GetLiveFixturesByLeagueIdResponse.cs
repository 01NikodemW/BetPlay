using BetPlay.Dto.Fixture;

namespace BetPlay.Responses.Fixture;

public class GetLiveFixturesByLeagueIdResponse
{
    public IEnumerable<FixtureDto> Fixtures { get; set; } = default!;
}