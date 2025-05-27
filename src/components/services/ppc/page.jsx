"use client"; // Ensures this component is rendered client-side

import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "@/app/footer/page";
import GoogleReview from "@/app/googlereview/page";
import Navbar from "@/app/navigation/page";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PpcContentFaq from "@/app/faqhome/ppcfaq/page";
import TestimonialCarousel from "@/app/testimonials/page";
import Image from "next/image";

const whyChooseData = [
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742979624/10059963_tc2eax.png",
      title: "Improve ROI",
      desc: "OrganicAds promises the best return on investment with expert strategies tailored to your needs. Our experienced team ensures optimal results for your business growth.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742979746/16704849_mngkpg.png",
      title: "Campaign Report Management",
      desc: "Track your progress with detailed, transparent reports that help you understand what's working and guide your next steps for better results.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742979877/5312062_mumiwj.png",
      title: "PPC Landing Page Creation",
      desc: "Our expert-designed PPC landing pages ensure highly relevant content that engages visitors, increasing conversions and driving successful results.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742980015/11358928_zrjggf.png",
      title: "Better Leads & Sales",
      desc: "PPC services are designed to deliver significantly higher leads and sales compared to other marketing tools. This makes them an ideal choice for every brand aiming for measurable growth and success.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742980417/2679763_btrhyp.png",
      title: "Increased Paid Traffic",
      desc: "Achieving an increase in paid traffic can be challenging, but with PPC, it's done efficiently and effectively. Our team is equipped to help you drive quality paid traffic and boost your business growth.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742980602/2875421_cvzyzt.png",
      title: "Google Ads Campaign Setup",
      desc: "Setting up a Google AdWords campaign is now easier with better keyword selection and bid options. With the right strategy, you can achieve significant growth and drive targeted traffic.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742980684/10272685_qpxncp.png",
      title: "Creating Ad Content",
      desc: "Our services simplify ad content creation. By aligning your goals and desired outcomes, we craft high-quality ads that deliver outstanding results.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742981004/12140325_xsr79c.png",
      title: "Reduced CPC",
      desc: "Our services are affordable, offering fair prices to ensure your business growth without breaking the bank. Grow with us at a great value.",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742981286/2316355_mx6nxn.png",
      title: "Bid Management",
      desc: "With our service, you can relax knowing we handle everything, from bid management to every step of the process, ensuring seamless results.",
    },
];


const PpcService = ({ service }) => {
  


  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Navigation */}
      <div className="w-full">
        <Navbar />
      </div>

      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container max-w-6xl mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
            {service.name} in {service.locationin}, {service.cityin},{" "}
            {service.countryin}
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
                    {service.name} in {service.locationin}, {service.cityin},{" "}
                    {service.countryin}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </section>

      <div className="container max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 py-6">
        <Card className="items-start justify-around border-dashed border border-gray-300 shadow bg-white py-4 rounded-md">
          <CardContent className="text-center w-full font-poppins">
            <h3 className="text-xl md:text-2xl font-medium text-black mb-3">
              Get Customized {service.name} On Request, Call Now: +91 7250404569
            </h3>
            <p className="text-justify text-gray-700">
              Looking for tailored solutions to boost your online presence? Our
              customized {service.name} are designed to meet your unique
              business needs, ensuring maximum ROI and growth. From SEO and
              social media marketing to PPC campaigns and content strategy, we
              create personalized plans that align with your goals and target
              audience. Whether you're a startup or an established brand, our
              expert team leverages the latest tools and trends to drive
              traffic, engagement, and conversions. Let us help you stand out in
              the competitive digital landscape with strategies crafted
              exclusively for your success.
            </p>
          </CardContent>
        </Card>
      </div>



<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 order-lg-1">
          <img
            src="https://res.cloudinary.com/djiki7tvo/image/upload/v1742975558/wmremove-transformed_2_pec0zz.jpg"
            alt="Best Pay Per Click (PPC) Company in Bangalore"
            className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 order-lg-2">
          <h2 className="text-2xl sm:text-2xl font-medium text-black text-center">
          We Are the Best Pay Per Click (PPC) Company in Bangalore

          </h2>
          <p className="mt-4 text-gray-700">
          Achieving quick and measurable results requires expertise, and Pay Per Click advertising is a powerful tool in any brand's marketing strategy. With the right PPC strategy, you can ensure maximum visibility and ROI. If you're looking for a skilled team to manage your campaigns, our PPC agency in Bangalore is here to help.
          </p>
          <p className="mt-4 text-gray-700">
          At OrganicAds, we serve as your local PPC experts, offering tailored campaign management to ensure you get the most from your advertising spend. From keyword targeting to ad copy creation, our team ensures that your ads drive relevant traffic, increase conversions, and help your business grow.
          </p>

          <Link href="/get-quote" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
              Get Quote <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
</div>


<div className="container mx-auto px-4 grid items-center py-5 max-w-7xl sm:px-6 lg:px-8 mt-8 mb-10 font-poppins">
        <div className="flex flex-col text-center py-8">
          <h2 className="text-2xl sm:text-2xl font-medium text-gray-900">
          Google Ads Services in Bangalore Faq - Have any questions?
          </h2>
        </div>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Vision Card */}
        <Card className="border border-dashed border-gray-300 shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src="https://res.cloudinary.com/djiki7tvo/image/upload/v1742976267/google-ads-icon-new_bv71yo.svg"
              alt="Google Adwords Management"
              title="Google Adwords Management"
              width={80}
              height={80}
              className="rounded-none"
            />
            <div className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600 text-2xl sm:text-2xl font-medium">Google Adwords Management
                </CardTitle>
              </CardHeader>
              <p className="text-gray-700 text-justify">
              Our team of Google Ads experts has vast experience in managing high-performing paid campaigns. We specialize in driving quality traffic to your website while ensuring optimal use of your budget. Looking for the best PPC Company in Bangalore? Contact us today for a free quote and take your advertising to the next level!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card className="border border-dashed border-gray-300 shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src="https://res.cloudinary.com/djiki7tvo/image/upload/v1742976271/youtube-ads_xvzfrm.svg"
              alt="YouTube Ads Management"
              title="YouTube Ads Management"
              width={80}
              height={80}
              className="rounded-none"
            />
            <div className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600 text-2xl sm:text-2xl font-medium">YouTube Ads Management
                </CardTitle>
              </CardHeader>
              <p className="text-gray-700 text-justify">
              YouTube Ads management is a specialized service chosen by only a select few in the industry. We craft innovative strategies tailored to your brand, ensuring they deliver results more effectively than any methods you’ve tried before. Let us help you make the most of YouTube’s vast audience with impactful ad campaigns.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card className="border border-dashed border-gray-300 shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src="https://res.cloudinary.com/djiki7tvo/image/upload/v1742976290/remarketing-display-ads-icon_fd7eti.svg"
              alt="Remarketing & Display Ads"
              title="Remarketing & Display Ads"
              width={80}
              height={80}
              className="rounded-none"
            />
            <div className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600 text-2xl sm:text-2xl font-medium">Remarketing & Display Ads
                </CardTitle>
              </CardHeader>
              <p className="text-gray-700 text-justify">
              Remarketing demands careful planning and in-depth analysis of your audience data. Our expert team specializes in managing this complex process, ensuring your ads reach the right audience at the right time. With our services, you can execute remarketing campaigns that deliver unparalleled results.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission Card */}
        <Card className="border border-dashed border-gray-300 shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-6">
            <Image
              src="https://res.cloudinary.com/djiki7tvo/image/upload/v1742976295/google-analytics-icon_budfut.svg"
              alt="Google Analytics Tracking"
              title="Google Analytics Tracking"
              width={80}
              height={80}
              className="rounded-none"
            />
            <div className="text-center">
              <CardHeader>
                <CardTitle className="text-blue-600 text-2xl sm:text-2xl font-medium">Google Analytics Tracking
                </CardTitle>
              </CardHeader>
              <p className="text-gray-700 text-justify">
              Managing a business while handling advertising can be overwhelming, but that's where we step in. With our expertise, you'll witness tangible growth and gain actionable insights through precise tracking of your Google Analytics, freeing you to focus on scaling your business effectively.
              </p>
            </div>
          </CardContent>
        </Card>

    </div>
</div>

<section className="bg-[#3b32f6] text-white py-8 font-poppins">
      <div className="container mx-auto px-6 max-w-7xl pb-10">
        <div className="text-center py-10">
          <h3 className="text-2xl sm:text-2xl font-medium">Why Choose Google Ads Partner in Bangalore?</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseData.map((item, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-md text-center"
              data-aos="fade-up"
            >
              <CardContent>
                <Image src={item.img} alt={item.title} width={60} height={60} className="mx-auto mb-4 mt-4" />
                <h4 className="text-xl text-[#3b32f6] font-medium mb-2">{item.title}</h4>
                <p className="text-gray-500 text-justify">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
</section>

<TestimonialCarousel />

<PpcContentFaq />




      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default PpcService;
