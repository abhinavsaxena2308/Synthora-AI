import { Cookie, Settings, BarChart3, Shield, Info, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    id: "what-are-cookies",
    icon: Cookie,
    title: "What Are Cookies",
    content: (
      <>
        <p className="mb-4">
          Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our platform.
        </p>
        <p>
          Cookies can be "persistent" (remain on your device until deleted or expired) or "session" (deleted when you close your browser). We use both types to enhance your experience on SynthoraAI.
        </p>
      </>
    ),
  },
  {
    id: "types-of-cookies",
    icon: Settings,
    title: "Types of Cookies We Use",
    content: (
      <>
        <p className="mb-4">We use the following types of cookies:</p>
        <ul className="list-disc list-inside space-y-3 mb-4 ml-4">
          <li>
            <strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable core functionality such as authentication, security, and load balancing. Without these cookies, some features may not be available.
          </li>
          <li>
            <strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our platform and user experience.
          </li>
          <li>
            <strong>Preference Cookies:</strong> These remember your settings and preferences (such as theme, language, or region) to provide a personalized experience on future visits.
          </li>
          <li>
            <strong>Marketing Cookies:</strong> These track your browsing habits to show you relevant advertisements. These cookies may be set by third-party advertising networks.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "purpose",
    icon: BarChart3,
    title: "Purpose of Cookies",
    content: (
      <>
        <p className="mb-4">We use cookies for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>To authenticate you and keep you signed in</li>
          <li>To remember your preferences and settings</li>
          <li>To analyze website traffic and user behavior</li>
          <li>To improve website performance and functionality</li>
          <li>To provide personalized content and recommendations</li>
          <li>To ensure security and prevent fraud</li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    icon: Shield,
    title: "Third-Party Cookies",
    content: (
      <>
        <p className="mb-4">
          Some cookies on our website are set by third-party services that appear on our pages. These include:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Analytics providers:</strong> To help us understand website usage</li>
          <li><strong>Authentication providers:</strong> To enable social login (e.g., Google Sign-In)</li>
          <li><strong>Content delivery networks:</strong> To optimize website performance</li>
        </ul>
        <p>
          These third parties may use cookies to collect information about your online activities across different websites. We do not control these cookies, and you should review the privacy policies of these third parties.
        </p>
      </>
    ),
  },
  {
    id: "managing-cookies",
    icon: Info,
    title: "Managing Cookies",
    content: (
      <>
        <p className="mb-4">You have control over cookies. You can:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Browser settings:</strong> Most browsers allow you to refuse or accept cookies. You can also set your browser to notify you when cookies are being sent.</li>
          <li><strong>Delete cookies:</strong> You can delete cookies that are already on your device at any time through your browser settings.</li>
          <li><strong>Opt-out tools:</strong> Some third-party analytics providers offer opt-out tools. Check their websites for more information.</li>
        </ul>
        <div className="bg-muted/50 rounded-lg p-4 border border-border/50 mt-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for the website to work properly.
          </p>
        </div>
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
          If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

const Cookies = () => {
  return (
    <PageLayout>
      <div className="pt-20 pb-16 md:py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Cookie className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: <span className="font-medium text-foreground">February 15, 2026</span>
            </p>
          </div>

          {/* Introduction */}
          <Card className="border-border/50 bg-card/60 mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                This Cookie Policy explains how SynthoraAI uses cookies and similar tracking technologies on our website. By using our platform, you consent to our use of cookies in accordance with this policy.
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
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cookies;
