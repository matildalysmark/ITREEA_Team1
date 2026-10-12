import { useState } from 'react';
import { AlignLeft } from 'lucide-react';
import '../style/SortButton.css';

const sortOptions = [
    { value: 'display_name', label: 'Alphabetical' },
    { value: 'carbon_footprint', label: 'Carbon footprint' },
    { value: 'responsible_sourcing', label: 'Responsible sourcing' },
    { value: 'labor_standards', label: 'Labor standards' },
    { value: 'overall_score', label: 'Overall score' },
];

function truncateLabel(label) {
    return label.length > 20 ? `${label.slice(0, 13)}..` : label;
}

export default function SortButton({ sortBy, onSortChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = sortOptions.find((option) => option.value === sortBy) || sortOptions[0];

    function handleSortChange(value) {
        onSortChange(value);
        setIsOpen(false);
    }

    return (
        <div className="sort-button-wrapper">
            <button
                className="sort-button"
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="menu"
                onClick={() => setIsOpen((open) => !open)}
            >
                <span className="sort-button-text">
                    <AlignLeft size={14} strokeWidth={3} aria-hidden="true" />
                    {truncateLabel(selectedOption.label)}
                </span>
            </button>

            {isOpen && (
                <div className="sort-menu" role="menu">
                    {sortOptions.map((option) => (
                        <button
                            className="sort-menu-option"
                            type="button"
                            role="menuitem"
                            key={option.value}
                            onClick={() => handleSortChange(option.value)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
