import React from 'react';
import Slider from "react-slick";
import HeroFooter from './heroFooter';
import SliderEvent from './sliderEvent';
import { Link } from 'react-router-dom';
const Slider4 = ({ slide, setSlide }) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 9000,
        cssEase: "linear"

    };
    return (
        <div className='relative bg-black'>
            <div className="absolute lg:top-[6%] lg:left-[6%] top-4 sm:left-4 left-1/2 -translate-x-1/2 sm:translate-x-1 z-10">
                <img src="/img/logo2.png" alt="logo" className="lg:w-44 xl:w-48 md:w-36 sm:w-32 w-40 " />
            </div>
            <Slider {...settings} className='max-w-full max-h-screen overflow-hidden'>
                <div className='relative '>
                    <img src="./img/slider4-a.png" alt="slider_img" className=" " />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'> </div>
                    <SliderEvent name="House Party" />
                </div>
                <div className='relative '>
                    <img src="./img/slider4-b.png" alt="slider_img" className="w-full" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>
                    </div>
                    <SliderEvent name="Family Activities" />
                </div>
                <div className='relative '>
                    <img src="/img/slider4-c.png" alt="slider_img" className="w-full" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>
                    </div>
                    <SliderEvent name="Spirituality" />
                </div>
                <div className='relative '>
                    <img src="/img/slider4-d.png" alt="slider_img" className="w-full" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>
                    </div>
                    <SliderEvent name="Sports" />
                </div>
                <div className='relative '>
                    <img src="/img/slider4-e.png" alt="slider_img" className="w-full" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>
                    </div>
                    <SliderEvent name="Volunteers" />
                </div>
            </Slider>
            <div className='py-5 md:py-0 px-2 md:px-0 md:absolute relative md:bottom-2 md:left-1/2 md:-translate-x-1/2 text-center text-white w-full'>
                <div>
                    <h2 className='xl:text-5xl lg:text-4xl md:text-2xl text-xl font-medium font-fredoka'>“Hobby Meetup | Create or Attend Events Within <span className='text-theme'>4</span><span className='text-[#38579E]'>8</span> Hours” </h2>
                    <p className='xl:text-3xl lg:text-2xl md:text-xl text-lg mt-1'>We play. We overcome. We unite. We live.</p>
                    <div className='flex justify-center xl:mt-5 lg:mt-2 md:mt-1 mt-2  '>
                        <Link to="/login">
                            <button className='bg-theme md:text-2xl text-xl font-plus xl:w-56 lg:w-48 md:w-40 w-32 xl:py-3 lg:py-2 py-1 text-black font-medium rounded-l-full flex items-center justify-center'>Login</button>
                        </Link>

                        <Link to="/Signup">
                            <button className='bg-[#38579E] md:text-2xl text-xl font-plus xl:w-56 lg:w-48 md:w-40 w-32  xl:py-3 lg:py-2 py-1 text-black font-medium rounded-r-full flex items-center justify-center'>Signup</button>
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
                <div className='md:block hidden'>
                    <HeroFooter />
                </div>

            </div>
        </div>

    )
}

export default Slider4;