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
    question: "How long does it take to improve the reputation of a company?", 
    answer:
      "The duration of reputation management varies depending on the specific needs and challenges of your brand. Typically, it takes a minimum of 4 to 5 months to see noticeable improvements. However, there's no one-size-fits-all solution, as each case is unique. A tailored approach is necessary to address your brand’s specific reputation concerns, ensuring long-term success and positive online presence.",
  },
  {
    question: "Are ORM Services Affordable?",
    answer:
      "Finding affordable Online Reputation Management (ORM) services can be challenging, but we offer highly competitive pricing. Our ORM services start at just 8999 INR, ensuring you get top-quality reputation management at an affordable cost. Let us help you build and maintain a positive online image without breaking the bank.",
  },
  {
    question: "What Strategies Are Used for ORM?",
    answer:
      "We utilize a variety of strategies to enhance a company's online reputation over time. These include promoting positive content, leveraging Social Media Marketing, optimizing SEO, content marketing, and responding to negative reviews or hostile interviews. Our comprehensive approach ensures your brand maintains a positive image across all platforms.",
  },
  {
    question: "Why Choose Our Services Over Others?",
    answer:
      "We offer comprehensive digital marketing solutions at affordable rates, covering SEO, SMM, PPC, and web design & development all under one roof. By choosing us, you save time and effort, as you don't need to search for multiple agencies for different services. Our all-in-one approach ensures your business receives the best marketing strategies to drive growth and success.",
  },
];

// Function Component
export default function OrmContentFaq() {
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
          Online Reputation Managament (ORM) Services in Bangalore Faq - Have any questions?
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

// export default OrmContentFaq;
