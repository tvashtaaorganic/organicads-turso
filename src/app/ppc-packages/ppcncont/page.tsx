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
import GoogleAdsFaqPackages from "@/app/faqhome/googleadspackagesfaq/page";

const pricingPlans = [
  {
    name: "Basic",
    color: "bg-blue-900",
    keywords: "Ads Spend Upto 25k INR.",
    buttonColor: "bg-orange-400"
  },
  {
    name: "Professional",
    color: "bg-orange-500",
    keywords: "Ads Spend More Then 25k INR.",
    buttonColor: "bg-blue-900"
  },
  {
    name: "Premium",
    color: "bg-purple-700",
    keywords: "Ads Spend More Then 35k INR.",
    buttonColor: "bg-orange-400"
  }
];

const featuresData = [
  {
    category: "Google Ads Plan",
    features: [
      { name: "Agency Ad Management Fee", values: ["7000 INR.", "20% of Ad Spend", "20% of Ad Spend"] },
      { name: "Ads Account Setup", values: [true, true, true] },
      { name: "No. of Campaign", values: ["1", "3", "5"] },
      { name: "No. of AD Groups", values: ["2", "6", "10"] },
      { name: "No. of Ad Copies", values: ["Maximum 2", "Maximum 4", "Maximum 6"] },
      { name: "No. of Keywords", values: ["10", "20", "50"] },
      { name: "Google Analytics Setup", values: [true, true, true] },
      { name: "Tag Manager Setup", values: [false, true, true] },
      { name: "Conversation Setup", values: [true, true, true] },
      { name: "Competition Analysis", values: [true, true, true] },
      { name: "Keyword Analysis & Research", values: [true, true, true] },
      { name: "A/B Testing & Recommendation", values: [false, false, true] },
      { name: "Landing Page Creation", values: ["Chargable", "Chargable", "Chargable"] },
      { name: "Landing Page Optimization", values: [true, true, true] },
      { name: "Search Ads", values: [true, true, true] },
      { name: "Display Ads", values: [true, true, true] },
      { name: "Local Listing Ads", values: [true, true, true] },
      { name: "Video Ads", values: [true, true, true] },
      { name: "Shopping Ads", values: [true, true, true] },
      { name: "App Promotion Ads", values: [true, true, true] },
      { name: "Remarketing", values: [true, true, true] },
      { name: "Ad Copy Optimization", values: [true, true, true] },
      { name: "Keyword Optimization", values: [true, true, true] },
      { name: "Target Audience Setup", values: [true, true, true] },
      { name: "Target Location Setup", values: [true, true, true] },
      { name: "Callout Extension", values: [true, true, true] },
      { name: "Sitelink Extension", values: [true, true, true] },
      { name: "Location Extension", values: [true, true, true] },
      { name: "Call Extension", values: [true, true, true] }
    ]
  },
  {
    category: "Support",
    features: [
      { name: "Support you get", values: ["Email, Whatsapp, Call", "Email, Whatsapp, Call", "Email, Whatsapp, Call"] }
    ]
  }
];

const PpcPackagesContent = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const text = `Need More Leads and Conversions? Stop wasting money on ineffective PPC campaigns! Let OrganicAds craft and manage pay-per-click strategies that are laser-focused on delivering a high return on investment (ROI) and driving your business growth. With our affordable PPC pricing and plans in Bangalore, you can attract more clients, elevate your business, and expand your brand's reach.

PPC services by OrganicAds give you the freedom to focus on your business while we handle the complexities of targeting the right audience based on demographics and location. Watch as high-quality, conversion-focused traffic flows seamlessly into your website.

Our PPC solutions rank among the most effective methods to boost conversion rates. With our expertise, we help you create an optimized advertising strategy tailored to your budget. From selecting the most relevant keywords to ensuring the success of your campaign, OrganicAds is here to help you achieve exceptional results.`;
    
    const previewText = text.substring(0, 500) + "..."; // Show first 500 characters

return (
    <div className="font-poppins">
      {/* Header Section */}
<section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
          Google Ads Packages in Bangalore

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
                  Google Ads Packages in Bangalore

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

<section className="container mx-auto mt-3 mb-3 w-full px-4 sm:px-6 lg:px-8 py-3">
<div className="container mx-auto gap-6 items-center mt-3 mb-3 sm:mt-3 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-3" data-aos="fade-up">

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`p-4 rounded-lg ${plan.color} text-white`}>
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p>{plan.keywords}</p>
            <Link href="/contactus">
              <Button className={`text-white px-4 py-2 mt-2 rounded ${plan.buttonColor}`}>PPC Package Cost</Button>
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
                    <div key={i} className="flex-1 text-center font-medium text-lg">
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

<section className="container mx-auto mt-3 mb-3 w-full px-4 sm:px-6 lg:px-8 py-3">
<div className="container mx-auto gap-6 items-center mt-3 mb-3 sm:mt-3 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-3" data-aos="fade-up">

    <div className="container mx-auto">
     
        <h3 className="text-2xl font-medium mb-4 text-center">Why Should You Leave Your PPC Campaigns to OrganicAds? </h3>
        <p className="mb-3 text-justify">
        Creating a successful pay-per-click (PPC) advertising strategy can be challenging. It requires more than just selecting the right keywords – crafting compelling ad copy is essential to driving conversions. Our experts at OrganicAds are skilled in both bidding on the most effective search terms and writing high-performing ad copy that grabs attention and generates results.
        </p>
        <p className="mb-3 text-justify">
        When it comes to PPC, we know the quickest path to success. Our team will guide you to the perfect bid price while ensuring your ads have a flawless quality score. With OrganicAds, we place your ads in the optimal positions to maximize visibility and profitability, ensuring your business reaps the rewards of a well-executed campaign.
        </p>
       
        <h3 className="text-2xl font-medium mb-4 mt-8 text-center">What is the Cost of Google Ads in Bangalore? </h3>
        <p className="mb-3 text-justify">
        At OrganicAds, we have a team of top experts who manage your pay-per-click campaigns in Bangalore. The cost for Google Ads management in Bangalore starts at Rs. 5000 for basic campaigns, with e-commerce businesses charged 20% of the total budget.
        </p>
        <p className="mb-3 text-justify">
        Optimizing your pay-per-click campaigns is at the core of what we do. To get the best results from your advertising, our team will design, manage, monitor, and adjust your campaigns based on real-time data. We handle every detail of your PPC campaign, allowing you to focus on what you do best. Whether your goals are to increase website traffic, attract new customers, or boost revenue, our expertise ensures that your campaigns deliver results.
        </p>
       
    </div>

</div>
</section>

<GoogleAdsFaqPackages />



    </div>
  );
};

export default PpcPackagesContent;
