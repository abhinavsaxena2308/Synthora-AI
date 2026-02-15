import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Tools", href: "/tools" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  Tools: [
    { label: "Image Generator", href: "/tools/image" },
    { label: "Logo Generator", href: "/tools/logo" },
    { label: "Video Generator", href: "/tools/video" },
    { label: "Prompt Generator", href: "/tools/prompt" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-bold text-gradient-primary">NexusAI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered creative tools for everyone. Generate, create, and transform content with cutting-edge AI.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/30 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 NexusAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
