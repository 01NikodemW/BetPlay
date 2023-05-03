using BetPlay.Domain.Fixture;
using BetPlay.Domain.League;
using BetPlay.Domain.Team;
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
    public DbSet<Fixture> Fixtures { get; set; } = default!;
    public DbSet<FixtureLeague> FixtureLeagues { get; set; } = default!;
    public DbSet<Score> Scores { get; set; } = default!;

    public DbSet<Team> Teams { get; set; } = default!;
    public DbSet<Venue> Venues { get; set; } = default!;
}