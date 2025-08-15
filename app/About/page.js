import AboutCompany from "../components/About/AboutCompany";
import DriverJoinSection from "../components/About/DriverJoin";
import HeroPage from "../components/About/HeroPage";
import OurVision from "../components/About/OurVision";
import TechStackMarquee from "../components/Additional/Slider";
import FormHolder from "../components/MainPage/FormHolder";
import WhyPage from "../components/MainPage/WhyPage";
import BookingSteps from "../components/ServicePage/BookingSteps";

export default function About() {
  return (
    <div className="px-4 pt-6     bg-[#e6b31900]">
      <HeroPage />
      <OurVision />
      <BookingSteps />
      <AboutCompany />
      <TechStackMarquee />
      <DriverJoinSection />
      <WhyPage />
    </div>
  );
}
