import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
    const location = useLocation();
    const hideOnPaths = ['/login', '/signup', '/forgot-password', '/'];

    if (hideOnPaths.includes(location.pathname)) {
        return null;
    }

    // Simplified to 3 Tabs: Dashboard, Repairs, Profile
    return (
        <nav className="bottom-nav">

            {/* 1. Dashboard (Grid Icon) */}
            <NavLink
                to="/dashboard"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
                <div className="nav-icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </div>
            </NavLink>

            {/* 2. Repairs (Car - Center) */}
            <NavLink
                to="/repairs"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
                <div className="nav-icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"></path>
                        <circle cx="6.5" cy="16.5" r="2.5"></circle>
                        <circle cx="16.5" cy="16.5" r="2.5"></circle>
                    </svg>
                </div>
            </NavLink>

            {/* 3. Profile (User Icon) */}
            <NavLink
                to="/profile"
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
                <div className="nav-icon-container">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
            </NavLink>

        </nav>
    );
};

export default Navigation;
