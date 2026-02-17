import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, History, Sparkles, AlertTriangle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SettingsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [saveHistory, setSaveHistory] = useState(true);
  const [highQualityMode, setHighQualityMode] = useState(false);

  return (
    <DashboardLayout title="Settings">
      <div className="p-6 lg:p-8 max-w-2xl mx-auto space-y-8">
        <section>
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Preferences
          </h3>
          <Card className="border-border/50 bg-card/60 overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold">Notifications & data</CardTitle>
              <CardDescription>
                Control how SynthoraAI notifies you and stores your work.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-0">
              <SettingRow
                icon={Bell}
                title="Email notifications"
                description="Receive updates about your generations and product news"
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
              <SettingRow
                icon={History}
                title="Save history"
                description="Automatically save generation history to your account"
                checked={saveHistory}
                onCheckedChange={setSaveHistory}
              />
              <SettingRow
                icon={Sparkles}
                title="High quality mode"
                description="Use maximum quality settings (slower generation)"
                checked={highQualityMode}
                onCheckedChange={setHighQualityMode}
              />
            </CardContent>
          </Card>
        </section>
    
        <section>
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Account
          </h3>
          <Card className="border-destructive/30 bg-card/40 overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-4 w-4" />
                Danger zone
              </CardTitle>
              <CardDescription>
                Permanently delete your account and all associated data. This cannot be undone.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-destructive border-destructive/40 hover:bg-destructive/10 hover:border-destructive/60">
                    Delete account
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will permanently remove your account, profile, and all generation
                      history. You will need to sign up again to use SynthoraAI. This action
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                      Delete account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
};

function SettingRow({
  icon: Icon,
  title,
  description,
  checked,
  onCheckedChange,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 first:pt-0 border-b border-border/40 last:border-0 last:pb-0">
      <div className="flex gap-3 min-w-0">
        <div className="h-9 w-9 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
      </div>
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="flex-shrink-0 mt-0.5"
      />
    </div>
  );
}

export default SettingsPage;
