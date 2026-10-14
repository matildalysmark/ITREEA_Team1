import { Chart } from "react-google-charts";

//For more info see https://www.react-google-charts.com/

/**
 * @param {Object} props
 * @param {Array<[string, string] | [string, string, { role: "style" }]>} props.axes - The name of the chart axes. Add third value { role: "style" } if styling is needed.
 * @param {Array<[string, number] | [string, number, string]>} props.inputData - The data to display. Format: [[label1, value1], [label2, value2], ...] or [[label1, value1, color1], [label2, value2, color2], ...] if styling is included.
 * @param {string} [props.title] - The chart title.
 * @param {string} [props.backgroundColor] - The background color of the chart.
 * @returns {JSX.Element}
 * 
 * @description
 * Renders a chart using the supplied axes and data.
 * axes should be an array of two or three elements representing the names of the label and value axes, and optionally the style role.
 * 
 * if no styling is needed, inputData should be an array of [label, value] pairs, where label is a string and value is a number.
 * 
 * If styling is included, inputData should be an array of [label, value, color] pairs, where color is a string representing the column color.
 *
 * @example
 * <RegularColumnChart
 *   axes={["TreeType", "Amount"]}
 *   inputData={[["Pine", 56], ["Oak", 86], ["Birch", 74]]}
 *   title="Sample Column Chart"
 * />
 *
 * @example
 * <RegularColumnChart
 *   axes={["TreeType", "Amount", { role: "style" }]}
 *   inputData={[["Pine", 56, "Brown"], ["Oak", 86, "Green"]]}
 *   title="Column Chart with Custom Colors"
 *   backgroundColor="lightblue"
 * />
 */
function RegularColumnChart({ axes, inputData, title, backgroundColor, colors }) {
  return (
    <Chart
      chartType="ColumnChart"
      data={[axes, ...inputData]}
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
export default RegularColumnChart;
