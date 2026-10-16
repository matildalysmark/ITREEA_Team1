import { getAverageScore } from './scoreUtils';

function getSortValue(supplier, sortBy) {
    if (sortBy === 'overall_score') {
        return Number(getAverageScore(supplier));
    }

    return supplier[sortBy];
}

export function compareSuppliers(sortBy) {
    return (firstEntry, secondEntry) => {
        const [firstId, firstSupplier] = firstEntry;
        const [secondId, secondSupplier] = secondEntry;

        if (sortBy === 'display_name') {
            return firstSupplier.display_name.localeCompare(secondSupplier.display_name);
        }

        const firstScore = getSortValue(firstSupplier, sortBy);
        const secondScore = getSortValue(secondSupplier, sortBy);

        const scoreDifference = secondScore - firstScore;
        return scoreDifference || firstId.localeCompare(secondId);
    };
}
