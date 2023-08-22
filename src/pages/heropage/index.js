import ProfileHero from "./profile";
import { useState, useEffect } from "react";
const HeroPage = () => {
    const [slide, setSlide] = useState(1);
    if (slide == 4) {
        return (
            <div className="h-screen bg-black text-white">
               
            </div>
        )
    }
    else {
        return (
            <div className="h-screen bg-black text-white">
                <ProfileHero slide={slide} setSlide={setSlide} />
            </div>
        )
    }

}
export default HeroPage