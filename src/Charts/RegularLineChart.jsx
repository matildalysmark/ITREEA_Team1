import { Chart } from "react-google-charts";

//For more info see https://www.react-google-charts.com/

/**
 * @param {Object} props
 * @param {Array<[string, string]>} props.axes - The name of the chart axes.
 * @param {Array<[number, number]>} props.inputData - The data to display. Format: [[x1, y1], [x2, y2], ...]
 * @param {string} [props.title] - The chart title.
 * @param {string} [props.backgroundColor] - The background color of the chart.
 * @param {string[]} [props.colors] - The line colors, in the same order as the data series.
 * @returns {JSX.Element}
 * 
 * Renders a line chart using the supplied axes and data. 
 * axes should be an array of two strings representing the names of the x and y axes.
 * inputData should be an array of [x, y] pairs, where x is a number and y is a number.
 * backgroundColor sets the background color of the chart.
 *
 * @example
 * <RegularLineChart
 *   axes={["Year", "Score"]}
 *   inputData={[[2000, 56], [2005, 86], [2010, 74]]}
 *   title="Simple Line Chart"
 *   backgroundColor="white"
 *   colors={["#2e7d32"]}
 * />
 * 
 * @example
 * <RegularLineChart
 *   axes={["Year", "Pine", "Oak", "Birch"]}
 *   inputData={[[2000, 56, 34, 78], [2005, 86, 45, 90], [2010, 74, 56, 88]]}
 *   title="Multi-Line Chart"
 *   backgroundColor="white"
 *   colors={["#2e7d32", "#795548", "#9e9e9e"]}
 * />
 */
function RegularLineChart({ axes, inputData, title, backgroundColor, colors, width, height }) {
  return (
    <Chart
      chartType="LineChart"
      data={[axes, ...inputData]}
      width={width}
      height={height}
      options={{
        title: title,
        backgroundColor: backgroundColor,
        colors: colors,
        textStyle: { color: "#ffffff" },
        titleTextStyle: { color: "#ffffff" },
        legend: { textStyle: { color: "#ffffff" } },
        hAxis: {
          textStyle: { color: "#ffffff" },
          titleTextStyle: { color: "#ffffff" }
        },
        vAxis: {
          textStyle: { color: "#ffffff" },
          titleTextStyle: { color: "#ffffff" }
        }
      }}
      legendToggle
    />
  );
}
export default RegularLineChart;
