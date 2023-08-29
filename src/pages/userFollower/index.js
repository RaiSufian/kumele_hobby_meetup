import { useNavigate } from "react-router-dom";
import Dashboardlayout from "../../layouts/dashboardlayout";
import { useState } from "react";

const UserFollower = () => {
    const navigate = useNavigate();
    const [pageName, setPageName] = useState("Followers");
    const follower = [0, 1, 2, 3, 4, 5];
    const Following = [0, 1, 2, 3, 4, 5];
    return (
        <Dashboardlayout>
            <div className="mx-10 my-5 bg-white rounded-lg">
                <div className="px-3 flex items-center gap-6 py-2 border-b border-[#EEECEC]">
                    <span className="w-10 h-10 flex items-center justify-center cursor-pointer" onClick={() => navigate("/dashboard/profile")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 36 36" fill="none">
                            <path opacity="0.35" d="M15.3162 21.03C16.1533 20.1929 24.479 11.8672 25.3162 11.03C26.9905 9.35575 26.9905 6.64289 25.3162 4.9686C23.6419 3.29432 20.929 3.29432 19.2547 4.9686C18.4176 5.80575 10.0919 14.1315 9.25474 14.9686C7.58045 16.6429 7.58045 19.3557 9.25474 21.03C10.929 22.7043 13.6433 22.7043 15.3162 21.03Z" fill="black" />
                            <path d="M9.25571 21.03C10.0929 21.8672 18.4186 30.1929 19.2557 31.03C20.93 32.7043 23.6429 32.7043 25.3171 31.03C26.9914 29.3557 26.9914 26.6429 25.3171 24.9686C24.48 24.1315 16.1543 15.8057 15.3171 14.9686C13.6429 13.2943 10.93 13.2943 9.25571 14.9686C7.58143 16.6429 7.58143 19.3572 9.25571 21.03Z" fill="black" />
                        </svg>
                    </span>
                    <span className="text-2xl font-bold font-plus">{pageName}</span>
                </div>

                <div className="p-8">
                    <div className="bg-[#e3e3e3] rounded-lg w-96 p-1 relative">
                        <div className=" flex relative z-20">
                            <div className="w-1/2 h-11 text-lg font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setPageName("Followers") }}>
                                Followers
                            </div>
                            <div className="w-1/2 h-11 text-lg font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setPageName("Following") }}>
                                Following
                            </div>
                        </div>
                        <div className={`h-11 w-1/2 bg-white absolute top-1 ${pageName == "Followers" ? 'left-1' : 'right-1'} rounded-lg transition-all duration-75 ease-in`}></div>
                    </div>
                    <div className="mt-5">
                        {pageName == "Followers" ? <>{
                            follower.map((values, index) => {
                                return (
                                    <div className="flex items-center justify-between mt-3" key={index}>
                                        <div className="flex items-center gap-3">
                                            <img src="/img/user-1.png" alt="profile" className="w-14 h-14" />
                                            <h1 className="text-lg text-black">Esther Howard</h1>
                                        </div>
                                        <button className="px-5 h-8 w-40 bg-black text-white text-lg rounded-lg">Remove</button>
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
                                                <div className="flex items-center gap-3">
                                                    <img src="/img/user-2.png" alt="profile" className="w-14 h-14" />
                                                    <h1 className="text-lg text-black">Cody Fisher</h1>
                                                </div>
                                                <button className="px-5 h-8 w-40 bg-black text-white text-lg rounded-lg">Unfollow</button>
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