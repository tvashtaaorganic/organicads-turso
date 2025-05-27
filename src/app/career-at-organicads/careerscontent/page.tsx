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
import { Mail, Phone } from "lucide-react";

const CareersContent = () => {
  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        Career at OrganicAds
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
                Career at OrganicAds
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 sm:mt-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
  {/* Image Section (4 columns on larger screens) */}
  <div className="md:col-span-5 flex justify-center space-y-16 px-4 sm:px-6 lg:px-8">
  <img
    src="https://res.cloudinary.com/djiki7tvo/image/upload/v1742025707/career-path-concept-illustration_114360-16154_liwwm4.jpg" 
    alt="Career at OrganicAds"
    className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
  />
</div>

  {/* Content Section (8 columns on larger screens) */}
  <div className="md:col-span-7 text-justify px-2">
    <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium text-blue-500">
    <span className="text-black">Career at </span>OrganicAds
    </h2>
    <p className="mt-4 text-gray-700">
    OrganicAds is rapidly becoming one of the top SEO companies in Bangalore. We provide a competitive yet supportive environment where individuals can thrive. Our team is driven by those who are passionate about transforming conversations into growth opportunities, seizing these opportunities, and turning them into sustainable careers.
    </p>
    <p className="mt-4 text-gray-700">
    We are deeply committed to nurturing every person within our organization, blending creativity, a professional work culture, and a passion for continuous learning. From everyday tasks to executive leadership, we help individuals find their perfect role and provide them with the tools and resources to grow and succeed alongside us.
    </p>
    
  </div>
</div>


<section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h3 className="text-center text-2xl font-semibold">Current Job Openings @ OrganicAds</h3>

        <div className="max-w-3xl mx-auto mt-8 bg-white text-gray-900 p-6 rounded-lg shadow-md">
          <div className="border-b pb-4 mb-4">
            <h4 className="text-xl font-bold">Jr. SEO Executive</h4>
            <p className="text-gray-700">No. of Vacancy: <span className="text-blue-600 font-semibold">2</span></p>
          </div>

          <div className="space-y-3">
            <p><strong>Required Skills:</strong> On-Page and Off-Page SEO</p>
            <p><strong>Experience:</strong> 0.6 to 2 Years</p>
            <ul className="list-disc list-inside text-gray-800">
              <li>A good link-building skill</li>
              <li>A good team player</li>
              <li>Basic HTML with On-Page & Blog Posting</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-4">
            <a href="tel:+917259404569" className="flex items-center text-blue-600 hover:underline">
              <Phone className="w-5 h-5 mr-2" /> (+91) 7259404569
            </a>
            <a href="mailto:contact@organicads.in" className="flex items-center text-blue-600 hover:underline">
              <Mail className="w-5 h-5 mr-2" /> contact@organicads.in
            </a>
          </div>
        </div>
      </div>
    </section>




    </div>
  );
};

export default CareersContent;
