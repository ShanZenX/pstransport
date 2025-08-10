import Image from "next/image";
import Fact from "./components/MainPage/Fact";
import WhyPage from "./components/MainPage/WhyPage";
import ReviewsSection from "./components/MainPage/Review";
import Why from "./components/Additional/Test2"
import TransportPackagesCarousel from "./components/Additional/Curosal";
import SwiperSlider from "./components/Additional/Slider";
import TechStackMarquee from "./components/Additional/Slider";

export default function Home() {
  return (
    <div className="">
      <WhyPage />
      <TechStackMarquee/>
      <TransportPackagesCarousel/>
      <ReviewsSection/>
      <Why/>
      <Fact />

    </div>
  );
}
