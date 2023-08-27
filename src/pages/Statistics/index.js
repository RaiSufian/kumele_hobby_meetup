import Dashboardlayout from "../../layouts/dashboardlayout";
import PieChat from "../../components/PieChat";
import BarChat from "../../components/barChat";
import { useState } from "react";
import EventStatCard from "../../components/eventStatCard";
const Statistics = () => {
    const [events, setEvents] = useState("past")
    return (
        <Dashboardlayout >
            <div className="min-h-screen m-4 bg-white rounded-lg font-plus">
                <div className="flex items-center gap-10 p-5 border-b border-[#EEECEC]">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                            <path opacity="0.35" d="M15.3162 21.03C16.1533 20.1929 24.479 11.8672 25.3162 11.03C26.9905 9.35575 26.9905 6.64289 25.3162 4.9686C23.6419 3.29432 20.929 3.29432 19.2547 4.9686C18.4176 5.80575 10.0919 14.1315 9.25474 14.9686C7.58045 16.6429 7.58045 19.3557 9.25474 21.03C10.929 22.7043 13.6433 22.7043 15.3162 21.03Z" fill="black" />
                            <path d="M9.25571 21.03C10.0929 21.8672 18.4186 30.1929 19.2557 31.03C20.93 32.7043 23.6429 32.7043 25.3171 31.03C26.9914 29.3557 26.9914 26.6429 25.3171 24.9686C24.48 24.1315 16.1543 15.8057 15.3171 14.9686C13.6429 13.2943 10.93 13.2943 9.25571 14.9686C7.58143 16.6429 7.58143 19.3572 9.25571 21.03Z" fill="black" />
                        </svg>
                    </span>
                    <h2 className=" text-xl font-bold">History &  Statistics</h2>
                </div>
                <div className="flex">
                    <div className="w-1/2 ">
                        <div className="p-5">
                            <h5 className="text-xl">Reward Rings</h5>
                            <div className="flex items-center">
                                <div className="w-1/2 relative">
                                    <PieChat />
                                </div>
                                <div className="w-1/2">
                                    <ul>
                                        <li className="flex items-start gap-2 mt-3">
                                            <div className="w-8 h-8 bg-theme rounded-full">
                                            </div>
                                            <div>
                                                <h6 className="flex gap-1 text-lg items-center">Gold
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none">
                                                            <path d="M16.9932 20.3379C16.4422 20.3379 15.9932 19.8899 15.9932 19.3379V12.3379C15.9932 11.2329 15.0982 10.3379 13.9932 10.3379H8.99316C8.44116 10.3379 7.99316 10.7859 7.99316 11.3379C7.99316 11.8899 8.43516 12.3379 8.99316 12.3379C9.55116 12.3379 9.99316 12.7859 9.99316 13.3379V19.3379C9.99316 19.8899 9.55816 20.3379 8.99316 20.3379C8.42816 20.3379 7.99316 20.7859 7.99316 21.3379C7.99316 21.8899 8.44116 22.3379 8.99316 22.3379H16.9932C17.5452 22.3379 17.9932 21.8899 17.9932 21.3379C17.9932 20.7859 17.5442 20.3379 16.9932 20.3379Z" fill="black" />
                                                            <path opacity="0.35" d="M12.9932 8.33789C14.65 8.33789 15.9932 6.99474 15.9932 5.33789C15.9932 3.68104 14.65 2.33789 12.9932 2.33789C11.3363 2.33789 9.99316 3.68104 9.99316 5.33789C9.99316 6.99474 11.3363 8.33789 12.9932 8.33789Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                                <p className="text-[#262626]">Achieved 2 medals</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2 mt-3">
                                            <div className="w-8 h-8 bg-[#C4C4C4] rounded-full">
                                            </div>
                                            <div>
                                                <h6 className="flex gap-1 text-lg items-center">Silver
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none">
                                                            <path d="M16.9932 20.3379C16.4422 20.3379 15.9932 19.8899 15.9932 19.3379V12.3379C15.9932 11.2329 15.0982 10.3379 13.9932 10.3379H8.99316C8.44116 10.3379 7.99316 10.7859 7.99316 11.3379C7.99316 11.8899 8.43516 12.3379 8.99316 12.3379C9.55116 12.3379 9.99316 12.7859 9.99316 13.3379V19.3379C9.99316 19.8899 9.55816 20.3379 8.99316 20.3379C8.42816 20.3379 7.99316 20.7859 7.99316 21.3379C7.99316 21.8899 8.44116 22.3379 8.99316 22.3379H16.9932C17.5452 22.3379 17.9932 21.8899 17.9932 21.3379C17.9932 20.7859 17.5442 20.3379 16.9932 20.3379Z" fill="black" />
                                                            <path opacity="0.35" d="M12.9932 8.33789C14.65 8.33789 15.9932 6.99474 15.9932 5.33789C15.9932 3.68104 14.65 2.33789 12.9932 2.33789C11.3363 2.33789 9.99316 3.68104 9.99316 5.33789C9.99316 6.99474 11.3363 8.33789 12.9932 8.33789Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                                <p className="text-[#262626]">Achieved 2 medals</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2 mt-3">
                                            <div className="w-8 h-8 bg-[#CD7F32] rounded-full">
                                            </div>
                                            <div>
                                                <h6 className="flex gap-1 text-lg items-center">Bronze
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none">
                                                            <path d="M16.9932 20.3379C16.4422 20.3379 15.9932 19.8899 15.9932 19.3379V12.3379C15.9932 11.2329 15.0982 10.3379 13.9932 10.3379H8.99316C8.44116 10.3379 7.99316 10.7859 7.99316 11.3379C7.99316 11.8899 8.43516 12.3379 8.99316 12.3379C9.55116 12.3379 9.99316 12.7859 9.99316 13.3379V19.3379C9.99316 19.8899 9.55816 20.3379 8.99316 20.3379C8.42816 20.3379 7.99316 20.7859 7.99316 21.3379C7.99316 21.8899 8.44116 22.3379 8.99316 22.3379H16.9932C17.5452 22.3379 17.9932 21.8899 17.9932 21.3379C17.9932 20.7859 17.5442 20.3379 16.9932 20.3379Z" fill="black" />
                                                            <path opacity="0.35" d="M12.9932 8.33789C14.65 8.33789 15.9932 6.99474 15.9932 5.33789C15.9932 3.68104 14.65 2.33789 12.9932 2.33789C11.3363 2.33789 9.99316 3.68104 9.99316 5.33789C9.99316 6.99474 11.3363 8.33789 12.9932 8.33789Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                </h6>
                                                <p className="text-[#262626]">Achieved 2 medals</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-1/2">
                        <div className="p-5">
                            <div className="flex items-center justify-between">
                                <h5 className="text-xl">Money Earned in USD</h5>
                                <select className=" custom_input bg-[#EEECEC] p-1 rounded-md">
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
                            <div className="mt-2">
                                <BarChat />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <div className="bg-[#e3e3e3] rounded-lg w-[600px] p-1 relative mx-auto">
                        <div className=" flex relative z-20">
                            <div className="w-1/2 h-9 text-lg font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setEvents("past") }}>
                                Past Events
                            </div>
                            <div className="w-1/2 h-9 text-lg font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setEvents("current") }}>
                                Current Events
                            </div>
                            <div className="w-1/2 h-9 text-lg font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setEvents("futrue") }}>
                                Futrue Events
                            </div>
                        </div>
                        <div className={`h-9 w-1/3 bg-white absolute top-1 ${events == "past" ? 'left-1' : ''} ${events == "futrue" ? "right-1" : ""} ${events == "current" ? "left-1/2 -translate-x-1/2" : ""} rounded-lg transition-all duration-75 ease-in`}></div>
                    </div>
                </div>

                <div className="flex mx-auto max-w-5xl  gap-3 pb-7">
                    <div className="w-1/2">
                            <EventStatCard />
                    </div>
                    <div className="w-1/2">
                            <EventStatCard />
                    </div>
                </div>
            </div>
        </Dashboardlayout >
    )
}
export default Statistics;