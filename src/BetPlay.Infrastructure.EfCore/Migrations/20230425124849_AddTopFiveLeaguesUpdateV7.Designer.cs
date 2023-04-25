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
    [Migration("20230425124849_AddTopFiveLeaguesUpdateV7")]
    partial class AddTopFiveLeaguesUpdateV7
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

            modelBuilder.Entity("BetPlay.Domain.League.Country", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<string>("Code")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Flag")
                        .IsRequired()
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
                            Id = new Guid("f3e89828-54e7-4397-b539-e43c84f09964"),
                            LeagueId = 78
                        },
                        new
                        {
                            Id = new Guid("0ec1ebb0-6fd6-49f7-956c-667fe04f4f78"),
                            LeagueId = 39
                        },
                        new
                        {
                            Id = new Guid("d1271715-1fe0-4edb-b061-aa3197cab24f"),
                            LeagueId = 140
                        },
                        new
                        {
                            Id = new Guid("804696ae-6177-4e92-aa08-84e414adfb9a"),
                            LeagueId = 135
                        },
                        new
                        {
                            Id = new Guid("43c613b7-ac78-4a8a-8812-6add2d05db47"),
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
                        .IsRequired()
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
