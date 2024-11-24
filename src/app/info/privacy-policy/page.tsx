export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
          Privacy Policy
        </h1>
        <div className="max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
          <p className="mb-6">
            At AI Legal Assistant, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our website and services.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Information We Collect
          </h2>
          <p className="mb-6">
            We collect information you provide directly to us, such as when you
            create an account, use our services, or contact us for support.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            How We Use Your Information
          </h2>
          <p className="mb-6">
            We use the information we collect to provide, maintain, and improve
            our services, as well as to communicate with you.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Data Security
          </h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized or unlawful
            processing, accidental loss, destruction, or damage.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-6">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Contact Us
          </h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@ailegalassistant.com.
          </p>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </>
  );
}
