"use client";  // Important for Next.js in the app directory

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  
  {
    question: "What is PPC management services?", 
    answer:
      "PPC management services involve overseeing and optimizing a companys paid advertising campaigns on platforms like Google Ads. This includes everything from setting up ads to monitoring performance and refining strategies to achieve the best results. Our expert team handles all aspects of PPC, ensuring effective ad spend and maximum ROI.",
  },
  {
    question: "How much does pay per click cost in 2025?",
    answer:
      "The cost of PPC (Pay-Per-Click) advertising varies based on factors like your target audience, the competitiveness of your industry, and the duration of the campaign. While there's no fixed cost, PPC ads offer excellent ROI by driving targeted traffic to your business. With a well-optimized campaign, you'll see significant results and increased conversions, making PPC a worthwhile investment for long-term success.",
  },
  {
    question: "Why is PPC advertising a good idea for my business?",
    answer:
      "No matter what type of business you own, effective advertising is essential. PPC services help you reach a broader audience, ensuring your business gets the visibility it deserves. By using targeted ads, you can efficiently attract potential customers, making PPC an excellent investment for increasing your brands reach and generating leads.",
  },
  {
    question: "How Expensive are PPC services?",
    answer:
      "Yes, PPC advertising can be cost-effective when managed correctly. As an affordable PPC management company, we offer competitive pricing to help businesses achieve excellent results without breaking the bank. Our PPC packages start at just 6,999 INR, providing great value and measurable returns for your business.",
  },
  {
    question: "How long will it take to see results from PPC?",
    answer:
      "You can start seeing initial changes within 3-6 hours after launching your PPC campaign. However, to fully experience the transformative impact of PPC advertising on your business, it's best to give it a couple of months for optimal results and consistent growth.",
  },
];

// Function Component
export default function PpcContentFaq() {
  // Split FAQs into two equal parts for grid layout
  const midIndex = Math.ceil(faqData.length / 1);
  const leftFaqs = faqData.slice(0, midIndex);
 // const rightFaqs = faqData.slice(midIndex);

  return (
    <section id="faq-section" className="py-5 gap-6 bg-white font-poppins relative">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-2xl font-medium text-gray-900">
          Google Ads Services in Bangalore Faq - Have any questions?
          </h2>
        </div>

        {/* Grid Layout - Two Columns */}
        <div className="grid grid-cols gap-8">
          {/* Left Column */}
          <Accordion type="single" collapsible className="w-full">
            {leftFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="mb-3">
                <AccordionTrigger className="text-md font-medium bg-[#f3f5f8] px-4">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {faq.answer.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed text-justify mt-3">{faq.answer}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
}

// export default PpcContentFaq;
