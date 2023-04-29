using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("2ee4788d-a8dc-4cc2-9ba3-6377f7f77235"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("58086b78-3cb3-436e-965e-417568ca98d0"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9c9d39f1-8523-4cb3-b157-8f1c5fb96ff2"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("bde1e207-d585-44bb-9149-49371ff458e2"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("fb44fc42-6cd5-4b63-a73b-9a05a42edc14"));

            migrationBuilder.AlterColumn<string>(
                name: "Flag",
                table: "Leagues",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("3236f7f3-4273-42a6-988c-5b0c8666becf"), 78 },
                    { new Guid("638a020d-554e-4c40-a792-f4eca0b5139c"), 39 },
                    { new Guid("9dc2d1bc-e18f-44d0-9289-bdaccc3a00b1"), 135 },
                    { new Guid("b4bc3bc3-af36-4f9c-956d-8cae3173bf6b"), 140 },
                    { new Guid("ba662de4-d543-4709-91d4-89128dbb705e"), 61 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("3236f7f3-4273-42a6-988c-5b0c8666becf"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("638a020d-554e-4c40-a792-f4eca0b5139c"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9dc2d1bc-e18f-44d0-9289-bdaccc3a00b1"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("b4bc3bc3-af36-4f9c-956d-8cae3173bf6b"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ba662de4-d543-4709-91d4-89128dbb705e"));

            migrationBuilder.AlterColumn<string>(
                name: "Flag",
                table: "Leagues",
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
                    { new Guid("2ee4788d-a8dc-4cc2-9ba3-6377f7f77235"), 78 },
                    { new Guid("58086b78-3cb3-436e-965e-417568ca98d0"), 140 },
                    { new Guid("9c9d39f1-8523-4cb3-b157-8f1c5fb96ff2"), 61 },
                    { new Guid("bde1e207-d585-44bb-9149-49371ff458e2"), 135 },
                    { new Guid("fb44fc42-6cd5-4b63-a73b-9a05a42edc14"), 39 }
                });
        }
    }
}
