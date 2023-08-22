using BetPlay.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BetPlay.Infrastructure.EfCore.TypeConfiguration;

public class UserTypeConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasData(new List<User>
        {
            new()
            {
                Id = Guid.Parse("d0df033d-4ff4-426b-a219-92641baf8fe4"),
                Email = "user@gmail.com",
                Password = "@Haslo123",
                Name = "User",
                Surname = "User",
            }
        });
    }
}