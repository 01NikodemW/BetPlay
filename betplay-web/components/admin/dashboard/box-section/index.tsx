import { Grid } from "@mui/material";
import InfoBox from "./info-box";
import { ContainerBox } from "./styles";

const BoxSection = () => {
  const boxTitle: string[] = [
    "Number of users",
    "Number of betting slips",
    "Number of won slips",
    "Number of lost slips",
    "Number of won money",
    "Number of lost money",
    "Biggest win",
    "Biggest loss",
    "Best user",
    "Worst user",
  ];

  return (
    <ContainerBox>
      <Grid container spacing={2}>
        {boxTitle.map((title, index) => {
          return (
            <Grid key={index} item sm={6} xs={12}>
              <InfoBox title={title} value={"value 1"} />
            </Grid>
          );
        })}
      </Grid>
    </ContainerBox>
  );
};

export default BoxSection;
