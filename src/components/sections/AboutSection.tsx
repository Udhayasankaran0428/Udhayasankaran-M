import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  


  return (
    <section id="about" ref={ref} className="py-20 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary">About me</h3>
              <p className="text-muted-foreground mb-4">
              👋 Hello, I'm Udhaya Sankaran M. My fascination with technology began with a simple question: how can we make everyday objects smarter? This curiosity is what drives me as I pursue my Computer Science and Engineering (IoT) degree, where I currently maintain a CGPA of 7.3(till 5th). I thrive on bridging the gap between hardware and software, using tools like Arduino and ESP32 alongside languages like Python and Java to build intelligent systems.

From designing user interfaces in Figma to developing full-stack applications with React and Spring Boot, my goal is always the same: to create solutions that are not just powerful, but also beautiful and intuitive. Whether I'm competing in a hackathon or developing a project like my Online Skill Assessment System, I'm always excited to take on a new challenge.
              </p>
              <p className="text-muted-foreground">
                My approach combines technical expertise with creative design thinking, 
                resulting in applications that are both powerful and beautiful.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Experience</h3>
              <p className="text-muted-foreground">
              Internship • Connect Infosystem<br /> 
              Web Designing & Development June 2024 – July 2024 <br />
              <br />
              Developed a full‑featured e‑commerce site for computer accessories.
              Designed responsive and intuitive UI/UX for easy navigation.
              Implemented using HTML, CSS & JavaScript for scalability.
                Performed cross‑browser testing and debugging.
              </p>
            </div>
          </motion.div>
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="space-y-6"
>
<h3 className="text-2xl font-semibold text-glow">
  📜 <span className="bg-gradient-primary bg-clip-text text-transparent">Certificates</span>
</h3>

  <div className="grid sm:grid-cols-2 gap-4">
    {/* Example Certificate Cards */}
    <a
      href="/certificates/IBM DATATHON.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-border rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      IBM Datathon (Participation)
    </a>
    <a
      href="/certificates/Web Development Internship.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-border rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      Web Development Internship
    </a>
    <a
      href="/certificates/Introduction to Digital Logic Circuits.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-border rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      Introduction to Digital Logic Circuits
    </a>
    <a
      href="/certificates/Architecting-Smart-IOT-Devices-Coursera.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-border rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      Architecting Smart IoT Devices
    </a>
    <a
      href="/certificates/ChatGPT for Beginners.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-border rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      ChatGPT for Beginners
    </a>
    <a
      href="/certificates/Project Management.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-border rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      Project Management
    </a>
    <a
      href="/certificates/Basics of Computer Networks.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-border rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      Basics of Computer Networks
    </a>
    <a
      href="/certificates/Blockchain Process.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 border border-border rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      Blockchain Process
    </a>
  </div>
</motion.div>


          {/* Right side - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;