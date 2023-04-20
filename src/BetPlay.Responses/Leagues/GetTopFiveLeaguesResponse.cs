using BetPlay.Domain;
using BetPlay.Domain.League;

namespace BetPlay.Responses.Leagues;

public class GetTopFiveLeaguesResponse
{
    
    public IEnumerable<TrackedLeague> Leagues { get; set; } = default!;
}