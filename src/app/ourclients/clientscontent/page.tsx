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
import { Card, CardContent } from "@/components/ui/card";

const ClientsContent = () => {
  // Define logos with brand names
  const logos = [
    {
      src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716912231/brand27_lowpw2.png",
      brand: "Pikme",
    },
    {
      src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716912228/brand26_klmi4h.png",
      brand: "ANR Gardeners",
    },
    {
      src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716912234/brand28_i8yefa.png",
      brand: "Technacle",
    },
    {
      src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716912235/brand29_qyygyf.png",
      brand: "Children Story Time",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand11_mevnv5.png",
        brand: "Localaids",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand12_ol1ltb.png",
        brand: "Tvashtaa Organic",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/ms-logo_cguutc.webp",
        brand: "Metric Stream",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/globe-moving-logo_fuwae1.webp",
        brand: "Globe Moving",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/meratransport_wh7wpy.webp",
        brand: "Mera Transport dot com",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/iampl-logo_jst3ur.webp",
        brand: "IAMPL",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/slk-logo_jjlgyt.webp",
        brand: "SLK",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398913/desijodi-logo_aehtzm.webp",
        brand: "Desi Jodi dot net",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/darby-logo_xnyqni.webp",
        brand: "Derby",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/fincare_qujvvh.webp",
        brand: "Fincare",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/sefee-logo_jpi629.webp",
        brand: "Seefee Amphenol",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/enigma-cg-logo_mvfxsj.webp",
        brand: "Enigma CG Consulting Group",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735398914/ipr-arena_zrrcii.webp",
        brand: "PR Arena",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716905628/brand7_f0v3gl.webp",
        brand: "BHIVE Workspace",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716905628/brand6_s5lxto.webp",
        brand: "vakil Search",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716905414/brand5_oqbsa8.webp",
        brand: "Provident",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716905304/bran5_v0vrdi.webp",
        brand: "Apollo Hospitals",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716905197/brand4_zfhhkm.webp",
        brand: "Salarpuria Sattva",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716905111/brand3_pjatyt.webp",
        brand: "Purvankara",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716904751/brand2_zojble.png",
        brand: "RMZ Marq",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716904750/brand1_f0hose.png",
        brand: "Plan B Capital",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716912221/brand25_zdidxa.png",
        brand: "Halli TV Youtube Channel",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716908993/brand24_rqy9j2.png",
        brand: "Manipal Design",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716908992/brand23_gupihh.png",
        brand: "P66.me",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716908989/brand21_bbswco.png",
        brand: "Perfect Web Design Company",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716908986/brand20_q8aw1r.png",
        brand: "Infostyx Technologies",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716908986/brand19_w1x49x.png",
        brand: "AMC Comforts",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716907785/brand18_xrfefo.png",
        brand: "Caprico Facilities Services",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716907781/brand16_fn3asc.png",
        brand: "Unique Wealth Trading Company",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716907781/brand17_fjky1u.png",
        brand: "Westbound Marketing Services Limited",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716907364/brand15_poukcu.png",
        brand: "Ideal Industrial Synergy Solutions Pvt Ltd",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716907364/brand14_dtyu8x.png",
        brand: "VCS Newz",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1716907364/brand13_xwpino.png",
        brand: "Oyokart Ecommerce",
    },
    {
        src: "https://res.cloudinary.com/s2ucdn/image/upload/v1735399776/BKlogo_anmtz5.png",
        brand: "Best Kannada News",
    },


  ];

  return (
    <div className="font-poppins">
      {/* Header Section */}
      <section className="inner-sub-header bg-gray-100 py-6">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-xl font-medium text-gray-800 text-center sm:text-3xl md:text-4xl lg:text-4xl">
            OrganicAds Clients
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
                    OrganicAds Clients
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="container mx-auto mt-10 mb-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <Card
              key={index}
              className="shadow border rounded-xl flex justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl flex-shrink-0 w-40"
            >
              <CardContent className="flex flex-col justify-center items-center w-full p-2">
                {/* Client Logo */}
                <img
                  src={logo.src}
                  alt={logo.brand}
                  loading="lazy"
                  className="w-full h-auto object-contain max-h-20"
                />
               
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClientsContent;
