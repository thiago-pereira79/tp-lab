import { useTranslation } from '../i18n/useTranslation';

interface HeroProps {
  onVerProjetos: () => void;
  onExplorarLab: () => void;
}

export default function Hero({ onVerProjetos, onExplorarLab }: HeroProps) {
  const { t } = useTranslation();
  const disciplines = t.hero.disciplines.split(' • ');

  return (
    <section 
      id="inicio" 
      className="relative w-full bg-black text-center pt-24 sm:pt-20 pb-4 overflow-hidden animate-fade-in"
    >
      {/* Outer sizing layout aligned with Bento Grid max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto px-6 relative py-4 flex flex-col items-center justify-center min-h-[370px] md:min-h-[410px]">
        
        {/* FLANKING CYAN GLOWING DOT MATRICES */}
        {/* Left Column Stack (2x5 Grid) */}
        <div className="absolute left-10 md:left-14 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-x-2 gap-y-2 hidden sm:grid opacity-85 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-1 rounded-full bg-[#00D0F8] shadow-[0_0_3px_#00D0F8]" 
            />
          ))}
        </div>

        {/* Right Column Stack (2x5 Grid) */}
        <div className="absolute right-10 md:right-14 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-x-2 gap-y-2 hidden sm:grid opacity-85 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-1 rounded-full bg-[#00D0F8] shadow-[0_0_3px_#00D0F8]" 
            />
          ))}
        </div>

        {/* CENTER COLUMN: MAIN CONTENT BRAND */}
        <div className="z-10 flex flex-col items-center justify-center max-w-3xl px-4 mt-2 sm:mt-3 text-center">
          
          {/* Dynamic Status Beacon Label (Muted and beautiful) */}
          <div className="inline-flex items-center gap-2 text-[10px] md:text-[11px] font-mono font-black uppercase tracking-[0.25em] text-[#00D0F8] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D0F8] animate-pulse shadow-[0_0_6px_#00D0F8]" />
            <span>{t.hero.status}</span>
          </div>

          {/* Giant Title Typography name, centered and stacked */}
          <h1 className="font-sans font-black text-[clamp(2.8rem,7.6vw,5.25rem)] tracking-[0.03em] leading-[0.9] uppercase flex flex-col items-center mb-4">
            <span className="text-white">THIAGO</span>
            <span className="text-[#00D0F8] drop-shadow-[0_2px_15px_rgba(0,208,248,0.22)]">PEREIRA</span>
          </h1>

          {/* Styled Disciplines Tagline with cyan Middle dots */}
          <p className="font-sans text-[11px] sm:text-[12.5px] md:text-sm tracking-[0.1em] text-zinc-400 leading-relaxed font-semibold max-w-xl">
            {disciplines.map((discipline, index) => (
              <span key={discipline} className="contents">
                {index > 0 && <span className="text-[#00D0F8] mx-1 font-bold">•</span>}
                <span>{discipline}</span>
              </span>
            ))}
          </p>

        </div>

      </div>
    </section>
  );
}
