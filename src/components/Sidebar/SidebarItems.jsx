import React from 'react';

// Exit Door Icon Component (Yellow SVG)
function DoorExitIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Door frame & door */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8" />
      <path d="M14 2v20" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
      {/* Arrow leaving the door */}
      <path d="M18 9l3 3-3 3" />
      <path d="M11 12h10" />
    </svg>
  );
}

// Exit Demo Button with clickable door icon + text
export function ExitDemoButton({ onClick }) {
  return (
    <button
      type="button"
      className="exit-demo-button"
      onClick={onClick}
      aria-label="Exit Demo"
    >
      <span className="exit-door-icon-wrapper">
        <DoorExitIcon className="door-icon" />
      </span>
      <span className="exit-demo-text">Exit Demo</span>
    </button>
  );
}

//profile card
export function UserProfile({ initials, name, role }) {
  return (
    <div className="sidebar-user-profile">
      <div className="avatar">{initials}</div>
      <div className="user-details">
        <span className="user-name">{name}</span>
        <span className="user-role">{role}</span>
      </div>
      <button
        className="user-options-btn"
        type="button"
        aria-label="User settings"
        title="Settings"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>
    </div>
  );
}

// Navigation Item
export function NavItem({ icon, label, badge, isActive, onClick }) {
  return (
    <button
      type="button"
      className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {icon && <span className="nav-icon">{icon}</span>}
      <span className="nav-label">{label}</span>
      {badge !== undefined && <span className="nav-badge">{badge}</span>}
    </button>
  );
}

