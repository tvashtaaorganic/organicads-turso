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
import TestimonialCarousel from "@/app/testimonials/page";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WebDevFaq from "@/app/faqhome/webdevfaq/page";

const WebDevContents = () => {

  const processData = [
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743085969/experienced-developer-2_rfmqyl.svg",
      title: "Experienced Web Developer",
      aos: "fade-up",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743085969/clean-code-2_rcq6ii.svg",
      title: "Clean Code",
      aos: "fade-down",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743085969/on-time-2_yj2xbu.svg",
      title: "On Time Delivery",
      aos: "fade-up",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743085968/graphic-design_jsgm1c.svg",
      title: "Amazing Graphics",
      aos: "fade-down",
    },
    {
        img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743085968/seo-friendly_1_bcvijt.svg",
        title: "SEO Friendly Website",
        aos: "fade-down",
    },
    {
        img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743085969/optimization_1_st4rmp.svg",
        title: "Speed Optimized",
        aos: "fade-down",
    },
  ];

  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        Web Development Company in Bangalore

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
                Web Development Company in Bangalore

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
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743085971/wordpress-web-development_eejpbe.webp"
            alt="Wordpress Web Development"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Wordpress Web Development
          </h2>
          <p className="mt-4 text-gray-700">
          In todays competitive market, a great website is essential for business growth. Your website represents more than just images and content—its a powerful tool that defines the future of your business. At OrganicAds, we offer Custom WordPress Web Development Services tailored to your unique needs. As a leading Web Development Company in Bangalore, we also specialize in plugin development to enhance your websites functionality and deliver outstanding results. Trust us to build a website that sets your business apart and drives success.
         </p>
        
        </div>
</div>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743085971/php-web-development_qfrjsx.webp"
            alt="PHP Website Development"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          PHP Website Development
          </h2>
          <p className="mt-4 text-gray-700">
          Looking for a robust PHP website? At OrganicAds, we specialize in delivering unique and Custom PHP Websites and Web Applications designed to elevate your business. As a trusted name for PHP Website Development Services in Bangalore, we provide solutions at pocket-friendly prices. Our team also offers fully customized PHP development and web design services tailored to your specific requirements. Partner with us to create a seamless, dynamic, and user-friendly PHP website that drives your business forward.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743085971/ecommerce-web-development_corkmy.webp"
            alt="Ecommerce Website Development"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Ecommerce Website Development
          </h2>
          <p className="mt-4 text-gray-700">
          Our website redesign services can transform your outdated website into a modern, visually appealing one. Web design is a craft that requires expertise, and at OrganicAds, we have a team of skilled and creative designers who specialize in revamping websites to make them the best online representation of your brand. We focus on enhancing the aesthetics, user experience, and functionality, ensuring your website meets current design trends while serving your business needs effectively.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743085970/react-development_n8cjrf_ndskih.png"
            alt="React Website Development"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          React Website Development
          </h2>
          <p className="mt-4 text-gray-700">
          Looking for a fast, scalable, and dynamic website for your business? OrganicAds specializes in React Website Development to create high-performing web applications tailored to your needs. Reacts powerful library ensures seamless performance and an interactive user experience. Our skilled developers deliver custom-built solutions, from single-page applications to complex web platforms. Enhance your online presence with responsive designs, lightning-fast load times, and cutting-edge features. Let us bring your vision to life with our expert React development services. Contact us today to build your dream website!.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743085970/python-web-development_1_l7rmbe.webp"
            alt="Python Web Development"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Python Web Development
          </h2>
          <p className="mt-4 text-gray-700">
          OrganicAds offers business-centric services, including custom Python Web Development projects. Our team of dedicated Python web developers specializes in building secure, scalable, and robust Python web applications. Whether you are looking to migrate to Python or integrate it into your existing system, our experts ensure seamless transitions and top-notch performance. Trust OrganicAds to deliver innovative Python solutions tailored to your business needs. Let us take charge and transform your digital experience.
         </p>
        </div>
</div>

<div className="mt-10 mb-10 items-center text-center">
<Link href="/website-cost-calculator" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
             Know Website Cost <ArrowRight className="ml-2" />
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

<WebDevFaq />

    </div>
  );
};

export default WebDevContents;
