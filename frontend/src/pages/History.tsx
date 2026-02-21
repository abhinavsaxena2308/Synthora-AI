import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Image, Sparkles } from "lucide-react";

const History = () => {
  const hasItems = false; // Replace with real data when history is implemented

  return (
    <DashboardLayout title="Generation History">
      <div className="p-6 lg:p-8 max-w-6xl mx-auto space-y-8">
        {/* Header strip */}
        <section className="relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-primary/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Your creations</h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {hasItems
                    ? "Browse and manage your generated images, logos, and videos"
                    : "Generations from all tools will appear here"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              All generations
            </h3>
            {hasItems && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-muted-foreground">
                  All
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Images
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Videos
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Logos
                </Button>
              </div>
            )}
          </div>

          {hasItems ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {/* When you have history data, map over items here */}
              {/* Example: {items.map((item) => <HistoryCard key={item.id} item={item} />)} */}
            </div>
          ) : (
            <Card className="border-border/50 bg-card/40 overflow-hidden">
              <div className="p-6 md:p-10">
                <div className="flex flex-col items-center justify-center py-14 md:py-16 text-center">
                  <div className="h-20 w-20 rounded-2xl bg-muted/50 flex items-center justify-center mb-5 border border-dashed border-border/60">
                    <Image className="h-9 w-9 text-muted-foreground/60" />
                  </div>
                  <p className="text-foreground font-medium mb-1">No generations yet</p>
                  <p className="text-muted-foreground text-sm max-w-sm mb-6">
                    Create images, logos, or videos with our AI tools and they’ll show up here for
                    easy access.
                  </p>
                  <Link to="/dashboard">
                    <Button variant="hero" size="sm" className="gap-2">
                      <Sparkles className="h-4 w-4" />
                      Go to Dashboard
                    </Button>
                  </Link>
                  <p className="text-xs text-muted-foreground/80 mt-6">
                    Make sure <strong>Save history</strong> is enabled in Settings to store your work.
                  </p>
                </div>
              </div>
            </Card>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
};

export default History;
