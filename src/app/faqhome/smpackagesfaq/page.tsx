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
    question: "What is a Social Media Marketing Package?",
    answer:
      "A social media marketing package is a set of services designed to help businesses effectively promote their brand on various social media platforms. These packages often include expert management of social media accounts, content creation, ad optimization, audience engagement, and performance monitoring-services that many business owners may not have the time or resources to handle on their own. Such packages ensure consistent branding, increased visibility, and measurable growth across platforms, tailored to meet specific business goals.",
  },
  {
    question: "Why Should I Invest in Social Media Marketing?",
    answer:
      "Social media is a powerful tool for building a community of potential customers and increasing brand awareness. It facilitates meaningful conversations, helping businesses connect with their audience on a personal level, which can lead to increased trust and sales. Investing in social media marketing allows you to effectively target your audience with promoted posts and display ads, enabling retargeting and brand awareness campaigns. Its an essential strategy for engaging with your audience, boosting sales, and driving long-term business growth.",
  },
  {
    question: "What Does a Social Media Marketing Package Include?",
    answer:
      "A social media marketing package typically includes creating diverse content such as graphics, videos, text posts, and engaging captions. It may also cover advanced services like strategy consulting, influencer collaborations, and community management to foster audience engagement. These packages are tailored to enhance your brands online presence and drive meaningful results.",
  },
  {
    question: "Why Is Social Media Marketing Important for Brands?",
    answer:
      "Social media marketing allows brands to connect with billions of users, fostering relationships with both new and returning customers. It offers a cost-effective way to target specific demographics and communities while building trust and loyalty, all for a fraction of the cost of traditional advertising like a 30-second TV commercial.",
  },
  {
    question: "Can I Get a Customized Social Media Marketing Package?",
    answer:
      "Absolutely! At OrganicAds, we create tailored social media marketing packages designed to fit the unique needs of your brand. Contact us today to start building a customized package that aligns with your business goals.",
  },
];

// Function Component
export default function SmFaqPackages() {
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
          Social Media Management FAQs - Have any questions?
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

//export default SmFaqPackages;
