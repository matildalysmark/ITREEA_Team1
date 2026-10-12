import { capitalizeFirstLetter } from "../helper/textUtils";

export default function SupplierDataTable({ data }) {
    const latestMonth = Object.keys(data.months).sort().at(-1);
    const treeTypes = data.months[latestMonth].tree_types;

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Wood type</th>
                    <th scope="col">Carbon footprint</th>
                    <th scope="col">Responsible sourcing</th>
                    <th scope="col">Amount (ton/y)</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(treeTypes).map(([woodType, values]) => (
                    <tr key={woodType}>
                        <td>{capitalizeFirstLetter(woodType)}</td>
                        <td>{values.carbon_footprint}</td>
                        <td>{values.responsible_sourcing}</td>
                        <td>{values.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}