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
    
    public DbSet<Domain.TrackedLeague> TrackedLeagues { get; set; } = default!;
}