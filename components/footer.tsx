import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-muted/50 border-t border-border">
      <div className="w-full md:container md:max-w-6xl mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-sm text-muted-foreground">
              I'm Ritik Kumar, a MERN & Next.js Developer passionate about building 
              scalable, high-performance web applications with clean, production-ready code. 
              Strong foundation in Data Structures & Algorithms and problem solving.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>

            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              
              {/* Email */}
              <a
                href="mailto:singhritik7032@gmail.com"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                singhritik7032@gmail.com
              </a>

              {/* Location */}
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Ranchi, Jharkhand, India
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-4 pt-3">
                <a
                  href="https://github.com/Ritik-7032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ritik-rajput7032/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Ritik Kumar. All rights reserved.
            </p>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}