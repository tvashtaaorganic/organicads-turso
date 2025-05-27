"use client";

import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeaturedOn from "@/app/featuredon/page";
import  TestimonialCarousel  from "@/app/testimonials/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SeoServicesFaq from "@/app/faqhome/seoservicesfaq/page";


const seoResults = [
  {
    website: "Skin Clinic Sydney",
    domain: "Google.com.au",
    keywords: [
      { term: "Laser Hair Removal Sydney", rank: 1 },
      { term: "Best Skin Treatments Sydney", rank: 4 },
      { term: "Laser Skin Treatment Sydney", rank: 1 },
      { term: "Best Lip Injections Sydney", rank: 3 },
      { term: "Acne Scarring Treatment Sydney", rank: 5 },
    ],
  },
  {
    website: "Steel Design and Detailing",
    domain: "Google.com.au",
    keywords: [
      { term: "Tilt up panel detailing", rank: 1 },
      { term: "Steel shop drawings using Tekla", rank: 1 },
      { term: "Steel detailing using Tekla", rank: 2 },
      { term: "Structural steel drafting", rank: 3 },
      { term: "Steel detailing service", rank: 3 },
    ],
  },
];

const SeoContent = () => {

const services = [
        {
          img: "https://res.cloudinary.com/s2ucdn/image/upload/v1735048510/world-wide_jbseoa.png",
          alt: "Expand Your Reach with Global SEO Services",
          title: "Expand Your Reach with Global SEO Services",
          description:
            "No matter where your business is located, our expertise ensures your website ranks as effectively as a local provider. As a trusted global digital marketing agency, our skilled SEO experts optimize your website to attract international traffic, drive higher conversions, and boost revenue. Partner with us to make your brand visible worldwide and achieve measurable growth.",
        },
        {
          img: "https://res.cloudinary.com/s2ucdn/image/upload/v1735048693/local_uup31p.png",
          alt: "Boost Your Visibility with Local SEO Services",
          title: "Boost Your Visibility with Local SEO Services",
          description:
            "Local SEO is the key to connecting with customers in your area. Its a powerful method to promote your business online and ensure you appear prominently in local searches. As local SEO experts, we implement tailored strategies to rank your website in your target region, driving foot traffic and boosting leads. Let us help your business thrive in your community!.",
        },
        {
          img: "https://res.cloudinary.com/s2ucdn/image/upload/v1735048921/online-shop_aztqib.png",
          alt: "E-commerce SEO Services to Boost Your Online Sales",
          title: "E-commerce SEO Services to Boost Your Online Sales",
          description:
            "Struggling with low sales in your e-commerce business? In a competitive market, standing out is essential. Our specialized E-commerce SEO services are designed to help your online store rank higher, attract targeted traffic, and convert visitors into buyers. As a leading SEO company in India, we offer tailored packages to meet your unique business needs. Contact us today to drive sales and dominate the e-commerce space!.",
        },
        {
          img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734700818/rating-stars_uw2yd6.png",
          alt: "Google Map Marketing Services to Boost Local Visibility",
          title: "Google Map Marketing Services to Boost Local Visibility",
          description:
            "Make it easier for your customers to find you with our fully optimized Google Map Marketing services. Stand out from your competitors by leveraging Google Business Listings to increase visibility and attract local customers. Our experts specialize in creating and optimizing Google Maps strategies that drive traffic and improve your brand's online presence. Contact us today to dominate local searches and grow your business effectively!.",
        },
];

const seoProcessSteps = [
  {
    title: "SEO Audit",
    description:
      "Before starting any on-page or off-page SEO activities, we conduct an advanced SEO audit to identify your websites strengths and areas for improvement. Our audit reports are generated using globally recognized tools, ensuring accuracy and actionable insights. Partner with us to lay a solid foundation for your SEO strategy and achieve measurable results.",
    imgSrc: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742915407/initial-audit-icn_1_nllayy.svg",
  },
  {
    title: "Keyword Research",
    description:
      "Identifying the right keywords is crucial for connecting with your potential customers. Our experts analyze, research, and finalize a targeted set of high-performing keywords tailored to optimize your website and enhance its visibility. Let us help you attract the right traffic and drive meaningful conversions with a result-focused SEO approach.",
    imgSrc: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742915407/keyword-research_1_xxnwdd.svg",
  },
  {
    title: "Competitor Analysis",
    description:
      "We constantly track your competitors strategies to keep you ahead in the game. By monitoring their SEO performance daily, we identify opportunities to outshine them and refine your strategy for better rankings and visibility. Beat the competition with data-driven insights and a proactive approach.",
    imgSrc: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742915405/comptitor-analysis_vzlrkt.svg",
  },
  {
    title: "Content Creation",
    description:
      "Great content is the backbone of SEO, and our dedicated team of in-house writers and editors excels in creating optimized content that ranks. With well-researched, engaging, and keyword-focused articles, we ensure your site attracts organic traffic and keeps users engaged, driving long-term results.",
    imgSrc: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742915405/content-creation_vttkao.svg",
  },
  {
    title: "On-Page SEO",
    description:
      "We implement quality on-page SEO strategies to ensure Google effectively identifies and crawls your website. By optimizing content, metadata, and keywords, we help search engines understand what you aim to rank for, boosting your website's visibility and search rankings.",
    imgSrc: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742915405/onpage-optimisation_1_riqexd.svg",
  },
  {
    title: "Off-Page SEO",
    description:
      "Our expert off-page SEO team focuses on high-quality link building, blog posting, and forum engagement to enhance your websites authority. These strategies improve your website's credibility, drive organic traffic, and help you rank higher on search engines.",
    imgSrc: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742915405/link-building_1_nabrig.svg",
  },
  {
    title: "Content Strategy",
    description:
      "We regularly update content strategies based on your websites search engine performance, ensuring optimal results. By refining and improving your content, we help your site stay competitive and continue to rank higher on search engines.",
    imgSrc: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742915405/content-strategy_a9drjx.svg",
  },
  {
    title: "SEO Reporting",
    description:
      "Receive detailed monthly SEO reports highlighting both on-page and off-page activities, along with your websites current search engine rankings. Stay informed on the progress and effectiveness of your SEO strategy for continuous growth and better visibility.",
    imgSrc: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742915405/reporting-and-tracking_1_oevqdn.svg",
  },
];

  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        Best SEO Services Company in Bangalore

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
                Best SEO Services Company in Bangalore

                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-8 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
  {/* Image Section (5 columns on larger screens) */}
  <div className="md:col-span-5 flex justify-center px-4 sm:px-6 lg:px-7">
    <img
      src="https://res.cloudinary.com/s2ucdn/image/upload/v1734702801/seo-concept-illustration_114360-28691_heqem0.jpg" 
      alt="Career at OrganicAds"
      className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
    />
  </div>

  {/* Content Section (7 columns on larger screens) */}
  <div className="md:col-span-7 text-justify px-2">
    <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
     Professional SEO Services in Bangalore to Elevate Your Business
    </h2>
    <p className="mt-4 text-gray-700">
      Having a website without search engine optimization is like opening a shop and not telling anyone about it. In todays digital era, if your business lacks a strong online presence, you miss out on connecting with a larger audience of potential customers. Opting for a comprehensive Digital Marketing and SEO strategy is the key to staying ahead of the competition.
    </p>
    <p className="mt-4 text-gray-700">
      OrganicAds is a trusted SEO company in Bangalore, powered by a team of experienced SEO experts and analysts. Our tailored SEO packages cater to businesses of all sizes, ensuring effective results regardless of scale. Partner with a professional team known for delivering top-notch SEO services, driving consistent growth, and boosting online visibility for years. Get ready to transform your business today!
    </p>

    <Link href="/seo-cost-calculator" passHref>
      <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
        SEO Cost Calculator <ArrowRight className="ml-2" /> 
      </Button>
    </Link>
  </div>
</div>


<section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        {/* Cards Grid (3 Cards per Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="shadow rounded-lg">
              <CardContent className="p-6 text-center">
                <img src={service.img} alt={service.alt} className="mx-auto mb-4 w-20 h-20" />
                <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                <p className="text-gray-600 mt-2 text-justify">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
</section>


<section id="seo-results" className="py-20 bg-[#fff6ed] font-poppins">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-2xl font-medium text-blue-600">
            Recent SEO Ranking Successes
          </h2>
        </div>

        {/* SEO Results Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seoResults.map((result, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
                {result.website} | <span className="text-blue-500">{result.domain}</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Keywords</th>
                      <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Current Ranking</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.keywords.map((keyword, i) => (
                      <tr key={i} className="border border-gray-200">
                        <td className="px-4 py-2 border text-gray-700">{keyword.term}</td>
                        <td className="px-4 py-2 border text-center font-medium text-blue-600">
                          {keyword.rank}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          
<Button asChild className="rounded-lg inline-flex justify-center items-center text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
  <Link href="/seo-results-from-organic-ads">
    View All SEO Results <ArrowRight />
  </Link>
</Button>

        </div>
      </div>
</section>

<section className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-7xl px-7">
        <h3 className="text-center text-2xl md:text-2xl font-medium text-blue-600">
          SEO Process Bangalore
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {seoProcessSteps.map((step, index) => (
            <Card key={index} className="shadow border rounded-lg">
              <CardHeader className="flex flex-col items-center">
                <Image
                  src={step.imgSrc}
                  alt={step.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <CardTitle className="text-lg font-semibold mt-4 text-gray-900">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm text-justify">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
</section>

<FeaturedOn />

<TestimonialCarousel />

<SeoServicesFaq />

    </div>
  );
};

export default SeoContent;
