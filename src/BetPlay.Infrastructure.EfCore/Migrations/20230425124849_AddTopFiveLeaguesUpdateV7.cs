using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV7 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdateDate",
                table: "Countries",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("0ec1ebb0-6fd6-49f7-956c-667fe04f4f78"), 39 },
                    { new Guid("43c613b7-ac78-4a8a-8812-6add2d05db47"), 61 },
                    { new Guid("804696ae-6177-4e92-aa08-84e414adfb9a"), 135 },
                    { new Guid("d1271715-1fe0-4edb-b061-aa3197cab24f"), 140 },
                    { new Guid("f3e89828-54e7-4397-b539-e43c84f09964"), 78 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("0ec1ebb0-6fd6-49f7-956c-667fe04f4f78"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("43c613b7-ac78-4a8a-8812-6add2d05db47"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("804696ae-6177-4e92-aa08-84e414adfb9a"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("d1271715-1fe0-4edb-b061-aa3197cab24f"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("f3e89828-54e7-4397-b539-e43c84f09964"));

            migrationBuilder.DropColumn(
                name: "UpdateDate",
                table: "Countries");

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
        }
    }
}
