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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const SoftwareDevelopmentService = ({ service }) => {
  
 

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



<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735485421/gradient-ac-logo-design_23-2149451465_wiy8uk.jpg"
            alt="Logo Design Services"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-xl md:text-2xl font-medium text-black text-center">
          Logo Design Services
          </h2>
          <p className="mt-4 text-gray-700">
          In today’s fast-paced corporate world, where competition and technology are constantly evolving, having a strong brand identity is crucial. OrganicAds offers top-notch logo design services that bring your vision to life. As a leading graphic design company in Bangalore, we are equipped with the latest tools and techniques to create a logo that makes your brand stand out. Trust one of the best logo designers at OrganicAds to craft a unique and impactful logo that represents your business effectively.
         </p>
        
        </div>
</div>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1744277065/motion-graphics_lliems.webp"
            alt="Motion Graphics Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-xl md:text-2xl font-medium text-black text-center">
          Motion Graphics Design
          </h2>
          <p className="mt-4 text-gray-700">
          At OrganicAds, we bring your ideas to life with creative motion graphics design services that are bound to impress. Our expert team is dedicated to delivering high-quality motion graphics that not only meet your business needs but also elevate your brand image. With our comprehensive motion graphics services, we focus on boosting your rankings and ensuring your brand stands out in the digital landscape. Don’t wait any longer! Get in touch with us today and experience the best motion graphics design services tailored to your business.
         </p>
        </div>
</div>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735485742/vectordesign_flgxc9.jpg"
            alt="Vector Design Services"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-xl md:text-2xl font-medium text-black text-center">
          Vector Design Services
          </h2>
          <p className="mt-4 text-gray-700">
          At OrganicAds, we offer exceptional vector design services that stand out in the industry. Our skilled team of graphic designers and branding experts specialize in creating stunning vector designs that are not only visually appealing but also help businesses establish a strong brand identity. With years of experience, our professionals are committed to providing high-quality vector designs that enhance your brand’s presence. Whether you're looking for logos, illustrations, or any other design, we deliver creative and effective solutions that make your brand memorable. Let OrganicAds elevate your business with our top-tier vector design services.

         </p>
        </div>
</div>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735486124/real-estate-infographic-template_23-2149007531_ldpq6w.jpg"
            alt="Infographics Design Services"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-xl md:text-2xl font-medium text-black text-center">
          Infographics Design Services
          </h2>
          <p className="mt-4 text-gray-700">
          At OrganicAds, we take pride in offering top-tier infographic design services that make a lasting impression. Our expert team is dedicated to creating visually captivating and informative infographics that effectively communicate your message. We focus on delivering glitch-free, punctual, and high-quality services that meet your unique requirements. With a passion for creativity and attention to detail, we ensure your infographics stand out and drive engagement. Choose OrganicAds for exceptional infographic design services that will elevate your brand's communication strategy and captivate your audience.
         </p>
        </div>
</div>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735486323/low-code-development-concept-illustration_114360-7294_yopvr3.jpg"
            alt="Website & Social Media Graphic Creation"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-xl md:text-2xl font-medium text-black text-center">
          Website & Social Media Graphic Creation
          </h2>
          <p className="mt-4 text-gray-700">
          At OrganicAds, we have a team of expert graphic designers who specialize in creating engaging and visually appealing social media and website graphics. Our experienced designers stay updated with the latest trends, ensuring that your graphics are not only attractive but also highly effective in driving engagement. Whether you need fresh social media visuals or a stunning website design, our team is ready to bring your vision to life. Get in touch with OrganicAds to explore our impressive portfolio of website and social media graphic designs, and discover how we can enhance your online presence.

         </p>
        </div>
</div>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1744277486/business-card-design_lchpje.webp"
            alt="Business Card Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-xl md:text-2xl font-medium text-black text-center">
          Business Card Design
          </h2>
          <p className="mt-4 text-gray-700">
          At OrganicAds, we create business cards with modern, innovative designs that perfectly represent your brand's identity. Our expert designers in Bangalore work to craft unique business card designs that leave a lasting impression. We offer top-notch services that focus on delivering high-quality, visually appealing cards that align with your business goals. Whether you're looking to refresh your brand or create a new look, OrganicAds is here to support you with professional business card designs that elevate your brand image and make a memorable impact.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1744277552/brochure-latterhead-img_y1vmbt.webp"
            alt="Brochure and Letterhead Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-xl md:text-2xl font-medium text-black text-center">
          Brochure and Letterhead Design
          </h2>
          <p className="mt-4 text-gray-700">
          When it comes to professional brochure and letterhead design, OrganicAds is the company you can trust. Our team offers exceptional letterhead design services, ensuring your brand’s identity is represented perfectly on every piece of correspondence. Take a look at our previous work to see the quality we deliver. As one of the top brochure design companies, we provide a full suite of services, from design to content creation. OrganicAds is your ideal partner for creating impactful brochures and letterheads that convey your message clearly and enhance your brand presence.
         </p>
        </div>
</div>

<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1744277603/menu-design-img_dpxj4z.webp"
            alt="Menu Design"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-xl md:text-2xl font-medium text-black text-center">
          Menu Design
          </h2>
          <p className="mt-4 text-gray-700">
          Choosing the right company for your menu design is crucial for showcasing your restaurant's offerings effectively. At OrganicAds, we focus on delivering custom menu designs that cater to your specific needs. Whether you're opening a new restaurant or revamping your existing menu, our expert designers will help you create a menu that reflects your brand and attracts customers. Contact us for a free quote on custom menu design services and let us take care of your design needs while you focus on running your business.

         </p>
        </div>
</div>


<div className="mt-10 mb-10 items-center text-center font-poppins">
<Link href="/contactus" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
             Contact Us <ArrowRight className="ml-2" />
            </Button>
          </Link>
</div>


<TestimonialCarousel />




      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default SoftwareDevelopmentService;
