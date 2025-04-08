import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiReactquery,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiSanity,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaGitSquare,
  FaGithub,
} from "react-icons/fa";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

export const aboutData = [
  {
    title: "about-me",
    info: [
      {
        infos: [
          "Hey there, i'm Bassam graduated from the faculty of ART philosophy department, I didn't find myself in this field when I was in college , last year in college, I learned Python just for fun and I found myself. found my passion in programming, when you love something you're gonna be great at it, I love coding and I do love learning, so i decided to dive more into this field, took a lot of courses, and decided to be a Front-End web developer.",
        ],
      },
    ],
  },
  {
    title: "my-skills",
    info: [
      {
        title: "Core Languages",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
        ],
      },
      {
        title: "Libraries ",
        icons: [<FaReact key="react" />, <SiNextdotjs key="next" />],
      },
      {
        title: "UI & Styling ",
        icons: [
          <SiFramer key="framer" />,
          <SiSass key="sass" />,
          <SiTailwindcss key="tailwind" />,
          <SiBootstrap key="bootstrap" />,
          "ShadCn",
        ],
      },
      {
        title: "Headless CMS",
        icons: [<SiSanity key="sanity" />],
      },
      {
        title: "Management",
        icons: [<SiRedux key="redux" />, "Socket.io"],
      },
      {
        title: "Tools",
        icons: [<FaGitSquare key="git" />, <FaGithub key="github" />],
      },
    ],
  },

  {
    title: "personal-information",
    info: [
      {
        title: "Name:",
        stage: "Bassam Elsayed Hassan",
      },

      {
        title: "Residence: ",
        stage: "Egypt/tanta",
      },
      {
        title: "Email: ",
        stage: "Bassame993@gmail.com",
      },
      {
        title: "Phone: ",
        stage: "+201065223412",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "ENS",
        stage: "2024 - Present",
        infos: [
          "I worked as a Front-End developer at ENS for 1 year, where I was responsible for developing and maintaining the company's website and web applications. I worked with a team of developers to create user-friendly interfaces and ensure that the website was responsive and accessible on all devices.",
        ],
      },
    ],
  },
];

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Adaptable",
    description:
      "Adaptable under pressure: Demonstrated strength in quickly adapting to new technologies ",
  },
  {
    icon: <RxPencil2 />,
    title: "Technical",
    description:
      "Technical expertise: Proficient in HTML5, CSS3, and JavaScript with a focus on modern frameworks such as React.js and Next.js.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Passionate frontend developer: Crafting exceptional user interfaces and creating memorable digital experiences is my forte.",
  },
  {
    icon: <RxReader />,
    title: "Versatility",
    description:
      "Versatility in tools: Well-versed in using Git & GitHub for version control, ensuring collaborative ",
  },
  {
    icon: <RxRocket />,
    title: "Learning",
    description:
      "Continuous learning: Committed to staying abreast of industry trends and enhancing skills through  online courses .",
  },
];

export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "life-post",
          path: "/life-post.vercel.app.png",
          URL: "https://life-post.vercel.app/",
        },
        {
          title: "zentry-clone",
          path: "/zentry-clone-six-tau.vercel.app.png",
          URL: "https://zentry-clone-six-tau.vercel.app/",
        },
        {
          title: "x-future",
          path: "/x-future-ecommerce.vercel.app.png",
          URL: "https://x-future-ecommerce.vercel.app/",
        },
        {
          title: "popcorn-movie",
          path: "/popcorn-movie-xi.vercel.app.png",
          URL: "https://popcorn-movie-xi.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "movie-show-case",
          path: "/movie-show-case-three.vercel.app.png",
          URL: "https://movie-show-case-three.vercel.app/",
        },
        {
          title: "Simple portfolio",
          path: "/portfolio-bice-nine-42.vercel.app.png",
          URL: "https://portfolio-bice-nine-42.vercel.app/",
        },
        {
          title: "Pokemon Cards",
          path: "/bassam-elsaied.github.io.png",
          URL: "https://bassam-elsaied.github.io/Pokemon-Cards/index.html",
        },
      ],
    },
  ],
};
