import { FAQ } from "@/components/landing/FAQ";

export default function FAQPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">
        Frequently Asked Questions
      </h1>
      <p className="text-lg mb-12 text-center text-gray-600 dark:text-gray-300">
        Find answers to common questions about LegalAI and our services.
      </p>
      <FAQ />
    </section>
  );
}
