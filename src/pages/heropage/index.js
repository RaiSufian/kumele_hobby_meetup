import ProfileHero from "./profile";
import { useState, useEffect } from "react";
import Slider4 from "./slider4";
import HomeScreen from "../../components/homeScreen";
const HeroPage = () => {
    const [slide, setSlide] = useState(0);
    if (slide == 0) {
        return (
            <HomeScreen setSlide={setSlide} />
        )
    }
    else if (slide == 4) {
        return (
            <div className="min-h-full">
                < Slider4 slide={slide} setSlide={setSlide} />
            </div>
        )
    }
    else {
        return (
            <div className=" bg-black text-white relative ">
                <ProfileHero slide={slide} setSlide={setSlide} />
            </div>


        )
    }

}
export default HeroPage