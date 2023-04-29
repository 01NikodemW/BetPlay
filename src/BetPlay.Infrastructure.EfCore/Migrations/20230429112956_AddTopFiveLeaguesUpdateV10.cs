using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV10 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teams_Venues_VenueId",
                table: "Teams");

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("3236f7f3-4273-42a6-988c-5b0c8666becf"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("638a020d-554e-4c40-a792-f4eca0b5139c"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("9dc2d1bc-e18f-44d0-9289-bdaccc3a00b1"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("b4bc3bc3-af36-4f9c-956d-8cae3173bf6b"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ba662de4-d543-4709-91d4-89128dbb705e"));

            migrationBuilder.DropColumn(
                name: "Winner",
                table: "Teams");

            migrationBuilder.DropColumn(
                name: "Flag",
                table: "Leagues");

            migrationBuilder.DropColumn(
                name: "Round",
                table: "Leagues");

            migrationBuilder.DropColumn(
                name: "Season",
                table: "Leagues");

            migrationBuilder.AlterColumn<Guid>(
                name: "VenueId",
                table: "Teams",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<bool>(
                name: "National",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: false,
                oldClrType: typeof(bool),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "Founded",
                table: "Teams",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Country",
                table: "Teams",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "Teams",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "FixtureLeagues",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    LeagueId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Round = table.Column<string>(type: "TEXT", nullable: false),
                    Season = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FixtureLeagues", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FixtureLeagues_Leagues_LeagueId",
                        column: x => x.LeagueId,
                        principalTable: "Leagues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Fixtures",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    FixtureId = table.Column<int>(type: "INTEGER", nullable: false),
                    Referee = table.Column<string>(type: "TEXT", nullable: false),
                    Timezone = table.Column<string>(type: "TEXT", nullable: false),
                    Date = table.Column<string>(type: "TEXT", nullable: false),
                    Timestamp = table.Column<int>(type: "INTEGER", nullable: false),
                    Long = table.Column<string>(type: "TEXT", nullable: false),
                    Short = table.Column<string>(type: "TEXT", nullable: false),
                    Elapsed = table.Column<int>(type: "INTEGER", nullable: true),
                    VenueId = table.Column<Guid>(type: "TEXT", nullable: false),
                    FixtureLeagueId = table.Column<Guid>(type: "TEXT", nullable: false),
                    HomeName = table.Column<string>(type: "TEXT", nullable: false),
                    AwayName = table.Column<string>(type: "TEXT", nullable: false),
                    HomeLogo = table.Column<string>(type: "TEXT", nullable: false),
                    AwayLogo = table.Column<string>(type: "TEXT", nullable: false),
                    GoalsHomeTeam = table.Column<int>(type: "INTEGER", nullable: true),
                    GoalsAwayTeam = table.Column<int>(type: "INTEGER", nullable: true),
                    UpdateDate = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fixtures", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Fixtures_FixtureLeagues_FixtureLeagueId",
                        column: x => x.FixtureLeagueId,
                        principalTable: "FixtureLeagues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Fixtures_Venues_VenueId",
                        column: x => x.VenueId,
                        principalTable: "Venues",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_FixtureLeagues_LeagueId",
                table: "FixtureLeagues",
                column: "LeagueId");

            migrationBuilder.CreateIndex(
                name: "IX_Fixtures_FixtureLeagueId",
                table: "Fixtures",
                column: "FixtureLeagueId");

            migrationBuilder.CreateIndex(
                name: "IX_Fixtures_VenueId",
                table: "Fixtures",
                column: "VenueId");

            migrationBuilder.AddForeignKey(
                name: "FK_Teams_Venues_VenueId",
                table: "Teams",
                column: "VenueId",
                principalTable: "Venues",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Teams_Venues_VenueId",
                table: "Teams");

            migrationBuilder.DropTable(
                name: "Fixtures");

            migrationBuilder.DropTable(
                name: "FixtureLeagues");

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

            migrationBuilder.AlterColumn<Guid>(
                name: "VenueId",
                table: "Teams",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<bool>(
                name: "National",
                table: "Teams",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<int>(
                name: "Founded",
                table: "Teams",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AlterColumn<string>(
                name: "Country",
                table: "Teams",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<string>(
                name: "Code",
                table: "Teams",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddColumn<bool>(
                name: "Winner",
                table: "Teams",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Flag",
                table: "Leagues",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Round",
                table: "Leagues",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Season",
                table: "Leagues",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("3236f7f3-4273-42a6-988c-5b0c8666becf"), 78 },
                    { new Guid("638a020d-554e-4c40-a792-f4eca0b5139c"), 39 },
                    { new Guid("9dc2d1bc-e18f-44d0-9289-bdaccc3a00b1"), 135 },
                    { new Guid("b4bc3bc3-af36-4f9c-956d-8cae3173bf6b"), 140 },
                    { new Guid("ba662de4-d543-4709-91d4-89128dbb705e"), 61 }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Teams_Venues_VenueId",
                table: "Teams",
                column: "VenueId",
                principalTable: "Venues",
                principalColumn: "Id");
        }
    }
}
