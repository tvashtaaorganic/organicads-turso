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
    question: "What monthly deliverables can I expect if I hire you?",
    answer: [
      "Full Audit / Old SEO Checkup",
      "Onpage / Technical SEO",
      "Google My Business Setups and Maintenance",
      "Content Creation",
      "Offpage SEO / Only Quality Backlink Creation",
      "Keyword Tracking and Monitoring",
      "Monthly Report",
    ],
  },
  {
    question: "Can SEO be done without a website?",
    answer:
      "No, SEO requires a website to be effective. A website serves as the central hub for your content and allows users to engage with your brand. While off-page SEO tactics like link building and social media promotion can enhance visibility, they need to be supported by solid on-page SEO practices to drive real, lasting results.",
  },
  {
    question: "What is our USP as compared to other SEO Agencies?",
    answer:
      "What sets us apart is our results-driven approach that goes beyond just increasing traffic. We focus on turning that traffic into measurable conversions, ensuring that your website not only ranks higher but also drives business growth.",
  },
  {
    question: "How long does it take to rank on Page 1?",
    answer:
      "The time it takes to rank on Page 1 can vary based on several factors. These include keyword competitiveness, website content quality, and domain authority. Typically, results can be seen within 1 day to 4 months.",
  },
  {
    question: "What is Search Engine Optimization (SEO)?",
    answer:
      "Search Engine Optimization (SEO) is a strategic process designed to improve your websites visibility on search engines. It involves optimizing various elements, such as keywords, content, site structure, and backlinks, to enhance your websites ranking.",
  },
  {
    question: "What makes OrganicAds a leading SEO Agency?",
    answer:
      "OrganicAds stands out due to its commitment to delivering measurable results. For over 6 years, we have consistently helped businesses achieve top rankings and drive organic traffic, making us one of the most trusted SEO companies in Bangalore.",
  },
  {
    question: "What are the Main Benefits of SEO Services?",
    answer:
      "SEO provides long-term benefits by ensuring your website is easily discoverable where your customers are searching most. The key advantage is that it helps build organic traffic, increases visibility, and enhances brand credibility over time.",
  },
  {
    question: "How can I check monthly SEO progress?",
    answer:
      "With our Stay Transparent policy, we keep you informed every step of the way. Each month, we provide detailed SEO reports that include your websites ranking progress, organic traffic insights, and updates on both on-page and off-page activities.",
  },
  {
    question: "How long does keyword take to rank?",
    answer:
      "The time it takes for a keyword to rank depends on factors like keyword competition and the overall health of your website. Typically, it can take anywhere from 1 day to 4 months to see significant progress in search engine rankings.",
  },
  {
    question: "How can I trust you will get me good SEO results?",
    answer:
      "We understand that choosing the right SEO company in Bangalore can be challenging. Thats why we encourage you to check the results we have delivered for our current clients. You can even speak with them directly to hear about their experience.",
  },
  {
    question: "What are your charges for SEO services?",
    answer:
      "At OrganicAds, we offer tailored SEO services based on your unique business needs. Since every business requires different strategies, our pricing is customized. Contact us for a personalized SEO package that fits your goals and budget.",
  },
  {
    question: "Is SEO service better than paid advertising?",
    answer:
      "SEO is a long-term strategy that focuses on improving your websites visibility in organic search results. Paid advertising delivers immediate results but requires ongoing investment. The best approach often involves combining both strategies.",
  },
];

// Function Component
export default function FaqHome() {
  // Split FAQs into two equal parts for grid layout
  const midIndex = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midIndex);
  const rightFaqs = faqData.slice(midIndex);

  return (
    <section id="faq-section" className="py-10 gap-6 bg-white font-poppins relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-900">
            SEO Bangalore FAQs - Have any questions?
          </h2>
        </div>

        {/* Grid Layout - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <Accordion type="single" collapsible className="w-full">
            {leftFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-md font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {faq.answer.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed text-justify">{faq.answer}</p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Right Column */}
          <Accordion type="single" collapsible className="w-full">
            {rightFaqs.map((faq, index) => (
              <AccordionItem key={index + midIndex} value={`item-${index + midIndex}`}>
                <AccordionTrigger className="text-md font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {faq.answer.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed text-justify">{faq.answer}</p>
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

//export default FaqHome;
