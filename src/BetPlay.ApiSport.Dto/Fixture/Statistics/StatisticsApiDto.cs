using BetPlay.ApiSport.Dto.Fixture.Statistics.Statistics;
using BetPlay.ApiSport.Dto.Fixture.Statistics.Team;

namespace BetPlay.ApiSport.Dto.Fixture.Statistics;

public class StatisticsApiDto
{
    public TeamApiDto Team { get; set; } = default!;
    public IEnumerable<SingleStatisticApiDto> Statistics { get; set; } = default!;
}

public class TeamApiDto
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Logo { get; set; } = default!;
}

public class SingleStatisticApiDto
{
    public string Type { get; set; } = default!;
    public object? Value { get; set; }
}