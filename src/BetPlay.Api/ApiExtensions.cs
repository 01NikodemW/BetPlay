using System.Security.Claims;
using Auth0.AspNetCore.Authentication;
using BetPlay.ApiSport.Dto;
using BetPlay.Infrastructure.ApiSport;
using BetPlay.Infrastructure.EfCore;
using BetPlay.Options;
using BetPlay.RequestHandlers.Dummy;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace BetPlay.Api;

public static class ApiExtensions
{
    public static WebApplication UseBetPlay(this WebApplication webApplication)
    {
        webApplication.UseSwagger();
        webApplication.UseSwaggerUI();
        webApplication.UseHttpsRedirection();
        webApplication.UseAuthentication();
        webApplication.UseAuthorization();
        webApplication.MapControllers();
      
        webApplication.UseCors(p => p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

        return webApplication;
    }

    public static IServiceCollection AddBetPlay(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddControllers();
        services.AddSingleton<IApiSportClient, ApiSportClient>();
        services.AddScoped<ILeagueRepository, LeagueRepository>();
        services.AddScoped<ITeamRepository, TeamRepository>();
        services.AddScoped<ICountryRepository, CountryRepository>();
        services.AddScoped<IFixtureRepository, FixtureRepository>();
        services.AddScoped<IBetRepository, BetRepository>();
        services.AddScoped<IBettingSlipRepository, BettingSlipRepository>();
        services.AddScoped<IAccountRepository, AccountRepository>();
        services.AddHttpContextAccessor();
        services.AddMediatR(opt =>
        {
            opt.RegisterServicesFromAssemblies(typeof(Program).Assembly, typeof(HelloWorldRequestHandler).Assembly);
        });
        services.AddDbContext<BetPlayDbContext>(opt => { opt.UseSqlite("Data Source=BetPlay.db"); });
        services.Configure<ApiSportOptions>(configuration.GetSection(ApiSportOptions.SectionName));

        services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.Authority =
                configuration["Auth0:Authority"];
            options.Audience = configuration["Auth0:Audience"];
        });
        


        return services;
    }
}