
import HeroContent from "./herocontent/page";
import Footer from "./footer/page";
import Navbar from "./navigation/page";

import { generateMetadata } from '@/lib/metadata';
export const metadata = generateMetadata('/');

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Navigation */}
      <div className="w-full">
        <Navbar />
      </div>


      {/* Full-Width Slider */}
      <div className="w-full">
        <HeroContent />
      </div>

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>


    </div>
  );
}
