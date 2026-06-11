import Link from "next/link";
import {
  ArrowRight, Activity, Cpu,
  Lock, BadgeCheck, FileText, Database,
  ShieldCheck, CheckCircle2, MessageCircle, PlayCircle, ChevronRight
} from "lucide-react";
import { HealthcareLogo, HealthcareWatermark } from "@/components/HealthcareLogo";

// ── WhatsApp WABA — public CTA number (Opus directive: WABA only, not personal)
const WABA_NUMBER = "8801601618030";
const WABA_URL = `https://wa.me/${WABA_NUMBER}`;

export default function LandingPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#010409] font-neo text-hi-text overflow-x-hidden selection:bg-hi-teal/30">

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-5 py-3.5 bg-[#010409]/95 backdrop-blur-xl border-b border-white/5">
        <HealthcareLogo variant="horizontal" size={36} />

        <div className="hidden md:flex items-center gap-8 text-[10.5px] font-bold tracking-[0.14em] uppercase text-hi-muted">
          <Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="#why-different" className="hover:text-hi-teal transition-colors">Why Different</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Client Portal — small corner link for existing users ONLY */}
          <Link
            href="https://lis.inspiron.tech"
            target="_blank"
            className="hidden sm:block text-[9.5px] font-bold uppercase tracking-widest text-white/25 hover:text-white/50 transition-colors"
          >
            Client Portal
          </Link>
          <Link
            href={WABA_URL}
            target="_blank"
            className="group relative bg-hi-teal/10 border border-hi-teal/30 hover:border-hi-teal text-hi-teal px-4 py-2 rounded-sm text-[10.5px] font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] overflow-hidden flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-hi-teal/10 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-300" />
            <MessageCircle size={13} className="relative z-10" />
            <span className="relative z-10">Book Free Demo</span>
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 1 — HERO                                                  */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="relative px-6 pt-28 pb-36 text-center flex flex-col items-center justify-center min-h-[90vh] border-b border-white/5 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[100%] md:w-[70%] h-[65%] bg-gradient-to-b from-hi-teal/12 to-transparent blur-[130px] pointer-events-none rounded-full" />
        {/* Watermark */}
        <div className="absolute top-[8%] left-[3%] transform -rotate-12 scale-[2.2] origin-top-left pointer-events-none opacity-60">
          <HealthcareWatermark />
        </div>
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(45,212,191,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto w-full">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 border border-[#39d353]/25 bg-[#39d353]/8 text-[#39d353] text-[9px] font-extrabold px-3.5 py-1.5 rounded-full mb-10 tracking-[0.2em] uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-[#39d353] rounded-full animate-pulse" />
            Live Now · Dhaka, Bangladesh
          </div>

          {/* Logo */}
          <div className="mb-12 flex flex-col items-center animate-fade-in">
            <HealthcareLogo variant="stacked" size={130} theme="dark" />
          </div>

          {/* Headline — Opus's exact positioning */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            The only Laboratory Information System built to connect your lab to{" "}
            <span className="text-[#39d353]">Bangladesh's national health record.</span>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-hi-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Live now. Built for Bangladesh's diagnostic labs — from a single-room upazila clinic to a multi-partner diagnostic centre.
          </p>

          {/* CTAs — Opus: "Watch it work" primary, "Book demo" secondary */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#proof"
              className="group flex items-center gap-3 bg-hi-teal text-[#010409] px-7 py-3.5 rounded-sm text-[12px] font-extrabold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-hi-teal/90 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
            >
              <PlayCircle size={16} />
              Watch It Work
            </Link>
            <Link
              href={WABA_URL}
              target="_blank"
              className="group flex items-center gap-3 border border-white/15 hover:border-white/30 text-white/70 hover:text-white px-7 py-3.5 rounded-sm text-[12px] font-extrabold uppercase tracking-[0.14em] transition-all duration-300"
            >
              <MessageCircle size={16} />
              Book a Free Live Demo
            </Link>
          </div>

          <p className="mt-5 text-[10.5px] text-hi-muted/60">
            Via WhatsApp · No commitment · You see the live system working
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 2 — PROOF (demo video)                                    */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="proof" className="px-6 py-24 border-b border-white/5 bg-[#0a0d14]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-[9.5px] font-black tracking-[0.25em] text-hi-teal uppercase mb-3">The Live System</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              This is the actual system. No mockups.
            </h2>
            <p className="text-hi-muted text-sm max-w-xl mx-auto">
              This is the actual system running on our live demonstration lab (Meghna Diagnostic Centre) — running on our live demonstration system.
            </p>
          </div>

          {/* Demo Video — actual system recording */}
          <div className="relative bg-[#0D1117] border border-hi-border rounded-2xl overflow-hidden shadow-2xl aspect-video group hover:border-hi-teal/30 transition-all duration-500">
            {/* Terminal chrome header */}
            <div className="absolute top-0 left-0 right-0 h-9 bg-[#070b12] border-b border-white/5 flex items-center justify-between px-4 z-20 pointer-events-none">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-hi-danger" />
                <div className="w-2.5 h-2.5 rounded-full bg-hi-amber" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#39d353]" />
              </div>
              <div className="text-[9px] font-mono text-[#39d353] uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#39d353] rounded-full animate-pulse" />
                Live System · Demonstration Lab
              </div>
              <div className="w-14" />
            </div>

            {/* HTML5 video player */}
            <video
              src="/demo.mp4"
              className="w-full h-full object-cover pt-9"
              controls
              playsInline
              autoPlay
              muted
              loop
            />
          </div>

          <p className="text-center text-hi-muted/60 text-[11px] mt-5">
            Any report shown is from our live demonstration system. Patient names anonymized.
          </p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 3 — CONNECTED WORKFLOW (flow, not feature dump)           */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="how-it-works" className="px-6 py-28 border-b border-white/5 bg-[#010409]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[9.5px] font-black tracking-[0.25em] text-hi-amber uppercase mb-3">The Connected Workflow</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Register. Analyze. Verify. Report. Connect.
            </h2>
            <p className="text-hi-muted text-sm max-w-2xl mx-auto">
              Every step in your diagnostic workflow, in one connected system. No manual re-entry. No lost results.
            </p>
          </div>

          {/* Workflow steps */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-0 relative">
            {/* Connecting line — desktop */}
            <div className="hidden md:block absolute top-[38px] left-[calc(10%-8px)] right-[calc(10%-8px)] h-px bg-gradient-to-r from-transparent via-hi-teal/30 to-transparent z-0" />

            {[
              {
                step: "01",
                title: "Register",
                desc: "Patient arrives. Reception fills name, age, and phone on one screen. A unique Sample ID is auto-generated — no manual entry.",
                color: "hi-teal",
                icon: <Cpu size={20} className="text-hi-teal" />,
                live: true,
              },
              {
                step: "02",
                title: "Analyzer Auto-Handoff",
                desc: "Mindray BC-20 connects via TCP/IP Port 5100. CBC lands automatically on the correct order. Zero re-typing.",
                color: "hi-teal",
                icon: <Activity size={20} className="text-hi-teal" />,
                live: true,
              },
              {
                step: "03",
                title: "Verify",
                desc: "Lab technician reviews the results on screen. One click to verify — the system marks it done and opens the bilingual report instantly.",
                color: "hi-amber",
                icon: <BadgeCheck size={20} className="text-hi-amber" />,
                live: true,
              },
              {
                step: "04",
                title: "Bilingual Report",
                desc: "Clean A4 PDF — LOINC-coded, bilingual (Bangla + English), QR verification code, lab letterhead, signed.",
                color: "hi-amber",
                icon: <FileText size={20} className="text-hi-amber" />,
                live: true,
              },
              {
                step: "05",
                title: "Submit to DGHS SHR",
                desc: "Being engineered to submit FHIR R4 records to Bangladesh's national Shared Health Record. This is the direction — in development, not live yet.",
                color: "[#39d353]",
                icon: <Database size={20} className="text-[#39d353]" />,
                live: false,
                badge: "In Development",
              },
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center flex-1 px-2 md:px-3">
                {/* Step number */}
                <div className={`w-16 h-16 rounded-2xl bg-${s.color}/10 border border-${s.color}/25 flex flex-col items-center justify-center mb-4 shadow-[0_0_20px_rgba(45,212,191,0.05)] relative`}>
                  {s.icon}
                  {!s.live && (
                    <div className="absolute -top-2 -right-2 bg-[#a371f7] text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full text-white">
                      Soon
                    </div>
                  )}
                </div>
                <div className="text-[9px] font-black tracking-[0.2em] text-hi-muted/50 uppercase mb-1">Step {s.step}</div>
                <div className="text-[13px] font-extrabold text-white mb-2">{s.title}</div>
                <div className="text-[11.5px] text-hi-muted leading-relaxed max-w-[160px]">{s.desc}</div>
                {/* Connector arrow — between steps */}
                {i < 4 && (
                  <div className="hidden md:block absolute top-8 -right-3 text-hi-teal/30">
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 4 — WHY DIFFERENT (4 real moats)                         */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="why-different" className="px-6 py-28 border-b border-white/5 bg-[#0a0d14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[9.5px] font-black tracking-[0.25em] text-hi-teal uppercase mb-3">The Real Moats</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Why it&apos;s different.
            </h2>
            <p className="text-hi-muted text-sm max-w-2xl mx-auto">
              Not a feature list. These are the structural advantages no competitor can copy quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Activity className="text-hi-teal" size={28} />,
                color: "hi-teal",
                label: "5-Minute Mindray Integration",
                body: "Connect your Mindray BC-20 or BC-30 analyzer via TCP/IP in about five minutes. Enter the sample number — the CBC lands automatically on the correct order. No manual transcription. No mismatches. This is a protocol-level integration, not a manual import.",
                live: true,
              },
              {
                icon: <FileText className="text-hi-amber" size={28} />,
                color: "hi-amber",
                label: "Bilingual Single-Page A4 Reports",
                body: "Patient results printed in Bangla and English on one clean A4 page — with your lab's letterhead, QR verification code, LOINC codes, reference ranges, and abnormal value flagging. No formatting work. Print once, professionally done.",
                live: true,
              },
              {
                icon: <Database className="text-[#39d353]" size={28} />,
                color: "[#39d353]",
                label: "Built to Submit to DGHS SHR",
                body: "9,500 private labs in Bangladesh currently contribute zero records to the national Shared Health Record. Healthcare Inspiron is being engineered to submit FHIR R4 DiagnosticReports directly to the DGHS SHR — as far as we know, the first private LIS building toward this.",
                live: false,
                badge: "In Development",
              },
              {
                icon: <ShieldCheck className="text-[#a371f7]" size={28} />,
                color: "[#a371f7]",
                label: "Claude AI Safety Layer",
                body: "A critical-result flagging system powered by Claude AI — when lab values fall outside clinical reference ranges, the system flags it for a doctor to review and sign. A human always makes the final call. The AI catches what humans can miss under pressure.",
                live: false,
                badge: "In Development",
              },
            ].map((m, i) => (
              <div key={i} className={`group relative bg-hi-panel border border-hi-border rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-400 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${m.color}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`bg-${m.color}/10 p-3 rounded-xl border border-${m.color}/20`}>
                      {m.icon}
                    </div>
                    {m.live ? (
                      <div className="flex items-center gap-1.5 text-[8.5px] font-black uppercase tracking-widest text-[#39d353] bg-[#39d353]/8 border border-[#39d353]/20 px-2.5 py-1 rounded-full">
                        <span className="w-1 h-1 bg-[#39d353] rounded-full animate-pulse" />
                        Live
                      </div>
                    ) : (
                      <div className="text-[8.5px] font-black uppercase tracking-widest text-[#a371f7] bg-[#a371f7]/10 border border-[#a371f7]/20 px-2.5 py-1 rounded-full">
                        {m.badge}
                      </div>
                    )}
                  </div>
                  <h3 className="text-[15px] font-extrabold text-white mb-3">{m.label}</h3>
                  <p className="text-[13px] text-hi-muted leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5 — WHO IT'S FOR                                         */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-b border-white/5 bg-[#010409]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[9.5px] font-black tracking-[0.25em] text-hi-muted uppercase mb-3">Who It&apos;s For</div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6">
            Built for every lab in Bangladesh.
          </h2>
          <p className="text-hi-muted text-sm max-w-2xl mx-auto mb-14 leading-relaxed">
            Whether you process 20 samples a day or 2,000 — Healthcare Inspiron scales with your operation.
            Same system. Same data quality. Same compliance posture.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Single-Room Clinic",
                subtitle: "Upazila · Rural · Town",
                desc: "One analyzer, one technician, paper register replaced by a cloud system. Bilingual reports printed in seconds. Doctor portal so referring doctors stop calling.",
                color: "hi-teal",
              },
              {
                title: "District Diagnostic Centre",
                subtitle: "Division HQ · Private Hospital",
                desc: "Multiple test categories, staff accounts, result verification workflow, multi-doctor portal access, nightly data backup. Everything a growing lab needs.",
                color: "hi-amber",
                featured: true,
              },
              {
                title: "Multi-Partner Chain",
                subtitle: "Enterprise · Network",
                desc: "Multi-branch sub-tenant dashboard, white-label theming, custom SLA, custom analyzer TCP/LIMS bridges. Purpose-built for diagnostic networks expanding nationally.",
                color: "[#a371f7]",
              },
            ].map((t, i) => (
              <div key={i} className={`relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1.5 ${t.featured ? `bg-gradient-to-b from-hi-amber/10 to-hi-panel border-hi-amber/30 shadow-[0_0_40px_rgba(245,158,11,0.08)]` : 'bg-hi-panel border-hi-border'}`}>
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8.5px] font-black uppercase tracking-widest bg-hi-amber text-[#010409] px-3 py-1 rounded-full">
                    Most Common
                  </div>
                )}
                <div className={`text-[11px] font-black uppercase tracking-[0.2em] text-${t.color} mb-1`}>{t.title}</div>
                <div className="text-[10px] text-hi-muted/60 uppercase tracking-widest mb-4">{t.subtitle}</div>
                <p className="text-[12.5px] text-hi-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 6 — PRICING (published — transparency wedge)             */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="px-6 py-28 bg-[#0a0d14] border-b border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40%] bg-gradient-to-t from-hi-teal/4 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-5">
            <div className="text-[9.5px] font-black tracking-[0.25em] text-hi-teal uppercase mb-3">Transparent Pricing</div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              We publish our prices.
            </h2>
            <p className="text-hi-muted text-sm max-w-2xl mx-auto italic">
              "We publish our standard prices because you deserve to know what you'll pay."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {[
              {
                tier: "Seed",
                subtitle: "Getting Started",
                price: "Free",
                subprice: "→ ৳500/mo after pilot",
                color: "hi-teal",
                features: ["1 lab terminal", "CBC + basic reporting", "Doctor portal (read-only)", "WhatsApp onboarding support"],
                cta: "Apply for Pilot",
              },
              {
                tier: "Standard",
                subtitle: "Single Lab",
                price: "৳3,000",
                subprice: "/month",
                color: "hi-amber",
                features: ["All 5 test categories", "Mindray analyzer integration", "Unlimited doctors on portal", "A4 bilingual reports", "Nightly data backup"],
                cta: "Book Demo",
                featured: true,
              },
              {
                tier: "Professional",
                subtitle: "Growing Centre",
                price: "৳6,000",
                subprice: "/month",
                color: "[#a371f7]",
                features: ["Everything in Standard", "Multiple staff accounts", "Critical result alerting", "Priority support", "FHIR SHR submission (when live)"],
                cta: "Book Demo",
              },
              {
                tier: "Hospital & Chains",
                subtitle: "Enterprise",
                price: "By Quote",
                subprice: "Custom SLA",
                color: "[#39d353]",
                features: ["Multi-branch sub-tenancy", "White-label theming", "Custom analyzer bridges", "Dedicated operations support", "Custom integrations"],
                cta: "Contact Us",
              },
            ].map((p, i) => (
              <div key={i} className={`relative flex flex-col rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1.5 ${p.featured ? `bg-gradient-to-b from-hi-amber/10 to-hi-panel border-hi-amber/30 shadow-[0_0_40px_rgba(245,158,11,0.08)]` : 'bg-hi-panel border-hi-border'}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-widest bg-hi-amber text-[#010409] px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <div className={`text-[9.5px] font-black uppercase tracking-[0.2em] text-${p.color} mb-1`}>{p.tier}</div>
                <div className="text-[10px] text-hi-muted/60 uppercase tracking-widest mb-5">{p.subtitle}</div>
                <div className="mb-1">
                  <span className={`text-3xl font-extrabold text-${p.color}`}>{p.price}</span>
                </div>
                <div className="text-[11px] text-hi-muted mb-6">{p.subprice}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[11.5px] text-white/75">
                      <CheckCircle2 size={13} className={`text-${p.color} shrink-0 mt-0.5`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={WABA_URL}
                  target="_blank"
                  className={`w-full text-center py-2.5 rounded-sm text-[10.5px] font-bold uppercase tracking-widest transition-all ${p.featured ? 'bg-hi-amber text-[#010409] hover:bg-hi-amber/90' : `border border-${p.color}/30 text-${p.color} hover:border-${p.color} hover:bg-${p.color}/10`}`}
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-hi-muted/50 text-[11px] mt-8">
            All tiers include onboarding support. Setup fee may apply for Mindray TCP/IP integration depending on your network configuration.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7 — TRUST STRIP (honest — no fake logos or counts)       */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-24 border-b border-white/5 bg-[#010409]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[9.5px] font-black tracking-[0.25em] text-[#39d353] uppercase mb-3">Where We Are</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Live. Working. Looking for our first labs to build alongside.
            </h2>
            <p className="text-hi-muted text-sm max-w-2xl mx-auto">
              We&apos;re not announcing customer numbers today — we&apos;d rather earn them honestly.
              Here&apos;s exactly what&apos;s true.
            </p>
          </div>

          {/* Trust pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              {
                icon: <Activity className="text-[#39d353]" size={22} />,
                title: "Mindray Analyzer — Live",
                body: "Mindray BC-20 connected via TCP/IP at Meghna Diagnostic Centre (Demonstration System). CBC results arrive automatically from the analyzer. Integration live and certified.",
                color: "[#39d353]",
              },
              {
                icon: <Database className="text-hi-teal" size={22} />,
                title: "DGHS SHR Vision",
                body: "Engineered to submit FHIR R4 records to Bangladesh's national Shared Health Record. This is the direction. It's in development — not live yet.",
                color: "hi-teal",
              },
              {
                icon: <ShieldCheck className="text-[#a371f7]" size={22} />,
                title: "Powered by Claude AI",
                body: "Claude AI integrated as a safety layer — critical-result flagging in development. A human always reviews and signs. The AI supports, not replaces, clinical judgment.",
                color: "[#a371f7]",
              },
              {
                icon: <Lock className="text-hi-amber" size={22} />,
                title: "BD Data Residency",
                body: "All patient-identifiable data has a mandatory Bangladesh-jurisdiction copy. Primary cloud on Oracle Singapore, mirrored nightly to Dhaka VPS. 2025 Data Ordinance compliant.",
                color: "hi-amber",
              },
            ].map((t, i) => (
              <div key={i} className="bg-hi-panel border border-hi-border rounded-xl p-6 hover:border-white/10 transition-all">
                <div className={`bg-${t.color}/10 w-10 h-10 rounded-xl border border-${t.color}/20 flex items-center justify-center mb-4`}>
                  {t.icon}
                </div>
                <div className="text-[12px] font-extrabold text-white mb-2">{t.title}</div>
                <p className="text-[11.5px] text-hi-muted leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>

          {/* Pilot card */}
          <div className="bg-[#0D1117] border border-[#39d353]/20 rounded-2xl p-8 md:p-10 max-w-xl mx-auto text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-center gap-2.5 mb-5">
              <span className="w-2 h-2 bg-[#39d353] rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#39d353]">Live Since April 2026</span>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-1">Meghna Diagnostic Centre</h3>
            <p className="text-hi-muted text-sm mb-6">Dhaka, Bangladesh (Live Demonstration System)</p>
            <ul className="space-y-3 text-[12.5px] text-white/80 text-left inline-block">
              {[
                "Mindray BC-20 connected via TCP/IP bridge",
                "CBC results automated via TCP/IP bridge. Biochemistry, serology, and other categories — manual entry.",
                "A4 bilingual clinical reports with QR verification in production",
                "Doctor portal active — referring physicians viewing results",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-[#39d353] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact strip */}
          <div className="mt-12 text-center">
            <div className="text-[10px] uppercase tracking-widest text-hi-muted/60 mb-3">Real contact. Real people.</div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-hi-muted">
              <span>📧 <Link href="mailto:hello@inspiron.tech" className="hover:text-white transition-colors">hello@inspiron.tech</Link></span>
              <span>💬 <Link href={WABA_URL} target="_blank" className="hover:text-white transition-colors">WhatsApp: 01601-618030</Link></span>
              <span>🌐 <Link href="https://inspiron.tech" target="_blank" className="hover:text-white transition-colors">inspiron.tech</Link></span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 8 — FOOTER CTA                                           */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="px-6 py-28 bg-[#0a0d14] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-b from-hi-teal/8 to-transparent blur-[100px] pointer-events-none rounded-full" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex justify-center mb-8">
            <HealthcareLogo variant="stacked" size={80} theme="dark" />
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            Ready to see it working?
          </h2>
          <p className="text-hi-muted mb-10 leading-relaxed">
            Book a free live demo — you drive, we show you the actual system, live.
            No sales deck. No mockups. The real system, processing real workflows.
          </p>
          <Link
            href={WABA_URL}
            target="_blank"
            className="group inline-flex items-center gap-3 bg-hi-teal text-[#010409] px-10 py-4 rounded-sm text-[13px] font-extrabold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-hi-teal/90 hover:shadow-[0_0_40px_rgba(45,212,191,0.4)]"
          >
            <MessageCircle size={18} />
            Book a Free Live Demo
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-4 text-[10.5px] text-hi-muted/50">
            Via WhatsApp WABA · +880 1601-618030 · No commitment required
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 pt-10 pb-8 text-center bg-[#010409] border-t border-white/5">
        <div className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-hi-amber/50 mb-4">"Your lab. Your doctors. Your data."</div>
        <div className="text-[9px] uppercase tracking-widest text-white/25">
          DESIGNED &amp; ENGINEERED BY <strong className="text-white/40">INSPIRON TECH</strong> · BANGLADESH
          <br /><br />
          © 2026 HEALTHCARE INSPIRON · A product of INSPIRON TECH
          <br />
          <Link href="https://inspiron.tech" target="_blank" className="hover:text-white/50 transition-colors">inspiron.tech</Link>
          {" · "}
          <Link href="mailto:hello@inspiron.tech" className="hover:text-white/50 transition-colors">hello@inspiron.tech</Link>
        </div>
      </footer>

    </main>
  );
}
