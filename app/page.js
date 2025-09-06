import Fact from "./components/MainPage/Fact";
import WhyPage from "./components/MainPage/WhyPage";
import Why from "./components/Additional/Test2";
import TransportPackagesCarousel from "./components/Additional/Curosal";
import PopularTrips from "./components/MainPage/PopularTrips";
import BrandsSection from "./components/MainPage/Brand";
import FormHolder from "./components/MainPage/FormHolder";
import OurProcess from "./components/MainPage/OurProcess";
import ReviewsSection from "./components/MainPage/Review";
import MapInput from "./components/MainPage/MapInput";

export default function Home() {
  return (
    <>
      <div className=" mt-[50px] sm:mt-[0px]">
                          {/* <MapInput /> */}

        <FormHolder />
        <OurProcess />
        <TransportPackagesCarousel />
        <WhyPage />
        <PopularTrips />
        <BrandsSection />
        {/* <Fact /> */}

        <ReviewsSection />
      </div>
    </>
  );
}
