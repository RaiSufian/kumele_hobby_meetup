import { useSelector } from "react-redux";
const ContactUs = ({ content, setContent }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={`font-plus w-full  h-screen ${styleMode  ? "bg-white" : "bg-black "} bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${content ? " block" : "hidden"}`}>
            <div>
                <div className={` ${styleMode  ? "bg-black border-light_border" : "bg-white border-light_border"}  px-4 py-3  rounded-t-2xl relative border-b  `}>
                    <div className="sm:w-[440px] w-[350px] cursor-pointer">
                        <div className="flex items-center gap-5  ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48" fill="none" onClick={() => { setContent(false) }}>
                                <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                            <h3 className={` ${styleMode ? "text-white" : "" } text-xl font-bold `}>Contact</h3>

                        </div>
                    </div>
                </div>
                <div className={` ${styleMode ? "bg-black text-white" : "bg-white  border-light_border"}  px-4 py-4  rounded-b-2xl relative border-b  `}>
                    <div className="sm:w-[440px] w-[350px]">
                        <form>
                            <label className="text-sm" >Choose a reason</label>
                            <div className="flex gap-1 mt-1 text-sm">
                                <input type="radio" name="type" /> Business
                            </div>
                            <div className="flex gap-1 mt-1 text-sm">
                                <input type="radio" name="type" /> Complaint
                            </div>
                            <div className="flex gap-1 mt-1 text-sm">
                                <input type="radio" name="type" /> Improvement
                            </div>
                            <div className="mt-2 text-sm">
                                Comment
                                <div>
                                    <textarea className={` ${styleMode ? "bg-bg_dark" : "bg-bg_light"} p-2 mt-1  w-full rounded-md custom_input 1`} rows={6}>
                                    </textarea>
                                </div>
                            </div>
                            <div className="mt-1 text-right">
                                <button className={` ${styleMode ? "bg-white text-black" : "bg-black text-white "}  py-2 px-16 rounded-lg text-sm `}>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ContactUs;