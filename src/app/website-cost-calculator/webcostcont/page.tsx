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
import WebCostCalForm from "@/app/filloutcta/webcostcal/page";

const WebCostContents = () => {
  return (
    <div className="font-poppins">
      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 sm:text-3xl md:text-4xl">
            Website Cost Calculator
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
                    Website Cost Calculator
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <section className="bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-5 lg:px-0 ">
            {/* Heading */}
            <div className="text-left mb-10">
              <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 text-center">
                Revive Your Brand with OrganicAds
              </h3>
              <p className="text-gray-600 mb-4 text-justify">
                Looking to breathe new life into your brand? The leading SEO
                agency in Ahmedabad, OrganicAds, is here to help. With over six
                years of expertise, we have gained valuable insights to drive
                exceptional results. When you partner with us, you can rest
                easy, knowing your SEO and digital marketing needs are in the
                hands of experts. We specialize in search engine optimization
                (SEO), website development, and online advertising to elevate
                your brands online presence.
              </p>
              <p className="text-gray-600 text-justify">
                When it comes to website design, a common question is, How much
                does a website cost in Bangalore? The answer depends on the
                size, features, and complexity of the website. To help you get
                an idea, our website cost estimator provides an accurate
                estimate tailored to your needs. Partner with OrganicAds and
                take the first step toward a powerful digital transformation.
              </p>
            </div>

            {/* Fillout Embed */}
            <div className="w-full relative">
              <WebCostCalForm />
            </div>

            {/* Additional Info */}
            <div className="mt-12">
              <h3 className="text-xl sm:text-2xl font-medium mb-4">
                How Much Does a Website Cost?
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                Determining the exact cost of a website depends on understanding
                the clients specific needs and goals. Your website budget
                should align with its purpose and the features you require.
                Basic websites are cost-effective and ideal for starting out,
                while advanced, feature-rich sites require greater expertise
                and, therefore, a higher investment.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                To help you estimate your website design cost, OrganicAds offers
                a user-friendly website price calculator. This tool provides a
                tailored cost estimate based on your requirements, making it
                easier to plan your budget. Partner with us to create a website
                that meets your goals and delivers value.
              </p>

              <h3 className="text-xl sm:text-2xl font-medium mb-4">
                What Is the Cost of Creating a Website with Us?
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                Looking to build a website? OrganicAds is here to design the
                perfect website tailored to your needs. Whether for a business,
                organization, or individual, our professional web design team
                ensures your site is responsive and functions seamlessly across
                smartphones, tablets, and other mobile devices.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                We specialize in adding engaging media elements like photos and
                videos, creating interactive designs that captivate users. A
                professionally crafted website not only attracts new customers
                but also strengthens relationships with existing ones, all at a
                budget-friendly cost.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                To get a clear estimate of your website design expense, use our
                Website Design Cost Calculator. Let us create a website that
                elevates your online presence and achieves your goals
                effectively.
              </p>

              <h3 className="text-xl sm:text-2xl font-medium mb-2">
                What features are offered when you choose us?
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                Our website design packages include the following features:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>SMS Marketing</li>
                <li>Website Builder</li>
                <li>Social Media Integration</li>
                <li>Video Integration</li>
                <li>Lead Capture</li>
                <li>Email Marketing</li>
                <li>Dynamic Pages</li>
                <li>Responsive Design</li>
                <li>Custom Design</li>
                <li>Mailchimp Integration</li>
                <li>Webmaster Tools</li>
                <li>Backup and Restore</li>
                <li>SEO Optimization</li>
                <li>Image Integration</li>
                <li>Content Management System</li>
                <li>Blog</li>
                <li>Onsite Chat</li>
                <li>Customer Management</li>
                <li>Mobile Friendly</li>
                <li>Blog Manager And much more</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-medium mb-2">
                What Budget Is Suitable for a Small Business Website?
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                Small businesses often operate with limited budgets, which is
                why OrganicAds offers affordable website design solutions
                tailored to meet your needs. With our extensive experience
                across various industries, we can create a customized website
                that perfectly aligns with your companys goals and branding.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                The cost of a small business website depends on its scope and
                complexity. Whether you need a simple site to showcase your
                services or a more intricate design to handle specific business
                functions, we ensure it fits your budget without compromising
                quality.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Let OrganicAds craft a professional and budget-friendly website
                to help your small business grow. Contact us or use our Website
                Design Cost Calculator to estimate the investment required for
                your project.
              </p>

              <h3 className="text-xl sm:text-2xl font-medium mb-2">
                What is the typical price of a website?
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                The cost of website design and development generally ranges from
                ₹8,000 to ₹65,000 INR. The price often depends on the
                development platform, such as PHP, WordPress, Shopify, Magento,
                or WooCommerce.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                If you are searching for a reliable and affordable website
                solution, look no further than OrganicAds. With over six years
                of experience, we have assisted numerous businesses and
                organizations globally in achieving their website goals. Our
                team of skilled professionals has created some of the most
                effective and influential websites on the internet, showcasing
                our commitment to quality and expertise.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                We offer three service levels to cater to your unique needs:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>
                  Starter Websites – Ideal for new businesses or individuals
                  starting their digital journey.
                </li>
                <li>
                  Business Websites – Tailored for established enterprises
                  aiming to expand their online presence.
                </li>
                <li>
                  Cutting-Edge Websites – Perfect for those seeking advanced
                  features and innovative designs.
                </li>
              </ul>
              <p className="text-gray-700 mb-4 text-justify">
                At OrganicAds, we take pride in offering high-quality websites
                that fit your needs and budget, ensuring your investment
                delivers long-term value. Use our Website Design Cost Calculator
                to estimate your project cost and bring your vision to life
                without overspending.
              </p>

              <h3 className="text-xl sm:text-2xl font-medium mb-2">
                Web Design Cost Calculator
              </h3>
              <p className="text-gray-700 mb-4 text-justify">
                As one of the leading website design companies in Ahmedabad,
                OrganicAds is committed to transparency in quotations. We
                believe our clients should have a clear understanding of website
                design pricing to make informed decisions. While there are
                numerous website price calculators available online, most lack
                the flexibility to tailor estimates to individual needs.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                Our Web Design Cost Calculator simplifies budgeting, allowing
                you to customize your requirements for an accurate cost
                estimate. Beyond this, our sales experts are available to
                provide a detailed cost breakdown, discuss additional needs, and
                recommend supplementary services such as SEO, digital marketing,
                and online promotions.
              </p>
              <p className="text-gray-700 mb-4 text-justify">
                At OrganicAds, we ensure that your investment aligns with your
                goals, empowering you to choose a web design solution that fits
                your budget and delivers lasting results.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebCostContents;
