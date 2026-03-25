import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowDown, CheckCircle } from "lucide-react";

const chapters = [
  {
    id: "01",
    label: "The Problem",
    headline: "Most agencies promise the world. Few deliver anything.",
    subhead: "We built Devavi in response to the chaos.",
    content: null,
  },
  {
    id: "02",
    label: "The Solution",
    headline: "Performance marketing, minus the circus.",
    subhead: "Co-founder-led. 20 clients max. Full attention, always.",
    content: null,
  },
  {
    id: "03",
    label: "The Proof",
    headline: "Results that speak for themselves.",
    subhead: "We let the numbers do the talking.",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-4xl">
        <div className="border border-white/10 p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm flex flex-col items-start">
          <span className="text-5xl font-light text-[#FFB830] mb-2">340%</span>
          <span className="text-[#eff0f5]/60 text-sm tracking-widest uppercase">Average ROI</span>
        </div>
        <div className="border border-white/10 p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm flex flex-col items-start">
          <span className="text-5xl font-light text-[#FFB830] mb-2">$50M+</span>
          <span className="text-[#eff0f5]/60 text-sm tracking-widest uppercase">Revenue Driven</span>
        </div>
        <div className="border border-white/10 p-8 rounded-xl bg-white/[0.02] backdrop-blur-sm flex flex-col items-start">
          <span className="text-5xl font-light text-[#FFB830] mb-2">200+</span>
          <span className="text-[#eff0f5]/60 text-sm tracking-widest uppercase">Brands Scaled</span>
        </div>
      </div>
    ),
  },
  {
    id: "04",
    label: "The Work",
    headline: "Everything you need. Nothing you don't.",
    subhead: "A focused suite of services designed for maximum leverage.",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 w-full max-w-2xl">
        {[
          "Paid Social",
          "Paid Search",
          "Analytics",
          "CRO",
          "Creative Strategy",
          "Consulting",
        ].map((service, i) => (
          <div key={i} className="flex items-center space-x-3 text-lg text-[#eff0f5]/80 p-4 border border-white/5 rounded-lg bg-white/[0.01]">
            <CheckCircle className="text-[#FFB830] w-5 h-5" />
            <span>{service}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "05",
    label: "The Invitation",
    headline: "Start the conversation — only a few spots left.",
    subhead: "We intentionally cap our roster to ensure uncompromising quality.",
    content: (
      <div className="mt-12">
        <button className="group flex items-center space-x-4 bg-[#FFB830] text-[#0a0c12] px-8 py-4 rounded-full font-medium hover:bg-white transition-colors duration-300">
          <span>Apply to partner with us</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    ),
  },
];

export default function NarrativeScroll() {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Calculate which chapter is currently most visible
      const current = Math.floor((scrollPosition + windowHeight / 2) / windowHeight);
      setActiveChapter(Math.min(Math.max(current, 0), chapters.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0c12] text-[#eff0f5] font-sans selection:bg-[#FFB830]/30 min-h-screen">
      {/* Fixed Progress Line on Left */}
      <div className="fixed left-6 md:left-12 top-0 bottom-0 w-px bg-white/10 z-50 flex flex-col justify-between py-24 hidden sm:flex">
        {/* Progress Fill */}
        <div 
          className="absolute top-0 left-0 w-full bg-[#FFB830] transition-all duration-700 ease-out"
          style={{ height: \`\${((activeChapter) / (chapters.length - 1)) * 100}%\` }}
        />
        
        {chapters.map((chap, i) => (
          <div key={chap.id} className="relative flex items-center justify-center translate-x-[-50%] w-3 h-3">
            <div 
              className={\`w-2 h-2 rounded-full transition-all duration-500 \${
                i <= activeChapter ? "bg-[#FFB830]" : "bg-[#0a0c12] border border-white/20"
              }\`}
            />
          </div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10">
        {chapters.map((chapter, i) => (
          <section
            key={chapter.id}
            className="min-h-screen flex flex-col justify-center relative px-8 sm:px-24 md:px-32 lg:px-48 overflow-hidden"
          >
            {/* Massive Background Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold text-white/[0.02] pointer-events-none select-none leading-none tracking-tighter">
              {chapter.id}
            </div>

            <div className={\`relative z-10 max-w-5xl transition-all duration-1000 transform \${
              i === activeChapter ? "opacity-100 translate-y-0" : "opacity-30 translate-y-8"
            }\`}>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-[#FFB830] font-mono text-sm">Chapter {chapter.id}</span>
                <div className="h-px w-12 bg-white/20" />
                <span className="text-[#eff0f5]/60 tracking-widest uppercase text-xs font-semibold">{chapter.label}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                {chapter.headline}
              </h2>
              
              <p className="text-xl md:text-2xl text-[#eff0f5]/60 font-light max-w-3xl leading-relaxed">
                {chapter.subhead}
              </p>

              {chapter.content}
            </div>

            {/* Scroll Indicator (Only on first section) */}
            {i === 0 && (
              <div className="absolute bottom-12 left-8 sm:left-24 md:left-32 lg:left-48 animate-bounce">
                <ArrowDown className="text-[#FFB830]/50 w-6 h-6" />
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
