import RegularColumnChart from "../Charts/RegularColumnChart";

export default function SupplierCapacityBox({ usedCapacity }) {
  const inputData = Object.entries(usedCapacity ?? {}).map(([treeType, capacity]) => [
    treeType,
    Number(capacity),
  ]);

  if (inputData.length === 0) {
    return <p className="kpi-chart-empty">No capacity data</p>;
  }

  return (
    <div className="supplier-capacity-wrapper">
      <RegularColumnChart
        axes={["Tree type", "Used capacity (%)"]}
        inputData={inputData}
        max={100}
        height="140px"
        legend="none"
        options={{
          legend: { position: "none" },
          chartArea: {
            left: 35,
            top: 15,
            width: "85%",
            height: "65%", // Leaves room at the bottom for "pine" and "oak"
          },
          hAxis: {
            textStyle: { fontSize: 11 },
          },
          vAxis: {
            minValue: 0,
            maxValue: 100,
          },
        }}
      />
    </div>
  );
}