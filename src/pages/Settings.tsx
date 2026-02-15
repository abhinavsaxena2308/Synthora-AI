import DashboardLayout from "@/components/DashboardLayout";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <DashboardLayout title="Settings">
      <div className="max-w-2xl space-y-6">
        <div className="glass rounded-xl p-6 space-y-6">
          <h3 className="font-semibold text-foreground">Preferences</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive updates about your generations</p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Save History</p>
              <p className="text-xs text-muted-foreground">Automatically save generation history</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">High Quality Mode</p>
              <p className="text-xs text-muted-foreground">Use maximum quality settings (slower)</p>
            </div>
            <Switch />
          </div>
        </div>

        <div className="glass rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-4">Danger Zone</h3>
          <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all data.</p>
          <button className="text-sm text-destructive hover:underline">Delete Account</button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
