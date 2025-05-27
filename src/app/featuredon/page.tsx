"use client";  // Important for Next.js in app directory

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const images = [
  "https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/yourstory-logo_tyha7t.webp",
  "https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/ein_kh4kd8.webp",
  "https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/top-seo-logo_vmgqrr.webp",
  "https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/xing-new-logo_zwbbgz.webp",
  "https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/bdaily-logo_k428jz.webp",
  "https://res.cloudinary.com/djiki7tvo/image/upload/v1741938408/medium-logo_paphqz.webp",
];

const images1 = [
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716912231/brand27_lowpw2.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716912228/brand26_klmi4h.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716912234/brand28_i8yefa.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716912235/brand29_qyygyf.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand11_mevnv5.png",
  "https://res.cloudinary.com/s2ucdn/image/upload/v1716906948/brand12_ol1ltb.png",
];


function FeaturedOn() {
  return (
    <section id="seo-results" className="py-20 bg-[#3b32f6] font-poppins relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium text-white">
            We are featured on
          </h2>
        </div>

        {/* Gradient Overlay for Soft Fade Effect */}
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#3b32f6] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#3b32f6] to-transparent z-10"></div>

          {/* Marquee Effect */}
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -1000] }} // Adjust for smoothness
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {[...images, ...images].map((src, index) => (
                <div key={index} className="flex-shrink-0 w-40">
                  <Card className="w-full h-25">
                    <CardContent className="flex items-center justify-center p-2">
                      <img
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="w-full h-auto object-contain max-h-20"
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

{/* Section Title */}
<div className="text-center mb-8 mt-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-white">
          Some of our Valuable Clients
          </h2>
</div>

{/* Gradient Overlay for Soft Fade Effect */}
<div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#3b32f6] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#3b32f6] to-transparent z-10"></div>

          {/* Marquee Effect */}
          <div className="overflow-hidden whitespace-nowrap">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [-1000, 0] }} // Moves from left to right
           // animate={{ x: ["-50%", "0%"] }} // Moves continuously
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
              style={{ display: "flex", whiteSpace: "nowrap" }}
            >
              {[...images1, ...images1].map((src, index) => (
                <div key={index} className="flex-shrink-0 w-40">
                  <Card className="w-full h-25">
                    <CardContent className="flex items-center justify-center p-2">
                      <img
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="w-full h-auto object-contain max-h-20"
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}

export default FeaturedOn;
