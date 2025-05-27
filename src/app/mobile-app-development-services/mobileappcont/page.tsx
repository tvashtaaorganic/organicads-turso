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
import  TestimonialCarousel  from "@/app/testimonials/page";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const MobileAppContents = () => {

  const processData = [
    {
      img: "https://res.cloudinary.com/s2ucdn/image/upload/v1744275295/app-developer_wvbajb.svg",
      title: "Experienced App Developer",
      aos: "fade-up",
    },
    {
      img: "https://res.cloudinary.com/s2ucdn/image/upload/v1744275313/effective-app-design_mjhnyj.svg",
      title: "Effective App Design",
      aos: "fade-down",
    },
    {
      img: "https://res.cloudinary.com/s2ucdn/image/upload/v1744275325/on-time_ga4bac.svg",
      title: "On Time Delivery",
      aos: "fade-up",
    },
    {
      img: "https://res.cloudinary.com/s2ucdn/image/upload/v1744275334/compititive-pricing_sxjsac.svg",
      title: "Competitive Pricing",
      aos: "fade-down",
    },
    {
        img: "https://res.cloudinary.com/s2ucdn/image/upload/v1744275348/100-satisfaction_vhthhu.svg",
        title: "100% Satisfaction",
        aos: "fade-down",
    },
    {
        img: "https://res.cloudinary.com/s2ucdn/image/upload/v1744275372/customer-support_nmsn9c.svg",
        title: "Best Customer Support",
        aos: "fade-down",
    },
  ];

  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        Mobile App Development Company in Bangalore

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
                Mobile App Development Company 

                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-16 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1744274954/android-app-development_ll9xpt.webp"
            alt="Android App Development Services"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Android App Development Services
          </h2>
          <p className="mt-4 text-gray-700">
          Ready to build your first Android app? At OrganicAds, our skilled professionals and software engineers bring years of experience in developing user-friendly, high-performance Android apps. We specialize in delivering tailored solutions for both small and large businesses, offering top-notch Android app development services. Whether you are looking to create a business app or need a custom Android solution, we are here to help. If you are searching for a reliable Android app development company in Bangalore, look no further. Contact us today for a free quote and get started on your app development journey!
         </p>
        
        </div>
</div>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1744274969/ios-app-development_xty5s9.webp"
            alt="iPhone App Development Services"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          iPhone App Development Services
          </h2>
          <p className="mt-4 text-gray-700">
          Looking to build an iOS app for your customer base? Your search ends here! OrganicAds is a trusted name for iPhone app development in Bangalore. We specialize in creating innovative iPhone apps tailored to your business needs. Our team uses the latest technologies to develop intelligent business solutions that ensure seamless user experiences. At OrganicAds, we prioritize delivering everything you need to take your business to the next level. If you are looking for professional iPhone app development services, get in touch with us today for a free quote!.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1744274980/hybrid-app-development_jd1fud.webp"
            alt="Hybrid App Development Services"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Hybrid App Development Services
          </h2>
          <p className="mt-4 text-gray-700">
          OrganicAds offers exceptional Hybrid App Development services, providing you with access to experienced UX designers and visual designers who specialize in mobile web development technologies. Our robust, high-performing hybrid app solutions are designed to meet all your business needs. If you are searching for an affordable app developer in Bangalore, trust our cross-functional team of experts to deliver the best results. With OrganicAds, you get the perfect blend of performance, design, and cost-effective development for your hybrid mobile app. Contact us today for a free consultation!.
         </p>
        </div>
</div>

<div className="mt-10 mb-10 items-center text-center">
<Link href="/contactus" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
             Know App Cost <ArrowRight className="ml-2" />
            </Button>
          </Link>
</div>

<section className="bg-[#fff6ed] text-black py-12">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="text-center mb-10">
      <h3 className="text-2xl sm:text-2xl font-medium">Why Choose Us?</h3>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {processData.map((item, index) => (
        <div
          key={index}
          className="text-center"
          data-aos={item.aos}
          data-aos-anchor-placement="bottom-bottom"
        >
          <Image
            src={item.img}
            alt={item.title}
            width={60}
            height={60}
            className="mx-auto mb-4 sm:w-[80px] sm:h-[80px]"
          />
          <h4 className="text-base font-medium sm:text-lg">{item.title}</h4>
        </div>
      ))}
    </div>
  </div>
</section>


<TestimonialCarousel />


    </div>
  );
};

export default MobileAppContents;
