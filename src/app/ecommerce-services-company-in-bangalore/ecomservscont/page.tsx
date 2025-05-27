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
import FeaturedOn from "@/app/featuredon/page";
import  TestimonialCarousel from "@/app/testimonials/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCheck } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import EcomServicesFaq1 from "@/app/faqhome/ecomservicesfaq/page";

const EcomServicesContent = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const stats = [
    { value: 5000, label: "Website Optimized" },
    { value: 2000000, label: "Keywords in Top 10" },
    { value: 10, label: "Years of Experience" },
    { value: 96, label: "Client Retention Ratio" },
  ];

  return (
    <div className="font-poppins">
      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
            Best Ecommerce SEO Services Company in Bangalore
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
                    Best Ecommerce SEO Services Company in Bangalore
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </section>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-8 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center px-4 sm:px-6 lg:px-7">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735051551/3516854_yod7li.jpg"
            alt="Best Ecommerce Services Company in Bangalore"
            className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2">
          <h2 className="text-2xl md:text-2xl font-medium text-black text-center">
            Ecommerce SEO Services in Bangalore
          </h2>
          <p className="mt-4 text-gray-700">
            Is your eCommerce store missing out on potential customers? Without
            implementing SEO, you are leaving valuable traffic on the table. In
            todays digital world, SEO is essential for eCommerce success. With
            more shoppers turning to online platforms, SEO is a must to ensure
            your store stands out and reaches your target audience effectively.
          </p>
          <p className="mt-4 text-gray-700">
            As a leading SEO company in India, we offer comprehensive 360°
            eCommerce SEO services tailored to businesses of all sizes. Our
            expert team uses proven strategies to enhance your stores
            visibility and drive qualified traffic. Get in touch with us today
            to discover our SEO packages and find the best solution for your
            business growth.
          </p>

          <Link href="/seo-cost-calculator" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
              SEO Cost Calculator <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <section className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-7">
        <div className="container mx-auto max-w-7xl text-center px-2 sm:px-6 lg:px-7">
          <h3 className="text-2xl sm:text-2xl font-medium">
            Boost Your Sales with the Help of Ecommerce SEO Company
          </h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6" ref={ref}>
            {stats.map((stat, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-2xl sm:text-2xl font-semibold">
                  {inView ? <CountUp end={stat.value} duration={2} /> : 0}+
                </h3>
                <h4 className="text-lg mt-2">{stat.label}</h4>
              </div>
            ))}
          </div>

          <div className="mt-12 w-full">
            <Tabs defaultValue="keyword-research" className="w-full">
              {/* Tabs List with Scroll on Mobile */}
              <div className="overflow-x-auto">
                <TabsList className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-2 min-w-max bg-[#3b32f6] text-white">
                  <TabsTrigger value="keyword-research">
                    Keyword Research
                  </TabsTrigger>
                  <TabsTrigger value="seo-audit">Ecom SEO Audit</TabsTrigger>
                  <TabsTrigger value="product-optimization">
                    Product Optimization
                  </TabsTrigger>
                  <TabsTrigger value="content-link-building">
                    Content & Link Building
                  </TabsTrigger>
                  <TabsTrigger value="high-conversion">
                    High Conversion
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Keyword Research Tab */}
              <TabsContent value="keyword-research" className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Research</CardTitle>
                    <CardDescription>
                      Find the best keywords for your eCommerce business.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-justify">
                    <p>
                      The right keywords are crucial for your eCommerce stores
                      success. They help your potential customers find you in a
                      sea of competitors. As a top eCommerce SEO company in
                      India, we use advanced keyword research tools to identify
                      the best keywords that align with your business and
                      attract quality traffic.
                    </p>
                    <p>
                      Our comprehensive keyword research dives deep into
                      identifying high-converting keywords, analyzing customer
                      behavior, and understanding search intent. By focusing on
                      keyword popularity, ranking difficulty, and trends, we
                      help you stay ahead of the competition. This data-driven
                      approach boosts customer acquisition, increases website
                      traffic, and supports the growth of your eCommerce
                      business.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Ecom SEO Audit Tab */}
              <TabsContent value="seo-audit" className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Ecommerce SEO Audit</CardTitle>
                    <CardDescription>
                      Analyze and optimize your online store.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-justify">
                    <p>
                      As part of our eCommerce SEO services, our experts conduct
                      a thorough SEO audit to analyze and optimize your online
                      store for better search engine visibility. This audit
                      evaluates your stores SEO performance, identifies areas
                      for improvement, and ensures your site is in line with the
                      latest search engine algorithm updates.
                    </p>
                    <p>
                      Our eCommerce SEO audit covers crucial aspects such as
                      On-page SEO, technical SEO, and website structure, helping
                      us uncover any issues that could impact your rankings. By
                      identifying content gaps, assessing your competition, and
                      analyzing market trends, we craft a tailored SEO strategy
                      to improve your stores visibility, increase traffic, and
                      drive sales.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Product Optimization Tab */}
              <TabsContent value="product-optimization" className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Optimization</CardTitle>
                    <CardDescription>
                      Ensure your products are easily discoverable.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-justify">
                    <p>
                      No matter how exceptional your products are, they wont
                      reach your target audience without proper optimization.
                      Our eCommerce product optimization services ensure that
                      your products are discoverable in search engine results.
                      We focus on enhancing product titles, descriptions, and
                      images, ensuring they include relevant keywords to improve
                      search rankings.
                    </p>
                    <p>
                      Our team optimizes your entire product catalog to boost
                      visibility and drive more organic traffic to your store.
                      By refining each product listing with SEO best practices,
                      we ensure that potential customers find your products
                      easily and make informed purchasing decisions.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Content & Link Building Tab */}
              <TabsContent value="content-link-building" className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>Content & Link Building</CardTitle>
                    <CardDescription>
                      Your online presence extends beyond just product images.
                      It includes engaging product descriptions...
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-justify">
                    <p>
                      As an eCommerce store owner, your online presence extends
                      beyond just product images. It includes engaging product
                      descriptions, informative blogs, and optimized website
                      content. Our expert content team crafts keyword-focused
                      content to ensure that your store ranks higher in search
                      results.
                    </p>
                    <p>
                      We create high-quality, SEO-optimized content that
                      attracts search engine traffic, making your store the
                      go-to destination for relevant searches. Our link-building
                      services further enhance your stores visibility by
                      securing valuable inbound links from high-authority
                      websites. This strategy drives organic traffic and boosts
                      your stores credibility, resulting in more customer
                      conversions.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* High Conversion Tab */}
              <TabsContent value="high-conversion" className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle>High Conversion</CardTitle>
                    <CardDescription>
                      The primary goal of eCommerce SEO is to drive traffic and
                      convert visitors into customers.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-justify">
                    <p>
                      The primary goal of eCommerce SEO is to drive traffic to
                      your store and convert visitors into paying customers. We
                      focus on selecting high-converting keywords and optimizing
                      user experience to keep visitors engaged within the
                      conversion funnel, ultimately boosting your sales.
                    </p>
                    <p>
                      Our team creates compelling email campaigns and
                      promotional strategies designed to encourage website
                      visitors to take the next step. With persuasive CTAs and
                      optimized landing pages, we make it easy for customers to
                      make a purchase. Additionally, we improve your eCommerce
                      stores loading speed, ensuring seamless navigation in
                      under 3 seconds, so customers dont abandon their shopping
                      experience.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>


      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 order-lg-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735054746/marketing-creative-collage-with-phone_wumloo.jpg"
            alt="Best Shopify eCommerce SEO Services in Bangalore"
            className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 order-lg-2">
          <h2 className="text-2xl sm:text-2xl font-medium text-black text-center">
          Top eCommerce SEO Services in Bangalore for Shopify Stores
          </h2>
          <p className="mt-4 text-gray-700">
          As a leading eCommerce SEO Company in Bangalore, we are committed to delivering affordable SEO services customized to your business needs. Whether youre using Shopify to build your online store, we have the expertise to optimize and manage it for maximum success. Shopify is a popular eCommerce platform trusted by small business owners, and were well-equipped to help you leverage its full potential.
          </p>
          <p className="mt-4 text-gray-700">
We will build a scalable online store tailored to your brand and optimize your Shopify store for optimal performance. Our services include complete page optimization, enhancing titles, headers, URLs, and metadata to attract more potential customers. Additionally, we implement both internal linking to create a clear product roadmap and external link-building strategies to enhance credibility through high DA websites, boosting your stores visibility.
          </p>

          <Link href="/get-quote" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
              Get Quote <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>


      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-8 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
         {/* Content Section (7 columns on larger screens) */}
         <div className="md:col-span-7 text-justify order-2 lg:order-1">
          <h2 className="text-2xl sm:text-2xl font-medium text-black text-center">
          ECommerce SEO for WooCommerce Websites in Bangalore
          </h2>
          <p className="mt-4 text-gray-700">
          Looking for a unique platform to build your eCommerce store? We offer specialized eCommerce SEO services for WooCommerce websites. While WooCommerce may not be as crowded as Shopify, it still hosts over a million stores, making optimization crucial to stand out. Our WooCommerce SEO services in Bangalore will help you improve your stores visibility and ranking on search engines.
          </p>
          <p className="mt-4 text-gray-700">
          We focus on creating compelling product descriptions that resonate with both users and search engines, along with optimizing page titles for better crawlability and rankings. As a leading SEO company in Bangalore, we also implement breadcrumbs to enhance user experience, allowing visitors to easily navigate your store and return to previous pages effortlessly.
          </p>
          <p className="mt-4 text-gray-700">
          Furthermore, we ensure that permalink URLs are concise and descriptive, making your store easily accessible to both visitors and search engines. Our WooCommerce SEO strategies are designed to improve site navigation, enhance user experience, and increase your stores chances of ranking higher, ultimately driving more sales and conversions.
          </p>

          <Link href="/get-quote" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
              Get Quote <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center px-4 order-1 lg:order-2">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735054748/5995360_bkrl55.jpg"
            alt="ECommerce SEO for WooCommerce Websites in Bangalore"
            className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>

       
      </div>


      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-5 mb-5 font-poppins max-w-7xl px-4 sm:px-6 lg:px-7 py-5">
        {/* Image Section (5 columns on larger screens) */}
        <div className="md:col-span-5 flex justify-center order-1 lg:order-1">
          <img
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1735054747/9010415_yjnnpm.jpg"
            alt="ECommerce SEO Experts in Bangalore Across All Platforms"
            className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
          />
        </div>

        {/* Content Section (7 columns on larger screens) */}
        <div className="md:col-span-7 text-justify px-2 order-2 order-lg-2">
          <h2 className="text-2xl sm:text-2xl font-medium text-black text-center">
          ECommerce SEO Experts in Bangalore Across All Platforms
          </h2>
          <p className="mt-4 text-gray-700">
          Since our inception as an eCommerce SEO company in Bangalore, we have helped numerous businesses grow by providing tailored SEO services across various eCommerce platforms. Our team of eCommerce SEO experts brings years of experience, enabling us to offer end-to-end SEO solutions that eliminate the need for clients to approach multiple agencies for different services.
          </p>
          <p className="mt-4 text-gray-700">
          We specialize in SEO for a wide range of eCommerce platforms, including:
          </p>
          <ul className="space-y-2 pt-2"> 
          <li className="flex items-center gap-2"> <CheckCheck /> WooCommerce  </li>
          <li className="flex items-center gap-2">  <CheckCheck /> Shopify  </li>
          <li className="flex items-center gap-2">  <CheckCheck /> WordPress  </li>
          <li className="flex items-center gap-2">  <CheckCheck /> BigCommerce  </li>
          <li className="flex items-center gap-2">  <CheckCheck /> OpenCart  </li>
          <li className="flex items-center gap-2">  <CheckCheck /> Odoo & More... </li>
          </ul>
          
          <p className="mt-4 text-gray-700">
          Our SEO experts are well-versed in the latest trends and best practices for these platforms, ensuring your eCommerce store is optimized for better search engine rankings, improved visibility, and higher conversions. With our extensive experience, we stay ahead of the curve, adapting to the ever-evolving SEO landscape, so you can focus on growing your business.
          </p>

          <Link href="/get-quote" passHref>
            <Button className="mt-5 inline-flex justify-center items-center rounded-lg text-sm font-semibold px-4 bg-slate-900 text-white hover:bg-slate-700 pointer-events-auto">
              Get Quote <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>



    <FeaturedOn />

    <TestimonialCarousel />

    <EcomServicesFaq1 />

    </div>
  );
};

export default EcomServicesContent;
