import "../style/SupplierInfoPage.css";
import SupplierDataTable from "../components/SupplierDataTable";
import SupplierSummary from "../components/SupplierSummary";
import jsonToChartData from "../Charts/JSONToChartData";
import RegularLineChart from "../Charts/RegularLineChart";
import RegularColumnChart from "../Charts/RegularColumnChart"

import suppliers_data from '../../data/supplier_data.json'



export default function SupplierInfoPage() {
    const supplier_id = "timberco_ab";
    const data = suppliers_data.suppliers[supplier_id];
    const { axes, inputData } = jsonToChartData(suppliers_data, supplier_id, "amount");
    const { axes: carbonAxes, inputData: carbonInputData } = jsonToChartData(
        suppliers_data,
        supplier_id,
        "carbon_footprint"
    );
    const { axes: sourcingAxes, inputData: sourcingInputData } = jsonToChartData(
        suppliers_data,
        supplier_id,
        "responsible_sourcing"
    );

    return (
        <div>
            <h1>{data.display_name}</h1>
            <br />
            <div>
                <h2>Summary</h2>
                <SupplierSummary data={data}/>
            </div>
            <br />
            <div>
                <h2>Score over time</h2>
                <div className="supplier-chart-container">
                    <RegularLineChart
                        axes={axes}
                        inputData={inputData}
                        title="Wood Types"
                        backgroundColor="#16171d"
                        colors={["#2e7d32", "#795548", "#9e9e9e"]}
                    />
                </div>
            </div>
            <br />
            <div>
                <h2>Carbon footprint over time</h2>
                <div className="supplier-chart-container">
                    <RegularColumnChart
                        axes={carbonAxes}
                        inputData={carbonInputData}
                        title="Carbon Footprint by Wood Type"
                        backgroundColor="#16171d"
                        colors={["#2e7d32", "#795548", "#9e9e9e"]}
                    />
                </div>
            </div>
            <br />
            <div>
                <h2>Responsible sourcing over time</h2>
                <div className="supplier-chart-container">
                    <RegularColumnChart
                        axes={sourcingAxes}
                        inputData={sourcingInputData}
                        title="Responsible Sourcing by Wood Type"
                        backgroundColor="#16171d"
                        colors={["#2e7d32", "#795548", "#9e9e9e"]}
                    />
                </div>
            </div>
            <br />
            <div>
                <SupplierDataTable data={data} />
            </div>
        </div>
    );
}
