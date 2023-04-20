namespace BetPlay.ApiSport.Dto.Common;

public class ApiSportResponse<TResponse>
{
    public ICollection<TResponse> Response { get; set; }
}