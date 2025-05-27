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
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import FilloutForm from "@/app/filloutcta/page";

const ContactContent = () => {
  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        Career at OrganicAds
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
                Career at OrganicAds
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>


<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center mt-10 mb-10 sm:mt-10 font-poppins max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
  {/* Image Section (4 columns on larger screens) */}
  <div className="md:col-span-5 flex justify-center space-y-16 px-4 sm:px-6 lg:px-8">
  <img
    src="https://res.cloudinary.com/djiki7tvo/image/upload/v1742027670/map-india_yah7i4.png" 
    alt="Career at OrganicAds"
    className="w-[90%] sm:w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-lg"
  />
</div>

  {/* Content Section (8 columns on larger screens) */}
  <div className="md:col-span-7 text-justify px-2">
     
  <section className="bg-gray-100 p-5 rounded-lg shadow-lg">
      <h3 className="text-blue-600 text-xl font-medium">Contact Details</h3>
      <hr className="my-3" />
      <div className="mb-4 flex items-start gap-2">
        <MapPin size={20} className="text-blue-600" />
        <p>
          Organic Ads Technologies Digital Marketing Company, <br /> Talakadu Subbarao Beedi, <br /> Near Raghavendra Swamy Temple, <br /> Nelamangala, Bangalore, Karnataka, IN 562123
        </p>
      </div>
      <Link href="tel:+917259404569" className="flex items-center gap-2 text-blue-600 mb-4">
        <Phone className="text-black" size={20} /> +91 725940 4569
      </Link>
      <Link href="tel:+917353073430" className="flex items-center gap-2 text-blue-600 mb-4">
        <Phone className="text-black" size={20} /> +91 73530 73430
      </Link>
      <Link href="mailto:contact@organicads.in" className="flex items-center gap-2 text-blue-600 mb-4">
        <Mail className="text-black" size={20} /> contact@organicads.in
      </Link>
      <div className="flex space-x-4 mt-6">
      <a
        href="https://www.facebook.com/organicads1/"
        target="_blank"
        rel="noopener noreferrer"
        title="Like us on Facebook"
        className="text-blue-600 hover:text-blue-800 transition"
      >
        <Facebook size={24} />
      </a>
      <a
        href="https://www.instagram.com/organicads1/"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on Instagram"
        className="text-pink-600 hover:text-pink-800 transition"
      >
        <Instagram size={24} />
      </a>
      <a
        href="https://www.linkedin.com/company/organicads1/"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on LinkedIn"
        className="text-blue-500 hover:text-blue-700 transition"
      >
        <Linkedin size={24} />
      </a>
     
    </div>
    </section>
  </div>
</div>


<section className="bg-blue-600 text-white py-12 flex justify-center items-center">
  <div
    className="container mx-auto p-4 flex justify-center items-center"
    data-aos="fade-up"
  >
    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-3/3 overflow-hidden">
      <FilloutForm />
    </div>
  </div>
</section>



    </div>
  );
};

export default ContactContent;
