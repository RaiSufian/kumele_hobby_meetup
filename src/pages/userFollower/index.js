import { useNavigate } from "react-router-dom";
import Dashboardlayout from "../../layouts/dashboardlayout";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserFollower = () => {
    const navigate = useNavigate();
    const [pageName, setPageName] = useState("Followers");
    const follower = [0, 1, 2, 3, 4, 5];
    const Following = [0, 1, 2, 3, 4, 5];
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <Dashboardlayout>
            <div className={`md:mx-10 mx-2 my-5  rounded-lg ${styleMode ? "bg-black text-white" : "bg-white"}`}>
                <div className={`px-3 flex items-center gap-6 py-2 border-b  ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`}>
                    <span className="w-10 h-10 flex items-center justify-center cursor-pointer" onClick={() => navigate("/dashboard/profile")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 36 36" fill="none">
                            <path opacity="0.35" d="M15.3162 21.03C16.1533 20.1929 24.479 11.8672 25.3162 11.03C26.9905 9.35575 26.9905 6.64289 25.3162 4.9686C23.6419 3.29432 20.929 3.29432 19.2547 4.9686C18.4176 5.80575 10.0919 14.1315 9.25474 14.9686C7.58045 16.6429 7.58045 19.3557 9.25474 21.03C10.929 22.7043 13.6433 22.7043 15.3162 21.03Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M9.25571 21.03C10.0929 21.8672 18.4186 30.1929 19.2557 31.03C20.93 32.7043 23.6429 32.7043 25.3171 31.03C26.9914 29.3557 26.9914 26.6429 25.3171 24.9686C24.48 24.1315 16.1543 15.8057 15.3171 14.9686C13.6429 13.2943 10.93 13.2943 9.25571 14.9686C7.58143 16.6429 7.58143 19.3572 9.25571 21.03Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg>
                    </span>
                    <span className="text-2xl font-bold font-plus">{pageName}</span>
                </div>

                <div className="md:p-8 p-3">
                    <div className={` rounded-lg sm:w-96 w-72 p-1 relative ${styleMode ? "bg-[#454545]" : "bg-light_border"}`}>
                        <div className=" flex relative z-20">
                            <div className="w-1/2 sm:h-11 h-9 sm:text-lg  font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setPageName("Followers") }}>
                                Followers
                            </div>
                            <div className="w-1/2 sm:h-11 h-9 sm:text-lg  font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setPageName("Following") }}>
                                Following
                            </div>
                        </div>
                        <div className={`sm:h-11 h-9 w-1/2 ${styleMode ? "bg-black" : "bg-white"}  absolute top-1 ${pageName == "Followers" ? 'left-1' : 'right-1'} rounded-lg transition-all duration-75 ease-in`}></div>
                    </div>
                    <div className="mt-5">
                        {pageName == "Followers" ? <>{
                            follower.map((values, index) => {
                                return (
                                    <div className="flex items-center justify-between mt-3" key={index}>
                                        <div className="sm:flex items-center gap-3">
                                            <img src="/img/user-1.png" alt="profile" className="w-14 h-14" />
                                            <h1 className={`text-lg  ${styleMode ? "text-white" : "text-black"}`}>Esther Howard</h1>
                                        </div>
                                        <button className={`px-5 h-8 w-40 text-lg rounded-lg ${styleMode ? "bg-white text-black " : "bg-black text-white "}`}>Remove</button>
                                    </div>
                                )
                            })
                        }</>
                            :
                            <>
                                {
                                    Following.map((value, index) => {
                                        return (
                                            <div className="flex items-center justify-between mt-3" key={index}>
                                                <div className="sm:flex items-center gap-3">
                                                    <img src="/img/user-2.png" alt="profile" className="w-14 h-14" />
                                                    <h1 className={`text-lg  ${styleMode ? "text-white" : "text-black"}`}>Cody Fisher</h1>
                                                </div>

                                                <button className={`px-5 h-8 w-40 text-lg rounded-lg ${styleMode ? "bg-white text-black " : "bg-black text-white "}`}>Unfollow</button>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        }



                    </div>
                </div>
            </div>
        </Dashboardlayout>
    )
}
export default UserFollower;