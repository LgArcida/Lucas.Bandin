import { en } from './en';

export const es = {
  NAV: {
    ME: 'Yo',
    ABOUT: 'Sobre mí',
    PROJECTS: 'Proyectos',
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
  HOME: {
    GREETING: '¡Hola! Soy',
    DESCRIPTION_LINE1:
      'Disfruto creando aplicaciones frontend modernas y diseñando software que sea fácil de entender, fácil de mantener y agradable de usar.',
    DESCRIPTION_LINE2:
      'Creo que el mejor software se construye eliminando complejidad, no añadiéndola.',
  },
} satisfies typeof en;
