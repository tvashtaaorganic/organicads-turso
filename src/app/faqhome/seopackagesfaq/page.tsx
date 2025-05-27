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
    question: "When Can We See the First Results?",
    answer:
      "The timeline for SEO results depends on your websites current status and the SEO package you select. Typically, SEO efforts require time to build momentum and deliver measurable outcomes. At OrganicAds, we provide a detailed proposal upon signing up, outlining deliverables and milestones. This ensures transparency and helps you understand when you can expect to see the first signs of progress. With consistent efforts and the right strategy, initial results can often be seen within a few weeks, with significant improvements visible in 3-6 months. Choose OrganicAds for professional, results-oriented SEO services that prioritize sustainable growth and high rankings.",
  },
  {
    question: "Do We Still Pay If There Are No Results?",
    answer:
      "At OrganicAds, we never promise overnight success because SEO is a gradual process that requires time and consistency to deliver sustainable results. While results may take time, our transparent approach ensures youre always informed about progress and deliverables. If at any point you are unsatisfied with our services, you have the option to discontinue. However, this is rare, as we share clear timelines and achievable milestones before you sign up. We also set realistic expectations, ensuring you know which deliverables may take longer to achieve. Choose OrganicAds for trustworthy and result-driven SEO services tailored to your business goals.",
  },
  {
    question: "Can We Get a Customized SEO Package?",
    answer:
      "Absolutely! At OrganicAds, we understand that every business is unique and requires a tailored SEO strategy to achieve its goals. Our team designs customized SEO packages based on your business needs, target audience, and industry competition. Whether youre looking to improve local visibility, rank for specific keywords, or drive more organic traffic, we create a plan that aligns perfectly with your objectives. Choose OrganicAds for personalized, result-oriented SEO services that help your business grow effectively and sustainably.",
  },
  {
    question: "What Is the Minimum Period for SEO Plans?",
    answer:
      "Effective SEO strategies require time to deliver sustainable results. At OrganicAds, our plans are designed to provide measurable outcomes, with a minimum duration of 6 months. This time frame allows our experts to implement a comprehensive SEO process, including keyword research, content optimization, technical improvements, and link-building strategies, ensuring long-term success and higher rankings.Choose OrganicAds for reliable SEO services that focus on achieving lasting results for your business.",
  },
  {
    question: "Can I Get Discounts If I Give You Multiple Websites for Optimization?",
    answer:
      "Yes, absolutely! At OrganicAds, were happy to work on multiple websites for SEO optimization and offer special discounts for bulk projects. Whether youre managing multiple businesses or need to optimize several sites, well provide customized SEO solutions and pricing that fit your needs. Reach out to us for more details on our discounted packages. Choose OrganicAds for cost-effective and result-driven SEO services that help grow your online presence across multiple platforms.",
  },
];

// Function Component
export default function FaqPackages() {
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
            SEO Packages FAQs - Have any questions?
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

// export default FaqPackages;
