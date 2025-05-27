import Footer from "../footer/page";
import GoogleReview from "../googlereview/page";
import Navbar from "../navigation/page";
import ClientsContent from "./clientscontent/page";

import { generateMetadata } from '@/lib/metadata';
export const metadata = generateMetadata('/ourclients');

export default function GetQuote() {
  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Navigation */}
      <div className="w-full">
        <Navbar />
      </div>


      {/* Full-Width Slider */}
      <div className="w-full">
<ClientsContent />
      </div>

      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
     

    </div>
  );
}
