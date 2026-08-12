export const en = {
  NAV: {
    ME: 'Me',
    ABOUT: 'About',
    PROJECTS: 'Projects',
    EDUCATION: 'Education',
    CONTACT: 'Contact',
  },
  SKILLS: {
    TITLE: 'Skills ',
    LIST: 'List',
    CHART: 'Chart',
    FRONTEND: 'Frontend',
    BACKEND: 'Backend',
    STRENGTHS: 'Strengths',
    AI: 'AI',
  },
  PROJECTS: {
    TITLE: 'Projects',
    SUB_TITLE: 'Professional projects',
    ITEMS: {
      ANAPOL: {
        ROLE: 'Lead Software Engineer (Solo)',
        COMPANY: 'ANAPOL - Bolivian National Police Academy',
        TITLE: 'Psychological Testing & OMR Scoring System',
        DESCRIPTION:
          'Built a secure Django platform for processing psychological admission tests for the Bolivian National Police Academy.',
        LOCATION: 'La Paz, Bolivia',
        HIGHLIGHTS: [
          'Scaled a 2016 UMSA Law School OMR pilot for 300+ students into a nationwide ANAPOL admission testing system processing 47,000+ applicants.',
          'Designed and built the entire system from scratch using only Python and OpenCV — no third-party OCR or scoring services — because strict police and government security rules required everything to run in-house.',
          'Built a custom OMR pipeline with QR-coded applicant and exam IDs, bubble detection, and answer-sheet scoring across seven pages per applicant.',
          'Scanned, digitized, and stored tens of thousands of physical answer sheets, building a complete archive of the exam data.',
          'Created a QR index and code for every student and every exam, linking each answer sheet to its owner.',
          'Computed final scores and published the official admission results, all while working under direct supervision by government and police officials.',
        ],
      },
      UMSA_DERECHO: {
        ROLE: 'Software Engineer (Solo)',
        COMPANY: 'UMSA - Universidad Mayor de San Andrés (Facultad de Derecho)',
        TITLE: 'OMR Automated Test Scoring Pilot',
        DESCRIPTION:
          'Built the pilot of the automated OMR exam scoring system for the Law Faculty of Universidad Mayor de San Andrés — the predecessor that later scaled into the national ANAPOL admission testing system.',
        LOCATION: 'La Paz, Bolivia',
        HIGHLIGHTS: [
          'Built a simpler version of the Python/Django scoring system, using Django to store student data and track exams throughout the pilot.',
          'Processed single-page paper answer sheets for 300+ students, a deliberately simpler flow than the seven-page sheets of the later national system.',
          'Ran the entire pilot manually and solo as the only engineer, owning the complete pipeline end to end.',
        ],
      },
    },
  },
  EDUCATION: {
    TITLE: 'Education',
    ITEMS: {
      UCB: {
        INSTITUTION: 'Universidad Católica Boliviana',
        DEGREE: 'Bachelor of Science (B.Sc.) in Systems Engineering',
        LOCATION: 'La Paz, Bolivia',
        DESCRIPTION:
          'Completed a five-year Systems Engineering program, graduating with a 93% career average. Combines a strong academic foundation in algorithms, data structures, and software engineering with hands-on work in computer vision, competitive programming, and leadership.',
        HIGHLIGHTS: [
          'Graduated with a 93% career average in Systems Engineering.',
          'Competed three times in the ACM-ICPC (International Collegiate Programming Contest), advancing from the first round to the city round and finally reaching the national round.',
          'Thesis (100/100): built a computer-vision system to detect ballet positions using OpenCV, a Microsoft Kinect, and the SURF algorithm — at a time when AI was far from mainstream. Created and trained a custom neural network on 5,000+ images of myself and my wife, both ballet dancers, and demonstrated it with a live performance. The system recognized four specific poses.',
          'Led a four-person team in a partnership with a Spanish company, solving a set of programming problems across many frameworks and languages. Over the 6–8 months it ran, each teammate naturally specialized in one language and framework instead of everyone learning all of them as originally intended.',
          'On large university projects I usually took the initiative and acted as lead — managing people, timelines, and ideas — while also writing code, and my peers remember me as a natural leader.',
          'Took extra courses (Stanford, MIT, and others) well beyond the curriculum, but never kept the certificates — if I can\u2019t actually do something, a piece of paper means nothing.',
        ],
      },
    },
  },
  ABOUT: {
    TITLE: 'About me',
    PROBLEM_SOLVING: 'I like solving problems, code is just part of it',
    RIGHT_ANSWER:
      "Sometimes the right answer is a new feature. Sometimes it's redesigning the architecture. And sometimes it's deleting 500 lines of code because there was a simpler solution all along.",
    EXPERIENCE:
      "After 13+ years, I've learned that technologies come and go, but good engineering doesn't. I enjoy understanding problems, building software that's easy to evolve, and leaving every codebase better than I found it.",
    CLEAN_ARCH:
      'I enjoy refactoring probably more than I should, and I get a weird amount of satisfaction from making complicated software feel obvious.',
    LEARNING: "I'm still learning every day, and I hope that never changes.",
  },
  EXPERIENCE: {
    TITLE: 'Experience',
    PRESENT: 'Present',
    CLOSE: 'Close details',
    COMPANIES: {
      DUALOG: {
        LOCATION: 'La Paz, Bolivia / Tromsø, Norway',
        ROLE_TITLE: 'Senior Frontend Engineer',
        ROLE_DESCRIPTION:
          'Senior Frontend Engineer and primary technical owner of the frontend architecture for Fangstr, a mission-critical cross-platform maritime platform used by thousands of users and adopted by approximately 80% of the Norwegian fishing industry. Responsible for long-term architecture, application modernization, developer experience, offline-first capabilities, regulatory workflows, performance optimization, and technical leadership across multiple Angular generations.',
        HIGHLIGHTS: [
          {
            TITLE: 'Product evolution',
            DESCRIPTION:
              'Joined during the prototype stage and helped evolve the platform into a mature production system supporting Android, iOS, Windows, Linux, and Web while maintaining a shared Angular/Ionic codebase.',
          },
          {
            TITLE: 'Frontend architecture',
            DESCRIPTION:
              'Led the long-term frontend architecture by introducing modular domain boundaries, reusable UI patterns, consistent state management, shared utilities, and maintainable coding standards that reduced complexity as the application and engineering team grew.',
          },
          {
            TITLE: 'Offline-first platform',
            DESCRIPTION:
              'Designed an offline-first architecture allowing vessels to operate without internet connectivity through local persistence, synchronization queues, conflict resolution, and automatic recovery once communication became available.',
          },
          {
            TITLE: 'Satellite communication protocols',
            DESCRIPTION:
              'Designed communication protocols for Bluetooth and Iridium satellite devices, implementing fragmented packet transmission, synchronization, validation, retries, checksum verification, and reliable message reassembly under extremely constrained bandwidth.',
          },
          {
            TITLE: 'ERS domain refactoring',
            DESCRIPTION:
              'Refactored the Electronic Reporting System (ERS) into modular domain-driven workflows aligned with fisheries regulations, making legislative changes significantly easier to implement while improving maintainability.',
          },
          {
            TITLE: 'Application modernization',
            DESCRIPTION:
              'Led multiple Angular upgrade cycles, progressively modernizing the application by adopting newer Angular features, improving dependency injection, stronger typing, reusable components, and removing accumulated technical debt without disrupting production.',
          },
          {
            TITLE: 'Developer experience',
            DESCRIPTION:
              'Defined engineering conventions, reusable libraries, code review practices, architectural guidelines, and development standards that accelerated onboarding and improved consistency across an eight-person engineering team.',
          },
          {
            TITLE: 'Performance optimization',
            DESCRIPTION:
              'Optimized rendering performance, synchronization throughput, battery usage, startup time, and bundle size for applications running continuously in remote maritime environments.',
          },
        ],
      },
      CLONO: {
        LOCATION: 'La Paz, Bolivia / Tromsø, Norway',
        ROLE_TITLE: 'Lead Software Engineer',
        ROLE_DESCRIPTION:
          'Lead Software Engineer responsible for the architecture and long-term evolution of the Clono Chess System, an official FIDE-certified platform used in professional chess tournaments worldwide. Leading frontend architecture, cross-platform development, hardware integration, synchronization systems, offline-first capabilities, and the modernization of the backend platform.',
        HIGHLIGHTS: [
          {
            TITLE: 'Complete tournament ecosystem',
            DESCRIPTION:
              'Designed and evolved a complete tournament ecosystem composed of Android applications, web administration tools, digital chess clocks, electronic notation devices, tournament management software, and live broadcasting services.',
          },
          {
            TITLE: 'Official FIDE platform',
            DESCRIPTION:
              'Contributed to the continuous evolution of a platform trusted in official FIDE tournaments, where reliability, accuracy, and uninterrupted operation are essential throughout competitive events.',
          },
          {
            TITLE: 'Offline-first architecture',
            DESCRIPTION:
              'Designed synchronization workflows capable of operating with intermittent or unavailable connectivity, ensuring tournament data remained consistent across multiple devices and automatically synchronized when communication was restored.',
          },
          {
            TITLE: 'Real-time synchronization',
            DESCRIPTION:
              'Implemented synchronization strategies connecting tournament administration, player devices, arbiters, live broadcasting, and game recording systems while maintaining data consistency across the platform.',
          },
          {
            TITLE: 'Performance and battery optimization',
            DESCRIPTION:
              'Optimized Android performance, battery consumption, startup time, and synchronization efficiency for devices expected to operate continuously during long tournament sessions.',
          },
          {
            TITLE: 'Chess engine customization',
            DESCRIPTION:
              'Extended Chess.js with functionality supporting FIDE tournament requirements, advanced move validation, game reconstruction, and tournament-specific workflows beyond the standard library capabilities.',
          },
          {
            TITLE: 'Backend modernization',
            DESCRIPTION:
              'Leading the migration of a legacy PHP backend toward a modern Python/Django architecture, improving maintainability, scalability, and long-term evolution while preserving compatibility with the existing tournament infrastructure.',
          },
          {
            TITLE: 'Long-term product evolution',
            DESCRIPTION:
              'Continuously improving the platform through architectural refactoring, feature development, code quality initiatives, and technology upgrades while maintaining compatibility with production deployments used worldwide.',
          },
        ],
      },
      CUTTERS_CLUB: {
        LOCATION: 'La Paz, Bolivia / London, UK',
        ROLE_TITLE: 'Full Stack Software Engineer',
        ROLE_DESCRIPTION:
          'Sole Full Stack Engineer responsible for designing, building, deploying, and maintaining an on-demand marketplace connecting customers with professional barbers throughout London.',
        HIGHLIGHTS: [
          {
            TITLE: 'End-to-end ownership',
            DESCRIPTION:
              'Designed the complete system architecture including frontend, backend, APIs, database design, authentication, deployment pipeline, and production infrastructure.',
          },
          {
            TITLE: 'Rapid product delivery',
            DESCRIPTION:
              'Designed, developed, and launched the complete production-ready platform in approximately six months as the sole software engineer.',
          },
          {
            TITLE: 'Real-time marketplace',
            DESCRIPTION:
              'Built real-time booking workflows handling availability, geolocation, concurrency control, appointment locking, and conflict prevention to eliminate double bookings.',
          },
          {
            TITLE: 'Production operations',
            DESCRIPTION:
              'Configured CI/CD pipelines, monitoring, automated deployments, logging, backups, and operational tooling supporting a growing production platform.',
          },
          {
            TITLE: 'Business growth',
            DESCRIPTION:
              'Helped scale the London proof of concept to more than 100 professional barbers and over 1,000 registered users.',
          },
        ],
      },
      CONSULTING: {
        NAME: 'Independent Software Consulting',
        LOCATION: 'Remote',
        ROLE_TITLE: 'Independent Software Consultant',
        ROLE_DESCRIPTION:
          'Partnered with startups and international clients to design, architect, and deliver modern web applications, internal platforms, and business solutions. Worked across the full software lifecycle, helping teams transform ideas into production-ready products while adapting to different industries, technologies, and engineering cultures.',
        HIGHLIGHTS: [
          {
            TITLE: 'Multiple industries',
            DESCRIPTION:
              'Designed and delivered solutions across healthcare, logistics, booking platforms, business management, IoT, administration systems, and digital services, quickly adapting to different business domains and technical requirements.',
          },
          {
            TITLE: 'Architecture and technical consulting',
            DESCRIPTION:
              'Designed application architectures, selected technology stacks, defined development practices, and helped clients make long-term technical decisions balancing delivery speed with maintainability.',
          },
          {
            TITLE: 'End-to-end product delivery',
            DESCRIPTION:
              'Owned projects from requirements gathering through UX implementation, frontend development, backend APIs, deployment, monitoring, and production support.',
          },
          {
            TITLE: 'Modern web technologies',
            DESCRIPTION:
              'Built applications using Angular, React, TypeScript, Python, Django, REST APIs, SQL databases, authentication systems, cloud hosting, and CI/CD pipelines depending on project requirements.',
          },
          {
            TITLE: 'Rapid product development',
            DESCRIPTION:
              'Delivered MVPs, prototypes, and production-ready applications under tight deadlines while maintaining code quality, scalability, and long-term maintainability.',
          },
          {
            TITLE: 'Working across teams',
            DESCRIPTION:
              'Collaborated directly with founders, product managers, designers, and engineers, translating business requirements into reliable software while working across different time zones and international teams.',
          },
        ],
      },
      RAPID_INSTINCT: {
        LOCATION: 'La Paz, Bolivia / Los Angeles, USA',
        ROLE_TITLE: 'Frontend Developer',
        ROLE_DESCRIPTION:
          'Frontend Engineer developing enterprise healthcare software for the US market, collaborating with multidisciplinary teams to implement highly regulated business workflows and complex user interfaces.',
        HIGHLIGHTS: [
          {
            TITLE: 'Complex healthcare workflows',
            DESCRIPTION:
              'Implemented Angular features supporting healthcare-specific business rules, regulatory requirements, configurable workflows, and advanced user interactions.',
          },
          {
            TITLE: 'Dynamic forms',
            DESCRIPTION:
              'Built configurable forms, validation engines, and document management workflows driven by complex business and regulatory logic.',
          },
          {
            TITLE: 'Agile collaboration',
            DESCRIPTION:
              'Worked closely with backend engineers, QA specialists, designers, and product stakeholders within an agile engineering team delivering production healthcare software.',
          },
        ],
      },
      CODEROAD: {
        LOCATION: 'La Paz, Bolivia / Los Angeles, USA',
        ROLE_TITLE: 'Frontend Developer → Frontend Team Lead',
        ROLE_DESCRIPTION:
          'Joined as a Frontend Developer and progressed to Frontend Team Lead while building enterprise software for Xtime, one of the leading providers of automotive retail solutions in North America. Worked on mission-critical applications used daily by major US automotive dealerships, balancing legacy modernization, new feature development, production support, and technical leadership.',
        HIGHLIGHTS: [
          {
            TITLE: 'Enterprise automotive software',
            DESCRIPTION:
              'Developed and maintained large-scale enterprise applications supporting dealership operations, customer service, scheduling, and internal business workflows for major automotive brands across the United States.',
          },
          {
            TITLE: 'Technical leadership',
            DESCRIPTION:
              'Promoted to Frontend Team Lead, coordinating a four-engineer frontend team, mentoring developers, reviewing code, planning releases, assigning work, and helping establish engineering standards and development practices.',
          },
          {
            TITLE: 'Legacy platform modernization',
            DESCRIPTION:
              'Worked across both legacy and next-generation applications, gradually modernizing the frontend while preserving compatibility with existing business processes and customer deployments.',
          },
          {
            TITLE: 'Production reliability',
            DESCRIPTION:
              'Led production releases, investigated critical issues, delivered customer-facing hotfixes, and maintained high system reliability for software supporting daily dealership operations.',
          },
          {
            TITLE: 'Cross-team collaboration',
            DESCRIPTION:
              'Collaborated closely with product managers, backend engineers, QA teams, and US stakeholders to translate business requirements into reliable enterprise software.',
          },
          {
            TITLE: 'Performance and maintainability',
            DESCRIPTION:
              'Improved application maintainability through reusable components, coding standards, code reviews, and architectural improvements while continuing to deliver new functionality.',
          },
          {
            TITLE: 'Legacy browser support',
            DESCRIPTION:
              'Maintained compatibility with demanding enterprise environments, including Internet Explorer, while implementing modern frontend features and performance optimizations.',
          },
        ],
      },
    },
  },
  HOME: {
    GREETING: 'Hei! I am',
    DESCRIPTION_LINE1:
      "I enjoy building modern frontend applications and designing software that's easy to understand, easy to maintain, and enjoyable to work on.",
    DESCRIPTION_LINE2:
      'I believe the best software is built by removing complexity, not adding it.',
  },
};
