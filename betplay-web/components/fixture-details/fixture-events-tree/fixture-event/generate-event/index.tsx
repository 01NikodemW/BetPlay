import { FC } from "react";
import {
  AssistTypography,
  EventBox,
  PlayerAssistBox,
  PlayerTypography,
} from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { EventType } from "@/types/fixture-details/event";
import RedCard from "@/icons/red-card";
import OwnGoal from "@/icons/own-goal";
import Goal from "@/icons/goal";
import YellowCard from "@/icons/yellow-card";
import Substitution from "@/icons/substitution";

interface GenerateEventProps {
  fixture: FixtureDetails;
  event: EventType;
  eventIndex: number;
  homeOrAway: "home" | "away";
}

const GenerateEvent: FC<GenerateEventProps> = ({ event, homeOrAway }) => {
  const generateIcon = () => {
    switch (event.detail) {
      case "Normal Goal":
        return <Goal />;
      case "Penalty":
        return <Goal />;
      case "Own Goal":
        return <OwnGoal />;
      case "Missed Penalty":
        return <OwnGoal />;
      case "Yellow Card":
        return <YellowCard />;
      case "Red Card":
        return <RedCard />;
      case "Substitution 1":
        return <Substitution />;
      case "Substitution 2":
        return <Substitution />;
      case "Substitution 3":
        return <Substitution />;
      case "Substitution 4":
        return <Substitution />;
      case "Substitution 5":
        return <Substitution />;
      case "Substitution 6":
        return <Substitution />;
      default:
        return <>error</>;
    }
  };

  const generatePlayer = (homeOrAway: string) => {
    switch (event.detail) {
      case "Normal Goal":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
          </PlayerAssistBox>
        );
      case "Penalty":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
          </PlayerAssistBox>
        );
      case "Own Goal":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
          </PlayerAssistBox>
        );
      case "Missed Penalty":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
          </PlayerAssistBox>
        );
      case "Yellow Card":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
          </PlayerAssistBox>
        );
      case "Red Card":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
          </PlayerAssistBox>
        );
      case "Substitution 1":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.assist.name}</PlayerTypography>
            <AssistTypography>{event.player.name}</AssistTypography>
          </PlayerAssistBox>
        );
      case "Substitution 2":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
            <AssistTypography>{event.assist.name}</AssistTypography>
          </PlayerAssistBox>
        );
      case "Substitution 3":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
            <AssistTypography>{event.assist.name}</AssistTypography>
          </PlayerAssistBox>
        );
      case "Substitution 4":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
            <AssistTypography>{event.assist.name}</AssistTypography>
          </PlayerAssistBox>
        );
      case "Substitution 5":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
            <AssistTypography>{event.assist.name}</AssistTypography>
          </PlayerAssistBox>
        );
      case "Substitution 6":
        return (
          <PlayerAssistBox homeoraway={homeOrAway}>
            <PlayerTypography>{event.player.name}</PlayerTypography>
            <AssistTypography>{event.assist.name}</AssistTypography>
          </PlayerAssistBox>
        );
      default:
        return <>error</>;
    }
  };

  return (
    <EventBox homeoraway={homeOrAway}>
      {homeOrAway === "home" && generatePlayer(homeOrAway)}
      {generateIcon()}
      {homeOrAway === "away" && generatePlayer(homeOrAway)}
    </EventBox>
  );
};

export default GenerateEvent;
