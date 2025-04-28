import ReactFusionCharts from "react-fusioncharts";
import type { FC } from "react";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme);
const ReactFC = ReactFusionCharts as unknown as FC<any>;

const Pie3D = ({ data }: { data: Object[] }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: "350",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Used Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "35%",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
export default Pie3D;
