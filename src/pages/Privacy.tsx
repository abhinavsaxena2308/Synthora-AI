import { Shield, Database, Lock, UserCheck, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    id: "information",
    icon: Database,
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4">
          We collect information you provide directly to us, including:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Account information: name, email address, and profile photo</li>
          <li>Generated content: images, videos, logos, and prompts created using our tools</li>
          <li>Usage data: how you interact with our platform to improve our services</li>
          <li>Device information: browser type, IP address, and device identifiers</li>
        </ul>
        <p>
          We do not sell your personal information to third parties. Your data is used solely to provide and improve our services.
        </p>
      </>
    ),
  },
  {
    id: "usage",
    icon: Shield,
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-4">We use your information for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>To provide and maintain our AI generation services</li>
          <li>To process your requests and generate content</li>
          <li>To communicate with you about your account and our services</li>
          <li>To improve and optimize our platform and user experience</li>
          <li>To ensure the security and integrity of our platform</li>
          <li>To comply with legal obligations and enforce our terms</li>
        </ul>
      </>
    ),
  },
  {
    id: "storage",
    icon: Lock,
    title: "Data Storage & Security",
    content: (
      <>
        <p className="mb-4">
          We take data security seriously and implement industry-standard measures to protect your information:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Encryption: All data is encrypted in transit and at rest</li>
          <li>Secure storage: Your data is stored on secure servers with regular backups</li>
          <li>Access controls: Only authorized personnel have access to your data</li>
          <li>Generated content: Stored temporarily and can be deleted at any time from your dashboard</li>
        </ul>
        <p>
          While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "Your Rights",
    content: (
      <>
        <p className="mb-4">You have the following rights regarding your personal data:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Correction:</strong> Update or correct inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
          <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
          <li><strong>Objection:</strong> Object to certain processing of your data</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:privacy@synthora.ai" className="text-primary hover:underline">
            privacy@synthora.ai
          </a>
          . We will respond to your request within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Us",
    content: (
      <>
        <p className="mb-4">
          If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
          <p className="font-medium text-foreground mb-1">Email:</p>
          <a href="mailto:privacy@synthora.ai" className="text-primary hover:underline">
            privacy@synthora.ai
          </a>
        </div>
      </>
    ),
  },
];

const Privacy = () => {
  return (
    <PageLayout>
      <div className="pt-20 pb-16 md:py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: <span className="font-medium text-foreground">February 15, 2026</span>
            </p>
          </div>

          {/* Introduction */}
          <Card className="border-border/50 bg-card/60 mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                At SynthoraAI, we are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding your data when you use our AI-powered creative tools and services.
              </p>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={section.id} className="border-border/50 bg-card/60 overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {index + 1}
                          </span>
                          <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                            {section.title}
                          </h2>
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer Note */}
          <Card className="border-primary/20 bg-primary/5 mt-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-sm text-muted-foreground text-center">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacy;
