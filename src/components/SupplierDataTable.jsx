import React from "react";

export default function SupplierDataTable({ data }) {
  const monthsData = data?.months || {};
  const monthKeys = Object.keys(monthsData);

  if (monthKeys.length === 0) {
    return <p style={{ color: "#64748b", padding: "16px" }}>Ingen data tillgänglig.</p>;
  }

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <table className="excel-sheet-table">
        <thead>
          <tr>
            <th className="cell-header">Månad</th>
            <th className="cell-header">Arbetsstandard</th>
            <th className="cell-header">Tall / Pine (m³)</th>
            <th className="cell-header">Tall CO₂</th>
            <th className="cell-header">Ek / Oak (m³)</th>
            <th className="cell-header">Ek CO₂</th>
            <th className="cell-header">Björk / Birch (m³)</th>
            <th className="cell-header">Björk CO₂</th>
          </tr>
        </thead>
        <tbody>
          {monthKeys.map((month) => {
            const row = monthsData[month] || {};
            const pine = row.tree_types?.pine || {};
            const oak = row.tree_types?.oak || {};
            const birch = row.tree_types?.birch || {};

            return (
              <tr key={month}>
                <td className="cell-data font-bold">{month}</td>
                <td className="cell-data">{row.labor_standards ?? "-"}</td>
                <td className="cell-data num">{pine.amount ?? "-"}</td>
                <td className="cell-data num">{pine.carbon_footprint ?? "-"}</td>
                <td className="cell-data num">{oak.amount ?? "-"}</td>
                <td className="cell-data num">{oak.carbon_footprint ?? "-"}</td>
                <td className="cell-data num">{birch.amount ?? "-"}</td>
                <td className="cell-data num">{birch.carbon_footprint ?? "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}