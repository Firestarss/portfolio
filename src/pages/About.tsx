import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/utils";
import { Link } from "react-router-dom";
import { getProfileImage } from "@/lib/files";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAnimation}
      transition={fadeInAnimation.transition}
      className="max-w-4xl mx-auto"
    >
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Florian Schwarzinger
            </h1>
            <h2 className="text-xl md:text-2xl text-primary mb-6">
              Robotics Engineer
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Specializing in autonomous systems and advanced robotic interfaces with 8+ years of experience
              designing and implementing cutting-edge solutions for industrial and research applications.
            </p>
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
          <div className="relative h-64 md:h-80 bg-muted rounded-lg overflow-hidden shadow-[0_0_0_1px_hsl(40_100%_70%/0.12),0_4px_18px_-3px_hsl(20_100%_50%/0.18)]">
            <img
              src={getProfileImage("about-hero.jpg")}
              alt="Robotics engineering workspace with advanced robotic systems and equipment"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">About Me</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Hey! I'm Florian, a robotics engineer and Olin College graduate. One of the things I enjoy most about
          robotics is that it touches a little bit of everything (mechanical, electrical, software) and I like to be
          involved in all of it. I've worked on everything from autonomous underwater drones to scientific lab
          equiptment and forest fire simulations and I'm happiest when I'm designing something in CAD, writing the
          code to make it work, and figuring out why it doesn't do what it's supposed to yet. When I'm not engineering
          things, you can usually find me spinning fire, training BJJ, playing video games with friends, or doing
          something behind the scenes in technical theater. Take a look around and check out some of my projects!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Machining</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                CNC Mill
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Injection Molding
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Welding
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Lathe
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Sheet Metal Forming
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Plasma Cutting
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                FDM & Resin Printing
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Laser Cutting
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Thermo-Forming
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Casting
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                CAM
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Programming</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Linux
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                C++
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Python
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Rust
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                GitHub / GitLab
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Java
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                OpenCV
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                ROS
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Arduino
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                MATLAB
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Software</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                SOLIDWORKS
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                OnShape
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Jira
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                TestRails
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Microsoft Office Suite
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Adobe Creative Cloud
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
