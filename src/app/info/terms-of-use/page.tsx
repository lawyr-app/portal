export default function TermsOfUsePage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        Terms of Use
      </h1>
      <div className="max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
        <p className="mb-6">
          Welcome to AI Legal Assistant. By accessing or using our website and
          services, you agree to be bound by these Terms of Use.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Use of Services
        </h2>
        <p className="mb-6">
          You agree to use our services only for lawful purposes and in
          accordance with these Terms of Use.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Intellectual Property
        </h2>
        <p className="mb-6">
          The content, features, and functionality of our website and services
          are owned by AI Legal Assistant and are protected by international
          copyright, trademark, patent, trade secret, and other intellectual
          property laws.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Limitation of Liability
        </h2>
        <p className="mb-6">
          AI Legal Assistant shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages resulting from your use of
          or inability to use our services.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Changes to Terms
        </h2>
        <p className="mb-6">
          We reserve the right to modify or replace these Terms of Use at any
          time. It is your responsibility to check these Terms periodically for
          changes.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
          Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions about these Terms of Use, please contact us
          at terms@ailegalassistant.com.
        </p>
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </section>
  );
}
