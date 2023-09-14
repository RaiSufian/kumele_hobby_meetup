import { useSelector } from "react-redux";
const ConatactModal = ({ setContact }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
            <div className={` ${styleMode ? "bg-black" : "bg-white text-black"} modal  rounded-3xl relative `} >
                <div className="sm:w-[45rem] w-[28rem] text-center">
                    <div className={`py-3 px-5 flex justify-start  items-center gap-5 border-b ${styleMode ? " bg-[#454545] rounded-t-3xl border-[#6B6B6B]" : "border-[#EEECEC]"} cursor-pointer`} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 38 38" fill="none" onClick={() => setContact(false)}>
                            <path opacity="0.35" d="M25.9981 7.83928C25.6975 8.13842 21.8301 12.0073 19.0753 14.7621C16.3205 12.0073 12.4531 8.13994 12.1524 7.83928C10.9605 6.64732 9.02832 6.64732 7.83635 7.83928C6.64439 9.03125 6.64439 10.9634 7.83635 12.1554C8.13549 12.456 12.0044 16.3234 14.7592 19.0782C12.0044 21.833 8.13702 25.7004 7.83635 26.0011C6.64439 27.193 6.64439 29.1252 7.83635 30.3171C9.02832 31.5091 10.9605 31.5091 12.1524 30.3171C12.3692 30.1004 30.0975 12.3721 30.3142 12.1554C31.5062 10.9634 31.5062 9.03125 30.3142 7.83928C29.1223 6.64732 27.1901 6.64732 25.9981 7.83928Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M30.3141 30.3132C31.5061 29.1212 31.5061 27.189 30.3141 25.9971C30.015 25.6979 26.1461 21.829 23.3913 19.0742L19.0752 23.3903C21.83 26.1451 25.6974 30.0125 25.998 30.3132C27.19 31.5051 29.1222 31.5051 30.3141 30.3132Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg>
                        <h6 className={` text-xl font-bold font-plus  ${styleMode ? "text-white" : "text-black"}`}>Contact</h6>
                    </div>
                    <div className="px-6 py-4 text-start">

                        <div className="">
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
                                        <textarea className={` ${styleMode ? "bg-bg_dark" : "bg-bg_light"} p-2 mt-1  w-full rounded-md custom_input 1`} rows={6} placeholder="Add your comment">
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
        </div>
    )
}
export default ConatactModal;