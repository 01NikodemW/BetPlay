using BetPlay.Domain;
using BetPlay.Domain.League;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BetPlay.Infrastructure.EfCore.TypeConfiguration;

public class TrackedLeagueTypeConfiguration : IEntityTypeConfiguration<TrackedLeague>
{
    public void Configure(EntityTypeBuilder<TrackedLeague> builder)
    {
        builder.HasData(new List<TrackedLeague>
        {
            new() { Id = Guid.NewGuid(), LeagueId = 78 },
            new() { Id = Guid.NewGuid(), LeagueId = 39 },
            new() { Id = Guid.NewGuid(), LeagueId = 140 },
            new() { Id = Guid.NewGuid(), LeagueId = 135 },
            new() { Id = Guid.NewGuid(), LeagueId = 61 }
        });
    }
}