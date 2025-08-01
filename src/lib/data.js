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
          "passionate Front-End Developer with a unique background in Philosophy. Career began as a simple curiosity for coding during my final year at university, which quickly evolved into a true passion that completely reshaped my path. Today, I focus on creating modern, responsive, and user‑friendly websites that combine clean code with thoughtful design. Turn your vision into an interactive digital experience, let’s connect!",
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
    title: "Experience",
    info: [
      {
        title: "ENS - Front-End Developer",
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

export const projects = [
  {
    id: 1,
    title: "Coffe Bar",
    description:
      "Interactive showcase of modern web animation libraries and frameworks",
    tech: ["Next", "GSAP", "Tailwind"],
    image: "/images/coffee-menu-green.vercel.app.png",
    URL: "https://coffee-menu-green.vercel.app/",
  },
  {
    id: 7,
    title: "3d Portfolio",
    description:
      "A sleek, space-themed personal website designed to showcase the creative and technical journey of developer",
    tech: ["React", "Tailwind", "shadcn-ui", "TypeScript", "GSAP"],
    image: "/images/bassam-cosmic-portfolio.vercel.app.png",
    URL: "https://bassam-cosmic-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "X-future",
    description:
      "Practice for E-commerce website that provides product you can buy and pay",
    tech: ["Next", "Tailwind", "Sanity", "Stripe", "ShadCn"],
    image: "/images/x-future-ecommerce.vercel.app.png",
    URL: "https://x-future-ecommerce.vercel.app/en",
  },
  {
    id: 3,
    title: "Zenty clone",
    description: "Modern wep animated with gsap beautiful UI",
    tech: ["React", "Tailwindcss", "GSAP"],
    image: "/images/zentry-clone-six-tau.vercel.app.png",
    URL: "https://zentry-clone-six-tau.vercel.app/",
  },

  {
    id: 5,
    title: "Life post",
    description:
      "A wep that you can signin and see , share your posts with the world.",
    tech: ["Next.js", "React", "Tailwindcss", "Sanity", "Shadcn"],
    image: "/images/life-post.vercel.app.png",
    URL: "https://life-post.vercel.app/",
  },
  {
    id: 6,
    title: "Pokemon Card ",
    description:
      "A simple and interactive website that displays custom Pokémon cards with images, types, and stats. Built using HTML, CSS, and JavaScript. Fully responsive and visually inspired by classic Pokémon card designs.",
    tech: ["HTML", "Css", "Js"],
    image: "/images/bassam-elsaied.github.io.png",
    URL: "https://bassam-elsaied.github.io/Pokemon-Cards/index.html",
  },
];
