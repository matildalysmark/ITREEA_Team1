import { supplierToLineChartData } from "./JSONToChartData";

const TREE_TYPE_COLORS = ["#307236", "#4b3c2b", "#798491"];

function average(values) {
  const numbers = values.filter((value) => typeof value === "number");
  return numbers.length
    ? numbers.reduce((sum, value) => sum + value, 0) / numbers.length
    : null;
}

/**
 * Builds all chart data needed to show one supplier on the compare page.
 *
 * @param {Object} supplier - A supplier object, e.g. data.suppliers["timberco_ab"].
 * @returns {{
 *   treeTypeAxes: Array,
 *   latestTreeTypes: Array,
 *   overallAxes: string[],
 *   overallRows: Array,
 *   carbon: {axes: string[], inputData: Array},
 *   sourcing: {axes: string[], inputData: Array},
 *   laborAxes: string[],
 *   laborRows: Array
 * }}
 */
export function supplierToCompareChartData(supplier) {
  const months = supplier?.months ?? {};
  const monthKeys = Object.keys(months).sort();

  const overallRows = monthKeys.map((month) => {
    const monthData = months[month];
    const treeTypes = Object.values(monthData?.tree_types ?? {});
    const scores = [
      average(treeTypes.map((tree) => tree.carbon_footprint)),
      average(treeTypes.map((tree) => tree.responsible_sourcing)),
      monthData?.labor_standards,
    ];
    const overallScore = scores.every((score) => typeof score === "number")
      ? average(scores)
      : null;

    return [month, overallScore];
  });

  const latestMonth = monthKeys[monthKeys.length - 1];
  const latestTreeTypes = Object.entries(months[latestMonth]?.tree_types ?? {})
    .map(([treeType, values], index) => [
      treeType,
      values.amount,
      TREE_TYPE_COLORS[index % TREE_TYPE_COLORS.length],
    ])
    .filter(([, amount]) => typeof amount === "number");

  return {
    treeTypeAxes: ["Tree type", "Amount", { role: "style" }],
    latestTreeTypes,
    overallAxes: ["Month", "Overall score"],
    overallRows,
    carbon: supplierToLineChartData(supplier, "carbon_footprint"),
    sourcing: supplierToLineChartData(supplier, "responsible_sourcing"),
    laborAxes: ["Month", "Labor standards"],
    laborRows: monthKeys.map((month) => [month, months[month]?.labor_standards ?? null]),
  };
}

export default supplierToCompareChartData;
