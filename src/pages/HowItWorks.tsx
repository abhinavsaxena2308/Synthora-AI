import { motion } from "framer-motion";
import { Upload, Wand2, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Describe Your Vision",
    description: "Enter a text prompt, upload a reference image, or describe what you want to create. Be as detailed or simple as you like.",
  },
  {
    icon: Wand2,
    step: "02",
    title: "AI Generates",
    description: "Our advanced AI models process your input and generate high-quality results in seconds. Choose from multiple variations.",
  },
  {
    icon: Download,
    step: "03",
    title: "Download & Use",
    description: "Download your creation in your preferred format. Use it anywhere — social media, presentations, websites, and more.",
  },
];

const HowItWorks = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It <span className="text-gradient-primary">Works</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to create anything with AI.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center glow-primary">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-mono text-primary mb-1 block">STEP {step.step}</span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HowItWorks;
