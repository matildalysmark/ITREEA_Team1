import RegularColumnChart from "../Charts/RegularColumnChart";

export default function SupplierCapacityBox({ usedCapacity }) {
  const inputData = Object.entries(usedCapacity ?? {}).map(([treeType, capacity]) => [
    treeType,
    Number(capacity),
  ]);

  return (
    <div>
      
      {inputData.length > 0 ? (
        <RegularColumnChart
          axes={["Tree type", "Used capacity (%)"]}
          inputData={inputData}
          title="Used Capacity by Tree Type" 
          
          max={100}
        />
      ) : (
        <p>No capacity data available.</p>
      )}
    </div>
  );
}