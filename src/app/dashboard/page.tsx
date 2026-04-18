'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
);

export default function Dashboard() {
  const [results, setResults] = useState<any[]>([]);
  const [loadingObj, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuthAndFetch() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = '/lis';
        return;
      }
      
      const { data } = await supabase
        .from('analyzer_results')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);
        
      setResults(data || []);
      setLoading(false);
    }
    checkAuthAndFetch();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/lis';
  }

  if (loadingObj) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-400">Loading Dashboard...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-teal-600" />
          <span className="font-bold text-gray-900 text-lg">
            LIS Dashboard
          </span>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-gray-500 hover:text-gray-900 transition"
        >
          Sign Out
        </button>
      </header>

      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Lab Results — Live Queue
        </h1>
        
        {results.length === 0 ? (
          <div className="text-center py-20 bg-white border rounded-xl border-dashed">
            <span className="text-4xl block mb-4">🩺</span>
            <p className="text-gray-500">No analyzer results found yet.</p>
            <p className="text-sm text-gray-400 mt-2">Run a sample on the BC-20 to see it here automatically.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((r) => (
              <div key={r.id} className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-900">
                    Sample ID: <span className="text-teal-600">{r.sample_id || 'N/A'}</span>
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(r.created_at).toLocaleString()}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-3 text-sm">
                  {[
                    ['WBC', r.wbc, '10⁹/L'],
                    ['RBC', r.rbc, '10¹²/L'],
                    ['HGB', r.hgb, 'g/dL'],
                    ['HCT', r.hct, '%'],
                    ['MCV', r.mcv, 'fL'],
                    ['MCH', r.mch, 'pg'],
                    ['PLT', r.plt, '10⁹/L'],
                    ['LYM%', r.lym_pct, '%'],
                  ].map(([label, value, unit]) => (
                    <div key={label as string}
                      className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-400">{label}</div>
                      <div className="font-bold text-gray-900 text-lg">
                        {value ?? '—'}
                      </div>
                      <div className="text-xs text-gray-400">{unit}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => window.print()}
                  className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg text-sm font-semibold tracking-wide hover:bg-teal-700 transition"
                >
                  🖨️ Print Clinical Result
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
