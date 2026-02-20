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
  imageSrc?: string;
  imageAlt?: string;
}

const ToolCard = ({
  title,
  description,
  icon: Icon,
  href,
  gradient,
  delay = 0,
  imageSrc,
  imageAlt,
}: ToolCardProps) => {
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
        <div
          className={`glass rounded-xl h-full overflow-hidden transition-all duration-300 hover:border-primary/30 hover:${glowClass} group-hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/5`}
        >
          {imageSrc && (
            <div className="relative aspect-video overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt || title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-11 h-11 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
            <div className="mt-3 text-primary text-sm font-medium inline-flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <span>Try now</span>
              <span aria-hidden>→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ToolCard;
