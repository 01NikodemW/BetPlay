using BetPlay.Dto.Fixture;

namespace BetPlay.Responses.Fixture;

public class GetLiveFixturesByLeagueIdsResponse
{
    public IEnumerable<FixtureDto> Fixtures { get; set; } = default!;
}