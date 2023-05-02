using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV13 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("794e8f3a-a222-4dee-b151-61faca42b280"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("b96d711f-0eeb-4e71-9f54-059254b41e13"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("cd75b509-07c6-493e-b92f-4a5efa6371f8"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ecd5ba91-e806-4f30-b531-5171508e8dfe"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("f8794dfd-291c-4d49-9f7c-a6a48c084c6b"));

            migrationBuilder.AddColumn<Guid>(
                name: "ScoreId",
                table: "Fixtures",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateTable(
                name: "Scores",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    HalftimeHome = table.Column<int>(type: "INTEGER", nullable: true),
                    HalftimeAway = table.Column<int>(type: "INTEGER", nullable: true),
                    FulltimeHome = table.Column<int>(type: "INTEGER", nullable: true),
                    FulltimeAway = table.Column<int>(type: "INTEGER", nullable: true),
                    ExtratimeHome = table.Column<int>(type: "INTEGER", nullable: true),
                    ExtratimeAway = table.Column<int>(type: "INTEGER", nullable: true),
                    PenaltyHome = table.Column<int>(type: "INTEGER", nullable: true),
                    PenaltyAway = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Scores", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("1bd2a72d-d1be-4436-8c09-8cb498bd280c"), 140 },
                    { new Guid("9b74cd34-4271-4a1e-abac-7705c6070242"), 78 },
                    { new Guid("bdcc3995-1f6c-432f-908d-fc9a82923995"), 39 },
                    { new Guid("eb770b36-a99a-4ce2-b84c-2b5af9d398c9"), 135 },
                    { new Guid("f7e9820d-2552-4b44-8e5a-d536402e4c49"), 61 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Fixtures_ScoreId",
                table: "Fixtures",
                column: "ScoreId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Scores_ScoreId",
                table: "Fixtures",
                column: "ScoreId",
                principalTable: "Scores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Scores_ScoreId",
                table: "Fixtures");

            migrationBuilder.DropTable(
                name: "Scores");

            migrationBuilder.DropIndex(
                name: "IX_Fixtures_ScoreId",
                table: "Fixtures");

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("1bd2a72d-d1be-4436-8c09-8cb498bd280c"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9b74cd34-4271-4a1e-abac-7705c6070242"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("bdcc3995-1f6c-432f-908d-fc9a82923995"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("eb770b36-a99a-4ce2-b84c-2b5af9d398c9"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("f7e9820d-2552-4b44-8e5a-d536402e4c49"));

            migrationBuilder.DropColumn(
                name: "ScoreId",
                table: "Fixtures");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("794e8f3a-a222-4dee-b151-61faca42b280"), 135 },
                    { new Guid("b96d711f-0eeb-4e71-9f54-059254b41e13"), 61 },
                    { new Guid("cd75b509-07c6-493e-b92f-4a5efa6371f8"), 78 },
                    { new Guid("ecd5ba91-e806-4f30-b531-5171508e8dfe"), 140 },
                    { new Guid("f8794dfd-291c-4d49-9f7c-a6a48c084c6b"), 39 }
                });
        }
    }
}
