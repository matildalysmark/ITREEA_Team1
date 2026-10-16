import React from "react";
import { useParams } from "react-router-dom";
import { 
  Send, 
  Pencil, 
  Bell, 
  DollarSign, 
  Truck, 
  CheckCircle2, 
  Leaf, 
  ArrowUpRight, 
  ArrowDownRight 
} from "lucide-react";
import "../style/SupplierInfoPage.css";

import SupplierSidePanel from "../components/SupplierSidePanel"; 
import SupplierDataTable from "../components/SupplierDataTable";
import SupplierSummary from "../components/SupplierSummary";
import jsonToChartData from "../Charts/JSONToChartData";
import RegularLineChart from "../Charts/RegularLineChart";
import RegularColumnChart from "../Charts/RegularColumnChart";
import suppliers_data from "../../data/supplier_data.json";
import { getMonthlyAverageScores } from "../helper/scoreUtils";

export default function SupplierInfoPage({ supplier_id: propSupplierId }) {
  // Läser ID antingen från props eller direkt från URL (/app/suppliers/:id)
  const params = useParams();
  const activeId = propSupplierId || params.supplier_id || Object.keys(suppliers_data.suppliers)[0];

  const data = suppliers_data.suppliers[activeId] || {};

    // 2. Dina ursprungliga metodanrop för graferna
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
    const averageAxes = ["Month", "Average score"];
    const averageInputData = Object.entries(getMonthlyAverageScores(data))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([month, score]) => [month, Number(score)]);

  const initials = data.display_name
    ? data.display_name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()
    : "TC";

  // Kontrollera att graferna faktiskt har rader att rita
  const hasChartData = Array.isArray(inputData) && inputData.length > 1;


  return (
    <div className="supplier-dashboard-container">
      {/* Topp-header */}
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
          <button className="btn btn-secondary">
            <Send size={15} />
            <span>Request update</span>
          </button>
          <button className="btn btn-primary">
            <Pencil size={15} />
            <span>Edit supplier</span>
          </button>
          <button className="btn btn-icon-only" aria-label="Notifications">
            <Bell size={16} />
          </button>
        </div>
      </header>

      {/* Profilkort */}
      <section className="supplier-hero-card">
        <div className="hero-left-section">
          <div className="company-avatar-box">
            <span>{initials}</span>
          </div>
          <div className="company-text-details">
            <div className="company-name-row">
              <h2>{data.display_name} SIA</h2>
              <span className="badge badge-success">• APPROVED</span>
              <span className="badge badge-neutral">• LOW RISK</span>
            </div>
            <p className="company-subdescription">
              Integrated sawmill and forest partner supplying certified softwood and hardwood since 2018.
            </p>
          </div>
        </div>

        <div className="hero-score-section">
          <div className="score-radial-circle">
            <span className="score-number">91</span>
          </div>
          <div className="score-details-meta">
            <span className="score-title">Overall weighted score</span>
            <span className="score-subtitle">#1 best fit</span>
            <span className="score-timestamp">Updated today</span>
          </div>
        </div>
      </section>

      {/* KPI-kort */}
      <section className="kpi-metric-grid">
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Annual spend</span>
            <DollarSign size={17} className="kpi-icon" />
          </div>
          <div className="kpi-metric-val">$38.4M</div>
          <div className="kpi-subtext">9.0% of portfolio spend</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>On-time delivery</span>
            <Truck size={17} className="kpi-icon" />
          </div>
          <div className="kpi-metric-val">96.8%</div>
          <div className="kpi-subtext delta-positive">
            <ArrowUpRight size={13} /> 1.4 pts vs last quarter
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Quality acceptance</span>
            <CheckCircle2 size={17} className="kpi-icon" />
          </div>
          <div className="kpi-metric-val">99.2%</div>
          <div className="kpi-subtext">18 ppm defect rate</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span>Carbon intensity</span>
            <Leaf size={17} className="kpi-icon" />
          </div>
          <div className="kpi-metric-val">{data.carbon_footprint ? (data.carbon_footprint / 2.9).toFixed(2) : "1.82"}</div>
          <div className="kpi-subtext">
            tCO₂e / tonne · <ArrowDownRight size={13} /> 8%
          </div>
        </div>
      </section>


      <section className="analytics-layout-grid">
        {/*Summary-komponent */}
        <div className="analytics-sidebar-column">
          <div className="dashboard-panel-card">
            <h3 className="panel-title">Summary</h3>
            <span className="panel-caption">Core indicators & benchmarks</span>
            <div className="summary-component-slot">
              <SupplierSummary data={data} />
            </div>
          </div>
        </div>

        {/* Befintliga grafer */}
        <div className="analytics-main-slot">
          <div className="dashboard-panel-card existing-graphs-box">
            <h3 className="panel-title">Score over time</h3>
            <span className="panel-caption">Multi-line & column distribution</span>
            
            <div className="existing-graphs-content">
              {hasChartData ? (
                <>
                <RegularColumnChart
                    axes={averageAxes}
                    inputData={averageInputData}
                    title="Average Score per Month"
                    backgroundColor="white"
                    colors={["#4767af"]}
                    max={10}
                />
                <RegularColumnChart
                    axes={carbonAxes}
                    inputData={carbonInputData}
                    title="Carbon Footprint by Wood Type"
                    backgroundColor="white"
                    colors={["#307236", "#4b3c2b", "#798491"]}
                    max={10}
                />
                <RegularColumnChart
                    axes={sourcingAxes}
                    inputData={sourcingInputData}
                    title="Responsible Sourcing by Wood Type"
                    backgroundColor="white"
                    colors={["#307236", "#4b3c2b", "#798491"]}
                    max={10}
                />
                <RegularColumnChart
                    axes={laborAxes}
                    inputData={laborInputData}
                    title="Labor Standards by Wood Type"
                    backgroundColor="white"
                    colors={["#4767af"]}
                    max={10}
                />
                <RegularLineChart
                    axes={axes}
                    inputData={inputData}
                    title="Amount of each Wood Type"
                    backgroundColor="white"
                    colors={["#307236", "#4b3c2b", "#798491"]}
                />
                </>
              ) : (
                <p style={{ color: "#64748b", padding: "16px", textAlign: "center" }}>
                  Ingen grafdata tillgänglig för leverantör: {activeId}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

    
      <section className="data-table-section">
        <div className="dashboard-panel-card data-table-card">
          <h3 className="panel-title">Data</h3>
          <span className="panel-caption">Leverantörsdata och leveranshistorik</span>
          <div className="data-component-slot">
            <SupplierDataTable data={data} />
          </div>
        </div>
      </section>
    </div>
  );
}