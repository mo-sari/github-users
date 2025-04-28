import ReactFusionCharts from "react-fusioncharts";
import type { FC } from "react";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme);
const ReactFC = ReactFusionCharts as unknown as FC<any>;

const Doughnut2d = ({ data }: { data: Object[] }) => {
  const chartConfigs = {
    type: "doughnut2d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        decimals: 0,
        doughnutRadius: "35%",
        showPercentValues: 0,
        theme: "candy",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
export default Doughnut2d;
