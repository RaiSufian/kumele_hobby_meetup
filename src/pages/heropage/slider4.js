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
        <div className='relative'>
            <div className="absolute z-10 top-[7%] left-[7%]">
                <img src="/img/logo2.png" alt="logo" className='w-64' />
            </div>
            <Slider {...settings} className='max-w-full max-h-screen min-h-[750px] overflow-hidden'>
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
            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white w-full'>
                <div>
                    <h2 className='text-5xl font-medium font-fredoka'>“Hobby Meetup | Create or Attend Events Within <span className='text-theme'>4</span><span className='text-[#38579E]'>8</span> Hours” </h2>
                    <p className='text-3xl mt-2'>We play. We overcome. We unite. We live.</p>
                    <div className='flex justify-center mt-5 '>
                        <Link to="/login">
                            <button className='bg-theme text-2xl font-plus w-56 py-3 text-black font-medium rounded-l-full flex items-center justify-center'>Login</button>
                        </Link>

                        <Link to="/Signup">
                            <button className='bg-[#38579E] text-2xl font-plus w-56 py-3 text-black font-medium rounded-r-full flex items-center justify-center'>Signup</button>
                        </Link>

                    </div>
                </div>

                <div className="hero_nav mt-8">
                    <div className="flex justify-center gap-10">
                        <div className={`w-2  ${slide == 1 ? "bg-white" : "bg-theme"}  h-2 rounded-full cursor-pointer borderborder-theme hover:border-white`} onClick={() => setSlide(1)}></div>
                        <div className={`w-2  ${slide == 2 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(2)}></div>
                        <div className={`w-2  ${slide == 3 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(3)}></div>
                        <div className={`w-2  ${slide == 4 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(4)}></div>
                    </div>
                </div>
                <div className=''>
                    <HeroFooter />
                </div>

            </div>
        </div>

    )
}

export default Slider4;