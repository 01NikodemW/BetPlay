using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV6 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("00d06b62-5b18-4c84-be51-59b1f68c8fbd"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("1815b924-0cea-48b7-9dc9-69fca8559827"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("81a938ab-425a-4ea4-9fa5-060edee642b7"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ba142de8-ac4a-491e-bbaa-57ca37c53989"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("d16bef45-20d1-4cec-b3e0-747b0543c6dd"));

            migrationBuilder.CreateTable(
                name: "Venues",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    VenueId = table.Column<int>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Address = table.Column<string>(type: "TEXT", nullable: false),
                    City = table.Column<string>(type: "TEXT", nullable: false),
                    Capacity = table.Column<int>(type: "INTEGER", nullable: false),
                    Surface = table.Column<string>(type: "TEXT", nullable: false),
                    Image = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venues", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Teams",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TeamId = table.Column<int>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Code = table.Column<string>(type: "TEXT", nullable: false),
                    Country = table.Column<string>(type: "TEXT", nullable: false),
                    Founded = table.Column<int>(type: "INTEGER", nullable: false),
                    National = table.Column<bool>(type: "INTEGER", nullable: false),
                    Logo = table.Column<string>(type: "TEXT", nullable: false),
                    VenueId = table.Column<Guid>(type: "TEXT", nullable: false),
                    UpdateDate = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Teams", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Teams_Venues_VenueId",
                        column: x => x.VenueId,
                        principalTable: "Venues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("37e7755e-c1fc-4932-b9b7-b4ab7a4863f1"), 78 },
                    { new Guid("5c061b02-abba-439d-9ddf-43dd87a520dd"), 135 },
                    { new Guid("72d95756-47b6-4f37-b9c3-f30129235220"), 39 },
                    { new Guid("8a6967cf-23f8-4af3-8a0c-cc221cfc8892"), 61 },
                    { new Guid("eb4305ed-7e95-411b-ba8e-470de591aa5c"), 140 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Teams_VenueId",
                table: "Teams",
                column: "VenueId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Teams");

            migrationBuilder.DropTable(
                name: "Venues");

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("37e7755e-c1fc-4932-b9b7-b4ab7a4863f1"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("5c061b02-abba-439d-9ddf-43dd87a520dd"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("72d95756-47b6-4f37-b9c3-f30129235220"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("8a6967cf-23f8-4af3-8a0c-cc221cfc8892"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("eb4305ed-7e95-411b-ba8e-470de591aa5c"));

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("00d06b62-5b18-4c84-be51-59b1f68c8fbd"), 61 },
                    { new Guid("1815b924-0cea-48b7-9dc9-69fca8559827"), 140 },
                    { new Guid("81a938ab-425a-4ea4-9fa5-060edee642b7"), 78 },
                    { new Guid("ba142de8-ac4a-491e-bbaa-57ca37c53989"), 39 },
                    { new Guid("d16bef45-20d1-4cec-b3e0-747b0543c6dd"), 135 }
                });
        }
    }
}
