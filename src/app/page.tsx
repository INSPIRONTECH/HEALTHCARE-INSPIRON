import Link from "next/link";
import { 
  ShieldCheck, ArrowRight, Activity, Cpu, 
  Users, Stethoscope, Lock, Server, BarChart3, CloudIcon, BadgeCheck, FileText, Database
} from "lucide-react";
import { HealthcareLogo, HealthcareSeal, HealthcareWatermark } from "@/components/HealthcareLogo";

export default function LandingPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#010409] font-neo text-hi-text overflow-x-hidden selection:bg-hi-teal/30">
      
      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#010409]/90 backdrop-blur-xl border-b border-white/5 transition-all">
        <HealthcareLogo variant="horizontal" size={42} />

        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.15em] uppercase text-hi-muted">
          <Link href="#platform" className="hover:text-white hover:-translate-y-0.5 transition-all">Platform</Link>
          <Link href="#compliance" className="hover:text-hi-teal hover:-translate-y-0.5 transition-all">Compliance</Link>
          <Link href="#pricing" className="hover:text-white hover:-translate-y-0.5 transition-all">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="https://lis.inspiron.tech/login" 
            target="_blank"
            className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-hi-muted hover:text-white transition-colors"
          >
            Client Portal
          </Link>
          <Link 
            href="mailto:hello@inspiron.tech"
            className="group relative bg-hi-cyan/5 border border-hi-teal/30 hover:border-hi-teal text-hi-teal px-5 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-hi-teal/10 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10">Request Demo</span>
          </Link>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative px-6 pt-32 pb-40 text-center flex flex-col items-center justify-center min-h-[90vh] border-b border-white/5 overflow-hidden">
        {/* Dynamic Glow Backgrounds */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] h-[70%] bg-gradient-to-b from-hi-teal/15 to-transparent blur-[140px] pointer-events-none rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[30%] right-[-10%] w-[50%] h-[60%] bg-hi-amber/5 blur-[120px] pointer-events-none rounded-full"></div>
        
        {/* Massive Brand Watermark */}
        <div className="absolute top-[10%] left-[5%] transform -rotate-12 scale-[2] origin-top-left pointer-events-none">
          <HealthcareWatermark />
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
          {/* Protocol Badge (tag-r from Guidelines) */}
          <div className="inline-flex items-center gap-3 border border-hi-danger/20 bg-hi-danger/10 text-hi-danger text-[9.5px] font-extrabold px-3 py-1 rounded-full mb-12 tracking-[0.18em] uppercase cursor-default group backdrop-blur-[2px]">
            <span className="w-1.5 h-1.5 bg-hi-danger rounded-full animate-pulse group-hover:scale-125 transition-transform"></span>
            Bangladesh 2025 Data Ordinance Compliant
          </div>

          {/* Architectural Hero Logo (V2) */}
          <div className="mb-16 mt-8 flex flex-col items-center animate-fade-in drop-shadow-2xl">
            <HealthcareLogo variant="stacked" size={160} theme="dark" />
          </div>

          <p className="italic text-hi-amber/90 text-[15px] sm:text-lg font-medium mb-6">"Your lab. Your doctors. Your data."</p>
          <p className="text-[15px] sm:text-[17px] text-hi-muted max-w-3xl mx-auto mb-16 leading-relaxed">
            The closed proprietary infrastructure engineered exclusively for Bangladesh diagnostic centers. Connect physical <strong className="text-hi-text">Mindray analyzers</strong> directly to the cloud, automate exact <strong className="text-hi-text">doctor commissions</strong>, and synchronize seamlessly with <strong className="text-[#39d353]">DGHS FHIR records</strong>.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 w-full max-w-4xl">
            <div className="flex flex-col items-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:-translate-y-2 hover:border-hi-teal/30 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-extrabold text-hi-teal mb-2">10k+</div>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest text-center">Diagnostic Centers<br/>In Bangladesh</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:-translate-y-2 hover:border-[#39d353]/30 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-extrabold text-[#39d353] mb-2">100%</div>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest text-center">Data Residency<br/>Within BD</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:-translate-y-2 hover:border-hi-amber/30 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-extrabold text-hi-amber mb-2">৳3,500</div>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest text-center">Flat Monthly<br/>Pro Tier</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:-translate-y-2 hover:border-[#a371f7]/30 hover:bg-white/10 transition-all duration-300">
              <div className="text-4xl font-extrabold text-white mb-2 flex items-center justify-center gap-1">
                <ShieldCheck size={32} color="#a371f7"/>
              </div>
              <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest text-center mt-2">Closed System<br/>Zero Leakage</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOVT COMPLIANCE (DGHS & 2025 ORDINANCE) ── */}
      <section id="compliance" className="px-6 py-32 border-b border-white/5 bg-[#0a0d14] relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#39d353]/5 to-transparent pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <div className="text-[10px] font-black tracking-[0.25em] text-[#39d353] uppercase mb-4">Government Standardization</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Built for DGHS & Data Residency.</h2>
              <p className="text-hi-muted mb-8 leading-relaxed text-[15px]">
                99.6 lakh clinical records exist in the national Shared Health Record — <strong className="text-red-400">zero from private labs.</strong> Every record from Bangladesh's 9,500 private labs is currently untethered from the national health infrastructure. Healthcare Inspiron is the first fully compliant, FHIR-ready bridge.
              </p>
              
              <div className="space-y-6">
                {/* Doctrine Reference Box styling from BRAND-GUIDELINES */}
                <div className="flex items-start gap-5 p-5 rounded-[12px] bg-hi-teal/5 border border-hi-teal/20 hover:bg-hi-teal/10 hover:border-hi-teal/30 transition-all shadow-[0_0_15px_rgba(45,212,191,0.03)] group">
                  <div className="shrink-0 drop-shadow-[0_0_12px_rgba(45,212,191,0.53)]">
                    <Server size={24} color="var(--color-hi-teal)" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-extrabold tracking-[0.18em] uppercase text-hi-teal mb-2">2025 Data Ordinance Compliance</h4>
                    <p className="text-[12.5px] text-hi-muted leading-relaxed font-medum">
                      All patient-identifiable data has a mandatory Bangladesh-jurisdiction copy. Primary cloud runs on Oracle Singapore, mirrored via <code className="text-white border px-1 border-white/10 rounded">Rclone</code> to a Dhaka VPS nightly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-[12px] bg-hi-amber/5 border border-hi-amber/20 hover:bg-hi-amber/10 hover:border-hi-amber/30 transition-all shadow-[0_0_15px_rgba(245,158,11,0.03)] group">
                  <div className="shrink-0 drop-shadow-[0_0_12px_rgba(245,158,11,0.53)]">
                    <Database size={24} color="var(--color-hi-amber)" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-extrabold tracking-[0.18em] uppercase text-hi-amber mb-2">FHIR Ready (R4 / STU3 JSON)</h4>
                    <p className="text-[12.5px] text-hi-muted leading-relaxed font-medium">
                      Records pre-seeded with LOINC codes (CBC, Creatinine). Patient registration connects directly with the DGHS NID Proxy—bilingual auto-fill triggers in 824ms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Code Block Representation */}
            <div className="lg:w-1/2 w-full relative">
              {/* Brand Watermark / Stamp overlay */}
              <div className="absolute right-[-40px] -bottom-10 opacity-30 drop-shadow-2xl z-20 pointer-events-none transform rotate-[10deg] scale-125 hidden sm:block">
                <HealthcareSeal theme="dark" />
              </div>
              <div className="bg-[#0D1117] border border-hi-border rounded-2xl overflow-hidden shadow-2xl relative group z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-hi-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="flex flex-col border-b border-hi-border bg-black/40 px-4 py-3">
                  <div className="flex gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-hi-danger"></div>
                    <div className="w-3 h-3 rounded-full bg-hi-amber"></div>
                    <div className="w-3 h-3 rounded-full bg-hi-teal"></div>
                  </div>
                  <div className="text-[10px] font-mono text-hi-muted flex justify-between w-full">
                    <span>POST nidproxy.mcishr.dghs.gov.bd</span>
                    <span className="text-hi-teal">200 OK — 824ms</span>
                  </div>
                </div>
                <div className="p-6 font-mono text-[13px] leading-loose overflow-x-auto text-white/80">
                  <span className="text-hi-muted">// Input parameter provided by Lab Tech</span><br/>
                  <span className="text-purple-400">const</span> NID_NO = <span className="text-green-400">"1985-XX-XXXXXXXX"</span>;<br/><br/>
                  <span className="text-hi-muted">// System automatically extracts and maps:</span><br/>
                  <span className="text-hi-teal">&quot;name_bn&quot;</span>: <span className="text-green-400">"মোঃ করিম আহমেদ"</span>,<br/>
                  <span className="text-hi-teal">&quot;name_en&quot;</span>: <span className="text-green-400">"MD Karim Ahmed"</span>,<br/>
                  <span className="text-hi-teal">&quot;dob&quot;</span>: <span className="text-green-400">"1985-04-12"</span>,<br/>
                  <span className="text-hi-teal">&quot;gender&quot;</span>: <span className="text-green-400">"M"</span>,<br/>
                  <span className="text-hi-teal">&quot;district_id&quot;</span>: <span className="text-orange-300">10</span>, <span className="text-hi-muted">// Barishal</span><br/>
                  <span className="text-hi-teal">&quot;father_name_bn&quot;</span>: <span className="text-green-400">"আব্দুল্লাহ"</span><br/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PLATFORM (TWO SIDES) ── */}
      <section id="platform" className="px-6 py-32 border-b border-white/5 bg-[#010409]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-[10px] font-black tracking-[0.25em] text-white/50 uppercase mb-4">Platform Architecture</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Two Sides, One Engineered System.</h2>
            <p className="text-hi-muted max-w-2xl mx-auto text-sm leading-relaxed">
              We eliminated the most common laboratory software failures—database lock-ins, missing commissions, and reinstall fees. The result is an elegant B2B2C flywheel.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* DOCTOR PORTAL */}
            <div className="group relative bg-hi-panel border border-hi-border rounded-[32px] p-10 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
               {/* Hover Glow */}
               <div className="absolute -inset-px bg-gradient-to-br from-hi-teal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-[32px] transition-opacity duration-500 pointer-events-none"></div>
               
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-hi-teal/10 p-3.5 rounded-2xl border border-hi-teal/20 shadow-[0_0_15px_rgba(45,212,191,0.1)]">
                      <Stethoscope className="text-hi-teal" size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-hi-teal">Doctor<br/>Portal</h3>
                  </div>
                  <div className="bg-hi-teal/10 text-hi-teal border border-hi-teal/20 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.2)] backdrop-blur-sm">
                    Free Forever
                  </div>
                </div>
                
                <p className="text-hi-muted text-sm leading-relaxed mb-8 h-[60px]">
                  Give referrers exact visibility over their patient load. <strong className="text-white">Doctors become your most powerful affiliates</strong> when they can track their percentages in real-time.
                </p>

                <ul className="space-y-5 text-[13px] text-white/80 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 bg-hi-teal/10 rounded-full p-1"><Cpu className="text-hi-teal" size={14}/></div>
                    <span><strong className="text-white">Live Commission Ledger:</strong> View real-time aggregated earnings across all associated test procedures.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 bg-hi-teal/10 rounded-full p-1"><FileText className="text-hi-teal" size={14}/></div>
                    <span><strong className="text-white">Voucher Extraction:</strong> 1-click printable PDF records of all monthly cleared payments.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 bg-hi-teal/10 rounded-full p-1"><BarChart3 className="text-hi-teal" size={14}/></div>
                    <span><strong className="text-white">Patient Timelines:</strong> Track critical patient values (HbA1c, Creatinine) longitudinally across visits.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* LAB PRO */}
            <div className="group relative bg-hi-panel border border-hi-border rounded-[32px] p-10 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
               {/* Hover Glow */}
               <div className="absolute -inset-px bg-gradient-to-br from-hi-amber/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-[32px] transition-opacity duration-500 pointer-events-none"></div>
               
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="bg-hi-amber/10 p-3.5 rounded-2xl border border-hi-amber/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                      <Activity className="text-hi-amber" size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-hi-amber">Lab Pro<br/>Suite</h3>
                  </div>
                  <div className="relative overflow-hidden bg-hi-amber text-[#010409] border border-hi-amber text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                    <span className="relative z-10">৳3,500 / Month</span>
                    {/* Shine effect */}
                    <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 cursor-pointer animate-[shine_4s_infinite]"></div>
                  </div>
                </div>
                
                <p className="text-hi-muted text-sm leading-relaxed mb-8 h-[60px]">
                  The master terminal. Completely decoupled from third-party remote dependencies. <strong className="text-white">Zero reinstall lockouts. Complete offline resilience.</strong>
                </p>

                <ul className="space-y-5 text-[13px] text-white/80 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 bg-hi-amber/10 rounded-full p-1"><Server className="text-hi-amber" size={14}/></div>
                    <span><strong className="text-white">Mindray Hardware TCP/IP:</strong> Direct Port 5100 bidirectional ingestion for BC/BS analysis machines.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 bg-hi-amber/10 rounded-full p-1"><CheckIcon stroke="var(--color-hi-amber)"/></div>
                    <span><strong className="text-white">Unified Color-Coded PDFs:</strong> Group biochemistry, serology, and haem results effortlessly into single-print assets.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 bg-hi-amber/10 rounded-full p-1"><Lock className="text-hi-amber" size={14}/></div>
                    <span><strong className="text-white">Offline-First Queues:</strong> Continues local execution securely during rolling power or internet cuts.</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── PRICING MATRIX ── */}
      <section id="pricing" className="px-6 py-32 bg-[#0a0d14] border-b border-white/5 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-gradient-to-t from-hi-teal/5 to-transparent pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-4">Transparent Pricing.</h2>
            <p className="text-hi-muted text-sm max-w-2xl mx-auto">No negotiated hidden fees. No "call for pricing". Only two official tiers.</p>
          </div>

          <div className="grid md:grid-cols-2 bg-[#010409] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative">
            
            {/* PRO */}
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 relative group">
              <div className="absolute inset-0 bg-hi-amber/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-hi-amber mb-6">Standard Lab Rollout</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">৳40,000</span>
                  <span className="text-xs font-bold text-hi-muted uppercase tracking-widest">Setup</span>
                </div>
                <div className="text-[13px] font-bold text-hi-amber/70 mb-10 tracking-wide">+ ৳3,500 RECURRING MONTHLY</div>
                
                <ul className="space-y-5 text-[13px] text-white/80 font-medium">
                  <li className="flex items-center gap-4"><CheckIcon stroke="var(--color-hi-amber)"/> <span>1 Authorized Physical Terminal ID</span></li>
                  <li className="flex items-center gap-4"><CheckIcon stroke="var(--color-hi-amber)"/> <span>Unlimited LIS Testing Volume</span></li>
                  <li className="flex items-center gap-4"><CheckIcon stroke="var(--color-hi-amber)"/> <span>NID Gov Proxy Authentication Included</span></li>
                  <li className="flex items-center gap-4"><CheckIcon stroke="var(--color-hi-amber)"/> <span>Unlimited Referral Doctors on Portal</span></li>
                  <li className="flex items-center gap-4"><CheckIcon stroke="var(--color-hi-amber)"/> <span>Nightly Database Mirror Snapshot</span></li>
                </ul>
              </div>
            </div>

            {/* ENTERPRISE */}
            <div className="p-10 md:p-14 bg-gradient-to-b from-[#13111C] to-[#010409] relative group">
              <div className="absolute inset-0 bg-[#a371f7]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#a371f7] mb-6">Multi-Branch Chain</div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-white">৳80,000<span className="text-[#a371f7]">+</span></span>
                  <span className="text-xs font-bold text-hi-muted uppercase tracking-widest">Setup</span>
                </div>
                <div className="text-[13px] font-bold text-[#a371f7]/70 mb-10 tracking-wide">PRIVATE CUSTOM SLA</div>
                
                <ul className="space-y-5 text-[13px] text-white/80 font-medium">
                  <li className="flex items-center gap-4"><CheckIcon stroke="#a371f7"/> <span>Multi-branch Sub-tenant Dashboard</span></li>
                  <li className="flex items-center gap-4"><CheckIcon stroke="#a371f7"/> <span>White-label Aesthetics & Theming</span></li>
                  <li className="flex items-center gap-4"><CheckIcon stroke="#a371f7"/> <span>DGHS UHID Deep Encounter Sync</span></li>
                  <li className="flex items-center gap-4"><CheckIcon stroke="#a371f7"/> <span>Priority 24/7 Operations Support</span></li>
                  <li className="flex items-center gap-4"><CheckIcon stroke="#a371f7"/> <span>Custom Analyzer TCP/LIMS Bridges</span></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mt-auto px-6 pt-24 pb-12 text-center bg-[#010409] border-t border-white/5 relative">
        <div className="flex justify-center mb-10 opacity-30 hover:opacity-100 transition-opacity duration-500">
          <HealthcareLogo variant="stacked" size={64} theme="dark" />
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-hi-amber/60 mb-8">“Your lab. Your doctors. Your data.”</div>
        <div className="text-[10px] uppercase tracking-widest text-white/30">
          DESIGNED & ENGINEERED BY <strong className="text-white/60">INSPIRON TECH</strong> · BANGLADESH <br/><br/>
          Copyright © 2026
        </div>
      </footer>

      {/* Embedded Animations CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          20%, 100% { transform: translateX(300%) skewX(-12deg); }
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}} />
    </main>
  );
}

function CheckIcon({ stroke = "#2DD4BF" }: { stroke?: string }) {
  return <ShieldCheck size={18} color={stroke} className="shrink-0 drop-shadow-[0_0_5px_currentColor]" />;
}
