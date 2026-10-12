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
                <RegularLineChart
                    axes={axes}
                    inputData={inputData}
                    title="Multi-Line Chart"
                    backgroundColor="white"
                    colors={["#2e7d32", "#795548", "#9e9e9e"]}
                />

                <RegularColumnChart
                    axes={axes}
                    inputData={inputData}
                    title="Column Chart with Custom Colors"
                    backgroundColor="white"
                />
            </div>
            <br />
            <div>
                <SupplierDataTable data={data} />
            </div>
        </div>
    );
}
