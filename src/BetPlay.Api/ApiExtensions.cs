using BetPlay.Infrastructure.EfCore;
using BetPlay.RequestHandlers.Dummy;
using Microsoft.EntityFrameworkCore;

namespace BetPlay.Api;

public static class ApiExtensions
{
    public static WebApplication UseBetPlay(this WebApplication webApplication)
    {
        webApplication.UseSwagger();
        webApplication.UseSwaggerUI();
        webApplication.UseHttpsRedirection();
        webApplication.MapControllers();
        return webApplication;
    }

    public static IServiceCollection AddBetPlay(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddControllers();
        services.AddMediatR(opt =>
        {
            opt.RegisterServicesFromAssemblies(typeof(Program).Assembly, typeof(HelloWorldRequestHandler).Assembly);
        });
        services.AddDbContext<BetPlayDbContext>(opt => { opt.UseSqlite("Data Source=BetPlay.db"); });

        return services;
    }
}