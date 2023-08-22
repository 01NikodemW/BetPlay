using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class adduserandbets : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateTable(
                name: "Bets",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Value = table.Column<string>(type: "TEXT", nullable: false),
                    Odd = table.Column<float>(type: "REAL", nullable: false),
                    FixtureId = table.Column<int>(type: "INTEGER", nullable: false),
                    Status = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Surname = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BettingSlips",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    TotalStake = table.Column<float>(type: "REAL", nullable: false),
                    TotalOdds = table.Column<float>(type: "REAL", nullable: false),
                    Status = table.Column<int>(type: "INTEGER", nullable: false),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    UserId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BettingSlips", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BettingSlips_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BettingSlipBets",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    BettingSlipId = table.Column<Guid>(type: "TEXT", nullable: false),
                    BetId = table.Column<Guid>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BettingSlipBets", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BettingSlipBets_Bets_BetId",
                        column: x => x.BetId,
                        principalTable: "Bets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BettingSlipBets_BettingSlips_BettingSlipId",
                        column: x => x.BettingSlipId,
                        principalTable: "BettingSlips",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_BettingSlipBets_BetId",
                table: "BettingSlipBets",
                column: "BetId");

            migrationBuilder.CreateIndex(
                name: "IX_BettingSlipBets_BettingSlipId",
                table: "BettingSlipBets",
                column: "BettingSlipId");

            migrationBuilder.CreateIndex(
                name: "IX_BettingSlips_UserId",
                table: "BettingSlips",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BettingSlipBets");

            migrationBuilder.DropTable(
                name: "Bets");

            migrationBuilder.DropTable(
                name: "BettingSlips");

            migrationBuilder.DropTable(
                name: "Users");

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
                    { new Guid("65792334-171c-4cdb-b537-49deac533510"), 39 },
                    { new Guid("8542f22b-3f52-48cf-83b2-cb258e0b6d12"), 140 },
                    { new Guid("86cd1111-7fa4-44d7-bf19-b44def85dc06"), 78 },
                    { new Guid("bc67e994-1845-4f2d-bad2-9b67ce3fdafa"), 61 },
                    { new Guid("dabaa940-3324-4465-9929-eda4c8c0f388"), 135 }
                });
        }
    }
}
