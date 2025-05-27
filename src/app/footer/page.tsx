"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import BackToTop from "src/components/BackToTop"

// Dynamic Footer Links
const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "SEO Packages Bangalore", href: "/seo-packages" },
      { name: "SEO Outsourcing", href: "/outsource-seo-services-bangalore" },
      { name: "SEO Training", href: "/seo-training-bangalore" },
      { name: "Contact Us", href: "/contactus" },
      { name: "Blog", href: "" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Sitemap", href: "/sitemap.xml" },
    ],
  },
  {
    title: "Marketing",
    links: [
      { name: "Latest SEO Results", href: "/seo-results-from-organic-ads" },
      { name: "SEO Services", href: "/seo-services-company-in-bangalore" },
      { name: "Social Media Marketing", href: "/social-media-marketing-agency-in-bangalore" },
      { name: "Pay Per Click", href: "/pay-per-click-ppc-management-company-in-bangalore" },
      { name: "Online Reputation Management", href: "/online-reputation-management-services-in-bangalore" },
    ],
  },
  {
    title: "Web",
    links: [
      { name: "Website Design", href: "/website-design-services" },
      { name: "Website Development", href: "/website-development-services" },
      { name: "WordPress Development", href: "/wordpress-website-development-services" },
      { name: "Branding & Graphics", href: "/creative-graphics-design-services" },
    ],
  },
];

const Footer = () => {
  return (
     
    <section id="seo-results" className="py-10 font-poppins relative bg-gray-900 text-white text-sm">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <footer className="bg-gray-900 text-white text-sm">
      {/* Top Footer */}
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dynamic Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:text-blue-400">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="mb-2 flex items-center">
              <MapPin size={18} className="mr-2" />
              Organic Ads Digital Marketing Company, Bangalore
            </p>
            <p className="mb-2 flex items-center">
              <Phone size={18} className="mr-2" />
              <Link href="tel:+917259404569" className="hover:text-blue-400">
                +91 7259404569
              </Link>
            </p>
            <p className="mb-2 flex items-center">
              <Phone size={18} className="mr-2" />
              <Link href="tel:+917353073430" className="hover:text-blue-400">
                +91 7353073430
              </Link>
            </p>
            <p className="flex items-center">
              <Mail size={18} className="mr-2" />
              <Link href="mailto:contact@organicads.in" className="hover:text-blue-400">
                contact@organicads.in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center container mx-auto px-5">
          <div className="flex items-center space-x-4">
            <Image
              src="https://res.cloudinary.com/s2ucdn/image/upload/v1706455197/final_logo_2_de3sns.png"
              alt="OrganicAds"
              width={50}
              height={50}
            />
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/organicads1/" target="_blank">
                <Facebook size={24} className="hover:text-blue-400" />
              </Link>
              <Link href="https://www.instagram.com/organicads1/" target="_blank">
                <Instagram size={24} className="hover:text-pink-400" />
              </Link>
              <Link href="https://www.linkedin.com/company/organicads1/" target="_blank">
                <Linkedin size={24} className="hover:text-blue-400" />
              </Link>
              
            </div>
          </div>
          <p className="mt-4 md:mt-0">© 2025 Organic Ads Technologies. All Rights Reserved.</p>
        </div>
      </div>
      
      <BackToTop />

      {/* SEO Cost Calculator Button - Fixed to Right */}
      <div className="fixed bottom-10 right-5 md:right-10 z-50">
        <Link
          href="/seo-cost-calculator"
          className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
        >
          SEO Cost Calculator
        </Link>
      </div>

    </footer>
    </div>
    </section>
  );
};

export default Footer;
