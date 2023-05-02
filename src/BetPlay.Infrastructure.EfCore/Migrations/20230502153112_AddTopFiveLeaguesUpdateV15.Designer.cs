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
    [Migration("20230502153112_AddTopFiveLeaguesUpdateV15")]
    partial class AddTopFiveLeaguesUpdateV15
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

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
                            Id = new Guid("db56bed9-cb61-4d34-bb78-92918e352da6"),
                            LeagueId = 78
                        },
                        new
                        {
                            Id = new Guid("00c01cdc-6f2b-481e-acc8-eae17002e854"),
                            LeagueId = 39
                        },
                        new
                        {
                            Id = new Guid("68853aaa-65f1-4bc9-8b21-77b69ea0959e"),
                            LeagueId = 140
                        },
                        new
                        {
                            Id = new Guid("dcba6ae4-18d2-4307-9b6b-0326b9f7eb82"),
                            LeagueId = 135
                        },
                        new
                        {
                            Id = new Guid("0f0c6ed0-eb0b-489a-86fe-91fb26afd506"),
                            LeagueId = 61
                        });
                });

            modelBuilder.Entity("BetPlay.Domain.Team.Team", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Code")
                        .IsRequired()
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
#pragma warning restore 612, 618
        }
    }
}
