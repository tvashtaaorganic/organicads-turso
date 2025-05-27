"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image"; // Added for <Image> component
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Ensure Link is imported
import FilloutForm from "@/app/filloutcta/page";
import { Card, CardContent } from "@/components/ui/card";
import FaqOutsourcing from "@/app/faqhome/faqoutsource/page";

const SeoOutsourceContent = () => {
  const benefits = [
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742215378/12841628_zyhyne.png",
      alt: "Cost-Effective",
      title: "Cost-Effective",
      description:
        "OrganicAds, a trusted SEO outsourcing company in Bangalore, offers premium services at highly competitive rates. Catering to businesses of all sizes, our SEO packages are designed to be budget-friendly without compromising on quality.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742215474/3135727_mw1tdn.png",
      alt: "Concentrate On Business",
      title: "Concentrate On Business",
      description:
        "With years of expertise, the SEO specialists at OrganicAds deliver exceptional services, allowing you to concentrate on your core business operations without the hassle of managing SEO strategies.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742215527/7778257_juoo9s.png",
      alt: "Guaranteed Results",
      title: "Proven Track Record",
      description:
        "At OrganicAds, we have successfully delivered results to hundreds of clients within the promised timeframe. Our commitment to guaranteed outcomes makes us a trusted choice for achieving your SEO goals.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742215642/8644465_cku3o3.png",
      alt: "Industry Expertise",
      title: "Expertise Across Industries",
      description:
        "At OrganicAds, our team comprises seasoned professionals from diverse industries who collaborate to craft tailored SEO strategies for your business.",
    },
  ];

  const services = [
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742214104/17108644_hlyy0o.png",
      alt: "Website Audit",
      title: "Website Audit",
      description:
        "If you already have a business website, OrganicAds will conduct a thorough audit to evaluate its potential to rank on search engine result pages (SERPs). Our team ensures that all your web pages are fully optimized, enhancing their visibility and ranking on SERPs.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742214183/11739168_rl4vru.png",
      alt: "Keyword Research",
      title: "Keyword Research",
      description:
        "OrganicAds utilizes advanced tools to perform in-depth keyword research, identifying high-performing keywords that can propel your business to success. These carefully chosen keywords will be seamlessly integrated into the blogs, web content, and articles we craft for you, ensuring maximum visibility and engagement.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742214309/4250434_yhn1gr.png",
      alt: "On-Page Optimization",
      title: "On-Page Optimization",
      description:
        "At OrganicAds, we optimize your web pages to enhance both your website's rankings and user experience. Our team ensures that every element, including web content, images, meta descriptions, and meta titles, is fully optimized to boost performance and visibility on search engines.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742214488/7440071_rtkymo.png",
      alt: "Off-Page Optimization",
      title: "Off-Page Optimization",
      description:
        "At OrganicAds, we focus on creating keyword-rich blogs and articles that align with your business and industry. Our off-page SEO strategies are designed to enhance your website’s ranking, authority, and trust, ensuring long-term success in search engine results.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742214644/12362205_ymhysc.png",
      alt: "Google Business Profile Optimization",
      title: "Google Business Profile Optimization",
      description:
        "If your business serves a local market, OrganicAds’ local SEO services will help you outshine your competitors. We will optimize your Google Business Profile, create a Google My Business page, and ensure your business is listed across relevant local directories to boost your online presence and visibility.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742214886/11516506_ucbtzb.png",
      alt: "Content Marketing",
      title: "Content Marketing",
      description:
        "At OrganicAds, we offer comprehensive content marketing services. Our expert team creates keyword-rich blogs, articles, and website content tailored to your business. We also produce engaging social media posts to boost your brand visibility, ensuring consistent, high-quality content that resonates with your audience and drives traffic to your site.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742215038/5864382_jyt19k.png",
      alt: "White Label Reporting",
      title: "White Label Reporting",
      description:
        "At OrganicAds, we provide white label reporting services that allow you to present detailed and professional reports to your clients. Our reports are crafted to highlight the progress of SEO efforts and demonstrate how these strategies are driving results. With our comprehensive reporting, you can showcase the impact of your work and build stronger client relationships.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742215144/5817518_pah3ac.png",
      alt: "Paid Tools",
      title: "Paid Tools",
      description:
        "At OrganicAds, we utilize a range of advanced paid tools to enhance website rankings. Tools like Ahrefs, Moz, and SEMrush are part of our toolkit to drive SEO success. Each of these tools offers unique features to help us analyze, optimize, and improve your website’s performance, ultimately boosting its visibility and ranking on search engines. With these tools, we ensure your SEO strategy is data-driven and effective.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742215239/9793699_brn94u.png",
      alt: "24*7 Customer Support",
      title: "24*7 Customer Support",
      description:
        "At OrganicAds, we provide round-the-clock customer support to assist you anytime, day or night. Our dedicated team is always ready to help with any inquiries, whether it's guidance on our services or quick answers to your questions. No matter the time, we're here to ensure your experience with us is seamless and hassle-free.",
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const text = `At OrganicAds, a leading SEO outsourcing agency in Bangalore, we focus on building long-term partnerships with our clients by offering reliable, consistent, and high-quality SEO solutions. We collaborate closely with our clients, starting from the initial stages of understanding their goals and expectations for SEO campaigns. Based on these insights, we create a customized SEO strategy tailored to achieve their objectives.
      
      Before diving into the full SEO strategy, we conduct a comprehensive project analysis to identify the best strategies for your business. Once we understand what adjustments are necessary for your marketing plan, we will discuss our vision and proposed changes with you. After this, we present you with SEO packages and customized plans that align with your goals. From site analysis to keyword mapping, we ensure that every step is designed to improve your website’s ranking on SERPs.
      
      At OrganicAds, we believe that a well-planned SEO strategy is essential for success. Without one, time, effort, and money can be wasted. As an experienced SEO outsourcing company, we employ the right tools and expertise to monitor your business performance after implementing our strategies. We also provide detailed reports to show the effectiveness of our services and how they contribute to your business growth.
      
      Getting started with OrganicAds is simple. Schedule a consultation with our SEO expert, who will guide you through our SEO packages and recommend the most suitable services for your business. We are committed to your success, which is why we take the time to understand your needs and develop an effective SEO strategy that works for you. You can reach us anytime via email at contact@organicads.in or call us at +91-7259404569. We are available 24/7 to assist you with your SEO requirements and answer any questions you may have.`;

  const previewText = text.substring(0, 300) + "...";

  return (
    <div className="font-poppins">
      {/* Header Section */}
      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
            SEO Outsourcing Company in Bangalore
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
                    SEO Outsourcing Company in Bangalore
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="container mx-auto mt-3 mb-3 w-full px-4 sm:px-6 lg:px-8 py-3">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-7 sm:mt-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Image Section (4 columns on larger screens) */}
          <div className="md:col-span-5 flex justify-center space-y-16 px-4 sm:px-6 lg:px-8">
            <Image
              src="https://res.cloudinary.com/djiki7tvo/image/upload/v1742209948/25921169_7155205-scaled_knmwvr.jpg"
              alt="SEO Outsourcing Company in Bangalore"
              width={1280}
              height={720}
              className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-cover rounded-lg"
            />
          </div>

          {/* Content Section (8 columns on larger screens) */}
          <div className="md:col-span-7 text-justify px-2">
            <h2 className="text-left text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Outsource SEO Services To The Experts In Bangalore
            </h2>
            <p className="mt-4 text-gray-700">
              In the digital age, where businesses are rapidly adopting online strategies to sell their products and services, SEO has become an essential part of their success formula. Optimized websites and content not only make your business more accessible to users but also position your brand as a leader in the industry. While some businesses opt for in-house SEO teams, outsourcing to a professional SEO agency often delivers superior results.
            </p>
            <p className="mt-4 text-gray-700">
              OrganicAds is a trusted SEO outsourcing company in Bangalore, known for offering premium SEO services to businesses of all sizes. With years of expertise, we provide customized SEO packages tailored to fit your budget and business requirements, enabling you to boost your brand identity and achieve measurable results.
            </p>
            {/* CTA Button */}
            <div className="text-left mt-8">
              <Link href="/seo-cost-calculator">
                <Button className="rounded-lg inline-flex justify-left items-left text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
                  SEO Cost Calculator <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 w-full px-4 sm:px-6 lg:px-8 py-3">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-7 sm:mt-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Content Section (7 columns on larger screens) */}
          <div className="md:col-span-6 text-justify px-2">
            <h3 className="text-left text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium text-white">
              Why Hire Outsourcing SEO Services?
            </h3>
            <p className="mt-4 text-gray-300">
              Outsourcing SEO services involves partnering with a third-party agency, company, or professional to implement SEO strategies tailored to your business needs. OrganicAds, a leading SEO outsourcing company in Bangalore, provides businesses with numerous advantages by allowing them to focus on core operations while SEO experts handle complex optimization tasks.
            </p>
            <p className="mt-4 text-gray-300">
              Selecting the right SEO outsourcing agency is crucial for achieving your marketing goals. Look for a company with a proven track record, a strong client base, and positive testimonials from previous clients. These factors can help you determine if the company is capable of meeting your SEO requirements effectively.
            </p>
            <p className="mt-4 text-gray-300">
              Outsourcing SEO to a trusted agency like OrganicAds ensures that your brand vision aligns seamlessly with your marketing and branding strategies. Skilled SEO professionals at OrganicAds set measurable targets, offering you high-quality services without the need to hire a full-time in-house team. This flexibility not only saves time and resources but also guarantees expert solutions that drive results, making it the ideal choice for businesses in Bangalore.
            </p>
          </div>

          {/* Image Section (5 columns on larger screens) */}
          <div className="md:col-span-6 flex justify-center">
            <FilloutForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <h3 className="text-center text-xl sm:text-3xl font-medium mb-8 text-blue-500">
            Why do you need to outsource SEO services?
          </h3>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <Card key={index} className="shadow rounded-lg">
                <CardContent className="p-6 text-center">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 mt-2 text-justify">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section Title */}
          <h3 className="text-center text-2xl sm:text-3xl font-medium text-primary mb-10">
            How will outsourcing SEO services elevate your business?
          </h3>

          {/* Cards Grid (3 Cards per Row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow rounded-lg">
                <CardContent className="p-6 text-center">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    width={80}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">{service.title}</h4>
                  <p className="text-gray-600 mt-2 text-justify">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FaqOutsourcing />

      <section className="bg-gray-900 py-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <h3 className="text-center text-2xl sm:text-3xl font-medium mb-7 text-white">
              Get Started with OrganicAds
            </h3>
            {(isExpanded ? text : previewText)
              .split("\n")
              .map((paragraph, index) => (
                <p key={index} className="text-white text-justify text-base leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            <div className="text-center mt-4">
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="rounded-lg inline-flex justify-left items-left text-sm font-semibold py-3 px-4 bg-white text-black hover:bg-blue-700 hover:text-white pointer-events-auto transition"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoOutsourceContent;
