import { Inter } from "next/font/google";

// Import Custom Components
import IntroSection from "@/components/common/partials/home/IntroSection";
import ServiceBox from "@/components/common/partials/home/ServiceBox";
import CategorySection from "@/components/common/partials/home/CategorySection";
import BestCollection from "@/components/common/partials/home/BestCollection";
import DealSection from "@/components/common/partials/home/DealSection";
import FeaturedCollection from "@/components/common/partials/home/FeaturedCollection";
import CtaSection from "@/components/common/partials/home/CtaSection";
import BlogSection from "@/components/common/partials/home/BlogSection";
import BrandSection from "@/components/common/partials/home/BrandSection";

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
