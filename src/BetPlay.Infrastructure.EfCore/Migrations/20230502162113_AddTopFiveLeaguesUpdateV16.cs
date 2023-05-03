using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV16 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("00c01cdc-6f2b-481e-acc8-eae17002e854"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("0f0c6ed0-eb0b-489a-86fe-91fb26afd506"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("68853aaa-65f1-4bc9-8b21-77b69ea0959e"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("db56bed9-cb61-4d34-bb78-92918e352da6"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("dcba6ae4-18d2-4307-9b6b-0326b9f7eb82"));

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    FixtureId = table.Column<int>(type: "INTEGER", nullable: false),
                    Elapsed = table.Column<int>(type: "INTEGER", nullable: false),
                    Extra = table.Column<int>(type: "INTEGER", nullable: true),
                    TeamId = table.Column<Guid>(type: "TEXT", nullable: false),
                    PlayerId = table.Column<int>(type: "INTEGER", nullable: true),
                    PlayerName = table.Column<string>(type: "TEXT", nullable: true),
                    AssistId = table.Column<int>(type: "INTEGER", nullable: true),
                    AssistName = table.Column<string>(type: "TEXT", nullable: true),
                    Type = table.Column<string>(type: "TEXT", nullable: false),
                    Detail = table.Column<string>(type: "TEXT", nullable: false),
                    Comments = table.Column<string>(type: "TEXT", nullable: true),
                    FixtureId1 = table.Column<Guid>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Event_Fixtures_FixtureId1",
                        column: x => x.FixtureId1,
                        principalTable: "Fixtures",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Event_Teams_TeamId",
                        column: x => x.TeamId,
                        principalTable: "Teams",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_Event_FixtureId1",
                table: "Event",
                column: "FixtureId1");

            migrationBuilder.CreateIndex(
                name: "IX_Event_TeamId",
                table: "Event",
                column: "TeamId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Event");

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

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("00c01cdc-6f2b-481e-acc8-eae17002e854"), 39 },
                    { new Guid("0f0c6ed0-eb0b-489a-86fe-91fb26afd506"), 61 },
                    { new Guid("68853aaa-65f1-4bc9-8b21-77b69ea0959e"), 140 },
                    { new Guid("db56bed9-cb61-4d34-bb78-92918e352da6"), 78 },
                    { new Guid("dcba6ae4-18d2-4307-9b6b-0326b9f7eb82"), 135 }
                });
        }
    }
}
