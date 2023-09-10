import Dashboardlayout from "../../layouts/dashboardlayout";

import { useState } from "react";
import NotiCard from "../../components/clientNotCard";
import { useSelector } from "react-redux";
import AdvertCard from "../../components/advertCard";
import ClientStaticsGraph from "../../components/clientStaticsGraph";
import MonthlyChart from "../../components/MonthlyChart";
import ClientChatPie from "../../components/clientChatPie";
const ClientStatics = () => {
    const [events, setEvents] = useState("past");
    const [dataOwn, setDataown] = useState(false);
    const [dateName, setDataName] = useState("");
    const [perMonth, setPerMonth] = useState("");
    const styleMode = useSelector((state) => state.styleModer.mode);
    const openModal = (date) => {
        setDataown(true);
        setDataName(date);
    }
    // console.log("per month name is", perMonth);
    return (
        <Dashboardlayout >
            <div className={` min-h-screen m-4  rounded-lg font-plus ${styleMode ? "bg-black" : "bg-white"} `}>
                <div className={` flex items-center gap-10 p-5 border-b ${styleMode ? "border-[#6B6B6B]" : "border-light_border "}`}>
                    <h2 className={`text-xl font-bold  ${styleMode ? "text-white" : ""}`} >History &  Statistics</h2>
                </div>
                <div className="xl:flex">
                    <div className="lg:w-1/2 ">
                        <div className="sm:p-5 p-2">
                            <h5 className={`text-xl ${styleMode ? "text-white" : ""}`} >Yearly Data</h5>
                            <div className="sm:flex ">
                                <div className="lg:w-2/3 sm:w-4/5 relative">
                                    <ClientChatPie />
                                </div>
                                <div className="flex-1">
                                    <ul className={` ${styleMode ? "text-white" : "bg-[#EEECEC] text-[#262626]"}  rounded-lg py-2 px-2`}>
                                        <li className="flex items-center gap-2 cursor-pointer" onClick={() => openModal("Dislikes")} >
                                            <div className="w-8 h-8 bg-theme rounded-full">
                                            </div>
                                            <div className="flex items-center">
                                                <h6 className={` flex gap-1 items-center ${styleMode ? "text-white" : " "} `}>Dislikes
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
                                                        <g clip-path="url(#clip0_1040_2851)">
                                                            <path opacity="0.35" d="M27.2674 9.22C26.5901 6.17067 23.8848 4 20.7594 4H11.4408C8.49542 4 6.10742 6.388 6.10742 9.33333V18.6667C6.10742 20.056 6.81676 21.2773 7.89276 21.9947L11.7048 29.6333C12.1648 30.5547 13.2848 30.9293 14.2074 30.4693C16.3168 29.4173 17.3008 26.9493 16.4954 24.7333L15.7421 22.6667H24.7741C26.9834 22.6667 28.7741 20.876 28.7741 18.6667V16L27.2674 9.22Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path d="M7.44344 6C7.44344 6.51467 7.44344 20.152 7.44344 20.6667C7.44344 21.7707 5.94936 22.6667 4.10844 22.6667C2.26752 22.6667 0.773438 21.7707 0.773438 20.6667C0.773438 20.152 0.773438 6.51467 0.773438 6C0.773438 4.896 2.26752 4 4.10844 4C5.94936 4 7.44344 4.896 7.44344 6Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1040_2851">
                                                                <rect width="32" height="32" fill="white" transform="translate(0.773438)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </h6>
                                            </div>
                                        </li>

                                    </ul>
                                    <ul className={` ${styleMode ? "text-white" : "bg-[#EEECEC] text-[#262626]"}  rounded-lg py-2 px-2 mt-4`}>
                                        <li className="font-plus text-lg">
                                            Likes Breakdown
                                        </li>
                                        <li className="flex items-start gap-2 mt-3 cursor-pointer" onClick={() => openModal("Male")}>
                                            <div className="w-8 h-8 bg-[#C4C4C4] rounded-full">
                                            </div>
                                            <div>
                                                <h6 className={` flex gap-1 items-center ${styleMode ? "text-white" : " "} `}>Male
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
                                                            <path opacity="0.35" d="M23.4408 20H10.1074V25.3333H23.4408V20Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path opacity="0.35" d="M16.7741 16.0013C20.456 16.0013 23.4408 13.0165 23.4408 9.33463C23.4408 5.65274 20.456 2.66797 16.7741 2.66797C13.0922 2.66797 10.1074 5.65274 10.1074 9.33463C10.1074 13.0165 13.0922 16.0013 16.7741 16.0013Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path d="M28.6976 23.208C28.3336 21.308 26.5643 20 24.6296 20H22.1069V24L16.7736 21.3333L11.4403 24V20H10.1083C6.98293 20 5.2136 21.308 4.8496 23.208C4.35893 25.764 6.3056 28 8.7736 28H24.7736C27.2416 28 29.1883 25.764 28.6976 23.208Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                        </svg>
                                                    </span>
                                                </h6>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2 mt-3 cursor-pointer" onClick={() => openModal("Female")}>
                                            <div className="w-8 h-8 bg-[#CD7F32] rounded-full">
                                            </div>
                                            <div>
                                                <h6 className={` flex gap-1 items-center ${styleMode ? "text-white" : " "} `}>Female
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
                                                            <path opacity="0.35" d="M23.4408 20H10.1074V25.3333H23.4408V20Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path opacity="0.35" d="M16.7741 16.0013C20.456 16.0013 23.4408 13.0165 23.4408 9.33463C23.4408 5.65274 20.456 2.66797 16.7741 2.66797C13.0922 2.66797 10.1074 5.65274 10.1074 9.33463C10.1074 13.0165 13.0922 16.0013 16.7741 16.0013Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path d="M28.6976 23.208C28.3336 21.308 26.5643 20 24.6296 20H22.0763C20.8589 21.6107 18.9469 22.6667 16.7736 22.6667C14.6003 22.6667 12.6869 21.6107 11.4709 20H10.1083C6.98293 20 5.2136 21.308 4.8496 23.208C4.35893 25.764 6.3056 28 8.7736 28H24.7736C27.2416 28 29.1883 25.764 28.6976 23.208Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path opacity="0.35" d="M26.4194 15.6889C25.2741 14.5435 24.8995 12.8929 24.7795 11.7915C24.7101 11.1449 25.2501 10.6035 25.8968 10.6742C26.9981 10.7929 28.6488 11.1675 29.7941 12.3142C30.9395 13.4609 31.3141 15.1102 31.4341 16.2115C31.5035 16.8582 30.9634 17.3995 30.3168 17.3289C29.2155 17.2089 27.5648 16.8342 26.4194 15.6889Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                        </svg>
                                                    </span>
                                                </h6>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2 mt-3 cursor-pointer" onClick={() => openModal("Non-Binary")}>
                                            <div className="w-8 h-8 bg-[#03A11C] rounded-full">
                                            </div>
                                            <div>
                                                <h6 className={` flex gap-1 items-center ${styleMode ? "text-white" : " "} `}>Non-Binary
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 33 32" fill="none">
                                                            <path opacity="0.35" d="M22.1061 16H11.4395V28H22.1061V16Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path opacity="0.35" d="M22.1074 12C24.3166 12 26.1074 10.2091 26.1074 8C26.1074 5.79086 24.3166 4 22.1074 4C19.8983 4 18.1074 5.79086 18.1074 8C18.1074 10.2091 19.8983 12 22.1074 12Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path opacity="0.35" d="M11.4395 12C13.6486 12 15.4395 10.2091 15.4395 8C15.4395 5.79086 13.6486 4 11.4395 4C9.23031 4 7.43945 5.79086 7.43945 8C7.43945 10.2091 9.23031 12 11.4395 12Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path d="M23.4401 14.668H10.1068C7.16144 14.668 4.77344 17.056 4.77344 20.0013V22.668C4.77344 25.6133 7.16144 28.0013 10.1068 28.0013H12.7734V26.668C12.7734 25.1946 13.9668 24.0013 15.4401 24.0013H18.1068C19.5801 24.0013 20.7734 25.1946 20.7734 26.668V28.0013H23.4401C26.3854 28.0013 28.7734 25.6133 28.7734 22.668V20.0013C28.7734 17.056 26.3854 14.668 23.4401 14.668ZM16.7734 22.668C15.3001 22.668 14.1068 21.4746 14.1068 20.0013C14.1068 18.528 15.3001 17.3346 16.7734 17.3346C18.2468 17.3346 19.4401 18.528 19.4401 20.0013C19.4401 21.4746 18.2468 22.668 16.7734 22.668Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            <path opacity="0.35" d="M28.427 12.3449C27.739 11.6569 27.515 10.6676 27.443 10.0063C27.4017 9.61826 27.7257 9.29426 28.1137 9.3356C28.775 9.40626 29.7644 9.6316 30.4524 10.3196C31.1404 11.0076 31.3643 11.9969 31.4363 12.6583C31.4777 13.0463 31.1537 13.3703 30.7657 13.3289C30.1057 13.2569 29.115 13.0316 28.427 12.3449Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                        </svg>
                                                    </span>
                                                </h6>
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
                                {perMonth === "" ?
                                    <h5 className={` ${styleMode ? "text-white" : ""} text-xl `} >User Ads Reach</h5>
                                    : <span onClick={() => setPerMonth("")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 36 36" fill="none">
                                            <path opacity="0.35" d="M15.3171 20.8992C16.1543 20.062 24.48 11.7363 25.3171 10.8992C26.9914 9.22489 26.9914 6.51203 25.3171 4.83775C23.6429 3.16346 20.93 3.16346 19.2557 4.83775C18.4186 5.67489 10.0929 14.0006 9.25571 14.8377C7.58143 16.512 7.58143 19.2249 9.25571 20.8992C10.93 22.5735 13.6443 22.5735 15.3171 20.8992Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M9.25571 20.8992C10.0929 21.7363 18.4186 30.062 19.2557 30.8992C20.93 32.5735 23.6429 32.5735 25.3171 30.8992C26.9914 29.2249 26.9914 26.512 25.3171 24.8377C24.48 24.0006 16.1543 15.6749 15.3171 14.8377C13.6429 13.1635 10.93 13.1635 9.25571 14.8377C7.58143 16.512 7.58143 19.2263 9.25571 20.8992Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        </svg>
                                    </span>}

                                <div className="flex gap-2">
                                    <select className={` ${styleMode ? "bg-[#262626] text-white" : "bg-light_border"} custom_input  p-1 rounded-md `} onChange={() => setPerMonth("abc")} >
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Jan
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Feb
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Mar
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Apr
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            May
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Jun
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Jul
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Aug
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Sep
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Out
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `} name="month" value="abc">
                                            Nov
                                        </option>
                                    </select>
                                    <select className={` ${styleMode ? "bg-[#262626] text-white" : "bg-light_border"} custom_input  p-1 rounded-md `} >
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `}>
                                            2023
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `}>
                                            2022
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `}>
                                            2021
                                        </option>
                                        <option className={`${styleMode ? "bg-black text-white" : "bg-white" } text-lg `}>
                                            2020
                                        </option>
                                    </select>
                                </div>

                            </div>
                            <div className="mt-2 w-[370px] sm:w-full overflow-x-auto py-4">
                                {perMonth === "" ? <ClientStaticsGraph /> : <MonthlyChart />}

                            </div>

                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <div className={`${styleMode ? "bg-[#454545] text-white" : "bg-light_border"}  rounded-lg sm:w-[600px] w-[420px] p-1 relative mx-auto  `}>
                        <div className=" flex relative z-20 px-2">
                            <div className="w-1/2 h-9 sm:text-lg text-base font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setEvents("past") }}>
                                Past Adverts
                            </div>
                            <div className="w-1/2 h-9 sm:text-lg text-base font-plus font-medium flex items-center justify-center cursor-pointer" onClick={() => { setEvents("current") }}>
                                Current Adverts
                            </div>
                            <div className="w-1/2 h-9 sm:text-lg text-base font-plus font-medium flex items-center gap-1 justify-center cursor-pointer" onClick={() => { setEvents("futrue") }}>
                                Notifications
                                <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 24 28" fill="none">
                                        <path d="M8.19531 24C8.19531 26.12 9.91265 27.8373 12.0326 27.8373C14.1526 27.8373 15.87 26.12 15.87 24H8.19531Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path opacity="0.35" d="M21.3333 14.46V13.3333C21.3333 8.17867 17.1547 4 12 4C6.84533 4 2.66667 8.17867 2.66667 13.3333V14.4613C2.66667 15.4653 2.36933 16.4467 1.81333 17.2813L0.516 19.2267C0.18 19.7307 0 20.324 0 20.9293C0 22.6253 1.37467 24 3.07067 24H20.9293C22.6253 24 24 22.6253 24 20.9293C24 20.3227 23.82 19.7307 23.484 19.2267L22.1867 17.2813C21.6307 16.4453 21.3333 15.464 21.3333 14.46Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M14.6673 2.66667V4.38667C13.8273 4.13333 12.934 4 12.0007 4C11.0673 4 10.174 4.13333 9.33398 4.38667V2.66667C9.33398 1.2 10.534 0 12.0007 0C13.4673 0 14.6673 1.2 14.6673 2.66667Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    </svg>
                                    <div className="w-5 h-5 absolute bg-black  text-sm top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-2xl flex justify-center items-center border border-1  text-white">
                                        2
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={` ${styleMode ? "bg-black" : "bg-white"} h-9 w-1/3  absolute top-1 ${events == "past" ? 'left-1' : ''} ${events == "futrue" ? "right-1" : ""} ${events == "current" ? "left-1/2 -translate-x-1/2" : ""} rounded-lg transition-all duration-75 ease-in`}></div>
                    </div>
                </div>
                {events == "past" ?
                    <div className="flex mx-auto max-w-5xl pb-7 flex-wrap">
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <AdvertCard />
                        </div>
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <AdvertCard />
                        </div>
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <AdvertCard />
                        </div>
                    </div> :
                    events == "current" ? <div className="flex mx-auto max-w-5xl pb-7 flex-wrap">
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <AdvertCard />
                        </div>
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <AdvertCard />
                        </div>
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <AdvertCard />
                        </div>
                    </div> : <div className="flex mx-auto max-w-5xl pb-7 flex-wrap">
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <NotiCard />
                        </div>
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <NotiCard />
                        </div>
                        <div className="lg:w-1/2 sm:w-4/5 px-2 mt-2">
                            <NotiCard />
                        </div>
                    </div>
                }

            </div>
            {dataOwn ? <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                <div className={` ${styleMode ? "bg-black" : "bg-white "} modal p-10 rounded-3xl relative `} >

                    <div className="w-72">
                        <div className="w-20 h-20 date_icons mx-auto">

                        </div>
                        <h5 className="text-xl font-bold font-plus text-center mt-3">{dateName}</h5>
                        <p className="text-[#262626] text-center font-plus">
                            This is the reach factor associated with females. This helps you decide how are your Ads doing with this respective set of people. For more details, click on PI chart.
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

        </Dashboardlayout >
    )

}
export default ClientStatics;