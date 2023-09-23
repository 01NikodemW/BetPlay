using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class makevenuesurfacenullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<string>(
                name: "Surface",
                table: "Venues",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("14b2036d-2820-4f7d-88d5-e0560b53ba0c"), 140 },
                    { new Guid("2dab1251-e6c0-4f77-989e-4e953fe3b4e8"), 135 },
                    { new Guid("5e16fac4-a9ae-4597-acf8-ce3f2f5bf5bf"), 61 },
                    { new Guid("754151d0-4780-4a58-ac3d-9d594d2108b1"), 39 },
                    { new Guid("7cab0c14-759e-4e57-9f5d-bfed13bfd319"), 78 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("14b2036d-2820-4f7d-88d5-e0560b53ba0c"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("2dab1251-e6c0-4f77-989e-4e953fe3b4e8"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("5e16fac4-a9ae-4597-acf8-ce3f2f5bf5bf"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("754151d0-4780-4a58-ac3d-9d594d2108b1"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("7cab0c14-759e-4e57-9f5d-bfed13bfd319"));

            migrationBuilder.AlterColumn<string>(
                name: "Surface",
                table: "Venues",
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
                    { new Guid("030e9245-e21f-4e1d-a56f-37fa68f07684"), 78 },
                    { new Guid("5401ff8e-81ad-4086-b222-520690c8e0f2"), 140 },
                    { new Guid("9f6dbb95-0e1b-49af-a11c-c021ba063314"), 39 },
                    { new Guid("a7cabcf3-0266-441e-a403-8b2db7c70a55"), 61 },
                    { new Guid("a908d2d6-a565-4b87-93b3-b58323ac3336"), 135 }
                });
        }
    }
}
