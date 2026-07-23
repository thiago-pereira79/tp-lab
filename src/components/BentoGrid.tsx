import { BookOpen, Briefcase, User, Send, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface BentoGridProps {
  onCardClick: (sectionId: string) => void;
}

export default function BentoGrid({ onCardClick }: BentoGridProps) {
  const { t, language } = useTranslation();

  const cards = [
    {
      id: 'tp-lab-card',
      number: '06',
      titleLines: [t.cards.tpLab.title],
      text: t.cards.tpLab.text,
      badgeText: '',
      badgeClass: '',
      bg: 'bg-[#121315] border border-zinc-900/80',
      textClass: 'text-zinc-100',
      iconIsCustom: true,
      isNotClickable: true,
      descColor: 'text-zinc-400 font-medium',
      iconColor: 'border-[#30F858]/20 bg-zinc-900/50 shadow-[0_0_15px_rgba(48,248,88,0.15)] text-[#30F858]',
      decorText: t.cards.tpLab.decor,
      ornaments: (
        <>
          {/* Top-Right corner hatch group */}
          <div className="absolute top-4 right-4 text-zinc-650 font-mono text-[9px] select-none tracking-tighter opacity-60">
            //////
          </div>
          {/* Atomic orbital path on the middle-right */}
          <div className="absolute right-4 top-[23%] opacity-35 text-[#30F858] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-32 h-32 text-[#30F858]/30">
              <ellipse cx="50" cy="50" rx="42" ry="14" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-30 50 50)" />
              <ellipse cx="50" cy="50" rx="42" ry="14" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(30 50 50)" />
              <ellipse cx="50" cy="50" rx="42" ry="14" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(90 50 50)" />
              <circle cx="50" cy="50" r="3.5" className="fill-[#30F858] animate-pulse" />
              <circle cx="15" cy="30" r="1.5" className="fill-[#30F858]" />
              <circle cx="85" cy="70" r="1.5" className="fill-[#30F858]" />
              <circle cx="50" cy="8" r="1.5" className="fill-[#30F858]" />
            </svg>
          </div>
          {/* Top visual brackets around the icon zone */}
          <span className="absolute top-[32px] left-[78px] font-mono text-xs text-[#30F858]/20 select-none">[</span>
          <span className="absolute bottom-[305px] left-[12px] font-mono text-xs text-[#30F858]/20 select-none">]</span>
        </>
      )
    },
    {
      id: 'projetos-lab',
      number: '01',
      titleLines: [t.cards.projetosLab.title.replace(/\s*\+\s*LAB$/, ''), '+ LAB'],
      text: t.cards.projetosLab.text,
      badgeText: 'BUILD',
      badgeClass: 'bg-zinc-950 text-[#30F858] border border-zinc-900',
      bg: 'bg-[#30F858]',
      textClass: 'text-zinc-950',
      iconIsCustom: true,
      arrowColor: 'border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-[#30F858]',
      descColor: 'text-zinc-900/85 font-semibold',
      iconColor: 'text-zinc-950 border-zinc-950/20 bg-zinc-950/5',
      ornaments: (
        <>
          {/* Top-Right tick marker */}
          <div className="absolute top-4 right-16 w-3 h-[1px] bg-zinc-950/15" />
          {/* Top-Left cross marker */}
          <div className="absolute top-4 left-4 text-zinc-950/25 font-mono text-[10px] select-none font-black pointer-events-none">
            ✕
          </div>
          {/* Bottom-Left 4x2 matrix dots */}
          <div className="absolute bottom-[80px] left-5 grid grid-cols-4 gap-1 opacity-25 text-zinc-950 pointer-events-none select-none">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-[3px] h-[3px] rounded-full bg-zinc-950" />
            ))}
          </div>
          {/* Bottom-Right corner wedge indicator */}
          <div className="absolute bottom-4 right-4 text-zinc-950/35 font-mono text-[10px] select-none text-right pointer-events-none">
            ◢
          </div>
        </>
      )
    },
    {
      id: 'estudos',
      number: '02',
      titleLines: [t.cards.estudos.title],
      text: t.cards.estudos.text,
      badgeText: 'LEARN',
      badgeClass: 'bg-zinc-950 text-[#A898E0] border border-zinc-900',
      bg: 'bg-[#A898E0]', // soft purple standard
      textClass: 'text-zinc-950',
      iconIsCustom: false,
      icon: BookOpen,
      arrowColor: 'border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-[#A898E0]',
      descColor: 'text-zinc-900/85 font-semibold',
      iconColor: 'text-zinc-950 border-zinc-950/20 bg-zinc-950/5',
      ornaments: (
        <>
          {/* Top Horizontal boundary line */}
          <div className="absolute top-5 left-16 right-16 h-px bg-zinc-950/10 pointer-events-none" />
          {/* 3x5 compact Dot Matrix on bottom right */}
          <div className="absolute bottom-[84px] right-5 grid grid-cols-3 gap-1 opacity-25 text-zinc-950 pointer-events-none select-none">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-[3px] h-[3px] rounded-full bg-zinc-950" />
            ))}
          </div>
          {/* Bottom-Right corner bracket line */}
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-zinc-950/20 pointer-events-none" />
        </>
      )
    },
    {
      id: 'experiencia',
      number: '03',
      titleLines: [t.cards.experiencia.title],
      text: t.cards.experiencia.text,
      badgeText: 'WORK',
      badgeClass: 'bg-[#121315] text-[#00D0F8] border border-[#00D0F8]/20',
      bg: 'bg-[#121315] border border-zinc-900/80', // elegant deep charcoal metal
      textClass: 'text-zinc-100',
      iconIsCustom: false,
      icon: Briefcase,
      arrowColor: 'border-[#00D0F8]/50 text-[#00D0F8] hover:bg-[#00D0F8] hover:text-zinc-950 hover:border-[#00D0F8]',
      descColor: 'text-zinc-400 font-medium',
      iconColor: 'text-[#00D0F8] border-[#00D0F8]/25 bg-zinc-950/50',
      ornaments: (
        <>
          {/* Top-Right corner hatch group */}
          <div className="absolute top-4 right-4 text-zinc-650 font-mono text-[9px] select-none tracking-tighter opacity-60">
            //////
          </div>
          {/* Bottom-Right cyan dots vertical stack above work badge */}
          <div className="absolute bottom-[84px] right-5 grid grid-cols-3 gap-1 opacity-35 text-[#00D0F8] pointer-events-none select-none">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-[3px] h-[3px] rounded-full bg-[#00D0F8] shadow-[0_0_2px_#00D0F8]" />
            ))}
          </div>
          {/* Bottom-Right corner cyan bracket line */}
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#00D0F8]/15 pointer-events-none" />
        </>
      )
    },
    {
      id: 'sobre',
      number: '04',
      titleLines: [t.cards.sobre.title],
      text: t.cards.sobre.text,
      badgeText: '★',
      badgeClass: 'absolute right-[-10px] top-[148px] bg-zinc-950 text-[#eaeaea] w-7 h-7 flex items-center justify-center rounded-lg border border-zinc-800 rotate-[-8deg] font-black pointer-events-none select-none shadow-lg',
      bg: 'bg-[#eaeaea]', // clean industrial off-white
      textClass: 'text-zinc-950',
      iconIsCustom: false,
      icon: User,
      arrowColor: 'border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-[#eaeaea]',
      descColor: 'text-zinc-900/85 font-semibold',
      iconColor: 'text-zinc-950 border-zinc-950/20 bg-zinc-950/5',
      ornaments: (
        <>
          {/* Hanging black code sticker directly in badge class */}
          {/* Bottom horizontal line indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-30 text-zinc-950 font-mono font-bold select-none pointer-events-none">
            <span>—</span>
            <span>—</span>
            <span>—</span>
          </div>
          {/* Bottom-Right corner line */}
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-zinc-950/20 pointer-events-none" />
        </>
      )
    },
    {
      id: 'contato',
      number: '05',
      titleLines: [t.cards.contato.title],
      text: t.cards.contato.text,
      badgeText: 'REACH OUT',
      badgeClass: 'bg-zinc-950 text-[#b3d3c4] border border-[#b3d3c4]/10',
      bg: 'bg-[#b3d3c4]', // mint pastel green
      textClass: 'text-zinc-950',
      iconIsCustom: false,
      icon: Send,
      arrowColor: 'border-zinc-950 text-zinc-950 hover:bg-zinc-950 hover:text-[#b3d3c4]',
      descColor: 'text-zinc-900/85 font-semibold',
      iconColor: 'text-zinc-950 border-zinc-950/20 bg-zinc-950/5',
      ornaments: (
        <>
          {/* Wavy line vector in mid-right */}
          <div className="absolute right-5 top-[140px] text-zinc-950/25 pointer-events-none select-none">
            <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-950/30">
              <path d="M0 4 Q3 0, 6 4 T12 4 T18 4 T24 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          {/* Vertical dotted pattern along the bottom right */}
          <div className="absolute bottom-16 right-5 flex flex-col gap-1 opacity-25 text-zinc-950 pointer-events-none select-none">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-[3px] h-[3px] bg-zinc-950 rounded-full" />
            ))}
          </div>
          {/* Bottom-Right plus sign marker */}
          <div className="absolute bottom-4 right-4 text-zinc-950/40 text-xs font-mono font-bold select-none pointer-events-none">
            +
          </div>
        </>
      )
    }
  ];

  return (
    <section className="bg-black pt-4 sm:pt-6 pb-12 z-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Customized Flex container for responsive grid wrapping and exact card proportion alignment */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {cards.map((card) => {
            const IconComponent = card.icon;
            
            if ('isNotClickable' in card && card.isNotClickable) {
              return (
                <div
                  key={card.id}
                  className={`flex flex-col justify-between p-7 sm:p-8 rounded-[28px] ${card.bg} transition-all duration-300 shadow-lg text-left h-[390px] relative overflow-hidden ring-1 ring-black/5 w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-64px)/3)]`}
                  id={`bento-card-${card.id}`}
                >
                  {/* Visual Ornaments */}
                  {card.ornaments}

                  {/* Top Row: Icon inside rounded box on left */}
                  <div className="flex items-center justify-between w-full relative z-10">
                    <div className={`p-2.5 rounded-xl border flex items-center justify-center ${card.iconColor}`}>
                      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#30F858]" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Main Texts */}
                  <div className="mt-4 mb-2 relative z-10 w-full">
                    <h3 className={`font-sans font-black text-2xl sm:text-[25px] tracking-tight uppercase leading-[0.95] block mb-2.5 ${card.textClass}`}>
                      {language === 'pt' ? (
                        <>BEM-<span className="text-[#30F858]">VINDO</span></>
                      ) : language === 'es' ? (
                        <>BIEN<span className="text-[#30F858]">VENIDO</span></>
                      ) : (
                        <>WEL<span className="text-[#30F858]">COME</span></>
                      )}
                    </h3>
                    <p className={`font-sans text-[14px] sm:text-[15px] leading-[1.6] max-w-[210px] [text-wrap:pretty] break-words ${card.descColor}`}>
                      {card.text}
                    </p>
                  </div>

                  {/* Bottom Row: Static decor list with subtle top separator border */}
                  <div className={`flex flex-col ${card.id === 'tp-lab-card' ? 'items-center text-center' : 'items-start'} w-full relative z-10`}>
                    <div className="w-full h-px bg-zinc-800/40 mb-3.5" />
                    <span className="font-mono text-[8.5px] font-bold tracking-widest text-[#30F858] uppercase">
                      {card.decorText}
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={card.id}
                onClick={() => onCardClick(card.id)}
                className={`group flex flex-col justify-between p-7 sm:p-8 rounded-[28px] ${card.bg} transition-all duration-300 shadow-lg cursor-pointer text-left h-[390px] focus:outline-none relative overflow-hidden ring-1 ring-black/5 hover:scale-[1.015] hover:shadow-2xl hover:brightness-[1.03] active:scale-[0.99] w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-64px)/3)]`}
                id={`bento-card-${card.id}`}
              >
                {/* Visual Ornaments */}
                {card.ornaments}

                {/* Top Row: Icon inside rounded box on left */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center transition-transform group-hover:rotate-6 ${card.iconColor}`}>
                    {card.iconIsCustom ? (
                      <span className="font-mono text-xs font-black leading-none tracking-tighter">
                        &gt;_
                      </span>
                    ) : (
                      <IconComponent className="w-5 h-5 stroke-[2.2px]" />
                    )}
                  </div>
                </div>

                {/* Card Main Texts: Split title lines if necessary */}
                <div className="mt-4 mb-2 relative z-10 w-full">
                  <h3 className={`font-sans font-black text-2xl sm:text-[25px] tracking-tight uppercase leading-[0.95] block mb-2.5 ${card.textClass}`}>
                    {card.titleLines.map((line, idx) => (
                      <span key={idx} className="block">{line}</span>
                    ))}
                  </h3>
                  <p className={`font-sans text-[14px] sm:text-[15px] leading-[1.6] max-w-[210px] [text-wrap:pretty] break-words ${card.descColor}`}>
                    {card.text}
                  </p>
                </div>

                {/* Bottom Row: Hoverable circular arrow button, Tilted badge label */}
                <div className="flex items-end justify-between w-full relative z-10">
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${card.arrowColor}`}>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 pointer-events-none transition-transform stroke-[2.2px]" />
                  </div>

                  {/* Rotated layout Badge stamp removed */}

                  {card.id === 'sobre' && (
                    <div className={card.badgeClass}>
                      {card.badgeText}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
