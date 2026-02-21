import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-100 dark:opacity-110 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/70 dark:from-background/60 dark:via-background/80 dark:to-background" />
      </div>

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-8 mt-20">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Powered by Advanced AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="text-foreground">Create Anything with</span>
            <br />
            <span className="text-gradient-primary">AI-Powered Tools</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Generate images, videos, code prompts, humanize text, and more — all from one intelligent platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/tools">
              <Button variant="hero" size="lg" className="text-base px-8">
                Explore Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="glow" size="lg" className="text-base px-8">
              See Examples
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: "Images Generated", value: "2M+" },
            { label: "Active Users", value: "50K+" },
            { label: "AI Models", value: "12+" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
