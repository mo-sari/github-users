// Include the react-fusioncharts component
import ReactFusionCharts from "react-fusioncharts";
import type { FC } from "react";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFusionCharts.fcRoot(FusionCharts, Column2D, FusionTheme);
const ReactFC = ReactFusionCharts as unknown as FC<any>;

const ExampleChart = ({ data }: { data: Object[] }) => {
  const chartConfigs = {
    type: "bar3d",
    width: "400",
    height: "400",
    dataFormat: "json",
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Countries With Most Oil Reserves [2017-18]",
        //Set the chart subcaption
        subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "Country",
        //Set the y-axis name
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion",
      },
      // Chart Data
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};
export default ExampleChart;
