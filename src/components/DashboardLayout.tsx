import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Clock, Settings, User, Sparkles, ChevronRight, LogOut, Home } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const mainLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "History", href: "/dashboard/history", icon: Clock },
];

const accountLinks = [
  { label: "Profile", href: "/settings/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const location = useLocation();
  const { signOut } = useAuth();

  const linkClass = (href: string) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
      location.pathname === href
        ? "bg-primary/15 text-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.2)]"
        : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/80"
    }`;

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar - Leonardo-style: compact, grouped, refined */}
      <aside className="hidden md:flex w-[260px] flex-shrink-0 flex-col border-r border-sidebar-border bg-sidebar-background/95">
        <div className="p-5 border-b border-sidebar-border/50">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold text-lg text-gradient-primary tracking-tight">SynthoraAI</span>
          </Link>
        </div>
        <nav className="flex-1 flex flex-col p-4 space-y-6 overflow-auto">
          <div>
            <Link
              to="/"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 mb-2 ${
                location.pathname === "/"
                  ? "bg-primary/15 text-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.2)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/80"
              }`}
            >
              <Home className="h-4 w-4 flex-shrink-0" />
              Go to home
            </Link>
            <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">
              Main
            </p>
            <ul className="space-y-0.5">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={linkClass(link.href)}>
                    <link.icon className="h-4 w-4 flex-shrink-0" />
                    {link.label}
                    {location.pathname === link.href && (
                      <ChevronRight className="h-3.5 w-3.5 ml-auto opacity-70" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80">
              Account
            </p>
            <ul className="space-y-0.5">
              {accountLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={linkClass(link.href)}>
                    <link.icon className="h-4 w-4 flex-shrink-0" />
                    {link.label}
                    {location.pathname === link.href && (
                      <ChevronRight className="h-3.5 w-3.5 ml-auto opacity-70" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 pt-0 mt-auto border-t border-sidebar-border/50">
            <button
              type="button"
              onClick={() => signOut()}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/80 transition-all duration-200"
            >
              <LogOut className="h-4 w-4 flex-shrink-0" />
              Log out
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 flex-shrink-0 border-b border-border/40 flex items-center px-6 bg-background/80 backdrop-blur-sm">
          <h1 className="text-base font-semibold text-foreground tracking-tight">{title}</h1>
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
