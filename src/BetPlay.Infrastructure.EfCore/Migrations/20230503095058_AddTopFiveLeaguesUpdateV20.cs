using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV20 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Event_Teams_TeamId",
                table: "Event");

            migrationBuilder.DropIndex(
                name: "IX_Event_TeamId",
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

            migrationBuilder.DropColumn(
                name: "TeamId",
                table: "Event");

            migrationBuilder.AddColumn<string>(
                name: "TeamName",
                table: "Event",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("1cbb57ae-0be4-4360-a6d0-699a6dce97d8"), 39 },
                    { new Guid("a1486cc6-ab08-4639-b9cc-d595a52c695a"), 140 },
                    { new Guid("ee263a4b-07bc-42ae-a838-a6ceaee319ef"), 61 },
                    { new Guid("ef79c2fd-04ff-4a01-9a9a-215a16b2ec80"), 78 },
                    { new Guid("fe82c512-2477-4272-a335-c7c59aa5c159"), 135 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("1cbb57ae-0be4-4360-a6d0-699a6dce97d8"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("a1486cc6-ab08-4639-b9cc-d595a52c695a"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ee263a4b-07bc-42ae-a838-a6ceaee319ef"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ef79c2fd-04ff-4a01-9a9a-215a16b2ec80"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("fe82c512-2477-4272-a335-c7c59aa5c159"));

            migrationBuilder.DropColumn(
                name: "TeamName",
                table: "Event");

            migrationBuilder.AddColumn<Guid>(
                name: "TeamId",
                table: "Event",
                type: "TEXT",
                nullable: true);

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

            migrationBuilder.CreateIndex(
                name: "IX_Event_TeamId",
                table: "Event",
                column: "TeamId");

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Teams_TeamId",
                table: "Event",
                column: "TeamId",
                principalTable: "Teams",
                principalColumn: "Id");
        }
    }
}
