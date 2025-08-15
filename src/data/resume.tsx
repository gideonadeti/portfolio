import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Gideon Adeti",
  initials: "GA",
  url: "https://gideonadeti.vercel.app",
  location: "Koforidua, Eastern Region, Ghana",
  locationLink: "https://www.google.com/maps/place/koforidua",
  description: "Full-Stack Web Developer",
  summary:
    "Hi there! I'm a Full-Stack Developer experienced in building, deploying, and maintaining web applications using technologies like NestJS, Next.js, PostgreSQL, MongoDB, Docker, and AWS. I specialize in backend, am proficient in frontend, and have a solid foundation in DevOps.",
  avatarUrl: "https://avatars.githubusercontent.com/u/178742105",
  skills: [
    "TypeScript",
    "NestJS",
    "Next.js",
    "Shadcn UI",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Redis",
    "Jest",
    "Playwright",
    "Postman",
    "Docker",
    "Docker Compose",
    "GitHub Actions",
    "AWS",
    "Vercel",
    "Render",
    "NGINX",
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
  work: [
    {
      company: "StoreDash",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl: "/storedash.png",
      start: "Sep 2024",
      end: "Apr 2025",
      description:
        "At StoreDash, I worked across four projects: the company's landing site, the frontends of the Admin and Distributor web apps, and the backend microservices. I focused on applying best practices to improve architecture, enhance performance, and deliver new features. This experience allowed me to apply knowledge from previous curricula and ongoing learning in a real-world B2B distribution solution. You can read more about my experience here on my LinkedIn profile.",
    },
    {
      company: "Exinn Digital Technology",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQGZvxAauw_4TA/company-logo_200_200/company-logo_200_200/0/1736004459142/exinn_digital_technology_logo?e=1758153600&v=beta&t=0akSB6X2ztNP5Tm6FdQRNclshh8uSdd5fqz29ZkfnWA",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "At Exinn Digital Technology, I worked on Medico Ágil, a healthcare platform that leverages AI to automate and optimize daily workflows for doctors and healthcare providers. I contributed across both the frontend and backend, ensuring API reliability, enhancing the user experience, and improving developer efficiency. This experience strengthened my backend development skills with NestJS, provided hands-on experience in applying AI to healthcare, and immersed me in a fast-paced Agile environment. You can read more about my experience here on my LinkedIn profile.",
    },
    {
      company: "UNIVERSAL PHOENIX GROUP LLC",
      href: "",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQHQHYD8NNYczg/company-logo_200_200/company-logo_200_200/0/1631365774042?e=1758153600&v=beta&t=Ez5uxTyrQ2SbzWFHCMMPVuwH4OwpGQZVr2yWY9a_K88",
      start: "Dec 2024",
      end: "Feb 2025",
      description:
        "At UPG LLC, I was part of the web development team working on IndE-Book, a digital publishing platform that empowers indie authors with tools for monetization, community building, and creative control. I focused on building core features, improving performance, and elevating the user experience on the platform. This experience helped me take ownership of my work, collaborate across teams, and build confidence as a full-stack developer. You can read more about my experience here on my LinkedIn profile.",
    },
  ],
  education: [
    {
      school: "Developer Roadmaps",
      href: "https://roadmap.sh",
      degree: "Software Engineering",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQHoK9C7cm1dJA/company-logo_200_200/company-logo_200_200/0/1654163121594?e=1758153600&v=beta&t=wu98nQ7fcIgu6nQEW4P4n7nfUDwpHsPmmL8dvTh5BuA",
      start: "Sep 2024",
      end: "Dec 2024",
    },
    {
      school: "The Odin Project",
      href: "https://theodinproject.com",
      degree: "Web Development",
      logoUrl: "/top.png",
      start: "May 2024",
      end: "Aug 2024",
    },
    {
      school: "freeCodeCamp",
      href: "https://freecodecamp.org",
      degree: "Full-Stack Development",
      logoUrl: "/fcc.png",
      start: "Jan 2024",
      end: "Apr 2024",
    },
  ],
  projects: [],
} as const;
