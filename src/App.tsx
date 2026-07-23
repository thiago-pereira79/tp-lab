import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import GameModal from './components/GameModals';
import { useTranslation } from './i18n/useTranslation';

// Import subpage components directly for full screen views
import Projects from './components/Projects';
import Lab from './components/Lab';
import Estudos from './components/Estudos';
import Experiencia from './components/Experiencia';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import PageLayout from './components/PageLayout';

export default function App() {
  const { t, language } = useTranslation();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activePlayGameId, setActivePlayGameId] = useState<string | null>(null);
  const [selectedProjectDetailId, setSelectedProjectDetailId] = useState<string | null>(null);

  const capsuleItems = {
    pt: ['CURRÍCULO DIGITAL', 'PROJETOS', 'ESTUDOS'],
    en: ['DIGITAL RESUME', 'PROJECTS', 'STUDIES'],
    es: ['CURRÍCULUM DIGITAL', 'PROYECTOS', 'ESTUDIOS'],
  }[language];

  // Automatically scroll to top on homepage mounting/unmounting or detail selection
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPage, selectedProjectDetailId]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Thiago_Pereira_CV.pdf';
    link.setAttribute('download', 'Thiago_Pereira_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenProjetosLab = () => {
    setSelectedProjectDetailId(null);
    setCurrentPage('projetos-lab');
  };

  // Render subpage content based on active page state (No resume page)
  if (currentPage === 'projetos-lab') {
    return (
      <PageLayout
        title={selectedProjectDetailId ? "" : t.pages.projetosLab.title}
        subtitle={selectedProjectDetailId ? "" : t.pages.projetosLab.subtitle}
        category={selectedProjectDetailId ? "" : t.pages.projetosLab.category}
        pageId={selectedProjectDetailId ? "projetos-detail" : "projetos-lab"}
        onBackToHome={selectedProjectDetailId ? () => setSelectedProjectDetailId(null) : () => setCurrentPage('home')}
        onDownloadCV={handleDownloadCV}
      >
        <div className="space-y-4">
          <Projects 
            activeProjectId={selectedProjectDetailId}
            onActiveProjectChange={setSelectedProjectDetailId}
            onPlayGame={(gameId) => setActivePlayGameId(gameId)} 
          />
          <Lab />
        </div>

        {activePlayGameId && (
          <GameModal
            gameId={activePlayGameId}
            onClose={() => setActivePlayGameId(null)}
          />
        )}
      </PageLayout>
    );
  }

  if (currentPage === 'estudos') {
    return (
      <PageLayout
        title={t.pages.estudos.title}
        subtitle={t.pages.estudos.subtitle}
        category={t.pages.estudos.category}
        pageId="estudos"
        onBackToHome={() => setCurrentPage('home')}
        onDownloadCV={handleDownloadCV}
      >
        <Estudos />
      </PageLayout>
    );
  }

  if (currentPage === 'experiencia') {
    return (
      <PageLayout
        title={t.pages.experiencia.title}
        subtitle={t.pages.experiencia.subtitle}
        category={t.pages.experiencia.category}
        pageId="experiencia"
        onBackToHome={() => setCurrentPage('home')}
        onDownloadCV={handleDownloadCV}
      >
        <Experiencia onNavigateToContact={() => setCurrentPage('contato')} />
      </PageLayout>
    );
  }

  if (currentPage === 'sobre') {
    return (
      <PageLayout
        title={t.pages.sobre.title}
        subtitle={t.pages.sobre.subtitle}
        category={t.pages.sobre.category}
        pageId="sobre"
        onBackToHome={() => setCurrentPage('home')}
        onDownloadCV={handleDownloadCV}
      >
        <Sobre />
      </PageLayout>
    );
  }

  if (currentPage === 'contato') {
    return (
      <PageLayout
        title={t.pages.contato.title}
        subtitle={t.pages.contato.subtitle}
        category={t.pages.contato.category}
        pageId="contato"
        onBackToHome={() => setCurrentPage('home')}
        onDownloadCV={handleDownloadCV}
      >
        <Contato />
      </PageLayout>
    );
  }

  // Fallback to Main Homepage renderer
  return (
    <div className="bg-[#000000] text-[#eaeaea] font-sans min-h-screen flex flex-col justify-between selection:bg-[#00D0F8]/20 selection:text-white antialiased">
      <div>
        {/* Sleek Minimal Header */}
        <Header onDownloadCV={handleDownloadCV} onNavigate={(sectionId) => setCurrentPage(sectionId)} />

        {/* Main Interface Area */}
        <main>
          {/* Main Hero Header Visual */}
          <Hero 
            onVerProjetos={handleOpenProjetosLab} 
            onExplorarLab={handleOpenProjetosLab} 
          />

          {/* Static HUD Conceptual Signature Capsule */}
          <div className="w-full bg-black pt-3 pb-5 sm:pt-4 sm:pb-5 flex justify-center items-center px-6">
            <div className="w-full max-w-[620px] min-h-[48px] sm:h-14 rounded-full border border-[#00D0F8]/15 bg-[#07080a]/60 backdrop-blur-md shadow-[0_0_15px_rgba(0,208,248,0.06)] flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-0">
              <p className="font-mono text-[8.5px] xs:text-[9.5px] sm:text-[10.5px] tracking-[0.18em] xs:tracking-[0.22em] sm:tracking-[0.26em] text-zinc-400 uppercase font-bold text-center flex flex-wrap items-center justify-center leading-none">
                {capsuleItems.map((item, index) => (
                  <span key={item} className="contents">
                    {index > 0 && (
                      <span className="inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#00D0F8] mx-2.5 sm:mx-3.5 align-middle shadow-[0_0_5px_rgba(0,208,248,0.8)] opacity-80 shrink-0 my-1" />
                    )}
                    <span className="whitespace-nowrap my-1">{item}</span>
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Solid Colored Bento Cards Interactive Grid */}
          <BentoGrid onCardClick={(sectionId) => setCurrentPage(sectionId)} />

        </main>
      </div>

      {/* Crafted Minimal brand footer mimicking PAGINA INICIAL reference */}
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
