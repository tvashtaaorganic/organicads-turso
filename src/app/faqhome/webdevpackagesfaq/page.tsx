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
    question: "When I Purchase One of Your Website Design Packages, How Can I Pay?",
    answer:
      "At OrganicAds, we follow a simple and balanced payment structure for website design packages. We require a 50% down payment before starting your project, and the remaining 50% is due once the project is completed and your website goes live. This ensures a smooth process, allowing you to get the results you expect while keeping everything transparent. Choose OrganicAds for affordable website design solutions with flexible payment options.",
  },
  {
    question: "How Long Does It Typically Take to Create a Website for a Small Company?",
    answer:
      "At OrganicAds, the typical timeline to complete a website for a small business is around 15 days. The exact duration depends on our current workload and the complexity of the project. After receiving all the necessary content, we aim to have the first draft ready within 5 days. Well review the website with you, noting any changes or additions you would like. Once youre satisfied with the final version, well submit it to Google and upload it to your domain. Choose OrganicAds for efficient and professional website design that gets your business online quickly and effectively.",
  },
  {
    question: "Using a Mobile Device, Will My New Website Be Viewable?",
    answer:
      "Yes, absolutely! At OrganicAds, all of our website packages are fully responsive, meaning your new website will be viewable on any device, whether its a smartphone, tablet, laptop, or desktop. We ensure that your website is optimized for all screen sizes, providing a seamless experience for visitors on any device. Choose OrganicAds for mobile-friendly website design that enhances your businesss online presence.",
  },
  {
    question: "Why is the Price of Developing a Website in India Determinative?",
    answer:
      "The cost of developing a website in India can vary significantly due to several factors. There is no fixed pricing because each project has unique requirements. Key elements that influence the price include the developers rates, the scope of the project, the technologies used, the time needed to complete the task, and other considerations. At OrganicAds, we offer customized website development solutions to fit your needs and budget, ensuring you get the best value for your investment. Choose OrganicAds for affordable and professional website development.",
  },
  {
    question: "I Would Like to Revamp My Current Website. Assist Me, Please?",
    answer:
      "Absolutely! At OrganicAds, revamping websites is one of our specialties. Just let us know your requirements, and well provide a custom quote along with innovative design suggestions that incorporate the latest features to enhance your sites performance and user experience. Trust OrganicAds for website redesign services that elevate your online presence with a fresh, modern look.",
  },
  {
    question: "Would You Mind If I Viewed Some of Your Previous Work?",
    answer:
      "Not at all! Wed be happy to showcase our work. You can explore our online portfolio to view some of our best website design projects and see how weve helped businesses like yours succeed online. Visit OrganicAds portfolio for a glimpse of our high-quality web design services and how we can transform your website.",
  },
  
];

// Function Component
export default function WebFaqPackages() {
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
          Website Creation FAQs - Have any questions?
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

//export default WebFaqPackages;
