import Footer from "../footer/page";
import GoogleReview from "../googlereview/page";
import Navbar from "../navigation/page";
import SeoResultsContent from "./seoresultscontent/page";

import { generateMetadata } from '@/lib/metadata';
export const metadata = generateMetadata('/seo-results-from-organic-ads');

export default function SeoReusltsPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Navigation */}
      <div className="w-full">
        <Navbar />
      </div>


      {/* Full-Width Slider */}
      <div className="w-full">
<SeoResultsContent />
      </div>

      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
     

    </div>
  );
}
