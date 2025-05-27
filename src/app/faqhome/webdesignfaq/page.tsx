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
    question: "Do you offer responsive web design?",
    answer:
      "Yes, we provide responsive web design services to ensure your website is fully compatible across all devices. This approach guarantees that your website will look great and function seamlessly on desktops, tablets, and smartphones, providing an optimal user experience for visitors.",
  },
  {
    question: "How long does it take to design a website?",
    answer:
      "The time required to design a website varies depending on the complexity and size of the project. Generally, it takes anywhere from 15 to 45 days to complete a website design. Factors such as custom features, content requirements, and design preferences may affect the timeline.",
  },
  {
    question: "How do you change website design?",
    answer:
      "To change your website design, we first analyze your existing website and identify the necessary improvements. Based on your needs, we present several new template options. We work closely with you to ensure the updated design aligns with your goals and enhances user experience.",
  },
  {
    question: "Do I get SEO-friendly website content?",
    answer:
      "Yes, we ensure that your website design is fully SEO-friendly. As a leading website design company in Bangalore, we focus on optimizing every aspect of your site, not just the textual content, to enhance its search engine ranking and improve visibility online.",
  },
  {
    question: "What about my website maintenance?",
    answer:
      "After the website design and development process, we offer complimentary website maintenance for up to two months. Our team ensures that your site remains fully functional, secure, and updated, giving you peace of mind while you focus on your business growth.",
  },
  {
    question: "How expensive are web design services?",
    answer:
      "We are a cost-effective website design company in Bangalore, offering packages starting from just 9,999 INR. Our goal is to deliver high-quality web design services at affordable rates. Contact us today for more details and to get a custom quote based on your requirements.",
  },
  
];

// Function Component
export default function WebDesignFaq() {
  // Split FAQs into two equal parts for grid layout
  const midIndex = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midIndex);
  const rightFaqs = faqData.slice(midIndex);

  return (
    <section id="faq-section" className="py-3 gap-6 bg-white font-poppins relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-2xl font-medium text-gray-900">
          Website Design Services in Bangalore FAQ - Have any questions?
          </h3>
        </div>

        {/* Grid Layout - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Right Column */}
          <Accordion type="single" collapsible className="w-full">
            {rightFaqs.map((faq, index) => (
              <AccordionItem key={index + midIndex} value={`item-${index + midIndex}`} className="mb-3">
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

//export default WebDesignFaq;
