import React, { useState, useEffect } from "react";
import { 
  BarChart3, 
  Search, 
  CheckCircle, 
  Zap, 
  Heart, 
  MessageSquare, 
  ArrowRight, 
  TrendingUp,
  Activity,
  MousePointerClick,
  Target
} from "lucide-react";

export default function ResultsDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-[#f0f0f5] font-sans overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Dot Pattern */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #f0f0f5 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16">
        
        {/* Header / Nav Area */}
        <header className="flex justify-between items-center border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center">
              <TrendingUp className="text-[#0a0b0f] w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Devavi Media</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              System Operational
            </div>
            <button className="px-5 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-all">
              Client Login
            </button>
          </div>
        </header>

        {/* Dashboard Top Row - Metrics FIRST */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Average ROI", value: "340%", sub: "+12.4% vs last quarter", icon: Target },
            { label: "Revenue Generated", value: "$50M+", sub: "Verified track record", icon: Activity },
            { label: "Brands Scaled", value: "200+", sub: "Across 15+ industries", icon: MousePointerClick }
          ].map((metric, i) => (
            <div 
              key={i} 
              className={`p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 ease-out flex flex-col justify-between h-40 group hover:border-amber-500/30 hover:bg-white/10 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex justify-between items-start">
                <span className="text-sm font-medium text-white/50 tracking-wide uppercase">{metric.label}</span>
                <metric.icon className="w-5 h-5 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-amber-600 drop-shadow-[0_0_15px_rgba(245,166,35,0.3)] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-white/40 mt-2 font-mono">
                  {metric.sub}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Hero Headline Section */}
        <section className={`max-w-4xl transition-all duration-1000 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" />
            Performance Marketing Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
            Performance marketing,<br />
            <span className="text-white/40 italic">minus the circus.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl font-light">
            Co-founder-led execution, ruthless clarity, results you can actually ship.
          </p>
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-[#0a0b0f] bg-zinc-800 flex items-center justify-center text-xs font-bold">SD</div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0a0b0f] bg-zinc-700 flex items-center justify-center text-xs font-bold">AS</div>
            </div>
            <div className="text-sm text-white/50">
              Led directly by founders <span className="text-white font-medium">Swastik Dubey</span> & <span className="text-white font-medium">Anushka Sirohi</span>
            </div>
          </div>
        </section>

        {/* Services Dashboard Grid */}
        <section className={`transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Execution Capabilities</h2>
            <div className="text-sm font-mono text-white/40">SYSTEM.SERVICES_ACTIVE</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Paid Social (Meta)", desc: "Hyper-optimized campaigns scaling ad spend with deterministic ROAS.", icon: Heart },
              { title: "Paid Search (Google)", desc: "Capturing high-intent demand with precision bidding and structure.", icon: Search },
              { title: "Analytics & Tracking", desc: "Server-side tracking, custom attribution modeling, and data hygiene.", icon: BarChart3 },
              { title: "CRO", desc: "Data-driven landing page experiments to maximize conversion rates.", icon: CheckCircle },
              { title: "Creative Strategy", desc: "Performance-first creative that stops thumbs and drives clicks.", icon: Zap },
              { title: "Strategic Consulting", desc: "High-level growth architecture and unit economics modeling.", icon: MessageSquare }
            ].map((service, i) => (
              <div key={i} className="group p-6 rounded-xl bg-[#11131a] border border-white/5 hover:border-amber-500/20 hover:bg-[#161922] transition-colors cursor-default">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500/10 transition-all">
                  <service.icon className="w-6 h-6 text-white/70 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{service.desc}</p>
                
                {/* Mock data visualization inside card */}
                <div className="mt-6 pt-6 border-t border-white/5 flex items-end gap-1 h-12 opacity-50 group-hover:opacity-100 transition-opacity">
                  {[...Array(6)].map((_, j) => (
                    <div 
                      key={j} 
                      className="w-full bg-amber-500/20 group-hover:bg-amber-500/40 rounded-t-sm transition-all"
                      style={{ height: `${Math.max(20, Math.random() * 100)}%` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Strip */}
        <section className={`mt-8 mb-24 transition-all duration-1000 delay-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-600 to-amber-400 p-1">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4yKSIvPjwvc3ZnPg==')] opacity-30" />
            <div className="relative bg-[#0a0b0f] rounded-xl px-8 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to scale the metrics that matter?</h2>
                <p className="text-white/60 text-lg">Skip the fluff. Let's look at the numbers.</p>
              </div>
              <button className="group relative whitespace-nowrap px-8 py-4 bg-amber-500 text-[#0a0b0f] font-bold text-lg rounded-lg overflow-hidden flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
                <span className="relative z-10">Start the conversation</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 h-full w-full bg-amber-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
