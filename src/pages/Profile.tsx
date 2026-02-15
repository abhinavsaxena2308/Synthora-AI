import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <DashboardLayout title="Profile">
      <div className="max-w-2xl space-y-6">
        <div className="glass rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-foreground">Personal Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Full Name</label>
              <Input placeholder="John Doe" className="bg-background/50 border-border/50" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Email</label>
              <Input type="email" placeholder="you@example.com" className="bg-background/50 border-border/50" />
            </div>
          </div>
          <Button variant="hero" size="sm">Save Changes</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
