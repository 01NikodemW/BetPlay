using BetPlay.ApiSport.Dto.Fixture.Events;

namespace BetPlay.Domain.Fixture;

public class Event : Entity
{
    public Event()
    {
    }

    public Event(Fixture fixture, EventApiDto eventApi)
    {
        Fixture = fixture;
        Elapsed = eventApi.Time.Elapsed;
        Extra = eventApi.Time.Extra;
        TeamName = eventApi.Team.Name;
        PlayerId = eventApi.Player.Id;
        PlayerName = eventApi.Player.Name;
        AssistId = eventApi.Assist.Id;
        AssistName = eventApi.Assist.Name;
        Type = eventApi.Type;
        Detail = eventApi.Detail;
        Comments = eventApi.Comments;
    }

    public Guid FixtureId { get; set; }
    public virtual Fixture Fixture { get; set; } = default!;
    public int Elapsed { get; set; }
    public int? Extra { get; set; }
    public string TeamName { get; set; } = default!;
    public int? PlayerId { get; set; }
    public string? PlayerName { get; set; } = default!;
    public int? AssistId { get; set; }
    public string? AssistName { get; set; } = default!;
    public string Type { get; set; } = default!;
    public string Detail { get; set; } = default!;
    public string? Comments { get; set; } = default!;
}