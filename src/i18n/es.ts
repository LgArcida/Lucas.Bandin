import { en } from './en';

export const es = {
  NAV: {
    ME: 'Yo',
    ABOUT: 'Sobre mí',
    PROJECTS: 'Proyectos',
    EDUCATION: 'Educación',
    CONTACT: 'Contacto',
  },
  SKILLS: {
    TITLE: 'Habilidades',
    LIST: 'Lista',
    CHART: 'Gráfico',
    FRONTEND: 'Frontend',
    BACKEND: 'Backend',
    STRENGTHS: 'Fortalezas',
    AI: 'IA',
  },
  PROJECTS: {
    TITLE: 'Proyectos',
    SUB_TITLE: 'Proyectos profesionales',
    TABS: {
      PROFESSIONAL: 'Profesionales',
      PERSONAL: 'Personales',
    },
    ITEMS: {
      ANAPOL: {
        ROLE: 'Ingeniero de software principal (Solo)',
        COMPANY: 'ANAPOL - Academia Nacional de Policía de Bolivia',
        TITLE: 'Sistema de Pruebas Psicológicas y Corrección OMR',
        DESCRIPTION:
          'Construí una plataforma segura en Django para procesar las pruebas psicológicas de admisión de la Academia Nacional de Policía de Bolivia.',
        LOCATION: 'La Paz, Bolivia',
        HIGHLIGHTS: [
          'Escalé un piloto OMR de 2016 de la Facultad de Derecho de la UMSA para más de 300 estudiantes hasta convertirlo en un sistema nacional de pruebas de admisión de la ANAPOL que procesa más de 47.000 postulantes.',
          'Diseñé y construí todo el sistema desde cero usando únicamente Python y OpenCV — sin servicios de OCR ni de corrección de terceros — porque los estrictos requisitos de seguridad policial y gubernamental exigían que todo funcionara internamente.',
          'Construí un pipeline OMR personalizado con IDs de postulante y de examen codificados en QR, detección de burbujas y corrección de hojas de respuesta a lo largo de siete páginas por postulante.',
          'Escaneé, digitalicé y almacené decenas de miles de hojas de respuesta físicas, construyendo un archivo completo de los datos de examen.',
          'Creé un índice y un código QR para cada estudiante y cada examen, vinculando cada hoja de respuesta con su dueño.',
          'Calculé las calificaciones finales y publiqué los resultados oficiales de admisión, todo mientras trabajaba bajo la supervisión directa de funcionarios gubernamentales y policiales.',
        ],
      },
      UMSA_DERECHO: {
        ROLE: 'Ingeniero de Software (Solo)',
        COMPANY: 'UMSA - Universidad Mayor de San Andrés (Facultad de Derecho)',
        TITLE: 'Piloto de Corrección Automatizada de Exámenes OMR',
        DESCRIPTION:
          'Construí el piloto del sistema automatizado de corrección OMR de exámenes para la Facultad de Derecho de la Universidad Mayor de San Andrés — el predecesor que luego escaló al sistema nacional de pruebas de admisión de la ANAPOL.',
        LOCATION: 'La Paz, Bolivia',
        HIGHLIGHTS: [
          'Construí una versión más simple del sistema de corrección en Python/Django, usando Django para almacenar los datos de los estudiantes y dar seguimiento a sus exámenes durante todo el piloto.',
          'Procesé hojas de respuesta de una sola página para más de 300 estudiantes, un flujo deliberadamente más simple que las hojas de siete páginas del sistema nacional posterior.',
          'Gestioné todo el piloto de forma manual y en solitario como único ingeniero, siendo responsable del pipeline completo de principio a fin.',
        ],
      },
    },
  },
  EDUCATION: {
    TITLE: 'Educación',
    ITEMS: {
      UCB: {
        INSTITUTION: 'Universidad Católica Boliviana',
        DEGREE: 'Bachelor of Science (B.Sc.) in Systems Engineering',
        LOCATION: 'La Paz, Bolivia',
        DESCRIPTION:
          'Completé la carrera de cinco años de Ingeniería de Sistemas, graduándome con un promedio de 93 %. Combina una sólida base académica en algoritmos, estructuras de datos e ingeniería de software con experiencia práctica en visión por computadora, programación competitiva y liderazgo.',
        HIGHLIGHTS: [
          'Me gradué con un promedio de 93 % en la carrera de Ingeniería de Sistemas.',
          'Competí tres veces en el ACM-ICPC (International Collegiate Programming Contest), avanzando de la primera ronda a la ronda de la ciudad y llegando finalmente a la ronda nacional.',
          'Tesis (100/100): construí un sistema de visión por computadora para detectar posiciones de ballet usando OpenCV, un Microsoft Kinect y el algoritmo SURF — en una época en la que la IA estaba lejos de ser algo común. Creé y entrené una red neuronal propia con más de 5.000 imágenes mías y de mi esposa, ambos bailarines de ballet, y lo demostré con una presentación en vivo. El sistema reconocía cuatro posiciones específicas.',
          'Lideré un equipo de cuatro personas en una alianza con una empresa española, resolviendo un conjunto de problemas de programación en muchos frameworks y lenguajes. Durante los 6–8 meses que duró, cada miembro se especializó de forma natural en un lenguaje y framework distintos, en lugar de que todos aprendieran todos como se había planeado.',
          'En los proyectos grandes de la universidad, normalmente tomaba la iniciativa y actuaba como líder — gestionando personas, tiempos e ideas — mientras también programaba, y mis compañeros me recuerdan como un líder natural.',
          'Tomé cursos adicionales (Stanford, MIT y otros) más allá del plan de estudios, pero nunca guardé los certificados — si no puedo hacer algo en la práctica, un pedazo de papel no significa nada.',
        ],
      },
    },
  },
  ABOUT: {
    TITLE: 'Sobre mí',
    PROBLEM_SOLVING: 'Me gusta resolver problemas, código es solo una parte',
    RIGHT_ANSWER:
      'A veces la respuesta correcta es una nueva funcionalidad. A veces es rediseñar la arquitectura. Y a veces es eliminar 500 líneas de código porque siempre hubo una solución más simple.',
    EXPERIENCE:
      'Después de más de 13 años, he aprendido que las tecnologías van y vienen, pero la buena ingeniería no. Disfruto entender problemas, construir software fácil de evolucionar y dejar cada código mejor de lo que lo encontré.',
    CLEAN_ARCH:
      'Disfruto refactorizar probablemente más de lo que debería, y obtengo una extraña satisfacción al hacer que un software complicado se sienta obvio.',
    LEARNING: 'Sigo aprendiendo cada día, y espero que eso nunca cambie.',
  },
  EXPERIENCE: {
    TITLE: 'Experiencia',
    PRESENT: 'Presente',
    CLOSE: 'Cerrar detalles',
    COMPANIES: {
      DUALOG: {
        LOCATION: 'La Paz, Bolivia / Tromsø, Noruega',
        ROLE_TITLE: 'Ingeniero Frontend Senior',
        ROLE_DESCRIPTION:
          'Ingeniero Frontend Senior y responsable principal de la arquitectura frontend de Fangstr, una plataforma marítima multiplataforma de misión crítica utilizada por miles de usuarios y adoptada por aproximadamente el 80 % de la industria pesquera noruega. Responsable de la arquitectura a largo plazo, la modernización de la aplicación, la experiencia de desarrollo, las capacidades offline-first, los flujos regulatorios, la optimización del rendimiento y el liderazgo técnico a través de múltiples generaciones de Angular.',
        HIGHLIGHTS: [
          {
            TITLE: 'Evolución del producto',
            DESCRIPTION:
              'Me uní durante la etapa de prototipo y ayudé a convertir la plataforma en un sistema de producción maduro compatible con Android, iOS, Windows, Linux y Web, manteniendo una base de código Angular/Ionic compartida.',
          },
          {
            TITLE: 'Arquitectura frontend',
            DESCRIPTION:
              'Lideré la arquitectura frontend a largo plazo introduciendo límites de dominio modulares, patrones de UI reutilizables, gestión de estado consistente, utilidades compartidas y estándares de código mantenibles que redujeron la complejidad a medida que crecían la aplicación y el equipo de ingeniería.',
          },
          {
            TITLE: 'Plataforma offline-first',
            DESCRIPTION:
              'Diseñé una arquitectura offline-first que permite a las embarcaciones operar sin conexión a internet mediante persistencia local, colas de sincronización, resolución de conflictos y recuperación automática cuando la comunicación vuelve a estar disponible.',
          },
          {
            TITLE: 'Protocolos de comunicación satelital',
            DESCRIPTION:
              'Diseñé protocolos de comunicación para dispositivos Bluetooth e Iridium satelital, implementando transmisión de paquetes fragmentados, sincronización, validación, reintentos, verificación de checksum y reensamblaje confiable de mensajes bajo un ancho de banda extremadamente limitado.',
          },
          {
            TITLE: 'Refactorización del dominio ERS',
            DESCRIPTION:
              'Refactoricé el Sistema de Reporte Electrónico (ERS) en flujos modulares basados en dominio alineados con las regulaciones pesqueras, haciendo que los cambios legislativos fueran significativamente más fáciles de implementar y mejorando el mantenimiento.',
          },
          {
            TITLE: 'Modernización de la aplicación',
            DESCRIPTION:
              'Lideré múltiples ciclos de actualización de Angular, modernizando progresivamente la aplicación mediante la adopción de características nuevas de Angular, mejoras en la inyección de dependencias, tipado más fuerte, componentes reutilizables y la eliminación de deuda técnica acumulada sin interrumpir la producción.',
          },
          {
            TITLE: 'Experiencia de desarrollo',
            DESCRIPTION:
              'Definí convenciones de ingeniería, librerías reutilizables, prácticas de revisión de código, guías de arquitectura y estándares de desarrollo que aceleraron la incorporación y mejoraron la consistencia en un equipo de ingeniería de ocho personas.',
          },
          {
            TITLE: 'Optimización del rendimiento',
            DESCRIPTION:
              'Optimicé el rendimiento del renderizado, el rendimiento de sincronización, el consumo de batería, el tiempo de arranque y el tamaño del bundle para aplicaciones que se ejecutan de forma continua en entornos marítimos remotos.',
          },
        ],
      },
      CLONO: {
        LOCATION: 'La Paz, Bolivia / Tromsø, Noruega',
        ROLE_TITLE: 'Ingeniero de Software Líder',
        ROLE_DESCRIPTION:
          'Ingeniero de Software Líder responsable de la arquitectura y la evolución a largo plazo del Clono Chess System, una plataforma oficial certificada por la FIDE utilizada en torneos de ajedrez profesionales en todo el mundo. Lidero la arquitectura frontend, el desarrollo multiplataforma, la integración de hardware, los sistemas de sincronización, las capacidades offline-first y la modernización de la plataforma backend.',
        HIGHLIGHTS: [
          {
            TITLE: 'Ecosistema completo de torneos',
            DESCRIPTION:
              'Diseñé y evolucioné un ecosistema completo de torneos compuesto por aplicaciones Android, herramientas de administración web, relojes de ajedrez digitales, dispositivos de anotación electrónica, software de gestión de torneos y servicios de transmisión en vivo.',
          },
          {
            TITLE: 'Plataforma oficial FIDE',
            DESCRIPTION:
              'Contribuí a la evolución continua de una plataforma utilizada en torneos oficiales de la FIDE, donde la confiabilidad, la precisión y la operación ininterrumpida son esenciales durante los eventos competitivos.',
          },
          {
            TITLE: 'Arquitectura offline-first',
            DESCRIPTION:
              'Diseñé flujos de sincronización capaces de operar con conectividad intermitente o no disponible, asegurando que los datos de los torneos se mantuvieran consistentes entre múltiples dispositivos y se sincronizaran automáticamente cuando la comunicación se restablecía.',
          },
          {
            TITLE: 'Sincronización en tiempo real',
            DESCRIPTION:
              'Implementé estrategias de sincronización que conectan la administración del torneo, los dispositivos de los jugadores, los árbitros, la transmisión en vivo y los sistemas de registro de partidas manteniendo la consistencia de los datos en toda la plataforma.',
          },
          {
            TITLE: 'Optimización de rendimiento y batería',
            DESCRIPTION:
              'Optimicé el rendimiento de Android, el consumo de batería, el tiempo de arranque y la eficiencia de sincronización para dispositivos que deben operar de forma continua durante largas sesiones de torneo.',
          },
          {
            TITLE: 'Personalización del motor de ajedrez',
            DESCRIPTION:
              'Extendí Chess.js con funcionalidades que soportan los requisitos de los torneos FIDE, validación avanzada de movimientos, reconstrucción de partidas y flujos específicos de torneos más allá de las capacidades estándar de la librería.',
          },
          {
            TITLE: 'Modernización del backend',
            DESCRIPTION:
              'Lidero la migración de un backend PHP heredado hacia una arquitectura moderna en Python/Django, mejorando el mantenimiento, la escalabilidad y la evolución a largo plazo mientras se preserva la compatibilidad con la infraestructura de torneos existente.',
          },
          {
            TITLE: 'Evolución del producto a largo plazo',
            DESCRIPTION:
              'Mejorando continuamente la plataforma mediante refactorización arquitectónica, desarrollo de funcionalidades, iniciativas de calidad de código y actualizaciones tecnológicas mientras se mantiene la compatibilidad con los despliegues de producción utilizados en todo el mundo.',
          },
        ],
      },
      CUTTERS_CLUB: {
        LOCATION: 'La Paz, Bolivia / Londres, Reino Unido',
        ROLE_TITLE: 'Ingeniero de Software Full Stack',
        ROLE_DESCRIPTION:
          'Ingeniero Full Stack único responsable de diseñar, construir, desplegar y mantener un marketplace on-demand que conecta clientes con barberos profesionales en Londres.',
        HIGHLIGHTS: [
          {
            TITLE: 'Responsabilidad de extremo a extremo',
            DESCRIPTION:
              'Diseñé la arquitectura completa del sistema, incluyendo frontend, backend, APIs, diseño de base de datos, autenticación, pipeline de despliegue e infraestructura de producción.',
          },
          {
            TITLE: 'Entrega rápida del producto',
            DESCRIPTION:
              'Diseñé, desarrollé y lancé la plataforma completa lista para producción en aproximadamente seis meses como único ingeniero de software.',
          },
          {
            TITLE: 'Marketplace en tiempo real',
            DESCRIPTION:
              'Construí flujos de reserva en tiempo real que manejan disponibilidad, geolocalización, control de concurrencia, bloqueo de citas y prevención de conflictos para eliminar las dobles reservas.',
          },
          {
            TITLE: 'Operaciones de producción',
            DESCRIPTION:
              'Configuré pipelines de CI/CD, monitoreo, despliegues automatizados, logging, respaldos y herramientas operativas que soportan una plataforma de producción en crecimiento.',
          },
          {
            TITLE: 'Crecimiento del negocio',
            DESCRIPTION:
              'Ayudé a escalar la prueba de concepto de Londres a más de 100 barberos profesionales y más de 1.000 usuarios registrados.',
          },
        ],
      },
      CONSULTING: {
        NAME: 'Consultoría de Software Independiente',
        LOCATION: 'Remoto',
        ROLE_TITLE: 'Consultor de Software Independiente',
        ROLE_DESCRIPTION:
          'Trabajé con startups y clientes internacionales para diseñar, arquitectar y entregar aplicaciones web modernas, plataformas internas y soluciones de negocio. Trabajé a lo largo de todo el ciclo de vida del software, ayudando a los equipos a transformar ideas en productos listos para producción mientras me adaptaba a diferentes industrias, tecnologías y culturas de ingeniería.',
        HIGHLIGHTS: [
          {
            TITLE: 'Múltiples industrias',
            DESCRIPTION:
              'Diseñé y entregué soluciones en salud, logística, plataformas de reservas, gestión empresarial, IoT, sistemas de administración y servicios digitales, adaptándome rápidamente a diferentes dominios de negocio y requisitos técnicos.',
          },
          {
            TITLE: 'Arquitectura y consultoría técnica',
            DESCRIPTION:
              'Diseñé arquitecturas de aplicaciones, seleccioné stacks tecnológicos, definí prácticas de desarrollo y ayudé a los clientes a tomar decisiones técnicas a largo plazo equilibrando la velocidad de entrega con el mantenimiento.',
          },
          {
            TITLE: 'Entrega de producto de extremo a extremo',
            DESCRIPTION:
              'Tomé los proyectos desde la recopilación de requisitos hasta la implementación de UX, el desarrollo frontend, las APIs de backend, el despliegue, el monitoreo y el soporte de producción.',
          },
          {
            TITLE: 'Tecnologías web modernas',
            DESCRIPTION:
              'Construí aplicaciones usando Angular, React, TypeScript, Python, Django, APIs REST, bases de datos SQL, sistemas de autenticación, hosting en la nube y pipelines de CI/CD según los requisitos de cada proyecto.',
          },
          {
            TITLE: 'Desarrollo rápido de productos',
            DESCRIPTION:
              'Entregué MVPs, prototipos y aplicaciones listas para producción bajo plazos ajustados manteniendo la calidad del código, la escalabilidad y el mantenimiento a largo plazo.',
          },
          {
            TITLE: 'Trabajo entre equipos',
            DESCRIPTION:
              'Colaboré directamente con fundadores, gerentes de producto, diseñadores e ingenieros, traduciendo los requisitos de negocio en software confiable mientras trabajaba entre diferentes zonas horarias y equipos internacionales.',
          },
        ],
      },
      RAPID_INSTINCT: {
        LOCATION: 'La Paz, Bolivia / Los Ángeles, Estados Unidos',
        ROLE_TITLE: 'Desarrollador Frontend',
        ROLE_DESCRIPTION:
          'Ingeniero Frontend desarrollando software empresarial de salud para el mercado estadounidense, colaborando con equipos multidisciplinarios para implementar flujos de negocio altamente regulados e interfaces de usuario complejas.',
        HIGHLIGHTS: [
          {
            TITLE: 'Flujos complejos de salud',
            DESCRIPTION:
              'Implementé funcionalidades de Angular que soportan reglas de negocio específicas del sector salud, requisitos regulatorios, flujos configurables e interacciones de usuario avanzadas.',
          },
          {
            TITLE: 'Formularios dinámicos',
            DESCRIPTION:
              'Construí formularios configurables, motores de validación y flujos de gestión de documentos impulsados por lógica de negocio y regulatoria compleja.',
          },
          {
            TITLE: 'Colaboración ágil',
            DESCRIPTION:
              'Trabajé estrechamente con ingenieros backend, especialistas en QA, diseñadores y stakeholders de producto dentro de un equipo de ingeniería ágil que entrega software de salud en producción.',
          },
        ],
      },
      CODEROAD: {
        LOCATION: 'La Paz, Bolivia / Los Ángeles, Estados Unidos',
        ROLE_TITLE: 'Desarrollador Frontend → Líder de Equipo Frontend',
        ROLE_DESCRIPTION:
          'Ingresé como Desarrollador Frontend y progresé a Líder de Equipo Frontend mientras construía software empresarial para Xtime, uno de los principales proveedores de soluciones de retail automotriz en América del Norte. Trabajé en aplicaciones de misión crítica utilizadas a diario por importantes concesionarios automotrices de EE. UU., equilibrando modernización de sistemas heredados, desarrollo de nuevas funcionalidades, soporte de producción y liderazgo técnico.',
        HIGHLIGHTS: [
          {
            TITLE: 'Software automotriz empresarial',
            DESCRIPTION:
              'Desarrollé y mantuve aplicaciones empresariales a gran escala que soportan operaciones de concesionarios, servicio al cliente, agendamiento y flujos de negocio internos para importantes marcas automotrices de los Estados Unidos.',
          },
          {
            TITLE: 'Liderazgo técnico',
            DESCRIPTION:
              'Ascendí a Líder de Equipo Frontend, coordinando un equipo frontend de cuatro ingenieros, mentorizando desarrolladores, revisando código, planificando lanzamientos, asignando trabajo y ayudando a establecer estándares de ingeniería y prácticas de desarrollo.',
          },
          {
            TITLE: 'Modernización de plataformas heredadas',
            DESCRIPTION:
              'Trabajé en aplicaciones heredadas y de nueva generación, modernizando gradualmente el frontend mientras preservaba la compatibilidad con los procesos de negocio y los despliegues de clientes existentes.',
          },
          {
            TITLE: 'Confiabilidad de producción',
            DESCRIPTION:
              'Lideré los lanzamientos de producción, investigué problemas críticos, entregué hotfixes orientados al cliente y mantuve una alta confiabilidad del sistema para software que soporta operaciones diarias de concesionarios.',
          },
          {
            TITLE: 'Colaboración entre equipos',
            DESCRIPTION:
              'Colaboré estrechamente con gerentes de producto, ingenieros backend, equipos de QA y stakeholders de EE. UU. para traducir los requisitos de negocio en software empresarial confiable.',
          },
          {
            TITLE: 'Rendimiento y mantenibilidad',
            DESCRIPTION:
              'Mejoré la mantenibilidad de la aplicación mediante componentes reutilizables, estándares de código, revisiones de código y mejoras arquitectónicas mientras continuaba entregando nuevas funcionalidades.',
          },
          {
            TITLE: 'Soporte de navegadores heredados',
            DESCRIPTION:
              'Mantuve la compatibilidad con entornos empresariales exigentes, incluido Internet Explorer, mientras implementaba funcionalidades frontend modernas y optimizaciones de rendimiento.',
          },
        ],
      },
    },
  },
  HOME: {
    GREETING: '¡Hola! Soy',
    DESCRIPTION_LINE1:
      'Disfruto creando aplicaciones frontend modernas y diseñando software que sea fácil de entender, fácil de mantener y agradable de usar.',
    DESCRIPTION_LINE2:
      'Creo que el mejor software se construye eliminando complejidad, no añadiéndola.',
  },
} satisfies typeof en;
