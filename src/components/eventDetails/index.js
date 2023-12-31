import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EventDetails = ({ setEvent, type, setPayModal }) => {
    const navigate = useNavigate();
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [succes, setSucces] = useState(false);
    const [eventAdd, setEventAdd] = useState(false);
    // ============================================================
    // Add event sccesfully
    // ============================================================
    const CreateEvent = () => {
        setSucces(true);
        setTimeout(() => {
            navigate("/dashboard");
        }, 1500);
    }
    const Addpay = () => {
        setEvent(false);
        setPayModal(true);
    }
    return (
        <>
            {eventAdd ?
                <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full   h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "" : ""} w-[35rem] h-[25rem]   rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out `}>
                        <img src="/img/pop_bg.png" alt="popUp bg img" className="w-full h-full rounded-3xl" />
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black rounded-3xl bg-opacity-30 z-0">

                        </div>
                        <h2 className="z-10 font-fredoka font-semibold text-7xl text-theme absolute top-3 left-1/2 -translate-x-1/2"> It’s a <br />
                            <span className="text-8xl">Go</span>
                        </h2>
                        <div className="absolute top-0 right-0 bottom-0 left-0 z-30 rounded-3xl event_bgGif">
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-full z-40">
                            <div className="flex mx-auto items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none" className="border border-white rounded-full">
                                    <path opacity="0.35" d="M18.0001 3.09375C9.94571 3.09375 3.41675 9.62271 3.41675 17.6771C3.41675 25.7315 9.94571 32.2604 18.0001 32.2604C13.9736 32.2604 10.7084 28.9952 10.7084 24.9688C10.7084 20.9423 13.9736 17.6771 18.0001 17.6771C22.0265 17.6771 25.2917 14.4119 25.2917 10.3854C25.2917 6.35896 22.0265 3.09375 18.0001 3.09375Z" fill="black" />
                                    <path d="M17.9999 3.09375C22.0264 3.09375 25.2916 6.35896 25.2916 10.3854C25.2916 14.4119 22.0264 17.6771 17.9999 17.6771C13.9735 17.6771 10.7083 20.9423 10.7083 24.9688C10.7083 28.9952 13.9735 32.2604 17.9999 32.2604C26.0543 32.2604 32.5833 25.7315 32.5833 17.6771C32.5833 9.62271 26.0543 3.09375 17.9999 3.09375ZM17.9999 27.8854C16.3885 27.8854 15.0833 26.5802 15.0833 24.9688C15.0833 23.3573 16.3885 22.0521 17.9999 22.0521C19.6114 22.0521 20.9166 23.3573 20.9166 24.9688C20.9166 26.5802 19.6114 27.8854 17.9999 27.8854Z" fill="black" />
                                    <path d="M17.9999 13.3021C19.6107 13.3021 20.9166 11.9962 20.9166 10.3854C20.9166 8.77459 19.6107 7.46875 17.9999 7.46875C16.3891 7.46875 15.0833 8.77459 15.0833 10.3854C15.0833 11.9962 16.3891 13.3021 17.9999 13.3021Z" fill="black" />
                                    <path opacity="0.35" d="M17.9999 27.888C19.6107 27.888 20.9166 26.5822 20.9166 24.9714C20.9166 23.3605 19.6107 22.0547 17.9999 22.0547C16.3891 22.0547 15.0833 23.3605 15.0833 24.9714C15.0833 26.5822 16.3891 27.888 17.9999 27.888Z" fill="black" />
                                </svg>
                                <span className="font-bold font-plus text-xl text-white">Group meditation</span>
                            </div>
                            <div className="w-48 mx-auto">
                                <ul className="mt-2 text-white flex items-center justify-start ">
                                    <li className=' xl:-mr-2 lg:-mr-2 sm:-mr-3 -mr-1 relative z-10'>
                                        <img src="/img/s1-side1.png" alt="img" className="xl:w-14 lg:w-10 md:w-8 w-7" />
                                        <span className="lg:text-base text-sm">James</span>
                                    </li>
                                    <li className=' xl:-mr-2 lg:-mr-2 sm:-mr-3 -mr-1 relative z-20'>
                                        <div className='relative z-20 flex flex-col'>
                                            <div className="relative">
                                                <img src="/img/s1-side4.png" alt="img" className='relative z-10 xl:w-14 lg:w-10 md:w-8 w-7' />
                                                <div className='z-0 absolute bg-white top-1/2 -translate-y-1/2 md:w-28 w-20 -translate-x-3   text-black flex justify-end px-2  h-7 left-full items-center md:gap-1 rounded-full'>
                                                    <span className='font-semibold md:text-sm text-xs '>+20 Guest</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                                                        <path d="M14.0002 10C13.7442 10 13.4883 9.902 13.2933 9.707C12.9022 9.316 12.9022 8.684 13.2933 8.293L14.0002 7.586C14.3783 7.208 14.8802 7 15.4142 7H16.0003C16.0003 5.897 16.8973 5 18.0003 5V4C18.0003 2.897 18.8973 2 20.0003 2H21.0003C21.5523 2 22.0003 2.447 22.0003 3C22.0003 3.553 21.5523 4 21.0003 4H20.0003V5C20.0003 6.103 19.1033 7 18.0003 7C18.0003 8.103 17.1033 9 16.0003 9H15.4142L14.7072 9.707C14.5122 9.902 14.2563 10 14.0002 10Z" fill="black" />
                                                        <path opacity="0.35" d="M14.6952 16.305L7.69519 9.30497C7.30419 8.91397 6.67219 8.91397 6.28119 9.30497C5.94119 9.64497 5.91519 10.161 6.16819 10.549L3.09519 18.977C2.65719 20.178 3.82219 21.343 5.02319 20.905L13.4522 17.832C13.6172 17.94 13.7992 18.012 13.9892 18.012C14.2452 18.012 14.5012 17.914 14.6962 17.719C15.0852 17.329 15.0852 16.696 14.6952 16.305Z" fill="black" />
                                                        <path d="M17.5 22C18.3284 22 19 21.3284 19 20.5C19 19.6716 18.3284 19 17.5 19C16.6716 19 16 19.6716 16 20.5C16 21.3284 16.6716 22 17.5 22Z" fill="black" />
                                                        <path d="M21.5 11C22.3284 11 23 10.3284 23 9.5C23 8.67157 22.3284 8 21.5 8C20.6716 8 20 8.67157 20 9.5C20 10.3284 20.6716 11 21.5 11Z" fill="black" />
                                                        <path d="M3.5 9C4.32843 9 5 8.32843 5 7.5C5 6.67157 4.32843 6 3.5 6C2.67157 6 2 6.67157 2 7.5C2 8.32843 2.67157 9 3.5 9Z" fill="black" />
                                                        <path d="M14.5 4C15.3284 4 16 3.32843 16 2.5C16 1.67157 15.3284 1 14.5 1C13.6716 1 13 1.67157 13 2.5C13 3.32843 13.6716 4 14.5 4Z" fill="black" />
                                                        <path d="M6.499 2C5.671 2 5 2.672 5 3.5C5 4.328 5.672 5 6.5 5H7.289C8.234 5 9 5.766 9 6.711V8C9 8.552 9.448 9 10 9C10.552 9 11 8.552 11 8V6C11 3.791 9.209 2 7 2H6.499Z" fill="black" />
                                                        <path d="M22 16.501C22 17.329 21.328 18 20.5 18C19.672 18 19 17.328 19 16.5V15.711C19 14.766 18.234 14 17.289 14H16C15.448 14 15 13.552 15 13C15 12.448 15.448 12 16 12H18C20.209 12 22 13.791 22 16V16.501Z" fill="black" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="text-center  lg:text-base text-sm">Olivia</p>

                                        </div>

                                    </li>
                                </ul>
                            </div>
                            <div className="w-40 bg-black mx-auto flex py-2 gap-1 items-center justify-center text-white my-4 rounded-md cursor-pointer" onClick={Addpay}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 34 33" fill="none">
                                    <path opacity="0.35" d="M26.4058 27.3346H7.44751C5.20366 27.3346 3.38501 25.516 3.38501 23.2721V9.73047C3.38501 7.48661 5.20366 5.66797 7.44751 5.66797H26.4058C28.6497 5.66797 30.4683 7.48661 30.4683 9.73047V23.2721C30.4683 25.516 28.6497 27.3346 26.4058 27.3346Z" fill="white" />
                                    <path d="M14.2183 17.8555C13.9665 17.8555 9.05355 17.8555 8.80168 17.8555C8.05418 17.8555 7.44751 18.4621 7.44751 19.2096C7.44751 19.9571 8.05418 20.5638 8.80168 20.5638C9.05355 20.5638 13.9665 20.5638 14.2183 20.5638C14.9658 20.5638 15.5725 19.9571 15.5725 19.2096C15.5725 18.4621 14.9658 17.8555 14.2183 17.8555Z" fill="white" />
                                    <path d="M30.4683 11.082H3.38501V15.1445H30.4683V11.082Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 34 33" fill="none">
                                    <g opacity="0.6">
                                        <path opacity="0.35" d="M30.5108 21.9167C30.5108 24.1605 28.6922 25.9792 26.4483 25.9792H14.2202C13.3698 25.9792 12.5424 26.2446 11.8504 26.7375L8.03166 29.4594C6.0952 30.8406 3.42749 29.4594 3.42749 27.1031V8.375C3.42749 6.13115 5.24614 4.3125 7.48999 4.3125H26.4483C28.6922 4.3125 30.5108 6.13115 30.5108 8.375V21.9167Z" fill="white" />
                                        <path d="M16.969 17.1758C18.0908 17.1758 19.0002 16.2664 19.0002 15.1445C19.0002 14.0227 18.0908 13.1133 16.969 13.1133C15.8472 13.1133 14.9377 14.0227 14.9377 15.1445C14.9377 16.2664 15.8472 17.1758 16.969 17.1758Z" fill="white" />
                                        <path d="M23.74 17.1758C24.8618 17.1758 25.7712 16.2664 25.7712 15.1445C25.7712 14.0227 24.8618 13.1133 23.74 13.1133C22.6182 13.1133 21.7087 14.0227 21.7087 15.1445C21.7087 16.2664 22.6182 17.1758 23.74 17.1758Z" fill="white" />
                                        <path d="M10.1982 17.1758C11.3201 17.1758 12.2295 16.2664 12.2295 15.1445C12.2295 14.0227 11.3201 13.1133 10.1982 13.1133C9.07641 13.1133 8.16699 14.0227 8.16699 15.1445C8.16699 16.2664 9.07641 17.1758 10.1982 17.1758Z" fill="white" />
                                    </g>
                                </svg>
                                <span className="">
                                    Go to chat
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full   h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "bg-black" : "bg-white"} modal md:w-[690px] w-[520px]  lg:p-14 p-10 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out `}>
                        <span className="absolute top-3 right-3 cursor-pointer z-10" onClick={() => setEvent(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </span>
                        <div className={`md:h-[400px] h-[320px]  relative overflow-y-auto  custom_scroll ${type == 2 ? "" : "pb-12"} `}>
                            <div className="w-full">
                                <img src="/img/event1.png" className="object-cover" alt="detail_img" />
                            </div>
                            <div className="py-6">
                                <div className="md:flex items-center justify-between px-1">
                                    <h1 className={` ${styleMode ? "text-white" : ""} font-plus text-xl font-bold text-start `}>Group meditation</h1>
                                    <div className="flex items-center">
                                        <span className={`${styleMode ? "text-[#BCBCBC]" : "text-light_text "} font-plus text-lg `}>Starts in </span>
                                        <div className="w-6 h-6 time-icon mx-1">  </div>
                                        <span className="text-xl text-theme_blue font-semibold">7 hrs</span>
                                    </div>

                                </div>
                                <div className="md:flex item-center justify-between">
                                    <ul className={`${styleMode ? "text-[#BCBCBC]" : "text-dark"} py-3 flex item-center gap-2 `}>
                                        <li className="flex items-center">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path opacity="0.35" d="M7.94773 13.9609C11.2399 13.9609 13.9086 11.2921 13.9086 7.99997C13.9086 4.70785 11.2399 2.03906 7.94773 2.03906C4.65561 2.03906 1.98682 4.70785 1.98682 7.99997C1.98682 11.2921 4.65561 13.9609 7.94773 13.9609Z" fill={` ${styleMode ? "white" : "black"}`} stroke="black" stroke-width="1.58958" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.0016 9.45631C10.0016 7.20441 7.48477 7.53557 7.48477 6.34339C7.48477 5.68107 8.01462 5.5486 8.21332 5.5486C8.41202 5.5486 8.54448 5.61483 8.67695 5.68107C9.00811 5.81353 9.4055 5.68107 9.6042 5.41614C9.86913 5.01874 9.73667 4.48888 9.33927 4.29019C9.14057 4.15772 8.80941 4.09149 8.47825 4.09149V3.76033C8.47825 3.42917 8.21332 3.23047 7.94839 3.23047C7.68346 3.23047 7.41853 3.4954 7.41853 3.76033V4.22395C6.49128 4.48888 5.89519 5.3499 5.89519 6.40962C5.89519 8.79399 8.34579 8.33036 8.34579 9.58877C8.34579 9.8537 8.21332 10.3173 7.61723 10.3173C7.3523 10.3173 7.08737 10.2511 6.95491 10.1186C6.62374 9.98617 6.22635 10.1186 6.02765 10.3836C5.76272 10.7147 5.89519 11.2446 6.22635 11.4433C6.55751 11.642 6.88867 11.7744 7.3523 11.7744V12.1718C7.3523 12.503 7.61723 12.7017 7.88216 12.7017C8.21332 12.7017 8.41202 12.4368 8.41202 12.1718V11.7082C9.47174 11.4433 10.0016 10.516 10.0016 9.45631Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg></span>
                                            <span className=" text-xs font-plus">
                                                Free
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                <path opacity="0.35" d="M8.1496 14.6224C11.8075 14.6224 14.7728 11.6571 14.7728 7.99921C14.7728 4.3413 11.8075 1.37598 8.1496 1.37598C4.49169 1.37598 1.52637 4.3413 1.52637 7.99921C1.52637 11.6571 4.49169 14.6224 8.1496 14.6224Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M8.81182 3.95975L9.14298 7.66876C9.20921 8.19862 8.81182 8.66225 8.21572 8.72848C7.61963 8.79471 7.22224 8.39732 7.15601 7.80123C7.15601 7.735 7.15601 7.66876 7.15601 7.60253L7.48717 3.95975C7.48717 3.56236 7.81833 3.29743 8.21572 3.36366C8.54689 3.42989 8.81182 3.69482 8.81182 3.95975Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M9.34203 10.1193L7.48752 8.52977C7.09012 8.1986 7.02389 7.53628 7.42129 7.13889C7.75245 6.74149 8.41477 6.67526 8.81217 7.07265C8.8784 7.13889 8.94463 7.20512 8.94463 7.27135L10.4017 9.32455C10.6004 9.65572 10.5342 10.0531 10.2693 10.2518C9.93812 10.3843 9.60696 10.318 9.34203 10.1193Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg></span>
                                            <span className=" text-xs font-plus">
                                                7:45-9:30
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                <path opacity="0.35" d="M5.3716 6.67533C6.65187 6.67533 7.68973 5.63746 7.68973 4.35719C7.68973 3.07693 6.65187 2.03906 5.3716 2.03906C4.09133 2.03906 3.05347 3.07693 3.05347 4.35719C3.05347 5.63746 4.09133 6.67533 5.3716 6.67533Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M11.3325 6.67533C12.6128 6.67533 13.6507 5.63746 13.6507 4.35719C13.6507 3.07693 12.6128 2.03906 11.3325 2.03906C10.0523 2.03906 9.0144 3.07693 9.0144 4.35719C9.0144 5.63746 10.0523 6.67533 11.3325 6.67533Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M7.3584 9.32422H12.657C13.9353 9.32422 14.9751 10.3641 14.9751 11.6424C14.9751 12.9206 13.9353 13.9605 12.657 13.9605H7.3584V9.32422Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M9.67615 11.6424C9.67615 12.9206 8.63631 13.9605 7.35802 13.9605H4.0464C3.41057 13.9605 2.82773 13.7022 2.41046 13.2783C1.98658 12.861 1.72827 12.2782 1.72827 11.6424C1.72827 10.3641 2.76812 9.32422 4.0464 9.32422H7.35802C7.99385 9.32422 8.5767 9.58252 8.99396 10.0064C9.41785 10.4237 9.67615 11.0065 9.67615 11.6424Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg></span>
                                            <span className="text-xs font-plus">
                                                12 guests
                                            </span>
                                        </li>
                                    </ul>
                                    <button className={` ${styleMode ? "bg-white text-black" : "bg-black text-white "} rounded-md w-20 h-8 flex items-center justify-center gap-1 `}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none">
                                            <path d="M8.98152 12.3145L15.2715 9.41152C14.5365 8.72152 14.0685 7.76152 14.0185 6.68652L7.72852 9.58952C8.46452 10.2775 8.93152 11.2385 8.98152 12.3145Z" fill={` ${styleMode ? "black" : "white"}`} />
                                            <path d="M15.2725 15.5885L8.98249 12.6855C8.93249 13.7605 8.46449 14.7215 7.72949 15.4115L14.0195 18.3145C14.0695 17.2385 14.5365 16.2775 15.2725 15.5885Z" fill={` ${styleMode ? "black" : "white"}`} />
                                            <path opacity="0.35" d="M5 8.5C2.791 8.5 1 10.291 1 12.5C1 14.709 2.791 16.5 5 16.5C7.209 16.5 9 14.709 9 12.5C9 10.291 7.209 8.5 5 8.5Z" fill={` ${styleMode ? "black" : "white"}`} />
                                            <path opacity="0.35" d="M18 2.5C15.791 2.5 14 4.291 14 6.5C14 8.709 15.791 10.5 18 10.5C20.209 10.5 22 8.709 22 6.5C22 4.291 20.209 2.5 18 2.5Z" fill={` ${styleMode ? "black" : "white"}`} />
                                            <path opacity="0.35" d="M18 14.5C15.791 14.5 14 16.291 14 18.5C14 20.709 15.791 22.5 18 22.5C20.209 22.5 22 20.709 22 18.5C22 16.291 20.209 14.5 18 14.5Z" fill={` ${styleMode ? "black" : "white"}`} />
                                        </svg>
                                        Share
                                    </button>

                                </div>
                            </div>
                            <div className={`p-2 text-start ${styleMode ? "text-[#BCBCBC]" : ""} `}>
                                <p>Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor

                                    ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui.

                                    Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur

                                    ridiculus mus.s quis lectus maximus fermentum.</p>
                            </div>
                            <div className="flex mt-5 items-center justify-between">
                                <div className="flex gap-3 items-center w-2/5 flex-1">
                                    <img src="/img/profile1.png" className="w-16 h-16" alt="profile" />
                                    <div className="text-start">
                                        <div className="flex items-center justify-between gap-5">
                                            <h1 className={` ${styleMode ? "text-white" : ""} text-xl font-semibold font-plus `}>Alkash Kumar</h1>
                                            <button className="text-white rounded-md bg-theme_blue px-2">Follow</button>
                                        </div>
                                        <span className={`${styleMode ? "text-white" : ""} font-plus font-medium pt-2 `} >Host</span>
                                    </div>
                                </div>
                                <div className="flex gap-1 items-center px-4">
                                    <div className="w-8 h-8 earn_madel rounded-full font-plus text-lg"></div>
                                    <span className={`${styleMode ? "text-[#BCBCBC]" : "text-light_text text-xl font-medium relative"}`}>
                                        Silver
                                        <div className="absolute top-0 right-0 w-7 h-7 bg-yellow-400 rounded-full translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-sm text-black font-bold">
                                            20
                                        </div>
                                    </span>
                                </div>

                            </div>
                            {type == 2 ? <div className="mt-2 flex justify-center">
                                <button className={`rounded-lg w-1/2 h-11 font-plus ${styleMode ? "bg-white text-black" : "bg-black text-white "} `} onClick={() => CreateEvent()}>
                                    Create Event
                                </button>
                            </div> : null}

                        </div>
                        {type == 1 ? <div className={` ${styleMode ? "bg-[#454545]" : "bg-white"} absolute bottom-0 left-0 w-full footer_shadow z-20  rounded-b-xl `}>
                            <div className="flex md:gap-10 gap-2 py-4 md:px-14 px-8">
                                <button onClick={() => setEvent(false)} className={` ${styleMode ? "bg-[#454545] border-white" : "border-black"}  w-1/2 border-2  text-lg font-plus font-medium md:h-12 h-9 flex items-center justify-center rounded-lg`} >Decline</button>
                                <button className={`${styleMode ? "text-black bg-white" : "bg-black text-white"}  w-1/2  text-lg font-plus font-medium md:h-12 h-9 flex items-center justify-center rounded-lg `} onClick={() => setEventAdd(true)}>Interested</button>
                            </div>
                        </div> : null}
                    </div>

                </div>}


            {succes ? <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                <div className={` ${styleMode ? "bg-black" : "bg-white "} modal p-10 rounded-3xl relative `} >
                    <div className="md:w-72 w-60">
                        <div className="md:w-52 w-40 md:h-52 h-40 login_gif mx-auto">

                        </div>
                        <p className={` ${styleMode ? "text-white" : ""} text-3xl font-bold text-center mt-5 `}>Event Created</p>
                    </div>

                </div>
            </div> : null}

        </>

    )
}
export default EventDetails;