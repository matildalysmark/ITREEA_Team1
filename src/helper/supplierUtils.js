import { getOverallScore } from './scoreUtils';

function getSortValue(supplier, sortBy, scoreTuning) {
    if (sortBy === 'overall_score') {
        return Number(getOverallScore(supplier, scoreTuning));
    }

    return supplier[sortBy];
}

export function compareSuppliers(sortBy, scoreTuning) {
    return (firstEntry, secondEntry) => {
        const [firstId, firstSupplier] = firstEntry;
        const [secondId, secondSupplier] = secondEntry;

        if (sortBy === 'display_name') {
            return firstSupplier.display_name.localeCompare(secondSupplier.display_name);
        }

        const firstScore = getSortValue(firstSupplier, sortBy, scoreTuning);
        const secondScore = getSortValue(secondSupplier, sortBy, scoreTuning);

        const scoreDifference = secondScore - firstScore;
        return scoreDifference || firstId.localeCompare(secondId);
    };
}
