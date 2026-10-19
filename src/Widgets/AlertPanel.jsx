import '../style/AlertPanel.css';
import Panel from './Panel';
import { NotepadText, Mail } from 'lucide-react';

export default function AlertPanel() {

    return (
        <Panel title="Audits" actionText="View all →">
            <div className='alert-container'>
                <div className='icon'>
                    <Mail size={16}></Mail>
                </div>
                <div className='middle-content'>
                    <h3>Routine Audit</h3>
                    <h4>Oak-ay Inc · USA</h4>
                    <h5>14/11/26</h5>
                </div>
            </div>

            <div className='alert-container'>
                <div className='icon'>
                    <Mail size={16}></Mail>
                </div>
                <div className='middle-content'>
                    <h3>Routine Audit</h3>
                    <h4>TerraTrunk AB · Sweden</h4>
                    <h5>21/11/26</h5>
                </div>
            </div>

            <div className='alert-container'>
                <div className='icon'>
                    <NotepadText size={16}></NotepadText>
                </div>
                <div className='middle-content'>
                    <h3>On-site Inspection</h3>
                    <h4>TreeTops Inc · Canada</h4>
                    <h5>03/12/26</h5>
                </div>
            </div>
        </Panel>
    )
}