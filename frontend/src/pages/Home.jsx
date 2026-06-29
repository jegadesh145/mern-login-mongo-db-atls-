import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, KeyRound, Database, ArrowRight, LayoutDashboard } from 'lucide-react';

const Home = ({ user }) => {
  return (
    <div className="page-container">
      <div className="glass-panel landing-hero">
        <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '1rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '0.5rem' }}>
          <Shield size={48} style={{ color: 'var(--accent-purple)' }} />
        </div>
        
        <h1 className="landing-title">MERN Stack Security</h1>
        <p className="landing-desc">
          A secure, fast, and simple user authentication system. Built with MongoDB Atlas, Express.js, React, Node.js, and custom styling.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', width: '100%', margin: '1rem 0' }}>
          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <KeyRound size={24} style={{ color: 'var(--accent-purple)', marginBottom: '0.5rem' }} />
            <h3 style={{ fontSize: '0.95rem', fontWeight: '600' }}>JWT Auth</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Secure token storage</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Shield size={24} style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }} />
            <h3 style={{ fontSize: '0.95rem', fontWeight: '600' }}>Route Guards</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Private route protection</p>
          </div>
          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <Database size={24} style={{ color: 'var(--accent-pink)', marginBottom: '0.5rem' }} />
            <h3 style={{ fontSize: '0.95rem', fontWeight: '600' }}>MongoDB</h3>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Cloud data cluster</p>
          </div>
        </div>

        <div className="landing-actions">
          {user ? (
            <Link to="/dashboard" className="btn-landing-primary">
              <LayoutDashboard size={18} />
              Go to Dashboard
              <ArrowRight size={18} />
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn-landing-primary">
                Login
                <ArrowRight size={18} />
              </Link>
              <Link to="/register" className="btn-secondary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
