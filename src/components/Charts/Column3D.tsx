import ReactFusionCharts from "react-fusioncharts";
import type { FC } from "react";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme);
const ReactFC = ReactFusionCharts as unknown as FC<any>;

const Pie3D = ({ data }: { data: Object[] }) => {
  const chartConfigs = {
    type: "column3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular Language",
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameFontSize: "10px",
        yAxisNameFontSize: "10px",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
export default Pie3D;
