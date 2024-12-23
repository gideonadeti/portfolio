import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gideon Adeti",
  initials: "GA",
  url: "https://gideonadeti.vercel.app/",
  location: "Koforidua, Eastern, Ghana",
  locationLink: "https://www.google.com/maps/place/koforidua",
  description: "Web Application Developer",
  summary:
    "I'm a self-taught web application developer skilled in building web applications using technologies like TypeScript, Next.js, Express.js, PostgreSQL, and MongoDB. I'm proficient in both front-end and back-end development, with a preference for the latter. I utilized various free online resources to learn and gained experience through hands-on practice, as well as personal and collaborative projects.",
  avatarUrl: "/me.jpg",
  skills: [
    "TypeScript",
    "Next.js",
    "Shadcn UI",
    "Tailwind CSS",
    "Zustand",
    "React Query",
    "Axios",
    "Express.js",
    "Redis",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Vitest",
    "Playwright",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gideonadeti0@gmail.com",
    tel: "+233556570488",
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

  work: [],
  education: [],
  projects: [
    {
      title: "Personal Library",
      href: "https://gideonadeti-personal-library.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description: "A web application for managing books.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Shadcn UI",
        "Tailwind CSS",
        "React Query",
        "Axios",
        "Express.js",
        "Redis",
        "PostgreSQL",
        "Prisma ORM",
      ],
      links: [
        {
          type: "Website",
          href: "https://gideonadeti-personal-library.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/gideonadeti/personal-library",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/personal-library.png",
      video: "",
    },
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
        "Shadcn UI",
        "Tailwind CSS",
        "React Query",
        "Axios",
        "PostgreSQL",
        "Prisma ORM",
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
        "Shadcn UI",
        "Tailwind CSS",
        "React Query",
        "Axios",
        "PostgreSQL",
        "Prisma ORM",
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
  ],
} as const;
