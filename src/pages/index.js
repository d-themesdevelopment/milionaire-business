import { Inter } from "next/font/google";

// Import Custom Components
import IntroSection from "@/components/partials/home/IntroSection";
import ServiceBox from "@/components/partials/home/ServiceBox";
import CategorySection from "@/components/partials/home/CategorySection";
import BestCollection from "@/components/partials/home/BestCollection";
import DealSection from "@/components/partials/home/DealSection";
import FeaturedCollection from "@/components/partials/home/FeaturedCollection";
import CtaSection from "@/components/partials/home/CtaSection";
import BlogSection from "@/components/partials/home/BlogSection";
import BrandSection from "@/components/partials/home/BrandSection";

export default function Home() {
  

  return (
    <>
      <div className="page-content">
        <div className="intro-section">
          <IntroSection />

          <ServiceBox />
        </div>

        <CategorySection />

        <BestCollection />

        <DealSection />

        <FeaturedCollection />

        <CtaSection />

        <BlogSection />

        <BrandSection />
      </div>
    </>
  );
}
