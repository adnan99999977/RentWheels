import Hero from "../components/Hero";
import Vidio from "../components/Vidio";
import LatestCars from "../components/LatestCars";
import WhyRentWithUs from "../components/WhyRentUs";
import TopRatedCars from "../components/TopRatedCars";
import Slider from "../components/Slider";
import OurFeatures from "../components/OurFeatures";
import TopLocations from "../components/Locations";
import TestimonialMarquee from "../components/TestimonialMarquee";
import BrandCollabMarquee from "../components/BrandCollabMarquee";
import CarEndAnimation from "../components/CarEndAnimation";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Hero />
      </div>
      <div className="bg-black h-[80%] flex flex-col space-y-10">
        <LatestCars />
       <div className="pt-10">
         <Slider />
       </div>
       <div className="py-20">
         <TopRatedCars />
       </div>
       <div className="pt-20">
         <Vidio />
       </div >
       <div className="pt-10" >
        <OurFeatures/>
       </div>
        <div className="pt-20">
          <TestimonialMarquee/>
        </div>
       <div className="py-20">
        <TopLocations/>
       </div>
        <div className="hidden sm:block">
          <WhyRentWithUs />
        </div>
          <div className="pt-20">
          <BrandCollabMarquee/>
        </div>
        <div>
          <CarEndAnimation/>
        </div>
      </div>
    </div>
  );
};

export default Home;
