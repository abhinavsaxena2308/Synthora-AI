import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, History, Sparkles, AlertTriangle, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
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
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteAccount } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      await deleteAccount();
      toast({
        title: "Account deleted successfully",
        description: "Your account and all associated data have been permanently removed. Redirecting to homepage...",
        variant: "default",
      });
      // Small delay to show success message before redirect
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error: any) {
      console.error("Error deleting account:", error);
      toast({
        title: "Deletion failed",
        description: error.message || "Failed to delete account. Please try again or contact support.",
        variant: "destructive",
      });
      // Reset deleting state on error
      setIsDeleting(false);
    }
  };

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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-destructive border-destructive/40 hover:bg-destructive/10 hover:border-destructive/60"
                    disabled={isDeleting}
                  >
                    {isDeleting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      "Delete account"
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2 text-destructive">
                      <AlertTriangle className="h-5 w-5" />
                      Delete your account permanently?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="space-y-3">
                      <p>
                        This will permanently remove your account and all associated data including:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Your profile information</li>
                        <li>Generation history and saved creations</li>
                        <li>Account settings and preferences</li>
                        <li>All stored images, videos, and files</li>
                      </ul>
                      <p className="font-medium text-foreground">
                        This action cannot be undone. You will need to create a new account to use SynthoraAI again.
                      </p>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
                    <AlertDialogAction 
                      onClick={handleDeleteAccount}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      disabled={isDeleting}
                    >
                      {isDeleting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Deleting Account...
                        </>
                      ) : (
                        "Delete Account Permanently"
                      )}
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