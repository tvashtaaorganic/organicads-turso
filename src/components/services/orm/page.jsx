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
} from "@/components/ui/card";
import Footer from "@/app/footer/page";
import GoogleReview from "@/app/googlereview/page";
import Navbar from "@/app/navigation/page";
import TestimonialCarousel from "@/app/testimonials/page";
import OrmContentFaq from "@/app/faqhome/ormfaq/page";
import Image from "next/image";

const OrmService = ({ service }) => {
  
  const processData = [
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742994775/social-media_sgbx7u.svg",
      title: "Promoting Positive Content",
      aos: "fade-up",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742994778/profile-optimisation_bynbl6.svg",
      title: "Social Media Profile Optimization",
      aos: "fade-down",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742994799/content-marketing_vfmvc5.svg",
      title: "Content Marketing",
      aos: "fade-up",
    },
    {
      img: "https://res.cloudinary.com/djiki7tvo/image/upload/v1742994803/negative-review_iu1k02.svg",
      title: "Responding to Negative Reviews",
      aos: "fade-down",
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



<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735312376/brand-loyalty-concept-illustration_114360-11343_dznas9.avif"
            alt="Brand Reputation Management"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Brand Reputation Management
          </h2>
          <p className="mt-4 text-gray-700">
          Worried about your brand’s online reputation? Our online reputation management services help you monitor and manage your brand on social media platforms. We protect your business from negative feedback and amplify positive reviews, ensuring that your reputation stays strong and your customers trust you.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-2 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735312499/customer-review-illustration-1_1893-6444_zoivpq.avif"
            alt="Celebrities Reputation Management"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Celebrities Reputation Management
          </h2>
          <p className="mt-4 text-gray-700">
          Being in the public eye 24/7, a single mistake can tarnish a celebrity's image. Our reputation management and social media marketing services help maintain a positive online presence, ensuring effective communication with fans. Protect and enhance your image with professional online reputation management tailored for celebrities.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-5 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735312807/get-your-hands-this-amazing-flat-illustration-hotel-booking_203633-7997_itar2f.avif"
            alt="Hotel Reputation Management"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Hotel Reputation Management
          </h2>
          <p className="mt-4 text-gray-700">
          Hotel reputation management is essential in today's competitive market. It’s not just about marketing, but about building trust with customers. With the rise of social media, consumers are more discerning than ever. Our hotel reputation management services ensure that your brand stands out positively, helping you maintain strong relationships with stakeholders and guests alike.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-2 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735313176/flat-hand-drawn-patient-taking-medical-examination_23-2148872149_bjt1ba.avif"
            alt="Hospital Reputation Management"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Hospital Reputation Management
          </h2>
          <p className="mt-4 text-gray-700">
          Hospitals need strong online reputation management to build trust and credibility with patients. As one of the top SEO companies in India, OrganicAds helps enhance your hospital's image by managing online reviews and feedback. Our expert services ensure your hospital is viewed as reliable, trustworthy, and committed to providing excellent care, attracting more patients to your services.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-5 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735311843/food-critic-abstract-concept-illustration-analyze-food-restaurant-chef-write-review-rating-expert-opinion-culinary-show-undercover-guest-travel-guide_335657-3512_qqhehy.jpg"
            alt="Restaurant Reputation Management"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Restaurant Reputation Management
          </h2>
          <p className="mt-4 text-gray-700">
          Effective restaurant reputation management is key to maintaining a steady flow of customers. OrganicAds offers expert online reputation management services to help you attract more guests by enhancing your restaurant's online presence. Our services ensure that your restaurant's reputation remains positive and appealing, driving more traffic and keeping your tables full.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-2 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735311931/dental-esthetic-clinic-abstract-concept-vector-illustration_107173-20789_zpfhz2.jpg"
            alt="Dentist Reputation Management"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Dentist Reputation Management
          </h2>
          <p className="mt-4 text-gray-700">
          Dental reputation management is crucial for attracting new patients and maintaining a strong online presence. Our Dentist ORM services focus on improving how your practice is perceived by potential clients. By managing reviews, feedback, and online content, we help build trust and highlight the quality of your dental services. Start building a positive reputation today – Get a Free Quote!
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-5 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735312032/male-lawyer-concept-illustration_114360-20389_kc5yv1.jpg"
            alt="Lawyer Reputation Management"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Lawyer Reputation Management
          </h2>
          <p className="mt-4 text-gray-700">
          In the legal profession, your reputation is everything. Potential clients want to know that you are trustworthy and capable. Lawyer Reputation Management services help you maintain a positive online image, manage client reviews, and ensure that you stand out from competitors. With a strong reputation, you'll attract more clients and build lasting trust in your services.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-2 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735312162/feedback-loop-concept-illustration_114360-21826_j8v8jy.avif"
            alt="Review Management Services"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-1">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Review Management Services
          </h2>
          <p className="mt-4 text-gray-700">
          Online review management is crucial for maintaining a positive brand image. Our services help businesses manage and enhance their online reputation by addressing and responding to customer reviews. Whether positive or negative, we ensure that your brand maintains a strong online presence. By leveraging customer feedback, we work to build trust and credibility, ensuring your business remains favorable in the eyes of potential customers.
         </p>
        </div>
</div>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-5 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735312277/business-crisis-concept-illustration_114360-8950_k2pwq3.avif"
            alt="Down Negative Results"
            className="w-[70%] sm:w-full max-w-xs sm:max-w-md md:max-w-sm lg:max-w-sm h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 lg:order-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
          Down Negative Results
          </h2>
          <p className="mt-4 text-gray-700">
          In India, reputation management services are gaining momentum, with businesses increasingly recognizing their importance. These services focus on managing and improving online reputation by addressing negative results. By utilizing expert online reputation and digital marketing strategies, we help businesses minimize the impact of negative feedback, boost sales, and create a positive perception. With the right approach, you can protect your brand’s image and ensure long-term success. Get these services today to unlock the full potential of your business.
         </p>
        </div>
</div>


<section className="bg-[#3b32f6] text-white py-12 font-poppins">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-2xl font-medium">Our ORM Process</h3>
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


<TestimonialCarousel />

<OrmContentFaq />




      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default OrmService;
