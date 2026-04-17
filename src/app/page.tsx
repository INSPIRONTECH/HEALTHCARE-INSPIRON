import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Inspiron — LIS Platform | INSPIRON TECH',
  description:
    'Cloud-based Laboratory Information System for Bangladesh healthcare. Built for DGHS-affiliated labs.',
};

export default function HealthcareLandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-teal-600" />
          <span className="font-bold text-gray-900 text-lg">
            Healthcare Inspiron
          </span>
        </div>
        <a
          href="https://lis.inspiron.tech"
          className="bg-teal-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Lab Login →
        </a>
      </header>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
          Built for Bangladesh Healthcare
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Laboratory Information System<br />
          <span className="text-teal-600">for DGHS-Affiliated Labs</span>
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          Real-time CBC result capture, automatic HL7 parsing, cloud sync,
          and patient report generation — deployed and managed by
          INSPIRON TECH, Dhaka.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@inspiron.tech"
            className="bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Request a Demo
          </a>
          <a
            href="https://lis.inspiron.tech"
            className="border border-teal-600 text-teal-600 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition"
          >
            Lab Portal Login
          </a>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🔬',
              title: 'Analyzer Integration',
              desc: 'Direct TCP/HL7 connection to Mindray BC-20, BC-30, and compatible analyzers. Zero manual entry.',
            },
            {
              icon: '☁️',
              title: 'Cloud Sync',
              desc: 'Every CBC result synced to secure cloud in real time. Access from any device, anywhere.',
            },
            {
              icon: '📋',
              title: 'DGHS-Ready Reports',
              desc: 'Formatted patient reports compliant with Bangladesh health authority standards.',
            },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="text-center py-10 text-sm text-gray-400">
        © 2026 INSPIRON TECH, Dhaka, Bangladesh ·{' '}
        <a href="https://inspiron.tech" className="hover:text-teal-600">
          inspiron.tech
        </a>
      </footer>
    </main>
  );
}
