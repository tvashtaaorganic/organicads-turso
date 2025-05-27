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
    question: "What is SEO Outsourcing?",
    answer:
      "SEO outsourcing refers to the practice of hiring a third-party agency or expert to handle SEO tasks such as on-page and off-page optimization, rather than managing these activities with an in-house team. This approach helps businesses leverage specialized skills, reduce costs, and focus on core operations while improving their online presence.",
  },
  {
    question: "What is White Label SEO?",
    answer:
      "White Label SEO is the process of outsourcing SEO services to a third-party agency, which performs the SEO work behind the scenes while you present it under your own brand. This allows businesses to offer SEO services to their clients without directly handling the tasks, providing a seamless service under their own name.",
  },
  {
    question: "What is the Difference Between Normal SEO and White Label SEO?",
    answer:
      "Normal SEO involves either managing SEO in-house with your own team or hiring an SEO agency directly. In contrast, White Label SEO means partnering with an external agency like OrganicAds to handle SEO for your clients under your brand. This approach allows businesses to reduce costs by avoiding the need to hire an in-house SEO team while benefiting from the agencys expertise and experience in delivering high-quality SEO services.",
  },
  
];

// ✅ Default export directly as function
export default function FaqOutsourcing() {
  // Split FAQs into two equal parts for grid layout
  const midIndex = Math.ceil(faqData.length / 1);
  const leftFaqs = faqData.slice(0, midIndex);
 // const rightFaqs = faqData.slice(midIndex);

  return (
    <section id="faq-section" className="py-10 gap-6 bg-white font-poppins relative">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
            SEO Outsourcing FAQs - Have any questions?
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

// export default FaqOutsourcing;
