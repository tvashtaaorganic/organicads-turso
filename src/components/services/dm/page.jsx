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
import FeaturedOn from "@/app/featuredon/page";
import TestimonialCarousel from "@/app/testimonials/page";


const DigitalMarketingService = ({ service }) => {
  
  
  const services = [
    {
      img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734621337/message_t8d6hm.png",
      alt: "Email Marketing",
      title: "Email Marketing",
      description:(
        <>
        Email Marketing: Still the King of Leads & Conversions! Say goodbye to generic emails! At OrganicAds, we design personalized, results-driven email campaigns that keep your audience engaged. From captivating visuals and precise audience targeting to optimized strategies, our  <a
          href="https://optinmonster.com/beginners-guide-to-email-marketing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >email marketing solutions</a>  ensure higher open rates, improved click-throughs, and maximum ROI. Boost your brand’s reach and conversions with expertly crafted email campaigns by OrganicAds.</> 
      ),
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
          "A Stunning Website is Just the Start – Let’s Make it Visible! What good is a great website if it doesn’t attract visitors? Let OrganicAds optimize your site with proven SEO strategies to boost visibility and drive organic traffic that converts. Your audience is searching-let's make sure they find you!",
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
          "Build a Positive Brand Identity with Proactive Online Reputation Management Your brand's public perception is vital for its success. Our dedicated team actively monitors and responds to online feedback, ensuring your reputation remains favorable. By addressing reviews, comments, and social mentions, we help shape a strong, trusted identity that resonates with your audience and fosters long-term success.",
      },
      {
        img: "https://res.cloudinary.com/s2ucdn/image/upload/v1734701167/programming_pc8q53.png",
        alt: "Web Design & Web Development",
        title: "Web Design & Web Development",
        description:
          "Elevate Your Online Presence with Stunning, High-Performance Websites Transform your brand's digital identity with SEO-optimized, result-driven websites designed to captivate and convert. Our team crafts powerful, brand-centric, and functional sites with the perfect blend of features to engage your audience and achieve your business goals. Drive more than clicks—drive results.",
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



<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-6 sm:mt-6 font-poppins max-w-7xl px-4 sm:px-6 lg:px-6 py-6">
  
  <div className="md:col-span-12 text-justify px-2">
    <h3 className="text-center text-md sm:text-md md:text-1xl lg:text-1xl font-medium mb-3">Tired of crickets? Let's get your audience buzzing, Grow your brand beyond borders
    </h3>
    <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium">
    Stop being invisible online-get your brand discovered with our powerful digital marketing strategies that drive real results.
    </h2>
    <p className="mt-4 text-gray-700">
    In today’s fast-paced digital era, having a strong online presence is no longer optional-it’s essential for business growth. As the competition continues to grow, implementing effective digital marketing strategies is crucial to connecting with your target audience and achieving your goals. That’s where a <a
  href="/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800"
>trusted Digital Marketing Services Company</a> in {service.locationin}, {service.cityin} can make all the difference. With proven expertise, we help businesses elevate their online visibility, engage their audience, and drive sustainable growth.
    </p>
    <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium mt-5">
    Why Digital Marketing is a Game-Changer
    </h2>
    <p className="mt-4 text-gray-700">
    Digital marketing has completely transformed how businesses connect with their audience. Unlike traditional marketing methods, it allows you to reach a broader audience with measurable results at a significantly lower cost. From boosting brand awareness to driving website traffic or generating qualified leads, digital marketing opens doors to endless opportunities tailored to your specific objectives.
    </p>
    <p className="mt-4 text-gray-700">
    Whether you're looking to build a solid online presence, increase engagement, or scale your business globally, our <a
  href="/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800"
>custom digital marketing solutions</a> can help you thrive in the competitive online landscape.
    </p>
   
  </div>
</div>


<section className="bg-white py-12 px-4 font-poppins">
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




      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default DigitalMarketingService;
