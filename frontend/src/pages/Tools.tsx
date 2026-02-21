import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image, Video, Palette, Wand2, Sparkles, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const tools = [
  {
    title: "Image Generator",
    description:
      "Create stunning images from text descriptions using state-of-the-art diffusion models.",
    icon: Image,
    href: "/tools/image",
    gradient: "from-amber-500/20 to-orange-600/10",
    iconBg: "bg-amber-500/20",
  },
  {
    title: "Logo Generator",
    description: "Design professional, unique logos for your brand in seconds with AI.",
    icon: Palette,
    href: "/tools/logo",
    gradient: "from-violet-500/20 to-purple-600/10",
    iconBg: "bg-violet-500/20",
  },
  {
    title: "Video Creator",
    description: "Transform ideas into captivating videos with AI-powered generation and editing.",
    icon: Video,
    href: "/tools/video",
    gradient: "from-rose-500/20 to-pink-600/10",
    iconBg: "bg-rose-500/20",
  },
  {
    title: "Prompt Generator",
    description: "Craft perfect prompts to get the best results from any AI model.",
    icon: Wand2,
    href: "/tools/prompt",
    gradient: "from-emerald-500/20 to-teal-600/10",
    iconBg: "bg-emerald-500/20",
  },
];

const Tools = () => {
  return (
    <PageLayout>
      <div className="relative">
        {/* Hero */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="container px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 md:p-12 text-center hero-gradient"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-5">
                <Sparkles className="h-3.5 w-3.5" />
                AI-powered
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
                AI Tools for <span className="text-gradient-primary">Everything</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                A complete suite of tools to supercharge your creativity. Images, logos, videos, and
                prompts—all in one place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools grid */}
        <section className="pb-20 md:pb-28">
          <div className="container px-4 max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6"
            >
              Choose a tool
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                >
                  <Link to={tool.href} className="group block h-full">
                    <Card className="h-full overflow-hidden border-border/50 bg-card/60 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      <CardContent className="p-0">
                        <div
                          className={`h-28 md:h-32 bg-gradient-to-br ${tool.gradient} flex items-center justify-center border-b border-border/30`}
                        >
                          <div
                            className={`h-14 w-14 rounded-xl ${tool.iconBg} flex items-center justify-center text-foreground group-hover:scale-105 transition-transform`}
                          >
                            <tool.icon className="h-7 w-7" />
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-lg">
                            {tool.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            {tool.description}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                            Open tool
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Tools;
