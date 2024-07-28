import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rennan Lino Santos",
  initials: "RLS",
  location: "Recife - PE",
  locationLink: "https://www.google.com/maps/place/Recife",
  about:
    "BackEnd Web Developer",
  summary:
    "Highly motivated professional looking for an entry-level role in BackEnd Web Development. He has experience in developing and integrating BI solutions with web applications and in building administrative-focused applications. Currently in a career transition from training in Civil Engineering, he is looking forward to finding new challenges, strengthening his technical and interpersonal skills and collaborating with a diverse team.",
  avatarUrl: "https://avatars.githubusercontent.com/u/104281959?v=4",
  //personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "rlino.dev@gmail.com",
    tel: "+5581991076547",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RennanLino",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rennan-lino",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Universidade Católica de Pernambuco (UNICAP)",
      degree: "Bachelor in Civil Engineering",
      start: "2014",
      end: "2020",
    },
    {
      school: "Universidade do Norte do Paraná (UNOPAR)",
      degree: "Technologist in Systems Analysis and Development",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Autarquia de Urbanização do Recife (URB)",
      link: "https://www2.recife.pe.gov.br/pagina/autarquia-de-urbanizacao-do-recife-urb",
      badges: [],
      title: "Intern",
      logo: ParabolLogo,
      start: "03/2019",
      end: "06/2020",
      description:
        "Monitoring of paving, drainage, containment, staircases and slope covering works. Preparation of budget spreadsheets. Monitoring inspections and assisting in issuing reports.",
    },
    {
      company: "Mult Técnica Engenharia",
      link: "https://www.instagram.com/multtecnicaengenharia/",
      badges: [],
      title: "Civil Engineering Assistant",
      logo: ClevertechLogo,
      start: "11/2021",
      end: "07/2022",
      description:
        "Customer service after delivery of residential complex, while the legal warranty period is in effect, with services aimed predominantly at carrying out repairs, to remedy possible faults perceived by users.",
    },
    {
      company: "High Ease",
      link: "http://hie.tec.br/",
      badges: [],
      title: "Backend Developer Jr",
      logo: JojoMobileLogo,
      start: "03/2023",
      end: "06/2023",
      description:
        "Carry out corrections, analysis, development of new requirements and data modeling, with the aim of studying and implementing systems in accordance with business rules. Analyze system performance, solving technical problems.",
    },
    {
      company: "High Ease",
      link: "http://hie.tec.br/",
      badges: ["Hibrido"],
      title: "ETL Developer Jr",
      logo: NSNLogo,
      start: "09/2023",
      end: "04/2024",
      description: "Development, testing and maintenance of ETL solutions. Design and create mappings and ETL jobs. Creating stored procedures to perform database operations. Performing adjustments and optimizing database performance. Development and optimization of database queries",
    },
  ],
  skills: [
    "C#",
    "ASP.NET",
    "SQL Server",
    "SSIS",
    "SSAS",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  projects: [
    {
      title: "Object-Oriented Programming in JAVA",
      techStack: ["Java UML", "JDBC", "JavaFX", "Spring Boot", "JPA", "Hibernate", "MySQL", "MongoDB"],
      description: "Complete and didactic course of Java and OO, UML, JDBC, JavaFX, Spring Boot, JPA, Hibernate, MySQL, MongoDB",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://www.udemy.com/course/java-curso-completo/",
      },
    },
    {
      title: "The Ultimate MySQL Bootcamp",
      techStack: ["T-SQL", "MySQL", "MySQL Workbench"],
      description:
        "Create database and interact with existing databases. Write complex SQL join queries on several tables. Master the functions of the MySQL 8 window (LEAD, LAG, RANK, etc.). Model data, generate reports using SQL.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/",
      },
    },
    {
      title: "BackEnd Developer - SENAI",
      techStack: ["C#", ".NET", "SQL Server"],
      description:
        "Develop skills that enable the graduate to program systems using the main back-end technologies, developing business rules, that is, programming the entire non-visual part of the system, not involving user action, using the C# programming language, considering technical, quality, health and safety and sustainability norms, standards and requirements.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://www.sp.senai.br/curso/programador-back-end/95403#:~:text=O%20curso%20de%20Qualifica%C3%A7%C3%A3o%20Profissional,n%C3%A3o%20envolvendo%20a%20a%C3%A7%C3%A3o%20do/",
      },
    },
    {
      title: "Web API ASP.NET Core Essencial",
      techStack: ["ASP.NET Core", "MySQL"],
      description:
        "Presents the essential concepts for creating Web APIs on the .NET platform in an objective and practical way, covering the main features of ASP .NET Core.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://www.udemy.com/course/curso-web-api-asp-net-core-essencial/",
      },
    },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
