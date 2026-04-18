import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/utils";
import { Link } from "react-router-dom";
import { getProfileImage } from "@/lib/files";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  document.title = "Florian Schwarzinger | Portfolio";
  const skillCategories = [
    {
      title: "Programming",
      items: ["Linux", "C++", "Python", "Rust", "Java", "OpenCV", "ROS", "Arduino", "MATLAB"],
    },
    {
      title: "Machining",
      items: [
        "CNC Mill",
        "Injection Molding",
        "Welding",
        "Lathe",
        "Sheet Metal Forming",
        "Plasma Cutting",
        "FDM & Resin Printing",
        "Laser Cutting",
        "Thermo-Forming",
        "Casting",
        "CAM",
      ],
    },
    {
      title: "Software",
      items: ["SOLIDWORKS", "OnShape", "Jira", "TestRails", "Microsoft Office Suite", "Adobe Creative Cloud"],
    },
    {
      title: "Infrastructure",
      items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Helm", "GitHub / GitLab"],
    },
  ] as const;

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAnimation}
      transition={fadeInAnimation.transition}
      className="max-w-4xl mx-auto"
    >
      {/* Name & Title */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
          Florian Schwarzinger
        </h1>
        <h2 className="text-xl md:text-2xl text-primary">
          Robotics Engineer
        </h2>
      </div>

      {/* About: Text left, photo + buttons right */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hey! I'm Florian. I currently work as an SDET at Pickle Robot Company, where I build automation test infrastructure and develop tools for both hardware and software testing. One of the things I enjoy most about
              robotics is that it touches a little bit of everything (mechanical, electrical, software) and I like to be
              involved in all of it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not engineering things, you can usually find me spinning fire, training BJJ, playing video
              games with friends, or doing something behind the scenes in technical theater. Take a look around and
              check out some of my projects!
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-lg overflow-hidden shadow-[0_0_0_1px_hsl(40_100%_70%/0.12),0_4px_18px_-3px_hsl(20_100%_50%/0.18)] w-full max-w-md bg-muted/20">
              <img
                src={getProfileImage("about-hero.jpg")}
                alt="Florian Schwarzinger"
                loading="eager"
                className="w-full h-auto object-cover object-center opacity-0 transition-opacity duration-300"
                onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
              />
            </div>
            <div className="flex space-x-4">
              <Button asChild variant="hero" size="lg" className="text-base">
                <Link to="/projects">
                  View Projects
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg" className="text-base">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Featured Projects */}
      <section className="mb-12">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-bold inline-block border-b-2 border-primary pb-2">Featured Projects</h2>
          <Button asChild variant="hero" size="sm" className="text-sm">
            <Link to="/projects">
              Explore All {projects.filter((p) => p.showInProjects !== false).length} Projects <ArrowRight size={14} className="ml-1" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {["autonomous-submersible-rov", "flybox-redesign"].map((id) => {
            const project = projects.find((p) => p.id === id);
            if (!project) return null;
            return (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group flex flex-col sm:flex-row rounded-lg border border-border overflow-hidden hover:border-primary/100 hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="sm:w-64 sm:min-w-64 sm:h-48 flex-shrink-0 overflow-hidden bg-muted/20">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
                    className="object-cover w-full h-48 transition-all duration-300 group-hover:scale-105 opacity-0"
                    onLoad={(e) => e.currentTarget.classList.replace('opacity-0', 'opacity-100')}
                  />
                </div>
                <div className="py-3 px-4 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
                    <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-primary/10 text-muted-foreground rounded-full border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Separator className="mb-12" />

      {/* Skills: Compact chip/badge layout */}
      <section>
        <h2 className="text-2xl font-bold mb-8 inline-block border-b-2 border-primary pb-2">Skills & Expertise</h2>
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold mb-3 text-foreground text-lg">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-foreground border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default About;
