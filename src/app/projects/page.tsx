import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export const metadata = {
  title: "Projects",
  description:
    "A collection of my web applications, full-stack projects, and software engineering work.",
};

const BLUR_FADE_DELAY = 0.02;

export default function ProjectsPage() {
  return (
    <section className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              My Projects
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my latest work
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple websites to
              complex web applications. Here are a few of my favorites.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {DATA.projects.map((project, id) => (
          <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 2 + id * 0.05}>
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
