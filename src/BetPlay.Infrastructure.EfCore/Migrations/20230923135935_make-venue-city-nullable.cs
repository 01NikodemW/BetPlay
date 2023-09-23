using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class makevenuecitynullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "City",
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
                    { new Guid("249a87f0-31e3-42f9-acd9-b94b335366e9"), 78 },
                    { new Guid("3edcd032-4df5-4ade-babc-00e93132031d"), 61 },
                    { new Guid("579f428f-56b3-44d0-b47a-32b93c98b0dc"), 39 },
                    { new Guid("820514e2-a88a-44c7-aa81-6098903d5a65"), 140 },
                    { new Guid("f38ec86e-4bcd-47ce-806f-f25edecfb6aa"), 135 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("249a87f0-31e3-42f9-acd9-b94b335366e9"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("3edcd032-4df5-4ade-babc-00e93132031d"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("579f428f-56b3-44d0-b47a-32b93c98b0dc"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("820514e2-a88a-44c7-aa81-6098903d5a65"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("f38ec86e-4bcd-47ce-806f-f25edecfb6aa"));

            migrationBuilder.AlterColumn<string>(
                name: "City",
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
                    { new Guid("14b2036d-2820-4f7d-88d5-e0560b53ba0c"), 140 },
                    { new Guid("2dab1251-e6c0-4f77-989e-4e953fe3b4e8"), 135 },
                    { new Guid("5e16fac4-a9ae-4597-acf8-ce3f2f5bf5bf"), 61 },
                    { new Guid("754151d0-4780-4a58-ac3d-9d594d2108b1"), 39 },
                    { new Guid("7cab0c14-759e-4e57-9f5d-bfed13bfd319"), 78 }
                });
        }
    }
}
