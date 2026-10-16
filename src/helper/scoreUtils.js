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


// Per month: mean of tree-type carbon/sourcing scores and the monthly labor score, averaged equally.
export function getMonthlyAverageScores(supplierData) {
    const mean = (values) => values.reduce((sum, v) => sum + v, 0) / values.length

    return Object.fromEntries(
        Object.entries(supplierData["months"] ?? {}).map(([month, data]) => {
            const trees = Object.values(data["tree_types"] ?? {})
            const carbon = mean(trees.map((t) => t["carbon_footprint"]))
            const sourcing = mean(trees.map((t) => t["responsible_sourcing"]))
            return [month, ((carbon + sourcing + data["labor_standards"]) / 3).toFixed(1)]
        })
    )
}
