import Footer from "../footer/page";
import GoogleReview from "../googlereview/page";
import Navbar from "../navigation/page";

import { generateMetadata } from '@/lib/metadata';
import MobileAppContents from "./mobileappcont/page";
export const metadata = generateMetadata('/mobile-app-development-services');


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Navigation */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Full-Width Slider */}
      <div className="w-full">
      <MobileAppContents />
      </div>

      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
     

    </div>
  );
}
