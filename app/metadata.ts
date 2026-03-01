import { Metadata } from "next";

export const siteConfig = {
  name: "Ritik Kumar",
  title: "Ritik Kumar - Software Developer | Full Stack Developer",
  description:
    "Ritik Kumar is a passionate Software Developer and Full Stack Developer specializing in building scalable, user-centric web applications. With strong expertise in modern frontend and backend technologies, Ritik Kumar focuses on creating efficient, innovative, and impactful digital solutions.",
  url: "https://ritik-rajput7032.vercel.app",
  ogImage: "https://ritik-rajput7032.vercel.app/Ritik.png",
  links: {
    github: "https://github.com/Ritik-7032",
    linkedin: "https://www.linkedin.com/in/ritik-rajput7032/",
    instagram: "https://www.instagram.com/_ritik_singh_2003/",
    twitter: "https://x.com/home",
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Ritik Kumar",
    "Ritik Kumar Developer",
    "Ritik Kumar Full Stack Developer",
    "Software Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "MERN Stack Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ritikrajput7032", // Change if you have actual handle
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },
};