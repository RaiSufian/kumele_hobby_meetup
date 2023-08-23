import HeroFooter from "./heroFooter";
import Slider1 from "./slider1";
import Slider2 from "./slider2";
import Slider3 from "./slider3";
const ProfileHero = ({ slide, setSlide }) => {
    return (

        <div className="text-center font-fredoka xl:pt-8 lg:pt-4 relative">
            <div className="logo absolute top-[7%] left-[7%]">
                <img src="/img/logo_light.png" alt="logo" className="lg:w-52 xl:w-68" />
            </div>
            <div>
                <h1 className="text-5xl font-medium">Hobby Meetup</h1>
                <h6 className="p-3 text-xl font-medium text-theme">We play. We overcome. We unite. We live.</h6>
            </div>

            {slide == 1 ?
                <Slider1 /> :
                slide == 2 ?
                    <Slider2 /> :
                    <Slider3 />
            }

            <div className="hero_nav">
                <div className="flex justify-center gap-10">
                    <div className={`w-2  ${slide == 1 ? "bg-white" : "bg-theme"}  h-2 rounded-full cursor-pointer borderborder-theme hover:border-white`} onClick={() => setSlide(1)}></div>
                    <div className={`w-2  ${slide == 2 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(2)}></div>
                    <div className={`w-2  ${slide == 3 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(3)}></div>
                    <div className={`w-2  ${slide == 4 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(4)}></div>
                </div>
            </div>

            <div className="hero_footer">
                <HeroFooter />
            </div>
        </div>

    )
}
export default ProfileHero;