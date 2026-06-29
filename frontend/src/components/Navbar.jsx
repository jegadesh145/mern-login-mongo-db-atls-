import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Shield, LogOut, LayoutDashboard, LogIn, UserPlus } from 'lucide-react';

const Navbar = ({ user, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <Shield size={28} style={{ color: 'var(--accent-cyan)' }} />
        <span>MERN Auth</span>
      </Link>
      
      <ul className="nav-links">
        {user ? (
          <>
            <li>
              <Link 
                to="/dashboard" 
                className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={() => handleLogout(navigate)} className="nav-btn-logout">
                <LogOut size={16} />
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link 
                to="/login" 
                className={`nav-link ${isActive('/login') ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <LogIn size={18} />
                Login
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className={`nav-link ${isActive('/register') ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <UserPlus size={18} />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
