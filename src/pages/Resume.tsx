import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInAnimation } from "@/lib/utils";

const Resume = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume-florian-schwarzinger.pdf`;

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAnimation}
      transition={fadeInAnimation.transition}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume</h1>
      <p className="text-muted-foreground mb-8">
        Download my resume to learn more about my skills, experience, and qualifications.
      </p>

      <div className="grid gap-6">
        <Card className="bg-muted/10 border border-border overflow-hidden">
          <CardContent className="p-0 h-[600px] overflow-hidden">
            <object
              data={resumeUrl}
              type="application/pdf"
              className="w-full h-full border-0"
            >
              <p className="p-4 text-center">
                Your browser does not support PDFs. Download the resume{" "}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-primary"
                >
                  here
                </a>
                .
              </p>
            </object>
          </CardContent>
        </Card>

        <Card className="bg-muted/20 border border-border">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Florian Schwarzinger - Resume</h2>
            <p className="text-muted-foreground mb-6">
              This resume highlights my experience in robotics engineering and automation.
            </p>
            <Button asChild>
              <a
                href={resumeUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2" />
                Download Resume (PDF)
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.main>
  );
};

export default Resume;
