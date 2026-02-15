import { Image, Video, Wand2, Palette } from "lucide-react";
import ToolCard from "./ToolCard";

const tools = [
  {
    title: "Image Generator",
    description: "Create stunning images from text descriptions using state-of-the-art diffusion models.",
    icon: Image,
    href: "/tools/image",
    gradient: "primary" as const,
  },
  {
    title: "Logo Generator",
    description: "Design professional, unique logos for your brand in seconds with AI.",
    icon: Palette,
    href: "/tools/logo",
    gradient: "accent" as const,
  },
  {
    title: "Video Creator",
    description: "Transform ideas into captivating videos with AI-powered generation and editing.",
    icon: Video,
    href: "/tools/video",
    gradient: "primary" as const,
  },
  {
    title: "Prompt Generator",
    description: "Craft perfect prompts to get the best results from any AI model.",
    icon: Wand2,
    href: "/tools/prompt",
    gradient: "accent" as const,
  },
];

const ToolsGrid = () => {
  return (
    <section id="tools" className="py-24 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Tools for <span className="text-gradient-primary">Everything</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A complete suite of AI-powered tools to supercharge your creativity and productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <ToolCard key={tool.title} {...tool} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
