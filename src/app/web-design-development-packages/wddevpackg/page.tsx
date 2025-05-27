"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button"
import WebFaqPackages from "@/app/faqhome/webdevpackagesfaq/page";

const pricingPlans = [
  {
    name: "For Start up",
    color: "bg-blue-900",
    keywords: "Upto 5 pages",
    buttonColor: "bg-orange-400"
  },
  {
    name: "For Small Business",
    color: "bg-orange-500",
    keywords: "Upto 15 pages",
    buttonColor: "bg-blue-900"
  },
  {
    name: "For E-Commerce",
    color: "bg-purple-700",
    keywords: "Upto 25 pages",
    buttonColor: "bg-orange-400"
  }
];

const featuresData = [
  {
    category: "Platform",
    features: [
      { name: "Platform we use", values: ["Php, Wordpress, React/Nextjs", "Php, Wordpress, React/Nextjs", "Wordpress, Shopify"] }
    ]
  },
  {
    category: "Type",
    features: [
      { name: "Website Type", values: ["Dynamic / Static Website", "Dynamic / Static Website", "Dynamic Website"] }
    ]
  },
  {
    category: "Design",
    features: [
      { name: "Website Design", values: ["Custom Design or Theme Based", "Custom Design or Theme Based", "Theme Based"] }
    ]
  },
  {
    category: "Extra",
    features: [
      { name: "Extra Addons", values: ["Logo Design", "Logo Design", "Logo Design"] },
      { name: "", values: ["Web Hosting / 1 Year Free", "Web Hosting / 1 Year Free", "Additional"] },
      { name: "", values: ["SSL / Lifetime Free", "SSL / Lifetime Free", "SSL / Lifetime Free"] }
    ]
  },
  {
    category: "Content/AI Content",
    features: [
      { name: "Content Writing", values: ["0.80 to 2.00 INR.", "0.80 to 2.00 INR.", "0.80 to 2.00 INR."] }
    ]
  },
  {
    category: "Features",
    features: [
      { name: "Features Added", values: ["Mobile Responsive", "Mobile Responsive", "Mobile Responsive"] },
      { name: "", values: ["SEO Optimized Code", "SEO Optimized Code", "SEO Optimized Code"] },
      { name: "", values: ["Social Media Integration", "Social Media Integration", "Social Media Integration"] },
      { name: "", values: ["Blog Setup", "Blog Setup", "Blog Setup"] },
      { name: "", values: ["Live Chat Feature", "Live Chat Feature", "Live Chat Feature"] },
      { name: "", values: ["Integrated Contact Forms", "Integrated Contact Forms", "Integrated Contact Forms"] },
      { name: "", values: ["Google Map Integration", "Google Map Integration", "My Account"] },
      { name: "", values: ["Image Gallery", "Image Gallery", "Wishlist"] },
      { name: "", values: ["Video Gallery", "Video Gallery", "Discount Coupon"] },
      { name: "", values: [false, false, "Shopping Cart"] },
      { name: "", values: [false, false, "Product Listing"] },
      { name: "", values: [false, false, "Product Detail Page"] },
      { name: "", values: [false, false, "Product Comparison"] },
      { name: "", values: [false, false, "Multiple Product Image"] },
      { name: "", values: [false, false, "Latest Arrivals"] },
      { name: "", values: [false, false, "Best Sellers"] },
      { name: "", values: [false, false, "Payment Gateway Integration"] },
      { name: "", values: [false, false, "Multiple Currency Support"] },
      { name: "", values: [false, false, "Multiple Language Support"] }
    ]
  },
  {
    category: "Support",
    features: [
      { name: "Support You Get", values: ["Email, WhatsApp", "Email, WhatsApp, Call", "Email, WhatsApp, Call"] },
      { name: "", values: ["Website Training (45 mins to 1 Hr)", "Website Training (2 to 3 Hr)", "Website Training (2 to 5 Hr)"] }
    ]
  },


];

const WebPackagesContent = () => {

      const [isExpanded, setIsExpanded] = useState(false);

      const text = `You might have found us by searching for web design packages in Bangalore or Website Development Packages Bangalore and landed on our page as the first result on Google. Its not magic its the result of fifteen years of experience in search engine optimization and website design! Let us help make your company as visible as ours.

At OrganicAds, we specialize in providing affordable web design packages for SMEs, start-ups, entrepreneurs, and businesses of all sizes across India. Our offerings include WordPress websites for small businesses, e-commerce solutions, and website makeover packages to help expand your business online.

Our website design packages are designed to equip your business with all the tools needed to attract more local customers and increase your online presence. Whether you are looking for a simple website design or a full-scale SEO-friendly website to boost your rankings, OrganicAds has a tailored solution for you.

Choose OrganicAds for affordable and effective website development and SEO solutions that help your business grow and succeed online.`;
    
      const previewText = text.substring(0, 500) + "..."; // Show first 500 characters

  return (
    <div className="font-poppins">
      {/* Header Section */}
<section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
          Best Web Design Packages Bangalore

          </h1>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mt-4">
            <Breadcrumb>
              <BreadcrumbList className="flex justify-center space-x-2 text-gray-600">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="hover:text-blue-500">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-blue-500 font-semibold">
                  Web Design Packages Bangalore

                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
</section>

      {/* Client Logos Section */}
<section className="container mx-auto mt-3 mb-3 w-full px-4 sm:px-6 lg:px-8 py-3">
<div className="container mx-auto gap-6 items-center mt-7 mb-7 sm:mt-7 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-7" data-aos="fade-up">
          {(isExpanded ? text : previewText)
            .split("\n")
            .map((paragraph, index) => (
              <p key={index} className="text-black text-justify text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          <div className="text-center mt-4">
            <Button onClick={() => setIsExpanded(!isExpanded)} className="rounded-lg inline-flex justify-left items-left text-sm font-semibold py-3 px-4 bg-black text-white hover:bg-blue-700 hover:text-white pointer-events-auto transition">
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
          </div>
   
    </div>
</section>

<section className="container mx-auto mt-2 mb-3 w-full px-4 sm:px-6 lg:px-8 ">
<div className="container mx-auto gap-6 items-center mt-2 mb-3 sm:mt-2 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 " data-aos="fade-up">
<h3 className="mt-2 mb-5 text-center text-2xl font-medium text-gray-900">Web Design & Development Package </h3>
      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`p-4 rounded-lg ${plan.color} text-white`}>
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p>{plan.keywords}</p>
            <Link href="/seo-cost-calculator">
              <Button className={`text-white px-4 py-2 mt-2 rounded ${plan.buttonColor}`}>Web Cost Caculator</Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile-Friendly Features */}
      <div className="mt-6 flex flex-col gap-4 md:hidden">
        {featuresData.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-gray-700 bg-orange-300 p-2 rounded">{section.category}</h3>
            {section.features.map((feature, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow mt-2">
                <h4 className="font-semibold text-gray-700 text-center">{feature.name}</h4>
                <div className="flex justify-between text-center mt-2">
                  {feature.values.map((value, i) => (
                    <div key={i} className="flex-1 text-center font-medium text-sm">
                      {typeof value === "boolean" ? (value ? "✔" : "✖") : value}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block mt-6">
        {featuresData.map((section, idx) => (
          <div key={idx}>
            <div className="grid grid-cols-4 gap-4 text-center bg-[#edecff] p-3 font-semibold">
              <div className="text-left">{section.category}</div>
              {pricingPlans.map((plan, index) => (
                <div key={index}>{plan.name}</div>
              ))}
            </div>
            {section.features.map((feature, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-3 border-b border-gray-300">
                <div className="text-left font-medium">{feature.name}</div>
                {feature.values.map((value, i) => (
                  <div key={i} className="text-center font-medium">
                    {typeof value === "boolean" ? (value ? "✔" : "✖") : value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

</div>
</section>

<section className="container mx-auto mt-10 mb-3 w-full px-4 sm:px-6 lg:px-8 py-5">
<div className="container mx-auto gap-6 items-center mt-10 mb-3 sm:mt-3 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-3" data-aos="fade-up">

<div className="container mx-auto">
      <div data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-2xl font-medium text-gray-900 text-center mb-4">
        Why Choose OrganicAds for Website Design & Development?
        </h3>
        <p className="mb-3 text-justify">
        In todays competitive market, every new business needs a professional website to stand out. A well-designed website not only helps build trust but also attracts new customers. If you are looking for website design services in India, OrganicAds is the ideal solution for your business needs.
        </p>
        <p className="mb-3 text-justify">
        For business owners, first impressions matter. Its essential that your website effectively showcases your products and services in the best light to gain credibility. A well-organized, visually appealing site will also help your customers find you more easily on Google.
        </p>
        <p className="mb-3 text-justify">
        Launching your business online for the first time can feel overwhelming, but with OrganicAds, you are not alone. We are here to help you create a strong online presence that drives traffic and enhances your reputation.
        </p>
        <p className="mb-3 text-justify">
        Choose OrganicAds for website design and development that elevates your business and ensures it stands out in todays digital landscape.
        </p>

        
        <h3 className="text-2xl font-medium mb-4 mt-7 text-center"> How Much Does Website Design Cost in India? </h3>
        <p className="mb-3 text-justify">
        The cost of website design in India varies based on several factors, such as the technology used (WordPress, PHP, React, etc.), the number of pages, animations, and graphics. Heres a general breakdown of website design prices in India with OrganicAds
        </p>
        <p className="mb-3 text-justify">
        A static website typically costs between Rs. 15,000 to Rs. 30,000 for websites with 5-15 pages. An e-commerce website design generally ranges from Rs. 60,000 to Rs. 1,00,000.
        </p>
        <p className="mb-3 text-justify">
        At OrganicAds, we understand that each client has specific needs and budget constraints when it comes to website design. We assure you that we provide cost-effective website solutions that deliver excellent value for money. With our website design packages, you wont need to spend a fortune to create a fully functional, professional website.
        </p>
        <p className="mb-3 text-justify">
        From arranging hosting to launching your site and submitting it to search engines, OrganicAds handles every aspect of your website design and development.
        </p>
       

      </div>
    </div>

</div>
</section>

<WebFaqPackages />


    </div>
  );
};

export default WebPackagesContent;
