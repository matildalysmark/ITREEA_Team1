import '../style/SupplierGridPage.css';
import supplier_data from '../../data/supplier_data.json';
import SummaryCard from '../Widgets/SummaryCard';
import FilterButton from '../Widgets/FilterButton';
import SortButton from '../Widgets/SortButton';
import CustomScoreEditButton from '../components/CustomScoreEditButton'
import { compareSuppliers } from '../helper/supplierUtils';
import { useState } from 'react';
import { useScoreTuningStore } from '../helper/store.js'

export default function SupplierGridPage() {
    const [sortBy, setSortBy] = useState('display_name');
    const { scoreTuning, _ } = useScoreTuningStore()

    const supplierIds = Object.entries(supplier_data.suppliers)
        .sort(compareSuppliers(sortBy, scoreTuning))
        .map(([supplierId]) => supplierId);

    return (
        <section className='supplier-dashboard-container'>
            <div className="hero"></div>
            <h1 className="home-font">
                Suppliers
            </h1>
            <div className='main-part'>
                <div className='top-grid-container'>
                    <div className='grid'>
                        <div className="filter-row-container">
                            <SortButton sortBy={sortBy} onSortChange={setSortBy} />
                            <FilterButton />
                            <CustomScoreEditButton />
                        </div>

                        {supplierIds.map((supplierId) => (
                            <SummaryCard key={supplierId} id={supplierId} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
