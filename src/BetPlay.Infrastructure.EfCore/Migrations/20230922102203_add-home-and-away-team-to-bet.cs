using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class addhomeandawayteamtobet : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("3af175e8-2dd8-4c00-b075-41ab5bd7e935"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("4d324b2a-5854-4682-a5e3-52c91a75560f"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("bd123b04-75bf-41e9-8f4b-cc31bd7a0021"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("d37e94cc-046f-4d3e-a54a-b9b2faed9b19"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("d930c2fc-fdba-4be1-8117-d0bbed4a4193"));

            migrationBuilder.AddColumn<string>(
                name: "AwayTeam",
                table: "Bets",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HomeTeam",
                table: "Bets",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("030e9245-e21f-4e1d-a56f-37fa68f07684"), 78 },
                    { new Guid("5401ff8e-81ad-4086-b222-520690c8e0f2"), 140 },
                    { new Guid("9f6dbb95-0e1b-49af-a11c-c021ba063314"), 39 },
                    { new Guid("a7cabcf3-0266-441e-a403-8b2db7c70a55"), 61 },
                    { new Guid("a908d2d6-a565-4b87-93b3-b58323ac3336"), 135 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("030e9245-e21f-4e1d-a56f-37fa68f07684"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("5401ff8e-81ad-4086-b222-520690c8e0f2"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9f6dbb95-0e1b-49af-a11c-c021ba063314"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("a7cabcf3-0266-441e-a403-8b2db7c70a55"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("a908d2d6-a565-4b87-93b3-b58323ac3336"));

            migrationBuilder.DropColumn(
                name: "AwayTeam",
                table: "Bets");

            migrationBuilder.DropColumn(
                name: "HomeTeam",
                table: "Bets");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("3af175e8-2dd8-4c00-b075-41ab5bd7e935"), 39 },
                    { new Guid("4d324b2a-5854-4682-a5e3-52c91a75560f"), 140 },
                    { new Guid("bd123b04-75bf-41e9-8f4b-cc31bd7a0021"), 135 },
                    { new Guid("d37e94cc-046f-4d3e-a54a-b9b2faed9b19"), 61 },
                    { new Guid("d930c2fc-fdba-4be1-8117-d0bbed4a4193"), 78 }
                });
        }
    }
}
