import { useState, useEffect, useRef } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { User, Mail, Camera, Loader2 } from "lucide-react";
import { uploadImageToImgBB } from "@/lib/imgbb";
import { toast } from "sonner";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_IMAGE_SIZE_MB = 2;

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName ?? "");
  const [saving, setSaving] = useState(false);
  const [photoUploading, setPhotoUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDisplayName(user?.displayName ?? "");
  }, [user?.displayName]);

  const email = user?.email ?? "";

  const initials = user
    ? (user.displayName || user.email || "?")
        .split(" ")
        .map((s) => s[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = displayName.trim();
    if (!user) return;
    setSaving(true);
    try {
      await updateProfile({ displayName: name || null });
      toast.success("Profile updated. Your name is saved.");
    } catch (err) {
      console.error(err);
      toast.error("Could not update name. Try again.");
    } finally {
      setSaving(false);
    }
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;
    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    if (!apiKey || typeof apiKey !== "string") {
      toast.error("ImgBB is not configured. Add VITE_IMGBB_API_KEY to your .env (get a free key at https://api.imgbb.com/).");
      return;
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      toast.error("Please choose a JPEG, PNG, WebP, or GIF image.");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      toast.error(`Image must be under ${MAX_IMAGE_SIZE_MB}MB.`);
      return;
    }
    e.target.value = "";
    setPhotoUploading(true);
    try {
      const photoURL = await uploadImageToImgBB(file, apiKey);
      await updateProfile({ photoURL });
      toast.success("Profile photo updated.");
    } catch (err: unknown) {
      console.error("Profile photo upload failed:", err);
      const message = err instanceof Error ? err.message : String(err);
      toast.error(message?.slice(0, 80) || "Could not update photo. Try again.");
    } finally {
      setPhotoUploading(false);
    }
  };

  return (
    <DashboardLayout title="Profile">
      <div className="p-6 lg:p-8 max-w-2xl mx-auto space-y-8">
        <section className="relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative flex-shrink-0">
              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_IMAGE_TYPES.join(",")}
                className="hidden"
                onChange={handlePhotoChange}
              />
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=""
                  className="h-24 w-24 rounded-2xl object-cover border-2 border-border/50 shadow-lg"
                />
              ) : (
                <div className="h-24 w-24 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{initials}</span>
                </div>
              )}
              <button
                type="button"
                onClick={handlePhotoClick}
                disabled={photoUploading}
                className="absolute -bottom-1 -right-1 h-8 w-8 rounded-lg bg-card border border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors disabled:opacity-50"
                aria-label="Change photo"
              >
                {photoUploading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Camera className="h-4 w-4" />
                )}
              </button>
            </div>
            <div className="flex-1 text-center sm:text-left min-w-0">
              <h2 className="text-xl font-semibold text-foreground truncate">
                {user?.displayName || "No name set"}
              </h2>
              <p className="text-muted-foreground text-sm mt-0.5 flex items-center justify-center sm:justify-start gap-1.5">
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate">{user?.email || "No email"}</span>
              </p>
              <p className="text-xs text-muted-foreground/80 mt-2">SynthoraAI member</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            Personal information
          </h3>
          <Card className="border-border/50 bg-card/60 overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-semibold">Edit profile</CardTitle>
              <CardDescription>
                Update your display name. It will stay the same after you log out and back in. Email
                is managed by your sign-in provider.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="displayName" className="text-muted-foreground font-normal">
                    Display name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="displayName"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Your name"
                      className="pl-9 bg-background/50 border-border/50 h-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground font-normal">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      placeholder="you@example.com"
                      className="pl-9 bg-background/50 border-border/50 h-10"
                      disabled
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    Email is linked to your sign-in account and cannot be changed here.
                  </p>
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="sm"
                  disabled={saving}
                  className="gap-2"
                >
                  {saving ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Saving…
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
