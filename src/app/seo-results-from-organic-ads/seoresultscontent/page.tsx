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

const seoResultsData = [
    {
        website: "Skin Clinic Sydney | Google.com.au",
        keywords: [
          { keyword: "Laser Hair Removal Sydney", ranking: 1 },
          { keyword: "Best Skin Treatments Sydney", ranking: 4 },
          { keyword: "Laser Skin Treatment Sydney", ranking: 1 },
          { keyword: "Best Lip Injections Sydney", ranking: 3 },
          { keyword: "Acne Scarring Treatment Sydney", ranking: 5 },
        ],
      },
      {
        website: "Dentist | Google.com",
        keywords: [
          { keyword: "Emergency dentist ingleside", ranking: 1 },
          { keyword: "Pediatric dentist ingleside", ranking: 1 },
          { keyword: "Dentistry for children ingleside", ranking: 1 },
          { keyword: "Teeth whitening dentist ingleside", ranking: 1 },
          { keyword: "Dental crown ingleside", ranking: 1 },
        ],
      },
      {
        website: "E-commerce | Google.com.au",
        keywords: [
          { keyword: "aquarium store sydney", ranking: 1 },
          { keyword: "aquarium sales", ranking: 1 },
          { keyword: "buy aquarium", ranking: 1 },
          { keyword: "aquarium store sydney", ranking: 1 },
          { keyword: "aquarium supplies", ranking: 2 },
        ],
      },
      {
        website: "Pharma Design   |   Google.co.in",
        keywords: [
          { keyword: "Pharma Visual Aid", ranking: 1 },
          { keyword: "pharma leave behind literature", ranking: 2 },
          { keyword: "pharma product card design", ranking: 2 },
          { keyword: "pharma visual aid design company", ranking: 3 },
          { keyword: "pharma visual aid printers", ranking: 3 },
        ],
      },
      {
        website: "Cold Storage   |   Google.ae",
        keywords: [
          { keyword: "Cold Storage in Al Quoz", ranking: 1 },
          { keyword: "al quoz cold storage", ranking: 1 },
          { keyword: "Cold Storage for Rent in Dubai", ranking: 3 },
          { keyword: "cold storage rental", ranking: 4 },
          { keyword: "Cold storage in Dubai", ranking: 5 },
        ],
      },
      {
        website: "Physiotherapist   |   Google.ca",
        keywords: [
          { keyword: "best physiotherapy sylvan lake", ranking: 3 },
          { keyword: "sylvan lake physio", ranking: 3 },
          { keyword: "Sylvan Lake Physiotherapy", ranking: 3 },
          { keyword: "Physiotherapy Sylvan Lake", ranking: 3 },
          { keyword: "physiotherapy clinics sylvan lake", ranking: 3 },
        ],
      },
      {
        website: "Solar   |   Google.com.au",
        keywords: [
          { keyword: "best physiotherapy sylvan lake", ranking: 2 },
          { keyword: "sylvan lake physio", ranking: 3 },
          { keyword: "Sylvan Lake Physiotherapy", ranking: 3 },
          { keyword: "Physiotherapy Sylvan Lake", ranking: 5 },
          { keyword: "physiotherapy clinics sylvan lake", ranking: 5 },
        ],
      },
      {
        website: "Rental Service   |   Google.co.in",
        keywords: [
          { keyword: "luxury bus rental in ahmedabad", ranking: 1 },
          { keyword: "hire Toyota innova in ahmedabad", ranking: 2 },
          { keyword: "Hire Tempo Traveller in ahmedabad", ranking: 2 },
          { keyword: "bus hire in ahmedabad", ranking: 3 },
          { keyword: "Hire Tempo Traveller in ahmedabad", ranking: 3 },
        ],
      },
      {
        website: "Software   |   Google.com.au",
        keywords: [
          { keyword: "Rfid Solutions Australia", ranking: 2 },
          { keyword: "rfid australia", ranking: 3 },
          { keyword: "rfid solutions", ranking: 3 },
          { keyword: "uhf rfid tags", ranking: 5 },
          { keyword: "UHF Tag Reader", ranking: 5 },
        ],
      },
      {
        website: "Travel   |   Google.com",
        keywords: [
          { keyword: "Sabarimala vip darshan", ranking: 2 },
          { keyword: "Amarnath yatra vip darshan", ranking: 2 },
          { keyword: "Vaishno devi vip tickets & helicopter yatra", ranking: 2 },
          { keyword: "Vaishno Devi Battery Car Booking", ranking: 4 },
          { keyword: "Holiday tour packages for prayagraj", ranking: 4 },
        ],
      },
      {
        website: "E-Commerce   |   Google.co.in",
        keywords: [
          { keyword: "bialetti coffee maker india", ranking: 1 },
          { keyword: "bialetti india", ranking: 1 },
          { keyword: "aerolatte India", ranking: 1 },
          { keyword: "bialetti store", ranking: 2 },
          { keyword: "melitta india", ranking: 2 },
        ],
      },
      {
        website: "Import - Export   |   Google.co.in",
        keywords: [
          { keyword: "Sandstone Manufacturer in India", ranking: 3 },
          { keyword: "Sandstone Supplier in India", ranking: 3 },
          { keyword: "Sandstone Exporter in India", ranking: 3 },
          { keyword: "Marble Supplier in India", ranking: 3 },
          { keyword: "Granite Manufacturer in India", ranking: 3 },
        ],
      },
      {
        website: "Blogger   |   Google.co.in",
        keywords: [
          { keyword: "top growing sectors in india", ranking: 1 },
          { keyword: "rpo companies in india", ranking: 1 },
          { keyword: "famous master chef in india", ranking: 1 },
          { keyword: "pre wedding location in gujarat", ranking: 3 },
          { keyword: "jasmine dhunna", ranking: 4 },
        ],
      },
      {
        website: "Silver Jewellery Store | Google.co.in",
        keywords: [
          { keyword: "online silver jewellery in Ahmedabad", ranking: 1 },
          { keyword: "Handcrafted Silver Jewellery in Ahmedabad", ranking: 1 },
          { keyword: "Online Silver Earrings in Ahmedabad", ranking: 1 },
          { keyword: "Online Silver Pendant in Ahmedabad", ranking: 1 },
          { keyword: "Online Silver Bracelet in Ahmedabad", ranking: 1 },
        ],
      },


    // You can add more website results dynamically here
  ];

const SeoResultsContent = () => {

  return (
    <div className="font-poppins">
      {/* Header Section */}
      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
          Latest SEO Results from OrganicAds
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
                  Latest SEO Results
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </section>

<section className="container mx-auto mt-10 mb-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-center text-xl sm:text-xl md:text-2xl lg:text-2xl font-medium">
    Check Out Few Of Our Latest SEO Results
    </h2>
    <p className="mt-4 text-gray-700 text-center">
    Till now we have served more than 300+ clients and Improve conversion by ranking on Top 10 search results in Google.
    </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {seoResultsData.map((site, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
          <h2 className="text-lg font-semibold mb-3 text-center">{site.website}</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
              <tr className="bg-[#fff3d7]">
                  <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Keywords</th>
                  <th className="border border-gray-300 px-4 py-2 text-center font-semibold">Current Ranking</th>
                </tr>
              </thead>
              <tbody>
                {site.keywords.map((item, idx) => (
                  <tr key={idx} className="border border-gray-300">
                    <td className="border border-gray-300 px-4 py-2">{item.keyword}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{item.ranking}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>

</section>


    </div>
  );
};

export default SeoResultsContent;
