'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.session) {
      // Force hard navigate to ensure React state trees and Auth listeners reset
      window.location.href = '/dashboard';
    } else if (data.user) {
      setError('Login matched, but Supabase blocked the session. Is Email Confirm enforced in Auth settings?');
      setLoading(false);
    } else {
      setError('Unknown authentication error.');
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,212,191,0.15), transparent), #042F2E',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>Healthcare Inspiron LIS</h1>
        </div>

        <div style={{
          background: '#0A1F1D',
          border: '1px solid rgba(45,212,191,0.2)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
        }}>
          <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#E6EDF3', marginBottom: '8px' }}>
            Staff Login
          </h1>
          <p style={{ fontSize: '13px', color: '#8B949E', marginBottom: '28px', lineHeight: 1.6 }}>
            Enter your credentials to access the laboratory dashboard
          </p>
          
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#8B949E', marginBottom: '8px' }}>
                Email / Username
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="sharifxray@gmail.com"
                required
                style={{
                  width: '100%', padding: '12px 16px', boxSizing: 'border-box',
                  background: '#042F2E', border: '1px solid #21262D',
                  borderRadius: '10px', color: '#E6EDF3', fontSize: '15px',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#8B949E', marginBottom: '8px' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                style={{
                  width: '100%', padding: '12px 16px', boxSizing: 'border-box',
                  background: '#042F2E', border: '1px solid #21262D',
                  borderRadius: '10px', color: '#E6EDF3', fontSize: '15px',
                  outline: 'none',
                  letterSpacing: '2px'
                }}
              />
            </div>

            {error && <p style={{ color: '#EF4444', fontSize: '12px', marginBottom: '16px' }}>{error}</p>}
            
            <button
              type="submit"
              disabled={loading || !email || !password}
              style={{
                width: '100%', padding: '13px',
                background: loading ? 'rgba(45,212,191,0.4)' : '#2DD4BF',
                border: 'none', borderRadius: '10px',
                color: '#042F2E', fontSize: '14px', fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
              }}
            >
              {loading ? 'Authenticating…' : 'Secure Login →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
