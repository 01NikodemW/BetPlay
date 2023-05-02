using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV15 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("25d9210f-5ec1-4fce-8ad4-0255109eefcf"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("40b92a91-9535-4084-8374-be5616f28358"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("533829f8-80b4-4955-98e7-38382141171f"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("93f1c2dc-8b6d-4876-a505-37a4c19c3804"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ce9c3212-69eb-43d9-b294-5e82f71843d9"));

            migrationBuilder.AddColumn<int>(
                name: "FixtureId",
                table: "Scores",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("00c01cdc-6f2b-481e-acc8-eae17002e854"), 39 },
                    { new Guid("0f0c6ed0-eb0b-489a-86fe-91fb26afd506"), 61 },
                    { new Guid("68853aaa-65f1-4bc9-8b21-77b69ea0959e"), 140 },
                    { new Guid("db56bed9-cb61-4d34-bb78-92918e352da6"), 78 },
                    { new Guid("dcba6ae4-18d2-4307-9b6b-0326b9f7eb82"), 135 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("00c01cdc-6f2b-481e-acc8-eae17002e854"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("0f0c6ed0-eb0b-489a-86fe-91fb26afd506"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("68853aaa-65f1-4bc9-8b21-77b69ea0959e"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("db56bed9-cb61-4d34-bb78-92918e352da6"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("dcba6ae4-18d2-4307-9b6b-0326b9f7eb82"));

            migrationBuilder.DropColumn(
                name: "FixtureId",
                table: "Scores");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("25d9210f-5ec1-4fce-8ad4-0255109eefcf"), 135 },
                    { new Guid("40b92a91-9535-4084-8374-be5616f28358"), 140 },
                    { new Guid("533829f8-80b4-4955-98e7-38382141171f"), 39 },
                    { new Guid("93f1c2dc-8b6d-4876-a505-37a4c19c3804"), 61 },
                    { new Guid("ce9c3212-69eb-43d9-b294-5e82f71843d9"), 78 }
                });
        }
    }
}
