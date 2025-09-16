import DriverJoinSection from "../components/About/DriverJoin";
import HeroPage from "../components/About/HeroPage";
import OurVision from "../components/About/OurVision";
import ThreeSection from "../components/About/ThreeTypes";
import TechStackMarquee from "../components/Additional/Slider";
import BookingSteps from "../components/ServicePage/BookingSteps";

export default function About() {
  return (
    <div className="px-4 pt-6">
      <HeroPage />
      <ThreeSection />
      <OurVision />
      <TechStackMarquee />
      <BookingSteps />
      <DriverJoinSection />
    </div>
  );
}
