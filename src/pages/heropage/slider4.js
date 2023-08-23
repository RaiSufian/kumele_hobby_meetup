import React from 'react';
import Slider from "react-slick";
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import HeroFooter from './heroFooter';
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
            <div className="absolute z-10 top-[10%] left-[10%]">
                <img src="/img/logo2.png" alt="logo" className='w-80' />
            </div>
            <Slider {...settings} className='max-w-full h-screen overflow-hidden'>
                <div className='relative '>
                    <img src="./img/slider4-a.png" alt="slider_img" className=" " />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>

                    </div>
                </div>
                <div className='relative '>
                    <img src="./img/slider4-b.png" alt="slider_img" className="w-full" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>

                    </div>
                </div>
                <div className='relative '>
                    <img src="/img/slider4-c.png" alt="slider_img" className="w-full" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>

                    </div>
                </div>
                <div className='relative '>
                    <img src="/img/slider4-d.png" alt="slider_img" className="w-full" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>

                    </div>
                </div>
                <div className='relative '>
                    <img src="/img/slider4-e.png" alt="slider_img" className="w-full" />
                    <div className='absolute top-0 left-0 w-full h-full bg-black contents-[""] bg-opacity-40'>

                    </div>
                </div>
            </Slider>
            <div className='absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center text-white w-full'>
                <div>
                    <h2 className='text-6xl font-medium font-fredoka'>“Hobby Meetup | Create or Attend Events Within <span className='text-theme'>4</span><span className='text-[#38579E]'>8</span> Hours” </h2>
                    <p className='text-4xl'>We play. We overcome. We unite. We live.</p>
                    <div className='flex justify-center mt-8 '>
                        <button className='bg-theme text-2xl font-plus w-64 py-3 text-black font-medium rounded-l-full'>Login</button>
                        <button className='bg-[#38579E] text-2xl font-plus w-64 py-3 text-black font-medium rounded-r-full'>signup</button>
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