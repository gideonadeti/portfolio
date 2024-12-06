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
    "Self-taught web developer with experience in building web applications using Next.js (front-end or full-stack) and Express.js (back-end), along with PostgreSQL or MongoDB for databases.",
  avatarUrl: "/me.jpg",
  skills: ["TypeScript", "Next.js", "Express.js", "PostgreSQL", "MongoDB"],
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

  work: [
    {
      company: "StoreDash",
      href: "",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/storedash.png",
      start: "Sep 2024",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "The Odin Project",
      href: "https://theodinproject.com",
      degree: "Web Development",
      logoUrl: "/top.png",
      start: "Apr 2024",
      end: "Jun 2024",
    },
    {
      school: "FreeCodeCamp",
      href: "https://freecodecamp.org",
      degree: "Web Development",
      logoUrl: "/fcc.png",
      start: "Jan 2023",
      end: "Apr 2024",
    },
  ],
  projects: [
    {
      title: "Personal Library",
      href: "https://gideonadeti-personal-library.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description: "A web application that helps you manage your books",
      technologies: ["TypeScript", "Next.js", "Express.js", "PostgreSQL"],
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
      technologies: ["TypeScript", "Next.js", "PostgreSQL"],
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
      technologies: ["TypeScript", "Next.js", "PostgreSQL"],
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
