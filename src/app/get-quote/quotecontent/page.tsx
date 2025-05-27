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
import GetQuoteForm from "@/app/filloutcta/getquote/page";

const QuoteContent = () => {
  return (
    <div className="font-poppins">
    <section className="inner-sub-header bg-gray-100 py-6">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-xl font-medium text-gray-800 text-center font-poppins sm:text-3xl md:text-4xl lg:text-4xl">
        OrganicAds Get a Free Quote
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
                OrganicAds Get a Free Quote
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
      </div>
    </section>



<section className="bg-blue-600 text-white py-12 flex justify-center items-center">
  <div
    className="container mx-auto p-4 flex justify-center items-center"
    data-aos="fade-up"
  >
    <div className="w-full md:w-2/3 lg:w-1/2 xl:w-3/3 overflow-hidden">
      <GetQuoteForm />
    </div>
  </div>
</section>



    </div>
  );
};

export default QuoteContent;
