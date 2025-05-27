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
import { Card, CardContent } from "@/components/ui/card";
import FeaturedOn from "@/app/featuredon/page";
import  TestimonialCarousel  from "@/app/testimonials/page";

const DmContent = () => {

    
    const services = [
        {
          img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734621337/message_t8d6hm.png",
          alt: "Email Marketing",
          title: "Email Marketing",
          description:
            "Email Marketing: Still the King of Leads & Conversions! Say goodbye to generic emails! At OrganicAds, we design personalized, results-driven email campaigns that keep your audience engaged. From captivating visuals and precise audience targeting to optimized strategies, our email marketing solutions ensure higher open rates, improved click-throughs, and maximum ROI. Boost your brands reach and conversions with expertly crafted email campaigns by OrganicAds.",
        },
        {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734621893/marketing_kw2p5u.png",
            alt: "Social Media Marketing (SMM)",
            title: "Social Media Marketing (SMM)",
            description:
              "Effortlessly Manage, Engage, and Grow Your Social Media Presence! With OrganicAds, maintaining vibrant and thriving social media accounts becomes seamless. We craft engaging, relatable content that resonates with your audience and inspires them to share it widely. Boost your brand visibility, build connections, and drive meaningful interactions with our expert social media strategies.",
          },
          {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734622100/seo_ecqijc.png",
            alt: "Search Engine Optimization (SEO)",
            title: "Search Engine Optimization (SEO)",
            description:
              "A Stunning Website is Just the Start - Lets Make it Visible! What good is a great website if it doesnt attract visitors? Let OrganicAds optimize your site with proven SEO strategies to boost visibility and drive organic traffic that converts. Your audience is searching-lets make sure they find you!",
          },
          {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734623058/seo_1_rexyoq.png",
            alt: "Search Engine Marketing (SEM)",
            title: "Search Engine Marketing (SEM)",
            description:
              "Targeted Paid Ads That Deliver Results! Attract the right audience with precision-placed paid ads on search engines, social media, and apps. Maximize your ROI with strategic ad placements designed to boost brand visibility, drive qualified traffic, and generate meaningful conversions for your business.",
          },
          {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734700818/rating-stars_uw2yd6.png",
            alt: "Online Reputation Management",
            title: "Online Reputation Management",
            description:
              "Build a Positive Brand Identity with Proactive Online Reputation Management Your brands public perception is vital for its success. Our dedicated team actively monitors and responds to online feedback, ensuring your reputation remains favorable. By addressing reviews, comments, and social mentions, we help shape a strong, trusted identity that resonates with your audience and fosters long-term success.",
          },
          {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734701167/programming_pc8q53.png",
            alt: "Web Design & Web Development",
            title: "Web Design & Web Development",
            description:
              "Elevate Your Online Presence with Stunning, High-Performance Websites Transform your brands digital identity with SEO-optimized, result-driven websites designed to captivate and convert. Our team crafts powerful, brand-centric, and functional sites with the perfect blend of features to engage your audience and achieve your business goals. Drive more than clicks—drive results.",
          },
      ];


  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        Digital Marketing Agency in Bangalore

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
                Digital Marketing Services

                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-6 sm:mt-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
  
  <div className="md:col-span-12 text-justify px-2">
    <h3 className="text-center text-md sm:text-md md:text-1xl lg:text-1xl font-medium mb-3">Tired of crickets? Lets get your audience buzzing, Grow your brand beyond borders
    </h3>
    <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium">
    Stop being invisible online-get your brand discovered with our powerful digital marketing strategies that drive real results.
    </h2>
    <p className="mt-4 text-gray-700">
    In todays fast-paced digital era, having a strong online presence is no longer optional-its essential for business growth. As the competition continues to grow, implementing effective digital marketing strategies is crucial to connecting with your target audience and achieving your goals. Thats where a trusted Digital Marketing Services Company in Bangalore can make all the difference. With proven expertise, we help businesses elevate their online visibility, engage their audience, and drive sustainable growth.
    </p>
    <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium mt-5">
    Why Digital Marketing is a Game-Changer
    </h2>
    <p className="mt-4 text-gray-700">
    Digital marketing has completely transformed how businesses connect with their audience. Unlike traditional marketing methods, it allows you to reach a broader audience with measurable results at a significantly lower cost. From boosting brand awareness to driving website traffic or generating qualified leads, digital marketing opens doors to endless opportunities tailored to your specific objectives.
    </p>
    <p className="mt-4 text-gray-700">
    Whether youre looking to build a solid online presence, increase engagement, or scale your business globally, our custom digital marketing solutions can help you thrive in the competitive online landscape.
    </p>
   
  </div>
</div>


<section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        {/* Cards Grid (3 Cards per Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

<FeaturedOn />

<TestimonialCarousel />

    </div>
  );
};

export default DmContent;
