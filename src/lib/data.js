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
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiSanity,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
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
          "As a Full-Stack Developer with 3 years of front-end experience and 1 year of back-end experience, I build complete web solutions from intuitive user interfaces to robust server-side logic. With a background in Philosophy, I bring a unique perspective to creating modern, accessible, and scalable applications. Let's collaborate to transform your vision into a seamless digital experience.",
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
          {
            icon: <FaHtml5 key="html" />,
            tooltip: "HTML5 - Semantic markup and structure",
          },
          {
            icon: <FaCss3 key="css" />,
            tooltip: "CSS3 - Styling and responsive design",
          },
          {
            icon: <FaJs key="js" />,
            tooltip: "JavaScript - Dynamic functionality and interactivity",
          },
        ],
      },
      {
        title: "Libraries ",
        icons: [
          {
            icon: <FaReact key="react" />,
            tooltip: "React.js - Component-based UI development",
          },
          {
            icon: <SiNextdotjs key="next" />,
            tooltip: "Next.js - Full-stack React framework",
          },
        ],
      },
      {
        title: "UI & Styling ",
        icons: [
          {
            icon: <SiFramer key="framer" />,
            tooltip: "Framer Motion - Advanced animations",
          },
          {
            icon: <SiSass key="sass" />,
            tooltip: "Sass - CSS preprocessor with advanced features",
          },
          {
            icon: <SiTailwindcss key="tailwind" />,
            tooltip: "Tailwind CSS - Utility-first CSS framework",
          },
          {
            icon: <SiBootstrap key="bootstrap" />,
            tooltip: "Bootstrap - Responsive UI framework",
          },
          { icon: "ShadCn", tooltip: "ShadCn/ui - Modern component library" },
        ],
      },
      {
        title: "Backend",
        icons: [
          {
            icon: <SiNodedotjs key="node" />,
            tooltip: "Node.js - JavaScript runtime for server-side development",
          },
          {
            icon: <SiExpress key="express" />,
            tooltip: "Express.js - Web framework for Node.js APIs",
          },
          {
            icon: "SQL Server",
            tooltip: "SQL Server - Relational database management",
          },
          {
            icon: <SiMongodb key="mongodb" />,
            tooltip: "MongoDB - NoSQL document database",
          },
        ],
      },
      {
        title: "Headless CMS",
        icons: [
          {
            icon: <SiSanity key="sanity" />,
            tooltip: "Sanity - Headless CMS for content management",
          },
        ],
      },
      {
        title: "Management",
        icons: [
          {
            icon: <SiRedux key="redux" />,
            tooltip: "Redux - State management for React apps",
          },
          {
            icon: "Socket.io",
            tooltip: "Socket.io - Real-time bidirectional communication",
          },
        ],
      },
      {
        title: "Tools",
        icons: [
          {
            icon: <FaGitSquare key="git" />,
            tooltip: "Git - Version control system",
          },
          {
            icon: <FaGithub key="github" />,
            tooltip: "GitHub - Code hosting and collaboration",
          },
        ],
      },
    ],
  },

  {
    title: "Experience",
    info: [
      {
        title: "ENS - Full-Stack Developer",
        stage: "2024 - Present",
        infos: [
          "Working as a Full-Stack Developer at ENS, building and maintaining the company's website and web applications. On the front end, I create responsive and accessible user interfaces with React and Next.js. On the back end, I develop REST APIs with Node.js and Express, and work with SQL Server Or MongoDB .",
        ],
      },
      {
        title: "Freelance - Full-Stack Developer",
        stage: "2025 - Present",
        infos: [
          "Working independently as a freelance Full-Stack Developer for 1 year, delivering custom web applications for clients. I handle the full project lifecycle — from UI design and front-end development with React and Next.js to back-end APIs with Node.js and Express, and database setup with SQL Server Or MongoDB.",
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
      "Technical expertise: 3 years in front-end (React.js, Next.js) and 1 year in back-end (Node.js, Express, SQL Server, MongoDB).",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Full-stack development: Building end-to-end web solutions — from polished user interfaces to reliable APIs and database design.",
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

export const featuredProjects = [
  {
    id: "ensmenu",
    title: "ENSmenu",
    badge: "Main Project",
    type: "Full-Stack",
    description:
      "A complete digital menu platform for restaurants and cafes. Customers scan a QR code to browse an interactive menu, while restaurant owners manage categories, products, prices, and analytics from a powerful dashboard. Includes a React Native staff app for real-time order handling from receipt to delivery.",
    tech: ["Next.js", "Node.js", "React Native", "Express", "SQL Server"],
    video: "/video/EnsMenu.mp4",
    URL: "https://www.ensmenu.com/",
    highlight: true,
  },
  {
    id: "lapipstore",
    title: "Lapip Store",
    badge: "E-Commerce",
    type: "Full-Stack",
    description:
      "A full e-commerce platform with product catalog, cart, and checkout flow. Built with Next.js on the front end and Node.js on the back end to deliver a smooth, responsive shopping experience.",
    tech: ["Next.js", "Node.js", "Express", "SQL Server "],
    video: "/video/LapipStore.mp4",
    URL: "https://lapip.net/ar",
    highlight: false,
  },
  {
    id: "morsh-d",
    title: "Morsh-D",
    badge: "E-Commerce",
    type: "Static",
    description:
      "A modern static e-commerce storefront built entirely with Next.js. Focused on clean product presentation, strong brand identity, and fast performance without a custom back end.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    video: "/video/morshed.mp4",
    URL: "https://morsh-d.com/",
    highlight: false,
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
      "A sleek, space-themed personal website designed to showcase the creative and technical journey ",
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
      "A simple and interactive website that displays custom Pokémon cards with images, types, and stats. Built using HTML, CSS, and JavaScript. ",
    tech: ["HTML", "Css", "Js"],
    image: "/images/bassam-elsaied.github.io.png",
    URL: "https://bassam-elsaied.github.io/Pokemon-Cards/index.html",
  },
];
