using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    /// <inheritdoc />
    public partial class AddTopFiveLeaguesUpdateV14 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Scores_ScoreId",
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

            migrationBuilder.AlterColumn<Guid>(
                name: "ScoreId",
                table: "Fixtures",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.InsertData(
                table: "TrackedLeagues",
                columns: new[] { "Id", "LeagueId" },
                values: new object[,]
                {
                    { new Guid("25d9210f-5ec1-4fce-8ad4-0255109eefcf"), 135 },
                    { new Guid("40b92a91-9535-4084-8374-be5616f28358"), 140 },
                    { new Guid("533829f8-80b4-4955-98e7-38382141171f"), 39 },
                    { new Guid("93f1c2dc-8b6d-4876-a505-37a4c19c3804"), 61 },
                    { new Guid("ce9c3212-69eb-43d9-b294-5e82f71843d9"), 78 }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Scores_ScoreId",
                table: "Fixtures",
                column: "ScoreId",
                principalTable: "Scores",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fixtures_Scores_ScoreId",
                table: "Fixtures");

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("25d9210f-5ec1-4fce-8ad4-0255109eefcf"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("40b92a91-9535-4084-8374-be5616f28358"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("533829f8-80b4-4955-98e7-38382141171f"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("93f1c2dc-8b6d-4876-a505-37a4c19c3804"));

            migrationBuilder.DeleteData(
                table: "TrackedLeagues",
                keyColumn: "Id",
                keyValue: new Guid("ce9c3212-69eb-43d9-b294-5e82f71843d9"));

            migrationBuilder.AlterColumn<Guid>(
                name: "ScoreId",
                table: "Fixtures",
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
                    { new Guid("1bd2a72d-d1be-4436-8c09-8cb498bd280c"), 140 },
                    { new Guid("9b74cd34-4271-4a1e-abac-7705c6070242"), 78 },
                    { new Guid("bdcc3995-1f6c-432f-908d-fc9a82923995"), 39 },
                    { new Guid("eb770b36-a99a-4ce2-b84c-2b5af9d398c9"), 135 },
                    { new Guid("f7e9820d-2552-4b44-8e5a-d536402e4c49"), 61 }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Fixtures_Scores_ScoreId",
                table: "Fixtures",
                column: "ScoreId",
                principalTable: "Scores",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
