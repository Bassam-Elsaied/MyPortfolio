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
  SiSupabase,
  SiSocketdotio,
  SiShadcnui,
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
  FaDatabase,
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
          "As a Full-Stack Developer with 3 years of front-end experience and 1 year of back-end experience, I build complete web solutions from intuitive user interfaces to robust server-side logic. I focus on creating modern, accessible, and scalable applications. Let's collaborate to transform your vision into a seamless digital experience.",
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
            tooltip: "HTML5 ",
          },
          {
            icon: <FaCss3 key="css" />,
            tooltip: "CSS3 ",
          },
          {
            icon: <FaJs key="js" />,
            tooltip: "JavaScript ",
          },
        ],
      },
      {
        title: "Libraries ",
        icons: [
          {
            icon: <FaReact key="react" />,
            tooltip: "React.js ",
          },
          {
            icon: <SiNextdotjs key="next" />,
            tooltip: "Next.js ",
          },
        ],
      },
      {
        title: "UI & Styling ",
        icons: [
          {
            icon: <SiFramer key="framer" />,
            tooltip: "Framer Motion ",
          },
          {
            icon: <SiSass key="sass" />,
            tooltip: "Sass ",
          },
          {
            icon: <SiTailwindcss key="tailwind" />,
            tooltip: "Tailwind CSS ",
          },
          {
            icon: <SiBootstrap key="bootstrap" />,
            tooltip: "Bootstrap ",
          },
          {
            icon: <SiShadcnui key="shadcn" />,
            tooltip: "ShadCn/ui ",
          },
        ],
      },
      {
        title: "Backend",
        icons: [
          {
            icon: <SiNodedotjs key="node" />,
            tooltip: "Node.js ",
          },
          {
            icon: <SiExpress key="express" />,
            tooltip: "Express.js ",
          },
          {
            icon: <FaDatabase key="sqlserver" />,
            tooltip: "SQL Server ",
          },
          {
            icon: <SiMongodb key="mongodb" />,
            tooltip: "MongoDB ",
          },
          {
            icon: <SiSupabase key="supabase" />,
            tooltip: "Supabase - Backend as a service with PostgreSQL",
          },
        ],
      },
      {
        title: "Headless CMS",
        icons: [
          {
            icon: <SiSanity key="sanity" />,
            tooltip: "Sanity ",
          },
        ],
      },
      {
        title: "Management",
        icons: [
          {
            icon: <SiRedux key="redux" />,
            tooltip: "Redux ",
          },
          {
            icon: <SiSocketdotio key="socketio" />,
            tooltip: "Socket.io ",
          },
        ],
      },
      {
        title: "Tools",
        icons: [
          {
            icon: <FaGitSquare key="git" />,
            tooltip: "Git ",
          },
          {
            icon: <FaGithub key="github" />,
            tooltip: "GitHub ",
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
          "Working as a Full-Stack Developer at ENS, building and maintaining the company's website and web applications. On the front end, I create responsive and accessible user interfaces with React and Next.js. On the back end, I develop REST APIs with Node.js and Express, and work with SQL Server, MongoDB, and Supabase.",
        ],
      },
      {
        title: "Freelance - Full-Stack Developer",
        stage: "2025 - Present",
        infos: [
          "Working independently as a freelance Full-Stack Developer for 1 year, delivering custom web applications for clients. I handle the full project lifecycle — from UI design and front-end development with React and Next.js to back-end APIs with Node.js and Express, and database setup with SQL Server, MongoDB, and Supabase.",
        ],
      },
    ],
  },
];

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Full-Stack Development",
    description:
      "End-to-end web applications — responsive front ends with React & Next.js, REST APIs with Node.js & Express, and database design with SQL Server, MongoDB, and Supabase.",
    tags: ["React", "Next.js", "Node.js", "Express", "Supabase"],
  },
  {
    icon: <RxPencil2 />,
    title: "Front-End Development",
    description:
      "Modern, accessible interfaces with React, Next.js, Tailwind CSS, and smooth animations. 3+ years building fast, user-focused experiences.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
  },
  {
    icon: <RxCrop />,
    title: "Back-End & APIs",
    description:
      "Scalable server-side logic, authentication, and database integration. Experience with Node.js, Express, SQL Server, MongoDB, and Supabase.",
    tags: ["Node.js", "Express", "Supabase", "MongoDB"],
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
