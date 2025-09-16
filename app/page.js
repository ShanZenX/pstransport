import WhyPage from "./components/MainPage/WhyPage";
import TransportPackagesCarousel from "./components/Additional/Curosal";
import PopularTrips from "./components/MainPage/PopularTrips";
import BrandsSection from "./components/MainPage/Brand";
import FormHolder from "./components/MainPage/FormHolder";
import OurProcess from "./components/MainPage/OurProcess";

export default function Home() {
  return (
    <>
      <div className=" mt-[50px] sm:mt-[0px]">
        <FormHolder />
        <OurProcess />
        <TransportPackagesCarousel />
        <WhyPage />
        <PopularTrips />
        <BrandsSection />
      </div>
    </>
  );
}
