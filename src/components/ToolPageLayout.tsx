import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/PageLayout";

interface ToolPageLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  placeholder: string;
  tips: string[];
}

const ToolPageLayout = ({ title, description, icon: Icon, placeholder, tips }: ToolPageLayoutProps) => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      setOutput(`✨ Generated result for: "${input.slice(0, 80)}…"\n\nThis is a placeholder. Enable Cloud to power real AI generation.`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <PageLayout>
      <section className="py-16">
        <div className="container px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center glow-primary">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">{title}</h1>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="glass rounded-xl p-6 space-y-4">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={placeholder}
                    className="min-h-[160px] bg-background/50 border-border/50 resize-none focus:border-primary/50 transition-colors"
                  />
                  <div className="flex justify-end">
                    <Button variant="hero" onClick={handleGenerate} disabled={isLoading || !input.trim()}>
                      {isLoading ? (
                        <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Generating…</>
                      ) : (
                        <><Send className="h-4 w-4 mr-2" /> Generate</>
                      )}
                    </Button>
                  </div>
                </div>

                {output && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-xl p-6"
                  >
                    <h3 className="text-sm font-medium text-primary mb-3">Result</h3>
                    <pre className="text-sm text-foreground/90 whitespace-pre-wrap font-mono leading-relaxed">{output}</pre>
                  </motion.div>
                )}
              </div>

              <div className="glass rounded-xl p-6 h-fit">
                <h3 className="text-sm font-semibold text-foreground mb-4">💡 Tips</h3>
                <ul className="space-y-3">
                  {tips.map((tip, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary font-mono text-xs mt-0.5">{i + 1}.</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ToolPageLayout;
