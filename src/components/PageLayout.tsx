import React from 'react';
import Header from './Header';
import { useTranslation } from '../i18n/LanguageContext';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  category?: string;
  pageId?: string; // 'projetos-lab' | 'estudos' | 'experiencia' | 'sobre' | 'contato'
  children: React.ReactNode;
  onBackToHome: () => void;
  onDownloadCV: () => void;
}

export default function PageLayout({
  title,
  subtitle,
  category,
  pageId = 'projetos-lab',
  children,
  onBackToHome,
  onDownloadCV,
}: PageLayoutProps) {
  const { t, language } = useTranslation();
  const titleParts: Record<string, [string, string]> = {
    pt: {
      'projetos-lab': ['PROJETOS ', '+ LAB'],
      estudos: ['ESTU', 'DOS'],
      experiencia: ['EXPERIÊN', 'CIA'],
      sobre: ['SOB', 'RE'],
      contato: ['CON', 'TATO'],
    },
    en: {
      'projetos-lab': ['PROJECTS ', '+ LAB'],
      estudos: ['STU', 'DIES'],
      experiencia: ['EXPERI', 'ENCE'],
      sobre: ['AB', 'OUT'],
      contato: ['CON', 'TACT'],
    },
    es: {
      'projetos-lab': ['PROYECTOS ', '+ LAB'],
      estudos: ['ESTU', 'DIOS'],
      experiencia: ['EXPERIEN', 'CIA'],
      sobre: ['SOBRE', ' MÍ'],
      contato: ['CON', 'TACTO'],
    },
  }[language];

  const renderTitleBlock = (id: string, color: string) => {
    const [base, accent] = titleParts[id] || [title, ''];
    return (
      <h1 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-wider uppercase leading-none">
        {base}<span style={{ color }}>{accent}</span>
      </h1>
    );
  };
  
  // Scoped thematic config for matching exactly each mockup page
  const getThemeConfig = (id: string) => {
    switch (id) {
      case 'projetos-lab':
        return {
          label: category || 'LAB',
          color: '#30F858', // vibrant green
          textGlow: 'shadow-[0_0_15px_rgba(48,248,88,0.25)]',
          keywords: ['> criar', '> testar', '> iterar', '> evoluir'],
          titleBlock: renderTitleBlock('projetos-lab', '#30F858'),
          iconSvg: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#30F858]" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          )
        };
      case 'estudos':
        return {
          label: category || 'ESTUDOS',
          color: '#A898E0', // soft purple/lilac matching studies mockup
          textGlow: 'shadow-[0_0_15px_rgba(168,152,224,0.25)]',
          keywords: ['• aprender', '• explorar', '• conectar', '• evoluir'],
          titleBlock: renderTitleBlock('estudos', '#A898E0'),
          iconSvg: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#A898E0]" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          )
        };
      case 'experiencia':
        return {
          label: category || 'TRAJETÓRIA',
          color: '#00D0F8', // cyan
          textGlow: 'shadow-[0_0_15px_rgba(0,208,248,0.25)]',
          keywords: ['• evoluir', '• construir', '• resolver', '• impactar'],
          titleBlock: renderTitleBlock('experiencia', '#00D0F8'),
          iconSvg: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#00D0F8]" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          )
        };
      case 'sobre':
        return {
          label: category || 'IDENTIDADE',
          color: '#30F858', // vibrant green
          textGlow: 'shadow-[0_0_15px_rgba(48,248,88,0.25)]',
          keywords: ['> criar', '> testar', '> iterar', '> evoluir'],
          titleBlock: renderTitleBlock('sobre', '#30F858'),
          iconSvg: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#30F858]" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          )
        };
      case 'contato':
        return {
          label: category || 'CONEXÃO',
          color: '#30F858', // vibrant green
          textGlow: 'shadow-[0_0_15px_rgba(48,248,88,0.25)]',
          keywords: ['▶ criar', '▶ testar', '▶ iterar', '▶ evoluir'],
          titleBlock: renderTitleBlock('contato', '#30F858'),
          iconSvg: (
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#30F858]" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          )
        };
      case 'projetos-detail':
        return {
          label: '',
          color: '#30F858', // vibrant green
          textGlow: '',
          keywords: [],
          titleBlock: null,
          iconSvg: null
        };
      default:
        return {
          label: category || 'PÁGINA',
          color: '#00D0F8',
          textGlow: '',
          keywords: ['construir', 'aprender', 'crescer', 'criar'],
          titleBlock: (
            <h1 className="font-sans font-black text-3xl sm:text-5xl text-white tracking-wider uppercase leading-none">
              {title}
            </h1>
          ),
          iconSvg: null
        };
    }
  };

  const theme = getThemeConfig(pageId);

  return (
    <div className="bg-[#000000] text-zinc-100 min-h-screen flex flex-col justify-between selection:bg-[#30F858]/20 selection:text-white antialiased">
      <div>
        {/* Simple fixed Header with return triggers & download action option */}
        <Header onDownloadCV={onDownloadCV} onBackToHome={onBackToHome} themeColor={theme.color} />

        {/* Main standard page document layout */}
        <main className="pt-36 pb-16 px-6 max-w-7xl mx-auto w-full flex-1">
          
          {/* Header Area styled according to the high-fidelity mockups */}
          {theme.titleBlock && (
            <div className="mb-10 pb-8 border-b border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative">
              
              {/* Left Column: Heading credentials */}
              <div className="flex-1 flex flex-col items-start text-left relative">
                {/* Left margin dot-matrix decoration (2x6 grid) */}
                <div className="absolute -left-10 top-0 hidden min-[1330px]:grid grid-cols-2 gap-1.5 opacity-35 select-none shrink-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.color, boxShadow: `0 0 4px ${theme.color}` }} />
                  ))}
                </div>
                
                {theme.titleBlock}

                {subtitle && (
                  <p className="text-zinc-500 font-sans text-[14px] sm:text-[15px] mt-4 max-w-xl leading-[1.6] text-left font-medium [text-wrap:pretty] break-words">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Render Page Children contents */}
          <div className="relative">
            {children}
          </div>

        </main>
      </div>

      {/* Structured Minimal brand footer inside grid, utilizing active page color theme */}
      <footer className="w-full bg-[#000000] pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Custom top border: fine horizontal line in dark cyan, aligned with the content */}
          <div className="w-full h-[1px] bg-[#00D0F8]/15 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright notice */}
            <p className="text-zinc-500 font-mono text-[9px] sm:text-[10px] tracking-wider font-bold uppercase">
              {t.footer.copyright}
            </p>

            {/* Design credit */}
            <p className="text-zinc-500 font-sans text-[11px] sm:text-[12px] font-medium select-text">
              {t.footer.credit}{' '}
              <a 
                href="http://tpstudio.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00D0F8] hover:text-[#00D0F8]/80 hover:underline transition-all duration-300 font-semibold cursor-pointer"
              >
                Thiago Pereira
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
