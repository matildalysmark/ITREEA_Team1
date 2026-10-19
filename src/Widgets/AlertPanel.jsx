import '../style/AlertPanel.css';
import Panel from './Panel';
import { CircleAlert, TriangleAlert } from 'lucide-react';

export default function AlertPanel() {

    return (
        <Panel title="Suppliers at risk" actionText="View all →">
            <div className='alert-container'>
                <div className='icon'>
                    <TriangleAlert size={16} style={{color: '#E0433E'}}></TriangleAlert>
                </div>
                <div className='middle-content'>
                    <h3>Oak-ay Inc · USA</h3>
                    <h4>Emission increase</h4>
                    <h5>Registered 14/08/26</h5>
                </div>
            </div>

            <div className='alert-container'>
                <div className='icon'>
                    <TriangleAlert size={16} style={{color: '#E0433E'}}></TriangleAlert>
                </div>
                <div className='middle-content'>
                    <h3>SapSource AB · Sweden</h3>
                    <h4>Labor standard decrease</h4>
                    <h5>Registered 21/08/26</h5>
                </div>
            </div>

            <div className='alert-container'>
                <div className='icon'>
                    <CircleAlert size={16} style={{color: '#F5BB27'}}></CircleAlert>
                </div>
                <div className='middle-content'>
                    <h3>TreeTops Inc · Canada</h3>
                    <h4>Audit missing</h4>
                    <h5>Registered 17/10/26</h5>
                </div>
            </div>
        </Panel>
    )
}