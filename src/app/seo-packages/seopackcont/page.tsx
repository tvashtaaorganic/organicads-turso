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
import FaqPackages from "@/app/faqhome/seopackagesfaq/page";

const pricingPlans = [
  {
    name: "PROFESSIONAL",
    color: "bg-blue-900",
    keywords: "UPTO 15 KEYWORDS",
    buttonColor: "bg-orange-400"
  },
  {
    name: "PREMIUM",
    color: "bg-orange-500",
    keywords: "UPTO 30 KEYWORDS",
    buttonColor: "bg-blue-900"
  },
  {
    name: "ULTIMATE",
    color: "bg-purple-700",
    keywords: "UPTO 50 KEYWORDS",
    buttonColor: "bg-orange-400"
  }
];

const featuresData = [
  {
    category: "Review and Analysis",
    features: [
      { name: "Website Structure Analysis", values: [true, true, true] },
      { name: "Past SEO Checkup", values: [true, true, true] },
      { name: "Competitor Analysis", values: ["2 Competitor", "3 Competitor", "5 Competitor"] },
      { name: "Keyword Analysis", values: [true, true, true] },
      { name: "Google Penalty Check", values: [true, true, true] },
      { name: "Website Content Audit", values: [true, true, true] },
      { name: "Mobile Website Check", values: [true, true, true] },
      { name: "Baseline Ranking Check", values: [true, true, true] }
    ]
  },
  {
    category: "SEO Compatibility",
    features: [
      { name: "Google Analytic Setup", values: [true, true, true] },
      { name: "Google Webmaster Setup", values: [true, true, true] }
    ]
  },
  {
    category: "Onsite SEO",
    features: [
      { name: "Keyword Research", values: [true, true, true] },
      { name: "Keyword Mapping", values: [true, true, true] },
      { name: "Title and Meta Description Creation", values: ["20 Pages", "50 Pages", "All Website Pages"] },
      { name: "Single Page Optimization", values: [true, true, true] },
      { name: "Header Tag Optimization", values: [true, true, true] },
      { name: "Header Meta Creation & Optimization", values: [true, true, true] },
      { name: "GEO Tag Creation", values: [true, true, true] },
      { name: "Image Alt Tag Optimization (Image SEO)", values: [true, true, true] },
      { name: "Canonicalization", values: [true, true, true] },
      { name: "Structured Data Implementation", values: [true, true, true] },
      { name: "XML Sitemap Creation & Optimization", values: [true, true, true] },
      { name: "Robots.txt Creation & Optimization", values: [true, true, true] },
      { name: "SEO Friendly URLs Optimization", values: [true, true, true] },
      { name: "Breadcrumb Optimization", values: [true, true, true] },
      { name: "Internal & External Linking", values: [true, true, true] },
      { name: "Anchor Text Optimization", values: [true, true, true] },
      { name: "Broken Links Check", values: [true, true, true] },
      { name: "Crawl Error Resolution", values: [true, true, true] },
      { name: "Website Redirection Check", values: [true, true, true] }
    ]
  },
  {
    category: "Offsite SEO",
    features: [
      { name: "Business Listing", values: [true, true, true] },
      { name: "Company Profile Creation", values: [true, true, true] },
      { name: "Classified Submission", values: [true, true, true] },
      { name: "Social Sharing", values: [true, true, true] },
      { name: "Social Bookmarking", values: [true, true, true] },
      { name: "Web 2.0 Creation", values: [true, true, true] },
      { name: "Video Submission", values: [true, true, true] },
      { name: "Image Submission", values: [true, true, true] },
      { name: "Infographic Submission", values: [true, true, true] },
      { name: "Q & A Submission", values: ["1", "2", "4"] },
      { name: "Search Engine Submission", values: [true, true, true] }
    ]
  },
  {
    category: "Conent Marketing",
    features: [
      { name: "Blog Writing & Posting", values: ["1", "3", "5"] },
      { name: "Blog Submissions", values: [true, true, true] },
      { name: "Micro Blog Posting", values: ["1", "3", "5"] },
      { name: "Classified Writing", values: ["1", "2", "4"] },
      { name: "Infographic Creation", values: [false, false, true] },
      { name: "Quora Ans. Writing", values: [false, "1", "3"] }
    ]
  },
  {
    category: "Local Search Optimization",
    features: [
      { name: "Google My Business Setup", values: [true, true, true] },
      { name: "Google My Business Optimization", values: [true, true, true] },
      { name: "GMB Website Optimization", values: [false, true, true] },
      { name: "GMB Weekly Posting", values: [false, "1", "2"] },
      { name: "Local Directory Submission", values: [false, false, true] }
    ]
  },
  {
    category: "SEO Monthly Reports",
    features: [
      { name: "Google Analytics Report", values: [true, true, true] },
      { name: "Keyword Ranking Report", values: [true, true, true] }
    ]
  },
  {
    category: "Customer Support",
    features: [
      { name: "Email, Whatsapp, Phone	", values: [true, true, true] },
      { name: "Minimum Contract Duration", values: ["6 Months", "6 Months", "6 Months"] }
    ]
  }
];

const SeoPackagesContent = () => {

      const [isExpanded, setIsExpanded] = useState(false);

      const text = `Get Real Traffic, Genuine Leads! At OrganicAds, we serve clients across various industries by offering SEO services tailored for small, medium, and large enterprises. Our focus is on making SEO services in Bangalore accessible to all businesses with Affordable SEO Packages Bangalore. Our plans are budget-friendly and cover all critical elements necessary for comprehensive SEO, even in the smallest package. These include Keyword Analysis, Content Analysis, Technical Analysis, Competitive Analysis, and Detailed Reporting.
      
      Stop losing customers to your competitors! For those new to the digital landscape, navigating the world of SEO can be overwhelming. Selecting the right SEO Packages in Bangalore may seem daunting. With over a decade of experience optimizing both new and established websites, OrganicAds has witnessed countless algorithm changes and Google updates. This expertise enables us to understand the intricacies of SEO and deliver results-driven strategies. Rest assured, we simplify SEO for you.

      Rank higher on search engines and enjoy increased traffic through expert SEO solutions. Feel free to compare our pricing with other Cheap SEO Packages Bangalore. We are confident you will choose us for our value-driven services. Halt your search for Affordable SEO Plans—get in touch with our sales team today to learn more about our competitive SEO Services Prices Bangalore. Contact OrganicAds to receive custom SEO packages designed to boost rankings, increase traffic, and drive more sales.`;
    
      const previewText = text.substring(0, 500) + "..."; // Show first 500 characters

  return (
    <div className="font-poppins">
      {/* Header Section */}
<section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
          Affordable SEO Packages in Bangalore
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
                  SEO Packages Bangalore

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
            <Link href="/seo-cost-calculator">
              <Button className={`text-white px-4 py-2 mt-2 rounded ${plan.buttonColor}`}>SEO Cost Caculator</Button>
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
      <div data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 text-center mb-4">
          Understanding The Background Of SEO Price In Bangalore
        </h3>
        <p className="mb-3 text-justify">
        Every business owner aspires to see their website on the first page of major search engines like Google, Yahoo, and Bing. However, not all business owners are familiar with the SEO prices in Bangalore or the expertise required to secure top rankings on search engine result pages.
        </p>
        <p className="mb-3 text-justify">
        SEO involves improving the visibility of your website by achieving higher rankings on search engines like Google, Yahoo, and Bing. While some SEO companies in Bangalore charge exorbitant fees for so-called THINKING TIME or a CREATIVE TEAM, others offer low prices just to win business but fail to deliver results due to insufficient SEO expertise.
        </p>
        <p className="mb-3 text-justify">
        At OrganicAds, we bridge the gap by providing affordable and result-oriented SEO services. With our focus on delivering measurable outcomes, you can achieve higher rankings, increased traffic, and better ROI without overspending. Choose OrganicAds for SEO services in Bangalore that make a real difference!
        </p>
        
        <h3 className="text-2xl font-medium mb-4 text-left">Why You are Failing at Is SEO Cheap?</h3>
        <p className="mb-3 text-justify">
        SEO is a dynamic and evolving process that requires consistent effort and expertise from multiple professionals, including content writers, SEO specialists, and SEO analysts.
        </p>
        <p className="mb-3 text-justify">
        Trying to handle SEO yourself means becoming proficient in all these areas. Without exceptional skills in SEO analysis and keyword research, your websites rankings may plummet, leading to lost revenue and opportunities. Moreover, you risk wasting valuable time, resources, and money on ineffective strategies.
        </p>
        <p className="mb-3 text-justify">
        As your websites rankings improve, it becomes increasingly challenging to identify and target new keywords effectively. The competition grows fiercer, and the timing for incorporating fresh keywords becomes crucial. This is why engaging an SEO specialist is essential. Professionals at OrganicAds focus on delivering the right content, identifying optimal keywords, and leveraging geolocation strategies to boost your rankings while you concentrate on your business.
        </p>
        <p className="mb-3 text-justify">
        To ensure your websites success, SEO experts invest both time and resources. Quality SEO is not free—it is an investment in your growth. Choose OrganicAds for proven SEO strategies that generate measurable results.
        </p>
        
        <h3 className="text-2xl font-medium mb-4 text-left">How Much Does a Good SEO Cost?</h3>
        <p className="mb-3 text-justify">The cost of quality SEO services in Bangalore depends on various factors, including:</p>
        <ul className="list-disc list-inside mb-3">
          <li>Keyword Difficulty: The complexity and competition level of the keywords you want to rank for.</li>
          <li>Geolocation: Targeting specific locations requires tailored strategies to ensure better visibility and audience reach.</li>
          <li>Business Type: Different industries have varying levels of competition and SEO requirements.</li>
          <li>Website Performance: A websites UI/UX design, responsiveness, and device compatibility significantly impact its SEO success.</li>
        </ul>
        
        <h3 className="text-2xl font-medium mb-4 text-left">How Much Does SEO Cost Based on Keyword Difficulty?</h3>
        <ul className="list-disc list-inside mb-3">
          <li>Keyword Difficulty 5-20: Costs around USD 100.</li>
          <li>Keyword Difficulty 20-40: Costs between USD 100-250.</li>
          <li>Keyword Difficulty 40+: Exceeds USD 250.</li>
        </ul>
        <p className="mb-3 text-justify">
        In India, SEO charges typically range from INR 5,000 to 25,000 per month (approximately INR 60,000 to 3,00,000 annually). However, the ROI depends on the quality of work and whether shortcuts or risky practices are used, as these could lead to penalties that harm your websites rankings.
        </p>
        <p className="mb-3 text-justify">
        Some providers offer low-cost SEO services, such as INR 25,000 per year, but the lack of measurable results can be disastrous, especially for small businesses. Poor SEO not only wastes your investment but can also cause long-term damage, such as ranking penalties that require significant time and money to fix.
        </p>
        <p className="mb-3 text-justify">
        At OrganicAds, we prioritize ethical, result-driven strategies that ensure sustainable growth. Investing in quality SEO services is essential for protecting your business and achieving long-term success. Avoid cheap SEO solutions—they might cost less initially, but the damage they cause can be far more expensive.
        </p>
        <h3 className="text-2xl font-medium mb-4 text-left">Things to Keep in Mind</h3>
        <p className="mb-3 text-justify">
        When comparing SEO companies in Bangalore or elsewhere, youll come across various options, including freelancers, small SEO agencies, and large firms that also offer digital branding services. The services and expertise provided will naturally differ based on the size of the business.
        </p>
        <p className="mb-3 text-justify">
        In highly competitive markets, hiring a freelancer may not be the best choice. Successful SEO strategies require a collaborative effort from a skilled team, including professional content writers, marketing trend specialists, website developers, graphic designers, and client coordinators. Relying solely on a freelancer may seem cost-effective at first, with rates as low as INR 1,000-2,000 in India, but this can be a costly mistake. Saving a small amount now could result in losing a high Google ranking later.
        </p>
        <p className="mb-3 text-justify">
        At OrganicAds, we emphasize teamwork and expertise, delivering comprehensive SEO solutions that drive measurable results. Dont let short-term savings compromise your long-term success. Choose OrganicAds for reliable and professional SEO services in Bangalore that help you outrank your competitors and achieve sustainable growth.
        </p>
      </div>
    </div>

</div>
</section>

<FaqPackages />


    </div>
  );
};

export default SeoPackagesContent;
