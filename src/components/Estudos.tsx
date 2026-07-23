import React from 'react';
import { GraduationCap, Globe } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Estudos() {
  const { language } = useTranslation();

  const isPt = language === 'pt';
  const isEs = language === 'es';

  // Copy exactly corresponding to references of ESTUDOS.png
  const content = {
    title01: isPt ? '01  FORMAÇÃO ACADÊMICA' : isEs ? '01  FORMACIÓN ACADÉMICA' : '01  ACADEMIC BACKGROUND',
    sub01: isPt ? 'Minha jornada acadêmica em construção.' : isEs ? 'Mi trayectoria académica en construcción.' : 'My academic journey in progress.',
    
    title02: isPt ? '02 / TRILHAS E CARREIRAS' : isEs ? '02 / RUTAS DE APRENDIZAJE Y CARRERAS' : '02 / LEARNING PATHS AND CAREERS',
    sub02: isPt ? 'Caminhos de aprendizado que conectam tecnologia, design e inteligência artificial.' : isEs ? 'Caminos de aprendizaje que conectan tecnología, diseño e inteligencia artificial.' : 'Learning paths connecting technology, design, and artificial intelligence.',
    
    ctaTitle: isPt ? 'Aprender todos os dias é construir o futuro.' : isEs ? 'Aprender todos los días es construir el futuro.' : 'Learning every day is building the future.',
    ctaSub: isPt ? 'Novas ideias, novas conexões, novas possibilidades.' : isEs ? 'Nuevas ideas, nuevas conexiones, nuevas posibilidades.' : 'New ideas, new connections, new possibilities.',
    ctaBtn: isPt ? 'VER TODOS OS ESTUDOS' : isEs ? 'VER TODOS LOS ESTUDIOS' : 'VIEW ALL STUDIES',

    formations: [
      {
        institution: 'PUC Minas',
        course: isPt ? 'Pós-graduação em UX Engineering' : isEs ? 'Posgrado en UX Engineering' : 'Postgraduate in UX Engineering',
        period: isPt ? 'mai 2026 a nov 2027' : isEs ? 'may 2026 a nov 2027' : 'May 2026 to Nov 2027',
        icon: 'graduation'
      },
      {
        institution: 'Impacta Tecnologia',
        course: isPt ? 'Análise e Desenvolvimento de Sistemas' : isEs ? 'Análisis y Desarrollo de Sistemas' : 'Analysis and Systems Development',
        period: isPt ? 'fev 2025 a jun 2027' : isEs ? 'feb 2025 a jun 2027' : 'Feb 2025 to Jun 2027',
        icon: 'graduation'
      },
      {
        institution: 'UNINTER',
        course: isPt ? 'Relações Internacionais' : isEs ? 'Relaciones Internacionales' : 'International Relations',
        period: isPt ? 'fev 2022 a dez 2024' : isEs ? 'feb 2022 a dic 2024' : 'Feb 2022 to Dec 2024',
        icon: 'graduation'
      }
    ] as Array<{ institution: string; course: string; period: string; icon: string; subText?: string }>,

    pills: {
      pt: [
        'Desenvolvimento Front-End React',
        'Desenvolvimento Mobile com Flutter',
        'Desenvolvimento Back-End Node.js',
        'Engenharia de Agentes de IA',
        'Liderança',
        'UI Design',
        'UX Design',
        'Desenvolvimento Back-End Python',
        'Arquitetura de Soluções com IA',
        'Tech Lead na Era da IA',
        'Social Media Marketing',
        'AI-Native Software Engineering',
        'AI Product Design',
        'Martech',
        'Growth Marketing'
      ],
      en: [
        'Front-End Development with React',
        'Mobile Development with Flutter',
        'Back-End Development with Node.js',
        'AI Agent Engineering',
        'Leadership',
        'UI Design',
        'UX Design',
        'Back-End Development with Python',
        'AI Solution Architecture',
        'Tech Leadership in the AI Era',
        'Social Media Marketing',
        'AI-Native Software Engineering',
        'AI Product Design',
        'Martech',
        'Growth Marketing'
      ],
      es: [
        'Desarrollo Front-End con React',
        'Desarrollo móvil con Flutter',
        'Desarrollo Back-End con Node.js',
        'Ingeniería de agentes de IA',
        'Liderazgo',
        'UI Design',
        'UX Design',
        'Desarrollo Back-End con Python',
        'Arquitectura de soluciones con IA',
        'Liderazgo técnico en la era de la IA',
        'Social Media Marketing',
        'AI-Native Software Engineering',
        'AI Product Design',
        'Martech',
        'Growth Marketing'
      ]
    }[language],

    themes: [
      { title: isPt ? 'i18n e internacionalização' : isEs ? 'i18n e internacionalización' : 'i18n and internationalization' },
      { title: 'Design systems' },
      { title: isPt ? 'Arquitetura de componentes' : isEs ? 'Arquitectura de componentes' : 'Component architecture' },
      { title: isPt ? 'Scroll e experiência' : isEs ? 'Desplazamiento y experiencia' : 'Scrolling and experience' },
      { title: isPt ? 'IA aplicada ao design e produto' : isEs ? 'IA aplicada al diseño y al producto' : 'AI applied to design and product' }
    ]
  };

  return (
    <div className="space-y-16 pb-0 transition-all duration-300 text-left" id="estudos-page-root">
      
      {/* 01 FORMAÇÃO ACADÊMICA */}
      <div className="space-y-6">
        <div className="border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A898E0] shadow-[0_0_5px_rgba(168,152,224,0.8)]" />
            <h3 className="font-mono text-xs font-bold text-[#A898E0] tracking-[0.2em] uppercase">
              {content.title01}
            </h3>
          </div>
          <p className="text-zinc-500 font-sans text-[13px] sm:text-sm leading-[1.6] mt-1.5 font-semibold [text-wrap:pretty] break-words">
            {content.sub01}
          </p>
        </div>

        {/* Horizontal linked cards setup timeline representation */}
        <div className="relative mt-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {content.formations.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#07080a] border border-zinc-900/90 rounded-2xl p-6 hover:border-[#A898E0]/30 transition-all duration-300 flex flex-col justify-between min-h-[195px] relative"
              >
                {/* Header item */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-[#A898E0] shadow-inner flex-shrink-0">
                      {item.icon === 'graduation' ? (
                        <GraduationCap className="w-5 h-5" />
                      ) : item.icon === 'globe' ? (
                        <Globe className="w-5 h-5" />
                      ) : (
                        <div className="text-sm font-sans font-black tracking-tight leading-none text-purple-400">im</div>
                      )}
                    </div>
                    {item.icon === 'code' ? (
                      <div>
                        <h4 className="font-sans font-black text-white text-md tracking-tight">{item.institution}</h4>
                      </div>
                    ) : (
                      <h4 className="font-sans font-black text-white text-md tracking-tight">{item.institution}</h4>
                    )}
                  </div>
                </div>

                {/* Course info */}
                <div className="mt-4 flex-1">
                  {item.subText && (
                    <p className="text-zinc-500 font-sans text-[11px] font-semibold tracking-wide mb-1 leading-none uppercase">
                      {item.subText}
                    </p>
                  )}
                  <p className="text-[#A898E0] font-sans text-[13.5px] font-black tracking-tight leading-tight uppercase">
                    {item.course}
                  </p>
                </div>

                {/* Footer and period with marker */}
                <div className="mt-5 pt-4 border-t border-zinc-900/30 flex items-center justify-between text-zinc-500 text-[10px] sm:text-xs">
                  {/* Circle horizontal stepper marker */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border-2 border-[#A898E0] bg-zinc-950 shadow-[0_0_4px_#A898E0] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-[#A898E0]" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-zinc-400">
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 02 TRILHAS E CARREIRAS EM ESTUDO */}
      <div className="space-y-6">
        <div className="border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A898E0] shadow-[0_0_5px_rgba(168,152,224,0.8)]" />
            <h3 className="font-mono text-xs font-bold text-[#A898E0] tracking-[0.2em] uppercase">
              {content.title02}
            </h3>
          </div>
          <p className="text-zinc-500 font-sans text-[13px] sm:text-sm leading-[1.6] mt-1.5 font-semibold [text-wrap:pretty] break-words">
            {content.sub02}
          </p>
        </div>

        {/* List of study pathways as clean capsule pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          {content.pills.map((p, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 bg-[#07080a] border border-zinc-900/60 p-4 rounded-xl hover:border-[#A898E0]/20 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#A898E0] shrink-0 shadow-[0_0_3px_#A898E0]" />
              <span className="font-sans text-[13px] sm:text-sm leading-[1.55] text-zinc-200 font-bold select-none tracking-wide text-left justify-start [text-wrap:pretty] break-words">
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
