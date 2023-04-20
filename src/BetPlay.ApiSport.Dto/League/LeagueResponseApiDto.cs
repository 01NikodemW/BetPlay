using System.Text.Json.Serialization;

namespace BetPlay.ApiSport.Dto.League;

public class LeagueResponseApiDto
{
    public LeagueApiDto League { get; set; } = default!;
    public CountryApiDto Country { get; set; } = default!;
    public IEnumerable<SeasonApiDto> Seasons { get; set; } = default!;
}