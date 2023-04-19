using BetPlay.Api;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddBetPlay();
var app = builder.Build();
app.UseBetPlay();
app.Run();
