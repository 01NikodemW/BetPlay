using BetPlay.Responses.Leagues;
using MediatR;

namespace BetPlay.Requests.Leagues;

public class GetLeaguesByCountryRequest : IRequest<GetLeaguesByCountryResponse>
{
    public string Country { get; set; } = default!;
}