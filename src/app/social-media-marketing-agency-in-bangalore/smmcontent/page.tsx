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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SmmContentFaq from "@/app/faqhome/smmfaq/page";

const SmmContent = () => {

    
    const services = [
        {
          img: "https://res.cloudinary.com/s2ucdn/image/upload/v1735058337/facebook_cs9kpw.png",
          alt: "Facebook Marketing Services",
          title: "Facebook Marketing Services",
          description:
            "Reach the right audience and boost your business with our Facebook Marketing Services. As a results-driven Social Media Marketing (SMM) company in Bangalore, we specialize in helping brands grow through targeted Facebook campaigns. Our services include setting up and managing your Facebook page, creating custom social media graphics for daily posts, running effective Facebook Ads, and handling brand page management to ensure your online presence remains strong. Contact us today to get a dedicated Social Media Manager who can drive success for your brand on Facebook.",
        },
        {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1735058513/instagram_eepyky.png",
            alt: "Instagram Marketing Services",
            title: "Instagram Marketing Services",
            description:
              "If your Instagram posts are not driving engagement, its time to revamp your strategy with our expert Instagram Marketing services. We help your brand stand out on Instagram and connect with the right audience. Our social media marketing team will craft tailored strategies to bring your brand to life, increase visibility, and boost interaction. Whether it's organic growth or running targeted ads, we ensure your brand gains the attention it deserves on Instagram. Lets work together to elevate your Instagram presence and achieve your marketing goals.",
          },
          {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1735058604/twitter_cgdud4.png",
            alt: "Twitter Marketing Services",
            title: "Twitter Marketing Services",
            description:
              "Unlock the power of Twitter with our customized Twitter Marketing services. Whether youre looking to boost brand awareness or drive engagement, we craft strategies tailored to your business goals. Our team specializes in both organic and paid Twitter campaigns, ensuring your content reaches the right audience. Want to go viral or trend on Twitter? Well help you create impactful campaigns that capture attention and spark conversation. Lets make your brand a trending topic today!",
          },
          {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1735058746/linkedin_jj7m4f.png",
            alt: "LinkedIn Marketing Services",
            title: "LinkedIn Marketing Services",
            description:
              "Maximize your professional reach with our LinkedIn Marketing services. LinkedIn is more than just a networking platform; its a powerful tool to attract potential clients, partners, and employees. Our expert team will manage your LinkedIn page, creating compelling content and strategies that engage key stakeholders and top talent. Whether you are looking to build your brands professional presence or connect with industry leaders, we tailor our services to meet your goals. Get in touch with us today and unlock the full potential of LinkedIn for your business!",
          },
          {
            img: "https://res.cloudinary.com/s2ucdn/image/upload/v1735058895/youtube_bgjezp.png",
            alt: "YouTube Marketing Services",
            title: "YouTube Marketing Services",
            description:
              "Unlock the power of video with our YouTube Marketing services! As video content continues to dominate online engagement, YouTube offers a creative and effective way to reach your audience. Our expert team specializes in video optimization, ensuring your content ranks higher, reaches the right audience, and engages viewers more effectively. Whether you are looking to grow your channel or drive targeted traffic to your brand, we handle the marketing so you can focus on creating great content. Have a YouTube channel? Let us take care of your YouTube marketing and help you grow your brand faster!",
          },
      ];

      const servicespage = [
        {
          img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742974110/increase-brand_uhzriy.svg",
          alt: "Drawing Your Audience",
          title: "Drawing Your Audience",
          description:
            "Our social media marketing services are designed to attract the right audience to your website, driving leads and potential customers. We focus on increasing your business visibility, ensuring that your brand reaches the target customers consistently. With our expertise, we help you stay in front of your audience, boosting engagement and conversion rates.",
        },
        {
          img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742974207/social-media-audit_oyjtcq.svg",
          alt: "Social Media Advertising",
          title: "Social Media Advertising",
          description:
            "Your brand needs a strong presence across all social media platforms to reach diverse demographics. Our services ensure that your brand is visible and engages with every potential customer. Through effective communication and targeted ads, we help you strengthen your brand's connection with your audience, driving awareness and loyalty.",
        },
        {
          img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742974288/creative-social-media_db72v9.svg",
          alt: "Creative Graphics & Videos",
          title: "Creative Graphics & Videos",
          description:
            "We create visually captivating graphics and videos for your social media, ensuring your content stands out. Professional-quality visuals not only leave a strong impression on your audience but also improve your reach, as social media platforms favor well-designed posts. Let us help you engage a wider audience with creative, attention-grabbing content.",
        },
        {
          img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742974372/unique-post-content_vj2kr4.svg",
          alt: "Converting Content Creation",
          title: "Converting Content Creation",
          description:
            "We specialize in creating high-quality content for all platforms, ensuring your brand reaches a broader audience and drives more sales. Effective content creation requires expertise and precision, and we bring both to the table, ensuring your message resonates and converts. Let us help you create impactful content that boosts engagement and sales.",
        },
];

  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        Best Social Media Marketing Agency in Bangalore

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
                Best Social Media Marketing Agency in Bangalore

                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 order-lg-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735057826/smm1_bxk6ja.png"
            alt="Social Media Marketing Company in Bangalore"
            className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 order-lg-2">
          <h2 className="text-2xl sm:text-2xl font-medium text-black text-center">
          We Are the Best Social Media Marketing Company in Bangalore
          </h2>
          <p className="mt-4 text-gray-700">
          Building a brand takes time and effort, and its not something that happens overnight. The journey to brand recognition requires experts who understand the intricacies of social media marketing. If you are looking for an experienced team to help you grow, a Social Media Marketing agency in Bangalore can support you in achieving your goals.
          </p>
          <p className="mt-4 text-gray-700">
          Regardless of your location, OrganicAds functions as your local social media agency. We specialize in curating and executing impactful brand campaigns and contests, helping you increase brand awareness. Our team will assist you in launching, growing, and continuously scaling your online presence.
          </p>

          <Link href="/get-quote" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
              Get Quote <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
</div>


<section className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-7xl px-2 sm:px-2 lg:px-7">
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


<section className="bg-[#fff6ed] py-12 px-4">
      <div className="container mx-auto max-w-7xl px-2 sm:px-2 lg:px-7">
        {/* Section Title */}
        <h3 className="text-2xl sm:text-2xl font-medium text-black text-center">
        Why Choose Us as Your Social Media Marketing Partner?

        </h3>
        {/* Cards Grid (3 Cards per Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-7">
          {servicespage.map((servicespage, index) => (
            <Card key={index} className="shadow rounded-lg">
              <CardContent className="p-6 text-center">
                <img src={servicespage.img} alt={servicespage.alt} className="mx-auto mb-4 w-20 h-20" />
                <h4 className="text-lg font-semibold text-gray-900">{servicespage.title}</h4>
                <p className="text-gray-600 mt-2 text-justify">{servicespage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
</section>


<FeaturedOn />

<TestimonialCarousel />

<SmmContentFaq />

    </div>
  );
};

export default SmmContent;
