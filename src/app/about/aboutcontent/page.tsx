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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutContent = () => {
  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
          About OrganicAds Digital Marketing Company
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
                  About Us
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 sm:mt-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
  
  <div className="md:col-span-12 text-justify px-2">
    <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium">
    Bangalores Digital Marketing Experts: Boost Your Business with Results-Driven Strategies
    </h2>
    <p className="mt-4 text-gray-700">
    At OrganicAds, our entire team is focused on one mission - delivering the best Digital Marketing Services. We are a technology-driven digital marketing company with a deep understanding of what newly established businesses need. We achieve this efficiently by creating stunning websites and implementing effective digital marketing strategies. Consider us your extended marketing team, always ready to deliver high-quality digital identities.
    </p>
    <p className="mt-4 text-gray-700">
    OrganicAds powerful team consists of carefully selected experts from website development and digital marketing fields. Each member supports one another, fostering growth and learning, ensuring that we continuously provide you with the best services. Every day, we transform businesses, helping them adapt to the ever-evolving digital marketing landscape. We assist brands in evolving for sustained growth.
    </p>
   
   
  </div>
</div>


<div className="container mx-auto px-4 grid items-center py-5 max-w-7xl sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Vision Card */}
        <Card className="border border-dashed border-gray-300 shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6">
            <img
              src="https://res.cloudinary.com/s2ucdn/img/upload/v1734531434/opportunity_wux6kz.png"
              alt="Our Vision"
              title="Our Vision"
              width={100}
              height={100}
              className="rounded-none"
            />
            <div className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600 text-xl">Our Vision</CardTitle>
              </CardHeader>
              <p className="text-gray-700 text-justify">
                At OrganicAds, we have established strong relationships with clients across India
                by delivering seamless website development and result-driven SEO services.
                Our goal for the future is to expand globally, sharing our expertise with brands worldwide.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card className="border border-dashed border-gray-300 shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6">
            <img
              src="https://res.cloudinary.com/s2ucdn/img/upload/v1734531435/leadership_rsa6iz.png"
              alt="Our Mission"
              title="Our Mission"
              width={100}
              height={100}
              className="rounded-none"
            />
            <div className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600 text-xl">Our Mission</CardTitle>
              </CardHeader>
              <p className="text-gray-700 text-justify">
                At OrganicAds, our mission is to deliver innovative and impactful brand solutions that
                lead with purpose, stay relevant, and create meaningful change.
              </p>
            </div>
          </CardContent>
        </Card>
    </div>
</div>



    </div>
  );
};

export default AboutContent;
