import AddBanner from "../components/ServicePage/AddBanner";
import ServiceSection from "../components/ServicePage/ServiceSection";
import BookingSteps from "../components/ServicePage/BookingSteps";
import OurServices from "../components/ServicePage/OurService";
import Why from "../components/Additional/Test2";
import CarsCarousel from "../components/ServicePage/CarCurosal";
import TechStackMarquee from "../components/Additional/Slider";
import LogisticsSection from "../components/ServicePage/LogisticsSection";
import LogisticsServices from "../components/ServicePage/LogisticsServices";
import CorporateCollaboration from "../components/ServicePage/Coporate";

export default function Services() {
  return (
    <div className="px-4 pt-6 md:h-[4000px]    bg-[#e6b31900]">
      <ServiceSection />
      {/* <AddBanner /> */}
      <OurServices />
      <TechStackMarquee />
      <CarsCarousel />
      <LogisticsSection/>
      <LogisticsServices/>
      <Why/>
      <CorporateCollaboration/>
    </div>
  );
}
