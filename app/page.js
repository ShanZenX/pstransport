import Image from "next/image";
import Fact from "./components/MainPage/Fact";
import WhyPage from "./components/MainPage/WhyPage";
import ReviewsSection from "./components/MainPage/Review";

export default function Home() {
  return (
    <div className="">
      <WhyPage />
      <ReviewsSection/>
      <Fact />
    </div>
  );
}
