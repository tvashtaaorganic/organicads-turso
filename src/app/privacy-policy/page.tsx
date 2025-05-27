import Footer from "../footer/page";
import GoogleReview from "../googlereview/page";
import Navbar from "../navigation/page";


import { generateMetadata } from '@/lib/metadata';
import PpContent from "./ppcontent/page";
export const metadata = generateMetadata('/privacy-policy');

export default function GetQuote() {
  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Navigation */}
      <div className="w-full">
        <Navbar />
      </div>


      {/* Full-Width Slider */}
      <div className="w-full">
        <PpContent />
      </div>

      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
     

    </div>
  );
}
