using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV19 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Event_Teams_TeamId",
                table: "Event");

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

            migrationBuilder.AlterColumn<Guid>(
                name: "TeamId",
                table: "Event",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("8e8d04c8-4d64-4eb1-b76a-ba8876e3b0ec"), 135 },
                    { new Guid("9507fa77-5f43-4428-a5de-c2c484bb9055"), 140 },
                    { new Guid("dc6a0d59-07d5-4ef7-8279-6a8b864a4671"), 39 },
                    { new Guid("e0218581-aca7-4758-bb23-520fe0484ca3"), 61 },
                    { new Guid("f35bb162-c40e-49c9-8eeb-821567c338ff"), 78 }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Teams_TeamId",
                table: "Event",
                column: "TeamId",
                principalTable: "Teams",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Event_Teams_TeamId",
                table: "Event");

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("8e8d04c8-4d64-4eb1-b76a-ba8876e3b0ec"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9507fa77-5f43-4428-a5de-c2c484bb9055"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("dc6a0d59-07d5-4ef7-8279-6a8b864a4671"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("e0218581-aca7-4758-bb23-520fe0484ca3"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("f35bb162-c40e-49c9-8eeb-821567c338ff"));

            migrationBuilder.AlterColumn<Guid>(
                name: "TeamId",
                table: "Event",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Teams_TeamId",
                table: "Event",
                column: "TeamId",
                principalTable: "Teams",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
