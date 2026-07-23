import { 
  Rocket,
  Zap,
  Puzzle,
  Mic,
  BookOpen,
  Gamepad2,
  Maximize2,
  Music,
  Tv,
  Search,
  Grid,
  FileCode
} from 'lucide-react';

export const PROJECTS_DATA = [
  {
    id: 'space-impacta',
    title: 'Space Impacta',
    tags: ['React', 'TypeScript', 'Canvas', 'Game Dev'],
    color: '#00D0F8',
    icon: Rocket,
    status: {
      pt: 'Jogo publicado',
      es: 'Juego publicado',
      en: 'Published game'
    },
    type: {
      pt: 'Jogo de ação espacial',
      es: 'Juego de acción espacial',
      en: 'Space action game'
    },
    platform: 'Web Browser',
    shortDesc: {
      pt: 'Jogo de ação espacial em pixel art com oito fases, chefes exclusivos, armas especiais e experiência responsiva para teclado e toque.',
      es: 'Juego de acción espacial en pixel art con ocho fases, jefes exclusivos, armas especiales y controles adaptados para teclado y pantallas táctiles.',
      en: 'Pixel-art space action game featuring eight stages, exclusive bosses, special weapons, and responsive keyboard and touch controls.'
    },
    about: {
      pt: 'Space Impacta é um jogo autoral de ação espacial em pixel art desenvolvido com React, TypeScript, Vite e HTML5 Canvas, inspirado na experiência dos clássicos jogos de nave para celulares.\n\nO jogador controla uma nave, atravessa diferentes regiões do universo, enfrenta inimigos, desvia de obstáculos, coleta melhorias, utiliza armas especiais e derrota um chefe ao final de cada fase.\n\nA campanha possui oito fases lineares, com ambientações, obstáculos, inimigos e chefes próprios. A experiência foi planejada para funcionar com teclado em computadores e com movimentação por toque em celulares, tablets e iPads.',
      es: 'Space Impacta es un juego original de acción espacial en pixel art desarrollado con React, TypeScript, Vite y HTML5 Canvas, inspirado en los clásicos juegos de naves para teléfonos móviles.\n\nEl jugador controla una nave, recorre distintas regiones del universo, enfrenta enemigos, esquiva obstáculos, recoge mejoras, utiliza armas especiales y derrota a un jefe al final de cada fase.\n\nLa campaña incluye ocho fases lineales, cada una con ambientación, obstáculos, enemigos y jefes propios. La experiencia está diseñada para jugarse con teclado en computadoras y mediante controles táctiles en teléfonos, tabletas e iPads.',
      en: 'Space Impacta is an original pixel-art space action game built with React, TypeScript, Vite, and HTML5 Canvas, inspired by classic spaceship games created for mobile phones.\n\nPlayers control a spaceship across different regions of the universe, fight enemies, avoid obstacles, collect upgrades, use special weapons, and defeat a boss at the end of each stage.\n\nThe campaign features eight linear stages, each with its own setting, obstacles, enemies, and boss. The experience was designed for keyboard controls on computers and touch movement on smartphones, tablets, and iPads.'
    },
    worked: {
      pt: 'Lógica de jogos, máquina de estados, React Hooks, TypeScript, HTML5 Canvas, movimentação com deltaTime, colisões, inimigos, chefes, obstáculos, power-ups, armas especiais, sistema de HP e vidas, controles por teclado e toque, responsividade, acessibilidade, performance e publicação automatizada com GitHub Actions.',
      es: 'Lógica de juegos, máquina de estados, React Hooks, TypeScript, HTML5 Canvas, movimiento con deltaTime, colisiones, enemigos, jefes, obstáculos, power-ups, armas especiales, sistema de HP y vidas, controles por teclado y táctiles, diseño adaptable, accesibilidad, rendimiento y publicación automatizada con GitHub Actions.',
      en: 'Game logic, state machines, React Hooks, TypeScript, HTML5 Canvas, delta-time movement, collisions, enemies, bosses, obstacles, power-ups, special weapons, HP and life systems, keyboard and touch controls, responsiveness, accessibility, performance, and automated deployment with GitHub Actions.'
    },
    learnings: {
      pt: 'Construir o Space Impacta exigiu equilibrar movimentação, combate, progressão e clareza visual sem comprometer a resposta imediata dos controles.\n\nO principal aprendizado foi estruturar um motor de jogo tipado e responsivo, capaz de adaptar Canvas, HUD, controles e áreas seguras para diferentes telas, orientações e formas de interação.\n\nO projeto também reforçou a importância de tratar acessibilidade, feedback de impacto, limpeza de recursos e prevenção de múltiplos game loops como partes fundamentais da experiência.',
      es: 'Construir Space Impacta exigió equilibrar el movimiento, el combate, la progresión y la claridad visual sin comprometer la respuesta inmediata de los controles.\n\nEl principal aprendizaje fue estructurar un motor de juego tipado y adaptable, capaz de ajustar el Canvas, el HUD, los controles y las áreas seguras a distintas pantallas, orientaciones y formas de interacción.\n\nEl proyecto también reforzó la importancia de considerar la accesibilidad, el feedback de impacto, la limpieza de recursos y la prevención de múltiples bucles de juego como partes fundamentales de la experiencia.',
      en: 'Building Space Impacta required balancing movement, combat, progression, and visual clarity without compromising immediate control response.\n\nThe main learning was structuring a typed and responsive game engine capable of adapting the Canvas, HUD, controls, and safe areas to different screens, orientations, and interaction methods.\n\nThe project also reinforced the importance of accessibility, impact feedback, resource cleanup, and preventing multiple game loops as fundamental parts of the experience.'
    },
    playUrl: 'https://thiago-pereira79.github.io/space-impacta/',
    codeUrl: 'https://github.com/thiago-pereira79/space-impacta'
  },
  {
    id: 'detona-ralph',
    title: 'Detona Ralph',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#F97316',
    icon: Zap,
    status: {
      pt: 'Jogo publicado',
      es: 'Juego publicado',
      en: 'Game published'
    },
    shortDesc: {
      pt: 'Projeto arcade baseado em eventos, pontuação, contagem regressiva e interações rápidas com JavaScript.',
      es: 'Juego arcade de reflejos con eventos, puntuación, cuenta regresiva e interacciones rápidas en JavaScript.',
      en: 'Fast-paced arcade project built around events, scoring, a countdown timer, and responsive JavaScript interactions.'
    },
    about: {
      pt: 'Detona Ralph é um projeto arcade criado para praticar eventos, tempo, pontuação e resposta visual com HTML, CSS e JavaScript. O objetivo é acertar o personagem nas janelas certas antes que o tempo acabe.\n\nApesar de simples, o projeto trabalha conceitos importantes para jogos e interfaces interativas: ritmo, atenção, feedback imediato e atualização constante de estado.',
      es: 'Detona Ralph es un proyecto arcade creado para practicar eventos, tiempo, puntuación y respuesta visual con HTML, CSS y JavaScript. El objetivo es acertar al personaje en las ventanas correctas antes de que termine el tiempo.\n\nAunque es sencillo, el proyecto trabaja conceptos importantes para juegos e interfaces interactivas: ritmo, atención, feedback inmediato y actualización constante del estado.',
      en: 'Detona Ralph is an arcade project created to practice event handling, timing, scoring, and visual feedback with HTML, CSS, and JavaScript. The goal is to hit the character in the correct windows before time runs out.\n\nAlthough simple, the project explores important concepts for games and interactive interfaces: pacing, attention, immediate feedback, and continuous state updates.'
    },
    worked: {
      pt: 'Eventos de clique, contagem regressiva, placar, efeitos sonoros, manipulação do DOM e organização de lógica simples.',
      es: 'Eventos de clic, cuenta regresiva, marcador, efectos de sonido, manipulación del DOM y organización de una lógica de juego sencilla.',
      en: 'Click events, countdown logic, scoring, sound effects, DOM manipulation, and clear organization of the game logic.'
    },
    learnings: {
      pt: 'Esse projeto mostrou que interação rápida precisa de interface direta. Quanto menos distração, melhor. O jogo funciona porque o objetivo é claro e a resposta vem na hora.',
      es: 'El proyecto demostró que las interacciones rápidas necesitan una interfaz directa. Cuantas menos distracciones haya, mejor funciona la experiencia. El juego resulta atractivo porque el objetivo es claro y la respuesta es inmediata.',
      en: 'This project showed that fast interactions need a direct interface. Fewer distractions lead to a better experience. The game works because its objective is clear and every action receives immediate feedback.'
    },
    playUrl: 'https://thiago-pereira79.github.io/detona-ralph',
    codeUrl: 'https://github.com/thiago-pereira79/detona-ralph'
  },
  {
    id: 'gridfall',
    title: 'Gridfall',
    tags: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
    color: '#8B5CF6',
    icon: Puzzle,
    status: {
      pt: 'Jogo publicado',
      es: 'Juego publicado',
      en: 'Published game'
    },
    type: {
      pt: 'Puzzle de blocos',
      es: 'Rompecabezas de bloques',
      en: 'Block puzzle'
    },
    shortDesc: {
      pt: 'Puzzle de blocos com seis fases temáticas, progressão de velocidade, modo infinito e controles responsivos para teclado e toque.',
      es: 'Rompecabezas de bloques con seis fases temáticas, progresión de velocidad, modo infinito y controles adaptados para teclado y pantallas táctiles.',
      en: 'Block puzzle with six themed stages, progressive speed, infinite mode, and responsive keyboard and touch controls.'
    },
    about: {
      pt: 'Gridfall é um puzzle de blocos autoral desenvolvido com HTML, CSS, JavaScript e HTML5 Canvas. O jogador move, gira e encaixa peças geométricas para completar linhas horizontais, liberar espaço no tabuleiro e avançar por uma campanha com dificuldade crescente.\n\nA experiência combina seis fases temáticas, mudanças visuais durante a jornada, próxima peça, pontuação, níveis, recorde da sessão e um modo Infinito que começa no nível 16 e continua enquanto o jogador conseguir sobreviver.\n\nO projeto foi pensado para funcionar com teclado em computadores e com controles por toque em celulares, tablets e iPads, priorizando a orientação vertical nos dispositivos móveis.',
      es: 'Gridfall es un rompecabezas de bloques original desarrollado con HTML, CSS, JavaScript y HTML5 Canvas. El jugador mueve, gira y encaja piezas geométricas para completar líneas horizontales, liberar espacio en el tablero y avanzar en una campaña de dificultad creciente.\n\nLa experiencia combina seis fases temáticas, cambios visuales a lo largo del recorrido, vista previa de la siguiente pieza, puntuación, niveles, récord de sesión y un modo Infinito que comienza en el nivel 16 y continúa mientras el jugador logre sobrevivir.\n\nEl proyecto está diseñado para funcionar con teclado en computadoras y con controles táctiles en teléfonos, tabletas e iPads, priorizando la orientación vertical en dispositivos móviles.',
      en: 'Gridfall is an original block puzzle developed with HTML, CSS, JavaScript, and HTML5 Canvas. Players move, rotate, and place geometric pieces to complete horizontal lines, clear space on the board, and progress through an increasingly challenging campaign.\n\nThe experience combines six themed stages, visual changes throughout the journey, a next-piece preview, scoring, levels, session records, and an Infinite Mode that starts at level 16 and continues for as long as the player survives.\n\nThe project was designed for keyboard controls on computers and touch controls on phones, tablets, and iPads, prioritizing portrait orientation on mobile devices.'
    },
    worked: {
      pt: 'Lógica de jogo, matrizes bidimensionais, geração e rotação de peças, colisões, limpeza de linhas, progressão por níveis e fases, HTML5 Canvas, estados da interface, controles por teclado e toque, responsividade, acessibilidade e performance com requestAnimationFrame.',
      es: 'Lógica del juego, matrices bidimensionales, generación y rotación de piezas, colisiones, limpieza de líneas, progresión por niveles y fases, HTML5 Canvas, estados de la interfaz, controles por teclado y táctiles, responsividad, accesibilidad y rendimiento con requestAnimationFrame.',
      en: 'Game logic, two-dimensional matrices, piece generation and rotation, collision detection, line clearing, level and stage progression, HTML5 Canvas, interface states, keyboard and touch controls, responsiveness, accessibility, and performance with requestAnimationFrame.'
    },
    learnings: {
      pt: 'Construir o Gridfall exigiu equilibrar regras de jogo, velocidade e clareza visual. O principal aprendizado foi organizar um motor modular sem perder a resposta imediata da interface, adaptando a experiência para diferentes telas, orientações e formas de controle.\n\nO projeto também reforçou a importância de tratar progressão, acessibilidade e performance como partes da experiência, e não apenas como detalhes técnicos adicionados no final.',
      es: 'Construir Gridfall requirió equilibrar las reglas del juego, la velocidad y la claridad visual. El aprendizaje principal fue organizar un motor modular sin perder la respuesta inmediata de la interfaz, adaptando la experiencia a diferentes pantallas, orientaciones y métodos de control.\n\nEl proyecto también reforzó la importancia de tratar la progresión, la accesibilidad y el rendimiento como parte de la experiencia, en lugar de detalles técnicos añadidos al final.',
      en: 'Building Gridfall required balancing game rules, speed, and visual clarity. The main learning was organizing a modular game engine without losing immediate interface feedback, while adapting the experience to different screens, orientations, and control methods.\n\nThe project also reinforced the importance of treating progression, accessibility, and performance as core parts of the experience rather than technical details added at the end.'
    },
    playUrl: 'https://thiago-pereira79.github.io/jogo-gridfall/',
    codeUrl: 'https://github.com/thiago-pereira79/jogo-gridfall'
  },
  {
    id: 'readme-generator',
    title: {
      pt: 'README Generator',
      es: 'README Generator',
      en: 'README Generator'
    },
    tags: ['React', 'TypeScript', 'Vite', 'i18n'],
    color: '#00D0F8',
    icon: FileCode,
    status: {
      pt: 'Aplicação publicada',
      es: 'Aplicación publicada',
      en: 'Published application'
    },
    type: {
      pt: 'Ferramenta de documentação',
      es: 'Herramienta de documentación',
      en: 'Documentation tool'
    },
    platform: 'Web App',
    shortDesc: {
      pt: 'Aplicação web para criar documentações profissionais em Markdown com templates, preview, exportação, histórico local e suporte multilíngue.',
      es: 'Aplicación web para crear documentación profesional en Markdown con plantillas, vista previa, exportación, historial local y soporte multilingüe.',
      en: 'Web application for creating professional Markdown documentation with templates, previews, export options, local history, and multilingual support.'
    },
    about: {
      pt: 'README Generator é uma aplicação web criada para facilitar a construção de arquivos README.md completos, organizados e prontos para publicação no GitHub.\n\nA ferramenta conduz o usuário por etapas, permitindo preencher apenas as informações necessárias, visualizar o resultado antes da exportação e gerar uma documentação mais clara, profissional e consistente.\n\nO projeto conta com templates demonstrativos, projetos salvos, histórico de ações, personalização do documento, suporte a português, inglês e espanhol, além de exportação em Markdown e PDF.\n\nA aplicação funciona sem cadastro, login ou banco de dados remoto. Projetos, rascunhos, preferências e histórico permanecem armazenados localmente no navegador do usuário.',
      es: 'README Generator es una aplicación web creada para facilitar la construcción de archivos README.md completos, organizados y listos para publicar en GitHub.\n\nLa herramienta guía al usuario por etapas, permitiendo completar solo la información necesaria, visualizar el resultado antes de exportarlo y generar una documentación más clara, profesional y consistente.\n\nEl proyecto incluye plantillas demostrativas, proyectos guardados, historial de acciones, personalización del documento, soporte para portugués, inglés y español, además de exportación en Markdown y PDF.\n\nLa aplicación funciona sin registro, inicio de sesión ni base de datos remota. Los proyectos, borradores, preferencias e historial permanecen almacenados localmente en el navegador del usuario.',
      en: 'README Generator is a web application designed to help users create complete, organized, and publication-ready README.md files for GitHub.\n\nThe tool guides users through a step-by-step flow, allowing them to fill in only the necessary information, preview the result before exporting, and generate clearer, more professional, and more consistent documentation.\n\nThe project includes demo templates, saved projects, action history, document customization, support for Portuguese, English, and Spanish, plus Markdown and PDF export.\n\nThe application works without sign-up, login, or a remote database. Projects, drafts, preferences, and history remain stored locally in the user’s browser.'
    },
    worked: {
      pt: 'Fluxo de geração por etapas, gerenciamento de projetos salvos, templates demonstrativos, preview visual, preview em Markdown, exportação em .md e PDF, histórico local, backup em JSON, internacionalização, temas claro e escuro, validação de URLs, armazenamento com IndexedDB, comunicação entre abas e experiência responsiva para desktop, tablet e celular.',
      es: 'Flujo de generación por etapas, gestión de proyectos guardados, plantillas de demostración, vista previa visual, vista previa en Markdown, exportación a .md y PDF, historial local, copia de seguridad en JSON, internacionalización, temas claro y oscuro, validación de URL, almacenamiento con IndexedDB, comunicación entre pestañas y experiencia responsiva para escritorio, tableta y teléfono móvil.',
      en: 'Step-by-step generation flow, saved project management, demo templates, visual preview, Markdown preview, .md and PDF export, local history, JSON backup, internationalization, light and dark themes, URL validation, IndexedDB storage, cross-tab communication, and responsive experience for desktop, tablet, and mobile.'
    },
    learnings: {
      pt: 'Construir o README Generator exigiu pensar a documentação como uma experiência de produto, não apenas como um campo de texto.\n\nO principal aprendizado foi organizar muitas informações técnicas em um fluxo simples, progressivo e editável, reduzindo esforço cognitivo e mantendo o usuário no controle do documento.\n\nO projeto também reforçou a importância de persistência local, acessibilidade, segurança na validação de dados, suporte multilíngue e pré-visualizações independentes para evitar perda ou sobrescrita de conteúdo.',
      es: 'Construir README Generator requirió pensar en la documentación como una experiencia de producto, no solo como un campo de texto.\n\nEl aprendizaje principal fue organizar mucha información técnica en un flujo simple, progresivo y editable, reduciendo el esfuerzo cognitivo y manteniendo al usuario en control del documento.\n\nEl proyecto también reforzó la importancia de la persistencia local, la accesibilidad, la seguridad en la validación de datos, el soporte multilingüe y las vistas previas independientes para evitar la pérdida o sobreescritura de contenido.',
      en: 'Building README Generator required treating documentation as a product experience, not just as a text field.\n\nThe main learning was organizing many technical details into a simple, progressive, and editable flow, reducing cognitive effort while keeping the user in control of the document.\n\nThe project also reinforced the importance of local persistence, accessibility, data validation security, multilingual support, and independent previews to prevent content loss or overwriting.'
    },
    playUrl: 'https://readme-generator-phi-five.vercel.app/',
    codeUrl: 'https://github.com/thiago-pereira79/readme-generator'
  },
  {
    id: 'voices-that-shine',
    title: {
      pt: 'Vozes que Brilham',
      es: 'Voces que Brillan',
      en: 'Voices That Shine'
    },
    tags: ['IA', 'Conteúdo', 'Podcast'],
    localizedTags: {
      pt: ['IA', 'Conteúdo', 'Podcast'],
      en: ['AI', 'Content', 'Podcast'],
      es: ['IA', 'Contenido', 'Pódcast']
    },
    color: '#EC4899',
    icon: Mic,
    status: {
      pt: 'Podcast publicado',
      es: 'Pódcast publicado',
      en: 'Podcast published'
    },
    shortDesc: {
      pt: 'Podcast criado com apoio de IA para roteiro, voz sintética, identidade visual, edição e publicação digital.',
      es: 'Pódcast creado con apoyo de IA para el guion, la voz sintética, la identidad visual, la edición y la publicación digital.',
      en: 'Podcast created with AI support for scripting, synthetic voice, visual identity, editing, and digital publishing.'
    },
    about: {
      pt: 'Vozes que Brilham é um projeto de podcast focado na aplicação prática de inteligência artificial na produção de conteúdo multimídia. A proposta foi explorar como ferramentas de IA podem apoiar diferentes etapas de criação: roteiro, voz sintética, identidade visual, edição e publicação.\n\nO projeto resultou em uma série de episódios inspirada em grandes vozes femininas da música brasileira, usando IA como apoio criativo e técnico durante o processo.',
      es: 'Voces que Brillan es un proyecto de pódcast centrado en la aplicación práctica de la inteligencia artificial a la producción de contenido multimedia. La propuesta fue explorar cómo las herramientas de IA pueden apoyar distintas etapas de creación: guion, voz sintética, identidad visual, edición y publicación.\n\nEl proyecto dio como resultado una serie de episodios inspirados en grandes voces femeninas de la música brasileña, con la IA como apoyo creativo y técnico durante el proceso.',
      en: 'Voices That Shine is a podcast project focused on the practical use of artificial intelligence in multimedia production. The goal was to explore how AI tools can support different stages of creation: scripting, synthetic voice, visual identity, editing, and publishing.\n\nThe project resulted in a series of episodes inspired by prominent female voices in Brazilian music, using AI as creative and technical support throughout the process.'
    },
    worked: {
      pt: 'Criação de roteiro, estrutura narrativa, geração de voz sintética, identidade visual, edição de áudio, organização dos episódios e publicação em plataforma de streaming.',
      es: 'Creación de guiones, estructura narrativa, generación de voz sintética, identidad visual, edición de audio, organización de episodios y publicación en una plataforma de streaming.',
      en: 'Scriptwriting, narrative structure, synthetic voice generation, visual identity, audio editing, episode organization, and publishing on a streaming platform.'
    },
    learnings: {
      pt: 'Esse projeto ajudou a entender a IA como ferramenta de ampliação criativa. O ponto principal não foi automatizar tudo, mas testar como diferentes ferramentas podem acelerar a produção sem apagar a intenção humana por trás do conteúdo.',
      es: 'Este proyecto ayudó a comprender la IA como una herramienta de ampliación creativa. El objetivo no era automatizarlo todo, sino probar cómo distintas herramientas podían acelerar la producción sin borrar la intención humana detrás del contenido.',
      en: 'This project helped me understand AI as a tool for expanding creative possibilities. The goal was not to automate everything, but to test how different tools could accelerate production without removing the human intent behind the content.'
    },
    playUrl: 'https://open.spotify.com/show/7u1kcqifpGXvvEjYaxRzfs',
    codeUrl: ''
  },
  {
    id: 'rituais-de-chumbo',
    title: {
      pt: 'Rituais de Chumbo',
      es: 'Rituais de Chumbo',
      en: 'Rituais de Chumbo'
    },
    tags: ['IA', 'Storytelling', 'E-book'],
    localizedTags: {
      pt: ['IA', 'Storytelling', 'E-book'],
      en: ['AI', 'Storytelling', 'E-book'],
      es: ['IA', 'Storytelling', 'E-book']
    },
    color: '#818CF8',
    icon: BookOpen,
    status: {
      pt: 'E-book publicado',
      es: 'E-book publicado',
      en: 'E-book published'
    },
    platform: 'PDF • Web Browser',
    shortDesc: {
      pt: 'E-book criado com apoio de IA para storytelling, identidade visual, estrutura editorial e desenvolvimento completo da publicação.',
      es: 'E-book creado con apoyo de IA para storytelling, identidad visual, estructura editorial y desarrollo integral de la publicación.',
      en: 'E-book created with AI support for storytelling, visual identity, editorial structure, and complete publishing.'
    },
    about: {
      pt: 'Rituais de Chumbo é um e-book desenvolvido com foco em storytelling e no uso integrado da inteligência artificial durante o processo criativo e editorial. A publicação explora como diferentes ferramentas de IA podem apoiar a construção narrativa, a criação visual e a estruturação de conteúdo.\n\nO projeto foi desenvolvido de ponta a ponta, passando pela definição do conceito, pesquisa, escrita assistida, identidade visual, organização editorial, diagramação e revisão final. A inteligência artificial foi utilizada como apoio criativo e técnico, enquanto a curadoria humana manteve a coerência, o ritmo e a unidade da publicação.',
      es: 'Rituais de Chumbo es un e-book desarrollado con foco en el storytelling y en el uso integrado de la inteligencia artificial durante el proceso creativo y editorial. La publicación explora cómo distintas herramientas de IA pueden apoyar la construcción narrativa, la creación visual y la organización del contenido.\n\nEl proyecto se desarrolló de principio a fin: definición del concepto, investigación, escritura asistida, identidad visual, organización editorial, maquetación y revisión final. La inteligencia artificial se utilizó como apoyo creativo y técnico, mientras que la curaduría humana mantuvo la coherencia, el ritmo y la unidad de la publicación.',
      en: 'Rituais de Chumbo is an e-book developed with a focus on storytelling and the integrated use of artificial intelligence during the creative and editorial process. The publication explores how different AI tools can support narrative construction, visual creation, and content structuring.\n\nThe project was developed from end to end, passing through concept definition, research, assisted writing, visual identity, editorial organization, layout, and final review. Artificial intelligence was used as creative and technical support, while human curation maintained the coherence, rhythm, and unity of the publication.'
    },
    worked: {
      pt: 'Escrita assistida por inteligência artificial, construção narrativa, geração da identidade visual, criação de imagens, estrutura editorial, diagramação, revisão e desenvolvimento completo da publicação.',
      es: 'Escritura asistida por inteligencia artificial, construcción narrativa, creación de la identidad visual, generación de imágenes, estructura editorial, maquetación, revisión y desarrollo integral de la publicación.',
      en: 'AI-assisted writing, narrative construction, visual identity generation, image creation, editorial structure, layout, review, and complete publishing.'
    },
    learnings: {
      pt: 'O projeto ajudou a compreender a inteligência artificial como ferramenta de apoio à criação editorial. O principal aprendizado foi perceber que gerar conteúdo não é suficiente: é necessário selecionar, revisar, organizar e conectar cada elemento para construir uma narrativa coerente e uma experiência visual consistente.',
      es: 'El proyecto ayudó a comprender la inteligencia artificial como una herramienta de apoyo a la creación editorial. El principal aprendizaje fue entender que generar contenido no es suficiente: es necesario seleccionar, revisar, organizar y conectar cada elemento para construir una narrativa coherente y una experiencia visual consistente.',
      en: 'The project helped to understand artificial intelligence as a supportive tool for editorial creation. The main learning was realizing that generating content is not enough: it is necessary to select, review, organize, and connect each element to build a coherent narrative and a consistent visual experience.'
    },
    playUrl: '',
    codeUrl: ''
  },
  {
    id: 'snake-lab',
    title: 'Snake Lab',
    tags: ['React', 'TypeScript', 'Game Dev'],
    color: '#30F858',
    icon: Gamepad2,
    status: {
      pt: 'Jogo publicado',
      es: 'Juego publicado',
      en: 'Game published'
    },
    shortDesc: {
      pt: 'Uma releitura moderna do clássico jogo da cobrinha, com progressão por fases, efeitos sonoros e foco em experiência mobile.',
      es: 'Una reinterpretación moderna del clásico juego de la serpiente, con progresión por fases, efectos de sonido y enfoque en la experiencia móvil.',
      en: 'A modern take on the classic snake game, with level progression, sound effects, and a mobile-first experience.'
    },
    about: {
      pt: 'Snake Lab nasceu como uma recriação do jogo da cobrinha, mas evoluiu para um experimento mais completo de lógica, interface e experiência de jogo. A proposta foi manter a simplicidade do clássico, mas adicionar camadas que tornam a experiência mais dinâmica: fases, obstáculos, sons, pontuação, seleção de níveis e adaptação para diferentes telas.\n\nO projeto explora conceitos importantes de desenvolvimento front-end, como controle de estado, movimentação em grade, detecção de colisão, ciclos de jogo e feedback visual em tempo real.',
      es: 'Snake Lab nació como una reinterpretación del clásico juego de la serpiente y evolucionó hasta convertirse en un experimento más completo de lógica, interfaz y experiencia de juego. El objetivo fue conservar la simplicidad del original e incorporar fases, obstáculos, efectos de sonido, puntuación y adaptación a diferentes pantallas.\n\nEl proyecto aborda la gestión de estado en React, el movimiento en cuadrícula, la detección de colisiones, los ciclos de juego y el feedback visual en tiempo real.',
      en: 'Snake Lab began as a recreation of the classic snake game and evolved into a more complete experiment in logic, interface design, and gameplay. The goal was to preserve the simplicity of the original while adding levels, obstacles, sound, scoring, level selection, and support for different screen sizes.\n\nThe project explores essential front-end concepts such as state management, grid movement, collision detection, game loops, and real-time visual feedback.'
    },
    worked: {
      pt: 'Progressão por fases, obstáculos internos, comidas especiais, efeitos sonoros, controle por teclado, suporte mobile, orientação vertical e experiência responsiva.',
      es: 'Progresión por fases, obstáculos internos, alimentos especiales, efectos de sonido, control por teclado, soporte móvil, orientación vertical y diseño adaptable.',
      en: 'Level progression, internal obstacles, special food items, sound effects, keyboard controls, mobile support, portrait orientation, and responsive behavior.'
    },
    learnings: {
      pt: 'Esse projeto ajudou a reforçar como pequenos detalhes de interação mudam bastante a percepção do usuário. Um jogo simples fica muito mais interessante quando existe feedback claro, ritmo visual, dificuldade progressiva e uma interface que não atrapalha a jogabilidade.',
      es: 'Este proyecto reforzó cómo los pequeños detalles de interacción cambian la percepción del usuario. Un juego sencillo resulta mucho más interesante cuando ofrece feedback claro, ritmo visual, dificultad progresiva y una interfaz que no interfiere con la jugabilidad.',
      en: 'This project reinforced how small interaction details can significantly change the user’s perception. A simple game becomes much more engaging with clear feedback, visual rhythm, progressive difficulty, and an interface that stays out of the way.'
    },
    playUrl: 'https://thiago-pereira79.github.io/snake-game/',
    codeUrl: 'https://github.com/thiago-pereira79/snake-game'
  },
  {
    id: 'sky-hop',
    title: 'Sky Hop',
    tags: ['React', 'TypeScript', 'Canvas'],
    color: '#00D0F8',
    icon: Maximize2,
    status: {
      pt: 'Jogo publicado',
      es: 'Juego publicado',
      en: 'Game published'
    },
    shortDesc: {
      pt: 'Jogo arcade de voo com mundos, moedas, modo infinito, estrelas e progressão por fases.',
      es: 'Juego arcade de vuelo con mundos temáticos, monedas, modo infinito, estrellas y progresión por fases.',
      en: 'Arcade flight game with themed worlds, coins, an endless mode, stars, and level progression.'
    },
    about: {
      pt: 'Sky Hop é um experimento de jogo inspirado em mecânicas clássicas de voo com um toque. O objetivo é controlar o personagem, desviar de obstáculos, coletar moedas e avançar pelas fases ou tentar alcançar a maior pontuação no modo infinito.\n\nO projeto foi pensado para praticar lógica de jogo, física simples, controle de dificuldade, renderização com Canvas, responsividade e feedback sonoro. Além disso, a interface foi construída para funcionar bem em desktop, celular, tablet e iPad no modo vertical.',
      es: 'Sky Hop es un experimento de juego inspirado en mecánicas clásicas de vuelo con un solo toque. El objetivo es controlar al personaje, esquivar obstáculos, recoger monedas y avanzar por las fases o alcanzar la mayor puntuación posible en el modo infinito.\n\nEl proyecto practica lógica de juegos, física sencilla, control de dificultad, renderizado con Canvas, diseño adaptable y feedback sonoro. La interfaz funciona en computadoras, teléfonos y tabletas en orientación vertical.',
      en: 'Sky Hop is a game experiment inspired by classic one-touch flight mechanics. Players control the character, avoid obstacles, collect coins, and progress through stages or pursue the highest possible score in endless mode.\n\nThe project explores game logic, simple physics, difficulty balancing, Canvas rendering, responsive behavior, and sound feedback. The interface is designed for computers, phones, and tablets in portrait orientation.'
    },
    worked: {
      pt: 'Sistema de fases, mundos temáticos, modo infinito, moedas, estrelas, efeitos sonoros, gravidade, impulso, colisões, Canvas e adaptação mobile-first.',
      es: 'Sistema de fases, mundos temáticos, modo infinito, monedas, estrellas, efectos de sonido, gravedad, impulso, colisiones, Canvas y adaptación mobile-first.',
      en: 'Stage system, themed worlds, endless mode, coins, stars, sound effects, gravity, impulse, collisions, Canvas, and mobile-first adaptation.'
    },
    learnings: {
      pt: 'Esse projeto mostrou a importância de equilibrar desafio e fluidez. Em jogos simples, qualquer atraso, corte visual ou botão confuso quebra a experiência. A interface precisa quase desaparecer para o jogador focar na ação.',
      es: 'El proyecto demostró la importancia de equilibrar el desafío y la fluidez. En los juegos sencillos, cualquier retraso, corte visual o control confuso interrumpe la experiencia. La interfaz debe pasar a segundo plano para que el jugador se concentre en la acción.',
      en: 'This project showed the importance of balancing challenge and fluidity. In simple games, any delay, visual interruption, or confusing control can break the experience. The interface should fade into the background so the player can focus on the action.'
    },
    playUrl: 'https://thiago-pereira79.github.io/sky-hop/',
    codeUrl: 'https://github.com/thiago-pereira79/sky-hop'
  },
  {
    id: 'piano-virtual',
    title: 'Piano Virtual',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#A898E0',
    icon: Music,
    status: {
      pt: 'Projeto publicado',
      es: 'Proyecto publicado',
      en: 'Project published'
    },
    shortDesc: {
      pt: 'Simulador interativo de piano com áudio, teclado físico, clique do mouse e feedback visual em tempo real.',
      es: 'Simulador interactivo de piano con audio, teclado físico, clic del mouse y feedback visual en tiempo real.',
      en: 'Interactive piano simulator with audio, physical keyboard support, mouse input, and real-time visual feedback.'
    },
    about: {
      pt: 'Piano Virtual é um projeto desenvolvido para praticar interação direta no navegador usando HTML, CSS e JavaScript puro. A ideia foi criar um piano funcional, onde cada tecla responde ao clique do mouse ou ao teclado físico, com áudio real e feedback visual.\n\nO projeto também recebeu ajustes de interface, tema mais limpo, controle de volume, opção de mostrar ou ocultar rótulos e adaptação para dispositivos móveis.',
      es: 'Piano Virtual es un proyecto desarrollado para practicar la interacción directa en el navegador con HTML, CSS y JavaScript puro. Cada tecla responde al clic del mouse o al teclado físico mediante audio real y feedback visual.\n\nEl proyecto también incluye una interfaz más limpia, control de volumen, la opción de mostrar u ocultar etiquetas y adaptación para dispositivos móviles.',
      en: 'Virtual Piano was developed to practice direct browser interaction using HTML, CSS, and plain JavaScript. Each key responds to mouse clicks or the physical keyboard with real audio and visual feedback.\n\nThe project also includes a cleaner interface, volume control, an option to show or hide labels, and support for mobile devices.'
    },
    worked: {
      pt: 'Manipulação do DOM, eventos de teclado, eventos de clique, áudio dinâmico, controle de volume, responsividade e organização visual.',
      es: 'Manipulación del DOM, eventos de teclado, eventos de clic, audio dinámico, control de volumen, diseño adaptable y organización visual.',
      en: 'DOM manipulation, keyboard and click events, dynamic audio, volume control, responsive behavior, and visual organization.'
    },
    learnings: {
      pt: 'Esse projeto reforçou como interações simples precisam de respostas claras. Quando o usuário toca uma tecla, ele espera som, movimento e confirmação imediata. Esse tipo de detalhe cria sensação de controle.',
      es: 'El proyecto reforzó que incluso las interacciones sencillas necesitan respuestas claras. Cuando el usuario toca una tecla, espera sonido, movimiento y confirmación inmediata. Esos detalles crean una sensación de control.',
      en: 'This project reinforced that even simple interactions need clear responses. When users press a key, they expect immediate sound, movement, and confirmation. Those details create a stronger sense of control.'
    },
    playUrl: 'https://thiago-pereira79.github.io/js-music-keyboard-virtual/',
    codeUrl: 'https://github.com/thiago-pereira79/js-music-keyboard-virtual'
  },
  {
    id: 'yugioh-jokenpo',
    title: 'Yu-Gi-Oh Jo-Ken-Po',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#FBBF24',
    icon: Tv,
    status: {
      pt: 'Projeto publicado',
      es: 'Proyecto publicado',
      en: 'Project published'
    },
    shortDesc: {
      pt: 'Jogo de cartas baseado em lógica de duelo, estados, regras de vitória e interações com JavaScript puro.',
      es: 'Juego de cartas basado en lógica de duelo, estados, reglas de victoria e interacciones con JavaScript puro.',
      en: 'Card game built around duel logic, state management, victory rules, and plain JavaScript interactions.'
    },
    about: {
      pt: 'Yu-Gi-Oh Jo-Ken-Po é um jogo criado para praticar lógica de programação, estruturação de estados e manipulação direta do DOM com JavaScript puro. A proposta mistura uma estética inspirada em duelo de cartas com a mecânica simples e conhecida do Jo-Ken-Po.\n\nO jogador escolhe uma carta, o oponente responde, e o sistema compara as escolhas para definir o resultado da rodada.',
      es: 'Yu-Gi-Oh Jo-Ken-Po es un juego creado para practicar lógica de programación, gestión de estados y manipulación directa del DOM con JavaScript puro. La propuesta combina una estética inspirada en los duelos de cartas con las reglas conocidas de piedra, papel o tijera.\n\nEl jugador elige una carta, el oponente responde y el sistema compara ambas opciones para definir el resultado de la ronda.',
      en: 'Yu-Gi-Oh Jo-Ken-Po was created to practice programming logic, state management, and direct DOM manipulation with plain JavaScript. It combines a card-duel-inspired visual style with the familiar rules of Rock Paper Scissors.\n\nThe player chooses a card, the opponent responds, and the system compares both choices to determine the outcome of the round.'
    },
    worked: {
      pt: 'Regras de vitória, estados de jogo, cartas interativas, placar, eventos, organização de funções e resposta visual para cada jogada.',
      es: 'Reglas de victoria, estados del juego, cartas interactivas, marcador, eventos, organización de funciones y feedback visual para cada jugada.',
      en: 'Victory rules, game states, interactive cards, scoring, events, function organization, and visual feedback for every move.'
    },
    learnings: {
      pt: 'Esse projeto ajudou a entender como regras simples podem ganhar personalidade quando combinadas com interface, ritmo e feedback visual. A lógica é pequena, mas a experiência depende da forma como ela é apresentada.',
      es: 'El proyecto ayudó a comprender cómo unas reglas sencillas pueden adquirir personalidad cuando se combinan con interfaz, ritmo y feedback visual. La lógica es pequeña, pero la experiencia depende de cómo se presenta.',
      en: 'This project showed how simple rules can gain personality when combined with interface design, pacing, and visual feedback. The logic is compact, but the experience depends on how it is presented.'
    },
    playUrl: 'https://thiago-pereira79.github.io/js-yugioh-assets/',
    codeUrl: 'https://github.com/thiago-pereira79/js-yugioh-assets'
  },
  {
    id: 'pokedex-interativa',
    title: 'Pokédex Interativa',
    tags: ['JavaScript', 'API REST', 'UX'],
    color: '#EF4444',
    icon: Search,
    status: {
      pt: 'Projeto publicado',
      es: 'Proyecto publicado',
      en: 'Project published'
    },
    shortDesc: {
      pt: 'Aplicação conectada à PokéAPI com busca por nome, busca por ID, modal de detalhes e experiência responsiva.',
      es: 'Aplicación conectada a PokéAPI con búsqueda por nombre o ID, modal de detalles y experiencia adaptable.',
      en: 'Application connected to PokéAPI with name and ID search, a details modal, and a responsive experience.'
    },
    about: {
      pt: 'Pokédex Interativa é uma aplicação criada para praticar consumo de API REST, manipulação de dados e construção dinâmica de interface. O projeto permite buscar Pokémon por nome ou ID, visualizar detalhes em modal e navegar de forma simples pela lista.\n\nA interface foi ajustada com foco em responsividade, organização visual, feedback de busca e uma experiência mais fluida para quem usa no desktop ou no celular.',
      es: 'Pokédex Interativa es una aplicación creada para practicar el consumo de una API REST, la manipulación de datos y la construcción dinámica de interfaces. Permite buscar Pokémon por nombre o ID, consultar detalles en un modal y recorrer la lista de forma sencilla.\n\nLa interfaz se ajustó con foco en el diseño adaptable, la organización visual, el feedback de búsqueda y una experiencia fluida tanto en computadoras como en teléfonos.',
      en: 'Pokédex Interativa was created to practice REST API consumption, data manipulation, and dynamic interface construction. It allows users to search for Pokémon by name or ID, view details in a modal, and navigate the list easily.\n\nThe interface was refined with a focus on responsive behavior, visual organization, search feedback, and a smoother experience on both desktop and mobile devices.'
    },
    worked: {
      pt: 'Consumo da PokéAPI, busca por nome e número, modal de detalhes, tradução de atributos, organização de dados, CSS responsivo e navegação com retorno à lista.',
      es: 'Consumo de PokéAPI, búsqueda por nombre y número, modal de detalles, traducción de atributos, organización de datos, CSS adaptable y navegación con retorno a la lista.',
      en: 'PokéAPI integration, name and number search, details modal, attribute translation, data organization, responsive CSS, and navigation back to the list.'
    },
    learnings: {
      pt: 'Esse projeto mostrou como dados brutos precisam de contexto visual. Consumir uma API é uma parte do trabalho; a outra é transformar informação em algo fácil de entender e navegar.',
      es: 'El proyecto mostró que los datos sin procesar necesitan contexto visual. Consumir una API es solo una parte del trabajo; la otra consiste en transformar la información en algo fácil de entender y recorrer.',
      en: 'This project showed that raw data needs visual context. Consuming an API is only part of the work; the other part is turning information into something easy to understand and navigate.'
    },
    playUrl: 'https://thiago-pereira79.github.io/js-developer-pokedex/',
    codeUrl: 'https://github.com/thiago-pereira79/js-developer-pokedex'
  },
  {
    id: 'jogo-da-memoria',
    title: 'Jogo da Memória',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#34D399',
    icon: Grid,
    status: {
      pt: 'Jogo publicado',
      es: 'Juego publicado',
      en: 'Game published'
    },
    shortDesc: {
      pt: 'Jogo da memória com emojis, temporizador, sons, estatísticas e visual arcade moderno.',
      es: 'Juego de memoria con emojis, temporizador, sonidos, estadísticas y una estética arcade moderna.',
      en: 'Memory matching game with emojis, a timer, sound effects, statistics, and a modern arcade look.'
    },
    about: {
      pt: 'Jogo da Memória é uma versão web do clássico jogo de encontrar pares, com melhorias visuais, temporizador, contagem de jogadas, sons e interface em estilo arcade. A proposta foi criar uma experiência simples de jogar, mas com feedback suficiente para manter o usuário orientado durante toda a partida.\n\nO projeto trabalha lógica de embaralhamento, controle de estado, comparação de pares, tempo de jogo e responsividade.',
      es: 'Jogo da Memória es una versión web del clásico juego de encontrar parejas, con mejoras visuales, temporizador, contador de movimientos, sonidos y una interfaz de estilo arcade. La propuesta fue crear una experiencia sencilla, pero con feedback suficiente para mantener al jugador orientado durante toda la partida.\n\nEl proyecto trabaja la lógica de mezcla, la gestión de estado, la comparación de parejas, el tiempo de juego y el diseño adaptable.',
      en: 'Jogo da Memória is a web version of the classic matching game, enhanced with visual effects, a timer, move tracking, sound, and an arcade-style interface. The goal was to create a simple experience with enough feedback to keep players oriented throughout the game.\n\nThe project explores shuffle logic, state management, pair comparison, game timing, and responsive behavior.'
    },
    worked: {
      pt: 'Cartas dinâmicas, pares com emojis, temporizador, jogadas, sons, modal de fim de jogo, layout desktop/mobile e feedback visual.',
      es: 'Cartas dinámicas, parejas con emojis, temporizador, movimientos, sonidos, modal de fin de partida, diseño para computadora y móvil, y feedback visual.',
      en: 'Dynamic cards, emoji pairs, timer, move tracking, sound effects, end-game modal, desktop and mobile layouts, and visual feedback.'
    },
    learnings: {
      pt: 'Esse projeto reforçou como clareza é essencial em jogos rápidos. O usuário precisa entender o estado da partida sem pensar demais: o que virou, o que acertou, quanto tempo resta e o que acontece depois.',
      es: 'El proyecto reforzó la importancia de la claridad en los juegos rápidos. El usuario debe comprender el estado de la partida sin esfuerzo: qué cartas están visibles, qué parejas acertó, cuánto tiempo lleva jugando y qué sucede al terminar.',
      en: 'This project reinforced how essential clarity is in quick games. Users should understand the state of the match without extra effort: which cards are visible, which pairs were found, how much time has passed, and what happens next.'
    },
    playUrl: 'https://thiago-pereira79.github.io/jogo-da-memoria/',
    codeUrl: 'https://github.com/thiago-pereira79/jogo-da-memoria'
  }
];
