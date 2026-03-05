"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    role: "Web Development Intern",
    company: "Briscent Global LLC",
    duration: "Mar 2026 – Present",
    location: "Remote",
    achievements: [
      "Developed responsive UI using React and modern frontend tools.",
      "Built scalable APIs using Node.js and Express.",
      "Optimized UI components improving performance and load time.",
      "Collaborated with team using Git workflow and PR reviews.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind"],
  },

  {
    role: "Personal Full-Stack Projects",
    company: "Self Learning",
    duration: "2025 – Present",
    location: "India",
    achievements: [
      "Built MERN stack applications with authentication and dashboards.",
      "Solved 50+ LeetCode DSA problems improving problem-solving ability.",
      "Developed full portfolio projects with deployment.",
      "Designed modern UI systems with Tailwind and animations.",
    ],
    tech: ["React", "MongoDB", "Express", "Node", "Tailwind", "Git"],
  },
];

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section  id ="experience"
    className="relative py-24 px-6 bg-secondary/20">

      {/* Section Title */}

      <div className="text-center mb-16">
        <span className="px-4 py-1 text-sm bg-gray-200 rounded-full">
          Professional Journey
        </span>

        <h2 className="text-4xl font-bold mt-4 text-gray-800">
          Experience Timeline
        </h2>

        <p className="text-gray-500 mt-3">
          My journey as a developer and the work I've done so far
        </p>
      </div>

      {/* Timeline */}

      <div className="max-w-4xl mx-auto relative border-l-2 border-green-400">

        {experiences.map((exp, index) => {

          const open = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12 ml-10"
            >

              {/* Dot */}

              <div className="absolute -left-[11px] mt-3 w-5 h-5 bg-green-400 rounded-full border-4 border-white"></div>

              {/* Card */}

              <div className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl rounded-xl p-6">

                {/* Header */}

                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                >

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>

                    <p className="text-gray-600 mt-1">
                      {exp.company}
                    </p>

                    <div className="flex gap-4 text-sm text-gray-500 mt-2">
                      <span>{exp.duration}</span>
                      <span>{exp.location}</span>
                    </div>

                  </div>

                  <div className="text-lg text-gray-500">
                    {open ? <FaChevronUp /> : <FaChevronDown />}
                  </div>

                </div>

                {/* Expand Section */}

                <AnimatePresence>

                  {open && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >

                      {/* Achievements */}

                      <div className="mt-6">

                        <h4 className="font-semibold text-gray-700 mb-3">
                          Key Achievements
                        </h4>

                        <ul className="space-y-2 text-gray-600">
                          {exp.achievements.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="mt-2 w-2 h-2 bg-gray-400 rounded-full"></span>
                              {item}
                            </li>
                          ))}
                        </ul>

                      </div>

                      {/* Tech Stack */}

                      <div className="mt-6">

                        <h4 className="font-semibold text-gray-700 mb-3">
                          Tech Stack
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-gray-100 border rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}