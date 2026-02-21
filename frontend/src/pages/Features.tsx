import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Cpu,
  Globe,
  Layers,
  Gauge,
  Palette,
  Wand2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featureGroups = [
  {
    label: "AI & performance",
    features: [
      {
        icon: Cpu,
        title: "Advanced AI models",
        description:
          "Powered by the latest diffusion, LLM, and generative models for top-tier results.",
        gradient: "from-amber-500/20 to-orange-600/10",
        iconBg: "bg-amber-500/20",
      },
      {
        icon: Zap,
        title: "Lightning fast",
        description:
          "Generate images, videos, and content in seconds with optimized inference pipelines.",
        gradient: "from-yellow-500/20 to-amber-600/10",
        iconBg: "bg-yellow-500/20",
      },
      {
        icon: Globe,
        title: "100+ languages",
        description: "Create content in any language with multilingual AI support.",
        gradient: "from-emerald-500/20 to-teal-600/10",
        iconBg: "bg-emerald-500/20",
      },
    ],
  },
  {
    label: "Quality & format",
    features: [
      {
        icon: Gauge,
        title: "High resolution",
        description: "Up to 4K resolution for images and videos. No quality compromise.",
        gradient: "from-violet-500/20 to-purple-600/10",
        iconBg: "bg-violet-500/20",
      },
      {
        icon: Layers,
        title: "Multiple formats",
        description: "Export in PNG, JPG, MP4, SVG, and more. Ready for any platform.",
        gradient: "from-blue-500/20 to-indigo-600/10",
        iconBg: "bg-blue-500/20",
      },
      {
        icon: Shield,
        title: "Privacy first",
        description: "Your data stays yours. We don't store or train on your generations.",
        gradient: "from-slate-500/20 to-zinc-600/10",
        iconBg: "bg-slate-500/20",
      },
    ],
  },
  {
    label: "Creative control",
    features: [
      {
        icon: Palette,
        title: "Style control",
        description:
          "Fine-tune artistic styles, colors, and compositions to match your vision.",
        gradient: "from-rose-500/20 to-pink-600/10",
        iconBg: "bg-rose-500/20",
      },
      {
        icon: Wand2,
        title: "One-click magic",
        description: "Background removal, upscaling, and enhancement with a single click.",
        gradient: "from-fuchsia-500/20 to-purple-600/10",
        iconBg: "bg-fuchsia-500/20",
      },
    ],
  },
];

const Features = () => {
  let cardIndex = 0;
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
                Built for creators
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
                Powerful <span className="text-gradient-primary">features</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Everything you need to create professional-grade AI content, all in one platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feature groups */}
        <section className="pb-16 md:pb-24">
          <div className="container px-4 max-w-6xl mx-auto space-y-14">
            {featureGroups.map((group, groupIndex) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {group.label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.features.map((feature, i) => {
                    const index = cardIndex++;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06, duration: 0.35 }}
                      >
                        <Card className="h-full overflow-hidden border-border/50 bg-card/60 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                          <CardContent className="p-0">
                            <div
                              className={`h-20 bg-gradient-to-br ${feature.gradient} flex items-center justify-center border-b border-border/30`}
                            >
                              <div
                                className={`h-11 w-11 rounded-xl ${feature.iconBg} flex items-center justify-center text-foreground group-hover:scale-105 transition-transform`}
                              >
                                <feature.icon className="h-5 w-5" />
                              </div>
                            </div>
                            <div className="p-5">
                              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="container px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/50 bg-card/40 p-8 md:p-10 text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to create?
              </h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Explore our image, logo, video, and prompt tools to bring your ideas to life.
              </p>
              <Link to="/tools">
                <Button variant="hero" size="sm" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Explore tools
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Features;
