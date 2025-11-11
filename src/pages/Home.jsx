import Hero from "../components/Hero";
import Vidio from "../components/Vidio";
import LatestCars from "../components/LatestCars";
import WhyRentWithUs from "../components/WhyRentUs";
import TopRatedCars from "../components/TopRatedCars";
import Slider from "../components/Slider";
import OurFeatures from "../components/OurFeatures";

const Home = () => {
  return (
    <div>
      <div className="">
        <Hero />
      </div>
      <div className="bg-black h-[80%]">
        <LatestCars />
        <Slider />
        <TopRatedCars />
        <Vidio />
        <div className="hidden sm:block">
          <WhyRentWithUs />
        </div>
       <OurFeatures/>
      </div>
    </div>
  );
};

export default Home;
