"use client"; // Required for Next.js in app directory

import React from "react";
import Image from "next/image";
import Link from "next/link";

const GoogleReview = () => {
  return (
    
    <section id="seo-results" className="py-10 font-poppins relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-gray-100 rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center">
  {/* Left: Google Logo & Rating */}
  <Link
    href="https://maps.app.goo.gl/eX3B41CQYv1a7pn47"
    target="_blank"
    rel="nofollow"
    className="flex items-center space-x-4"
  >
    <Image
      src="https://res.cloudinary.com/s2ucdn/image/upload/v1734527173/Google-Reviews_1024x_pzhqjm.webp"
      alt="OrganicAds Google Reviews"
      width={125}
      height={40}
    />
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4">
      <p className="text-xl font-bold text-gray-900">4.9</p>
      <ul className="flex text-yellow-500">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <li key={i} className="text-2xl">⭐</li>
          ))}
      </ul>
      <p className="text-gray-600 text-sm md:text-base">286 reviews</p>
    </div>
  </Link>

  {/* Right: View on Google Button */}
  <Link
    href="https://maps.app.goo.gl/eX3B41CQYv1a7pn47"
    target="_blank"
    rel="nofollow"
    className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 mt-4 md:mt-0"
  >
    View on Google
  </Link>
</div>

      </div>
    </section>
  );
};

export default GoogleReview;
