import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQs = () => {
  return (
    <Card className="shadow-xl">
      <CardContent className="p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What age groups do you teach?</AccordionTrigger>
            <AccordionContent>
              I primarily teach secondary school students, ranging from ages 11
              to 18. This includes GCSE and A-Level students.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you offer online tutoring?</AccordionTrigger>
            <AccordionContent>
              Yes, I offer both in-person and online tutoring sessions to
              accommodate different learning preferences and situations.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How long are your tutoring sessions?
            </AccordionTrigger>
            <AccordionContent>
              My standard tutoring sessions are 1 hour long, but I can
              accommodate 1.5 or 2-hour sessions for more intensive study or
              exam preparation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What is your cancellation policy?
            </AccordionTrigger>
            <AccordionContent>
              I request at least 24 hours notice for cancellations. Late
              cancellations or no-shows may be charged a fee.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQs;
