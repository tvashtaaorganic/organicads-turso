import * as React from "react";
import Image from "next/image"; // Added for <Image> component
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCarousel from "../testimonials/page";
import  HeroSlider  from "../herocarousel/page";
import FeaturedOn from "../featuredon/page";
import FaqHome  from "../faqhome/page";
import GoogleReview from "../googlereview/page";

const images = [
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716912231/brand27_lowpw2.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716912228/brand26_klmi4h.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716912234/brand28_i8yefa.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716912235/brand29_qyygyf.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand11_mevnv5.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand12_ol1ltb.png",
];

const seoCards = [
  {
    title: "Local SEO",
    description:
      "To help you rank higher in local searches, attract your ideal audience, and drive more organic traffic to your website or business.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczOFiIUyDSycZgDKdZIdy0HAF092qwhd3WAkg3Wn4oOAH92SZR2l2y7Zc1ATFfH6EViAK_EdP7yJMQCeMq2AaoHzMBcB3gmwykZ3OqCS_xHKyWhSOXH_xfTRUSe_51f36iEJRTraOLMEW3v_tE6qaDkA=w105-h105-s-no-gm?authuser=0",
  },
  {
    title: "Global SEO",
    description:
      "Outpace your competition with ease. Leverage our expert Global and National SEO services to attract more customers and drive consistent growth for your business.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczONpEgpvFns-55RNFyIYUwij2NjRYrAG_bBpgVb5LBVs1MXt75dPIP9SYSNOpVsnlUTd5BZ_gLURmTthHi1GP1HZUED-MmguPvJCugM4HzQIPsTghanbPu-cyjIAoAAWxcfxG7X_692I1Ev7QaMwZ2H=w92-h92-s-no-gm?authuser=0",
  },
  {
    title: "E-commerce SEO",
    description:
      "Eliminate hidden product pages, maximize your online stores potential, and welcome greater visibility, improved rankings, and highly targeted traffic.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNfI9xfWahiZNB8dyoO27oIJzh9k7Kd-Iq469ONAjWnkbwOs-parlxDJXbOXNQiWNIxGLDCzSXRRwRgeodjASvoADMgO8no9bvcM1aAiPRLbD9ZDtXPiXyWC0wBvsIGQUw8ee-nY1YFkeUmb9dH7fHJ=w92-h92-s-no-gm?authuser=0",
  },
  {
    title: "Technical SEO",
    description:
      "Fix crawl errors and broken links effortlessly, and watch your business grow as we optimize your website for peak search engine performance and reliability.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczOgaZzQgNSCguUDSFZgnKJL2FWGv9307cZo-8pM_aX6yYAKEX3KFsAn7nhDH-HzHQgfK-CgYuReZyW8qctX76b8AHC5cnpN-XrujtR7JAb91rW6IEVqcYwYBCRWYVj3EmvNDXG8a-A8edv4MVkoxQiT=w92-h92-s-no-gm?authuser=0",
  },
  {
    title: "Map Listing Management",
    description:
      "Say goodbye to outdated information and missed chances; well ensure your business is accurately listed across key map platforms like Google Maps for maximum visibility.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMw1NnNseFa2rXKDEdFGOCeSOx98kYiyDkcfxpzKWsDw4raWK_ZAW6FRV02PHpBylqOIiIeFcz6PYsIJi1Ehh6o0VYD5ryYUBN-DYAM0dK6fDDmW3qpcaLJan18q7FetAc68l46qoQU7dZE-pY3ISFr=w92-h92-s-no-gm?authuser=0",
  },
  {
    title: "Social Media Marketing",
    description:
      "Let us elevate your brand across all devices and connect you with potential buyers. Our Social Media Marketing ensures you stay ahead of the competition.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNqTo4O0FRrprAYF-2oPI7jJUd2VVV2bJ-Ej9wJHDD4plKAGi4pC_f_2gsHkoJ1dc9cfhdmyNPs5j42Hhh1ntzZ3CpbiQrcKzqicT5Jc9UrBw19ElnahBPKDGDEwaIWFGCT3p5dO3jSDvjb3A_k9gN9=w90-h90-s-no-gm?authuser=0",
  },
  {
    title: "Pay Per Click",
    description:
      "Embrace targeted, budget-friendly ads that drive real conversions! With our expertise, well elevate your online visibility and maximize your ROI.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczMCQOrmf4mnfHdQfWuXxWye4r_pp7tQQG4eXgwr5Xkvnkr7-lwcWZ6wU_OJJudLHbnEvlDlG3F9mktjlNktubQWut94HAAtXVL-K8Ul8Phe7Ps48z99_D3ol-ri1T1nrC9vaOgl6zhleIBNyDwJpD8y=w90-h90-s-no-gm?authuser=0",
  },
  {
    title: "Web Design & Development",
    description:
      "Whether building a new site or updating your current one, our expert team is here to bring your vision to life with SEO-optimized design and functionality.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczPicmUcMIYTaZldi2yLb8ORruHGYCgfXxPRv5mjhF5__7lAf1HY5yD_2qeGRdneIYodboDd8Ws8hN5g_5I4o1Ta9clCtThZRJdQU7zBJRP7f_2ORPMfk5aSt7C4dMf74QcYJlQWqsV7TVZVJyRxzoCM=w92-h92-s-no-gm?authuser=0",
  },
  {
    title: "SEO Latest Updates",
    description:
      "Google Search Consoles performance report now retains filters and includes a convenient reset button for easy adjustments.",
    image: "https://lh3.googleusercontent.com/pw/AP1GczNeiEdqiI0RhUa90nrOwE7NK2Z8SJSK-FEOpw_v6N9VrKetPTVO0cHBar_m-RbQFuGVLQ2XK2yS9mCBzdXAeJoaSJt-lgEA11aB8L5rN8G1RntNCoyCHySRd5TDXshDS3jYW--jHZ2oKgMs6EuQ9Ait=w512-h512-s-no-gm?authuser=0",
  },
];

const seoSections = [
  {
    image: "https://res.cloudinary.com/s2ucdn/image/upload/v1704461207/banner4_mu9hat.png",
    title: "Drive Measurable Results with Our ROI-Focused SEO Campaigns",
    description: "At OrganicAds, we launch SEO campaigns that are designed to deliver real, measurable results. While challenges can arise, were here to guide you every step of the way. With our in-house team of expert graphic designers, skilled content writers, and certified SEO professionals, we help brands outperform their competition and thrive in their industry. We prioritize transparency, high-quality execution, and strategies that align with your business goals, ensuring sustained growth and long-term success. Let us help you unlock the true potential of your digital presence with tailored, results-driven SEO strategies."
  },
  {
    image: "https://res.cloudinary.com/s2ucdn/image/upload/v1704461205/banner1_qudrg9.png",
    title: "Boost Your Sales with SEO Strategies That Drive Converting Leads",
    description: "At OrganicAds, we understand the true value of SEO and its ability to generate leads that convert into sales. With years of experience and proven success, we know what works. We specialize in creating high-performance websites, building strong digital media presences, and running impactful Google campaigns to bring your business more leads. Every SEO strategy we create is custom-built, ensuring its unique to your brand and tailored to your goals. We never duplicate strategies across clients, guaranteeing that your business stands out and thrives with our tailored SEO solutions. Let us help you turn clicks into customers with results-driven SEO!"
  },
  {
    image: "https://res.cloudinary.com/s2ucdn/image/upload/v1704461206/banner3_jcp0x1.png",
    title: "Stay Ahead of the Competition with Superior SEO Strategies",
    description: "In todays digital world, playing the SEO game better than your competitors is crucial for staying relevant and visible. Without a strong SEO strategy, your brand risks being left behind. SEO involves many complex factors, from on-page optimization to staying updated on algorithm changes and best practices. Keeping up can be challenging, but with our expertise, you can outpace the competition. By partnering with us, well ensure your SEO game is always one step ahead, driving more traffic, boosting rankings, and maximizing your online presence for long-term success. Let us help you rise above the competition with expert SEO strategies tailored to your business goals."
  }
];

const seoResults = [
  {
    website: "Skin Clinic Sydney",
    domain: "Google.com.au",
    keywords: [
      { term: "Laser Hair Removal Sydney", rank: 1 },
      { term: "Best Skin Treatments Sydney", rank: 4 },
      { term: "Laser Skin Treatment Sydney", rank: 1 },
      { term: "Best Lip Injections Sydney", rank: 3 },
      { term: "Acne Scarring Treatment Sydney", rank: 5 },
    ],
  },
  {
    website: "Steel Design and Detailing",
    domain: "Google.com.au",
    keywords: [
      { term: "Tilt up panel detailing", rank: 1 },
      { term: "Steel shop drawings using Tekla", rank: 1 },
      { term: "Steel detailing using Tekla", rank: 2 },
      { term: "Structural steel drafting", rank: 3 },
      { term: "Steel detailing service", rank: 3 },
    ],
  },
];

function HeroContent() {
  return (
    <div>
      {/* Content in Container */}
      <main className="container mx-auto flex flex-col gap-3 mt-5 sm:mt-10 px-2 sm:px-0 text-center font-poppins">
        <h1 className="text-center font-poppins text-xl sm:text-3xl md:text-4xl lg:text-4xl font-medium">
          Digital Marketing, SEO Company in
          <span className="text-[#b70b5e]"> Bangalore</span>
        </h1>
        <h2 className="text-center font-poppins text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium">
          Driven by Results and Innovation
        </h2>
        <h3 className="text-center font-poppins text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium">
          Achieve Top Google & Bing Rankings for Your Web Page in Just 4 Hours!
        </h3>
        <p className="w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-[1200px] mx-auto text-justify mt-6 mb-6  md:text-md sm:text-md">
          Why settle for less when you can work with the Kingpins of Digital
          Marketing? At OrganicAds, we combine cutting-edge strategies with a
          results-driven approach to position your brand at the top. Trusted by
          businesses in Bangalore and beyond, our expertise in SEO and digital
          marketing ensures measurable growth and success. Partner with
          OrganicAds: the Best Digital Marketing Company and SEO Company in
          Bangalore, and experience the difference!
        </p>

        <ul className="flex flex-wrap justify-center space-x-8 text-lg font-medium text-gray-800">
          {["Trust", "Transparency", "Honesty", "High ROI"].map(
            (item, index) => (
              <li key={index} className="flex items-center gap-2">
                <CircleCheck className="text-[#b70b5e] w-6 h-6" />
                {item}
              </li>
            )
          )}
        </ul>
        <p className="mt-6 mb-6 text-xl sm:text-xl md:text-1xl lg:text-1xl"><b>500+</b> Happy Clients across <b>15+</b> Countries!</p>
      </main>

      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 2,
          }}
          className="w-[1000]"
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center pt-3 sm:basis-1/4 md:basis-1/3 lg:basis-1/5"
              >
                <div className="p-1">
                  <Card className="w-full h-25">
                    <CardContent className="flex items-center justify-center p-2">
                      <Image
                        src={src}
                        alt={`Image ${index + 1}`}
                        width={150}
                        height={80}
                        className="object-contain"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 hover:text-white" />
          <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 hover:text-white" />
        </Carousel>
      </div>

      <div className="flex text-center font-poppins gap-3 mt-10 mb-12 flex-col px-2">
        <h2 className="text-center font-poppins text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium mt-5">Dominate the Market with 360° Digital Marketing</h2>
        <p className="text-center mt-3 mb-6 w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-[1200px] mx-auto">We transform data into actionable strategies that drive traffic, boost rankings, and grow your online presence with cutting-edge digital marketing and SEO solutions.</p>

        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-6 w-full max-w-7xl px-8">
            {seoCards.map((card, index) => (
              <Card
                key={index}
                className=" mx-auto border shadow-md rounded-lg pt-5"
              >
                <CardContent className="flex flex-col items-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={80}
                    height={80}
                    className="mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-4 leading-none tracking-tight">{card.title}</h3>
                  <p className="text-gray-600 text-sm text-muted-foreground text-justify">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-20 sm:mt-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="md:col-span-5 flex justify-center space-y-16 px-4 sm:px-6 lg:px-8">
          <Image
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1734517516/digital_marketing_services_hbzqz2_1_rkqbft.png"
            alt="Dominate the Market with 360° Digital Marketing with OrganicAds"
            width={1280}
            height={720}
            className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-cover rounded-lg"
          />
        </div>

        <div className="md:col-span-7 text-justify px-2">
          <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium">
            About OrganicAds SEO Company
          </h2>
          <p className="mt-4 text-gray-700">
            Is your brand new or struggling with declining sales? Our SEO agency in Bangalore might be just what you need. Partner with the Best SEO Company in Bangalore and see how we can help you grow. We understand what it takes to boost your online presence and achieve success.
          </p>
          <p className="mt-4 text-gray-700">
            Since 2016, we have been empowering both new and established businesses by increasing their visibility, driving more traffic, and improving sales. What started as an SEO agency in Bangalore has now expanded globally, helping brands from the UK, USA, Australia, Netherlands, Canada, Morocco, and many other countries.
          </p>
          <p className="mt-4 text-gray-700">
            We offer specialized SEO services, social media marketing, website design, development, and digital marketing solutions. Our strategies are rooted in ethical practices and transparency. With us, you wont be tied down by restrictive SEO contracts-just trust and results.
          </p>
          <p className="mt-4 text-gray-700">
            As a leading SEO service provider in Bangalore, we understand your unique needs, priorities, and challenges. With our expertise, we can help you achieve sustainable growth and success. Lets talk today and ease your concerns.
          </p>
          <p className="mt-4 mb-7 text-gray-700">
            Since 2016, weve been delivering top-tier SEO services in Bangalore, helping brands from diverse industries rank higher in Google search results. Weve cracked the code to solving the toughest SEO and digital marketing challenges by understanding what works and what doesnt. Recognizing that SEO is a long-term investment, we offer affordable solutions for small businesses and new entrepreneurs to help them succeed and grow.
          </p>
          <Link className="mb-10" href="/next-page" passHref>
            <Button className="inline-flex justify-center items-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
              Explore More <ArrowRight className="" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#57b4b6] to-[#3b32f6] text-white py-10 font-poppins">
        <div className="container mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {seoSections.map((section, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              <div className={`md:col-span-5 flex justify-center ${index % 2 !== 0 ? "md:order-last" : ""}`}>
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1280}
                  height={720}
                  className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-cover rounded-lg"
                />
              </div>

              <div className="md:col-span-7 text-justify">
                <h3 className="text-left text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium">
                  {section.title}
                </h3>
                <p className="mt-4">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="seo-results" className="py-20 bg-[#fff6ed] font-poppins">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium text-blue-600">
              Recent SEO Ranking Successes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoResults.map((result, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
                  {result.website} | <span className="text-blue-500">{result.domain}</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2 text-center">Keywords</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Current Ranking</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.keywords.map((keyword, i) => (
                        <tr key={i} className="border border-gray-200">
                          <td className="px-4 py-2 border text-gray-700">{keyword.term}</td>
                          <td className="px-4 py-2 border text-center font-semibold text-blue-600">
                            {keyword.rank}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/seo-results-from-organic-ads">
              <Button className="rounded-lg inline-flex justify-center items-center text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
                View All SEO Results <ArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-5 sm:mt-10 px-2 sm:px-0 font-poppins max-w-7xl py-5">
        <div className="col-span-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-medium text-blue-600">
            Our Approach - Top SEO Company in Bangalore
          </h3>
        </div>

        <div className="col-span-12 md:col-span-6 flex justify-center">
          <Image
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1734520923/5326066_gkyfat.jpg"
            alt="Top SEO Company in Bangalore"
            width={1280}
            height={720}
            className="w-full sm:w-[80%] md:w-[90%] lg:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-lg object-cover rounded-lg"
          />
        </div>

        <div className="col-span-12 md:col-span-6 text-justify sm:px-6 lg:px-8 flex justify-center">
          <HeroSlider />
        </div>
      </div>

      <FeaturedOn />
      <TestimonialCarousel />
      <FaqHome />
      <GoogleReview />
    </div>
  );
}

export default HeroContent;
