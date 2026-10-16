import { Chart } from "react-google-charts";

//For more info see https://www.react-google-charts.com/

/**
 * @param {Object} props
 * @param {Array<[string, string]>} props.axes - The name of the chart axes.
 * @param {Array<[number, number]>} props.inputData - The data to display. Format: [[x1, y1], [x2, y2], ...]
 * @param {string} [props.title] - The chart title.
 * @param {string} [props.backgroundColor] - The background color of the chart.
 * @param {Array<string>} [props.colors] - The colors to use for the scatter points.
 * @returns {JSX.Element}
 * 
 * @description
 * Renders a chart using the supplied axes and data.
 * axes should be an array of two strings representing the names of the x and y axes.
 * inputData should be an array of [x, y] pairs, where x is a number and y is a number.
 * 
 * @example
 * <RegularScatterChart
 *   axes={["Year", "Score"]}
 *   inputData={[[2000, 56], [2010, 74], [2005, 86]]}
 *   title="Sample Chart (ScatterChart)"
 *   backgroundColor="lightblue"
 *   colors={["#2e7d32", "#795548", "#9e9e9e"]}
 * />
 * 
 */
function RegularScatterChart({ axes, inputData, title, backgroundColor, colors, max }) {
  return (
    <Chart
      chartType="ScatterChart"
      data={[axes, ...inputData]}
      options={{
        title: title,
        backgroundColor: backgroundColor,
        colors: colors,
        vAxis: {
          viewWindowMode: 'explicit',
          viewWindow: { min: 0, max: max },
          minValue: 0,
          maxValue: max
        }
      }}
      legendToggle
    />
  );
}
export default RegularScatterChart;
