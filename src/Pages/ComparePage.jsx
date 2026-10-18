import { useState } from "react";
import supplierData from "../../data/supplier_data.json";
import "../style/ComparePage.css";
import { RefreshCw } from "lucide-react";
import SupplierList from "../Widgets/SupplierList";
import { getAverageScore } from "../helper/scoreUtils";
import supplierToCompareChartData from "../Charts/SupplierToCompareChartData";
import RegularLineChart from "../Charts/RegularLineChart";
import RegularColumnChart from "../Charts/RegularColumnChart";

export default function ComparePage() {
    const supplierIds = ["timberco_ab", "bich_bros_ab"];
    const [supplierListOpen, setSupplierListOpen] = useState(false);
    const selectedSuppliers = supplierIds.map((id) => supplierData.suppliers[id]);

    const metricsFromData = {
        carbon_footprint: "Carbon footprint",
        responsible_sourcing: "Responsible sourcing",
        labor_standards: "Labor standards",
    };

    const supplierCharts = selectedSuppliers.map((supplier) => ({
        supplier,
        ...supplierToCompareChartData(supplier),
    }));

    return (
        <main className="compare-page">
            <h1>Compare suppliers</h1>
            <div className="compare-table-container">
            <table className="compare-table">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        {selectedSuppliers.map((supplier) => (
                            <th scope="col" key={supplier.display_name}>
                                <span className="supplier-heading">
                                    {supplier.display_name}
                                    <button className="supplier-change-button" onClick={() => setSupplierListOpen(true)} >
                                        <RefreshCw size={18} />
                                    </button>
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <th scope="row">Overall score</th>
                        {selectedSuppliers.map((supplier) => (
                            <td key={supplier.display_name}>{getAverageScore(supplier)}</td>
                        ))}
                    </tr>
                    {Object.entries(metricsFromData).map(([key, label]) => (
                        <tr key={key}>
                            <th scope="row">{label}</th>
                            {selectedSuppliers.map((supplier) => (
                                <td key={supplier.display_name}>{supplier[key]}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <th scope="row">Overall score over time</th>
                        {supplierCharts.map((chartData) => {
                            return (
                                <td key={chartData.supplier.display_name}>
                                    <div className="compare-chart-container">
                                        <RegularLineChart
                                            axes={chartData.overallAxes}
                                            inputData={chartData.overallRows}
                                            title="Overall score"
                                            backgroundColor="white"
                                            colors={["#64b5f6"]}
                                            max={10}
                                            width="100%"
                                            height="220px"
                                        />
                                    </div>
                                </td>
                            );
                        })}
                    </tr>
                    {[
                        ["Carbon footprint over time", "carbon"],
                        ["Responsible sourcing over time", "sourcing"],
                    ].map(([label, metric]) => (
                        <tr key={label}>
                            <th scope="row">{label}</th>
                            {supplierCharts.map((supplierChartData) => {
                                const chartData = supplierChartData[metric];
                                return (
                                    <td key={supplierChartData.supplier.display_name}>
                                        <div className="compare-chart-container">
                                            <RegularColumnChart
                                                axes={chartData.axes}
                                                inputData={chartData.inputData}
                                                title={label}
                                                backgroundColor="white"
                                                colors={["#307236", "#4b3c2b", "#798491"]}
                                                max={10}
                                                width="100%"
                                                height="220px"
                                            />
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    <tr>
                        <th scope="row">Labor standards over time</th>
                        {supplierCharts.map((chartData) => {
                            return (
                                <td key={chartData.supplier.display_name}>
                                    <div className="compare-chart-container">
                                        <RegularLineChart
                                            axes={chartData.laborAxes}
                                            inputData={chartData.laborRows}
                                            title="Labor standards"
                                            backgroundColor="white"
                                            colors={["#ffb74d"]}
                                            max={10}
                                            width="100%"
                                            height="220px"
                                        />
                                    </div>
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        <th scope="row">Currently delivered treetypes</th>
                        {supplierCharts.map((chartData) => (
                            <td key={chartData.supplier.display_name}>
                                <div className="compare-chart-container">
                                    <RegularColumnChart
                                        axes={chartData.treeTypeAxes}
                                        inputData={chartData.latestTreeTypes}
                                        title="Latest month by tree type"
                                        backgroundColor="white"
                                        colors={["#307236", "#4b3c2b", "#798491"]}
                                  
                                    width="100%"
                                    height="220px"
                                    />
                                </div>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            </div>
            {supplierListOpen && (
                <SupplierList onClose={() => setSupplierListOpen(false)} />
            )}
        </main>
    );
}