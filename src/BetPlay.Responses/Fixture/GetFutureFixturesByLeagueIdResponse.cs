using System.Collections;
using BetPlay.ApiSport.Dto.Fixture;

namespace BetPlay.Responses.Fixture;

public class GetFutureFixturesByLeagueIdResponse
{
    public IEnumerable<FixtureResponseApiDto> Fixtures { get; set; } = default!;
}