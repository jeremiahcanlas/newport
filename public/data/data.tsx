//content management
import ttw from "../../assett/ttw.png";
import rally from "../../assett/rally.png";
import hp from "../../assett/hp.png";
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
  },

  projects: [
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
