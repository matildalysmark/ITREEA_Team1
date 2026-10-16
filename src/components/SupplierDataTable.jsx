import React from "react";
import { capitalizeFirstLetter } from "../helper/textUtils";

export default function SupplierDataTable({ data }) {
  const monthsData = data?.months || {};
  const monthKeys = Object.keys(monthsData).sort();

  if (monthKeys.length === 0) {
    return <p style={{ color: "#64748b", padding: "16px" }}>Ingen data tillgänglig.</p>;
  }

  // Pick the latest month to dynamically grab all wood types (pine, oak, birch, etc.)
  const latestMonth = monthKeys.at(-1);
  const woodTypes = Object.keys(monthsData[latestMonth]?.tree_types || {});

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <table className="excel-sheet-table">
        <thead>
          <tr>
            <th className="cell-header">Månad</th>
            <th className="cell-header">Arbetsstandard</th>
            {woodTypes.map((wood) => (
              <React.Fragment key={wood}>
                <th className="cell-header">{capitalizeFirstLetter(wood)} (m³)</th>
                <th className="cell-header">{capitalizeFirstLetter(wood)} CO₂</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthKeys.map((month) => {
            const row = monthsData[month] || {};
            const treeTypes = row.tree_types || {};

            return (
              <tr key={month}>
                <td className="cell-data font-bold">{month}</td>
                <td className="cell-data">{row.labor_standards ?? "-"}</td>
                {woodTypes.map((wood) => {
                  const values = treeTypes[wood] || {};
                  return (
                    <React.Fragment key={wood}>
                      <td className="cell-data num">{values.amount ?? "-"}</td>
                      <td className="cell-data num">{values.carbon_footprint ?? "-"}</td>
                    </React.Fragment>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}