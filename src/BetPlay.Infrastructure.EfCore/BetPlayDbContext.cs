using BetPlay.Domain.League;
using Microsoft.EntityFrameworkCore;

namespace BetPlay.Infrastructure.EfCore;

public class BetPlayDbContext : DbContext
{
    public BetPlayDbContext(DbContextOptions<BetPlayDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(BetPlayDbContext).Assembly);
    }

    public DbSet<TrackedLeague> TrackedLeagues { get; set; } = default!;
    public DbSet<League> Leagues { get; set; } = default!;
    public DbSet<Country> Countries { get; set; } = default!;
}