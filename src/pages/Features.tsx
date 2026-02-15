import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Globe, Layers, Gauge, Palette, Wand2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const features = [
  { icon: Cpu, title: "Advanced AI Models", description: "Powered by the latest diffusion, LLM, and generative models for top-tier results." },
  { icon: Zap, title: "Lightning Fast", description: "Generate images, videos, and content in seconds with optimized inference pipelines." },
  { icon: Shield, title: "Privacy First", description: "Your data stays yours. We don't store or train on your generations." },
  { icon: Globe, title: "100+ Languages", description: "Create content in any language with multilingual AI support." },
  { icon: Layers, title: "Multiple Formats", description: "Export in PNG, JPG, MP4, SVG, and more. Ready for any platform." },
  { icon: Gauge, title: "High Resolution", description: "Up to 4K resolution for images and videos. No quality compromise." },
  { icon: Palette, title: "Style Control", description: "Fine-tune artistic styles, colors, and compositions to match your vision." },
  { icon: Wand2, title: "One-Click Magic", description: "Background removal, upscaling, and enhancement with a single click." },
];

const Features = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Powerful <span className="text-gradient-primary">Features</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create professional-grade AI content, all in one platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Features;
