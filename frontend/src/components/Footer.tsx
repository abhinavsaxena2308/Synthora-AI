import { Link } from "react-router-dom";
import { Sparkles, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Tools", href: "/tools" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
  ],
  Tools: [
    { label: "Image Generator", href: "/tools/image" },
    { label: "Logo Generator", href: "/tools/logo" },
    { label: "Video Generator", href: "/tools/video" },
    { label: "Prompt Generator", href: "/tools/prompt" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const githubLink = {
  icon: Github,
  href: "https://github.com/abhinavsaxena2308/Synthora-AI",
  label: "GitHub",
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/40 bg-background">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container relative px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center glow-primary group-hover:bg-primary/30 transition-colors">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-gradient-primary tracking-tight">SynthoraAI</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              AI-powered creative tools for everyone. Generate, create, and transform content with cutting-edge artificial intelligence.
            </p>
            {/* GitHub Link */}
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-200"
              aria-label={githubLink.label}
            >
              <Github className="h-4 w-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SynthoraAI. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="gap-1.5 text-muted-foreground hover:text-foreground"
            >
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5 rotate-[-45deg]" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
