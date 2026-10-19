import React, { useEffect, useState } from "react";

export default function SupplierSummary({ data = {} }) {
  // Trigger animation after initial mount
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  //4 summary metrics
  const summaryMetrics = [
    {
      label: "Overall score",
      value: data.average_score ?? 6.6,
      pct: Math.min(((data.average_score ?? 6.6) / 10) * 100, 100),
    },
    {
      label: "Carbon footprint",
      value: data.carbon_footprint ?? 5.3,
      pct: Math.min(((data.carbon_footprint ?? 5.3) / 10) * 100, 100),
    },
    {
      label: "Responsible sourcing",
      value: data.responsible_sourcing ?? 7.6,
      pct: Math.min(((data.responsible_sourcing ?? 7.6) / 10) * 100, 100),
    },
    {
      label: "Labor standards",
      value: data.labor_standards ?? 7.0,
      pct: Math.min(((data.labor_standards ?? 7.0) / 10) * 100, 100),
    },
  ];

  return (
    <div className="summary-card-inner">
      <div className="summary-card-header">
        <h3 className="summary-title">Summary</h3>
        <span className="summary-subtitle">Core indicators &amp; benchmarks</span>
      </div>

      <div className="summary-metrics-list">
        {summaryMetrics.map((item) => (
          <div key={item.label} className="summary-metric-item">
            {/* Top row: Label on left, actual value on right */}
            <div className="summary-metric-meta">
              <span className="summary-metric-label">{item.label}</span>
              <span className="summary-metric-val">{item.value} <span className="val-max">/ 10</span></span>
            </div>

            {/* Bottom row: The animated loading track */}
            <div className="summary-progress-track">
              <div
                className="summary-progress-fill"
                style={{
                  width: mounted ? `${item.pct}%` : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}