"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EduTom – E-Commerce Platform",
    description:
      "A scalable full-stack e-commerce system supporting digital & physical products with secure checkout.",
    image: "/edutom.png",
    features: [
      "Secure Stripe payments",
      "Clerk authentication",
      "Cloudinary media storage",
      "Rental product support",
      "Optimized state management"
    ],
    tech: ["Next.js", "MongoDB", "Stripe", "Clerk", "Tailwind"],
    demo: "https://edutom-am11ymtam-ritik-7032s-projects.vercel.app/",
    github: "https://github.com/Ritik-7032/EduTom",
  },
  {
    title: "CurioBlog – AI Blog System",
    description:
      "AI-powered markdown blogging platform with intelligent summaries and multilingual support.",
    image: "/curioblog.png",
    features: [
      "Gemini AI summaries",
      "Smart tag filtering",
      "Stripe creator support",
      "SEO optimized routing",
      "Automated email notifications"
    ],
    tech: ["Next.js", "MongoDB", "Gemini API", "Stripe", "Tailwind"],
    demo: "https://blog-app-liard.vercel.app/",
    github: "https://github.com/Ritik-7032/blog-app",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section  id="projects"
    className="relative py-28 bg-secondary/20 text-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px]  blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/20 blur-[120px] rounded-full" />

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
       

        <h2 className="text-5xl font-extrabold mt-4">
          Featured{" "}
          <span className="bg-secondary/20">
            Projects
          </span>
        </h2>

        <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
          Explore my latest work showcasing modern web technologies and creative solutions.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto px-6">

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >

            {/* Left Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
              <Image
                src={projects[current].image}
                alt={projects[current].title}
                width={900}
                height={600}
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">

              <span className="px-4 py-1 text-sm border border-black rounded-full text-gray-900">
                Web Application
              </span>

              <h3 className="text-4xl font-bold">
                {projects[current].title}
              </h3>

              <p className="text-gray-800 text-lg">
                {projects[current].description}
              </p>

              {/* Features */}
              <div>
                <h4 className="text-gray-800 font-semibold mb-3">
                  Key Features
                </h4>

                <ul className="space-y-2 text-black">
                  {projects[current].features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {projects[current].tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <Button asChild className="bg-cyan-800 hover:bg-cyan-400">
                  <a href={projects[current].demo} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Preview
                  </a>
                </Button>

                <Button asChild variant="outline">
                  <a href={projects[current].github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur hover:bg-white/20 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur hover:bg-white/20 transition"
        >
          <ChevronRight />
        </button>

      </div>
    </section>
  );
}