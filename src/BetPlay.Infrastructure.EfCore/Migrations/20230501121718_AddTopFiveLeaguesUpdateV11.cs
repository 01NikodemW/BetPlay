using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Venues_VenueId",
                table: "Fixtures");

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("0c65b1c7-8263-436d-8552-0ef860d61dc1"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("637c7203-bdde-4cb9-a591-dd0599241e0b"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9830df4c-53da-4f58-8315-f833fc68c91e"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("a7e2148c-4edb-4229-8d0f-2f0da10dfdbf"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ee9ab077-176b-4515-9bd5-3274e0e9906b"));

            migrationBuilder.AlterColumn<string>(
                name: "Address",
                table: "Venues",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<Guid>(
                name: "VenueId",
                table: "Fixtures",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "Referee",
                table: "Fixtures",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Venues_VenueId",
                table: "Fixtures",
                column: "VenueId",
                principalTable: "Venues",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Venues_VenueId",
                table: "Fixtures");

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
                name: "Address",
                table: "Venues",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "VenueId",
                table: "Fixtures",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Referee",
                table: "Fixtures",
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
                    { new Guid("0c65b1c7-8263-436d-8552-0ef860d61dc1"), 39 },
                    { new Guid("637c7203-bdde-4cb9-a591-dd0599241e0b"), 61 },
                    { new Guid("9830df4c-53da-4f58-8315-f833fc68c91e"), 78 },
                    { new Guid("a7e2148c-4edb-4229-8d0f-2f0da10dfdbf"), 140 },
                    { new Guid("ee9ab077-176b-4515-9bd5-3274e0e9906b"), 135 }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Venues_VenueId",
                table: "Fixtures",
                column: "VenueId",
                principalTable: "Venues",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
