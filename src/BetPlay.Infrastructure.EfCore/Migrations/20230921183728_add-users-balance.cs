using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class addusersbalance : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<float>(
                name: "Balance",
                table: "Users",
                type: "REAL",
                nullable: false,
                defaultValue: 0f);

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "Balance",
                table: "Users");

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
    }
}
