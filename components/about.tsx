"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/ui/animated-section";
import { staggerContainer } from "@/lib/animation";
import { Code2, Lightbulb, Rocket, Brain } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building scalable, high-performance web applications using the MERN stack and Next.js with clean architecture and best practices.",
  },
  {
    icon: Brain,
    title: "Strong Problem Solving",
    description:
      "Solved 250+ DSA problems across LeetCode & GeeksforGeeks, strengthening algorithmic thinking and optimization skills.",
  },
  {
    icon: Lightbulb,
    title: "AI Integration",
    description:
      "Integrated AI capabilities like content summarization and translation using Gemini API in production-level applications.",
  },
  {
    icon: Rocket,
    title: "Product-Oriented Mindset",
    description:
      "Focused on building real-world, deployable products with authentication, payments, real-time features, and cloud integrations.",
  },
];

const iconColors = [
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-pink-500",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 px-4 bg-secondary/20 w-full overflow-x-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8"
      >
        {/* About Heading */}
        <AnimatedSection
          type="fade"
          direction="up"
          className="text-center mb-16"
        >
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            About Me
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground">
              I'm <strong>Ritik Kumar</strong>, a passionate MERN & Next.js
              Developer currently pursuing B.Tech in Electronics and
              Communication Engineering at IIIT Ranchi.
            </p>

            <p className="text-lg text-muted-foreground">
              I specialize in building full-stack web applications with secure
              authentication, payment integration, real-time systems, and cloud
              services. My focus is on writing clean, scalable, and
              production-ready code.
            </p>

            <p className="text-lg text-muted-foreground">
              With a strong foundation in Data Structures & Algorithms and a
              product-driven mindset, I aim to build impactful digital
              experiences that solve real-world problems.
            </p>
          </div>
        </AnimatedSection>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} type="scale" delay={index * 0.1}>
              <Card className="p-6 h-full hover:bg-primary/5 transition-colors">
                <item.icon
                  className={`w-10 h-10 mb-4 ${
                    iconColors[index % iconColors.length]
                  }`}
                />
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </motion.div>
    </section>
  );
}