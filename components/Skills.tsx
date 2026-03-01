"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiShadcnui,
  SiVercel,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "MERN Stack", icon: <FaServer /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "shadcn/ui", icon: <SiShadcnui /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
];

export default function Skills(): JSX.Element {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-secondary/20 transition-colors duration-500"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:bg-primary/5 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-3 text-primary">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}