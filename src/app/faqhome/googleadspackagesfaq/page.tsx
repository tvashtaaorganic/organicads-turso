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
    question: "What Exactly is Pay-Per-Click Advertising?",
    answer:
      "Pay-Per-Click (PPC) is an online advertising model where you only pay when someone clicks on your ad. Unlike traditional advertising, where you pay upfront or for impressions, with PPC, you are only charged when users engage with your ad. If your ad doesn't get clicked, you won't incur any charges. This makes PPC a cost-effective option for businesses looking to target specific audiences and drive traffic to their websites.",
  },
  {
    question: "What is the Role of a PPC Consultant?",
    answer: [
      "A PPC consultant specializes in optimizing pay-per-click campaigns to help businesses acquire new customers. Their tasks include:--",
      "Mapping the Customer Journey.",
      "Mapping the Customer Journey: Understanding the path customers take before converting.",
      "Technical Setup: Ensuring proper setup of PPC campaigns and tools.",
      "Strategy Development: Creating tailored strategies to reach your target audience effectively.",
      "Campaign Management: Overseeing and optimizing ad campaigns to improve performance.",
      "Ad Creation: Crafting compelling ads that drive engagement.",
      "Keyword Research: Identifying high-performing keywords for ads.",
      "Market Analysis: Analyzing competitors and market trends for strategic advantage.",
      "Bid Management: Adjusting bids to optimize ad placements and costs.",
      "Negative Keywords & Audiences: Refining target audience and excluding irrelevant traffic.",
      "Landing Page Optimization: Ensuring landing pages are conversion-friendly.",
      "A/B Testing: Testing variations to improve ad performance.",
      "Maximizing Conversions: Improving ad strategies to boost sales or leads.",
      "Reports & Analytics: Providing detailed insights on campaign performance.",
      "A PPC consultant plays a crucial role in maximizing ROI from paid advertising campaigns."
    ]
  },  
  {
    question: "How Does Pay-Per-Click Advertising Work for a Brand?",
    answer:
      "Pay-per-click (PPC) advertising works on a simple principle: you only pay when someone clicks on your ad. It’s a cost-effective and results-driven strategy. Here’s how it works: when a user enters a query on a search engine, a list of search results, including paid ads, appears on the page. As a brand, you can bid on specific keywords to have your ad shown when someone searches for terms related to your business. PPC operates on a bidding system, much like an auction. If another brand is willing to pay more than you for a specific keyword, their ad may appear above yours. The key to success is managing your bids and optimizing your ads to ensure they attract the right audience without overspending. This allows you to reach potential customers at the right time while controlling your ad spend.",
  },
  {
    question: "What is the Normal ROI for a PPC Campaign?",
    answer:
      "The return on investment (ROI) for a pay-per-click (PPC) campaign can vary depending on factors such as industry, business size, and campaign objectives. Generally, businesses can expect a positive ROI if they manage their PPC campaigns effectively. A successful PPC campaign should generate a high profit margin relative to the budget spent. For optimal ROI, it’s crucial to target the right audience, use effective keyword strategies, and continuously optimize ad performance. By tracking conversions and adjusting campaigns, businesses can achieve measurable returns and enhance the effectiveness of their PPC investment.",
  },
  {
    question: "Can I Be Certain I Will Get ROI by Launching a PPC Campaign?",
    answer:
      "While there are no guarantees in digital marketing, our team works diligently to optimize your pay-per-click (PPC) campaign to maximize ROI. By carefully selecting the right keywords, targeting the appropriate audience, and continuously monitoring and adjusting your campaign, we strive to achieve measurable results. With a well-executed PPC strategy, you can expect to see growth and improved return on investment over time.",
  },
  {
    question: "What is the First Step Toward PPC?",
    answer:
      "The first step toward a successful pay-per-click (PPC) campaign is understanding your business goals and target audience. By identifying your objectives and the keywords that resonate with your audience, we can craft a strategy that aligns with your goals. Reach out to our digital marketing experts to discuss how we can help optimize your PPC campaign and drive targeted traffic to your website.",
  },
  
];

// Function Component
export default function GoogleAdsFaqPackages() {
  // Split FAQs into two equal parts for grid layout
  const midIndex = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midIndex);
  const rightFaqs = faqData.slice(midIndex);

  return (
    <section id="faq-section" className="py-3 gap-6 bg-white font-poppins relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-medium text-gray-900">
          Google Ads Packages & Pricing FAQ
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

// export default GoogleAdsFaqPackages;
