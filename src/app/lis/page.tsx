'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const IS_DEV = process.env.NEXT_PUBLIC_DEV_BYPASS === 'true';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);

export default function LoginForm() {
  const [email, setEmail]     = useState('');
  const [otp, setOtp]         = useState('');
  const [step, setStep]       = useState<'email' | 'sent'>('email');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [verifying, setVerifying] = useState(false);

  async function handleSendOTP(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    setStep('sent');
    setLoading(false);
  }

  async function handleVerifyOTP(e: React.FormEvent) {
    e.preventDefault();
    setVerifying(true);
    setError('');

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'email',
    });

    if (error) {
      setError(error.message);
      setVerifying(false);
      return;
    }

    if (data.session) {
      // Direct them to the dashboard shell
      window.location.href = '/dashboard';
    }
    setVerifying(false);
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
          {step === 'email' ? (
            <>
              <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#E6EDF3', marginBottom: '8px' }}>
                Sign in
              </h1>
              <p style={{ fontSize: '13px', color: '#8B949E', marginBottom: '28px', lineHeight: 1.6 }}>
                Enter your email — we&apos;ll send a login link
              </p>
              <form onSubmit={handleSendOTP}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#8B949E', marginBottom: '8px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="sharif@lab.com"
                    required
                    style={{
                      width: '100%', padding: '12px 16px', boxSizing: 'border-box',
                      background: '#042F2E', border: '1px solid #21262D',
                      borderRadius: '10px', color: '#E6EDF3', fontSize: '15px',
                      outline: 'none',
                    }}
                  />
                </div>
                {error && <p style={{ color: '#EF4444', fontSize: '12px', marginBottom: '12px' }}>{error}</p>}
                <button
                  type="submit"
                  disabled={loading || !email}
                  style={{
                    width: '100%', padding: '13px',
                    background: loading ? 'rgba(45,212,191,0.4)' : '#2DD4BF',
                    border: 'none', borderRadius: '10px',
                    color: '#042F2E', fontSize: '14px', fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'background 0.2s',
                  }}
                >
                  {loading ? 'Sending…' : 'Send Login Link →'}
                </button>
              </form>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#E6EDF3', marginBottom: '8px' }}>
                Check your email
              </h1>
              <p style={{ fontSize: '13px', color: '#8B949E', marginBottom: '28px', lineHeight: 1.6 }}>
                We sent a login link to <strong style={{ color: '#2DD4BF' }}>{email}</strong>.
                <br />Click the link in the email OR enter the 6-digit code below.
              </p>

              <form onSubmit={handleVerifyOTP}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#8B949E', marginBottom: '8px' }}>
                    6-Digit Code
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="000000"
                    maxLength={6}
                    autoFocus
                    style={{
                      width: '100%', padding: '12px 16px', boxSizing: 'border-box',
                      background: '#042F2E', border: '1px solid #21262D',
                      borderRadius: '10px', color: '#E6EDF3', fontSize: '24px',
                      letterSpacing: '0.5em', outline: 'none', textAlign: 'center',
                    }}
                  />
                </div>
                {error && <p style={{ color: '#EF4444', fontSize: '12px', marginBottom: '12px' }}>{error}</p>}
                <button
                  type="submit"
                  disabled={verifying || otp.length !== 6}
                  style={{
                    width: '100%', padding: '13px',
                    background: verifying || otp.length !== 6 ? 'rgba(45,212,191,0.3)' : '#2DD4BF',
                    border: 'none', borderRadius: '10px',
                    color: '#042F2E', fontSize: '14px', fontWeight: 700,
                    cursor: verifying || otp.length !== 6 ? 'not-allowed' : 'pointer',
                  }}
                >
                   {verifying ? 'Verifying…' : 'Verify Code →'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
