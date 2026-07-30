import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import GameModal from './components/GameModals';
import { useTranslation } from './i18n/useTranslation';
import Projects from './components/Projects';
import Lab from './components/Lab';
import Estudos from './components/Estudos';
import Experiencia from './components/Experiencia';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import PageLayout from './components/PageLayout';
import { PROJECTS_DATA } from './data/projectsData';

const pageTitles: Record<string, string> = {
  '/': 'TP LAB | Currículo Digital',
  '/sobre': 'TP LAB | Currículo Digital',
  '/projetos': 'TP LAB | Currículo Digital',
  '/estudos': 'TP LAB | Currículo Digital',
  '/experiencia': 'TP LAB | Currículo Digital',
  '/contato': 'TP LAB | Currículo Digital',
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.title = pathname.startsWith('/projetos/')
      ? pageTitles['/projetos']
      : pageTitles[pathname] || pageTitles['/'];

    const canonicalPath = pathname.startsWith('/projetos/')
      ? pathname
      : pageTitles[pathname]
        ? pathname
        : '/';
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    canonical?.setAttribute(
      'href',
      `https://www.tplab.com.br${canonicalPath === '/' ? '/' : canonicalPath}`,
    );
  }, [pathname]);

  return null;
}

function downloadCV() {
  const link = document.createElement('a');
  link.href = '/Thiago_Pereira_CV.pdf';
  link.setAttribute('download', 'Thiago_Pereira_CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function HomePage() {
  const { t, language } = useTranslation();
  const capsuleItems = {
    pt: ['CURRÍCULO DIGITAL', 'PROJETOS', 'ESTUDOS'],
    en: ['DIGITAL RESUME', 'PROJECTS', 'STUDIES'],
    es: ['CURRÍCULUM DIGITAL', 'PROYECTOS', 'ESTUDIOS'],
  }[language];

  return (
    <div className="bg-[#000000] text-[#eaeaea] font-sans min-h-screen flex flex-col justify-between selection:bg-[#00D0F8]/20 selection:text-white antialiased">
      <div>
        <Header onDownloadCV={downloadCV} />

        <main>
          <Hero />

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

          <BentoGrid />
        </main>
      </div>

      <footer className="w-full bg-[#000000] pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="w-full h-[1px] bg-[#00D0F8]/15 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-500 font-mono text-[9px] sm:text-[10px] tracking-wider font-bold uppercase">
              {t.footer.copyright}
            </p>

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

function ProjectsPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [activePlayGameId, setActivePlayGameId] = useState<string | null>(null);

  if (projectId && !PROJECTS_DATA.some((project) => project.id === projectId)) {
    return <Navigate to="/projetos" replace />;
  }

  return (
    <PageLayout
      title={projectId ? '' : t.pages.projetosLab.title}
      subtitle={projectId ? '' : t.pages.projetosLab.subtitle}
      category={projectId ? '' : t.pages.projetosLab.category}
      pageId={projectId ? 'projetos-detail' : 'projetos-lab'}
      onBackToHome={() => navigate(projectId ? '/projetos' : '/')}
      onDownloadCV={downloadCV}
    >
      <div className="space-y-4">
        <Projects
          activeProjectId={projectId || null}
          onPlayGame={setActivePlayGameId}
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

export default function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projetos/:projectId" element={<ProjectsPage />} />
        <Route
          path="/estudos"
          element={
            <PageLayout
              title={t.pages.estudos.title}
              subtitle={t.pages.estudos.subtitle}
              category={t.pages.estudos.category}
              pageId="estudos"
              onBackToHome={() => navigate('/')}
              onDownloadCV={downloadCV}
            >
              <Estudos />
            </PageLayout>
          }
        />
        <Route
          path="/experiencia"
          element={
            <PageLayout
              title={t.pages.experiencia.title}
              subtitle={t.pages.experiencia.subtitle}
              category={t.pages.experiencia.category}
              pageId="experiencia"
              onBackToHome={() => navigate('/')}
              onDownloadCV={downloadCV}
            >
              <Experiencia />
            </PageLayout>
          }
        />
        <Route
          path="/sobre"
          element={
            <PageLayout
              title={t.pages.sobre.title}
              subtitle={t.pages.sobre.subtitle}
              category={t.pages.sobre.category}
              pageId="sobre"
              onBackToHome={() => navigate('/')}
              onDownloadCV={downloadCV}
            >
              <Sobre />
            </PageLayout>
          }
        />
        <Route
          path="/contato"
          element={
            <PageLayout
              title={t.pages.contato.title}
              subtitle={t.pages.contato.subtitle}
              category={t.pages.contato.category}
              pageId="contato"
              onBackToHome={() => navigate('/')}
              onDownloadCV={downloadCV}
            >
              <Contato />
            </PageLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
