import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, ShieldCheck, Database, KeyRound, AlertTriangle } from 'lucide-react';
import api from '../api';

const Dashboard = ({ handleLogout }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/profile');
        setProfile(response.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Session expired or unauthorized. Logging out...');
        // Wait 2 seconds then log out
        setTimeout(() => {
          handleLogout(navigate);
        }, 2000);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [handleLogout, navigate]);

  if (loading) {
    return (
      <div className="page-container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div className="spinner" style={{ width: '40px', height: '40px', borderThickness: '3px' }}></div>
          <p style={{ color: 'var(--text-secondary)' }}>Loading secure session...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="glass-panel" style={{ padding: '2rem', maxWidth: '400px', textAlign: 'center' }}>
          <AlertTriangle size={48} style={{ color: 'var(--color-error)', marginBottom: '1rem' }} />
          <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="glass-panel dashboard-container">
        <div className="dashboard-header">
          <div className="welcome-section">
            <h1>Hello, {profile?.name}!</h1>
            <p>Welcome to your secure, authenticated dashboard workspace.</p>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="glass-panel profile-card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
              Profile Account Details
            </h2>
            
            <div className="info-item">
              <span className="info-label">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <User size={14} /> Full Name
                </span>
              </span>
              <span className="info-value">{profile?.name}</span>
            </div>

            <div className="info-item">
              <span className="info-label">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={14} /> Email Address
                </span>
              </span>
              <span className="info-value">{profile?.email}</span>
            </div>

            <div className="info-item">
              <span className="info-label">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} /> Member Since
                </span>
              </span>
              <span className="info-value">
                {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                }) : 'N/A'}
              </span>
            </div>
            
            <div className="info-item">
              <span className="info-label">Database Document ID (MongoDB)</span>
              <span className="info-value" style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: 'var(--accent-cyan)' }}>
                {profile?._id}
              </span>
            </div>
          </div>

          <div className="quick-stats">
            <div className="glass-panel stat-box">
              <div className="stat-icon">
                <ShieldCheck size={24} />
              </div>
              <div className="stat-details">
                <span className="stat-number">Active</span>
                <span className="stat-label">JWT Authorization Status</span>
              </div>
            </div>

            <div className="glass-panel stat-box">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-cyan)' }}>
                <Database size={24} />
              </div>
              <div className="stat-details">
                <span className="stat-number">Atlas Connected</span>
                <span className="stat-label">Database Connection Host</span>
              </div>
            </div>

            <div className="glass-panel stat-box">
              <div className="stat-icon" style={{ backgroundColor: 'rgba(236, 72, 153, 0.15)', color: 'var(--accent-pink)' }}>
                <KeyRound size={24} />
              </div>
              <div className="stat-details">
                <span className="stat-number">HMAC-SHA256</span>
                <span className="stat-label">Token Signature Type</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
