import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gideon Adeti",
  initials: "GA",
  url: "https://gideonadeti-portfolio.vercel.app/",
  location: "Koforidua, Eastern, Ghana",
  locationLink: "https://www.google.com/maps/place/koforidua",
  description: "Full-stack web developer specializing in backend development",
  summary:
    "I'm skilled in building web applications with Express.js (backend), React.js (frontend), and Next.js (full-stack), utilizing PostgreSQL or MongoDB as databases.",
  avatarUrl: "/me.jpg",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Tailwind CSS",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gideonadeti0@gmail.com",
    tel: "+233500181208",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gideonadeti",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gideonadeti",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/gideonadeti0",
        icon: Icons.x,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "StoreDash",
      href: "",
      badges: [],
      location: "Remote",
      title: "Frontend Web Developer",
      logoUrl: "/storedash.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "Created StoreDash landing page and web app using Next.js. Implemented user management functionality within StoreDash Admin Dashboard. Enhanced existing codebase, resulting in better maintainability. Applied responsive design principles for enhanced user accessibility across devices. Presented project updates to the project manager, highlighting progress and new features",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/freelancers/~017021c12ff4a311c3?mp_source=share",
      badges: [],
      location: "Remote",
      title: "Full-Stack Web Developer",
      logoUrl: "/upwork.png",
      start: "Nov 2024",
      end: "Present",
      description: "I work as a freelance full-stack web developer on Upwork",
    },
  ],
  education: [
    {
      school: "FreeCodeCamp",
      href: "https://freecodecamp.org",
      degree: "Web Development",
      logoUrl: "/fcc.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "The Odin Project",
      href: "https://theodinproject.com",
      degree: "Web Development",
      logoUrl: "/top.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "All Nations University",
      href: "https://anu.edu.gh/",
      degree: "Bachelor of Engineering in Biomedical Engineering.",
      logoUrl: "/anu.png",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Event Timer",
      href: "https://gideonadeti-event-timer.vercel.app/",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "A web application for setting countdowns to future events and count-ups from past events.",
      technologies: [
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Prisma ORM",
        "Clerk",
        "Tailwind CSS",
        "Shadcn UI",
        "React Query & Axios",
        "Git & GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://gideonadeti-event-timer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gideonadeti/event-timer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/event-timer.png",
      video: "",
    },
    {
      title: "Task Manager",
      href: "https://gideonadeti-task-manager.vercel.app/",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "A web app for managing tasks.",
      technologies: [
        "TypeScript",
        "Next.js",
        "PostgreSQL",
        "Prisma ORM",
        "Clerk",
        "Tailwind CSS",
        "Shadcn UI",
        "React Query & Axios",
        "Git & GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://gideonadeti-task-manager.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gideonadeti/task-manager",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/task-manager.png",
      video: "",
    },
    {
      title: "Weather App",
      href: "https://gideonadeti-weather-app.vercel.app/",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description:
        "A web app for searching for the weather in a city. Features include ability to toggle between different units and modes (dark, light)",
      technologies: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "React Query & Axios",
        "Git & GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://gideonadeti-weather-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gideonadeti/weather-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/weather-app.png",
      video: "",
    },
    {
      title: "Markdown Previewer",
      href: "https://gideonadeti-markdown-previewer.netlify.app/",
      dates: "Oct 2024 - Oct 2024",
      active: true,
      description: "A web app for writing and previewing markdowns.",
      technologies: ["TypeScript", "React", "Bootstrap", "Git & GitHub"],
      links: [
        {
          type: "Website",
          href: "https://gideonadeti-markdown-previewer.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gideonadeti/markdown-previewer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/markdown-previewer.png",
      video: "",
    },
  ],
} as const;
