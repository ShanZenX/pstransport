import Fact from "./components/MainPage/Fact";
import WhyPage from "./components/MainPage/WhyPage";
import ReviewsSection from "./components/MainPage/Review";
import Why from "./components/Additional/Test2";
import TransportPackagesCarousel from "./components/Additional/Curosal";
import PopularTrips from "./components/MainPage/PopularTrips";
import BrandsSection from "./components/MainPage/Brand";
import FormHolder from "./components/MainPage/FormHolder";
// import SwiperSlider from "./components/Additional/Slider";
// import TechStackMarquee from "./components/Additional/Slider";

export default function Home() {
  return (
    <>
      {" "}
      <div className=" mt-[50px] sm:mt-[0px]">
        {/* <FormHolder /> */}
        <TransportPackagesCarousel />
        <WhyPage />
        <PopularTrips />
        <BrandsSection />
        <Fact />
        <ReviewsSection />
      </div>
    </>
  );
}
