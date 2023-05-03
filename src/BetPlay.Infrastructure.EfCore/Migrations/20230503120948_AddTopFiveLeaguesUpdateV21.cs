using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV21 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Event_Fixtures_FixtureId1",
                table: "Event");

            migrationBuilder.DropIndex(
                name: "IX_Event_FixtureId1",
                table: "Event");

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
                name: "FixtureId1",
                table: "Event");

            migrationBuilder.AlterColumn<Guid>(
                name: "FixtureId",
                table: "Event",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("65792334-171c-4cdb-b537-49deac533510"), 39 },
                    { new Guid("8542f22b-3f52-48cf-83b2-cb258e0b6d12"), 140 },
                    { new Guid("86cd1111-7fa4-44d7-bf19-b44def85dc06"), 78 },
                    { new Guid("bc67e994-1845-4f2d-bad2-9b67ce3fdafa"), 61 },
                    { new Guid("dabaa940-3324-4465-9929-eda4c8c0f388"), 135 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Event_FixtureId",
                table: "Event",
                column: "FixtureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Fixtures_FixtureId",
                table: "Event",
                column: "FixtureId",
                principalTable: "Fixtures",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Event_Fixtures_FixtureId",
                table: "Event");

            migrationBuilder.DropIndex(
                name: "IX_Event_FixtureId",
                table: "Event");

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("65792334-171c-4cdb-b537-49deac533510"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("8542f22b-3f52-48cf-83b2-cb258e0b6d12"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("86cd1111-7fa4-44d7-bf19-b44def85dc06"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("bc67e994-1845-4f2d-bad2-9b67ce3fdafa"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("dabaa940-3324-4465-9929-eda4c8c0f388"));

            migrationBuilder.AlterColumn<int>(
                name: "FixtureId",
                table: "Event",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AddColumn<Guid>(
                name: "FixtureId1",
                table: "Event",
                type: "TEXT",
                nullable: true);

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

            migrationBuilder.CreateIndex(
                name: "IX_Event_FixtureId1",
                table: "Event",
                column: "FixtureId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Event_Fixtures_FixtureId1",
                table: "Event",
                column: "FixtureId1",
                principalTable: "Fixtures",
                principalColumn: "Id");
        }
    }
}
