import { FileText, CheckCircle, Ban, Copyright, AlertTriangle, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    id: "acceptance",
    icon: CheckCircle,
    title: "Acceptance of Terms",
    content: (
      <>
        <p className="mb-4">
          By accessing or using SynthoraAI, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our platform.
        </p>
        <p>
          These terms apply to all users of the service, including without limitation users who are browsers, vendors, customers, merchants, and contributors of content. Your continued use of SynthoraAI after any changes to these terms constitutes acceptance of those changes.
        </p>
      </>
    ),
  },
  {
    id: "use-of-services",
    icon: FileText,
    title: "Use of Services",
    content: (
      <>
        <p className="mb-4">You may use SynthoraAI for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li><strong>Personal use:</strong> Generate content for your personal projects, social media, or creative endeavors</li>
          <li><strong>Commercial use:</strong> Create content for business purposes, marketing materials, or client work</li>
          <li><strong>Educational use:</strong> Use our tools for learning, research, or educational projects</li>
        </ul>
        <p className="mb-4">
          <strong>Content Ownership:</strong> You retain ownership of all content you create using our services. However, your use of generated content is subject to:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>The terms and conditions of our AI model providers</li>
          <li>Applicable copyright and intellectual property laws</li>
          <li>Any restrictions specified in these Terms of Service</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of our services at any time with or without notice.
        </p>
      </>
    ),
  },
  {
    id: "prohibited-use",
    icon: Ban,
    title: "Prohibited Use",
    content: (
      <>
        <p className="mb-4">You agree not to use SynthoraAI to:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Generate illegal, harmful, or fraudulent content</li>
          <li>Create content that violates any applicable laws or regulations</li>
          <li>Generate content that infringes on intellectual property rights</li>
          <li>Create misleading, deceptive, or false information</li>
          <li>Generate content that promotes violence, hate speech, or discrimination</li>
          <li>Create content that violates privacy rights or contains personal information without consent</li>
          <li>Attempt to reverse engineer, decompile, or extract source code from our platform</li>
          <li>Use automated systems or bots to access our services without authorization</li>
          <li>Interfere with or disrupt the integrity or performance of our services</li>
        </ul>
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-4">
          <p className="text-sm text-destructive-foreground">
            <strong>Violation Consequences:</strong> We reserve the right to suspend or terminate your account immediately if you violate these terms. We may also take legal action if necessary.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "intellectual-property",
    icon: Copyright,
    title: "Intellectual Property",
    content: (
      <>
        <p className="mb-4">
          <strong>Your Content:</strong> You own the content you generate using SynthoraAI. You are free to use, modify, and distribute your generated content as you see fit, subject to the restrictions in these terms.
        </p>
        <p className="mb-4">
          <strong>Our Platform:</strong> SynthoraAI's platform, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Website design, layout, and user interface</li>
          <li>Branding, logos, and trademarks</li>
          <li>Software, code, and technology</li>
          <li>Documentation and materials</li>
        </ul>
        <p>
          All of the above remain the exclusive property of SynthoraAI and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works from our platform without our express written permission.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: (
      <>
        <p className="mb-4">
          <strong>"As Is" Service:</strong> SynthoraAI is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Our services will be uninterrupted, secure, or error-free</li>
          <li>Results will meet your expectations or requirements</li>
          <li>Any defects or errors will be corrected</li>
          <li>Our services are free from viruses or other harmful components</li>
        </ul>
        <p className="mb-4">
          <strong>No Liability:</strong> To the fullest extent permitted by law, SynthoraAI and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
          <li>Loss of profits, data, or business opportunities</li>
          <li>Costs of substitute services</li>
          <li>Any damages arising from your use or inability to use our services</li>
        </ul>
        <p>
          Our total liability for any claims arising from these terms or your use of our services shall not exceed the amount you paid us in the 12 months preceding the claim.
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
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
          <p className="font-medium text-foreground mb-1">Email:</p>
          <a href="mailto:legal@synthora.ai" className="text-primary hover:underline">
            legal@synthora.ai
          </a>
        </div>
      </>
    ),
  },
];

const Terms = () => {
  return (
    <PageLayout>
      <div className="pt-20 pb-16 md:py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: <span className="font-medium text-foreground">February 15, 2026</span>
            </p>
          </div>

          {/* Introduction */}
          <Card className="border-border/50 bg-card/60 mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                These Terms of Service govern your access to and use of SynthoraAI's platform and services. Please read these terms carefully before using our AI-powered creative tools. By using our services, you agree to comply with and be bound by these terms.
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
                We reserve the right to update or modify these Terms of Service at any time. We will notify you of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of SynthoraAI after such changes constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Terms;
