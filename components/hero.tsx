"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Globe, Search, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const profileRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  useEffect(() => {
    const profile = profileRef.current;
    if (!profile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = profile.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      profile.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${y * -10}deg)
        translateZ(10px)
      `;
    };

    const handleMouseLeave = () => {
      profile.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0px)
      `;
    };

    profile.addEventListener("mousemove", handleMouseMove);
    profile.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      profile.removeEventListener("mousemove", handleMouseMove);
      profile.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex flex-col md:justify-center items-center pt-24 md:pt-16 pb-8 px-4 w-full overflow-x-hidden"
    >
      <div className="container w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-6 lg:px-8">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              MERN Stack Developer
            </span>
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              DSA Enthusiast
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="block text-primary">Hi, I'm Ritik Kumar</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-lg mx-auto md:mx-0">
            I'm a passionate MERN & Next.js Developer who loves building scalable,
            high-performance web applications. With strong problem-solving skills
            and a deep interest in Data Structures & Algorithms, I focus on writing
            clean, efficient, and production-ready code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <Button
              size="lg"
              className="px-6 py-3 h-auto bg-cyan-400 hover:bg-cyan-300 flex items-center gap-2 text-lg"
              asChild
            >
              <a href="#projects">
                View Project
                <Rocket className="h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-6 py-3 h-auto text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-lg group"
              asChild
            >
              <a href="https://drive.google.com/file/d/19tKkGAjtMt5DORebY-lkB-_yU8raDhzi/view?usp=sharing" target="_blank">
                Download Resume
                <Download className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0">
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Code className="h-6 w-6 text-green-400 mb-2" />
              <span className="text-sm font-medium">MERN</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Globe className="h-6 w-6 text-sky-400 mb-2" />
              <span className="text-sm font-medium">Next.js</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-card">
              <Search className="h-6 w-6 text-yellow-400 mb-2" />
              <span className="text-sm font-medium">DSA</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <div
            ref={profileRef}
            className="
              relative
              w-72 h-72
              sm:w-80 sm:h-80
              md:w-96 md:h-96
              lg:w-[420px] lg:h-[520px]
              rounded-full
              overflow-hidden
              transition-all
              duration-300
              shadow-xl
              hover:shadow-2xl
            "
          >
            <Image
              src="/ritik.jpeg"
              alt="Ritik Kumar Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 animate-bounce"
      >
        <Button variant="ghost" size="icon" aria-label="Scroll down" asChild>
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}