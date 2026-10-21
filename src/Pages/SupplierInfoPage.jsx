import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Send, Pencil, Bell, Star, Leaf, TreePine, Users, Trees } from "lucide-react";
import "../style/SupplierInfoPage.css";

import SupplierDataTable from "../components/SupplierDataTable";
import jsonToChartData from "../Charts/JSONToChartData";
import RegularLineChart from "../Charts/RegularLineChart";
import RegularColumnChart from "../Charts/RegularColumnChart";
import suppliers_data from "../../data/supplier_data.json";
import { getMonthlyAverageScores } from "../helper/scoreUtils";
import SupplierCapacityBox from "../components/SupplierCapacityBox";

export default function SupplierInfoPage({ supplier_id: propSupplierId }) {
  const params = useParams();
  const suppliers = suppliers_data.suppliers || {};
  const activeId = propSupplierId || params.supplier_id || Object.keys(suppliers)[0];
  const data = suppliers[activeId] || {};

  // Rank calculation (memoized so it only calculates once)
  const { rank, totalSuppliers } = useMemo(() => {
    const list = Object.entries(suppliers)
      .map(([id, s]) => ({ id, score: s.average_score ?? 0 }))
      .sort((a, b) => b.score - a.score);

    const idx = list.findIndex((s) => s.id === activeId);
    return {
      rank: idx !== -1 ? idx + 1 : "-",
      totalSuppliers: list.length,
    };
  }, [suppliers, activeId]);

  // Chart datasets
  const { axes, inputData } = jsonToChartData(suppliers_data, activeId, "amount");
  const { axes: carbonAxes, inputData: carbonInputData } = jsonToChartData(
    suppliers_data,
    activeId,
    "carbon_footprint"
  );
  const { axes: sourcingAxes, inputData: sourcingInputData } = jsonToChartData(
    suppliers_data,
    activeId,
    "responsible_sourcing"
  );

  const laborAxes = ["Month", "Labor standards"];
  const laborInputData = Object.keys(data.months ?? {})
    .sort()
    .map((month) => [month, data.months[month]?.labor_standards ?? null]);

  const averageAxes = ["Month", "Overall score"];
  const averageInputData = Object.entries(getMonthlyAverageScores(data))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, score]) => [month, Number(score)]);

  const initials = data.display_name
    ? data.display_name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : "TC";

  const hasChartData = Array.isArray(inputData) && inputData.length > 1;

  return (
    <div className="supplier-dashboard-container">
      {/* Top Header */}
      <header className="supplier-top-bar">
        <div className="header-meta-group">
          <div className="breadcrumb-nav">
            <span>Suppliers</span> <span className="slash">/</span> <span>{data.display_name}</span>
          </div>
          <div className="title-row">
            <h1 className="supplier-page-title">{data.display_name}</h1>
            <span className="supplier-meta-subtext">WOOD-00482 · Strategic wood supplier</span>
          </div>
        </div>

        <div className="header-action-group">
          <button className="btn btn-secondary" type="button">
            <Send size={15} />
            <span>Request update</span>
          </button>
          <button className="btn btn-primary" type="button">
            <Pencil size={15} />
            <span>Edit supplier</span>
          </button>
          <button className="btn btn-icon-only" type="button" aria-label="Notifications">
            <Bell size={16} />
          </button>
        </div>
      </header>

      {/* Hero Profile Card */}
      <section className="supplier-hero-card">
        <div className="hero-left-section">
          <div className="company-avatar-box">
            <span>{initials}</span>
          </div>
          <div className="company-text-details">
            <div className="company-name-row">
              <h2>{data.display_name}</h2>
              {data.country && (
                <span className="badge badge-country">
                  <span className="country-flag-icon">{data.country_flag || "🌐"}</span>
                  <span>{data.country}</span>
                </span>
              )}
            </div>
            <p className="company-subdescription">
              Integrated sawmill and forest partner supplying certified softwood and hardwood since 2018.
            </p>
          </div>
        </div>

        <div className="hero-rank-card">
          <span className="rank-label">Overall Ranking</span>
          <div className="rank-value-row">
            <span className="rank-number">{rank}</span>
            <span className="rank-total">/ {totalSuppliers}</span>
          </div>
        </div>
      </section>

      {/* Summary KPI Cards */}
      <section className="kpi-metric-grid">
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Overall score</span>
            <Star size={17} className="kpi-icon" />
          </div>
          <div className="kpi-metric-val">
            {data.average_score ?? 6.6} <span className="kpi-max-val">/ 10</span>
          </div>
          <div className="kpi-progress-track">
            <div
              className="kpi-progress-fill"
              style={{ width: `${((data.average_score ?? 6.6) / 10) * 100}%` }}
            />
          </div>
          <div className="kpi-subtext">Overall benchmark</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Carbon footprint</span>
            <Leaf size={17} className="icon-emerald" />
          </div>
          <div className="kpi-metric-val">
            {data.carbon_footprint ?? 8} <span className="kpi-max-val">/ 10</span>
          </div>
          <div className="kpi-progress-track">
            <div
              className="kpi-progress-fill"
              style={{ width: `${((data.carbon_footprint ?? 8) / 10) * 100}%` }}
            />
          </div>
          <div className="kpi-subtext">Verified emissions tier</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Responsible sourcing</span>
            <TreePine size={17} className="icon-blue" />
          </div>
          <div className="kpi-metric-val">
            {data.responsible_sourcing ?? 7} <span className="kpi-max-val">/ 10</span>
          </div>
          <div className="kpi-progress-track">
            <div
              className="kpi-progress-fill"
              style={{ width: `${((data.responsible_sourcing ?? 7) / 10) * 100}%` }}
            />
          </div>
          <div className="kpi-subtext">FSC & PEFC certified ratio</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Labor standards</span>
            <Users size={17} className="icon-yellow" />
          </div>
          <div className="kpi-metric-val">
            {data.labor_standards ?? 6} <span className="kpi-max-val">/ 10</span>
          </div>
          <div className="kpi-progress-track">
            <div
              className="kpi-progress-fill"
              style={{ width: `${((data.labor_standards ?? 6) / 10) * 100}%` }}
            />
          </div>
          <div className="kpi-subtext">Audit compliance score</div>
        </div>

      
        <div className="kpi-card kpi-card-chart">
          <div className="kpi-card-header">
            <span>Used Supplier capacity</span>
            <Trees size={17} className="icon-brown" />
          </div>

          <div className="kpi-chart-content">
            <SupplierCapacityBox usedCapacity={data?.used_capacity} />
          </div>
        </div>
      </section>

      {/* Graphs Section */}
      <section className="graphs-full-section">
        <div className="dashboard-panel-card existing-graphs-box">
          <h3 className="panel-title">Score over time</h3>
          <hr />
          <div className="existing-graphs-content">
            {hasChartData ? (
              <>
                <summary>Overall Score per Month</summary>
                <RegularColumnChart
                  axes={averageAxes}
                  inputData={averageInputData}
                  title="Overall Score per Month"
                  backgroundColor="white"
                  colors={["#4767af"]}
                  max={10}
                  height="250px"
                />
                <details className="chart-collapsible">
                  <summary>Carbon Footprint by Wood Type</summary>
                  <RegularColumnChart
                    axes={carbonAxes}
                    inputData={carbonInputData}
                    title="Carbon Footprint by Wood Type"
                    backgroundColor="white"
                    colors={["#307236", "#4b3c2b", "#798491"]}
                    max={10}
                    height="250px"
                  />
                </details>
                <details className="chart-collapsible">
                  <summary>Responsible Sourcing by Wood Type</summary>
                  <RegularColumnChart
                    axes={sourcingAxes}
                    inputData={sourcingInputData}
                    title="Responsible Sourcing by Wood Type"
                    backgroundColor="white"
                    colors={["#307236", "#4b3c2b", "#798491"]}
                    max={10}
                    height="250px"
                  />
                </details>
                <details className="chart-collapsible">
                  <summary>Labor Standards per Month</summary>
                  <RegularColumnChart
                    axes={laborAxes}
                    inputData={laborInputData}
                    title="Labor Standards per Month"
                    backgroundColor="white"
                    colors={["#edd167"]}
                    max={10}
                    height="250px"
                  />
                </details>
                <details className="chart-collapsible">
                  <summary>Amount of each Wood Type</summary>
                  <RegularLineChart
                    axes={axes}
                    inputData={inputData}
                    title="Amount of each Wood Type"
                    backgroundColor="white"
                    colors={["#307236", "#4b3c2b", "#798491"]}
                    height="250px"
                  />
                </details>
              </>
            ) : (
              <p style={{ color: "#64748b", padding: "16px", textAlign: "center" }}>
                Ingen grafdata tillgänglig för leverantör: {activeId}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="data-table-section">
        <div className="dashboard-panel-card data-table-card">
          <h3 className="panel-title">Data</h3>
          <div className="data-component-slot">
            <SupplierDataTable data={data} />
          </div>
        </div>
      </section>
    </div>
  );
}