import React from 'react';
import { Mail, Linkedin, Github, MessageSquare, Briefcase, Puzzle, BookOpen, Compass, Flag, Layers, Code2, User, ArrowUpRight, Beaker, Globe } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export default function Contato() {
  const { language } = useTranslation();

  const content = {
    pt: {
      cards: [
        {
          id: 'email',
          icon: Mail,
          color: '#30F858',
          title: 'E-MAIL',
          text: 'Para oportunidades, entrevistas e colaborações profissionais.',
          value: 't.firmiano.79@gmail.com',
          cta: 'ENVIAR E-MAIL',
          link: 'mailto:t.firmiano.79@gmail.com?subject=Contato%20pelo%20TP%20LAB&body=Ol%C3%A1%2C%20Thiago%21%0A%0AMeu%20nome%20%C3%A9%20%5Bseu%20nome%20aqui%5D%20e%20vi%20seu%20TP%20LAB.%0AGostaria%20de%20conversar%20sobre%20%5Boportunidade%2C%20colabora%C3%A7%C3%A3o%2C%20projeto%2C%20ideia%20ou%20outro%20assunto%5D.%0A%0APodemos%20falar%3F%0A%0AObrigado%28a%29%21',
          ariaLabel: 'Enviar e-mail para Thiago Pereira com assunto e corpo pré-definido'
        },
        {
          id: 'linkedin',
          icon: Linkedin,
          color: '#00E5FF',
          title: 'LINKEDIN',
          text: 'Acompanhe minha trajetória, publicações e posicionamento profissional.',
          value: 'linkedin.com/in/thiago-pereira79',
          cta: 'CONECTAR',
          link: 'https://www.linkedin.com/in/thiago-pereira79/',
          ariaLabel: 'Acessar LinkedIn de Thiago Pereira'
        },
        {
          id: 'github',
          icon: Github,
          color: '#ffffff',
          title: 'GITHUB',
          text: 'Explore projetos, estudos, código e experimentos abertos.',
          value: 'github.com/thiago-pereira79',
          cta: 'VER REPOSITÓRIOS',
          link: 'https://github.com/thiago-pereira79',
          ariaLabel: 'Acessar GitHub de Thiago Pereira'
        },
        {
          id: 'whatsapp',
          icon: MessageSquare,
          color: '#30F858',
          title: 'WHATSAPP',
          text: 'Contato rápido para alinhamentos e conversas profissionais.',
          value: '+55 16 99783-9791',
          cta: 'INICIAR CONVERSA',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20queria%20iniciar%20uma%20conversa.%20Meu%20nome%20%C3%A9%20%5Bseu%20nome%20aqui%5D%20e%20gostaria%20de%20falar%20sobre%20%5Bassunto%5D.%20Podemos%20conversar%3F',
          ariaLabel: 'Iniciar conversa no WhatsApp com Thiago Pereira pelo link direto'
        }
      ],
      featuredCard: {
        id: 'tpstudio',
        icon: Globe,
        color: '#00E5FF',
        title: 'TP STUDIO',
        text: 'Conheça meus projetos reais, serviços digitais e experiências criadas para marcas, profissionais e negócios.',
        cta: 'VER SITE PROFISSIONAL',
        link: 'http://tpstudio.com.br/',
        ariaLabel: 'Acessar site profissional TP Studio'
      },
      typesTitle: 'TIPOS DE CONVERSA',
      types: [
        {
          icon: Briefcase,
          title: 'OPORTUNIDADES PROFISSIONAIS',
          text: 'Vagas, entrevistas, processos seletivos e conversas exploratórias em tecnologia, produto, design e IA.',
          cta: 'FALAR SOBRE OPORTUNIDADE',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20profissional.%20Podemos%20falar%3F',
          ariaLabel: 'Conversar com Thiago sobre oportunidade profissional pelo WhatsApp'
        },
        {
          icon: Puzzle,
          title: 'COLABORAÇÕES',
          text: 'Projetos conjuntos, parcerias, ideias, experimentos e iniciativas que conectem tecnologia, design e produto.',
          cta: 'FALAR SOBRE COLABORAÇÃO',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20gostaria%20de%20conversar%20sobre%20uma%20colabora%C3%A7%C3%A3o%20ou%20projeto%20em%20parceria.%20Podemos%20falar%3F',
          ariaLabel: 'Conversar com Thiago sobre colaboração pelo WhatsApp'
        },
        {
          icon: Beaker,
          title: 'VAMOS CONVERSAR',
          text: 'Para trocar ideias sobre tecnologia, produto, design, IA ou algum assunto que não se encaixe nos cards anteriores.',
          decorText: 'CRIAR • TESTAR • CONECTAR'
        }
      ],
      ctaTitle: 'Vamos conversar sobre tecnologia, produto e oportunidades.',
      ctaSub: 'Envie sua mensagem e vamos construir conexões profissionais relevantes.',
      ctaBtn: 'ENTRAR EM CONTATO'
    },
    en: {
      cards: [
        {
          id: 'email',
          icon: Mail,
          color: '#30F858',
          title: 'E-MAIL',
          text: 'For opportunities, interviews, and professional collaborations.',
          value: 't.firmiano.79@gmail.com',
          cta: 'SEND E-MAIL',
          link: 'mailto:t.firmiano.79@gmail.com?subject=Contato%20pelo%20TP%20LAB&body=Ol%C3%A1%2C%20Thiago%21%0A%0AMeu%20nome%20%C3%A9%20%5Bseu%20nome%20aqui%5D%20e%20vi%20seu%20TP%20LAB.%0AGostaria%20de%20conversar%20sobre%20%5Boportunidade%2C%20colabora%C3%A7%C3%A3o%2C%20projeto%2C%20ideia%20ou%20outro%20assunto%5D.%0A%0APodemos%20falar%3F%0A%0AObrigado%28a%29%21',
          ariaLabel: 'Send email to Thiago Pereira with predefined subject and body'
        },
        {
          id: 'linkedin',
          icon: Linkedin,
          color: '#00E5FF',
          title: 'LINKEDIN',
          text: 'Follow my professional journey, publications, and areas of expertise.',
          value: 'linkedin.com/in/thiago-pereira79',
          cta: 'CONNECT',
          link: 'https://www.linkedin.com/in/thiago-pereira79/',
          ariaLabel: 'Access Thiago Pereira\'s LinkedIn'
        },
        {
          id: 'github',
          icon: Github,
          color: '#ffffff',
          title: 'GITHUB',
          text: 'Explore projects, studies, code, and open experiments.',
          value: 'github.com/thiago-pereira79',
          cta: 'VIEW REPOSITORIES',
          link: 'https://github.com/thiago-pereira79',
          ariaLabel: 'Access Thiago Pereira\'s GitHub'
        },
        {
          id: 'whatsapp',
          icon: MessageSquare,
          color: '#30F858',
          title: 'WHATSAPP',
          text: 'A direct channel for coordination and professional conversations.',
          value: '+55 16 99783-9791',
          cta: 'START CHAT',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20queria%20iniciar%20uma%20conversa.%20Meu%20nome%20%C3%A9%20%5Bseu%20nome%20aqui%5D%20e%20gostaria%20de%20falar%20sobre%20%5Bassunto%5D.%20Podemos%20conversar%3F',
          ariaLabel: 'Start WhatsApp chat with Thiago Pereira via direct link'
        }
      ],
      featuredCard: {
        id: 'tpstudio',
        icon: Globe,
        color: '#00E5FF',
        title: 'TP STUDIO',
        text: 'Discover my real projects, digital services, and experiences built for brands, professionals, and businesses.',
        cta: 'VIEW PROFESSIONAL SITE',
        link: 'http://tpstudio.com.br/',
        ariaLabel: 'Access TP Studio professional website'
      },
      typesTitle: 'CONVERSATION TOPICS',
      types: [
        {
          icon: Briefcase,
          title: 'PROFESSIONAL OPPORTUNITIES',
          text: 'Job openings, interviews, recruiting processes, and exploratory chats in technology, product, design, and AI.',
          cta: 'TALK ABOUT OPPORTUNITY',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20profissional.%20Podemos%20falar%3F',
          ariaLabel: 'Talk to Thiago about a professional opportunity on WhatsApp'
        },
        {
          icon: Puzzle,
          title: 'COLLABORATIONS',
          text: 'Joint projects, partnerships, ideas, experiments, and initiatives that connect technology, design, and product.',
          cta: 'TALK ABOUT COLLABORATION',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20gostaria%20de%20conversar%20sobre%20uma%20colabora%C3%A7%C3%A3o%20ou%20projeto%20em%20parceria.%20Podemos%20falar%3F',
          ariaLabel: 'Talk to Thiago about a collaboration on WhatsApp'
        },
        {
          icon: Beaker,
          title: "LET'S TALK",
          text: "To exchange ideas about technology, product, design, AI, or any topic that doesn't fit in the previous cards.",
          decorText: 'CREATE • TEST • CONNECT'
        }
      ],
      ctaTitle: "Let's talk about technology, product, and opportunities.",
      ctaSub: "Send your message and let's build meaningful professional connections.",
      ctaBtn: 'GET IN TOUCH'
    },
    es: {
      cards: [
        {
          id: 'email',
          icon: Mail,
          color: '#30F858',
          title: 'CORREO ELECTRÓNICO',
          text: 'Para oportunidades, entrevistas y colaboraciones profesionales.',
          value: 't.firmiano.79@gmail.com',
          cta: 'ENVIAR CORREO',
          link: 'mailto:t.firmiano.79@gmail.com?subject=Contato%20pelo%20TP%20LAB&body=Ol%C3%A1%2C%20Thiago%21%0A%0AMeu%20nome%20%C3%A9%20%5Bseu%20nome%20aqui%5D%20e%20vi%20seu%20TP%20LAB.%0AGostaria%20de%20conversar%20sobre%20%5Boportunidade%2C%20colabora%C3%A7%C3%A3o%2C%20projeto%2C%20ideia%20ou%20outro%20assunto%5D.%0A%0APodemos%20falar%3F%0A%0AObrigado%28a%29%21',
          ariaLabel: 'Enviar correo a Thiago Pereira con asunto y cuerpo predefinido'
        },
        {
          id: 'linkedin',
          icon: Linkedin,
          color: '#00E5FF',
          title: 'LINKEDIN',
          text: 'Conoce mi trayectoria, mis publicaciones y mis áreas de especialización.',
          value: 'linkedin.com/in/thiago-pereira79',
          cta: 'CONECTAR',
          link: 'https://www.linkedin.com/in/thiago-pereira79/',
          ariaLabel: 'Acceder al LinkedIn de Thiago Pereira'
        },
        {
          id: 'github',
          icon: Github,
          color: '#ffffff',
          title: 'GITHUB',
          text: 'Explore proyectos, estudios, código y experimentos abiertos.',
          value: 'github.com/thiago-pereira79',
          cta: 'VER REPOSITORIOS',
          link: 'https://github.com/thiago-pereira79',
          ariaLabel: 'Acceder al GitHub de Thiago Pereira'
        },
        {
          id: 'whatsapp',
          icon: MessageSquare,
          color: '#30F858',
          title: 'WHATSAPP',
          text: 'Un canal directo para coordinaciones y conversaciones profesionales.',
          value: '+55 16 99783-9791',
          cta: 'INICIAR CHAT',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20queria%20iniciar%20uma%20conversa.%20Meu%20nome%20%C3%A9%20%5Bseu%20nome%20aqui%5D%20e%20gostaria%20de%20falar%20sobre%20%5Bassunto%5D.%20Podemos%20conversar%3F',
          ariaLabel: 'Iniciar chat en WhatsApp con Thiago Pereira mediante enlace directo'
        }
      ],
      featuredCard: {
        id: 'tpstudio',
        icon: Globe,
        color: '#00E5FF',
        title: 'TP STUDIO',
        text: 'Conozca mis proyectos reales, servicios digitales y experiencias creadas para marcas, profesionales y negocios.',
        cta: 'VER SITIO PROFESIONAL',
        link: 'http://tpstudio.com.br/',
        ariaLabel: 'Acceder al sitio profesional TP Studio'
      },
      typesTitle: 'TIPOS DE CONVERSACIÓN',
      types: [
        {
          icon: Briefcase,
          title: 'OPORTUNIDADES PROFESIONALES',
          text: 'Vacantes, entrevistas, procesos de selección y charlas exploratorias en tecnología, producto, diseño e IA.',
          cta: 'HABLAR SOBRE OPORTUNIDAD',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade%20profissional.%20Podemos%20falar%3F',
          ariaLabel: 'Hablar con Thiago sobre una oportunidad profesional por WhatsApp'
        },
        {
          icon: Puzzle,
          title: 'COLABORACIONES',
          text: 'Proyectos conjuntos, alianzas, ideas, experimentos e iniciativas que conecten tecnología, diseño y producto.',
          cta: 'HABLAR SOBRE COLABORACIÓN',
          link: 'https://wa.me/5516997839791?text=Ol%C3%A1%2C%20Thiago%21%20Vi%20seu%20TP%20LAB%20e%20gostaria%20de%20conversar%20sobre%20uma%20colabora%C3%A7%C3%A3o%20ou%20projeto%20em%20parceria.%20Podemos%20falar%3F',
          ariaLabel: 'Hablar con Thiago sobre una colaboración por WhatsApp'
        },
        {
          icon: Beaker,
          title: 'HABLEMOS',
          text: 'Para intercambiar ideas sobre tecnología, producto, diseño, IA o cualquier tema que no encaje en las tarjetas anteriores.',
          decorText: 'CREAR • PROBAR • CONECTAR'
        }
      ],
      ctaTitle: 'Hablemos de tecnología, producto y oportunidades.',
      ctaSub: 'Envía tu mensaje y construyamos conexiones profesionales relevantes.',
      ctaBtn: 'ENTRAR EN CONTACTO'
    }
  }[language === 'en' || language === 'es' ? language : 'pt'];

  return (
    <div className="space-y-12 pb-8 text-left" id="contato-custom-root">
      
      {/* 4 CARDS OF CONTACT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {content.cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div 
              key={c.id} 
              className="bg-[#07080a] border border-zinc-900 p-6 rounded-2xl flex flex-col justify-between group transition-all duration-[220ms] ease-out min-h-[220px] hover:border-[var(--hover-color)] focus-within:border-[var(--hover-color)] hover:shadow-[var(--hover-shadow)] focus-within:shadow-[var(--hover-shadow)] outline-none"
              style={{ 
                '--hover-color': `${c.color}45`, 
                '--hover-shadow': `0 0 15px ${c.color}10`, 
              } as React.CSSProperties}
              id={`contact-card-${c.id}`}
            >
              <div>
                <div 
                  className="w-10 h-10 rounded-xl border flex items-center justify-center mb-5 transition-all duration-[220ms] ease-out group-hover:border-[var(--hover-icon-border)] group-focus-within:border-[var(--hover-icon-border)]"
                  style={{ 
                    borderColor: `${c.color}25`, 
                    backgroundColor: `${c.color}05`,
                    '--hover-icon-border': `${c.color}50`
                  } as React.CSSProperties}
                >
                  <Icon className="w-5 h-5 transition-all duration-[220ms] opacity-80 group-hover:opacity-100 group-focus-within:opacity-100" style={{ color: c.color }} />
                </div>
                <h4 className="font-sans font-black text-xs tracking-wider text-white uppercase">{c.title}</h4>
                <p className="text-zinc-400 font-sans text-[14px] sm:text-[15px] leading-[1.6] mt-2 font-medium text-left [text-wrap:pretty] break-words">{c.text}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-dashed border-zinc-900/40">
                <a 
                  href={c.link}
                  target={c.id === 'email' ? undefined : '_blank'}
                  rel={c.id === 'email' ? undefined : 'noopener noreferrer'}
                  aria-label={c.ariaLabel}
                  className="w-full h-11 flex items-center justify-between px-4 rounded-xl bg-zinc-950/80 border transition-all duration-[220ms] text-white font-mono text-[10px] font-black tracking-widest uppercase shadow-[0_2px_8px_rgba(0,0,0,0.5)] cursor-pointer group-hover:bg-zinc-900/60 group-focus-within:bg-zinc-900/60 group-hover:border-[var(--btn-hover-border)] group-focus-within:border-[var(--btn-hover-border)] outline-none"
                  style={{ 
                    borderColor: `${c.color}15`,
                    '--btn-hover-border': `${c.color}45`
                  } as React.CSSProperties}
                  id={`contact-action-btn-${c.id}`}
                >
                  <span style={{ color: c.color }} className="transition-all duration-[220ms] opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:underline">{c.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-all duration-[220ms] opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: c.color }} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* FEATURED PORTFOLIO CARD - TP STUDIO */}
      {content.featuredCard && (
        <div 
          className="bg-[#07080a] border border-zinc-900 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 group transition-all duration-300 hover:border-[#00E5FF]/20 relative overflow-hidden"
          id={`contact-card-${content.featuredCard.id}`}
        >
          {/* subtle ambient background pulse */}
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#00E5FF]/5 rounded-full blur-[60px] pointer-events-none select-none" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left z-10 w-full md:w-auto">
            <div 
              className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,229,255,0.05)]"
              style={{ borderColor: `${content.featuredCard.color}25`, backgroundColor: `${content.featuredCard.color}05` }}
            >
              {React.createElement(content.featuredCard.icon, { 
                className: "w-6 h-6", 
                style: { color: content.featuredCard.color } 
              })}
            </div>
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse shadow-[0_0_6px_#00E5FF]" />
                <h4 className="font-sans font-black text-xs tracking-widest text-[#00E5FF] uppercase">
                  {content.featuredCard.title}
                </h4>
              </div>
              <p className="text-zinc-400 font-sans text-[14px] sm:text-[15px] leading-[1.6] font-semibold text-left [text-wrap:pretty] break-words">
                {content.featuredCard.text}
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0 z-10">
            <a 
              href={content.featuredCard.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.featuredCard.ariaLabel}
              className="w-full md:w-56 h-12 flex items-center justify-between px-5 rounded-xl bg-zinc-950/80 border border-[#00E5FF]/15 hover:bg-zinc-900 hover:border-[#00E5FF]/30 hover:shadow-[0_0_15px_rgba(0,229,255,0.08)] transition-all duration-300 text-white font-mono text-[10px] font-black tracking-widest uppercase cursor-pointer group/btn"
              id={`contact-action-btn-${content.featuredCard.id}`}
            >
              <span style={{ color: content.featuredCard.color }} className="group-hover/btn:underline">
                {content.featuredCard.cta}
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" style={{ color: content.featuredCard.color }} />
            </a>
          </div>
        </div>
      )}

      {/* TIPOS DE CONVERSA */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          {/* Custom micro circle dotted */}
          <div className="w-5 h-5 rounded-full border border-dashed border-[#30F858]/40 flex items-center justify-center animate-spin-slow shadow-[0_0_2px_#30F858]">
            <div className="w-1.5 h-1.5 bg-[#30F858] rounded-full shadow-[0_0_3px_#30F858]" />
          </div>
          <h3 className="font-mono text-[11px] font-black text-[#30F858] uppercase tracking-[0.2em]">
            {content.typesTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {content.types.map((type, idx) => {
            const Icon = type.icon;
            return (
              <div 
                key={idx} 
                className="group bg-[#07080a] border border-zinc-900 p-6 rounded-2xl flex flex-col h-full min-h-[200px] transition-all duration-[220ms] ease-out hover:border-[#30F858]/35 focus-within:border-[#30F858]/35 focus:border-[#30F858]/35 hover:shadow-[0_0_12px_rgba(48,248,88,0.08)] focus-within:shadow-[0_0_12px_rgba(48,248,88,0.08)] focus:shadow-[0_0_12px_rgba(48,248,88,0.08)] outline-none"
                tabIndex={type.link ? undefined : 0}
              >
                <div className="flex-1">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900/50 border border-zinc-800/80 flex items-center justify-center text-[#30F858] mb-4 transition-all duration-[220ms] group-hover:border-[#30F858]/30 group-focus-within:border-[#30F858]/30 group-focus:border-[#30F858]/30">
                    <Icon className="w-4 h-4 text-[#30F858] transition-all duration-[220ms] opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 group-focus:opacity-100" />
                  </div>
                  <h4 className="font-sans font-black text-xs tracking-wider text-white uppercase">{type.title}</h4>
                  <p className="text-zinc-400 font-sans text-[14px] sm:text-[15px] leading-[1.6] mt-2 font-medium text-left [text-wrap:pretty] break-words">{type.text}</p>
                </div>
                {type.cta && type.link ? (
                  <div
                    className="mt-auto h-7 flex items-end border-0 bg-transparent shadow-none before:hidden after:hidden"
                    style={{ border: 'none', backgroundImage: 'none', boxShadow: 'none' }}
                  >
                    <a 
                      href={type.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={type.ariaLabel}
                      className="inline-flex items-center gap-1 transition-all duration-[220ms] cursor-pointer outline-none text-[#30F858] opacity-80 group-hover:opacity-100 group-focus-within:opacity-100 group-focus:opacity-100"
                    >
                      <span className="font-mono text-[9px] font-black tracking-widest uppercase leading-none group-hover:underline">{type.cta}</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0 transition-transform duration-[220ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                ) : type.decorText ? (
                  <div
                    className="mt-auto h-7 flex items-end border-0 bg-transparent shadow-none before:hidden after:hidden"
                    style={{ border: 'none', backgroundImage: 'none', boxShadow: 'none' }}
                  >
                    <span className="font-mono text-[9px] font-black tracking-widest text-[#30F858] uppercase select-none leading-none opacity-80 transition-all duration-[220ms] group-hover:opacity-100 group-focus-within:opacity-100 group-focus:opacity-100">
                      {type.decorText}
                    </span>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
