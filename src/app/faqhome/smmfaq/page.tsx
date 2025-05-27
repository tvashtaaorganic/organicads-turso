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
    question: "What are the best Social Media Platforms?", 
    answer:
      "The best social media platforms for marketing include Facebook, Instagram, Twitter, and LinkedIn. These platforms offer vast audiences, diverse targeting options, and excellent engagement opportunities to help grow your brand and connect with potential customers effectively.",
  },
  {
    question: "Is SMM needed even if we are spending on SEO?",
    answer:
      "Yes, even if you're investing in SEO, Social Media Marketing (SMM) is crucial for expanding your online presence. SMM helps you reach a wider audience, engage with potential customers, and boost brand awareness, which complements your SEO efforts and enhances overall business growth.",
  },
  {
    question: "Why are #Hashtags so Important in SMM?",
    answer:
      "Hashtags are essential in Social Media Marketing because they increase the visibility of your posts. By using relevant hashtags, your content reaches users searching for specific topics, and they help the algorithm categorize your posts for the right audience. This boosts engagement and overall post reach, improving brand awareness.",
  },
  {
    question: "Is Paid Social Media Marketing Worth It?",
    answer:
      "Paid Social Media Marketing can be highly effective, depending on your goals and budget. It offers faster results, allowing you to target specific audiences, increase brand visibility, and drive more traffic to your website. If you're looking for quick growth and measurable ROI, paid campaigns are definitely worth considering.",
  },
  {
    question: "How Good is OrganicAds Social Media Marketing Services?",
    answer:
      "At OrganicAds, we offer top-tier Social Media Marketing services at affordable rates. We understand that budgets can be tight, which is why our SMM packages start from just 5999 INR per month. Our team focuses on delivering high-quality results to boost your online presence and drive engagement, ensuring your brand stands out on social media.",
  },
];

// Function Component
export default function SmmContentFaq() {
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
          Social Media Marketing Services in Bangalore Faq - Have any questions?
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

//export default SmmContentFaq;
