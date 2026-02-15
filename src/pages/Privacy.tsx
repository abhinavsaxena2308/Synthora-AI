import PageLayout from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose-sm space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: February 15, 2026</p>
            <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, and content you generate using our tools. We also collect usage data to improve our services.</p>
            <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>We use your information to provide and improve our AI generation services, communicate with you, and ensure the security of our platform.</p>
            <h2 className="text-xl font-semibold text-foreground">3. Data Storage & Security</h2>
            <p>Your data is stored securely with industry-standard encryption. Generated content is stored temporarily and can be deleted at any time from your dashboard.</p>
            <h2 className="text-xl font-semibold text-foreground">4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@nexusai.com for any requests.</p>
            <h2 className="text-xl font-semibold text-foreground">5. Contact</h2>
            <p>For questions about this policy, contact us at privacy@nexusai.com.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Privacy;
