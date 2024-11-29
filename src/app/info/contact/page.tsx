import { ContactForm } from "@/components/landing/ContactForm";
import { SocialConnect } from "@/components/landing/SocialConnect";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center text-black dark:text-white">
        Get in Touch
      </h1>
      <p className="text-xl mb-12 text-center text-gray-600 dark:text-gray-300">
        Connect with us directly or send us a message.
      </p>
      <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">
              Send us a message
            </h2>
            <ContactForm />
          </div>
          <div className="w-full md:w-1/2  p-8 flex items-center justify-center">
            <SocialConnect />
          </div>
        </div>
      </div>
    </section>
  );
}
