import { Image, Video, Palette, Wand2, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickTools = [
  {
    title: "Image",
    description: "Generate images from text with AI",
    icon: Image,
    href: "/tools/image",
    gradient: "from-amber-500/20 to-orange-600/10",
    iconBg: "bg-amber-500/20",
  },
  {
    title: "Logo",
    description: "Create logos and brand assets",
    icon: Palette,
    href: "/tools/logo",
    gradient: "from-violet-500/20 to-purple-600/10",
    iconBg: "bg-violet-500/20",
  },
  {
    title: "Video",
    description: "AI-powered video generation",
    icon: Video,
    href: "/tools/video",
    gradient: "from-rose-500/20 to-pink-600/10",
    iconBg: "bg-rose-500/20",
  },
  {
    title: "Prompt",
    description: "Refine and enhance prompts",
    icon: Wand2,
    href: "/tools/prompt",
    gradient: "from-emerald-500/20 to-teal-600/10",
    iconBg: "bg-emerald-500/20",
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="p-6 lg:p-8 max-w-6xl mx-auto space-y-10">
        {/* Hero strip - Leonardo-style welcome */}
        <section className="relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 md:p-10 hero-gradient">
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Create with AI</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
              Welcome back
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md">
              Choose a tool below to start creating. Your generations will appear in History.
            </p>
          </div>
        </section>

        {/* Quick tools - visual cards like Leonardo model picker */}
        <section>
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Quick create
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTools.map((tool) => (
              <Link key={tool.title} to={tool.href} className="group block">
                <Card className="h-full overflow-hidden border-border/50 bg-card/60 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-0">
                    <div
                      className={`h-24 md:h-28 bg-gradient-to-br ${tool.gradient} flex items-center justify-center border-b border-border/30`}
                    >
                      <div
                        className={`h-12 w-12 rounded-xl ${tool.iconBg} flex items-center justify-center text-foreground group-hover:scale-105 transition-transform`}
                      >
                        <tool.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {tool.title}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {tool.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                        Open tool
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent generations - feed-style grid like Leonardo */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Recent generations
            </h3>
            <Link to="/dashboard/history">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                View all
              </Button>
            </Link>
          </div>
          <Card className="border-border/50 bg-card/40 overflow-hidden">
            <div className="p-6 md:p-8">
              {/* Empty state - visually rich CTA */}
              <div className="flex flex-col items-center justify-center py-16 md:py-20 text-center">
                <div className="h-20 w-20 rounded-2xl bg-muted/50 flex items-center justify-center mb-5 border border-dashed border-border/60">
                  <Image className="h-9 w-9 text-muted-foreground/60" />
                </div>
                <p className="text-foreground font-medium mb-1">No generations yet</p>
                <p className="text-muted-foreground text-sm max-w-sm mb-6">
                  Your images, logos, and videos will appear here. Start with any tool above.
                </p>
                <Link to="/tools/image">
                  <Button variant="hero" size="sm" className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Create your first
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
