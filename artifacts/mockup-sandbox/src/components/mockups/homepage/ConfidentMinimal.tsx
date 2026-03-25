import React from 'react';

export default function ConfidentMinimal() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#fafafa] font-sans selection:bg-[#FFB020] selection:text-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col min-h-screen">
        
        {/* Navigation */}
        <nav className="flex items-center justify-between text-sm uppercase tracking-widest font-medium mb-32 md:mb-48">
          <div>DEVAVI MEDIA</div>
          <div className="hidden sm:flex gap-12 text-zinc-500">
            <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#contact" className="hover:text-[#FFB020] transition-colors duration-300">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col justify-center">
          <div className="max-w-5xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight mb-12">
              Performance marketing, <br className="hidden md:block" />
              <span className="text-[#FFB020]">minus the circus.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-300 max-w-3xl leading-relaxed mb-16">
              Co-founder-led. 20 clients max. Results you can measure.
            </p>

            <div className="text-sm sm:text-base md:text-lg text-zinc-500 font-mono tracking-wide flex flex-wrap gap-4 items-center">
              <span>340% avg ROI</span>
              <span className="hidden sm:inline">·</span>
              <span>$50M+ revenue generated</span>
              <span className="hidden sm:inline">·</span>
              <span>200+ brands scaled</span>
            </div>
          </div>
        </main>

        <div className="w-full h-[1px] bg-zinc-900 my-32 md:my-48" />

        {/* Services Section */}
        <section className="max-w-5xl">
          <div className="text-sm uppercase tracking-widest font-medium text-zinc-500 mb-16">Disciplines</div>
          
          <ul className="flex flex-col gap-8 md:gap-12">
            {[
              "Paid Social",
              "Paid Search",
              "Analytics",
              "CRO",
              "Creative Strategy",
              "Consulting"
            ].map((service, index) => (
              <li key={index} className="group flex items-baseline gap-6 md:gap-12 cursor-default">
                <span className="text-sm md:text-base text-zinc-600 font-mono transition-colors duration-300 group-hover:text-[#FFB020]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-300 transition-colors duration-300 group-hover:text-white">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="w-full h-[1px] bg-zinc-900 my-32 md:my-48" />

        {/* Footer */}
        <footer className="pb-24 max-w-5xl">
          <div className="mb-24">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium mb-8">
              Ready to work with us?
            </h2>
            <a 
              href="#contact" 
              className="inline-flex items-center text-xl sm:text-2xl md:text-3xl text-zinc-400 hover:text-white transition-colors duration-300 group"
            >
              Start the conversation 
              <span className="ml-4 text-[#FFB020] transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-12 text-zinc-600 text-sm font-mono uppercase tracking-widest">
            <div>
              <p className="mb-2">Founders</p>
              <p className="text-zinc-400">Swastik Dubey & Anushka Sirohi</p>
            </div>
            <div className="text-right">
              <p>© {new Date().getFullYear()} Devavi Media.</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
