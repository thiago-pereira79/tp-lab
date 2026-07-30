import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { 
  Search, 
  Layers3, 
  Code2, 
  FlaskConical, 
  Sparkle, 
  Compass, 
  SlidersHorizontal, 
  MousePointer2, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';

export default function Sobre() {
  const { t, language } = useTranslation();

  const isPt = language === 'pt';
  const isEs = language === 'es';

  const content = {
    // 2. BLOCO PRINCIPAL COM FOTO E APRESENTAÇÃO (Text intact)
    subParagraphs: isPt 
      ? [
          'Meu trabalho nasce da conexão entre desenvolvimento de software, UX Engineering, design de interface e inteligência artificial aplicada. Gosto de entender o problema antes da tela, organizar jornadas, reduzir atritos e transformar ideias em produtos digitais claros, funcionais e úteis para pessoas reais.',
          'Vejo tecnologia como ponte entre intenção e execução: uma forma de estruturar experiências, comunicar valor com clareza e criar soluções que façam sentido para o usuário, para o negócio e para quem constrói.'
        ]
      : isEs 
        ? [
            'Mi trabajo nace de la conexión entre el desarrollo de software, UX Engineering, diseño de interfaz e inteligencia artificial aplicada. Me gusta entender el problema antes de la pantalla, organizar jornadas, reducir fricciones y transformar ideas en productos digitales claros, funcionales y útiles para personas reales.',
            'Veo la tecnología como un puente entre la intención y la ejecución: una forma de estructurar experiencias, comunicar valor con claridad y crear soluciones que tengan sentido para el usuario, el negocio y quien las construye.'
          ]
        : [
            'My work is born from the connection between software development, UX Engineering, interface design, and applied artificial intelligence. I like to understand the problem before the screen, organize user journeys, reduce friction, and transform ideas into clear, functional, and useful digital products for real people.',
            'I see technology as a bridge between intent and execution: a way to structure experiences, communicate value clearly, and create solutions that make sense for users, businesses, and the people who build them.'
          ],
    photoTitle: isPt ? 'CRIANDO COM PROPÓSITO' : isEs ? 'CREANDO CON PROPÓSITO' : 'CREATING WITH PURPOSE',
    photoDesc: isPt ? 'Produto • Interface • Código • Experiência' : isEs ? 'Producto • Interfaz • Código • Experiencia' : 'Product • Interface • Code • Experience',
    
    // 3. SEÇÃO 01 — MINHA FORMA DE PENSAR Headers
    label01: isPt ? '01  MINHA FORMA DE PENSAR' : isEs ? '01  MI FORMA DE PENSAR' : '01  MY WAY OF THINKING',
    sub01: isPt ? 'Princípios que norteiam minha jornada no design e desenvolvimento.' : isEs ? 'Principios que guían mi trayectoria en el diseño y desarrollo.' : 'Principles that guide my design and development journey.',

    // 3. SEÇÃO 01 — MINHA FORMA DE PENSAR Items
    philosophy: [
      {
        title: isPt ? 'UX NÃO COMEÇA NA TELA' : isEs ? 'LA UX NO EMPIEZA EN LA PANTALLA' : 'UX DOES NOT START ON THE SCREEN',
        desc: isPt 
          ? 'Começa na escuta, na pesquisa e na compreensão do contexto de quem vai usar.' 
          : isEs 
            ? 'Comienza con la escucha, la investigación y la comprensión del contexto de quien lo usará.' 
            : 'It starts with listening, research, and understanding the context of those who will use it.',
        icon: Search
      },
      {
        title: isPt ? 'UI NÃO É SÓ ESTÉTICA' : isEs ? 'LA UI NO ES SOLO ESTÉTICA' : 'UI IS NOT JUST AESTHETICS',
        desc: isPt 
          ? 'É comunicação. Hierarquia, contraste e ritmo guiam decisões e reduzem esforço cognitivo.'
          : isEs 
            ? 'Es comunicación. Jerarquía, contraste y ritmo guían decisiones y reducen el esfuerzo cognitivo.' 
            : 'It is communication. Hierarchy, contrast, and rhythm guide decisions and reduce cognitive load.',
        icon: Layers3
      },
      {
        title: isPt ? 'CÓDIGO É A PONTE ENTRE IDEIA E EXPERIÊNCIA' : isEs ? 'EL CÓDIGO ES EL PUENTE ENTRE LA IDEA Y LA EXPERIENCIA' : 'CODE IS THE BRIDGE BETWEEN IDEA AND EXPERIENCE',
        desc: isPt 
          ? 'Escrever bem é construir soluções sólidas, acessíveis e escaláveis.'
          : isEs 
            ? 'Escribir bien es construir soluciones sólidas, accesibles y escalables.' 
            : 'Writing well is building solid, accessible, and scalable solutions.',
        icon: Code2
      },
      {
        title: isPt ? 'TESTAR TAMBÉM É PENSAR' : isEs ? 'PROBAR TAMBIÉN ES PENSAR' : 'TESTING IS ALSO THINKING',
        desc: isPt 
          ? 'Não tento acertar tudo de primeira. Prefiro testar, ajustar e melhorar até a ideia fazer sentido de verdade.' 
          : isEs 
            ? 'No intento acertar todo a la primera. Prefiero probar, ajustar y mejorar hasta que la idea tenga sentido de verdad.' 
            : 'I don\'t try to get everything right at first. I prefer to test, adjust, and improve until the idea really makes sense.',
        icon: FlaskConical
      }
    ],

    // 4. SEÇÃO 02 — VALORES Headers
    label02: isPt ? '02  VALORES' : isEs ? '02  VALORES' : '02  VALUES',
    sub02: isPt ? 'O que guia minhas decisões na hora de criar.' : isEs ? 'Lo que guía mis decisiones a la hora de crear.' : 'What guides my decisions when creating.',

    // 4. SEÇÃO 02 — VALORES Items
    valores: [
      {
        title: isPt ? 'CLAREZA' : isEs ? 'CLARIDAD' : 'CLARITY',
        desc: isPt 
          ? 'Comunicar com simplicidade e objetividade. Menos ruído, mais significado.' 
          : isEs 
            ? 'Comunicar con sencillez y objetividad. Menos ruido, más significado.' 
            : 'Communicate with simplicity and objectivity. Less noise, more meaning.',
        icon: Sparkle
      },
      {
        title: isPt ? 'CURIOSIDADE' : isEs ? 'CURIOSIDAD' : 'CURIOSITY',
        desc: isPt 
          ? 'Perguntar, investigar e explorar novas possibilidades todos os dias.' 
          : isEs 
            ? 'Preguntar, investigar y explorar nuevas posibilidades todos los días.' 
            : 'Ask, investigate, and explore new possibilities every day.',
        icon: Compass
      },
      {
        title: isPt ? 'CRITÉRIO' : isEs ? 'CRITERIO' : 'DISCERNMENT',
        desc: isPt 
          ? 'Cada decisão precisa ter motivo. Menos enfeite, mais direção.' 
          : isEs 
            ? 'Cada decisión debe tener un motivo. Menos adorno, más dirección.' 
            : 'Every decision needs a reason. Less decoration, more direction.',
        icon: SlidersHorizontal
      },
      {
        title: isPt ? 'EXPERIÊNCIA' : isEs ? 'EXPERIENCIA' : 'EXPERIENCE',
        desc: isPt 
          ? 'Cuidar de cada detalhe para entregar experiências que encantam e funcionam.' 
          : isEs 
            ? 'Cuidar cada detalle para entregar experiencias que encantan y funcionan.' 
            : 'Caring for every detail to deliver experiences that delight people and work well.',
        icon: MousePointer2
      },
      {
        title: isPt ? 'RESPONSABILIDADE' : isEs ? 'RESPONSABILIDAD' : 'RESPONSIBILITY',
        desc: isPt 
          ? 'Assumir o impacto do que crio. Compromisso com qualidade e prazos.' 
          : isEs 
            ? 'Asumir el impacto de lo que creo. Compromiso con la calidad y los plazos.' 
            : 'Taking responsibility for the impact of what I create. Commitment to quality and deadlines.',
        icon: ShieldCheck
      },
      {
        title: isPt ? 'EVOLUÇÃO' : isEs ? 'EVOLUCIÓN' : 'EVOLUTION',
        desc: isPt 
          ? 'Aprender continuamente e transformar conhecimento em prática.' 
          : isEs 
            ? 'Aprender continuamente y transformar el conocimiento en práctica.' 
            : 'Continuously learning and transforming knowledge into practice.',
        icon: TrendingUp
      }
    ],

    // 5. SEÇÃO 03 — COMO EU TRABALHO Headers
    label03: isPt ? '03  COMO EU TRABALHO' : isEs ? '03  CÓMO TRABAJO' : '03  HOW I WORK',
    sub03: isPt ? 'Meu ciclo de criação passo a passo.' : isEs ? 'Mi ciclo de creación paso a paso.' : 'My structured creation process, step by step.',

    // 5. SEÇÃO 03 — COMO EU TRABALHO Items
    trabalhoSteps: [
      {
        num: '01',
        title: isPt ? 'DESCOBRIR' : isEs ? 'DESCUBRIR' : 'DISCOVER',
        desc: isPt 
          ? 'Entendo o problema, o contexto e as restrições antes de pensar na solução.' 
          : isEs 
            ? 'Entiendo el problema, el contexto y las restricciones antes de pensar en la solución.' 
            : 'I understand the problem, context, and constraints before thinking about the solution.'
      },
      {
        num: '02',
        title: isPt ? 'DEFINIR' : isEs ? 'DEFINIR' : 'DEFINE',
        desc: isPt 
          ? 'Organizo informações, priorizo caminhos e transformo ideias soltas em direção.' 
          : isEs 
            ? 'Organizo información, priorizo caminos y transformo ideas sueltas en dirección.' 
            : 'I organize information, prioritize paths, and turn loose ideas into direction.'
      },
      {
        num: '03',
        title: isPt ? 'IDEALIZAR' : isEs ? 'IDEAR' : 'IDEATE',
        desc: isPt 
          ? 'Exploro possibilidades, referências e fluxos antes da primeira interface.' 
          : isEs 
            ? 'Exploro posibilidades, referencias y flujos antes de la primera interfaz.' 
            : 'I explore possibilities, references, and flows before the first interface.'
      },
      {
        num: '04',
        title: isPt ? 'PROTOTIPAR' : isEs ? 'PROTOTIPAR' : 'PROTOTYPE',
        desc: isPt 
          ? 'Transformo hipóteses em telas, interações e experiências testáveis.' 
          : isEs 
            ? 'Transformo hipótesis en pantallas, interacciones y experiencias que se pueden probar.' 
            : 'I transform hypotheses into screens, interactions, and testable experiences.'
      },
      {
        num: '05',
        title: isPt ? 'CONSTRUIR' : isEs ? 'CONSTRUIR' : 'BUILD',
        desc: isPt 
          ? 'Levo a ideia para o código com atenção à estrutura, responsividade e clareza.' 
          : isEs 
            ? 'Llevo la idea al código con atención a la estructura, responsividad y claridad.' 
            : 'I bring the idea to code with attention to structure, responsiveness, and clarity.'
      },
      {
        num: '06',
        title: isPt ? 'LANÇAR E AJUSTAR' : isEs ? 'LANZAR Y AJUSTAR' : 'LAUNCH & ADJUST',
        desc: isPt 
          ? 'Publico, observo, aprendo com o uso e melhoro o que precisa evoluir.' 
          : isEs 
            ? 'Publico, observo, aprendo con el uso y mejoro lo que necesita evolucionar.' 
            : 'I publish, observe, learn from usage, and improve what needs to evolve.'
      }
    ]
  };

  return (
    <div className="space-y-16 pb-8 text-left" id="sobre-page-root">
      
      {/* 2. BLOCO PRINCIPAL COM FOTO E APRESENTAÇÃO */}
      <div className="group bg-[#07080a] border border-zinc-900 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-8 hover:border-[#30F858]/30 transition-all duration-300">
        
        {/* Permanently colorful portrait, no filters or grayscale transitions */}
        <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] rounded-2.5xl overflow-hidden bg-zinc-950 shrink-0 p-[5px]">
          <img 
            src="/images/foto-sobre.jpg"
            alt={t.sobrePage.altText}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Text presentation area */}
        <div className="space-y-4 text-left flex-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#30F858] shadow-[0_0_5px_#30F858]" />
            <h4 className="font-sans font-black text-xs sm:text-sm text-white uppercase tracking-wider">
              {content.photoTitle}
            </h4>
          </div>
          <p className="font-mono text-[10px] sm:text-xs text-[#30F858] uppercase tracking-widest leading-none font-black">
            {content.photoDesc}
          </p>
          <div className="space-y-3">
            {content.subParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-justified-balanced text-zinc-400 font-sans text-[15px] sm:text-base leading-[1.65] font-semibold max-w-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

      </div>

      {/* 3. SEÇÃO 01 — MINHA FORMA DE PENSAR (Vertical Compact List) */}
      <div className="space-y-6">
        <div className="border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#30F858] shadow-[0_0_5px_#30F858]" />
            <h3 className="font-mono text-xs font-bold text-[#30F858] tracking-[0.2em] uppercase">
              {content.label01}
            </h3>
          </div>
          <p className="text-zinc-500 font-sans text-xs mt-1.5 font-semibold">
            {content.sub01}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {content.philosophy.map((ph, i) => (
            <div 
              key={i}
              className="group bg-[#07080a] border border-zinc-900 rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-4 hover:border-[#30F858]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {/* Semantic Icon Box - replacing Plus */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-950 border border-zinc-900 group-hover:border-[#30F858]/30 flex items-center justify-center text-[#30F858] group-hover:text-[#46f96b] shrink-0 transition-all duration-300">
                  <ph.icon className="w-4 h-4 text-[#30F858] group-hover:text-[#46f96b] transition-all duration-300" aria-hidden="true" strokeWidth={2} />
                </div>

                {/* Title & Description Stacked */}
                <div className="flex-1 min-w-0 space-y-1 text-left">
                  <h4 className="font-sans font-black text-xs sm:text-sm text-white uppercase tracking-wider">
                    {ph.title}
                  </h4>
                  <p className="text-justified-balanced text-zinc-400 font-sans text-[14px] sm:text-[15px] leading-[1.6] font-semibold">
                    {ph.desc}
                  </p>
                </div>
              </div>

              {/* Decorative green dot */}
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#30F858] shadow-[0_0_6px_#30F858] shrink-0 mr-1" />
            </div>
          ))}
        </div>
      </div>

      {/* 4. SEÇÃO 02 — VALORES (Six Cards Grid) */}
      <div className="space-y-6">
        <div className="border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#30F858] shadow-[0_0_5px_#30F858]" />
            <h3 className="font-mono text-xs font-bold text-[#30F858] tracking-[0.2em] uppercase">
              {content.label02}
            </h3>
          </div>
          <p className="text-zinc-500 font-sans text-xs mt-1.5 font-semibold">
            {content.sub02}
          </p>
        </div>

        {/* 6 cards grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {content.valores.map((v, i) => (
            <div 
              key={i}
              className="group bg-[#07080a] border border-zinc-900 rounded-xl p-4 sm:p-5 flex items-start gap-4 hover:border-[#30F858]/30 transition-all duration-300 h-full"
            >
              {/* Semantic Icon Box with green border - replacing numeric block */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-950 border border-[#30F858]/30 group-hover:border-[#30F858]/50 flex items-center justify-center text-[#30F858] group-hover:text-[#46f96b] shrink-0 transition-all duration-300">
                <v.icon className="w-4 h-4 text-[#30F858] group-hover:text-[#46f96b] transition-all duration-300" aria-hidden="true" strokeWidth={2} />
              </div>

              {/* Text Block */}
              <div className="space-y-1.5 text-left flex-1">
                <h4 className="font-sans font-black text-xs sm:text-sm text-white uppercase tracking-wider">
                  {v.title}
                </h4>
                <p className="text-justified-balanced max-w-[220px] text-zinc-400 font-sans text-[14px] sm:text-[15px] leading-[1.6] font-semibold">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. SEÇÃO 03 — COMO EU TRABALHO (Vertical Compact List) */}
      <div className="space-y-6">
        <div className="border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#30F858] shadow-[0_0_5px_#30F858]" />
            <h3 className="font-mono text-xs font-bold text-[#30F858] tracking-[0.2em] uppercase">
              {content.label03}
            </h3>
          </div>
          <p className="text-zinc-500 font-sans text-xs mt-1.5 font-semibold">
            {content.sub03}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {content.trabalhoSteps.map((st) => (
            <div 
              key={st.num}
              className="bg-[#07080a] border border-zinc-900 rounded-xl p-3 sm:p-4 flex items-center justify-between gap-4 hover:border-[#30F858]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {/* Number Block with green border & text - preserved intact */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-950 border border-[#30F858]/30 flex items-center justify-center text-xs sm:text-sm font-mono font-black text-[#30F858] shrink-0">
                  {st.num}
                </div>

                {/* Desktop Layout: row with vertical divider */}
                <div className="hidden sm:flex items-center gap-4 flex-1 min-w-0">
                  <h4 className="font-sans font-black text-xs sm:text-sm text-white uppercase tracking-wider shrink-0 w-[110px] md:w-[130px] text-left">
                    {st.title}
                  </h4>
                  <div className="h-5 w-[1px] bg-zinc-850 shrink-0" />
                  <p className="text-justified-balanced text-zinc-400 font-sans text-[14px] md:text-[15px] leading-[1.6] font-semibold">
                    {st.desc}
                  </p>
                </div>

                {/* Mobile Layout: stacked title and desc */}
                <div className="flex sm:hidden flex-col gap-0.5 flex-1 min-w-0 text-left">
                  <h4 className="font-sans font-black text-xs text-white uppercase tracking-wider">
                    {st.title}
                  </h4>
                  <p className="text-justified-balanced text-zinc-400 font-sans text-[14px] leading-[1.6] font-semibold">
                    {st.desc}
                  </p>
                </div>
              </div>

              {/* Decorative dot */}
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#30F858] shadow-[0_0_6px_#30F858] shrink-0 mr-1" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
