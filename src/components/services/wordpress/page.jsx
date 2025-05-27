"use client"; // Ensures this component is rendered client-side

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
} from "@/components/ui/card";
import Footer from "@/app/footer/page";
import GoogleReview from "@/app/googlereview/page";
import Navbar from "@/app/navigation/page";
import TestimonialCarousel from "@/app/testimonials/page";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const WordpressService = ({ service }) => {
  

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

  const services = [
    {
      title: "WordPress Responsive Design",
      description:
        "At OrganicAds, we understand the importance of having a responsive and user-friendly website. Our team of expert WordPress designers specializes in crafting responsive website designs that ensure your business maintains a strong online presence across all devices. We focus on creating seamless experiences for your visitors, making sure that your website performs optimally on mobile, tablet, and desktop platforms. With our attention to detail and dedication, we provide websites that not only look great but also function flawlessly. Also, check out our Website Design Services in Bangalore for more information.",
    },
    {
      title: "PSD to WordPress Conversion",
      description:
        "At OrganicAds, we specialize in efficient PSD to WordPress conversion, ensuring that your website design translates seamlessly from PSD to a fully functional WordPress site. Our team ensures pixel-perfect conversion with attention to detail, preserving the integrity of your design while enhancing its performance. We ensure your website is responsive, user-friendly, and SEO optimized, making it appealing and accessible across all devices. Trust OrganicAds to provide top-notch PSD to WordPress conversion services that help elevate your website's user experience and engagement.",
    },
    {
      title: "Custom WordPress Development",
      description:
        "At OrganicAds, we specialize in custom WordPress development tailored to your specific business needs. Our expert team works closely with you to build a website that aligns with your goals, providing easy back-end admin access for seamless content management. We follow clean, clear coding practices to ensure your in-house tech team can effortlessly understand and control your website's code. With our custom WordPress solutions, you gain full control over your site's functionality, performance, and content, while ensuring optimal user experience and scalability.",
    },
    {
      title: "WordPress E-Commerce Development",
      description:
        "Boost your online business with WordPress e-commerce solutions from OrganicAds. We offer a complete package for your online store, including custom plugins, creative design templates, secure payment gateway integration, and more. Our expert team helps set up your e-commerce site, build mobile apps, and provides continuous support, all at an affordable one-time cost. With our WordPress e-commerce development services, you'll have a fully functional, user-friendly online store that drives sales and enhances customer experience. Explore our comprehensive e-commerce website development solutions to take your business to the next level.",
    },
    {
      title: "Theme Development",
      description:
        "At OrganicAds, we specialize in creating custom WordPress themes that align with your brand's identity and provide an exceptional user experience. Whether you need a simple, visually appealing design or a more complex, feature-rich theme, we have the expertise to bring your vision to life. Our WordPress theme development experts excel in converting PSD files into stunning WordPress themes, ensuring your website stands out and delivers an engaging experience for visitors. Let us help you create the perfect theme that enhances your brand's presence and drives results.",
    },
    {
      title: "WordPress Migration",
      description:
        "At OrganicAds, we make WordPress migration seamless and hassle-free. Whether you're moving to a new domain or server, we help you transfer your WordPress database, themes, images, and other media efficiently. Our expert team ensures a smooth transition, with minimal downtime, so your website stays up and running. We offer reliable WordPress migration solutions tailored to meet your specific needs, providing you with a stress-free experience and a fully optimized site on your new platform. Let us handle the complexities of migration, so you can focus on growing your business.",
    },
    {
      title: "WordPress Plugin Development",
      description:
        "At OrganicAds, we know that while there are over 50,000 prebuilt WordPress plugins, they may not always meet your specific needs. That's where we come in. Our team specializes in developing custom WordPress plugins that extend the functionality of your website exactly the way you need. We believe plugins are a game-changer in the world of WordPress development, offering endless possibilities to enhance your site. Whether you need a custom feature or a unique integration, we provide innovative solutions to help your website stand out and perform at its best.",
    },
    {
      title: "WordPress CMS Development",
      description:
        "At OrganicAds, we specialize in utilizing WordPress themes to create professional websites at affordable prices. With our WordPress CMS development services, you gain complete control over your website, allowing you to make changes and updates as per your preferences. We provide full support to ensure your website functions smoothly and meets your business needs. Whether you're looking to enhance content management or improve your site's functionality, you can rely on us for expert guidance and exceptional service.",
    },
  ];


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



<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-16 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1744272242/responsive-web-design_zsrmf7.webp"
            alt="Wordpress Website Development Company in Bangalore"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          WordPress Website Development Company in {service.locationin}, {service.cityin}
          </h2>
          <p className="mt-4 text-gray-700">
          In today's digital era, having a unique and professional website is crucial for promoting your business. At OrganicAds, we specialize in delivering top-notch WordPress website development services in {service.locationin}, {service.cityin}. Our creative WordPress web design solutions ensure that your website stands out, remains active, and is easily accessible to your clients.
         </p>
         <p className="mt-4 text-gray-700">
         Our skilled WordPress developers in {service.locationin}, {service.cityin} have extensive experience in creating custom websites for businesses of all sizes. We are dedicated to providing exceptional, user-friendly, and SEO-optimized websites that help you engage your audience and boost your online presence. Trust OrganicAds to bring your vision to life with a seamless WordPress website solution tailored to your needs.
         </p>
         <Link href="/get-quote" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
             Get a Quote <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
</div>


<section className="bg-[#fff6ed] text-black py-14 font-poppins">
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


<section className="bg-[#3b32f6] py-16 font-poppins">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <div className="text-center mb-10" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-white text-2xl md:text-2xl font-medium">
            Specialized Wordpress Development Services in {service.locationin}, {service.cityin}
          </h3>
          <p className="text-white mt-4 max-w-6xl mx-auto text-justify">
          OrganicAds is a leading WordPress website development company in {service.locationin}, {service.cityin}, offering a unique blend of innovation, creativity, and expertise to elevate your business's online presence. With a proven track record of success, we are committed to exceeding your expectations and delivering outstanding results. Our experienced team of WordPress developers brings years of experience to ensure that your website not only looks great but also performs exceptionally, helping your business thrive in the digital landscape. Trust OrganicAds for all your WordPress development needs and take your business to the next level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-blue-500 text-base font-semibold mb-2">
                {service.title}
              </h4>
              <p className="text-gray-800 text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

<TestimonialCarousel />




      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default WordpressService;
