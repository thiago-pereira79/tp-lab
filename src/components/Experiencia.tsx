import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { 
  Code2, 
  MapPin, 
  Layers, 
  Clock, 
  Laptop,
  Rocket,
  ChevronDown,
  ChevronUp,
  Headset,
  Scale,
  Database
} from 'lucide-react';

export default function Experiencia() {
  const { language } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);

  const pick = (values: { pt: string; en: string; es: string }) => values[language];

  const content = {
    timelineTitle: pick({ pt: '01  TRAJETÓRIA PROFISSIONAL', en: '01  PROFESSIONAL JOURNEY', es: '01  TRAYECTORIA PROFESIONAL' }),
    timelineSub: pick({ pt: 'Marcos importantes da minha jornada de trabalho e transição técnica.', en: 'Key milestones in my professional journey and transition into technology.', es: 'Hitos importantes de mi trayectoria profesional y transición hacia la tecnología.' }),
    
    areasTitle: pick({ pt: '02  ÁREAS DE ATUAÇÃO', en: '02  FIELDS OF EXPERTISE', es: '02  ÁREAS DE ESPECIALIZACIÓN' }),
    areasSub: pick({ pt: 'Especialidades combinando design de interfaces e engenharia de software.', en: 'Specialties that connect interface design and software engineering.', es: 'Especialidades que conectan el diseño de interfaces con la ingeniería de software.' }),
    
    btnTalk: pick({ pt: 'VAMOS CONVERSAR', en: 'LET\'S TALK', es: 'HABLEMOS' }),
    btnShowMore: pick({ pt: 'VER MAIS EXPERIÊNCIAS', en: 'VIEW MORE EXPERIENCES', es: 'VER MÁS EXPERIENCIAS' }),
    btnShowLess: pick({ pt: 'OCULTAR EXPERIÊNCIAS', en: 'HIDE EXPERIENCES', es: 'OCULTAR EXPERIENCIAS' }),

    timeline: [
      {
        date: pick({ pt: '2026 até o momento', en: '2026 to present', es: '2026 hasta el momento' }),
        company: pick({ pt: 'Desenvolvimento profissional / pausa na carreira', en: 'Professional development / career break', es: 'Desarrollo profesional / pausa en la carrera' }),
        role: pick({ pt: 'Foco em UX / UI / Dev / IA', en: 'Focus on UX / UI / Dev / AI', es: 'Enfoque en UX / UI / Dev / IA' }),
        period: pick({ pt: 'jun 2026 até o momento', en: 'Jun 2026 to present', es: 'jun 2026 hasta el momento' }),
        location: 'Brodowski, SP',
        model: pick({ pt: 'Remoto / Autônomo', en: 'Remote / Independent', es: 'Remoto / Autónomo' }),
        desc: pick({
          pt: 'Período dedicado a desenvolvimento profissional, reposicionamento de carreira, estudos profundos em UX Engineering, design de interfaces, engenharia de software e inteligência artificial aplicada.',
          en: 'A period dedicated to professional development, career repositioning, and in-depth study of UX Engineering, interface design, software engineering, and applied artificial intelligence.',
          es: 'Período dedicado al desarrollo profesional, la reorientación de la carrera y el estudio profundo de UX Engineering, diseño de interfaces, ingeniería de software e inteligencia artificial aplicada.'
        }),
        startYear: 2026,
        endYear: 9999,
        isCurrent: true,
        icon: Rocket
      },
      {
        date: '2025–2026',
        company: 'GRUPO SEB',
        role: pick({ pt: 'Analista de Suporte de TI', en: 'IT Support Analyst', es: 'Analista de Soporte de TI' }),
        period: pick({ pt: 'abr 2025 a mai 2026', en: 'Apr 2025 to May 2026', es: 'abr 2025 a may 2026' }),
        location: 'Ribeirão Preto, SP',
        model: pick({ pt: 'Tempo integral / Remoto', en: 'Full-time / Remote', es: 'Tiempo completo / Remoto' }),
        desc: pick({
          pt: 'Atendimento N1, monitoramento de filas e apoio à operação em demandas de TI, com controle de indicadores, validação de dados e organização de fluxos internos. Atuação na melhoria de planilhas, cruzamento de informações e automação de controles para aumentar produtividade, confiabilidade e agilidade nos processos.',
          en: 'Level 1 support, queue monitoring, and operational assistance with IT requests, including KPI tracking, data validation, and organization of internal workflows. Improved spreadsheets, cross-checked information, and automated controls to increase productivity, reliability, and process agility.',
          es: 'Soporte de nivel 1, monitoreo de colas y apoyo operativo en solicitudes de TI, con seguimiento de indicadores, validación de datos y organización de flujos internos. Mejora de hojas de cálculo, cruce de información y automatización de controles para aumentar la productividad, la confiabilidad y la agilidad de los procesos.'
        }),
        startYear: 2025,
        endYear: 2026,
        isCurrent: false,
        icon: Code2
      },
      {
        date: '2023–2025',
        company: 'GRUPO SEB',
        role: pick({ pt: 'Analista de Customer Success', en: 'Customer Success Analyst', es: 'Analista de Customer Success' }),
        period: pick({ pt: 'set 2023 a abr 2025', en: 'Sep 2023 to Apr 2025', es: 'sep 2023 a abr 2025' }),
        location: 'Ribeirão Preto, SP',
        model: pick({ pt: 'Tempo integral / Remoto', en: 'Full-time / Remote', es: 'Tiempo completo / Remoto' }),
        desc: pick({
          pt: 'Gestão de carteira própria de escolas parceiras das unidades Alta Performance, Maple Bear e Concept, com atuação em relacionamento, acompanhamento de demandas e suporte estratégico no uso de plataformas e soluções educacionais. Análise de métricas de engajamento, apoio ao onboarding, direcionamento de solicitações internas e atuação consultiva para melhorar a experiência, adoção e continuidade dos clientes.',
          en: 'Managed a portfolio of partner schools from Alta Performance, Maple Bear, and Concept, supporting relationships, requests, and strategic use of educational platforms and solutions. Analyzed engagement metrics, supported onboarding, coordinated internal requests, and provided consultative guidance to improve customer experience, adoption, and retention.',
          es: 'Gestión de una cartera de escuelas asociadas de Alta Performance, Maple Bear y Concept, con seguimiento de relaciones, solicitudes y uso estratégico de plataformas y soluciones educativas. Análisis de métricas de participación, apoyo al onboarding, coordinación de solicitudes internas y asesoramiento para mejorar la experiencia, la adopción y la continuidad de los clientes.'
        }),
        startYear: 2023,
        endYear: 2025,
        isCurrent: false,
        icon: Layers
      },
      {
        date: '2022–2023',
        company: 'GRUPO SEB',
        role: pick({ pt: 'Customer Service (estágio)', en: 'Customer Service (Internship)', es: 'Customer Service (prácticas)' }),
        period: pick({ pt: 'mai 2022 a ago 2023', en: 'May 2022 to Aug 2023', es: 'may 2022 a ago 2023' }),
        location: 'Ribeirão Preto, SP',
        model: pick({ pt: 'Meio período / Presencial', en: 'Part-time / On-site', es: 'Medio tiempo / Presencial' }),
        desc: pick({
          pt: 'Atendimento e suporte operacional via chamados, utilizando Topdesk e Zendesk para registro, acompanhamento e tratativas de demandas. Atuação na triagem de solicitações, controle de prazos/SLA, atualização de informações e comunicação com áreas internas por Teams e e-mail para garantir direcionamento, clareza e continuidade no atendimento.',
          en: 'Customer service and operational support through tickets, using Topdesk and Zendesk to register, track, and resolve requests. Triaged cases, monitored deadlines and SLAs, updated information, and communicated with internal teams through Teams and email to ensure clarity and continuity of service.',
          es: 'Atención al cliente y soporte operativo mediante tickets, con Topdesk y Zendesk para registrar, acompañar y resolver solicitudes. Clasificación de casos, seguimiento de plazos y SLA, actualización de información y comunicación con áreas internas por Teams y correo electrónico para garantizar claridad y continuidad en la atención.'
        }),
        startYear: 2022,
        endYear: 2023,
        isCurrent: false,
        icon: Headset
      },
      {
        date: '2020–2023',
        company: 'Brasil Center Comunicações',
        role: pick({ pt: 'Suporte Jurídico', en: 'Legal Support', es: 'Soporte Jurídico' }),
        period: pick({ pt: 'abr 2020 a set 2023', en: 'Apr 2020 to Sep 2023', es: 'abr 2020 a sep 2023' }),
        location: 'Ribeirão Preto, SP',
        model: pick({ pt: 'Meio período / Remota', en: 'Part-time / Remote', es: 'Medio tiempo / Remoto' }),
        desc: pick({
          pt: 'Suporte jurídico operacional em demandas administrativas e judiciais no segmento de telecomunicações, com coleta, organização e validação de subsídios para apoio à elaboração de defesas e tratativas internas. Atuação na análise de documentações, históricos de atendimento, informações de cobrança e evidências operacionais, contribuindo para a precisão dos processos e o suporte às áreas jurídicas responsáveis.',
          en: 'Operational legal support for administrative and judicial matters in telecommunications, gathering, organizing, and validating information used in legal defenses and internal procedures. Reviewed documents, service histories, billing information, and operational evidence to improve process accuracy and support the responsible legal teams.',
          es: 'Soporte jurídico operativo en asuntos administrativos y judiciales del sector de telecomunicaciones, con recopilación, organización y validación de información para defensas y procedimientos internos. Análisis de documentos, historiales de atención, datos de facturación y evidencias operativas para mejorar la precisión de los procesos y apoyar a los equipos jurídicos responsables.'
        }),
        startYear: 2020,
        endYear: 2023,
        isCurrent: false,
        icon: Scale
      },
      {
        date: '2019–2020',
        company: 'Brasil Center Comunicações',
        role: pick({ pt: 'Análise de Divergências', en: 'Billing Discrepancy Analysis', es: 'Análisis de Discrepancias' }),
        period: pick({ pt: 'mar 2019 a mar 2020', en: 'Mar 2019 to Mar 2020', es: 'mar 2019 a mar 2020' }),
        location: 'Ribeirão Preto, SP',
        model: pick({ pt: 'Meio período / Presencial', en: 'Part-time / On-site', es: 'Medio tiempo / Presencial' }),
        desc: pick({
          pt: 'Análise de divergências de valores, produtos e faturamento em serviços de telecomunicações, investigando inconsistências entre cobranças, pacotes contratados, fidelizações e serviços instalados. Atuação com validação de informações em sistemas internos, conciliação de dados, registro de tratativas e apoio na correção de divergências para garantir mais precisão no atendimento e na experiência do cliente.',
          en: 'Analyzed discrepancies in pricing, products, and billing for telecommunications services, investigating inconsistencies across charges, contracted packages, commitments, and installed services. Validated information in internal systems, reconciled data, documented resolutions, and supported corrections to improve service accuracy and customer experience.',
          es: 'Análisis de discrepancias en valores, productos y facturación de servicios de telecomunicaciones, investigando inconsistencias entre cobros, paquetes contratados, permanencias y servicios instalados. Validación de información en sistemas internos, conciliación de datos, registro de resoluciones y apoyo en la corrección de diferencias para mejorar la precisión de la atención y la experiencia del cliente.'
        }),
        startYear: 2019,
        endYear: 2020,
        isCurrent: false,
        icon: Database
      },
      {
        date: '2012',
        company: 'Governo do Estado de São Paulo',
        role: pick({ pt: 'Monitor de Laboratório de TI (estágio)', en: 'IT Lab Monitor (Internship)', es: 'Monitor de Laboratorio de TI (prácticas)' }),
        period: pick({ pt: 'jan 2012 a dez 2012', en: 'Jan 2012 to Dec 2012', es: 'ene 2012 a dic 2012' }),
        location: 'Brodowski, SP',
        model: pick({ pt: 'Meio período / Presencial', en: 'Part-time / On-site', es: 'Medio tiempo / Presencial' }),
        desc: pick({
          pt: 'Atuação como estagiário no Programa Acessa Escola, apoiando a inclusão digital de alunos, professores e comunidade escolar. Orientação no uso de computadores e internet, apoio a pesquisas e atividades educacionais, organização da sala de informática, liberação e acompanhamento dos equipamentos e suporte básico ao funcionamento do laboratório.',
          en: 'Worked as an intern in the Acessa Escola program, supporting digital inclusion for students, teachers, and the school community. Guided users in the use of computers and the internet, supported research and educational activities, organized the computer room, monitored equipment use, and provided basic laboratory support.',
          es: 'Prácticas en el programa Acessa Escola, apoyando la inclusión digital de estudiantes, docentes y la comunidad escolar. Orientación en el uso de computadoras e internet, apoyo a investigaciones y actividades educativas, organización de la sala de informática, seguimiento de los equipos y soporte básico del laboratorio.'
        }),
        startYear: 2012,
        endYear: 2012,
        isCurrent: false,
        icon: Laptop
      }
    ],

    areas: [
      {
        title: 'SOFTWARE DEVELOPMENT',
        tags: ['Web', 'APIs', 'Performance'],
        desc: pick({
          pt: 'Desenvolvimento de sistemas modernos com código limpo e arquitetura de componentes reutilizáveis.',
          en: 'Development of modern systems with clean code and reusable component architecture.',
          es: 'Desarrollo de sistemas modernos con código limpio y una arquitectura de componentes reutilizables.'
        })
      },
      {
        title: 'UX ENGINEERING',
        tags: [pick({ pt: 'Pesquisa', en: 'Research', es: 'Investigación' }), pick({ pt: 'Protótipo', en: 'Prototype', es: 'Prototipo' }), pick({ pt: 'Teste', en: 'Testing', es: 'Pruebas' })],
        desc: pick({
          pt: 'Foco na intersecção entre código e usabilidade para criar fluxos funcionais baseados em contexto.',
          en: 'Focus on the intersection of code and usability to create functional, context-aware user flows.',
          es: 'Enfoque en la intersección entre código y usabilidad para crear flujos funcionales basados en el contexto.'
        })
      },
      {
        title: 'UI DESIGN',
        tags: ['Design System', pick({ pt: 'Acessibilidade', en: 'Accessibility', es: 'Accesibilidad' })],
        desc: pick({
          pt: 'Sistemas visuais claros com tipografia sólida, ritmo espacial bem equilibrado e boas práticas de WCAG.',
          en: 'Clear visual systems with solid typography, balanced spacing, and WCAG best practices.',
          es: 'Sistemas visuales claros con tipografía sólida, espaciado equilibrado y buenas prácticas de WCAG.'
        })
      },
      {
        title: pick({ pt: 'IA APLICADA', en: 'APPLIED AI', es: 'IA APLICADA' }),
        tags: ['LLMs', pick({ pt: 'Automação', en: 'Automation', es: 'Automatización' }), pick({ pt: 'Dados', en: 'Data', es: 'Datos' })],
        desc: pick({
          pt: 'Implementação prática de IA de produtos digitais, agentes conversacionais e conexões seguras de APIs.',
          en: 'Practical AI implementation in digital products, conversational agents, and secure API integrations.',
          es: 'Implementación práctica de IA en productos digitales, agentes conversacionales e integraciones seguras con APIs.'
        })
      }
    ]
  };

  // Dynamically sort experiences
  const sortedTimeline = [...content.timeline].sort((a, b) => {
    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;
    if (b.endYear !== a.endYear) return b.endYear - a.endYear;
    return b.startYear - a.startYear;
  });

  // Limit initially shown items to 3
  const visibleTimeline = expanded ? sortedTimeline : sortedTimeline.slice(0, 3);

  const getCardStyles = (idx: number) => {
    switch (idx % 7) {
      case 0: // Cyan / #00D0F8
        return {
          border: 'hover:border-[#00D0F8]/30 group-hover:border-[#00D0F8]/30',
          shadow: 'hover:shadow-[0_0_20px_rgba(0,208,248,0.08)] group-hover:shadow-[0_0_20px_rgba(0,208,248,0.08)]',
          iconColor: 'text-[#00D0F8]',
          textColor: 'text-[#00D0F8]',
          dotBorder: 'border-[#00D0F8]/50 group-hover:border-[#00D0F8] group-hover:shadow-[0_0_8px_#00D0F8]',
          dotBg: 'bg-[#00D0F8]',
          periodColor: 'text-[#00D0F8]',
          badgeBorder: 'border-[#00D0F8]/20 text-[#00D0F8]',
          iconBg: 'bg-[#00D0F8]/5 border-[#00D0F8]/15',
        };
      case 1: // Purple / #A898E0
        return {
          border: 'hover:border-[#A898E0]/30 group-hover:border-[#A898E0]/30',
          shadow: 'hover:shadow-[0_0_20px_rgba(168,152,224,0.08)] group-hover:shadow-[0_0_20px_rgba(168,152,224,0.08)]',
          iconColor: 'text-[#A898E0]',
          textColor: 'text-[#A898E0]',
          dotBorder: 'border-[#A898E0]/30 group-hover:border-[#A898E0] group-hover:shadow-[0_0_8px_#A898E0]',
          dotBg: 'bg-[#A898E0]',
          periodColor: 'text-[#A898E0]',
          badgeBorder: 'border-[#A898E0]/20 text-[#A898E0]',
          iconBg: 'bg-[#A898E0]/5 border-[#A898E0]/15',
        };
      case 2: // Green / #30F858
        return {
          border: 'hover:border-[#30F858]/30 group-hover:border-[#30F858]/30',
          shadow: 'hover:shadow-[0_0_20px_rgba(48,248,88,0.08)] group-hover:shadow-[0_0_20px_rgba(48,248,88,0.08)]',
          iconColor: 'text-[#30F858]',
          textColor: 'text-[#30F858]',
          dotBorder: 'border-[#30F858]/30 group-hover:border-[#30F858] group-hover:shadow-[0_0_8px_#30F858]',
          dotBg: 'bg-[#30F858]',
          periodColor: 'text-[#30F858]',
          badgeBorder: 'border-[#30F858]/20 text-[#30F858]',
          iconBg: 'bg-[#30F858]/5 border-[#30F858]/15',
        };
      case 3: // Amber / #f59e0b
        return {
          border: 'hover:border-amber-500/30 group-hover:border-amber-500/30',
          shadow: 'hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]',
          iconColor: 'text-amber-500',
          textColor: 'text-amber-500',
          dotBorder: 'border-amber-500/30 group-hover:border-amber-500 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.8)]',
          dotBg: 'bg-amber-500',
          periodColor: 'text-amber-500',
          badgeBorder: 'border-amber-500/20 text-amber-500',
          iconBg: 'bg-amber-500/5 border-amber-500/15',
        };
      case 4: // Blue / #3b82f6
        return {
          border: 'hover:border-blue-500/30 group-hover:border-blue-500/30',
          shadow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]',
          iconColor: 'text-blue-500',
          textColor: 'text-blue-500',
          dotBorder: 'border-blue-500/30 group-hover:border-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.8)]',
          dotBg: 'bg-blue-500',
          periodColor: 'text-blue-500',
          badgeBorder: 'border-blue-500/20 text-blue-500',
          iconBg: 'bg-blue-500/5 border-blue-500/15',
        };
      case 5: // Pink / #ec4899
        return {
          border: 'hover:border-pink-500/30 group-hover:border-pink-500/30',
          shadow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.08)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.08)]',
          iconColor: 'text-pink-500',
          textColor: 'text-pink-500',
          dotBorder: 'border-pink-500/30 group-hover:border-pink-500 group-hover:shadow-[0_0_8px_rgba(236,72,153,0.8)]',
          dotBg: 'bg-pink-500',
          periodColor: 'text-pink-500',
          badgeBorder: 'border-pink-500/20 text-pink-500',
          iconBg: 'bg-pink-500/5 border-pink-500/15',
        };
      default: // Teal / #14b8a6
        return {
          border: 'hover:border-teal-500/30 group-hover:border-teal-500/30',
          shadow: 'hover:shadow-[0_0_20px_rgba(20,184,166,0.08)] group-hover:shadow-[0_0_20px_rgba(20,184,166,0.08)]',
          iconColor: 'text-teal-500',
          textColor: 'text-teal-500',
          dotBorder: 'border-teal-500/30 group-hover:border-teal-500 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.8)]',
          dotBg: 'bg-teal-500',
          periodColor: 'text-teal-500',
          badgeBorder: 'border-teal-500/20 text-teal-500',
          iconBg: 'bg-teal-500/5 border-teal-500/15',
        };
    }
  };

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);
      const element = document.getElementById('experiencia-page-root');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setExpanded(true);
    }
  };

  return (
    <div className="space-y-16 pb-2 text-left" id="experiencia-page-root">
      
      {/* 01 TRAJETÓRIA PROFISSIONAL */}
      <div className="space-y-8">
        <div className="border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D0F8] shadow-[0_0_5px_#00D0F8]" />
            <h3 className="font-mono text-xs font-bold text-[#00D0F8] tracking-[0.2em] uppercase">
              {content.timelineTitle}
            </h3>
          </div>
          <p className="text-zinc-500 font-sans text-xs mt-1.5 font-semibold">
            {content.timelineSub}
          </p>
        </div>

        {/* Timeline Layout Vertical */}
        <div className="relative border-l border-zinc-900/60 pl-8 ml-3 space-y-8 mt-10">
          {visibleTimeline.map((item, idx) => {
            const styles = getCardStyles(idx);

            return (
              <div key={idx} className="relative group w-full">
                
                {/* glowing themed dot indicator */}
                <span className={`absolute left-[-40px] top-[32px] w-4 h-4 rounded-full border bg-zinc-950 flex items-center justify-center transition-all duration-300 ${styles.dotBorder}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${styles.dotBg} transition-all duration-300`} />
                </span>

                {/* Box container */}
                <div className={`bg-[#07080a] border border-zinc-900 rounded-2xl p-6 transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center relative shadow-xl ${styles.border} ${styles.shadow}`}>
                  
                  {/* Left Column (Period & Model) */}
                  <div className="w-full md:w-[22%] shrink-0 flex flex-col items-start space-y-2 text-left">
                    <span className={`font-mono text-xs sm:text-[13px] font-black tracking-widest uppercase ${item.isCurrent ? 'text-[#00D0F8]' : 'text-zinc-500'}`}>
                      {item.date}
                    </span>
                    <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[9px] uppercase tracking-wider font-black">
                      <Laptop className="w-3.5 h-3.5 shrink-0 text-zinc-500" />
                      <span>{item.model}</span>
                    </div>
                  </div>

                  {/* Center Column (Company, Role, & Description) */}
                  <div className="flex-1 flex flex-col items-start space-y-2 min-w-0 md:px-6">
                    <h4 className="font-sans font-black text-white text-[15px] sm:text-[16px] tracking-tight uppercase leading-snug">
                      {item.company}
                    </h4>
                    <p className={`font-sans text-xs sm:text-[13px] font-black tracking-wide uppercase ${styles.textColor}`}>
                      {item.role}
                    </p>
                    <p className="text-zinc-400 font-sans text-[14px] sm:text-[15px] leading-[1.65] font-semibold text-left [text-wrap:pretty] break-words">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right Column (Detailed Dates & Location) */}
                  <div className="w-full md:w-[25%] shrink-0 flex flex-col items-start md:items-end justify-center space-y-2 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-zinc-900/60 md:pl-6 text-left md:text-right">
                    <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-black">
                      <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-black">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* View More / View Less dynamic trigger */}
        {sortedTimeline.length > 3 && (
          <div className="flex flex-col items-center justify-center pt-4">
            <button
              onClick={handleToggle}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2.5 px-6 py-3 border border-[#00D0F8] rounded-xl bg-zinc-950 hover:bg-zinc-900 text-[#00D0F8] font-mono text-xs font-black tracking-widest uppercase shadow-[0_0_10px_rgba(0,208,248,0.05)] hover:shadow-[0_0_20px_rgba(0,208,248,0.25)] hover:border-[#00D0F8]/80 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#00D0F8]/50 focus-visible:outline-none cursor-pointer"
            >
              {expanded ? (
                <>
                  <ChevronUp className="w-4 h-4 animate-bounce" />
                  <span>{content.btnShowLess}</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                  <span>{content.btnShowMore}</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* 02 ÁREAS DE ATUAÇÃO */}
      <div className="space-y-6">
        <div className="border-b border-zinc-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D0F8] shadow-[0_0_5px_#00D0F8]" />
            <h3 className="font-mono text-xs font-bold text-[#00D0F8] tracking-[0.2em] uppercase">
              {content.areasTitle}
            </h3>
          </div>
          <p className="text-zinc-500 font-sans text-xs mt-1.5 font-semibold">
            {content.areasSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.areas.map((ar, idx) => (
            <div 
              key={idx}
              className="bg-[#07080a] border border-zinc-900 p-5 sm:p-6 rounded-2xl min-h-[175px] flex flex-col justify-between hover:border-[#00D0F8]/30 hover:shadow-[0_0_15px_rgba(0,208,248,0.12)] transition-all duration-300 h-full"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] text-[#00D0F8] font-black tracking-widest uppercase">
                  // {idx + 1}
                </span>
                <div className="flex flex-wrap gap-1 max-w-[70%] justify-end">
                  {ar.tags.map((tg, i) => (
                    <span 
                      key={i}
                      className="font-mono text-[7px] font-black px-1.5 py-0.5 rounded-[4px] border border-zinc-850 text-zinc-400 bg-zinc-950 uppercase select-none"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 mt-4">
                <h4 className="font-sans font-black text-xs text-white uppercase tracking-wider">{ar.title}</h4>
                <p className="text-zinc-400 font-sans text-[14px] sm:text-[15px] leading-[1.6] font-semibold text-left [text-wrap:pretty] break-words">{ar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
