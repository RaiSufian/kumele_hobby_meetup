import React from 'react';
import Slider from "react-slick";
import HeroFooter from './footer/heroFooter';
import SliderEvent from './sliderEvent';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const Slider4 = ({ slide, setSlide }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 8000);
        }, 24000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <>
            <div className='relative bg-theme_silver md:h-screen'>
                <div className="absolute lg:top-[6%] lg:left-[6%] top-4 sm:left-4 left-1/2 -translate-x-1/2 sm:translate-x-1 z-10">
                    <img src="/img/logo2.png" alt="logo" className="lg:w-44 xl:w-48 md:w-36 sm:w-32 w-40 " />
                </div>
                <Slider {...settings} className='max-w-full max-h-screen overflow-hidden'>
                    <div className='relative '>
                        <img src="./img/slider4-a.png" alt="slider_img" className="h-screen w-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'> </div>
                        <SliderEvent name="House Party" />
                    </div>
                    <div className='relative '>
                        <img src="./img/slider4-b.png" alt="slider_img" className="h-screen w-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>
                        </div>
                        <SliderEvent name="Family Activities" />
                    </div>
                    <div className='relative '>
                        <img src="/img/slider4-c.png" alt="slider_img" className="h-screen w-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>
                        </div>
                        <SliderEvent name="Spirituality" />
                    </div>
                    <div className='relative '>
                        <img src="/img/slider4-d.png" alt="slider_img" className="h-screen w-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>
                        </div>
                        <SliderEvent name="Sports" />
                    </div>
                    <div className='relative '>
                        <img src="/img/slider4-e.png" alt="slider_img" className="h-screen w-full object-cover" />
                        <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>
                        </div>
                        <SliderEvent name="Volunteers" />
                    </div>
                </Slider>
                <div className='py-5 md:py-0 px-2 md:px-0 absolute top-1/2 md:bottom-2 md:left-1/2 md:-translate-x-1/2 text-center text-white w-full'>
                    <div>
                        <h2 className='xl:text-5xl lg:text-4xl md:text-2xl text-2xl font-medium font-fredoka'>“Hobby Meetup | Create or Attend Events Within <span className='text-theme'>4</span><span className='text-theme_blue'>8</span> Hours” </h2>
                        <p className='xl:text-3xl lg:text-2xl md:text-xl text-lg mt-3'>We play. We overcome. We unite. We live.</p>
                        <div className='flex justify-center xl:mt-5 lg:mt-2 md:mt-1 mt-5  '>
                            <Link to="/login">
                                <button className='bg-theme md:text-2xl text-xl font-plus xl:w-56 lg:w-48 md:w-40 w-32 xl:py-3 lg:py-2 py-2 text-black font-medium rounded-l-full flex items-center justify-center'>Login</button>
                            </Link>

                            <Link to="/Signup">
                                <button className='bg-theme_blue md:text-2xl text-xl font-plus xl:w-56 lg:w-48 md:w-40 w-32  xl:py-3 lg:py-2 py-2 text-black font-medium rounded-r-full flex items-center justify-center'>Signup</button>
                            </Link>

                        </div>
                    </div>

                    <div className="hero_nav xl:mt-8 lg:mt-4 md:mt-3 mt-5">
                        <div className="flex justify-center gap-10">
                            <div className={`w-2  ${slide == 1 ? "bg-white" : "bg-theme"}  h-2 rounded-full cursor-pointer borderborder-theme hover:border-white`} onClick={() => setSlide(1)}></div>
                            <div className={`w-2  ${slide == 2 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(2)}></div>
                            <div className={`w-2  ${slide == 3 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(3)}></div>
                            <div className={`w-2  ${slide == 4 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(4)}></div>
                        </div>
                    </div>


                </div>
                <div className='hero_footer md:absolute w-full bottom-2 hidden md:block text-white'>
                    <HeroFooter />
                </div>

            </div>
            <div className={` rounded-xl z-10 absolute lg:w-[650px] md:w-[450px] w-[320px] md:h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black  ${isVisible ? "block" : "hidden"}`}>
                <div className="relative lg:p-6 p-3 modal">
                    <div >
                        <img src="/img/icon.png" className="lg:w-16 w-12" alt="logo" />
                    </div>
                    <div className="lg:flex items-center">
                        <div className="w-1/2 hidden lg:block">
                            <img src="/img/authImg_black.png" />
                        </div>
                        <div className="lg:w-1/2">
                            <h4 className="text-theme font-plus font-extrabold text-3xl">Subscribe</h4>
                            <form>
                                <div className="h-8 rounded-md bg-white flex items-center p-1 gap-1 mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 25 27" fill="none">
                                        <path opacity="0.35" d="M19.3823 18H5.67969V23.4811H19.3823V18Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path opacity="0.35" d="M12.531 13.8902C16.3149 13.8902 19.3823 10.8227 19.3823 7.03883C19.3823 3.25494 16.3149 0.1875 12.531 0.1875C8.74713 0.1875 5.67969 3.25494 5.67969 7.03883C5.67969 10.8227 8.74713 13.8902 12.531 13.8902Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M24.7851 21.2969C24.411 19.3442 22.5927 18 20.6044 18H16.6416L12.5308 23.4811L8.42 18H5.68084C2.46894 18 0.650597 19.3442 0.276515 21.2969C-0.227743 23.9237 1.77284 26.2216 4.30921 26.2216H20.7524C23.2887 26.2216 25.2893 23.9237 24.7851 21.2969Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    </svg>
                                    <input type='text' className="flex-1 custom_input" placeholder='Enter name' />
                                </div>
                                <div className="h-8 rounded-md bg-white flex items-center p-1 gap-1 mt-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 27 27" fill="none">
                                        <path opacity="0.35" d="M2.36816 18.5554V7.70751C2.36816 5.91 3.82504 4.45312 5.62255 4.45312H20.8097C22.6072 4.45312 24.064 5.91 24.064 7.70751V18.5554C24.064 20.3529 22.6072 21.8098 20.8097 21.8098H5.62255C3.82504 21.8098 2.36816 20.3529 2.36816 18.5554Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M24.064 7.70688C24.064 7.18835 23.9317 6.70453 23.7158 6.26953L14.8346 11.598C13.8377 12.1968 12.5967 12.1968 11.5987 11.598L2.71638 6.26953C2.50051 6.70453 2.36816 7.18835 2.36816 7.70688V9.85586L9.92267 14.3892C10.9391 14.9989 12.0771 15.3037 13.2161 15.3037C14.354 15.3037 15.4942 14.9989 16.5084 14.3892L24.064 9.85586V7.70688Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    </svg>
                                    <input type='password' className="flex-1 custom_input" placeholder='Enter name' />
                                </div>
                                <div className="mt-3 flex gap-2 px-1 items-center">
                                    <input type='checkbox' className="w-5 h-5" />
                                    <label className="text-theme text-sm">Subscribe to our newsletter</label>
                                </div>
                                <div className="mt-3 flex gap-2 px-1 items-center">
                                    <input type='checkbox' className="w-5 h-5" />
                                    <label className="text-theme text-sm">I agree to the <span className="text-light_text">Terms & Conditions</span> </label>
                                </div>
                                <button className="w-full mt-10 bg-theme h-11 rounded-md font-semibold text-lg">
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="absolute top-2 right-2 cursor-pointer z-10" onClick={() => setSlide(3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 33 33" fill="none">
                            <path opacity="0.35" d="M22.6586 6.35341C22.3887 6.62199 18.9164 10.0956 16.4431 12.5689C13.9697 10.0956 10.4975 6.62336 10.2275 6.35341C9.15737 5.28324 7.42262 5.28324 6.35244 6.35341C5.28226 7.42359 5.28226 9.15835 6.35244 10.2285C6.62101 10.4985 10.0946 13.9707 12.568 16.4441C10.0946 18.9174 6.62238 22.3896 6.35244 22.6596C5.28226 23.7298 5.28226 25.4645 6.35244 26.5347C7.42262 27.6049 9.15737 27.6049 10.2275 26.5347C10.4221 26.3401 26.3391 10.4231 26.5337 10.2285C27.6039 9.15835 27.6039 7.42359 26.5337 6.35341C25.4635 5.28324 23.7288 5.28324 22.6586 6.35341Z" fill="white" />
                            <path d="M26.534 26.532C27.6042 25.4619 27.6042 23.7271 26.534 22.6569C26.2654 22.3884 22.7918 18.9147 20.3185 16.4414L16.4434 20.3165C18.9167 22.7898 22.3889 26.2621 22.6589 26.532C23.7291 27.6022 25.4638 27.6022 26.534 26.532Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Slider4;