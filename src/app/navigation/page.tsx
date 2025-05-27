'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Company',
    dropdown: [
      { name: 'About Us', href: '/about' },
      { name: 'Career', href: '/career-at-organicads' },
      { name: 'Infrastructure', href: '' },
      { name: 'Our Team', href: '' },
      { name: 'Certifications', href: '' },
    ],
  },
  {
    name: 'Marketing',
    dropdown: [
      { name: 'Digital Marketing', href: '/digital-marketing-agency-services-in-bangalore' },
      { name: 'SEO Services', href: '/seo-services-company-in-bangalore' },
      { name: 'Ecommerce Services', href: '/ecommerce-services-company-in-bangalore' },
      { name: 'Social Media Marketing', href: '/social-media-marketing-agency-in-bangalore' },
      { name: 'Pay Per Click', href: '/pay-per-click-ppc-management-company-in-bangalore' },
      { name: 'ORM', href: '/online-reputation-management-services-in-bangalore' },
    ],
  },
  {
    name: 'Web',
    dropdown: [
      { name: 'Web Design', href: '/website-design-services' },
      { name: 'Web Development', href: '/website-development-services' },
      { name: 'Wordpress Development', href: '/wordpress-website-development-services' },
      { name: 'Mobile App Development', href: '/mobile-app-development-services' },
      { name: 'Software Development', href: '/software-development-services' },
      { name: 'Branding & Graphic', href: '/creative-graphics-design-services' },
    ],
  },
  {
    name: 'Packages',
    dropdown: [
      { name: 'SEO Package', href: '/seo-packages' },
      { name: 'Web Design Package', href: '/web-design-development-packages' },
      { name: 'Social Media Package', href: '/social-media-marketing-package' },
      { name: 'PPC Package', href: '/ppc-packages' },
    ],
  },
  {
    name: 'Work',
    dropdown: [
      { name: 'Our Clients', href: '/ourclients' },
      { name: 'Latest SEO Results', href: '/seo-results-from-organic-ads' },
    ],
  },
  { name: 'Contact', href: '/contactus' },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-white shadow-md relative z-50 font-poppins">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo on Left */}
        <Link href="/" className="flex items-center">
          <span className="sr-only">Organic Ads</span>
          <img
            alt="Organic Ads Logo"
            src="https://res.cloudinary.com/s2ucdn/image/upload/v1734515561/organicads-logo_n5yg79.png"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-3 relative items-center mx-auto">
          {navItems.map((item, index) => (
            <li key={index} className="relative flex items-center">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="px-4 py-2 font-medium hover:text-blue-600 focus:outline-none flex items-center"
                  >
                    {item.name}{' '}
                    {openDropdown === item.name ? (
                      <ChevronUp size={16} className="ml-2" />
                    ) : (
                      <ChevronDown size={16} className="ml-2" />
                    )}
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden z-50 text-center transition-all duration-300 ease-in-out opacity-100">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm hover:bg-gray-100"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="px-4 py-2 font-medium hover:text-blue-600">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Request Quote Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/get-quote">
            <Button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Request Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar Menu with Smooth Transition */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col space-y-6 transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="self-end text-xl" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>
          <div className="flex-1 overflow-y-auto space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full text-left px-4 py-2 font-medium hover:text-blue-600 focus:outline-none flex items-center justify-between"
                    >
                      {item.name}{' '}
                      {openDropdown === item.name ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-6 mt-2 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                            onClick={() => {
                              setOpenDropdown(null);
                              setSidebarOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 font-medium hover:text-blue-600"
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          {/* Request Quote Button (Mobile) */}
          <Link href="/get-quote">
            <Button className="w-full bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
              Request Quote
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
