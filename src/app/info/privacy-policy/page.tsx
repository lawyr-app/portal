export default function PrivacyPolicyPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        Privacy Policy
      </h1>
      <div className="prose dark:prose-invert max-w-3xl mx-auto">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          At AI Legal Assistant, we take your privacy seriously. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use our website and services.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you
          create an account, use our services, or contact us for support.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve
          our services, as well as to communicate with you.
        </p>
        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized or unlawful
          processing, accidental loss, destruction, or damage.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at privacy@ailegalassistant.com.
        </p>
      </div>
    </section>
  );
}
