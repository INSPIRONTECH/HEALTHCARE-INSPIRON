'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Dashboard() {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from('analyzer_results')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20)
      .then(({ data }) => setResults(data || []));
  }, []);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Lab Results — Live
      </h1>
      <div className="space-y-4">
        {results.map((r) => (
          <div key={r.id} className="bg-white border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-900">
                Sample: {r.sample_id || 'N/A'}
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
                  className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-xs text-gray-400">{label}</div>
                  <div className="font-bold text-gray-900">
                    {value ?? '—'}
                  </div>
                  <div className="text-xs text-gray-400">{unit}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => window.print()}
              className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-teal-700"
            >
              🖨️ Print This Result
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
