import { useState } from "react";
import '../style/CustomScoreEdit.css';
import { useScoreTuningStore } from '../helper/store.js'

export default function CustomScoreEdit() {
    const {scoreTuning, updateScoreTuning} = useScoreTuningStore()

    const handleSliderChange = (e) => {
        const { name, value } = e.target
        updateScoreTuning(name, Number(value))
    }

    return (
        <div className="custom-score-edit">
            <h3>tune weights for overall score</h3>
            <h4>Carbon Footprint {scoreTuning.carbon_footprint}</h4>
            <input type="range" min="0" max="1" step="0.1" name="carbon_footprint"
                value={scoreTuning.carbon_footprint} onChange={handleSliderChange} />
            <br />
            <br />
            <h4>Responsible Sourcing {scoreTuning.responsible_sourcing}</h4>
            <input type="range" min="0" max="1" step="0.1" name="responsible_sourcing"
                value={scoreTuning.responsible_sourcing} onChange={handleSliderChange} />
            <br />
            <br />
            <h4>Labor Standards {scoreTuning.labor_standards}</h4>
            <input type="range" min="0" max="1" step="0.1" name="labor_standards"
                value={scoreTuning.labor_standards} onChange={handleSliderChange} />
        </div>
    )
}