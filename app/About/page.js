import TechStackMarquee from "../components/Additional/Slider";
import WhyPage from "../components/MainPage/WhyPage";
import DriverJoinSection from "./DriverJoin";
import HeroPage from "./HeroPage";
import OurVision from "./OurVision";

export default function About() {
  return (
    <div className="px-4 pt-6     bg-[#e6b31900]">
      <HeroPage />
      <OurVision />
      <TechStackMarquee />
      <DriverJoinSection />
      <WhyPage />
    </div>
  );
}
