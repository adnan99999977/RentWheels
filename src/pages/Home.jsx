import Hero from "../components/Hero";
import Vidio from "../components/Vidio";
import LatestCars from "../components/LatestCars";
import WhyRentWithUs from "../components/WhyRentUs";
import TopRatedCars from "../components/TopRatedCars";
import Slider from "../components/Slider";
import OurFeatures from "../components/OurFeatures";
import TopLocations from "../components/Locations";
import TestimonialMarquee from "../components/TestimonialMarquee";

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Hero />
      </div>
      <div className="bg-black h-[80%] flex flex-col space-y-10">
        <LatestCars />
       <div>
         <Slider />
       </div>
       <div>
         <TopRatedCars />
       </div>
       <div>
         <Vidio />
       </div>
       <div>
        <OurFeatures/>
       </div>
       <div>
        <TopLocations/>
       </div>
        <div className="hidden sm:block">
          <WhyRentWithUs />
        </div>
        <div>
          <TestimonialMarquee/>
        </div>
      </div>
    </div>
  );
};

export default Home;
