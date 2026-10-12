export function getAverageScore(supplierData) {
    return ((supplierData["carbon_footprint"] +
            supplierData["responsible_sourcing"] +
            supplierData["labor_standards"]) / 3).toFixed(1)
}

export function getOverallScore(supplierData, scoreTuning) {
    return ((supplierData["carbon_footprint"] * scoreTuning.carbon_footprint +
            supplierData["responsible_sourcing"] * scoreTuning.responsible_sourcing +
            supplierData["labor_standards"] * scoreTuning.labor_standards) / 3).toFixed(1)
}