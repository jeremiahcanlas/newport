//content management
import ttw from "../../assett/ttw.png";
import rally from "../../assett/rally.png";
import hp from "../../assett/hp.png";
import prt from "../../assett/prt.png";
import prt2 from "../../assett/prt2.png";
import { SiGmail } from "react-icons/si";
import { IoGlobeOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const data = {
  hero: {
    intro: "Hello, my name is",
    name: "Jeremiah",
    info: "I am a front end web developer",
    infoDark: "with pixel perfect dreams✨",
  },

  about: {
    title: "A little bit more about me...",
    paraOne:
      "My name is Jeremiah, I am a front end web developer from Toronto.",
    paraTwo:
      "I am a highly motivated developer with a burning passion for learning, creativity, and a keen eye for perfecting the smallest of details. In my spare time, I highly enjoy long and challenging hikes. Every hiking trail is unique and varies in difficulty, however, it must be finished. This experience allows me to develop patience, discipline, and to approach all my work's overall structure and design with the same mindset and intensity.",
    paraThree:
      "I specialize in front end development with a solid foundation in back end, solving complex problems with elegantly simple solutions.",
  },

  resume: {
    name: "Jeremiah Canlas",
    title: "Web Developer",
    resumePath: "/resume/resume.pdf",
    social: [
      {
        name: "email",
        icon: SiGmail,
        username: "jeremiahcanlas@gmail.com",
        url: "jeremiahcanlas@gmail.com",
      },
      {
        name: "website",
        icon: IoGlobeOutline,
        username: "jeremiahcanlas.com",
        url: "https://jeremiahcanlas.com",
      },
      {
        name: "github",
        icon: IoLogoGithub,
        username: "jeremiahcanlas",
        url: "https://github.com/jeremiahcanlas",
      },
      {
        name: "linkedin",
        icon: IoLogoLinkedin,
        username: "in/jeremiahcanlas",
        url: "https://linkedin.com/in/jeremiahcanlas/",
      },
    ],
    technical: [
      {
        type: "Front End",
        skills: ["HTML", "CSS/SASS", "Typescript", "Javascript", "Chakra UI"],
      },
      {
        type: "Back End",
        skills: ["nodejs"],
      },
      {
        type: "Database Management",
        skills: ["MongoDB", "GraphQL", "Cloudinary"],
      },
      {
        type: "Frameworks",
        skills: ["React", "NextJS", "GatsbyJS", "Strapi", "Contentful"],
      },
      {
        type: "Version Control",
        skills: ["git"],
      },
      {
        type: "Other",
        skills: [
          "jQuery",
          "Redux",
          "npm",
          "yarn",
          "JSON",
          "Postman",
          "Styled Components",
        ],
      },
    ],
    employment: [
      {
        position: "Frontend Developer",
        company: "Quarter4 Inc.",
        location: "Toronto, ON",
        startDate: "June 2022",
        endDate: "Present",
        objectives: [
          "Design and Implemented user interface for B2B client dashboard",
          "Participated in ideation sessions to deliver the most progressive and effective user interface solutions for leading edge technology and data deliver",
          "Developed secured, high-availability, scalable web applications.",
        ],
      },
      {
        position: "Web Developer",
        company: "Independent Freelance",
        location: "Toronto, ON",
        startDate: "November 2020",
        endDate: "Present",
        objectives: [
          "Developed responsive web design for clients and testing across multiple browsers, devices, and platforms.",
          "Client requests are being delivered efficiently and on time.",
          "Created static sites using HTML, SCSS, JavaScript, and jQuery for a private healthcare company and a local esthetician.",
        ],
      },
      {
        position: "Assistant Manager",
        company: "Rogers Communications",
        location: "Toronto, ON",
        startDate: "October 2019",
        endDate: "May 2022",
        objectives: [
          "Encouraged and coached team members to surprise and delight customers and make their experiences memorable.",
          "Accounted to create and deliver business plans to meet regional, store and employment targets.",
          "Responsible for recruiting, training, and developing team members.",
        ],
      },
      // {
      //   position: "Sales Associate",
      //   company: "Fido Solutions",
      //   location: "London, ON",
      //   startDate: "September 2015",
      //   endDate: "September 2019",
      //   objectives: [
      //     "Delivered superior and consistent customer experience.",
      //     "Achieved and exceeded sales targets.",
      //     "Managed staff responsibilities and store organizations",
      //     "Handled customer issues and concerns.",
      //   ],
      // },
    ],
    projects: [
      {
        name: "Through the Woods",
        link: "throughthewoods.netlify.app",
        url: "https://throughthewoods.netlify.app",

        details: [
          "A personal blog app that tracks and highlights discovered hikes across Canada.",
          "Built using NextJS with Chakra UI, Strapi CMS backend with MongoDB and Cloudinary.",
          "Authorized users can create, read, update, and delete trail entries.",
        ],
      },
      {
        name: "Experience Rally",
        link: "experience-rally.netlify.app",
        url: "https://experience-rally.netlify.app",

        details: [
          "Built with create-react-app, styled with SCSS and animations from Framer Motion.",
          "A front-end focused ecommerce-based website that offers three subscription services for live rally races.",
          "Contains a hero page, subscription page, checkout page and confirmation page.",
        ],
      },
      {
        name: "Homepage",
        link: "jc-homepage.netlify.app",
        url: "https://jc-homepage.netlify.app",
        details: [
          "Built using GatsbyJS static site generator for ReactJS and styled with SCSS.",
          "A personal homepage with dynamic features like personalized greeting, weather, and random quotes.",
          "Homepage data is retrieved using Openweather API and Random quote generator API.",
        ],
      },
    ],
  },

  projects: [
    {
      name: "Portfolio",
      info1:
        "A personal portfolio that highlights all my work and shows my individuality as a developer. Utilizes Nextjs",
      info2: "",
      stack: [
        "NextJS",
        "ChakraUI",
        "Axios",
        "Framer Motion",
        "Formik",
        "Typescript",
      ],
      url: "https://throughthewoods.netlify.app",
      repo: "https://github.com/jeremiahcanlas/through-the-woods",
      image: prt,
      image2: prt2,
    },
    {
      name: "Through the Woods",
      info1:
        "A personal blog app that tracks and highlights explored trails. Authorized users can create, update and delete trail entries. A full CRUD application that utilizes NextJS with ChakraUI, Strapi CMS backend with MongoDB and Cloudinary.",
      info2: "",
      stack: [
        "NextJS",
        "NextAuth",
        "ChakraUI",
        "Strapi",
        "MongoDB",
        "Cloudinary",
        "Axios",
        "MapboxGL",
      ],
      url: "https://throughthewoods.netlify.app",
      repo: "https://github.com/jeremiahcanlas/through-the-woods",
      image: ttw,
    },
    {
      name: "Experience Rally",
      info1:
        "A subscription based website that offers three subscription services for live rally races. It contains a hero page along with additional information, subscription package page and a checkout page.",
      info2: "",
      stack: [
        "HTML5",
        "Javascript",
        "React",
        "Sass",
        "Framer Motion",
        "React Reveal",
        "React Responsive",
      ],
      url: "https://experience-rally.netlify.app",
      repo: "https://github.com/jeremiahcanlas/experience",
      image: rally,
    },
    {
      name: "Homepage",
      info1:
        "A custom homepage with a dynamic background, random quote generator, current weather, personalized greeting, current time & date. The data comes from openweather API and random quote generator API.",
      info2: "",
      stack: [
        "HTML5",
        "Javascript",
        "React",
        "Gatsby",
        "GraphQL",
        "Sass",
        "Axios",
        "Framer Motion",
      ],
      url: "https://jc-homepage.netlify.app",
      repo: "https://github.com/jeremiahcanlas/homepage",
      image: hp,
    },
  ],
};

export default data;
