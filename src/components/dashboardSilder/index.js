import Slider from "react-slick";
import { useSelector } from "react-redux";
const DashboardSlider = ({ setSlide }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <div className={` ${styleMode ? "bg-black" : "bg-white"} modal md:w-[450px] w-[320px]  md:p-8 p-4 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out `}>
                <span className="absolute top-3 right-5 cursor-pointer z-10" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none" onClick={() => setSlide(4)}>
                        <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                        <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                    </svg>
                </span>
                <Slider {...settings}>
                    <div>
                        <div className="home_pop1 w-24 h-24 mx-auto"></div>
                        <div className={`md:py-9 py-5 text-center ${styleMode ? "text-white" : ""}`}>
                            <h3 className="text-3xl font-bold font-plus">What would you like to do today?</h3>
                            <p className="text-lg font-plus pt-2">You can now chat and have fun in the event.</p>
                        </div>
                        <button className={`${styleMode ? "text-black bg-white" : "text-white bg-black"} font-plus text-lg  mx-auto w-48 h-12 rounded-lg `}>Create Event</button>
                    </div>
                    <div>
                        <div className="home_pop1 w-28 h-28 mx-auto"></div>
                        <div className={`md:py-9 py-5 text-center ${styleMode ? "text-white" : ""}`}>
                            <h3 className="text-3xl font-bold font-plus">What would you like to do today?</h3>
                            <p className="text-lg font-plus pt-2">Be awesome and invite your friends.</p>
                        </div>
                        <button className={` ${styleMode ? "text-black bg-white " : "text-white bg-black "} font-plus text-lg mx-auto w-48 h-12 rounded-lg `}>Invite Friends</button>
                    </div>
                    <div>
                        <div className="home_pop1 w-28 h-28 mx-auto"></div>
                        <div className={`md:py-9 py-5 text-center ${styleMode ? "text-white" : ""}`}>
                            <h3 className="text-3xl font-bold font-plus">What would you like to do today?</h3>
                            <p className="text-lg font-plus pt-2">Here are some blogs you may like.</p>
                        </div>
                        <button className={` ${styleMode ? "bg-white text-black" : "text-white bg-black"} font-plus text-lg  mx-auto w-48 h-12 rounded-lg `}>Read Blog</button>
                    </div>
                </Slider>


            </div>
        </>
    )
}
export default DashboardSlider;