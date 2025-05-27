import Footer from "../footer/page";
import GoogleReview from "../googlereview/page";
import Navbar from "../navigation/page";

import { generateMetadata } from '@/lib/metadata';
import GraphicsContents from "./graphicscont/page";
export const metadata = generateMetadata('/creative-graphics-design-services');


export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* Full-Width Navigation */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Full-Width Slider */}
      <div className="w-full">
 <GraphicsContents />
      </div>

      <GoogleReview />

      {/* Full-Width Slider */}
      <div className="w-full">
        <Footer />
      </div>
     

    </div>
  );
}
