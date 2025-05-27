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
    question: "Why Invest in eCommerce SEO?",
    answer:
      "Investing in eCommerce SEO is crucial for small businesses looking to scale and reach a larger audience. SEO is not a luxury; it’s a necessity in today’s competitive digital landscape. By optimizing your eCommerce website, you can increase visibility on search engines, drive organic traffic, and ultimately boost sales. Rather than hiring an in-house team, outsourcing your eCommerce SEO to experts allows you to tap into specialized skills and strategies that can deliver faster, more effective results. With the right SEO approach, your eCommerce store can stand out, attract more customers, and grow in a sustainable way.",
  },
  {
    question: "What Tools Do You Use for eCommerce SEO?",
    answer:
      "To ensure top-quality eCommerce SEO, we use a range of industry-leading tools, including: Google structured data testing tool, Google Analytics, Google Search Console, Moz Pro, Screaming Frog, SEMrush, Ahrefs, and Google AdWords keyword planner, among many others. - These tools help us analyze website performance, conduct keyword research, optimize on-page elements, track rankings, and ensure your eCommerce site is fully optimized for search engines.",
  },
  {
    question: "What should be my Budget for Ecommerce SEO Services?",
    answer:
      "The budget for eCommerce SEO services depends on the specific services you need for your business. We offer a variety of SEO packages tailored to different business requirements, whether you need monthly or one-time services. To get an accurate price estimate, the best approach is to schedule a consultation with our SEO expert, who will assess your needs and provide a personalized quote.",
  },
  {
    question: "How Will You Measure the Success of Your eCommerce SEO Campaign?",
    answer:
      "We measure the success of your eCommerce SEO campaign through key metrics such as increased organic search traffic, higher organic revenue, and improved conversion rates. Additionally, we monitor bounce rates and the average time visitors spend on your website and individual pages. These metrics help us assess the effectiveness of our SEO strategies and make necessary adjustments to drive continuous growth for your business.",
  },
  {
    question: "Are Your eCommerce SEO Strategies Ethical?",
    answer:
      "Yes, our eCommerce SEO strategies are completely ethical. We focus on organic growth and follow white-hat SEO practices that align with search engine guidelines. Our strategies are designed to make your business more visible and approachable to real customers. By using ethical SEO techniques, we help your business build a strong online presence that attracts genuine visitors and fosters long-term engagement.",
  },
  {
    question: "What is the Minimum Contract Period of Your eCommerce SEO Packages?",
    answer:
      "The minimum contract period for our eCommerce SEO packages depends on your specific needs and goals, whether you're seeking short-term or long-term results. Once you reach out to our SEO consultant, we will assess your business requirements and recommend a suitable package and contract duration that aligns with your objectives.",
  },
  
];

// Function Component
export default function EcomServicesFaq1() {
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
          Ecommerce SEO Services in Bangalore FAQ - Have any questions?
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

//export default EcomSvrFaq;
