export default function TermsOfUsePage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        Terms of Use
      </h1>
      <div className="prose dark:prose-invert max-w-3xl mx-auto">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Welcome to AI Legal Assistant. By accessing or using our website and
          services, you agree to be bound by these Terms of Use.
        </p>
        <h2>Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in
          accordance with these Terms of Use.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          The content, features, and functionality of our website and services
          are owned by AI Legal Assistant and are protected by international
          copyright, trademark, patent, trade secret, and other intellectual
          property laws.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          AI Legal Assistant shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages resulting from your use of
          or inability to use our services.
        </p>
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms of Use at any
          time. It is your responsibility to check these Terms periodically for
          changes.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us
          at terms@ailegalassistant.com.
        </p>
      </div>
    </section>
  );
}
