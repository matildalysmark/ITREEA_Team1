import '../style/Panel.css';

export default function Panel({ title, actionText, children }) {
    return (
        <div className='panel-container'>
            <div className='header-container'>
                <h2>{title}</h2>
                {actionText && <h6>{actionText}</h6>}
            </div>
            <div className='panel-content'>
                {children}
            </div>
        </div>
    );
}