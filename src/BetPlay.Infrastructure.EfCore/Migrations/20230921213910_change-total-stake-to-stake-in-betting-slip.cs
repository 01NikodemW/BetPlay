using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class changetotalstaketostakeinbettingslip : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("2d0bc04d-f4e1-43c7-8853-4d7ecd2a81d5"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("61d1ca68-4cdb-49c1-8ff6-a73c96a8f7cd"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("7e06f45d-7f81-43ec-91ab-617fe278e4e4"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("b73fc2b0-9c7a-4dcd-830e-e029cda103f2"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("d94cb024-6d45-4c25-b92b-090aa041c721"));

            migrationBuilder.RenameColumn(
                name: "TotalStake",
                table: "BettingSlips",
                newName: "Stake");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameColumn(
                name: "Stake",
                table: "BettingSlips",
                newName: "TotalStake");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("2d0bc04d-f4e1-43c7-8853-4d7ecd2a81d5"), 39 },
                    { new Guid("61d1ca68-4cdb-49c1-8ff6-a73c96a8f7cd"), 135 },
                    { new Guid("7e06f45d-7f81-43ec-91ab-617fe278e4e4"), 140 },
                    { new Guid("b73fc2b0-9c7a-4dcd-830e-e029cda103f2"), 61 },
                    { new Guid("d94cb024-6d45-4c25-b92b-090aa041c721"), 78 }
                });
        }
    }
}
