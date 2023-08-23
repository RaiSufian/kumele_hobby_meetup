import ProfileHero from "./profile";
import { useState, useEffect } from "react";
import Slider4 from "./slider4";
const HeroPage = () => {
    const [slide, setSlide] = useState(4);
    if (slide == 4) {
        return (
            <div className="">
                < Slider4 slide={slide} setSlide={setSlide} />
            </div>
        )
    }
    else {
        return (
            <div className="bg-black">
                <div className="max-h-screen bg-black text-white min-h-[834px]">
                    <ProfileHero slide={slide} setSlide={setSlide} />
                </div>

            </div>
        )
    }

}
export default HeroPage