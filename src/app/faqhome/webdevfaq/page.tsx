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
    question: "How affordable are our web development services?",
    answer:
      "We are a budget-friendly web development company in Bangalore. Our web development packages start at just ₹14,999 INR. For tailored solutions, request a free quote today and get a website designed to suit your specific needs.",
  },
  {
    question: "How quickly can your website go live?",
    answer:
      "The timeline for your website to go live depends on the project's size and complexity. Typically, it takes around 15 to 45 days to fully design and deliver a professional website tailored to your requirements.",
  },
  {
    question: "Can I preview the website design during development?",
    answer:
      "Absolutely! Our dedicated project manager will keep you updated throughout the development process. You’ll receive a demo link to track progress and review the updates made to your website in real-time.",
  },
  {
    question: "What can I expect from the OrganicAds team?",
    answer:
      "At OrganicAds, we focus on creating lasting relationships with our clients through seamless communication. Along with website development, we provide services like website content, product descriptions, and image creation. Feel free to contact us for more details.",
  },
  {
    question: "What is the experience level of the developers in your team?",
    answer:
      "Our developers each have a minimum of 8 years of experience in the field. At OrganicAds, we have hired the best website developers in Bangalore, ensuring top-quality service and support. Our team is available 24/7 to assist with any needs you may have.",
  },
  {
    question: "Do you provide free hosting & SSL with web development?",
    answer:
      "At OrganicAds, our goal is to simplify your business needs. We provide reliable and easy-to-use web hosting services as part of our web development packages. Additionally, there are no extra charges for SSL with web development. For more details, feel free to contact us at +91 7259404569 or +91 7353073430.",
  },
  {
    question: "What about my website maintenance?",
    answer:
      "At OrganicAds, we offer 3 months of free website support after the launch. Post the initial period, we charge based on hourly requirements. Our dedicated team ensures your website remains easy to use, up-to-date, and fully functional. For more details, don’t hesitate to reach out to us!.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "At OrganicAds, we offer affordable service prices with high-quality results. Our payment structure is simple: 50% advance to begin the project and the remaining balance before launching your website live. We ensure transparency and satisfaction throughout the process. Contact us for more details!.",
  },
  
];

// Function Component
export default function WebDevFaq() {
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
          Website Development Services in Bangalore FAQ - Have any questions?
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

//export default WebDevFaq;
