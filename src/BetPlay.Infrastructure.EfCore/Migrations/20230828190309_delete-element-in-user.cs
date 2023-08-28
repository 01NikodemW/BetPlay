using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class deleteelementinuser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Users");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Users",
                newName: "Auth0Id");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("1f1565eb-8754-4666-954c-99c922ba9370"), 39 },
                    { new Guid("3b5456f7-1fbe-4415-81ed-a29017bdeffe"), 140 },
                    { new Guid("4d2d5ee0-e9bf-4d24-bb43-f0828eae641a"), 61 },
                    { new Guid("799818b6-a897-41fe-acc4-688e06a820da"), 78 },
                    { new Guid("fc79e32c-fb93-47fc-b603-cdb3d5f04ab4"), 135 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("1f1565eb-8754-4666-954c-99c922ba9370"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("3b5456f7-1fbe-4415-81ed-a29017bdeffe"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("4d2d5ee0-e9bf-4d24-bb43-f0828eae641a"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("799818b6-a897-41fe-acc4-688e06a820da"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("fc79e32c-fb93-47fc-b603-cdb3d5f04ab4"));

            migrationBuilder.RenameColumn(
                name: "Auth0Id",
                table: "Users",
                newName: "Surname");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Users",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

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
    }
}
