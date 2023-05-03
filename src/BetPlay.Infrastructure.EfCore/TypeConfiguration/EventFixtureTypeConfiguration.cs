using BetPlay.Domain.Fixture;
using BetPlay.Domain.League;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BetPlay.Infrastructure.EfCore.TypeConfiguration;

public class EventFixtureTypeConfiguration : IEntityTypeConfiguration<Event>
{
    public void Configure(EntityTypeBuilder<Event> builder)
    {
        builder.HasOne<Fixture>(x => x.Fixture)
            .WithMany(f => f.Events)
            .HasForeignKey(e => e.FixtureId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}