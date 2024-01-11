//content management
import ttw from "../../assett/ttw.png";
import rally from "../../assett/rally.png";
import hp from "../../assett/hp.png";
import prt from "../../assett/prt.png";
import prt2 from "../../assett/prt2.png";
import nty1 from "../../assett/nty1.png";
import nty2 from "../../assett/nty2.png";
import { SiGmail } from "react-icons/si";
import { IoGlobeOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const data = {
  hero: {
    intro: "Hello, my name is",
    name: "Jeremiah",
    info: "I am a front end developer",
    infoDark: "with pixel perfect approach✨",
  },

  about: {
    title: "A little bit more about me...",
    paraOne:
      "Greetings! I'm Jeremiah, a dedicated front-end web developer driven by an insatiable curiosity for learning and a passion for creativity.",
    paraTwo:
      "My commitment to perfecting even the minutest details stems from a love for both the art and science of coding. Beyond the screen, I find solace and inspiration in challenging, lengthy hikes—each trail, a unique journey requiring patience and discipline, qualities that echo in my approach to crafting seamless and aesthetically pleasing web solutions.",
    paraThree:
      "With a solid foundation in front-end & back-end development, I specialize in solving complex problems with elegantly simple solutions, all while embracing the intensity and mindfulness cultivated on the trails.",
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
        skills: ["ReactJS", "NextJS", "GatsbyJS", "Strapi", "Contentful"],
      },
      {
        type: "Version Control",
        skills: ["git"],
      },
      {
        type: "Other",
        skills: [
          "RESTFUL API",
          "Lodash",
          "Socket.io",
          "jQuery",
          "Redux",
          "npm",
          "nvm",
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
          "Designed and implemented the user interface for a B2B client dashboard, focusing on delivering progressive and effective solutions for cutting-edge technology and data delivery.",
          "Actively participated in ideation sessions to contribute to innovative user interface solutions.",
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
          "Developed responsive web designs for clients, ensuring compatibility across multiple browsers, devices, and platforms.",
          "Efficiently delivered client requests within established timelines.",
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
          "Coached and motivated team members to provide exceptional customer experiences.",
          "Developed and executed business plans to achieve regional, store, and employment targets.",
          "Responsible for recruiting, training, and developing team members.",
        ],
      },
    ],
    projects: [
      {
        name: "Newty",
        link: "newty.netlify.app",
        url: "https://newty.vercel.app",

        details: [
          "Focus timer based on the Pomodoro Technique, built using NextJS with Chakra UI, and Redux for state management.",
          "Encourages effective time management and productivity.",
        ],
      },
      {
        name: "Through the Woods",
        link: "throughthewoods.netlify.app",
        url: "https://throughthewoods.netlify.app",

        details: [
          "Personal blog app tracking and highlighting discovered hikes across Canada.",
          "Built using NextJS, Chakra UI, Strapi CMS backend with MongoDB, and Cloudinary.",
          "Authorized users can create, read, update, and delete trail entries.",
        ],
      },
      {
        name: "Experience Rally",
        link: "experience-rally.netlify.app",
        url: "https://experience-rally.netlify.app",

        details: [
          "Front-end focused ecommerce-based website built with create-react-app, styled with SCSS, and animations from Framer Motion.",
          "Offers three subscription services for live rally races, featuring a hero page, subscription page, checkout page, and confirmation page.",
        ],
      },
      {
        name: "Homepage",
        link: "jc-homepage.netlify.app",
        url: "https://jc-homepage.netlify.app",
        details: [
          "Personal homepage built using GatsbyJS static site generator for ReactJS, styled with SCSS.",
          "Features dynamic elements like personalized greeting, weather information, and random quotes.",
          "Retrieves data using Openweather API and Random quote generator API.",
        ],
      },
    ],
  },

  projects: [
    {
      name: "Newty",
      info1:
        'Discover Newty, a dynamic focus timer rooted in the Pomodoro Technique—a time management system designed to empower individuals to collaborate effectively with time rather than resist it. Unleash your productivity as work periods are thoughtfully organized into manageable chunks, each interspersed with rejuvenating breaks, aptly referred to as "pomodoros". Embrace a harmonious workflow that maximizes concentration and enhances overall efficiency through this innovative time management solution.',
      info2: "",
      stack: ["NextJS", "Redux", "ChakraUI", "Framer Motion", "Typescript"],
      url: "https://newty.vercel.app",
      repo: "https://github.com/jeremiahcanlas/newty",
      image: nty2,
      image2: nty1,
    },
    {
      name: "Portfolio",
      info1:
        "An immersive showcase demonstrating my proficiency in ReactJS, NextJS, and Chakra UI, capturing the essence of diverse projects—from dynamic e-commerce sites to personalized homepages. Explore the intersection of design and functionality, showcasing my unique approach to problem-solving and user-centric development.",
      info2: "",
      stack: [
        "NextJS",
        "ChakraUI",
        "Axios",
        "Framer Motion",
        "Formik",
        "Typescript",
      ],
      url: "https://jeremiahcanlas.com",
      repo: "https://github.com/jeremiahcanlas/newport",
      image: prt,
      image2: prt2,
    },
    {
      name: "Through the Woods",
      info1:
        "Embark on a journey through my personal blog app, meticulously designed to track and highlight discovered trails. Engage with a full CRUD application, empowering authorized users to seamlessly create, update, and delete trail entries. This project harmoniously blends NextJS with Chakra UI, complemented by a Strapi CMS backend powered by MongoDB and Cloudinary, showcasing the synergy of innovation and functionality.",
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
        "Embark on an exhilarating journey with Experience Rally, a subscription-based website offering three distinct subscription services for live rally races. Navigate through a captivating hero page filled with immersive content, explore detailed subscription packages, and seamlessly proceed to checkout. Immerse yourself in the world of rally racing through this dynamic web platform that combines information, subscription options, and a user-friendly checkout experience.",
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
        "Experience a personalized touch with the Homepage project—a custom homepage featuring a dynamic background, a random quote generator, current weather updates, personalized greetings, and real-time display of the current time and date. The magic lies in data sourced from the OpenWeather API and a Random Quote Generator API, creating a dynamic and engaging user experience that combines aesthetics with real-time information.",
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
