import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateLevel } from '../../redux/slice/user';
import { useNavigate } from "react-router-dom";
const SocialSignUp = ({ setSocial }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    const userData = useSelector((state) => state.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signUp = (event) => {
        event.preventDefault();
        dispatch(updateLevel(2));
        navigate("/dashboard/client/history&statistic");
        
    }
  
    return (
        <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
            <div className={` ${styleMode ? "bg-black text-white" : "bg-white "} modal p-10 rounded-3xl relative `} >
                <div className="md:w-96 w-60 ">
                    <div className="flex justify-between items-center cursor-pointer">
                        <div>

                        </div>
                        <h3 className="font-plus text-xl font-bold">Social SignUp</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" fill="none" onClick={() => setSocial(false)}>
                            <path opacity="0.35" d="M33.0721 9.27306C32.6781 9.66506 27.6101 14.7351 24.0001 18.3451C20.3901 14.7351 15.3221 9.66706 14.9281 9.27306C13.3661 7.71106 10.8341 7.71106 9.27209 9.27306C7.71009 10.8351 7.71009 13.3671 9.27209 14.9291C9.66409 15.3231 14.7341 20.3911 18.3441 24.0011C14.7341 27.6111 9.66609 32.6791 9.27209 33.0731C7.71009 34.6351 7.71009 37.1671 9.27209 38.7291C10.8341 40.2911 13.3661 40.2911 14.9281 38.7291C15.2121 38.4451 38.4441 15.2131 38.7281 14.9291C40.2901 13.3671 40.2901 10.8351 38.7281 9.27306C37.1661 7.71106 34.6341 7.71106 33.0721 9.27306Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg>
                    </div>
                    <div className="">
                        <form className="font-plus mb-8" onSubmit={signUp}>
                            <div className="mt-3">
                                <label className="w-full ">Gender</label>
                                <select className="w-full rounded-md p-2 h-10 mt-1 bg-[#F4F4F4] text-[#808080] text-sm custom_input">
                                    <option>
                                        Select gender
                                    </option>
                                    <option>
                                        Male
                                    </option>
                                    <option>
                                        Female
                                    </option>
                                    <option>
                                        Other
                                    </option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label className="w-full ">Date of birth</label>
                                <div className="relative">
                                    <div className="absolute top-1/2 left-1 -translate-y-1/2 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                            <path opacity="0.35" d="M26.2507 30.6255H9.22201C6.87063 30.6255 4.96484 28.7198 4.96484 26.3684V10.7588H30.5078V26.3684C30.5078 28.7198 28.602 30.6255 26.2507 30.6255Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M26.2507 5.08203H9.22201C6.87063 5.08203 4.96484 6.98782 4.96484 9.33919V10.7582H30.5078V9.33919C30.5078 6.98782 28.602 5.08203 26.2507 5.08203Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M20.5741 27.7873C21.3579 27.7873 21.9932 27.152 21.9932 26.3683C21.9932 25.5846 21.3579 24.9492 20.5741 24.9492C19.7904 24.9492 19.1551 25.5846 19.1551 26.3683C19.1551 27.152 19.7904 27.7873 20.5741 27.7873Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M14.8976 27.7873C15.6813 27.7873 16.3166 27.152 16.3166 26.3683C16.3166 25.5846 15.6813 24.9492 14.8976 24.9492C14.1138 24.9492 13.4785 25.5846 13.4785 26.3683C13.4785 27.152 14.1138 27.7873 14.8976 27.7873Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M9.22173 27.7873C10.0054 27.7873 10.6408 27.152 10.6408 26.3683C10.6408 25.5846 10.0054 24.9492 9.22173 24.9492C8.43801 24.9492 7.80267 25.5846 7.80267 26.3683C7.80267 27.152 8.43801 27.7873 9.22173 27.7873Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M9.22173 22.1106C10.0054 22.1106 10.6408 21.4752 10.6408 20.6915C10.6408 19.9078 10.0054 19.2725 9.22173 19.2725C8.43801 19.2725 7.80267 19.9078 7.80267 20.6915C7.80267 21.4752 8.43801 22.1106 9.22173 22.1106Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M14.8976 22.1106C15.6813 22.1106 16.3166 21.4752 16.3166 20.6915C16.3166 19.9078 15.6813 19.2725 14.8976 19.2725C14.1138 19.2725 13.4785 19.9078 13.4785 20.6915C13.4785 21.4752 14.1138 22.1106 14.8976 22.1106Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M20.5741 22.1106C21.3579 22.1106 21.9932 21.4752 21.9932 20.6915C21.9932 19.9078 21.3579 19.2725 20.5741 19.2725C19.7904 19.2725 19.1551 19.9078 19.1551 20.6915C19.1551 21.4752 19.7904 22.1106 20.5741 22.1106Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M26.2501 22.1106C27.0338 22.1106 27.6692 21.4752 27.6692 20.6915C27.6692 19.9078 27.0338 19.2725 26.2501 19.2725C25.4664 19.2725 24.8311 19.9078 24.8311 20.6915C24.8311 21.4752 25.4664 22.1106 26.2501 22.1106Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M26.2501 16.4348C27.0338 16.4348 27.6692 15.7995 27.6692 15.0157C27.6692 14.232 27.0338 13.5967 26.2501 13.5967C25.4664 13.5967 24.8311 14.232 24.8311 15.0157C24.8311 15.7995 25.4664 16.4348 26.2501 16.4348Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M20.5741 16.4348C21.3579 16.4348 21.9932 15.7995 21.9932 15.0157C21.9932 14.232 21.3579 13.5967 20.5741 13.5967C19.7904 13.5967 19.1551 14.232 19.1551 15.0157C19.1551 15.7995 19.7904 16.4348 20.5741 16.4348Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M14.8976 16.4348C15.6813 16.4348 16.3166 15.7995 16.3166 15.0157C16.3166 14.232 15.6813 13.5967 14.8976 13.5967C14.1138 13.5967 13.4785 14.232 13.4785 15.0157C13.4785 15.7995 14.1138 16.4348 14.8976 16.4348Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        </svg>
                                    </div>
                                    <input type="date" className="w-full pl-8  rounded-md p-2 h-10 mt-1 bg-[#F4F4F4] text-[#808080] text-sm custom_input" placeholder="Wednesday, 13th April, 2022" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="w-full ">Referral Code (Optional)</label>
                                <div className="relative">
                                    <input type="text" className="w-full   rounded-md p-2 h-10 mt-1 bg-[#F4F4F4] text-[#808080] text-sm custom_input" placeholder="Enter Referral code" />
                                </div>
                            </div>
                            <div className="mt-3 flex gap-2 px-1 items-center">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-400 bg-black" />
                                <label className="text-sm">Referral Code (Optional)</label>
                            </div>
                            <div className="mt-3 flex gap-2 px-1 items-start">
                                <input type="checkbox" className="w-5 h-5 border-2 border-gray-400 bg-black" />
                                <label className="text-sm">By creating an account you agree to <Link to="/" className="text-[#38579E] "> Terms & Conditions</Link></label>
                            </div>
                            <div className={`sign_shadow flex justify-end absolute bottom-0 py-3  w-full right-0 px-12 rounded-b-3xl ${ styleMode ? "bg-[#454545]" : "bg-white" }`}>
                                <button type="submit" className={` h-10 w-52 rounded-md ${ styleMode ? "bg-white text-black" : "bg-black text-white"}`}>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SocialSignUp;