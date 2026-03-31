import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/utils";
import { Link } from "react-router-dom";
import { getProfileImage } from "@/lib/files";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const skillCategories = [
    {
      title: "Programming",
      items: ["Linux", "C++", "Python", "Rust", "GitHub / GitLab", "Java", "OpenCV", "ROS", "Arduino", "MATLAB"],
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
      {/* Hero: Name, title, CTA — visible immediately */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground whitespace-nowrap">
          Florian Schwarzinger
        </h1>
        <h2 className="text-xl md:text-2xl text-primary mb-6">
          Robotics Engineer
        </h2>
        <div className="flex space-x-4 justify-center">
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
      </section>

      {/* About: Photo + text side by side */}
      <section className="mb-12 max-w-2xl mx-auto">
        <div className="rounded-lg overflow-hidden mb-8 shadow-[0_0_0_1px_hsl(40_100%_70%/0.12),0_4px_18px_-3px_hsl(20_100%_50%/0.18)]">
          <img
            src={getProfileImage("about-hero.jpg")}
            alt="Florian Schwarzinger"
            loading="lazy"
            className="w-full h-auto object-cover object-center"
          />
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Hey! I'm Florian, a robotics engineer and Olin College graduate. One of the things I enjoy most about
            robotics is that it touches a little bit of everything (mechanical, electrical, software) and I like to be
            involved in all of it. I've worked on everything from autonomous underwater drones to scientific lab
            equipment and forest fire simulations and I'm happiest when I'm designing something in CAD, writing the
            code to make it work, and figuring out why it doesn't do what it's supposed to yet.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not engineering things, you can usually find me spinning fire, training BJJ, playing video
            games with friends, or doing something behind the scenes in technical theater. Take a look around and
            check out some of my projects!
          </p>
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
