import AddBanner from "../components/ServicePage/AddBanner";
import ServiceSection from "../components/ServicePage/ServiceSection";
import BookingSteps from "./BookingSteps";

export default function Services() {
  return (
    <div className="px-4 pt-6 md:h-[2000px]    bg-[#e6b31900]">
     <ServiceSection />
     {/* <AddBanner /> */}
     <BookingSteps/>
    </div>
  );
}