import { 
  ArrowRight,
  ArrowUpRight,
  Code2, 
  Settings
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';
import { PROJECTS_DATA } from '../data/projectsData';
import { Link } from 'react-router-dom';

const projectSectionStyles = {
  content: 'space-y-3 border-0 bg-transparent p-0 rounded-none shadow-none',
  title: 'text-[#30F858] font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2',
  marker: 'w-1.5 h-1.5 rounded-full bg-[#30F858] shrink-0',
  body: 'text-zinc-300 font-sans text-[15px] sm:text-base leading-[1.65] font-semibold whitespace-pre-line text-left [text-wrap:pretty] break-words',
} as const;

interface ProjectsProps {
  onPlayGame: (gameId: string) => void;
  activeProjectId?: string | null;
}

export default function Projects({ onPlayGame, activeProjectId }: ProjectsProps) {
  const { language } = useTranslation();

  const ebookUrl = '/ebooks/rituais-de-chumbo.pdf';

  const currentActiveId = activeProjectId || null;

  const isPt = language === 'pt';
  const isEs = language === 'es';
  const ui = {
    pt: {
      presentation: 'APRESENTAÇÃO', status: 'Status', about: 'Sobre o projeto', worked: 'O que foi trabalhado',
      tools: 'Ferramentas utilizadas', technologies: 'Tecnologias utilizadas', learnings: 'Aprendizados',
      access: 'Links e acesso', readEbook: 'LER E-BOOK ONLINE', downloadPdf: 'BAIXAR PDF',
      openOnline: 'ACESSAR PROJETO ONLINE', viewCode: 'VER CÓDIGO NO GITHUB', information: 'Informações',
      type: 'Tipo:', platform: 'Plataforma:', openProject: 'Abrir projeto', process: 'Processo',
      processDescription: 'Ciclo iterativo de criação guiado por curiosidade, testes e aprendizado constante.',
      processLessons: [
        'Começar simples, evoluir rápido.', 'Testar hipóteses antes de complicar.',
        'Escrever código claro para facilitar evolução.', 'Usar feedback visual para melhorar a experiência.',
        'Documentar decisões para aprender e evoluir.'
      ]
    },
    en: {
      presentation: 'PRESENTATION', status: 'Status', about: 'About the project', worked: 'What I worked on',
      tools: 'Tools used', technologies: 'Technologies used', learnings: 'Key learnings',
      access: 'Links and access', readEbook: 'READ E-BOOK ONLINE', downloadPdf: 'DOWNLOAD PDF',
      openOnline: 'OPEN ONLINE PROJECT', viewCode: 'VIEW CODE ON GITHUB', information: 'Project details',
      type: 'Type:', platform: 'Platform:', openProject: 'Open project', process: 'Process',
      processDescription: 'An iterative creation cycle guided by curiosity, testing, and continuous learning.',
      processLessons: [
        'Think small and deliver quickly.', 'Test assumptions before adding complexity.',
        'Clean code makes evolution easier.', 'Visual feedback transforms the experience.',
        'Documenting the process reinforces learning.'
      ]
    },
    es: {
      presentation: 'PRESENTACIÓN', status: 'Estado', about: 'Sobre el proyecto', worked: 'Aspectos trabajados',
      tools: 'Herramientas utilizadas', technologies: 'Tecnologías utilizadas', learnings: 'Aprendizajes clave',
      access: 'Enlaces y acceso', readEbook: 'LEER E-BOOK ONLINE', downloadPdf: 'DESCARGAR PDF',
      openOnline: 'ABRIR PROYECTO ONLINE', viewCode: 'VER CÓDIGO EN GITHUB', information: 'Información',
      type: 'Tipo:', platform: 'Plataforma:', openProject: 'Abrir proyecto', process: 'Proceso',
      processDescription: 'Ciclo iterativo de creación guiado por la curiosidad, las pruebas y el aprendizaje continuo.',
      processLessons: [
        'Pensar en pequeño y entregar rápido.', 'Probar hipótesis antes de añadir complejidad.',
        'El código limpio facilita la evolución.', 'El feedback visual transforma la experiencia.',
        'Documentar el proceso refuerza el aprendizaje.'
      ]
    }
  }[language];

  const getPlatform = (platform?: string) => {
    const value = platform || 'Web Browser';
    const localizedPlatforms: Record<string, Record<string, string>> = {
      'Web Browser': { pt: 'Navegador web', en: 'Web browser', es: 'Navegador web' },
      'Web App': { pt: 'Aplicação web', en: 'Web app', es: 'Aplicación web' },
      'PDF • Web Browser': { pt: 'PDF • Navegador web', en: 'PDF • Web browser', es: 'PDF • Navegador web' },
    };
    return localizedPlatforms[value]?.[language] || value;
  };

  const getProjectTitle = (proj: any) => {
    if (typeof proj.title === 'object') {
      return isPt ? proj.title.pt : isEs ? proj.title.es : proj.title.en;
    }
    return proj.title;
  };

  const getProjectTags = (proj: any): string[] => proj.localizedTags?.[language] || proj.tags;

  const findActiveProject = () => PROJECTS_DATA.find(p => p.id === currentActiveId);
  const activeProj = findActiveProject();

  // If a specific project card has been clicked, display its detail presentation
  if (activeProj) {
    const p = activeProj;
    return (
      <div className="animate-fade-in text-left space-y-10" id="project-detail-view-root">
        {/* Navigation Breadcrumb inside children */}
        <div className="flex items-center justify-end border-b border-zinc-900/60 pb-4">
          <span className="font-mono text-[9px] text-zinc-650 uppercase tracking-[0.15em] font-bold">
            {getProjectTitle(p)} // {ui.presentation}
          </span>
        </div>

        {/* Dynamic Detail Presentation content for clicked project */}
        <div className="space-y-6 pt-2">
          {/* Header row information */}
          <div className="flex flex-wrap items-center gap-3">
             <span className="font-mono text-[#30F858] text-[9px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded border border-[#30F858]/20 bg-[#30F858]/5">
               {ui.status}: {isPt ? p.status.pt : isEs ? p.status.es : p.status.en}
             </span>
             <div className="flex gap-1.5 flex-wrap">
               {(p.id === 'readme-generator' ? ['React', 'TypeScript', 'Vite', 'Vercel'] : getProjectTags(p)).map(t => (
                 <span key={t} className="font-mono text-[8.5px] font-black px-2 py-0.5 rounded border border-zinc-900 text-zinc-500 bg-zinc-950 uppercase">
                   {t}
                 </span>
               ))}
             </div>
          </div>
          
          <h1 className="font-sans font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-none">
             {getProjectTitle(p)}
          </h1>
          
          <p className="text-zinc-400 font-sans text-[15px] sm:text-lg max-w-3xl leading-[1.65] font-semibold text-left [text-wrap:pretty] break-words">
             {isPt ? p.shortDesc.pt : isEs ? p.shortDesc.es : p.shortDesc.en}
          </p>
        </div>

        {/* Main Grid for detailed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          
          {/* Left blocks: Detailed information (span 8) */}
          <div className="lg:col-span-8 space-y-8 text-left">
            
            {/* Sobre o projeto */}
            <div className={projectSectionStyles.content}>
              <h3 className={projectSectionStyles.title}>
                <span aria-hidden="true" className={projectSectionStyles.marker} />
                <span>{ui.about}</span>
              </h3>
              <p className={projectSectionStyles.body}>
                {isPt ? p.about.pt : isEs ? p.about.es : p.about.en}
              </p>
            </div>

            {/* O que foi trabalhado */}
            <div className={projectSectionStyles.content}>
              <h3 className={projectSectionStyles.title}>
                <span aria-hidden="true" className={projectSectionStyles.marker} />
                <span>{ui.worked}</span>
              </h3>
              <p className={projectSectionStyles.body}>
                {isPt ? p.worked.pt : isEs ? p.worked.es : p.worked.en}
              </p>
              {p.id === 'rituais-de-chumbo' && (
                <div className="pt-4 border-t border-zinc-900/40 mt-3.5">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-2">
                    {ui.tools}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['ChatGPT', 'MidJourney', 'PowerPoint'].map(tool => (
                      <span key={tool} className="font-mono text-[8.5px] font-black px-2 py-0.5 rounded border border-zinc-900 text-[#30F858] bg-[#30F858]/5 uppercase">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {p.id === 'space-impacta' && (
                <div className="pt-4 border-t border-zinc-900/40 mt-3.5">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-2">
                    {ui.technologies}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Vite', 'React', 'TypeScript', 'HTML5 Canvas'].map(tool => (
                      <span key={tool} className="font-mono text-[8.5px] font-black px-2 py-0.5 rounded border border-zinc-900 text-[#30F858] bg-[#30F858]/5 uppercase">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {p.id === 'readme-generator' && (
                <div className="pt-4 border-t border-zinc-900/40 mt-3.5">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-black block mb-2">
                    {ui.technologies}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'TypeScript', 'Vite', 'Tailwind CSS'].map(tool => (
                      <span key={tool} className="font-mono text-[8.5px] font-black px-2 py-0.5 rounded border border-zinc-900 text-[#30F858] bg-[#30F858]/5 uppercase">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Aprendizados */}
            <div className={projectSectionStyles.content}>
              <h3 className={projectSectionStyles.title}>
                <span aria-hidden="true" className={projectSectionStyles.marker} />
                <span>{ui.learnings}</span>
              </h3>
              <p className={projectSectionStyles.body}>
                {isPt ? p.learnings.pt : isEs ? p.learnings.es : p.learnings.en}
              </p>
            </div>

          </div>

          {/* Right blocks: Call actions & links (span 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Bloco Links */}
            <div className="p-6 bg-[#07080a] border border-zinc-900 rounded-2xl space-y-4 shadow-xl text-left">
              <h3 className="text-zinc-300 font-mono text-[9px] font-black uppercase tracking-widest border-b border-zinc-900/40 pb-2">
                {ui.access}
              </h3>
              
              <div className="flex flex-col gap-3 pt-2">
                {p.id === 'rituais-de-chumbo' ? (
                  <>
                    <a 
                      href={ebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-[#30F858] hover:bg-[#2ae04f] active:scale-[0.99] text-zinc-950 font-mono text-[10px] font-black tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
                    >
                      <span>{ui.readEbook}</span>
                    </a>

                    <a 
                      href={ebookUrl}
                      download="rituais-de-chumbo.pdf"
                      className="w-full py-3.5 border border-zinc-805 text-zinc-400 hover:text-white hover:border-zinc-700 font-mono text-[10px] font-semibold tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{ui.downloadPdf}</span>
                    </a>
                  </>
                ) : (
                  <>
                    <a 
                      href={p.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-[#30F858] hover:bg-[#2ae04f] active:scale-[0.99] text-zinc-950 font-mono text-[10px] font-black tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
                    >
                      <span>{ui.openOnline}</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.2px]" />
                    </a>

                    {p.codeUrl && (
                      <a 
                        href={p.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3.5 border border-zinc-805 text-zinc-400 hover:text-white hover:border-zinc-700 font-mono text-[10px] font-semibold tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Code2 className="w-4 h-4" />
                        <span>{ui.viewCode}</span>
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Spec Box details */}
            <div className="p-6 bg-zinc-950/20 border border-zinc-900 rounded-2xl space-y-3.5 text-xs font-semibold text-zinc-350 text-left">
              <div className="flex items-center justify-between border-b border-zinc-900/40 pb-2">
                <span className="text-zinc-500 font-mono text-[9px] font-black uppercase tracking-widest">{ui.information}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">{ui.type}</span>
                <span>{p.type ? (isPt ? p.type.pt : isEs ? p.type.es : p.type.en) : getProjectTags(p).join(' • ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">{ui.platform}</span>
                <span>{getPlatform(p.platform)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">{ui.status}:</span>
                <span className="text-[#30F858] font-bold">{isPt ? p.status.pt : isEs ? p.status.es : p.status.en}</span>
              </div>
            </div>

          </div>

        </div>



      </div>
    );
  }

  // Otherwise, render the main Landing Grid showcase (3 columns on desktop + centered horizontal Processo card below)
  return (
    <div className="space-y-16 pb-8 text-left relative" id="projects-page-root">
      
      {/* Grid of Projects - Responsive 3-columns layout on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((p) => {
          const IconComp = p.icon;
          return (
            <Link
              key={p.id}
              to={`/projetos/${p.id}`}
              className="bg-[#07080a] border border-zinc-900/90 rounded-2xl p-6 hover:border-[#30F858]/30 hover:shadow-[0_0_20px_rgba(48,248,88,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between min-h-[290px] cursor-pointer group relative shadow-xl"
              id={`card-${p.id}`}
            >
              {/* Top Part: Icon and Tags */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  {/* Icon with beautiful glowing background match */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors duration-300">
                    <IconComp 
                      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: p.color }}
                    />
                  </div>

                  {/* Small inline tags */}
                  <div className="flex flex-wrap gap-1 justify-end max-w-[70%]">
                    {getProjectTags(p).slice(0, 4).map((t) => (
                      <span 
                        key={t} 
                        className="font-mono text-[7px] sm:text-[8px] font-black px-1.5 py-0.5 rounded border border-zinc-900 text-zinc-500 bg-zinc-950 uppercase shrink-0"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle Part: Title and Short Description */}
                <h3 className="font-sans font-black text-lg text-white uppercase tracking-tight group-hover:text-[#30F858] transition-colors mt-5">
                  {getProjectTitle(p)}
                </h3>

                <p className="text-zinc-400 font-sans text-[14px] sm:text-[15px] leading-[1.6] font-semibold mt-2 line-clamp-3 text-left [text-wrap:pretty] break-words">
                  {isPt ? p.shortDesc.pt : isEs ? p.shortDesc.es : p.shortDesc.en}
                </p>
              </div>

              {/* Bottom Part: Action Trigger Button */}
              <div className="border-t border-zinc-900/50 pt-4 mt-6 flex justify-between items-center select-none font-mono text-[10px] font-black tracking-widest uppercase">
                <span className="text-zinc-500 group-hover:text-zinc-350 transition-colors">
                  {ui.openProject}
                </span>
                <span 
                  className="w-8 h-8 rounded-full border border-zinc-850 text-zinc-400 flex items-center justify-center group-hover:text-zinc-950 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'transparent',
                    borderColor: '#27272a'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = p.color;
                    e.currentTarget.style.borderColor = p.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#27272a';
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Tiny glowing micro border bottom */}
              <div 
                className="absolute bottom-0 left-6 right-6 h-[1.5px] max-w-0 group-hover:max-w-full transition-all duration-300 pointer-events-none opacity-80"
                style={{ backgroundColor: p.color, boxShadow: `0 0 8px ${p.color}` }}
              />
            </Link>
          );
        })}
      </div>

      {/* Card PROCESSO - Centralizado horizontalmente fora da grade */}
      <div className="pt-4 flex justify-center w-full">
        <div className="bg-[#07080a] border border-zinc-900/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-stretch max-w-[820px] mx-auto w-full relative group hover:border-[#30F858]/30 hover:shadow-[0_0_25px_rgba(48,248,88,0.02)] transition-all duration-300 shadow-xl">
          {/* Lado esquerdo: ícone de engrenagem, título e descrição */}
          <div className="flex-1 flex justify-center items-center">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 shrink-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:border-[#30F858]/30 group-hover:shadow-[0_0_15px_rgba(48,248,88,0.15)]">
                <Settings className="w-6 h-6 text-[#30F858] transition-transform duration-700 group-hover:rotate-45" />
              </div>
              <div className="space-y-2">
                <h3 className="font-sans font-black text-lg text-[#30F858] uppercase tracking-wider">
                  {ui.process}
                </h3>
                <p className="text-zinc-500 font-sans text-[14px] sm:text-[15px] leading-[1.6] font-semibold max-w-sm [text-wrap:pretty] break-words">
                  {ui.processDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Divisor vertical discreto no desktop */}
          <div className="hidden md:block w-px bg-zinc-900/80 self-stretch" />

          {/* Lado direito: Aprendizados */}
          <div className="flex-1 w-full md:w-auto">
            <ul className="space-y-3 text-[14px] sm:text-[15px] leading-[1.6] font-sans font-semibold text-zinc-400 text-left flex flex-col justify-center h-full">
              {ui.processLessons.map((lr, i) => (
                <li key={i} className="flex items-start gap-2.5 leading-snug">
                  <span className="text-[#30F858] font-bold">✓</span>
                  <span>{lr}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
