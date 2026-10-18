import React from 'react';


//Komponeten längst ner i sidebaren
export function UserProfile({ initials, name, role}) {
    return (
        <div className='sidebar-user-profile'>
            <div className='avatar'>{initials}</div>
            <div className='user-details'>
                <span className='user-name'>{name}</span>
                <span className='user-role'>{role}</span>
            </div>
            <button className='user-options-btn' type='button' aria-label='Inställningar'>...</button>
        </div>
    )
}

//Indivudell knapp
export function NavItem({ icon, label, badge, isActive, onClick }){
    return(
        <button
            type = "button"
            className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <span className='nav-icon'>{icon}</span>
            <span className='nav-label'>{label}</span>
            {badge !== undefined && <span className='nav-badge'>{badge}</span>}
        </button>
    )
}

export function ExitDemoButton({ onClick }) {
    return (
        <button
            type="button"
            className="sidebar-nav-item exit-demo-button"
            onClick={onClick}
        >
            <span className="nav-label">Exit Demo</span>
        </button>
    )
}
