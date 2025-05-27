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
import { motion } from "framer-motion";
import FaqTraning from "@/app/faqhome/seotrainingfaq/page";

const SeoTraningContent = () => {
  const courses = [
    {
      title: "SEO Basics",
      topics: [
        "Learn What is Search Engine Optimization",
        "How Search Engine Works",
        "Crawling, Indexing & Processing Concept",
        "White Hat, Black Hat & Gray Hat SEO Overview",
        "Google Algorithm Updates",
        "Google Analytics",
        "Google Search Console / Webmaster",
      ],
    },
    {
      title: "On-Page SEO",
      topics: [
        "Technical SEO",
        "Keyword Research",
        "Keyword Mapping",
        "Title and Meta Description Creation",
        "Single Page Optimization",
        "Image Optimization",
        "URL Optimization",
        "Schema Concept",
        "Sitemap Optimization",
        "Robots.txt Optimization",
        "404 Error Optimization",
      ],
    },
    {
      title: "Learn Off Page SEO",
      topics: [
        "Link Building",
        "Business Listing",
        "Profile Creation",
        "Image Sharing",
        "Video Sharing",
        "Search Engine Submission",
        "Blog/Guest Blog Posting",
        "Infographic Submission",
        "Doc, PPT, PDF Sharing",
        "Classified Posting",
        "Do Follow, No Follow Concept",
        "Index, No index Concept",
        "Anchor Text Concept",
        "Competitor Research",
      ],
    },
    {
      title: "Social Media Marketing",
      topics: [
        "Facebook Marketing",
        "Twitter Marketing",
        "Instagram Marketing",
        "LinkedIn Marketing",
      ],
    },
    {
      title: "Free Google Ads",
      topics: [
        "Google Ads Campaign Creation & Management",
        "Google Ads Extensions",
        "Display Ads",
      ],
    },
    {
      title: "Free Content Marketing Training",
      topics: [
        "How to Choose Best Topic for Blog",
        "Content Optimization (Blog Optimization)",
        "Blog Image Creation (Free Canva Training)",
      ],
    },
  ];

  return (
    <div className="font-poppins">
      {/* Header Section */}
      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
            SEO Training in Bangalore
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
                    SEO Training in Bangalore
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
            <img
              src="https://res.cloudinary.com/s2ucdn/image/upload/v1735560580/seo-training_dhdg9m.jpg"
              alt="SEO Training in Bangalore"
              className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
            />
          </div>

          {/* Content Section (8 columns on larger screens) */}
          <div className="md:col-span-7 text-justify px-2">
            <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Best SEO Training Institute in Bangalore
            </h2>
            <p className="mt-4 text-gray-700">
              SEO is crucial for driving targeted traffic to your website.
              Imagine having access to this essential skill with just a call
              away. For those looking to advance their careers in the SEO
              industry and master SEO techniques, we offer top-notch SEO
              training in Bangalore. At OrganicAds, we provide comprehensive
              training that not only covers SEO skills but also offers in-depth
              insights into effective optimization strategies.
            </p>
            <p className="mt-4 text-gray-700">
              If you are searching for an SEO course in Bangalore, choose us as
              your trusted SEO institute to kickstart your journey into the
              world of search engine optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-5 mt-3">
            <motion.h3
              className="text-white text-2xl font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Who Can Join this SEO Course in Bangalore?
            </motion.h3>
            <motion.p
              className="text-white text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We Design SEO Course for BCA, MCA, BSc IT, MSc IT, PGDCA, Computer
              Engineering, and any Graduate Students.
            </motion.p>
          </div>

          <div className="mb-3">
            <motion.h4
              className="text-white text-xl font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Why Choose OrganicAds?
            </motion.h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Flexible Timing",
                "Lowest SEO Course Fees",
                "Certified Course",
                "100% Live Project Work Training",
                "100% Job Placement",
                "SEO Expert Team",
              ].map((item, index) => (
                <motion.h4
                  key={index}
                  className="text-white flex items-center space-x-2 text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <span className="text-green-400">✔</span>
                  <span>{item}</span>
                </motion.h4>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <h3 className="text-center text-3xl font-medium text-blue-600 mb-10 mt-10">
            SEO Cum Digital Marketing Course Overview
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg p-6 transition-transform duration-300 hover:scale-105"
                data-aos="fade-up"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  {course.title}
                </h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {course.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <p className="text-white text-justify text-base leading-relaxed">
              Looking for the best SEO training institute in Bangalore?{" "}
              <span className="font-semibold">OrganicAds</span> offers
              affordable and high-quality SEO training to help you master the
              skills required for a successful career in search engine
              optimization. We have a large student base from Bangalore and many
              other cities across Karnataka. Our SEO courses are designed to
              provide you with essential SEO knowledge in a short time, ensuring
              you become an expert in just 45 days. <br />
              <br />
              At <span className="font-semibold">OrganicAds</span>, we focus on
              teaching you the key elements of SEO, including website
              optimization and traffic generation. Our courses cover the
              importance of internal linking, link-building techniques, and how
              to analyze and improve links for better SEO performance. With our
              expert training, you will understand how search engines work,
              conduct effective keyword research, and improve your websites
              search engine ranking. <br />
              <br />
              Our goal is to turn you into one of the best SEO professionals in
              India. Our highly qualified SEO trainers ensure you gain expertise
              in various aspects of SEO, equipping you with the skills needed to
              succeed in this ever-evolving field. You will learn how to analyze
              search engine results, optimize websites, and improve rankings to
              drive more organic traffic. <br />
              <br />
              The SEO training at{" "}
              <span className="font-semibold">OrganicAds</span> is practical and
              engaging, making you ready to take on various SEO-related tasks
              such as pay-per-click advertising, social media marketing, content
              optimization, and more. We provide both basic and advanced SEO
              training, so whether you are a beginner or looking to deepen your
              SEO expertise, <span className="font-semibold">OrganicAds</span>{" "}
              is the best place for you. <br />
              <br />
              If youre in Bangalore or any nearby areas,{" "}
              <span className="font-semibold">OrganicAds</span> is your trusted
              choice for top-tier SEO training. Join us today and take the first
              step towards becoming an SEO expert!
            </p>
          </div>
        </div>
      </section>


<FaqTraning />


    </div>
  );
};

export default SeoTraningContent;
