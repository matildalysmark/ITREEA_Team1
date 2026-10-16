import '../style/AlertPanel.css';
import Panel from './Panel';
import { ShieldAlert, TriangleAlert } from 'lucide-react';

export default function AlertPanel() {

    return (
        <Panel title="Alerts" actionText="View all →">
            <div className='alert-container'>
                <div className='icon' style={{ backgroundColor: '#FBE7E4' }}>
                    <ShieldAlert size={16} color='#A33D36'></ShieldAlert>
                </div>
                <div className='middle-content'>
                    <h3>Labor audit overdue</h3>
                    <h4>Birch Bros · Norway</h4>
                    <h5 style={{ color: '#A33D36' }}>2 days overdue</h5>
                </div>
                <div className='level-box' style={{ backgroundColor: '#FBE7E4' }}>
                    <p style={{ color: '#A33D36' }}>CRITICAL</p>
                </div>
            </div>

            <div className='alert-container'>
                <div className='icon' style={{ backgroundColor: '#FFF0D8' }}>
                    <TriangleAlert size={16} color='#A45F17'></TriangleAlert>
                </div>
                <div className='middle-content'>
                    <h3>Certification expires soon</h3>
                    <h4>TerraTrunk AB ·Sweden</h4>
                    <h5 style={{ color: '#A45F17' }}>Expires in 21 days</h5>
                </div>
                <div className='level-box' style={{ backgroundColor: '#FFF0D8' }}>
                    <p style={{ color: '#A45F17' }}>REVIEW</p>
                </div>
            </div>

            <div className='alert-container'>
                <div className='icon' style={{ backgroundColor: '#FFF0D8' }}>
                    <TriangleAlert size={16} color='#A45F17'></TriangleAlert>
                </div>
                <div className='middle-content'>
                    <h3>Carbon data anomaly</h3>
                    <h4>TreeTops Inc · Canada</h4>
                    <h5 style={{ color: '#A45F17' }}>+34% vs prior quarter</h5>
                </div>
                <div className='level-box' style={{ backgroundColor: '#FFF0D8' }}>
                    <p style={{ color: '#A45F17' }}>REVIEW</p>
                </div>
            </div>
        </Panel>
    )
}