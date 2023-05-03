﻿// <auto-generated />
using System;
using BetPlay.Infrastructure.EfCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BetPlay.Infrastructure.EfCore.Migrations
{
    [DbContext(typeof(BetPlayDbContext))]
    [Migration("20230503090450_AddTopFiveLeaguesUpdateV17")]
    partial class AddTopFiveLeaguesUpdateV17
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

            modelBuilder.Entity("BetPlay.Domain.Fixture.Event", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int?>("AssistId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("AssistName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Comments")
                        .HasColumnType("TEXT");

                    b.Property<string>("Detail")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Elapsed")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("Extra")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FixtureId")
                        .HasColumnType("INTEGER");

                    b.Property<Guid?>("FixtureId1")
                        .HasColumnType("TEXT");

                    b.Property<int?>("PlayerId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PlayerName")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("TeamId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("FixtureId1");

                    b.HasIndex("TeamId");

                    b.ToTable("Event");
                });

            modelBuilder.Entity("BetPlay.Domain.Fixture.Fixture", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("AwayLogo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("AwayName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("Elapsed")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FixtureId")
                        .HasColumnType("INTEGER");

                    b.Property<Guid>("FixtureLeagueId")
                        .HasColumnType("TEXT");

                    b.Property<int?>("GoalsAwayTeam")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("GoalsHomeTeam")
                        .HasColumnType("INTEGER");

                    b.Property<string>("HomeLogo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("HomeName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Long")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Referee")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("ScoreId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Short")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Timestamp")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Timezone")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid?>("VenueId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("FixtureLeagueId");

                    b.HasIndex("ScoreId");

                    b.HasIndex("VenueId");

                    b.ToTable("Fixtures");
                });

            modelBuilder.Entity("BetPlay.Domain.Fixture.FixtureLeague", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("LeagueId")
                        .HasColumnType("TEXT");

                    b.Property<string>("Round")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Season")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("LeagueId");

                    b.ToTable("FixtureLeagues");
                });

            modelBuilder.Entity("BetPlay.Domain.Fixture.Score", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int?>("ExtratimeAway")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ExtratimeHome")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FixtureId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("FulltimeAway")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("FulltimeHome")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("HalftimeAway")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("HalftimeHome")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("PenaltyAway")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("PenaltyHome")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Scores");
                });

            modelBuilder.Entity("BetPlay.Domain.League.Country", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Code")
                        .HasColumnType("TEXT");

                    b.Property<string>("Flag")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Countries");
                });

            modelBuilder.Entity("BetPlay.Domain.League.League", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("CountryId")
                        .HasColumnType("TEXT");

                    b.Property<int>("LeagueId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Logo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CountryId");

                    b.ToTable("Leagues");
                });

            modelBuilder.Entity("BetPlay.Domain.League.TrackedLeague", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("LeagueId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("TrackedLeagues");

                    b.HasData(
                        new
                        {
                            Id = new Guid("01f61439-1fbf-45e8-af52-51f9d2b4c5f4"),
                            LeagueId = 78
                        },
                        new
                        {
                            Id = new Guid("f3851ea9-885f-4084-8c36-237a8d9e6903"),
                            LeagueId = 39
                        },
                        new
                        {
                            Id = new Guid("3b859882-330c-4f30-baf3-18eea58cb7d5"),
                            LeagueId = 140
                        },
                        new
                        {
                            Id = new Guid("d5a8ad52-ead7-46ac-995a-98f9950b9824"),
                            LeagueId = 135
                        },
                        new
                        {
                            Id = new Guid("33570126-a81b-4820-aeaa-0be6b7ff38ac"),
                            LeagueId = 61
                        });
                });

            modelBuilder.Entity("BetPlay.Domain.Team.Team", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Code")
                        .HasColumnType("TEXT");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Founded")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Logo")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<bool>("National")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TeamId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("UpdateDate")
                        .HasColumnType("TEXT");

                    b.Property<Guid>("VenueId")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("VenueId");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("BetPlay.Domain.Team.Venue", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Address")
                        .HasColumnType("TEXT");

                    b.Property<int>("Capacity")
                        .HasColumnType("INTEGER");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Surface")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("VenueId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Venues");
                });

            modelBuilder.Entity("BetPlay.Domain.Fixture.Event", b =>
                {
                    b.HasOne("BetPlay.Domain.Fixture.Fixture", null)
                        .WithMany("Events")
                        .HasForeignKey("FixtureId1");

                    b.HasOne("BetPlay.Domain.Team.Team", "Team")
                        .WithMany()
                        .HasForeignKey("TeamId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Team");
                });

            modelBuilder.Entity("BetPlay.Domain.Fixture.Fixture", b =>
                {
                    b.HasOne("BetPlay.Domain.Fixture.FixtureLeague", "FixtureLeague")
                        .WithMany()
                        .HasForeignKey("FixtureLeagueId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BetPlay.Domain.Fixture.Score", "Score")
                        .WithMany()
                        .HasForeignKey("ScoreId");

                    b.HasOne("BetPlay.Domain.Team.Venue", "Venue")
                        .WithMany()
                        .HasForeignKey("VenueId");

                    b.Navigation("FixtureLeague");

                    b.Navigation("Score");

                    b.Navigation("Venue");
                });

            modelBuilder.Entity("BetPlay.Domain.Fixture.FixtureLeague", b =>
                {
                    b.HasOne("BetPlay.Domain.League.League", "League")
                        .WithMany()
                        .HasForeignKey("LeagueId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("League");
                });

            modelBuilder.Entity("BetPlay.Domain.League.League", b =>
                {
                    b.HasOne("BetPlay.Domain.League.Country", "Country")
                        .WithMany()
                        .HasForeignKey("CountryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Country");
                });

            modelBuilder.Entity("BetPlay.Domain.Team.Team", b =>
                {
                    b.HasOne("BetPlay.Domain.Team.Venue", "Venue")
                        .WithMany()
                        .HasForeignKey("VenueId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Venue");
                });

            modelBuilder.Entity("BetPlay.Domain.Fixture.Fixture", b =>
                {
                    b.Navigation("Events");
                });
#pragma warning restore 612, 618
        }
    }
}