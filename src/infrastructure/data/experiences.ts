import { TECHNOLOGIES } from './technologies';

const findTechnology = (name: string) =>
  TECHNOLOGIES.find((x) => x.name === name) ?? { name, image: '' };

export const EXPERIENCES_DATA = [
  {
    company: {
      name: 'Dualog Fisknett AS',
      logo: 'dualog.webp',
      website: 'https://dualog.com',
      location: 'La Paz, Bolivia / Tromsø, Norway',
    },
    role: {
      title: 'Senior Frontend Engineer',
      description:
        'Senior Frontend Engineer and primary technical owner of the frontend architecture for Fangstr, a mission-critical cross-platform maritime platform used by thousands of users and adopted by approximately 80% of the Norwegian fishing industry. Responsible for long-term architecture, application modernization, developer experience, offline-first capabilities, regulatory workflows, performance optimization, and technical leadership across multiple Angular generations.',
    },
    period: {
      start: '2020-01-01',
      end: '2026-06-01',
    },
    highlights: [
      {
        title: 'Product evolution',
        description:
          'Joined during the prototype stage and helped evolve the platform into a mature production system supporting Android, iOS, Windows, Linux, and Web while maintaining a shared Angular/Ionic codebase.',
      },
      {
        title: 'Frontend architecture',
        description:
          'Led the long-term frontend architecture by introducing modular domain boundaries, reusable UI patterns, consistent state management, shared utilities, and maintainable coding standards that reduced complexity as the application and engineering team grew.',
      },
      {
        title: 'Offline-first platform',
        description:
          'Designed an offline-first architecture allowing vessels to operate without internet connectivity through local persistence, synchronization queues, conflict resolution, and automatic recovery once communication became available.',
      },
      {
        title: 'Satellite communication protocols',
        description:
          'Designed communication protocols for Bluetooth and Iridium satellite devices, implementing fragmented packet transmission, synchronization, validation, retries, checksum verification, and reliable message reassembly under extremely constrained bandwidth.',
      },
      {
        title: 'ERS domain refactoring',
        description:
          'Refactored the Electronic Reporting System (ERS) into modular domain-driven workflows aligned with fisheries regulations, making legislative changes significantly easier to implement while improving maintainability.',
      },
      {
        title: 'Application modernization',
        description:
          'Led multiple Angular upgrade cycles, progressively modernizing the application by adopting newer Angular features, improving dependency injection, stronger typing, reusable components, and removing accumulated technical debt without disrupting production.',
      },
      {
        title: 'Developer experience',
        description:
          'Defined engineering conventions, reusable libraries, code review practices, architectural guidelines, and development standards that accelerated onboarding and improved consistency across an eight-person engineering team.',
      },
      {
        title: 'Performance optimization',
        description:
          'Optimized rendering performance, synchronization throughput, battery usage, startup time, and bundle size for applications running continuously in remote maritime environments.',
      },
    ],
    technologies: [
      findTechnology('Angular'),
      findTechnology('TypeScript'),
      findTechnology('RxJS'),
      findTechnology('Ionic'),
      findTechnology('Capacitor'),
      findTechnology('SQLite'),
      findTechnology('Bluetooth'),
      findTechnology('Iridium Satellite'),
    ],
  },
  {
    company: {
      name: 'Clono AS',
      logo: 'clono.webp',
      website: 'https://clono.no/',
      location: 'La Paz, Bolivia / Tromsø, Norway',
    },
    role: {
      title: 'Lead Software Engineer',
      description:
        'Lead Software Engineer responsible for the architecture and long-term evolution of the Clono Chess System, an official FIDE-certified platform used in professional chess tournaments worldwide. Leading frontend architecture, cross-platform development, hardware integration, synchronization systems, offline-first capabilities, and the modernization of the backend platform.',
    },
    period: {
      start: '2017-01-01',
    },
    highlights: [
      {
        title: 'Complete tournament ecosystem',
        description:
          'Designed and evolved a complete tournament ecosystem composed of Android applications, web administration tools, digital chess clocks, electronic notation devices, tournament management software, and live broadcasting services.',
      },
      {
        title: 'Official FIDE platform',
        description:
          'Contributed to the continuous evolution of a platform trusted in official FIDE tournaments, where reliability, accuracy, and uninterrupted operation are essential throughout competitive events.',
      },
      {
        title: 'Offline-first architecture',
        description:
          'Designed synchronization workflows capable of operating with intermittent or unavailable connectivity, ensuring tournament data remained consistent across multiple devices and automatically synchronized when communication was restored.',
      },
      {
        title: 'Real-time synchronization',
        description:
          'Implemented synchronization strategies connecting tournament administration, player devices, arbiters, live broadcasting, and game recording systems while maintaining data consistency across the platform.',
      },
      {
        title: 'Performance and battery optimization',
        description:
          'Optimized Android performance, battery consumption, startup time, and synchronization efficiency for devices expected to operate continuously during long tournament sessions.',
      },
      {
        title: 'Chess engine customization',
        description:
          'Extended Chess.js with functionality supporting FIDE tournament requirements, advanced move validation, game reconstruction, and tournament-specific workflows beyond the standard library capabilities.',
      },
      {
        title: 'Backend modernization',
        description:
          'Leading the migration of a legacy PHP backend toward a modern Python/Django architecture, improving maintainability, scalability, and long-term evolution while preserving compatibility with the existing tournament infrastructure.',
      },
      {
        title: 'Long-term product evolution',
        description:
          'Continuously improving the platform through architectural refactoring, feature development, code quality initiatives, and technology upgrades while maintaining compatibility with production deployments used worldwide.',
      },
    ],
    technologies: [
      findTechnology('Angular'),
      findTechnology('Capacitor'),
      findTechnology('Android'),
      findTechnology('TypeScript'),
      findTechnology('Python'),
      findTechnology('Django'),
      findTechnology('SQLite'),
      findTechnology('Chess.js'),
    ],
  },
  {
    company: {
      name: "Cutter's Club",
      logo: 'cutters_club.webp',
      website: 'https://cuttersclub.com/',
      location: 'La Paz, Bolivia / London, UK',
    },
    role: {
      title: 'Full Stack Software Engineer',
      description:
        'Sole Full Stack Engineer responsible for designing, building, deploying, and maintaining an on-demand marketplace connecting customers with professional barbers throughout London.',
    },
    period: {
      start: '2019-01-01',
      end: '2020-12-31',
    },
    highlights: [
      {
        title: 'End-to-end ownership',
        description:
          'Designed the complete system architecture including frontend, backend, APIs, database design, authentication, deployment pipeline, and production infrastructure.',
      },
      {
        title: 'Rapid product delivery',
        description:
          'Designed, developed, and launched the complete production-ready platform in approximately six months as the sole software engineer.',
      },
      {
        title: 'Real-time marketplace',
        description:
          'Built real-time booking workflows handling availability, geolocation, concurrency control, appointment locking, and conflict prevention to eliminate double bookings.',
      },
      {
        title: 'Production operations',
        description:
          'Configured CI/CD pipelines, monitoring, automated deployments, logging, backups, and operational tooling supporting a growing production platform.',
      },
      {
        title: 'Business growth',
        description:
          'Helped scale the London proof of concept to more than 100 professional barbers and over 1,000 registered users.',
      },
    ],
    technologies: [
      findTechnology('React'),
      findTechnology('Expo'),
      findTechnology('Python'),
      findTechnology('Django'),
      findTechnology('CI/CD'),
      findTechnology('Monitoring'),
    ],
  },
  {
    company: {
      name: 'Independent Software Consulting',
      logo: 'www.webp',
      website: '',
      location: 'Remote',
    },
    role: {
      title: 'Independent Software Consultant',
      description:
        'Partnered with startups and international clients to design, architect, and deliver modern web applications, internal platforms, and business solutions. Worked across the full software lifecycle, helping teams transform ideas into production-ready products while adapting to different industries, technologies, and engineering cultures.',
    },
    period: {
      start: '2016-03-01',
      end: '2019-12-31',
    },
    highlights: [
      {
        title: 'Multiple industries',
        description:
          'Designed and delivered solutions across healthcare, logistics, booking platforms, business management, IoT, administration systems, and digital services, quickly adapting to different business domains and technical requirements.',
      },
      {
        title: 'Architecture and technical consulting',
        description:
          'Designed application architectures, selected technology stacks, defined development practices, and helped clients make long-term technical decisions balancing delivery speed with maintainability.',
      },
      {
        title: 'End-to-end product delivery',
        description:
          'Owned projects from requirements gathering through UX implementation, frontend development, backend APIs, deployment, monitoring, and production support.',
      },
      {
        title: 'Modern web technologies',
        description:
          'Built applications using Angular, React, TypeScript, Python, Django, REST APIs, SQL databases, authentication systems, cloud hosting, and CI/CD pipelines depending on project requirements.',
      },
      {
        title: 'Rapid product development',
        description:
          'Delivered MVPs, prototypes, and production-ready applications under tight deadlines while maintaining code quality, scalability, and long-term maintainability.',
      },
      {
        title: 'Working across teams',
        description:
          'Collaborated directly with founders, product managers, designers, and engineers, translating business requirements into reliable software while working across different time zones and international teams.',
      },
    ],
    technologies: [
      findTechnology('Angular'),
      findTechnology('React'),
      findTechnology('TypeScript'),
      findTechnology('Python'),
      findTechnology('Django'),
      findTechnology('PostgreSQL'),
      findTechnology('CI/CD'),
    ],
  },
  {
    company: {
      name: 'Rapid Instinct',
      logo: 'rapid_instinct.webp',
      website: '',
      location: 'La Paz, Bolivia / Los Angeles, USA',
    },
    role: {
      title: 'Frontend Developer',
      description:
        'Frontend Engineer developing enterprise healthcare software for the US market, collaborating with multidisciplinary teams to implement highly regulated business workflows and complex user interfaces.',
    },
    period: {
      start: '2015-12-01',
      end: '2016-03-31',
    },
    highlights: [
      {
        title: 'Complex healthcare workflows',
        description:
          'Implemented Angular features supporting healthcare-specific business rules, regulatory requirements, configurable workflows, and advanced user interactions.',
      },
      {
        title: 'Dynamic forms',
        description:
          'Built configurable forms, validation engines, and document management workflows driven by complex business and regulatory logic.',
      },
      {
        title: 'Agile collaboration',
        description:
          'Worked closely with backend engineers, QA specialists, designers, and product stakeholders within an agile engineering team delivering production healthcare software.',
      },
    ],
    technologies: [findTechnology('Angular'), findTechnology('PostgreSQL')],
  },
  {
    company: {
      name: 'CodeRoad / Mojix — Xtime',
      logo: 'coderoad.webp',
      website: '',
      location: 'La Paz, Bolivia / Los Angeles, USA',
    },
    role: {
      title: 'Frontend Developer → Frontend Team Lead',
      description:
        'Joined as a Frontend Developer and progressed to Frontend Team Lead while building enterprise software for Xtime, one of the leading providers of automotive retail solutions in North America. Worked on mission-critical applications used daily by major US automotive dealerships, balancing legacy modernization, new feature development, production support, and technical leadership.',
    },
    period: {
      start: '2013-02-01',
      end: '2015-11-30',
    },
    highlights: [
      {
        title: 'Enterprise automotive software',
        description:
          'Developed and maintained large-scale enterprise applications supporting dealership operations, customer service, scheduling, and internal business workflows for major automotive brands across the United States.',
      },
      {
        title: 'Technical leadership',
        description:
          'Promoted to Frontend Team Lead, coordinating a four-engineer frontend team, mentoring developers, reviewing code, planning releases, assigning work, and helping establish engineering standards and development practices.',
      },
      {
        title: 'Legacy platform modernization',
        description:
          'Worked across both legacy and next-generation applications, gradually modernizing the frontend while preserving compatibility with existing business processes and customer deployments.',
      },
      {
        title: 'Production reliability',
        description:
          'Led production releases, investigated critical issues, delivered customer-facing hotfixes, and maintained high system reliability for software supporting daily dealership operations.',
      },
      {
        title: 'Cross-team collaboration',
        description:
          'Collaborated closely with product managers, backend engineers, QA teams, and US stakeholders to translate business requirements into reliable enterprise software.',
      },
      {
        title: 'Performance and maintainability',
        description:
          'Improved application maintainability through reusable components, coding standards, code reviews, and architectural improvements while continuing to deliver new functionality.',
      },
      {
        title: 'Legacy browser support',
        description:
          'Maintained compatibility with demanding enterprise environments, including Internet Explorer, while implementing modern frontend features and performance optimizations.',
      },
    ],
    technologies: [
      findTechnology('Sencha'),
      findTechnology('Ext JS'),
      findTechnology('JavaScript'),
      findTechnology('HTML'),
      findTechnology('CSS'),
    ],
  },
];
