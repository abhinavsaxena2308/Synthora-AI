import PageLayout from "@/components/PageLayout";

const Terms = () => {
  return (
    <PageLayout>
      <section className="py-20">
        <div className="container px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose-sm space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: February 15, 2026</p>
            <h2 className="text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>By using NexusAI, you agree to these terms. If you don't agree, please don't use our services.</p>
            <h2 className="text-xl font-semibold text-foreground">2. Use of Services</h2>
            <p>You may use NexusAI to generate AI content for personal and commercial purposes. You retain ownership of content you create, subject to our AI model providers' terms.</p>
            <h2 className="text-xl font-semibold text-foreground">3. Prohibited Use</h2>
            <p>You may not use our services to generate illegal, harmful, or misleading content. We reserve the right to terminate accounts that violate these terms.</p>
            <h2 className="text-xl font-semibold text-foreground">4. Intellectual Property</h2>
            <p>Generated content is yours to use. NexusAI's platform, branding, and technology remain our intellectual property.</p>
            <h2 className="text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>NexusAI is provided "as is" without warranties. We are not liable for any damages arising from use of our services.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
