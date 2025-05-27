"use client";

import * as React from "react";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SmFaqPackages from "@/app/faqhome/smpackagesfaq/page";

// ✅ Define types for tabData
interface PricingPlan {
  name: string;
  color: string;
  keywords: string;
  buttonColor: string;
}

interface Feature {
  name: string;
  values: (string | boolean)[];
}

interface FeatureCategory {
  category: string;
  features: Feature[];
}

interface TabData {
  pricingPlans: PricingPlan[];
  featuresData: FeatureCategory[];
}

interface SmmData {
  [key: string]: TabData;
}

const tabData: SmmData = {
  "SMM Package - Organic": {
    pricingPlans: [
      { name: "Basic", color: "bg-blue-500", keywords: "", buttonColor: "bg-black" },
      { name: "Professional", color: "bg-red-500", keywords: "", buttonColor: "bg-black" },
      { name: "Premium", color: "bg-green-500", keywords: "", buttonColor: "bg-black" },
    ],
    featuresData: [
      {
        category: "Plan",
        features: [
          { name: "No. of Posts Per Month (Images+Reels)", values: ["7+1", "10+2", "12+4"] },
          { name: "Image Post Content Writing", values: [true, true, true] },
          { name: "Image Caption Writing", values: [true, true, true] },
          { name: "Social Media Strategies", values: [false, true, true] },
          { name: "Organic Reach & Engagement Plan", values: [true, true, true] },
          { name: "Caption Research", values: [true, true, true] },
          { name: "Hashtag Research", values: [true, true, true] },
        ],
      },
      {
        category: "Platform",
        features: [
          { name: "Facebook", values: [true, true, true] },
          { name: "Instagram", values: [true, true, true] },
          { name: "Twitter", values: [true, true, true] },
          { name: "LinkedIn", values: [true, true, true] },
          { name: "Pinterest", values: [false, true, true] },
          { name: "Google Business Profile", values: [false, true, true] },
        ],
      },
      {
        category: "Activities",
        features: [
          { name: "Social Profile Creation", values: [true, true, true] },
          { name: "Social Profile Optimization", values: [true, true, true] },
          { name: "Profile Banner Design", values: [false, true, true] },
          { name: "Custom Post Size Creation", values: [false, false, true] },
          { name: "Group Sharing", values: [true, true, true] },
        ],
      },
      {
        category: "Reports",
        features: [{ name: "Reporting to you", values: ["Monthly", "Monthly", "15 Days"] }],
      },
      {
        category: "Support",
        features: [{ name: "Support you get", values: ["Email", "Email, Whatsapp, Call", "Email, Whatsapp, Call"] }],
      },
    ],
  },
  "SMM Package - Paid": {
    pricingPlans: [
      { name: "Basic", color: "bg-red-500", keywords: "", buttonColor: "bg-black" },
      { name: "Professional", color: "bg-green-500", keywords: "", buttonColor: "bg-black" },
      { name: "Premium", color: "bg-blue-500", keywords: "", buttonColor: "bg-black" },
    ],
    featuresData: [
      {
        category: "Plan",
        features: [
          { name: "Ads Spend", values: ["Upto 20,000 INR.", "More Then 20k", "More Then 20k"] },
          { name: "Agency Ad Management Fee", values: ["6000 INR.", "20% of Ad Spend", "20% of Ad Spend"] },
          { name: "Creation Of Campaign", values: ["2", "3", "5"] },
        ],
      },
      {
        category: "Facebook Marketing",
        features: [
          { name: "Advertisement Strategy", values: [true, true, true] },
          { name: "Facebook Business Set Up", values: [true, true, true] },
          { name: "Profile Optimization", values: [true, true, true] },
          { name: "Identify Business Goals", values: [true, true, true] },
          { name: "Pixel Installation", values: [false, true, true] },
          { name: "Ads Image Creation", values: [true, true, true] },
          { name: "Ads Post Caption Writing", values: [true, true, true] },
          { name: "Post Boosting", values: [true, true, true] },
          { name: "Carousel And Collection Ads", values: [false, true, true] },
          { name: "Custom Conversion Creation", values: [true, true, true] },
          { name: "Remarketing", values: [false, true, true] },
          { name: "Custom Audience Creation", values: [false, true, true] },
          { name: "Ad Campaign Monitoring", values: [true, true, true] },
          { name: "Customization Of Ad Placements", values: [true, true, true] },
          { name: "A/B Testing Of Ad Set", values: [false, true, true] },
        ],
      },
      {
        category: "Instagram Marketing",
        features: [
          { name: "Advertisement Strategy", values: ["Basic", "Advance", "Advance"] },
          { name: "Profile Optimization", values: [true, true, true] },
          { name: "Audience Research", values: [true, true, true] },
          { name: "Identify Business Goals", values: [false, true, true] },
          { name: "Ads Image Creation", values: [false, false, true] },
          { name: "Ads Post Caption Writing", values: [false, true, true] },
          { name: "Instagram Ads Monitoring", values: [true, true, true] },
          { name: "Post Boosting", values: [true, true, true] },
          { name: "Carousel And Collection Ads", values: [true, true, true] },
        ],
      },
      {
        category: "Reports",
        features: [{ name: "Reporting to you", values: ["Monthly", "15 Days", "15 Days"] }],
      },
      {
        category: "Support",
        features: [{ name: "Support you get", values: ["Email", "Email, Whatsapp, Call", "Email, Whatsapp, Call"] }],
      },
    ],
  },
};

const SmmPackagesContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = `Are you seeking cost-effective social media marketing packages in Bangalore to elevate your brand's online presence? At OrganicAds, we specialize in building ROI-focused social media strategies from the ground up, ensuring your campaigns drive revenue, engagement, and brand awareness.

In today’s digital age, over 70% of people check social media within the first 10 minutes of waking up, making a robust social media presence essential for every brand. At OrganicAds, our comprehensive social media marketing services cover every aspect of brand building—right from crafting tailored strategies to content creation, ad optimization, account management, and detailed performance reporting.

Leverage our affordable social media marketing packages to achieve quick, measurable results. Partner with OrganicAds and watch your brand thrive on social platforms.`;

  const previewText = text.substring(0, 500) + "...";

  const [activeTab, setActiveTab] = useState<"SMM Package - Organic" | "SMM Package - Paid">("SMM Package - Organic");
  const { pricingPlans, featuresData }: TabData = tabData[activeTab];

  return (
    <div className="font-poppins">
      {/* Header Section */}
      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
            Social Media Marketing Packages in Bangalore
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
                    Social Media Marketing Packages in Bangalore
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="container mx-auto mt-3 mb-3 w-full px-4 sm:px-6 lg:px-8 py-3">
        <div
          className="container mx-auto gap-6 items-center mt-7 mb-7 sm:mt-7 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-7"
          data-aos="fade-up"
        >
          <h3 className="mt-2 mb-5 text-center text-2xl font-medium text-gray-900">
            Looking to Enhance Your Social Media Marketing Strategy?
          </h3>
          {(isExpanded ? text : previewText)
            .split("\n")
            .map((paragraph, index) => (
              <p key={index} className="text-black text-justify text-base leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          <div className="text-center mt-4">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="rounded-lg inline-flex justify-left items-left text-sm font-semibold py-3 px-4 bg-black text-white hover:bg-blue-700 hover:text-white pointer-events-auto transition"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-2 mb-3 w-full px-4 sm:px-6 lg:px-8">
        <div
          className="container mx-auto gap-6 items-center mt-2 mb-3 sm:mt-2 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <h3 className="mt-2 mb-5 text-center text-2xl font-medium text-gray-900">Web Design & Development Package</h3>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-4">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
                }`}
                onClick={() => setActiveTab(tab as "SMM Package - Organic" | "SMM Package - Paid")}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {pricingPlans.map((plan: PricingPlan, index: number) => (
              <div key={index} className={`p-4 rounded-lg ${plan.color} text-white`}>
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <p>{plan.keywords}</p>
                <Link href="/contactus">
                  <Button className={`text-white px-4 py-2 mt-2 rounded ${plan.buttonColor}`}>Enquire Now</Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile-Friendly Features */}
          <div className="mt-6 flex flex-col gap-4 md:hidden">
            {featuresData.map((section: FeatureCategory, idx: number) => (
              <div key={idx}>
                <h3 className="font-semibold text-gray-700 bg-orange-300 p-2 rounded">{section.category}</h3>
                {section.features.map((feature: Feature, index: number) => (
                  <div key={index} className="p-4 bg-gray-100 rounded-lg shadow mt-2">
                    <h4 className="font-semibold text-gray-700 text-center">{feature.name}</h4>
                    <div className="flex justify-between text-center mt-2">
                      {feature.values.map((value: string | boolean, i: number) => (
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

          {/* Features Section */}
          <div className="hidden md:block mt-6">
            {featuresData.map((section: FeatureCategory, idx: number) => (
              <div key={idx}>
                <div className="grid grid-cols-4 gap-4 text-center bg-[#edecff] p-3 font-semibold">
                  <div className="text-left">{section.category}</div>
                  {pricingPlans.map((plan: PricingPlan, index: number) => (
                    <div key={index}>{plan.name}</div>
                  ))}
                </div>
                {section.features.map((feature: Feature, index: number) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-3 border-b border-gray-300">
                    <div className="text-left font-medium">{feature.name}</div>
                    {feature.values.map((value: string | boolean, i: number) => (
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
        <div
          className="container mx-auto gap-6 items-center mt-10 mb-3 sm:mt-3 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-3"
          data-aos="fade-up"
        >
          <div className="container mx-auto">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-medium text-gray-900 text-center mb-4">
                Why Choose OrganicAds for Social Media Marketing?
              </h3>
              <p className="mb-3 text-justify">
                At OrganicAds, our team is made up of skilled professionals with expertise in business, marketing, and
                technology, making us adept at crafting effective social media marketing strategies. Partnering with
                OrganicAds’ experienced team ensures you gain a competitive edge in the digital space.
              </p>
              <p className="mb-3 text-justify">
                Our team consists of digital marketing experts, graphic designers, content creators, video specialists, and
                internet marketers, working collaboratively to establish and enhance your brand’s online presence. Whether
                you need help with social media campaigns, content creation, or digital marketing strategies, we’ve got you
                covered.
              </p>
              <p className="mb-3 text-justify">
                We deliver high-quality services at reasonable prices, understanding the importance of cost-effective
                promotion for your business. Unlike many competitors, we assign projects exclusively to our in-house
                specialists, ensuring you receive the best expertise at all times.
              </p>
              <p className="mb-3 text-justify">
                Choose OrganicAds for a seamless and professional approach to social media marketing that drives results!
              </p>

              <h3 className="text-2xl font-medium mb-4 mt-7 text-center">
                What is the Cost of Social Media Marketing in Bangalore?
              </h3>
              <p className="mb-3 text-justify">
                Having a strong presence on social media is essential for every business. At OrganicAds, we focus on
                driving the growth of businesses by offering affordable social media management packages. The cost of social
                media marketing in India typically ranges from Rs. 8,000 to Rs. 12,000 per month*, and we also provide
                customized solutions based on specific client requirements.
              </p>
              <p className="mb-3 text-justify">
                The best part? You can easily find a social media marketing package that perfectly aligns with your
                company’s needs. Our plans come with features you’ll love at prices that are hard to resist. At OrganicAds,
                we highly value our clients’ feedback and are committed to tailoring solutions to meet your unique business
                goals.
              </p>
              <p className="mb-3 text-justify">
                Let us help you create a compelling social media presence with packages designed to deliver results. Choose
                OrganicAds for cost-effective, result-driven social media marketing services!
              </p>
            </div>
          </div>
        </div>
      </section>

      <SmFaqPackages />
    </div>
  );
};

export default SmmPackagesContent;
