import { useSelector } from "react-redux";
const NotiDetailsCard = ({ setNoteDete }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full   h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
            <div className={` ${styleMode ? "bg-black" : "bg-white"} modal md:w-[690px] w-[520px]  lg:p-14 p-10 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out `}>
                <span className="absolute top-3 right-3 cursor-pointer z-10" onClick={() => setNoteDete(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" fill="none">
                        <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                        <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                    </svg>
                </span>
                <div className={`md:h-[400px] h-[350px]  relative overflow-y-auto  custom_scroll`}>
                    <div className="w-full">
                        <img src="/img/notidetail.png" className="object-cover" alt="detail_img" />
                    </div>
                    <div className="py-1 pb-6">
                        <div className="text-start py-2">
                            <h2 className={` md:text-2xl text-lg font-bold font-plus ${styleMode ? "text-white" : " "} `}>Easter Special Discount</h2>
                            <div className="mt-3">
                                <span className={` ${styleMode ? "text-[#BCBCBC]" : ""} text-sm`}>23 November, 2022</span>
                                <p className={` ${styleMode ? "text-[#BCBCBC]" : ""}  `}>
                                    Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor

                                    ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui.

                                    Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur

                                    ridiculus mus.s quis lectus maximus fermentum.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default NotiDetailsCard;