import Dashboardlayout from "../../layouts/dashboardlayout";
import PieChat from "../../components/PieChat";
import BarChat from "../../components/barChat";
import { useState } from "react";
import EventStatCard from "../../components/eventStatCard";
import { useSelector } from "react-redux";
const ModalData = {
    gold: {
        name: "Gold Status",
        descr: "User created a minimum of 4 events or user attended a minimum of 4 events without fail in the last 30 days. The user gets 8% discount of 1 in-app purchase of choice."
    },
    silver: {
        name: "Silver Status",
        descr: "User created a minimum of 3 events or user attended a minimum of 3 events without fail in the last 30 days. The user gets 4% discount of 1 in-app purchase of choice."
    },
    brozen: {
        name: "Bronze Status",
        descr: "User created a minimum of 2 events or user attended a minimum of 2 events without fail in the last 30 days. The user gets 2% discount of 1 in-app purchase of choice."
    },
}
const Statistics = () => {
    const [events, setEvents] = useState("past");
    const [dataOwn, setDataown] = useState(false);
    const [dateName, setDataName] = useState("");
    const styleMode = useSelector((state) => state.styleModer.mode);


    const setModal = (name) => {
        setDataName(name);
        setDataown(true);
    }
    const modalData = ModalData[dateName];
    return (
        <>

            <Dashboardlayout >
                <div className={` min-h-screen m-4  rounded-lg font-plus ${styleMode ? "bg-black" : "bg-white"} `}>
                    <div className={` flex items-center gap-10 p-5 border-b ${styleMode ? "border-[#6B6B6B]" : "border-light_border "}`}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                                <path opacity="0.35" d="M15.3162 21.03C16.1533 20.1929 24.479 11.8672 25.3162 11.03C26.9905 9.35575 26.9905 6.64289 25.3162 4.9686C23.6419 3.29432 20.929 3.29432 19.2547 4.9686C18.4176 5.80575 10.0919 14.1315 9.25474 14.9686C7.58045 16.6429 7.58045 19.3557 9.25474 21.03C10.929 22.7043 13.6433 22.7043 15.3162 21.03Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M9.25571 21.03C10.0929 21.8672 18.4186 30.1929 19.2557 31.03C20.93 32.7043 23.6429 32.7043 25.3171 31.03C26.9914 29.3557 26.9914 26.6429 25.3171 24.9686C24.48 24.1315 16.1543 15.8057 15.3171 14.9686C13.6429 13.2943 10.93 13.2943 9.25571 14.9686C7.58143 16.6429 7.58143 19.3572 9.25571 21.03Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </span>
                        <h2 className={`text-xl font-bold  ${styleMode ? "text-white" : ""}`} >History &  Statistics</h2>
                    </div>
                    <div className="xl:flex">
                        <div className="lg:w-1/2 ">
                            <div className="sm:p-5 p-2">
                                <h5 className={`text-xl ${styleMode ? "text-white" : ""}`} >Reward Rings</h5>
                                <div className="sm:flex items-center">
                                    <div className="lg:w-1/2 sm:w-4/5 relative">
                                        <PieChat />
                                    </div>
                                    <div className="flex-1">
                                        <ul className={`${styleMode} ? "text-white" :  "`}>
                                            <li className="flex items-start gap-2 mt-3" >
                                                <div className="w-8 h-8 bg-theme rounded-full">
                                                </div>
                                                <div className="cursor-pointer" >
                                                    <h6 className={` flex gap-1 text-lg items-center ${styleMode ? "text-white" : " "} `} onClick={() => setModal("gold")}>Gold
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none">
                                                                <path d="M16.9932 20.3379C16.4422 20.3379 15.9932 19.8899 15.9932 19.3379V12.3379C15.9932 11.2329 15.0982 10.3379 13.9932 10.3379H8.99316C8.44116 10.3379 7.99316 10.7859 7.99316 11.3379C7.99316 11.8899 8.43516 12.3379 8.99316 12.3379C9.55116 12.3379 9.99316 12.7859 9.99316 13.3379V19.3379C9.99316 19.8899 9.55816 20.3379 8.99316 20.3379C8.42816 20.3379 7.99316 20.7859 7.99316 21.3379C7.99316 21.8899 8.44116 22.3379 8.99316 22.3379H16.9932C17.5452 22.3379 17.9932 21.8899 17.9932 21.3379C17.9932 20.7859 17.5442 20.3379 16.9932 20.3379Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                                <path opacity="0.35" d="M12.9932 8.33789C14.65 8.33789 15.9932 6.99474 15.9932 5.33789C15.9932 3.68104 14.65 2.33789 12.9932 2.33789C11.3363 2.33789 9.99316 3.68104 9.99316 5.33789C9.99316 6.99474 11.3363 8.33789 12.9932 8.33789Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                            </svg>
                                                        </span>
                                                    </h6>
                                                    <p className={` ${styleMode ? "text-[#BCBCBC]" : "text-dark"}  `}>Achieved 2 medals</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2 mt-3">
                                                <div className="w-8 h-8 bg-light_bg rounded-full">
                                                </div>
                                                <div className="cursor-pointer">
                                                    <h6 className={` flex gap-1 text-lg items-center ${styleMode ? "text-white" : " "} `} onClick={() => setModal("silver")}>Silver
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none">
                                                                <path d="M16.9932 20.3379C16.4422 20.3379 15.9932 19.8899 15.9932 19.3379V12.3379C15.9932 11.2329 15.0982 10.3379 13.9932 10.3379H8.99316C8.44116 10.3379 7.99316 10.7859 7.99316 11.3379C7.99316 11.8899 8.43516 12.3379 8.99316 12.3379C9.55116 12.3379 9.99316 12.7859 9.99316 13.3379V19.3379C9.99316 19.8899 9.55816 20.3379 8.99316 20.3379C8.42816 20.3379 7.99316 20.7859 7.99316 21.3379C7.99316 21.8899 8.44116 22.3379 8.99316 22.3379H16.9932C17.5452 22.3379 17.9932 21.8899 17.9932 21.3379C17.9932 20.7859 17.5442 20.3379 16.9932 20.3379Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                                <path opacity="0.35" d="M12.9932 8.33789C14.65 8.33789 15.9932 6.99474 15.9932 5.33789C15.9932 3.68104 14.65 2.33789 12.9932 2.33789C11.3363 2.33789 9.99316 3.68104 9.99316 5.33789C9.99316 6.99474 11.3363 8.33789 12.9932 8.33789Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                            </svg>
                                                        </span>
                                                    </h6>
                                                    <p className={` ${styleMode ? "text-[#BCBCBC]" : "text-dark"}  `}>Achieved 2 medals</p>
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-2 mt-3">
                                                <div className="w-8 h-8 bg-theme_orange rounded-full">
                                                </div>
                                                <div className="cursor-pointer">
                                                    <h6 className={` flex gap-1 text-lg items-center ${styleMode ? "text-white" : " "} `} onClick={() => setModal("brozen")}>Bronze
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none">
                                                                <path d="M16.9932 20.3379C16.4422 20.3379 15.9932 19.8899 15.9932 19.3379V12.3379C15.9932 11.2329 15.0982 10.3379 13.9932 10.3379H8.99316C8.44116 10.3379 7.99316 10.7859 7.99316 11.3379C7.99316 11.8899 8.43516 12.3379 8.99316 12.3379C9.55116 12.3379 9.99316 12.7859 9.99316 13.3379V19.3379C9.99316 19.8899 9.55816 20.3379 8.99316 20.3379C8.42816 20.3379 7.99316 20.7859 7.99316 21.3379C7.99316 21.8899 8.44116 22.3379 8.99316 22.3379H16.9932C17.5452 22.3379 17.9932 21.8899 17.9932 21.3379C17.9932 20.7859 17.5442 20.3379 16.9932 20.3379Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                                <path opacity="0.35" d="M12.9932 8.33789C14.65 8.33789 15.9932 6.99474 15.9932 5.33789C15.9932 3.68104 14.65 2.33789 12.9932 2.33789C11.3363 2.33789 9.99316 3.68104 9.99316 5.33789C9.99316 6.99474 11.3363 8.33789 12.9932 8.33789Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                            </svg>
                                                        </span>
                                                    </h6>
                                                    <p className={` ${styleMode ? "text-[#BCBCBC]" : "text-dark"}  `}>Achieved 2 medals</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="lg:w-1/2">
                            <div className="p-5">
                                <div className="flex items-center justify-between">
                                    <h5 className={` ${styleMode ? "text-white" : ""} text-xl `} >Money Earned in USD</h5>
                                    <select className={` ${styleMode ? "bg-[#262626] text-white" : "bg-light_border"} custom_input  p-1 rounded-md `} >
                                        <option>
                                            2023
                                        </option>
                                        <option>
                                            2022
                                        </option>
                                        <option>
                                            2021
                                        </option>
                                        <option>
                                            2020
                                        </option>
                                    </select>
                                </div>
                                <div className="mt-2 w-[370px] sm:w-full overflow-x-auto py-4">
                                    <BarChat />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className={`${styleMode ? "bg-[#454545] text-white" : "bg-light_border"}  rounded-lg sm:w-[600px] w-[420px] p-1 relative mx-auto  `}>
                            <div className=" flex relative z-20 px-2">
                                <div className="w-1/2 h-9 sm:text-lg text-base font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setEvents("past") }}>
                                    Past Events
                                </div>
                                <div className="w-1/2 h-9 sm:text-lg text-base font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setEvents("current") }}>
                                    Current Events
                                </div>
                                <div className="w-1/2 h-9 sm:text-lg text-base font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setEvents("futrue") }}>
                                    Futrue Events
                                </div>
                            </div>
                            <div className={` ${styleMode ? "bg-black" : "bg-white"} h-9 w-1/3  absolute top-1 ${events == "past" ? 'left-1' : ''} ${events == "futrue" ? "right-1" : ""} ${events == "current" ? "left-1/2 -translate-x-1/2" : ""} rounded-lg transition-all duration-75 ease-in`}></div>
                        </div>
                    </div>

                    <div className="flex mx-auto max-w-5xl pb-7 flex-wrap">
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <EventStatCard />
                        </div>
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <EventStatCard />
                        </div>
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <EventStatCard />
                        </div>
                    </div>
                </div>
            </Dashboardlayout >
            {dataOwn ? <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                <div className={` ${styleMode ? "bg-black" : "bg-white "} modal p-10 rounded-3xl relative `} >

                    <div className="w-72">
                        <div className="w-20 h-20 date_icons mx-auto">

                        </div>
                        <h5 className="text-xl font-bold font-plus text-center mt-3">{modalData.name}</h5>
                        <p className="text-[#262626] text-center font-plus">
                            {modalData.descr}
                        </p>
                    </div>
                    <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setDataown(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 44 44" fill="none">
                            <path opacity="0.35" d="M30.1767 8.76722C29.8267 9.11544 25.3247 13.6192 22.1179 16.826C18.9111 13.6192 14.4091 9.11722 14.0591 8.76722C12.6716 7.37967 10.4224 7.37967 9.0348 8.76722C7.64725 10.1548 7.64725 12.404 9.0348 13.7915C9.38302 14.1415 13.8868 18.6435 17.0936 21.8503C13.8868 25.0572 9.3848 29.5592 9.0348 29.9091C7.64725 31.2967 7.64725 33.5459 9.0348 34.9335C10.4224 36.321 12.6716 36.321 14.0591 34.9335C14.3114 34.6812 34.9488 14.0438 35.201 13.7915C36.5886 12.404 36.5886 10.1548 35.201 8.76722C33.8135 7.37967 31.5643 7.37967 30.1767 8.76722Z" fill={`${styleMode ? "white" : "black"}  `} />
                            <path d="M35.2003 34.9347C36.5879 33.5471 36.5879 31.2979 35.2003 29.9104C34.8521 29.5621 30.3483 25.0584 27.1415 21.8516L22.1172 26.8759C25.324 30.0827 29.826 34.5847 30.176 34.9347C31.5635 36.3222 33.8128 36.3222 35.2003 34.9347Z" fill={`${styleMode ? "white" : "black"}  `} />
                        </svg>
                    </div>
                </div>
            </div> : null}
        </>
    )
}
export default Statistics;