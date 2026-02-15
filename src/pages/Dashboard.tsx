import { Image, Video, Palette, Wand2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const quickTools = [
  { title: "Image", icon: Image, href: "/tools/image" },
  { title: "Logo", icon: Palette, href: "/tools/logo" },
  { title: "Video", icon: Video, href: "/tools/video" },
  { title: "Prompt", icon: Wand2, href: "/tools/prompt" },
];

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="max-w-5xl space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-1">Welcome back! 👋</h2>
          <p className="text-muted-foreground text-sm">What would you like to create today?</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickTools.map((tool) => (
            <Link
              key={tool.title}
              to={tool.href}
              className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
            >
              <tool.icon className="h-6 w-6 text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">{tool.title}</p>
              <ArrowRight className="h-3 w-3 text-muted-foreground mt-2 group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="text-sm font-semibold text-foreground mb-4">Recent Generations</h3>
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm">No generations yet. Start creating with our AI tools!</p>
            <Link to="/tools/image" className="text-primary text-sm hover:underline mt-2 inline-block">
              Create your first generation →
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
