using BetPlay.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BetPlay.Infrastructure.EfCore.TypeConfiguration;

public class TrackedLeagueTypeConfiguration : IEntityTypeConfiguration<TrackedLeague>
{
    public void Configure(EntityTypeBuilder<TrackedLeague> builder)
    {
        builder.HasData(new List<TrackedLeague>
        {
            new() { Id = Guid.NewGuid(), LeagueId = 78, Name = "Bundesliga", LogoUrl = "https://media.api-sports.io/football/leagues/78.png" },
            new() { Id = Guid.NewGuid(), LeagueId = 39, Name = "Premier League", LogoUrl = "https://media.api-sports.io/football/leagues/39.png" },
            new() { Id = Guid.NewGuid(), LeagueId = 140, Name = "La Liga", LogoUrl = "https://media.api-sports.io/football/leagues/140.png"},
            new() { Id = Guid.NewGuid(), LeagueId = 135, Name = "Serie A", LogoUrl = "https://media.api-sports.io/football/leagues/135.png" },
            new()
            {
                Id = Guid.NewGuid(), LeagueId = 61, Name = "Ligue 1", LogoUrl = "https://media.api-sports.io/football/leagues/61.png"
            }
        });
    }
}