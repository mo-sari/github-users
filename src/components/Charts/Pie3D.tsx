import ReactFusionCharts from "react-fusioncharts";
import type { FC } from "react";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme);
const ReactFC = ReactFusionCharts as unknown as FC<any>;

const ExampleChart = ({ data }: { data: Object[] }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "35%",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
export default ExampleChart;
