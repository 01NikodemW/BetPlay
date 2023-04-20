using BetPlay.Dto.League;

namespace BetPlay.Responses.Leagues;

public class GetLeagueByIdResponse
{
    public LeagueDto League { get; set; } = default!;
}