import Footer from "../footer/page";
import GoogleReview from "../googlereview/page";
import Navbar from "../navigation/page";
import SeoTraningContent from "./seotraining/page";

import { generateMetadata } from '@/lib/metadata';
export const metadata = generateMetadata('/seo-training-bangalore');

export default function GetQuote() {
  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Navigation */}
      <div className="w-full">
        <Navbar />
      </div>


      {/* Full-Width Slider */}
      <div className="w-full">
        <SeoTraningContent />
      </div>

      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
     

    </div>
  );
}
