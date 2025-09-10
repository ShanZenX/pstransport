import AboutCompany from "../components/About/AboutCompany";
import DriverJoinSection from "../components/About/DriverJoin";
import HeroPage from "../components/About/HeroPage";
import OurVision from "../components/About/OurVision";
import OwnerShowcase from "../components/About/OwnerShowcase";
import ThreeSection from "../components/About/ThreeTypes";
import TechStackMarquee from "../components/Additional/Slider";
import FormHolder from "../components/MainPage/FormHolder";
import ReviewsSection from "../components/MainPage/Review";
import WhyPage from "../components/MainPage/WhyPage";
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
      {/* <WhyPage /> */}
      {/* <AboutCompany /> */}
      <ReviewsSection />
    </div>
  );
}
