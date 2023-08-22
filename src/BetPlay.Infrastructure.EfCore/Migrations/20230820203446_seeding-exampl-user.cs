using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class seedingexampluser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("01727197-0f7f-4f4a-a54f-353b891c2e46"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("0db010b1-9687-417d-94ea-e158dbf316cb"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("1adb3f62-e9a2-48c8-9b85-20099712c69c"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("38cf973a-fefe-4bb7-9309-c9f3df1463b4"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("86283507-b1a9-4f5f-adc8-01840dbf5f52"));

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("8c4174ac-ca3a-40f5-8ce6-d4279f7e53bb"), 39 },
                    { new Guid("9c97de7f-85e4-4697-99ca-8bc3c0819437"), 135 },
                    { new Guid("a5f5e2f7-9606-4cd1-b0ae-7d8d26202f71"), 140 },
                    { new Guid("acd08af2-130b-4f48-90aa-1b3e927d0ada"), 78 },
                    { new Guid("ee97b77c-25cc-490d-8ef6-085c4c915c02"), 61 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "Name", "Password", "Surname" },
                values: new object[] { new Guid("d0df033d-4ff4-426b-a219-92641baf8fe4"), "user@gmail.com", "User", "@Haslo123", "User" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("8c4174ac-ca3a-40f5-8ce6-d4279f7e53bb"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9c97de7f-85e4-4697-99ca-8bc3c0819437"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("a5f5e2f7-9606-4cd1-b0ae-7d8d26202f71"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("acd08af2-130b-4f48-90aa-1b3e927d0ada"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ee97b77c-25cc-490d-8ef6-085c4c915c02"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("d0df033d-4ff4-426b-a219-92641baf8fe4"));

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("01727197-0f7f-4f4a-a54f-353b891c2e46"), 135 },
                    { new Guid("0db010b1-9687-417d-94ea-e158dbf316cb"), 78 },
                    { new Guid("1adb3f62-e9a2-48c8-9b85-20099712c69c"), 39 },
                    { new Guid("38cf973a-fefe-4bb7-9309-c9f3df1463b4"), 61 },
                    { new Guid("86283507-b1a9-4f5f-adc8-01840dbf5f52"), 140 }
                });
        }
    }
}
