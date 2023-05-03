using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV18 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("01f61439-1fbf-45e8-af52-51f9d2b4c5f4"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("33570126-a81b-4820-aeaa-0be6b7ff38ac"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("3b859882-330c-4f30-baf3-18eea58cb7d5"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("d5a8ad52-ead7-46ac-995a-98f9950b9824"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("f3851ea9-885f-4084-8c36-237a8d9e6903"));

            migrationBuilder.AlterColumn<int>(
                name: "Founded",
                table: "Teams",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("270d50be-960b-4928-9b3f-3d82e724e8eb"), 61 },
                    { new Guid("592b8dc5-e457-410a-a1ef-20b8871ab60e"), 135 },
                    { new Guid("7f54ec86-1929-4fbb-8402-e7e4d6da33c6"), 140 },
                    { new Guid("9702bdca-d5c5-4251-9242-27ced52b40b6"), 39 },
                    { new Guid("cde69d19-b577-46de-8aa9-83f4de995c11"), 78 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("270d50be-960b-4928-9b3f-3d82e724e8eb"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("592b8dc5-e457-410a-a1ef-20b8871ab60e"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("7f54ec86-1929-4fbb-8402-e7e4d6da33c6"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9702bdca-d5c5-4251-9242-27ced52b40b6"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("cde69d19-b577-46de-8aa9-83f4de995c11"));

            migrationBuilder.AlterColumn<int>(
                name: "Founded",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("01f61439-1fbf-45e8-af52-51f9d2b4c5f4"), 78 },
                    { new Guid("33570126-a81b-4820-aeaa-0be6b7ff38ac"), 61 },
                    { new Guid("3b859882-330c-4f30-baf3-18eea58cb7d5"), 140 },
                    { new Guid("d5a8ad52-ead7-46ac-995a-98f9950b9824"), 135 },
                    { new Guid("f3851ea9-885f-4084-8c36-237a8d9e6903"), 39 }
                });
        }
    }
}
