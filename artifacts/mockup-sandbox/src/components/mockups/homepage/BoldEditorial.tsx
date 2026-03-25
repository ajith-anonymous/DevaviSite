import React from "react";

export default function BoldEditorial() {
  return (
    <div className="min-h-screen bg-[#080a0f] text-[#f2f2f0] selection:bg-[#FFAA33] selection:text-[#080a0f] font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full px-6 py-8 md:px-12 md:py-12 flex justify-between items-center border-b border-white/10">
        <div className="text-xl font-bold tracking-tight">DEVAVI MEDIA</div>
        <div className="text-sm tracking-widest uppercase text-white/50 hidden md:block">
          Performance Agency
        </div>
        <button className="text-sm font-medium hover:text-[#FFAA33] transition-colors uppercase tracking-widest">
          Contact
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="px-6 md:px-12 pt-24 pb-32 md:pt-40 md:pb-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Left Column - Headline */}
            <div className="lg:col-span-8 flex flex-col justify-end">
              <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.9] font-bold tracking-tighter uppercase mb-12">
                Performance <br /> marketing, <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-white">minus the</span>
                  {/* Accent line underneath */}
                  <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-6 bg-[#FFAA33] -z-0"></span>
                </span>{" "}
                circus.
              </h1>
              <p className="text-xl md:text-3xl font-light leading-relaxed max-w-2xl text-white/80">
                Co-founder-led execution, ruthless clarity, results you can actually ship.
              </p>
            </div>

            {/* Right Column - Metrics */}
            <div className="lg:col-span-4 flex flex-col justify-end space-y-12 lg:border-l lg:border-white/10 lg:pl-12">
              <div>
                <div className="text-5xl md:text-6xl font-medium tracking-tighter text-[#FFAA33] mb-2">340%</div>
                <div className="text-sm uppercase tracking-widest text-white/50 font-semibold">Average ROI ↑</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-medium tracking-tighter mb-2">$50M+</div>
                <div className="text-sm uppercase tracking-widest text-white/50 font-semibold">Revenue Generated</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-medium tracking-tighter mb-2">200+</div>
                <div className="text-sm uppercase tracking-widest text-white/50 font-semibold">Brands Scaled</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Marquee / Strip */}
        <section className="border-y border-white/10 py-12 md:py-16 px-6 md:px-12 overflow-hidden bg-[#0a0d14]">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6 text-lg md:text-2xl font-light tracking-wide text-white/70 uppercase">
            <span className="hover:text-[#FFAA33] transition-colors cursor-pointer">Paid Social</span>
            <span className="text-white/20">—</span>
            <span className="hover:text-[#FFAA33] transition-colors cursor-pointer">Paid Search</span>
            <span className="text-white/20">—</span>
            <span className="hover:text-[#FFAA33] transition-colors cursor-pointer">Analytics</span>
            <span className="text-white/20">—</span>
            <span className="hover:text-[#FFAA33] transition-colors cursor-pointer">CRO</span>
            <span className="text-white/20">—</span>
            <span className="hover:text-[#FFAA33] transition-colors cursor-pointer">Creative Strategy</span>
            <span className="text-white/20">—</span>
            <span className="hover:text-[#FFAA33] transition-colors cursor-pointer">Consulting</span>
          </div>
        </section>

        {/* Quote Section */}
        <section className="px-6 md:px-12 py-32 md:py-48 flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
          <p className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight mb-16">
            "We work with no more than 20 clients. Every account gets our full attention."
          </p>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="font-bold text-xl uppercase tracking-wider">Swastik Dubey</div>
              <div className="text-[#FFAA33] text-sm tracking-widest uppercase mt-1">Co-Founder</div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="text-left">
              <div className="font-bold text-xl uppercase tracking-wider">Anushka Sirohi</div>
              <div className="text-[#FFAA33] text-sm tracking-widest uppercase mt-1">Co-Founder</div>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <footer className="border-t border-white/10 px-6 md:px-12 py-24 md:py-32 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 bg-black">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
              Ready for <br /> clarity?
            </h2>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-widest overflow-hidden bg-white text-black transition-all hover:bg-[#FFAA33]">
              <span className="relative z-10">Start the conversation</span>
            </button>
          </div>
          
          <div className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-widest text-white/50 text-left md:text-right">
            <a href="#" className="hover:text-white transition-colors">hello@devavimedia.com</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <div className="pt-4 mt-4 border-t border-white/10">
              © {new Date().getFullYear()} Devavi Media
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
