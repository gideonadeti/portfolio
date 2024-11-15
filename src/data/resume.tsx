import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gideon Adeti",
  initials: "GA",
  url: "https://gideonadeti.vercel.app/",
  location: "Koforidua, Eastern, Ghana",
  locationLink: "https://www.google.com/maps/place/koforidua",
  description: "Web Developer",
  summary:
    "I have experience developing web applications with Next.js (front-end or full-stack) and Express.js (back-end), using PostgreSQL or MongoDB for databases. I build responsive front-ends and secure back-ends, integrating them with RESTful APIs. I write clean, maintainable code and strive to meet project deadlines. Let's work together to bring your ideas to life!",
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
    "Jest",
    "React Testing Library",
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
      title: "Front-end Web Developer",
      logoUrl: "/storedash.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "Developed and styled UI components to match Figma designs. Ensured responsiveness across desktops, tablets, and smartphones. Integrated front-end with back-end using React Query and Axios. Collaborated with the team using Git and GitHub.",
    },
    {
      company: "Upwork",
      href: "https://www.upwork.com/freelancers/~017021c12ff4a311c3?mp_source=share",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/upwork.png",
      start: "Nov 2024",
      end: "Present",
      description: "Freelance on Upwork",
    },
  ],
  education: [
    {
      school: "The Odin Project",
      href: "https://theodinproject.com",
      degree: "Web Development",
      logoUrl: "/top.png",
      start: "Mar 2024",
      end: "Jun 2024",
    },
    {
      school: "FreeCodeCamp",
      href: "https://freecodecamp.org",
      degree: "Web Development",
      logoUrl: "/fcc.png",
      start: "Nov 2023",
      end: "Mar 2024",
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
      description: "A web application for managing tasks.",
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
      description: "A web application for searching for the weather in a city.",
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
      description: "A web application for writing and previewing markdowns.",
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
