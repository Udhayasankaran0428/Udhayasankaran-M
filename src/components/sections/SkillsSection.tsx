import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    { name: "C", level: 85 },
    { name: "JAVA", level: 85},
    { name: "Python", level: 70},
    { name: "ReactJS", level: 80, category: "Frontend" },
    { name: "HTML/CSS", level: 80},
    { name: "TypeScript", level: 70, category: "Frontend" },
    { name: "Three.js", level: 50, category: "3D/Animation" },
    { name: "Framer Motion", level: 50, category: "Animation" }
  ];


  

  return (
    <section id="skills" ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            My <span className="bg-gradient-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl group hover:glow-accent transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full">
                  {skill.category}
                </span>
              </div>
              
              <div className="relative">
                <div className="w-full bg-muted rounded-full h-3 mb-2">
                  <motion.div
                    className="h-3 rounded-full bg-gradient-primary relative overflow-hidden"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                  >
                    <div className="absolute inset-0 shimmer" />
                  </motion.div>
                </div>
                <motion.span
                  className="text-sm font-medium text-primary"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons */}
        <div className="mt-16 flex justify-center">
          <motion.div
            className="grid grid-cols-4 md:grid-cols-6 gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
  
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;