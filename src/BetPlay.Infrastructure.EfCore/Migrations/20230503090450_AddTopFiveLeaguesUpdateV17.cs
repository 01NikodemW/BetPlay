using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV17 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("54fef358-b850-4743-8c96-9997ac093dfd"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("6b673bce-cd6d-4fe5-9ae5-1fb9ccebe576"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("875fac56-37c2-4822-9435-57f7b08fc26c"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("8a1d98f2-43a6-4786-a63e-defd1056784f"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("f0d2fa63-75eb-4b7f-a6d3-23433084f54e"));

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "Teams",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "Teams",
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
                    { new Guid("54fef358-b850-4743-8c96-9997ac093dfd"), 39 },
                    { new Guid("6b673bce-cd6d-4fe5-9ae5-1fb9ccebe576"), 61 },
                    { new Guid("875fac56-37c2-4822-9435-57f7b08fc26c"), 135 },
                    { new Guid("8a1d98f2-43a6-4786-a63e-defd1056784f"), 140 },
                    { new Guid("f0d2fa63-75eb-4b7f-a6d3-23433084f54e"), 78 }
                });
        }
    }
}
