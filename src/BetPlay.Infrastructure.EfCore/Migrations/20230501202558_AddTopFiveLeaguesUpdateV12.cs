using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV12 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("375e3db6-971c-40c5-b5aa-7b1129df4fb7"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("939f27c2-8ea9-4e9e-9a86-3933e00d8b6c"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("a1e637fe-472f-4fcd-831b-9af6a6091384"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("a87af178-bf0f-4788-9cfc-443b8176d020"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("bf324150-d712-4a67-ae87-207902e27eaa"));

            migrationBuilder.AlterColumn<string>(
                name: "Flag",
                table: "Countries",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "Countries",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("794e8f3a-a222-4dee-b151-61faca42b280"), 135 },
                    { new Guid("b96d711f-0eeb-4e71-9f54-059254b41e13"), 61 },
                    { new Guid("cd75b509-07c6-493e-b92f-4a5efa6371f8"), 78 },
                    { new Guid("ecd5ba91-e806-4f30-b531-5171508e8dfe"), 140 },
                    { new Guid("f8794dfd-291c-4d49-9f7c-a6a48c084c6b"), 39 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("794e8f3a-a222-4dee-b151-61faca42b280"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("b96d711f-0eeb-4e71-9f54-059254b41e13"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("cd75b509-07c6-493e-b92f-4a5efa6371f8"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ecd5ba91-e806-4f30-b531-5171508e8dfe"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("f8794dfd-291c-4d49-9f7c-a6a48c084c6b"));

            migrationBuilder.AlterColumn<string>(
                name: "Flag",
                table: "Countries",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "Countries",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("375e3db6-971c-40c5-b5aa-7b1129df4fb7"), 78 },
                    { new Guid("939f27c2-8ea9-4e9e-9a86-3933e00d8b6c"), 140 },
                    { new Guid("a1e637fe-472f-4fcd-831b-9af6a6091384"), 61 },
                    { new Guid("a87af178-bf0f-4788-9cfc-443b8176d020"), 39 },
                    { new Guid("bf324150-d712-4a67-ae87-207902e27eaa"), 135 }
                });
        }
    }
}
