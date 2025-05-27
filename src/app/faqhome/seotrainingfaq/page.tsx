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
    question: "What Does the SEO Course Cover?",
    answer:
      "Our SEO course is comprehensive and designed to take you from beginner to advanced level. It covers all aspects of digital marketing, including the basics of SEO, advanced techniques, SEO audits, social media marketing, paid advertising, and content marketing. You will learn practical skills through live projects and video tutorials, ensuring that you gain hands-on experience and the knowledge to excel in SEO.",
  },
  {
    question: "Do You Provide 100% Job Placement?",
    answer:
      "Yes, we offer 100% job placement assistance in digital marketing companies after you successfully complete our SEO course. We work closely with top industry companies to help you secure an SEO job, ensuring that you are well-prepared to kickstart your career in digital marketing.",
  },
  {
    question: "I Am Coming from a Non-IT Field. Can I Still Learn SEO?",
    answer:
      "Yes, absolutely! Anyone with basic computer skills, regardless of their background, can learn SEO. Our SEO course is designed for students and business professionals alike, making it accessible to individuals from all fields. If you have the passion to learn, we are here to guide you every step of the way. Feel free to contact us for more details.",
  },
  {
    question: "How Much Salary Can I Expect to Earn After SEO Course?",
    answer:
      "After successfully completing our SEO course, you can expect to earn between INR 17,000 to 30,000 per month, depending on your skills and the company you work for. As you gain experience and expertise, your earning potential will increase significantly in the SEO industry.",
  },
  {
    question: "Do You Offer 100% Live Project Training?",
    answer:
      "Yes, we offer 100% live project training to give you hands-on experience with real-world applications. Our students work on live projects for clients based in India, Australia, and the USA, allowing them to practically apply SEO techniques and gain valuable industry experience.",
  },
  {
    question: "Will I Get a Certificate Upon Completion of the Course?",
    answer:
      "Yes, upon successfully completing the course, you will receive a certificate that recognizes your expertise in SEO, enhancing your professional profile and helping you stand out in the digital marketing industry.",
  },
  {
    question: "Are You a Training Institute or a Company?",
    answer:
      "We are a leading company offering comprehensive SEO, web design & development, and social media marketing services. Our expertise also extends to providing top-notch training for individuals looking to enhance their digital marketing skills.",
  },
  {
    question: "Does This Course Also Cover Digital Marketing?",
    answer:
      "Yes, our SEO course is a comprehensive digital marketing course. It covers all key aspects of digital marketing, including Social Media Marketing, Paid Advertising (Google Ads, PPC), Content Marketing, Content Creation, and Google AdSense, ensuring you gain a well-rounded skill set.",
  },

];

// Function Component
export default function FaqTraning() {
  // Split FAQs into two equal parts for grid layout
  const midIndex = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midIndex);
  const rightFaqs = faqData.slice(midIndex);

  return (
    <section id="faq-section" className="py-10 gap-6 bg-white font-poppins relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            SEO Training FAQs - Have any questions?
          </h3>
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

//export default FaqTraning;
