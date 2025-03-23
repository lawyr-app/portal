import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FaqSection = () => {
  const editMode = {
    faq: false,
  };
  return (
    <Card className="mt-4">
      <CardContent className="p-6 space-y-4 ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1"
            //   onClick={() => toggleEdit("faq")}
          >
            <Edit className="h-4 w-4" />
            {editMode.faq ? "Save" : "Edit"}
          </Button>
        </div>

        {editMode.faq ? (
          <div className="space-y-4">
            {[
              {
                question: "What are your consultation fees?",
                answer:
                  "My initial consultation fee is ₹5,000 for a one-hour session. For ongoing cases, the fee structure depends on the complexity of the case, court appearances required, and the nature of legal work involved. I provide a detailed fee estimate after the initial consultation.",
              },
              {
                question: "How long do you take to resolve cases?",
                answer:
                  "The timeline varies significantly based on the nature of the case and the court's schedule. Simple matters may be resolved in a few months, while complex litigation can take several years. I strive to expedite proceedings whenever possible and keep clients informed about realistic timelines throughout the process.",
              },
              {
                question: "Do you offer legal services remotely?",
                answer:
                  "Yes, I offer consultations via video conferencing for clients who cannot visit my office in person. Document review, legal research, and drafting can be handled remotely. However, for court appearances and certain legal proceedings, physical presence may be required as per Indian court rules.",
              },
              {
                question:
                  "What documents should I bring for the first consultation?",
                answer:
                  "For the first consultation, please bring any documents relevant to your case such as contracts, correspondence, notices, previous court orders, and identification proof. Having these documents ready helps in providing more accurate legal advice during the initial consultation.",
              },
              {
                question: "Do you handle cases outside of Delhi?",
                answer:
                  "Yes, I handle cases across various High Courts and the Supreme Court of India. For cases in other district courts, I work with a network of associate advocates while maintaining oversight of the case. Additional charges may apply for travel and accommodation for outstation cases.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  defaultValue={faq.question}
                />
                <textarea
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  defaultValue={faq.answer}
                />
              </div>
            ))}
            <Button size="sm" variant="outline" className="mt-2">
              + Add FAQ
            </Button>
          </div>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What are your consultation fees?
              </AccordionTrigger>
              <AccordionContent>
                My initial consultation fee is ₹5,000 for a one-hour session.
                For ongoing cases, the fee structure depends on the complexity
                of the case, court appearances required, and the nature of legal
                work involved. I provide a detailed fee estimate after the
                initial consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How long do you take to resolve cases?
              </AccordionTrigger>
              <AccordionContent>
                The timeline varies significantly based on the nature of the
                case and the court's schedule. Simple matters may be resolved in
                a few months, while complex litigation can take several years. I
                strive to expedite proceedings whenever possible and keep
                clients informed about realistic timelines throughout the
                process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you offer legal services remotely?
              </AccordionTrigger>
              <AccordionContent>
                Yes, I offer consultations via video conferencing for clients
                who cannot visit my office in person. Document review, legal
                research, and drafting can be handled remotely. However, for
                court appearances and certain legal proceedings, physical
                presence may be required as per Indian court rules.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What documents should I bring for the first consultation?
              </AccordionTrigger>
              <AccordionContent>
                For the first consultation, please bring any documents relevant
                to your case such as contracts, correspondence, notices,
                previous court orders, and identification proof. Having these
                documents ready helps in providing more accurate legal advice
                during the initial consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Do you handle cases outside of Delhi?
              </AccordionTrigger>
              <AccordionContent>
                Yes, I handle cases across various High Courts and the Supreme
                Court of India. For cases in other district courts, I work with
                a network of associate advocates while maintaining oversight of
                the case. Additional charges may apply for travel and
                accommodation for outstation cases.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};

export default FaqSection;
