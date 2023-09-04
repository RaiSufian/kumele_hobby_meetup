import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const Ads = () => {
    const [showAd, setShowAd] = useState(false)
    const [detail, setDetail] = useState(false);
    const closeModal = () => {
        setShowAd(false);
        setDetail(false);
    }

    const styleMode = useSelector((state) => state.styleModer.mode)
    return (
        <>
            <div className={` p-3 rounded-lg mb-3 ${styleMode ? "bg-black" : "bg-white"} `}>
                <div className="flex flex-wrap">
                    <div className="w-1/2 p-1">
                        <div className="cursor-pointer" onClick={() => setShowAd(true)}>
                            <img src="/img/add1.jpg" />
                        </div>
                    </div>
                    <div className="w-1/2 p-1">
                        <div className="cursor-pointer" onClick={() => setShowAd(true)}>
                            <img src="/img/add2.png" />
                        </div>
                    </div>
                    <div className="w-1/2 p-1">
                        <div className="cursor-pointer" onClick={() => setShowAd(true)}>
                            <img src="/img/add3.png" />
                        </div>
                    </div>
                    <div className="w-1/2 p-1">
                        <div className="cursor-pointer" onClick={() => setShowAd(true)}>
                            <img src="/img/add4.png" />
                        </div>
                    </div>
                </div>
            </div>
            {showAd ? <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full   h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                <div className={` ${styleMode ? "bg-black" : "bg-white"} modal md:w-[690px] w-[520px]  lg:p-14 p-10 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out `}>
                    <span className="absolute top-3 right-3 cursor-pointer z-10" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" fill="none">
                            <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg>
                    </span>
                    {detail ?
                        <>
                            <div className={`md:h-[400px] h-[320px]  relative overflow-y-auto  custom_scroll`}>
                                <div className="w-full">
                                    <img src="/img/adsdetails.jpg" className="object-cover" alt="detail_img" />
                                </div>
                                <div className="py-1 pb-6">
                                    <div className="text-start py-2">
                                        <h2 className={` md:text-2xl text-lg font-bold font-plus ${styleMode ? "text-white" : " "} `}>Get spotify for free</h2>
                                        <p className={` ${styleMode ? "text-[#BCBCBC]" : ""}  `}>
                                            Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor

                                            ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui.

                                            Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur

                                            ridiculus mus.s quis lectus maximus fermentum.
                                        </p>
                                    </div>

                                </div>

                            </div>
                            <div className="mt-2 flex justify-center">
                                <div className={` ${styleMode ? "bg-[#454545]" : "bg-white"} absolute bottom-0 left-0 w-full footer_shadow z-20  rounded-b-xl `}>
                                    <div className="flex md:gap-10 gap-2 py-4 md:px-14 px-8">
                                        <button className={` ${styleMode ? "bg-[#454545] border-white" : "border-black"}  w-1/2 border-2  text-lg font-plus md:h-12 h-9 flex items-center justify-center rounded-lg`} onClick={closeModal}>Cancel</button>
                                        <button className={`${styleMode ? "text-black bg-white" : "bg-black text-white"}  w-1/2  text-lg font-plus  md:h-12 h-9 flex items-center justify-center rounded-lg `}>Install Now</button>
                                    </div>
                                </div>
                            </div>

                        </>
                        :
                        <div className={`md:h-[410px] h-[330px]  relative overflow-y-auto  custom_scroll`}>
                            <div className="w-full px-1">
                                <img src="/img/adsdetails.jpg" className="object-cover" alt="detail_img" />
                            </div>
                            <div className="">
                                <div className="flex items-center justify-between py-2">
                                    <h2 className={` md:text-2xl text-lg font-bold font-plus ${styleMode ? "text-white" : " "} `}>Get spotify for free</h2>
                                    <button className={` w-36 rounded-md border-0 h-9  text-lg font-medium  ${styleMode ? "text-black bg-white" : "bg-black text-white "}  `}>Install Now</button>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <p className="font-medium font-plus text-[#808080] ">Get spotify for free</p>
                                    <button className="w-8 h-8 rounded-full bg-[#EEECEC] flex items-center justify-center" onClick={() => setDetail(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 31" fill="none">
                                            <path opacity="0.35" d="M18.1956 17.8879C17.4509 17.1432 10.0444 9.73677 9.29973 8.99206C7.81032 7.50265 5.39701 7.50265 3.90759 8.99206C2.41817 10.4815 2.41817 12.8948 3.90759 14.3842C4.6523 15.1289 12.0587 22.5353 12.8034 23.28C14.2928 24.7695 16.7062 24.7695 18.1956 23.28C19.685 21.7906 19.685 19.376 18.1956 17.8879Z" fill="black" />
                                            <path d="M18.1952 23.2786C18.94 22.5339 26.3464 15.1275 27.0911 14.3827C28.5805 12.8933 28.5805 10.48 27.0911 8.9906C25.6017 7.50118 23.1883 7.50118 21.6989 8.9906C20.9542 9.73531 13.5478 17.1417 12.8031 17.8864C11.3137 19.3758 11.3137 21.7892 12.8031 23.2786C14.2925 24.768 16.7071 24.768 18.1952 23.2786Z" fill="black" />
                                        </svg></button>
                                </div>
                            </div>
                        </div>}



                </div>

            </div> : null}

        </>
    )
}
export default Ads;