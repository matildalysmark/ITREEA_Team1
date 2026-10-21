import '../style/SummaryCard.css';
import data from '/data/supplier_data.json'
import { TreePine, Leaf, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { useScoreTuningStore } from '../helper/store.js'
import { getOverallScore } from "../helper/scoreUtils";

export default function SummaryCard({ id }) {
    const supplier = data.suppliers[id]; // supplier id, e.g. 'abc_ab'
    const navigate = useNavigate()

    // if id is missing, no data can be shown, writes out 'supplier missing'
    if (!supplier) {
        return <div className='summary-container'>Supplier missing</div>;
    }

    const { scoreTuning, _ } = useScoreTuningStore()

    return (
        <div className='summary-container' onClick={() => navigate(`/app/suppliers/${id}`)}>
            <p className='summary-header'>
                {supplier["display_name"]}
            </p>

            <div className='bar-container'>

                {/*Carbon footprint bar*/}
                <div className='bar-wrapper'>
                    <div className='bar carbon-bar'>
                        <div className='bar-fill carbon-bar-fill' style={{ height: `${(supplier.carbon_footprint / 10) * 100}%` }}>
                            <span className='individual-value'>{supplier["carbon_footprint"]}</span>
                        </div>
                    </div>
                    <Leaf className='carbon-icon' size={20} />
                </div>

                {/*Resourcing bar*/}
                <div className='bar-wrapper'>
                    <div className='bar resourcing-bar'>
                        <div className='bar-fill resourcing-bar-fill' style={{ height: `${(supplier.responsible_sourcing / 10) * 100}%` }}>
                            <span className='individual-value'>{supplier["responsible_sourcing"]}</span>
                        </div>
                    </div>
                    <TreePine className='resourcing-icon' size={20} />
                </div>

                {/*Labor bar*/}
                <div className='bar-wrapper'>
                    <div className='bar labor-bar'>
                        <div className='bar-fill labor-bar-fill' style={{ height: `${(supplier.labor_standards / 10) * 100}%` }}>
                            <span className='individual-value'>{supplier["labor_standards"]}</span>
                        </div>
                    </div>
                    <Users className='labor-icon' size={20} />
                </div>
            </div>

            <div className='overall-score'>
                <span className='overall-score-label'>Overall score</span>
                <span className='overall-score-value'>{getOverallScore(supplier, scoreTuning)}</span>
            </div>

            <div className='overall-score-bar'>
                <div
                    className='overall-score-bar-fill'
                    style={{ width: `${(getOverallScore(supplier, scoreTuning) / 10) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}