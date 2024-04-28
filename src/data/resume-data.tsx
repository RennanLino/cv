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
    "Desenvolvedor Web BackEnd",
  summary:
    "Profissional altamente motivado procurando uma vaga de nível de entrada em Desenvolvimento Web BackEnd. Possui experiência no desenvolvimento e integração de soluções BI com aplicações web e na construção de aplicações de foco administrativo. Atualmente em transição de carreira da formação em Engenharia Civil, anseia a encontrar novos desafios, fortalecer suas habilidades técnicas e interpessoais e colaborar com um time diverso.",
  avatarUrl: "https://avatars.githubusercontent.com/u/104281959?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "rlino.dev@gmail.com.com",
    tel: "+5581991076547",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RennanLino",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rennan-lino-85928b17a/",
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
      degree: "Bacharelado em Enganharia Civil",
      start: "2014",
      end: "2020",
    },
    {
      school: "Universidade do Norte do Paraná (UNOPAR)",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      start: "2022",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Autarquia de Urbanização do Recife (URB)",
      link: "https://www2.recife.pe.gov.br/pagina/autarquia-de-urbanizacao-do-recife-urb",
      badges: [],
      title: "Estagiário",
      logo: ParabolLogo,
      start: "2019",
      end: "2020",
      description:
        "Acompanhamento de obras de pavimentação, drenagem, contenção, escadarias e revestimentos de taludes. Elaboração de planilhas de orçamento. Acompanhamento vistorias e auxiliar na emissão de parecer.",
    },
    {
      company: "Mult Técnica Engenharia",
      link: "https://www.instagram.com/multtecnicaengenharia/",
      badges: [],
      title: "Auxiliar de Engenharia Civil",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Atendimento aos clientes após a entrega da obra, enquanto vigorar o prazo legal de garantia, com serviços voltados predominantemente à execução de reparos, para sanar possíveis falhas percebidas pelos usuários quando da utilização da edificação.",
    },
    {
      company: "High Ease",
      link: "http://hie.tec.br/",
      badges: [],
      title: "Desenvolvedor Backend Jr",
      logo: JojoMobileLogo,
      start: "2023",
      end: "2023",
      description:
        "Realizar correções, análise, desenvolvimento de novos requisitos e modelagem de dados, com objetivo de estudar e implementar sistemas de acordo com as regras de negócio. Analisar o desempenho de sistemas, solucionando problemas técnicos.",
    },
    {
      company: "High Ease",
      link: "http://hie.tec.br/",
      badges: ["Hibrido"],
      title: "Desenvolvedor ETL Jr",
      logo: NSNLogo,
      start: "2023",
      end: "2024",
      description: "Desenvolvimento, teste e manutenção de soluções de ETL. Projetar e criar mapeamentos e trabalhos de ETL. Criação de procedimentos armazenados para realizar operações de banco de dados. Realização de ajustes e otimização do desempenho do banco de dados. Desenvolvimento e otimização de consultas de banco de dados.",
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
      title: "Programação orientada a objetos JAVA",
      techStack: ["Java UML", "JDBC", "JavaFX", "Spring Boot", "JPA", "Hibernate", "MySQL", "MongoDB"],
      description: "Curso didático e completo de Java e OO, UML, JDBC, JavaFX, Spring Boot, JPA, Hibernate, MySQL, MongoDB",
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
        "Criar banco de dados e interagir com bancos de dados existentes, Escrever consultas complexas de junção SQL em diversas tabelas, Dominar as funções da janela MySQL 8 (LEAD, LAG, RANK, etc.), Modelar dados gerar relatórios usando SQL;",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/",
      },
    },
    {
      title: "Programador Back-End",
      techStack: ["C#", ".NET", "SQL Server"],
      description:
        "Desenvolver competências que possibilitem ao concluinte programar sistemas utilizando as principais tecnologias do back-end, desenvolvendo as regras de negócio, ou seja, programar toda a parte não visual do sistema, não envolvendo a ação do usuário, utilizando a linguagem de programação C#, considerando as normas, padrões e requisitos técnicos, de qualidade, saúde e segurança e de sustentabilidade.",
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
        "Apresenta os conceitos essenciais para a criação de Web APIs na plataforma .NET de forma objetiva e prática abordando os principais recursos da ASP .NET Core",
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
