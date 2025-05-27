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
    question: "Does Google Charge for SEO?", 
    answer:
      "Google does not charge any fees for organic search results. SEO focuses on improving your websites visibility in Googles unpaid search listings. With effective SEO, your site can achieve higher rankings, resulting in increased organic traffic over time. At OrganicAds, we help optimize your website to perform well in Googles search results, ensuring long-term, sustainable growth without any direct cost from Google.",
  },
  {
    question: "How to Calculate My Monthly Profit?",
    answer:
      "Calculating your monthly profit is simple. Start by dividing your monthly SEO marketing budget by the average lifetime profit from a customer. This gives you an estimate of the return on investment (ROI) from your SEO efforts. At OrganicAds, we can help you track this metric effectively, ensuring your SEO campaigns bring measurable results and long-term profits.",
  },
  {
    question: "When Can You Expect SEO Results?",
    answer:
      "SEO is a long-term investment, and while some companies may promise instant results, real and sustainable outcomes take time. After outsourcing SEO to a trusted expert like OrganicAds, you should expect to see noticeable improvements within 4 days to 6 months to 12 months. SEO requires consistent effort and a strategic approach to generate organic traffic and achieve top rankings. By being patient and persistent, you can expect a significant return on your investment after 12 months of SEO optimization.",
  },
  {
    question: "What is the Average Lifetime Profit?",
    answer:
      "The average lifetime profit is calculated by dividing the total lifetime revenue by the overall marketing expenditure. This metric helps in understanding the long-term profitability of your investment in SEO and other marketing efforts. By tracking your revenue and marketing spend, you can gauge the return on investment (ROI) and optimize your strategies for maximum profitability over time.",
  },
  
];

// Function Component
export default function SeoCostCalFaq() {
  // Split FAQs into two equal parts for grid layout
  const midIndex = Math.ceil(faqData.length / 1);
  const leftFaqs = faqData.slice(0, midIndex);
 // const rightFaqs = faqData.slice(midIndex);

  return (
    <section id="faq-section" className="py-5 gap-6 bg-white font-poppins relative">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
          Have any questions?
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

// export default SeoCostCalFaq;
