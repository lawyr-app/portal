"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage(
      "Thank you! We've received your message and will get back to you soon."
    );
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your Name"
        />
      </div>
      <div>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Your message here..."
          rows={5}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
      {submitMessage && (
        <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-md">
          {submitMessage}
        </div>
      )}
    </form>
  );
}
