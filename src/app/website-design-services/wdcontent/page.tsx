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
import WebDesignFaq from "@/app/faqhome/webdesignfaq/page";

const WebDesignContent = () => {

  const processData = [
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743083863/creative-design-orange_xakfdx.svg",
      title: "Creative Web Design",
      aos: "fade-up",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743083863/professional-designer_rogsru.svg",
      title: "Professional Designer",
      aos: "fade-down",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743083863/mobile-friendly_wtgbaz.svg",
      title: "Mobile Friendly",
      aos: "fade-up",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1743083863/call-to-action_bsa0n0.svg",
      title: "Effective Layout & Call-to-action",
      aos: "fade-down",
    },
  ];

  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        Website Design Company in Bangalore

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
                Website Design Company in Bangalore

                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-16 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735550850/gradient-responsive-website-design_23-2149565903_fr0x6m.avif"
            alt="Creative Web Design Company in Bangalore"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Creative Web Design Company in Bangalore
          </h2>
          <p className="mt-4 text-gray-700">
          Your website serves as your online identity, and it should be one-of-a-kind. It doesnot need to resemble anything else out there. At OrganicAds, we understand the significance of a business website and provide Creative Website Design Services tailored to your digital needs. As one of the best web design companies in Bangalore, we cater to businesses across various industries.
         </p>
         <p className="mt-4 text-gray-700">
         Our clients range from small startups to large enterprises. Whether you are launching a new website or looking to revamp your existing one, we are here to be your trusted web development partner.
         </p>
         <Link href="/website-cost-calculator" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
             Know Website Cost <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
</div>


<section className="bg-white text-black py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-2xl font-medium">Why We are the Top Website Designing Company in Bangalore?
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {processData.map((item, index) => (
            <div
              key={index}
              className="text-center"
              data-aos={item.aos}
              data-aos-anchor-placement="bottom-bottom"
            >
              <Image src={item.img} alt={item.title} width={80} height={80} className="mx-auto mb-4" />
              <h4 className="text-lg font-medium">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
</section>

<div className="bg-[#3b32f6] text-white py-12">

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743084283/responsive-web-design_ynoj9h.webp"
            alt="Responsive Web Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-white text-center">
          Responsive Web Design
          </h2>
          <p className="mt-4 text-white">
          Ensure your website looks stunning on all major devices. At OrganicAds, we specialize in responsive website design for laptops, smartphones, and tablets. Understanding that most users today access the internet via mobile, we follow a mobile-first approach to deliver visually appealing and functional responsive designs. Whether its a smartphone or desktop, we ensure your website delivers an exceptional user experience across all devices.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743084283/website-redesign_kex22a.webp"
            alt="Website Redesign"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-white text-center">
          Website Redesign
          </h2>
          <p className="mt-4 text-white">
          Our website redesign services can transform your outdated website into a modern, visually appealing one. Web design is a craft that requires expertise, and at OrganicAds, we have a team of skilled and creative designers who specialize in revamping websites to make them the best online representation of your brand. We focus on enhancing the aesthetics, user experience, and functionality, ensuring your website meets current design trends while serving your business needs effectively.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743084282/ecommerce-website-img_k4reps.webp"
            alt="eCommerce Website Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-white text-center">
          eCommerce Website Design
          </h2>
          <p className="mt-4 text-white">
          Designing an eCommerce website requires a perfect balance of visual appeal, customer engagement, and functionality. Your website should attract customers, encourage purchases, and include clear calls to action. At OrganicAds, we specialize in eCommerce website design and development, delivering tailored solutions that align with your business needs. Our team ensures your online store is user-friendly, visually stunning, and optimized for conversions, providing you with an eCommerce platform that drives growth and success.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743084283/customised-web-design_trszzg.webp"
            alt="Customized Web Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-white text-center">
          Customized Web Design
          </h2>
          <p className="mt-4 text-white">
          At OrganicAds, we specialize in custom website design tailored to reflect your business unique identity. Our team works closely with you to understand your vision and create a website that perfectly represents your brand and values. Whether you are a startup or an established company, our custom web design services ensure that your online presence is not only visually stunning but also aligned with your business goals. Let us bring your ideas to life with a website designed to make a lasting impact.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743084283/landing-page_elnhix.webp"
            alt="Landing Page Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-white text-center">
          Landing Page Design
          </h2>
          <p className="mt-4 text-white">
          Landing pages are crucial for converting visitors into customers, as they are the first thing users interact with when they visit your site. At OrganicAds, we offer professional landing page design services that ensure your pages are not only visually appealing but also optimized for conversions. Our team creates engaging landing pages that grab attention and encourage action, helping you capture more leads and boost sales. Trust the best landing page designers in Bangalore to craft a page that turns visitors into loyal customers.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1743084282/branding-image_g8jr0o.webp"
            alt="Branding, Stationery & Graphic Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-white text-center">
          Branding, Stationery & Graphic Design
          </h2>
          <p className="mt-4 text-white">
          Branding is more than just a logo—its the visual identity that represents your business. At OrganicAds, we specialize in creating a cohesive and distinct brand identity that includes everything from logos, packaging, color schemes, to taglines. As a trusted graphic design company in Bangalore, we ensure all these elements come together to form a powerful and memorable brand image. Whether you are a startup or an established organization, we provide comprehensive branding and design services to help your business stand out and make a lasting impression.
         </p>
        </div>
</div>

</div>

<TestimonialCarousel />

<WebDesignFaq />

    </div>
  );
};

export default WebDesignContent;
