import type React from "react";
import "@/app/globals.css";
import { defaultMetadata, siteConfig } from "./metadata";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteConfig.url}/#person`,
                  name: "Ritik Kumar",
                  givenName: "Ritik",
                  familyName: "Kumar",
                  description:
                    "Ritik Kumar is a Software Developer and Full Stack Developer specializing in scalable, user-centric web applications using modern frontend and backend technologies.",
                  image: {
                    "@type": "ImageObject",
                    "@id": `${siteConfig.url}/#personImage`,
                    url: siteConfig.ogImage,
                    height: 800,
                    width: 800,
                    caption: "Ritik Kumar",
                  },
                  sameAs: [
                    siteConfig.links.github,
                    siteConfig.links.linkedin,
                    siteConfig.links.instagram,
                    siteConfig.links.twitter,
                  ],
                  jobTitle: [
                    "Software Developer",
                    "Full Stack Developer",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteConfig.url}/#website`,
                  url: siteConfig.url,
                  name: siteConfig.title,
                  description: siteConfig.description,
                  publisher: {
                    "@id": `${siteConfig.url}/#person`,
                  },
                },
              ],
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}