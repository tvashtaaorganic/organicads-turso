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
    question: "Why do I need SEO Services?",
    answer:
      "SEO services are essential to optimize your website for search engines, helping you rank higher in search results. Without SEO, your website might remain invisible to potential customers, limiting traffic and conversions. By availing professional SEO services, you can improve your site's visibility, drive organic traffic, and achieve better results in the long run.",
  },
  {
    question: "Why should I Choose OrganicAds for SEO?",
    answer:
      "OrganicAds is a trusted SEO agency with a team of experienced SEO professionals dedicated to driving real results. We have a proven track record of helping businesses across diverse industries enhance their online presence and improve search engine rankings. Our client retention and consistent contract renewals speak volumes about the quality of our services and the results we deliver. Choose OrganicAds to boost your website’s visibility and drive sustained growth.",
  },
  {
    question: "What is White Hat SEO?",
    answer:
      "White Hat SEO refers to ethical optimization strategies that comply with search engine guidelines. It focuses on creating high-quality content, improving website speed, ensuring mobile-friendliness, and building a strong user experience. By using White Hat SEO techniques, your website ranks sustainably in search engines without risking penalties, ensuring long-term success and visibility.",
  },
  {
    question: "Can SEO help my business?",
    answer:
      "Yes, SEO is essential for boosting your online visibility and driving organic traffic to your website. By optimizing your site for relevant keywords and improving your content, SEO helps attract targeted visitors, build brand authority, and increase conversions. For quick results, you can complement SEO with pay-per-click (PPC) or social media marketing to generate leads faster.",
  },
  {
    question: "What is On-Page SEO?",
    answer:
      "On-Page SEO involves optimizing individual web pages to improve their search engine rankings. This includes optimizing content, HTML tags (such as title, meta descriptions, and headers), images, internal linking, and website structure. By focusing on these elements, On-Page SEO helps search engines understand your content better, boosting visibility and improving the chances of ranking higher on search results.",
  },
  {
    question: "What is Off-Page SEO?",
    answer:
      "Off-Page SEO refers to the activities done outside your website to improve its position in search engine rankings. This includes building backlinks, social media engagement, guest blogging, influencer marketing, and other tactics that signal to search engines that your website is reputable and relevant. Off-Page SEO helps increase your site's authority, trustworthiness, and visibility, which are essential factors for ranking higher in search engine results.",
  },
  {
    question: "How can you Improve Website Authority?",
    answer:
      "Improving website authority is essential for better search engine rankings. At OrganicAds, we enhance your site's authority by implementing high-quality white hat SEO techniques. This includes building credible backlinks, optimizing content, engaging with social media, and other ethical strategies that signal trust and relevance to search engines. Our proven methods ensure your website gains authority, which leads to improved search rankings and sustained online success.",
  },
  {
    question: "What are the type of SEO?",
    answer:
      "SEO is a multi-faceted approach, and there are three key types that contribute to a website's search engine success: On-Page SEO – Optimizing content, keywords, meta tags, and internal linking on your website to make it more search-engine-friendly Off-Page SEO – Building external links, social media signals, and brand mentions from other websites to enhance authority and trustworthiness. Technical SEO – Improving website performance by optimizing site speed, mobile-friendliness, secure connections, and ensuring proper crawlability for search engines.",
  },
  {
    question: "How Much Does SEO Service Cost?",
    answer:
      "Our SEO services are designed to fit any budget while delivering top-notch results. As a leading and affordable SEO company, we offer customized SEO packages tailored to meet the unique needs of your business. Starting at just 7999 INR per month, we provide cost-effective solutions to boost your online presence and drive organic traffic. Invest in quality SEO and watch your business grow!",
  },
  
];

// Function Component
export default function SeoServicesFaq() {
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
          SEO Bangalore FAQ - Have any questions?
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

//export default SeoServicesFaq;
