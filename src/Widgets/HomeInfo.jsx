import '../style/HomeInfo.css';
import { Atom, TreePine, HandHeart, TriangleAlert } from 'lucide-react';

export default function HomeInfo() {
    return (
        <div className='card-wrapper'>

            <div className='card-container'>
                <div className='card-header-row'>
                    <h3>Average Carbon Footprint</h3>
                    <div className='icon-box'>
                        <Atom size={18} color='#3F8D90'></Atom>
                    </div>
                </div>
                <p className='card-value'>9.2</p>
                <p className='card-subtext' style={{ color: '#3F8D90' }}>+0.3 in the last quarter</p>
            </div>

            <div className='card-container'>
                <div className='card-header-row'>
                    <h3>Average Resposible Sourcing</h3>
                    <div className='icon-box'>
                        <TreePine size={18} color='#307236'></TreePine>
                    </div>
                </div>
                <p className='card-value'>8.3</p>
                <p className='card-subtext' style={{ color: '#307236' }}>+0.2 in the last year</p>
            </div>

            <div className='card-container'>
                <div className='card-header-row'>
                    <h3>Average Labor Standard</h3>
                    <div className='icon-box'>
                        <HandHeart size={18} color='#EDD167'></HandHeart>
                    </div>
                </div>
                <p className='card-value'>7.9</p>
                <p className='card-subtext' style={{ color: '#EDD167' }}>+0.2 in the last quarter</p>
            </div>
        </div>
    );
}