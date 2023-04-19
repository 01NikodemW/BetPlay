using BetPlay.Domain;

namespace BetPlay.Responses.Leagues;

public class GetTopFiveLeaguesResponse
{
    
    public IEnumerable<TrackedLeague> Leagues { get; set; } = default!;
}