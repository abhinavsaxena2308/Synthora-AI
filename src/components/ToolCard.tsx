import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: "primary" | "accent";
  delay?: number;
}

const ToolCard = ({ title, description, icon: Icon, href, gradient, delay = 0 }: ToolCardProps) => {
  const glowClass = gradient === "primary" ? "glow-primary" : "glow-accent";
  const iconBg = gradient === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link to={href} className="block group">
        <div className={`glass rounded-xl p-6 h-full transition-all duration-300 hover:border-primary/30 hover:${glowClass} group-hover:scale-[1.02]`}>
          <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center mb-4`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          <div className="mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Try now →
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ToolCard;
