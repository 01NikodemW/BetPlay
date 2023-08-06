import { FC, useState } from "react";
import { FixtureHeaderBox } from "./styles";
import { useTranslation } from "react-i18next";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

interface FixtureHeaderSectionProps {
  fixture: FixtureDetails;
}

const FixtureHeaderSection: FC<FixtureHeaderSectionProps> = ({ fixture }) => {
  const { t } = useTranslation();

  return <FixtureHeaderBox>d</FixtureHeaderBox>;
};

export default FixtureHeaderSection;
