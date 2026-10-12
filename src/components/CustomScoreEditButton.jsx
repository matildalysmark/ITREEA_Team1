import { SlidersHorizontal } from 'lucide-react';
import '../style/CustomScoreEditButton.css';
import { useState } from 'react';
import CustomScoreEdit from './CustomScoreEdit'

export default function CustomScoreEditButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                className="custom-score-edit-button"
                type="button"
                onClick={() => setIsOpen(!isOpen)}>

                <p className='button-text'>
                    <SlidersHorizontal color='white' />
                    Score Tuning
                </p>
            </button>

            {isOpen && (
                <div className="custom-score-edit-menu">
                    <CustomScoreEdit></CustomScoreEdit>
                </div>
            )}
        </div>
    )
}