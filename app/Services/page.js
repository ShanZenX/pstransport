import ServiceSection from "../components/ServicePage/ServiceSection";
import OurServices from "../components/ServicePage/OurService";
import Why from "../components/Additional/Test2";
import CarsCarousel from "../components/ServicePage/CarCurosal";
import TechStackMarquee from "../components/Additional/Slider";
import LogisticsSection from "../components/ServicePage/LogisticsSection";
import CorporateCollaboration from "../components/ServicePage/Coporate";

export default function Services() {
  return (
    <div className="px-4 pt-6    bg-[#e6b31900]">
      <ServiceSection />
      <OurServices />
      <TechStackMarquee />
      <CarsCarousel />
      <LogisticsSection />
      <Why />
      <CorporateCollaboration />
    </div>
  );
}
