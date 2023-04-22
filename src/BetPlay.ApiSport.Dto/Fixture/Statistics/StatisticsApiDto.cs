using BetPlay.ApiSport.Dto.Fixture.Statistics.Statistics;
using BetPlay.ApiSport.Dto.Fixture.Statistics.Team;

namespace BetPlay.ApiSport.Dto.Fixture.Statistics;

public class StatisticsApiDto
{
    public TeamApiDto Team { get; set; } = default!;
    public IEnumerable<SingleStatisticApiDto> Statistics { get; set; } = default!;
}