import '../style/Notice.css';
import { X } from 'lucide-react';

export default function Notice() {

    return(
        <div className='notice-container'>
            <div className='message-container'>
                <h4>New notice · 5 minutes ago</h4>
                <h3>New audit registered · Reduced carbon dioxide emissions</h3>
                <h5>Birch Bros · Norway</h5>
            </div>
            <X size={18} color='black'></X>
        </div>
    )
}