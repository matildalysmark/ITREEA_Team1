import '../style/InfoPanels.css';
import Panel from './Panel';

export default function InfoPanels() {
    return (
        <div className='panels-container'>
            <Panel title="Upcoming reviews" actionText="Calendar →">
                <div className='panel-item'>
                    <div className='date-box'>
                        <h4>8</h4>
                        <h5>nov</h5>
                    </div>
                    <div className='middle-text'>
                        <h3>Bonsaii</h3>
                        <h4 style={{ color: '#969899' }}>Emission review · Terry Birch</h4>
                    </div>
                </div>

                <div className='panel-item'>
                    <div className='date-box'>
                        <h4>19</h4>
                        <h5>nov</h5>
                    </div>
                    <div className='middle-text'>
                        <h3>TerraTrunk AB</h3>
                        <h4 style={{ color: '#969899' }}>Labor audit · Jo Oak</h4>
                    </div>
                </div>

                <div className='panel-item'>
                    <div className='date-box'>
                        <h4>11</h4>
                        <h5>dec</h5>
                    </div>
                    <div className='middle-text'>
                        <h3>Arborex AB</h3>
                        <h4 style={{ color: '#969899' }}>Yearly sustainability audit · Ellen Pine</h4>
                    </div>
                </div>
            </Panel>

            <Panel title="Data quality" actionText="">
                <div className='sub-header'>
                    <div className='date-box' style={{border: '5px solid #42619e', borderRadius:30, width: 60, height: 60, backgroundColor: '#93abdc'}}>
                        <p style={{color: 'black', fontWeight:500}}>86%</p>
                    </div>
                    <div className='middle-text'>
                        <h3>Good, improving</h3>
                        <h4 style={{ color: '#969899' }}>238 of 283 supplier records meet the trusted threshold.</h4>
                    </div>
                </div>
                <div className='field-container'>
                    <span className='field-label'>Required fields</span>
                    <div className='field'>
                        <div className='field-fill' style={{ width: '91%' }}></div>
                    </div>
                    <span className='field-percentage'>91%</span>
                </div>

                <div className='field-container'>
                    <span className='field-label'>Evidence coverage</span>
                    <div className='field'>
                        <div className='field-fill' style={{ width: '76%' }}></div>
                    </div>
                    <span className='field-percentage'>76%</span>
                </div>

                <div className='field-container'>
                    <span className='field-label'>On time</span>
                    <div className='field'>
                        <div className='field-fill' style={{ width: '96%' }}></div>
                    </div>
                    <span className='field-percentage'>96%</span>
                </div>
            </Panel>
        </div>
    );
}