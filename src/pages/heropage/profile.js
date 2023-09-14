import HeroFooter from "./footer/heroFooter";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
import Slider3 from "./slider3";
const ProfileHero = ({ slide, setSlide }) => {
    return (
        <div className="text-center font-fredoka xl:pt-10 lg:pt-4 pt-2 relative min-h-screen">
            <div className="logo absolute lg:top-[6%] lg:left-[6%] top-4 sm:left-4 left-1/2 -translate-x-1/2 sm:translate-x-1">
                <img src="/img/logo_light.png" alt="logo" className="lg:w-44 xl:w-48 md:w-36 sm:w-32 w-40 " />
            </div>
            <div>
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium sm:pt-0 pt-12">Hobby Meetup</h1>
                <h6 className="lg:text-xl md:text-lg font-medium text-theme">We play. We overcome. We unite. We live.</h6>
            </div>

            {slide == 1 ?
                <Slider1 /> :
                slide == 2 ?
                    <Slider2 /> :
                    <Slider3 />
            }

            <div className="hero_nav lg:absolute lg:bottom-24 lg:left-1/2 lg:-translate-x-1/2 pb-2 md:pb-0">
                <div className="flex justify-center gap-10">
                    <div className={`w-2  ${slide == 1 ? "bg-white" : "bg-theme"}  h-2 rounded-full cursor-pointer borderborder-theme hover:border-white`} onClick={() => setSlide(1)}></div>
                    <div className={`w-2  ${slide == 2 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(2)}></div>
                    <div className={`w-2  ${slide == 3 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(3)}></div>
                    <div className={`w-2  ${slide == 4 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(4)}></div>
                </div>
            </div>

            <div className="hero_footer lg:absolute w-full bottom-2 hidden md:block">
                <HeroFooter />
            </div>
        </div>

    )
}
export default ProfileHero;