using BetPlay.Dto.League;

namespace BetPlay.Responses.Leagues;

public class GetLeaguesByCountryResponse
{
    public IEnumerable<LeagueDto> Leagues { get; set; } = default!;
}