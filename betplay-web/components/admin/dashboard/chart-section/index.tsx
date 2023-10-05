import BarChart from "@/components/read-to-use/bar-chart";
import { ContainerBox } from "./styles";

const ChartSection = () => {
  const ticksOne = {
    stepSize: 1,
    max: 5,
    callback: function (value: any) {
      return value + " l";
    },
  };

  const labels = ["1", "2", "3", "4", "5"];
  const values = [1, 2, 3, 4, 5];
  return (
    <ContainerBox>
      <BarChart
        labels={labels}
        ticks={ticksOne}
        title={"The amount of gasoline burned per one relocated bike"}
        values={values}
      />
    </ContainerBox>
  );
};

export default ChartSection;
