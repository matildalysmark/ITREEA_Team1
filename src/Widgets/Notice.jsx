import '../style/Notice.css';
import { X } from 'lucide-react';

export default function Notice() {

    return(
        <div className='notice-container'>
            <div className='message-container'>
                <h4>New trend detected · 10 minutes ago</h4>
                <h3>Labor standard decrease for Arborex AB birch sourcing · Suggest switch of birch supplier to Birch Bros</h3>
                <h5>Click to compare</h5>
            </div>
            <X size={18} color='black'></X>
        </div>
    )
}