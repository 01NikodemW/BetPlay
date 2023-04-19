using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TrackedLeagues",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    LeagueId = table.Column<int>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    LogoUrl = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrackedLeagues", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId", "LogoUrl", "Name" },
                values: new object[,]
                {
                    { new Guid("2c264547-fad4-4aea-ae50-d0c6435cfaf0"), 39, "https://media.api-sports.io/football/leagues/39.png", "Premier League" },
                    { new Guid("4daa1f88-7014-4c71-b6eb-571fd5a50339"), 78, "https://media.api-sports.io/football/leagues/78.png", "Bundesliga" },
                    { new Guid("63c8d11e-7e2f-4bc5-8041-ab06cc0c6290"), 61, "https://media.api-sports.io/football/leagues/61.png", "Ligue 1" },
                    { new Guid("9ae9c8c7-2c39-476e-910c-c3adb7d8b625"), 135, "https://media.api-sports.io/football/leagues/135.png", "Serie A" },
                    { new Guid("a5b09102-c436-435a-9ba6-e61cb83245ed"), 140, "https://media.api-sports.io/football/leagues/140.png", "La Liga" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TrackedLeagues");
        }
    }
}
