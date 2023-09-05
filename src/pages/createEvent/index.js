import Dashboardlayout from "../../layouts/dashboardlayout";
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import EventDetails from "../../components/eventDetails";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
const CreateEvent = () => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [sliderValue, setSliderValue] = useState(50);

    const handleSliderChange = (event) => {
        const newValue = parseInt(event.target.value);
        setSliderValue(newValue);
    };

    // Buttoon slider
    const [isOn1, setIsOn1] = useState(false);

    const handleToggle1 = () => {
        setIsOn1(!isOn1);
    };
    // Buttoon slider
    const [isOn2, setIsOn2] = useState(false);

    const handleToggle2 = () => {
        setIsOn2(!isOn2);
    };
    // Preview Event Modals
    const [event, setEvent] = useState(false);

    // Check User Availablity 
    const [checkAvaib, setCheckAviab] = useState(0);
    const checkavial = () => {
        setCheckAviab(1);
        setTimeout(() => {
            setCheckAviab(2);
        }, 1500);
    }

    // Add users
    const [addUser, setAddUser] = useState(false);
    
    // Add user age values
    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = useState([18, 28]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Dashboardlayout>
            <div className={` ${styleMode ? " bg-black" : " layout_bg"} md:mx-4 mx-2 mb-4 pb-4  rounded-lg font-plus `} >
                <div className={`${styleMode ? " bg-black border-[#6B6B6B] text-white" : " bg-white border-light_border"}  md:px-5 px-2 py-4  border-b  rounded-t-lg  `}>
                    <h2 className=" text-xl font-bold">Create event</h2>
                </div>
                <div className={`my-4 md:mx-4 mx-1 font-plus rounded-lg sm:p-4 p-1 ${styleMode ? " bg-black" : " bg-white"} `}>
                    <div className="md:flex">
                        <div className="md:w-1/2 px-2 font-plus">
                            <div className={`${styleMode ? "text-white" : ""} `}>
                                <h3>Event Category</h3>
                                <div className="flex flex-wrap mt-1">
                                    <div className={` w-16 h-16 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg>
                                        </span>

                                        <span className={` font-plus pt-1 text-xs ${styleMode ? "text-[#BCBCBC] hover:text-black" : "text-dark "} `}>Sprituality</span>
                                    </div>
                                    <div className={` w-16 h-16 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg>
                                        </span>

                                        <span className={` font-plus pt-1 text-xs ${styleMode ? "text-[#BCBCBC] hover:text-black" : "text-dark "} `}>Sprituality</span>
                                    </div>
                                    <div className={` w-16 h-16 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg>
                                        </span>

                                        <span className={` font-plus pt-1 text-xs ${styleMode ? "text-[#BCBCBC] hover:text-black" : "text-dark "} `}>Sprituality</span>
                                    </div>
                                    <div className={` w-16 h-16 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg>
                                        </span>

                                        <span className={` font-plus pt-1 text-xs ${styleMode ? "text-[#BCBCBC] hover:text-black" : "text-dark "} `}>Sprituality</span>
                                    </div>
                                    <div className={` w-16 h-16 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg>
                                        </span>

                                        <span className={` font-plus pt-1 text-xs ${styleMode ? "text-[#BCBCBC] hover:text-black" : "text-dark "} `}>Sprituality</span>
                                    </div>
                                    <div className={` w-16 h-16 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg>
                                        </span>

                                        <span className={` font-plus pt-1 text-xs ${styleMode ? "text-[#BCBCBC] hover:text-black" : "text-dark "} `}>Sprituality</span>
                                    </div>
                                    <div className={` w-16 h-16 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </svg>
                                        </span>

                                        <span className={` font-plus pt-1 text-xs ${styleMode ? "text-[#BCBCBC] hover:text-black" : "text-dark "} `}>Sprituality</span>
                                    </div>
                                </div>
                            </div>
                            <div className={` ${styleMode ? "text-white" : ""} mt-5 `}>
                                <h3>Event Image</h3>
                                <p className={`text-sm ${styleMode ? "text-[#BCBCBC] " : "text-[#808080]"} mt-1 `}>(Recommended size 400*400px)</p>
                                <div className={` ${styleMode ? "border-[#BCBCBC]" : "border-theme_border  "} cursor-pointer w-full h-64 border border-dashed  rounded-lg flex items-center justify-center mt-1  `} >
                                    <div className="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" className="mx-auto">
                                            <g clip-path="url(#clip0_191_15192)">
                                                <path d="M25.9164 18.7901V22.4289H29.5553V24.8548H25.9164V28.4936H23.4906V24.8548H19.8517V22.4289H23.4906V18.7901H25.9164ZM25.9261 4.23486C26.5908 4.23486 27.1294 4.77462 27.1294 5.43931V16.7791C26.3502 16.5039 25.5298 16.3636 24.7035 16.3643V6.66074H5.29648L5.2977 23.6419L16.5683 12.37C16.7769 12.1608 17.0547 12.0349 17.3496 12.0162C17.6444 11.9974 17.936 12.087 18.1694 12.2682L18.2822 12.3713L22.5833 16.6772C21.6428 16.9638 20.7701 17.4378 20.0179 18.0708C19.2656 18.7038 18.6493 19.4826 18.2061 20.3602C17.7629 21.2378 17.5021 22.196 17.4393 23.1772C17.3765 24.1583 17.513 25.142 17.8407 26.069L4.07384 26.0678C3.75461 26.0674 3.44857 25.9404 3.22295 25.7146C2.99734 25.4887 2.87061 25.1825 2.87061 24.8633V5.43931C2.87283 5.12077 3.00027 4.81588 3.22541 4.59052C3.45054 4.36515 3.7553 4.2374 4.07384 4.23486H25.9261ZM10.1482 9.08662C10.7916 9.08662 11.4087 9.3422 11.8636 9.79714C12.3185 10.2521 12.5741 10.8691 12.5741 11.5125C12.5741 12.1559 12.3185 12.7729 11.8636 13.2278C11.4087 13.6828 10.7916 13.9384 10.1482 13.9384C9.50486 13.9384 8.88782 13.6828 8.43288 13.2278C7.97794 12.7729 7.72236 12.1559 7.72236 11.5125C7.72236 10.8691 7.97794 10.2521 8.43288 9.79714C8.88782 9.3422 9.50486 9.08662 10.1482 9.08662Z" fill="#808080" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_191_15192">
                                                    <rect width="29.1105" height="29.1105" fill="white" transform="translate(0.444824 0.595947)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <p className="text-sm font-medium  text-light_text">Upload an image</p>
                                    </div>
                                </div>

                            </div>
                            <div className={` ${styleMode ? "text-white" : ""} mt-5 `}>
                                <h3>Age range</h3>
                                <div className="w-full mx-auto mt-4">
                                    <Box sx={{ width: 400 }}>
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            aria-label="Always visible"
                                            min={18}  // Minimum value
                                            max={50} // Maximum value
                                            className="w-1/2"
                                        />
                                    </Box>
                                </div>
                            </div>
                            <div className={` ${styleMode ? "text-white" : ""} mt-5 `}>
                                <h3 className="flex items-center gap-1">Number of guests
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
                                            <path d="M16 20.7108C15.449 20.7108 15 20.2628 15 19.7108V12.7108C15 11.6058 14.105 10.7108 13 10.7108H8C7.448 10.7108 7 11.1588 7 11.7108C7 12.2628 7.442 12.7108 8 12.7108C8.558 12.7108 9 13.1588 9 13.7108V19.7108C9 20.2628 8.565 20.7108 8 20.7108C7.435 20.7108 7 21.1588 7 21.7108C7 22.2628 7.448 22.7108 8 22.7108H16C16.552 22.7108 17 22.2628 17 21.7108C17 21.1588 16.551 20.7108 16 20.7108Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <path opacity="0.35" d="M12 8.71082C13.6569 8.71082 15 7.36767 15 5.71082C15 4.05396 13.6569 2.71082 12 2.71082C10.3431 2.71082 9 4.05396 9 5.71082C9 7.36767 10.3431 8.71082 12 8.71082Z" fill="#A6A6A6" />
                                        </svg>
                                    </span>
                                </h3>
                                <div className="sm:flex mt-1">
                                    <div className="rounded-lg sm:w-1/2 flex px-3">
                                        <input type="number" placeholder="81-150" className={` text-center h-9 rounded-l-lg w-1/2 border custom_input  border-r-0 ${styleMode ? "border-white bg-black text-white" : "border-bg_light"} `} />
                                        <button className=" text-center h-9 w-1/2 bg-theme_yellow text-lg rounded-r-lg text-black" onClick={() => setAddUser(true)}>
                                            Pay
                                        </button>
                                    </div>
                                    <button className={`h-9 sm:w-1/2 w-full mt-1 sm:mt-0  rounded-lg border border-theme_red  ${styleMode ? "bg-[#242424] text-[#808080]" : "bg-bg_light text-light_text"}`}>
                                        100
                                    </button>
                                </div>
                                <p className={`text-xs  mt-1 ${styleMode ? "text-[#C4C4C4]" : "text-light_text"}`}><span className="text-theme_red">*</span> Max 150 Guests</p>
                            </div>
                            <div className={` ${styleMode ? "text-white" : ""} mt-5 sm:flex`}>
                                <div className="sm:w-1/2 pr-3">
                                    <h3>Paid Event</h3>
                                    <div className="flex gap-2 items-center">
                                        <button className={`h-8 flex-1  rounded-lg ${styleMode ? "bg-[#242424]" : " bg-theme_white"} `}>0$</button>
                                        <button
                                            onClick={handleToggle1}
                                            className={`w-12 h-6 rounded-full relative ${isOn1 ? 'bg-black' : 'bg-gray-300'
                                                } transition-colors`}
                                        >
                                            <span className={`block w-4 h-4 rounded-full transform transition-transform absolute top-1/2 -translate-y-1/2 ${isOn1 ? 'left-1' : ''} ${!isOn1 ? 'right-1' : ''} ${isOn1 ? 'bg-white' : 'bg-gray-500'}`} />
                                        </button>
                                    </div>
                                </div>
                                <div className="sm:w-1/2 pr-3">
                                    <h3>Pay in Cash</h3>
                                    <div className="flex gap-2 items-center">
                                        <button className="h-8 flex-1 bg-theme_yellow rounded-lg text-black">8$</button>
                                        <button
                                            onClick={handleToggle2}
                                            className={`w-12 h-6 rounded-full relative ${isOn2 ? 'bg-black' : 'bg-gray-300'
                                                } transition-colors`}
                                        >
                                            <span className={`block w-4 h-4 rounded-full transform transition-transform absolute top-1/2 -translate-y-1/2 ${isOn2 ? 'left-1' : ''} ${!isOn2 ? 'right-1' : ''} ${isOn2 ? 'bg-white' : 'bg-gray-500'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2  px-2 font-plus">
                            <div className={`${styleMode ? "text-white" : ""} `}>
                                <h3>Event Name</h3>
                                <input className={`rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Add a title" />
                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-5 `}>
                                <h3>Description</h3>
                                <textarea className={`rounded-md  w-full  p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white"}`} rows="4" cols="50" placeholder="More about the event">

                                </textarea>
                                <span className={`${styleMode ? "text-[#BCBCBC]" : ""} float-right text-sm`}>23/1200 Max</span>
                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-5 `}>
                                <h3>Event starts in</h3>
                                <div className="flex gap-2 mt-1">
                                    <button className="bg-theme rounded-md h-8 px-4 text-black text-sm"> 24 Hrs</button>
                                    <div className="flex ">
                                        <button className={`h-8 rounded-l-md border border-r-0 px-3 ${styleMode ? "border-[#6B6B6B]" : ""}  `}>- </button>
                                        <button className={`h-8 rounded-r-md border border-l-0 px-3 ${styleMode ? "border-[#6B6B6B]" : ""} `}>+ </button>

                                    </div>
                                </div>
                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-5 `}>
                                <h3>Date</h3>
                                <div className={`flex items-center rounded-md px-2 ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC] " : "bg-theme_white"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                        <path opacity="0.35" d="M26.2507 30.4046H9.22201C6.87063 30.4046 4.96484 28.4988 4.96484 26.1474V10.5378H30.5078V26.1474C30.5078 28.4988 28.602 30.4046 26.2507 30.4046Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M26.2507 4.86206H9.22201C6.87063 4.86206 4.96484 6.76785 4.96484 9.11922V10.5383H30.5078V9.11922C30.5078 6.76785 28.602 4.86206 26.2507 4.86206Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M20.5734 27.5674C21.3571 27.5674 21.9924 26.932 21.9924 26.1483C21.9924 25.3646 21.3571 24.7292 20.5734 24.7292C19.7896 24.7292 19.1543 25.3646 19.1543 26.1483C19.1543 26.932 19.7896 27.5674 20.5734 27.5674Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M14.8976 27.5671C15.6813 27.5671 16.3166 26.9318 16.3166 26.1481C16.3166 25.3643 15.6813 24.729 14.8976 24.729C14.1138 24.729 13.4785 25.3643 13.4785 26.1481C13.4785 26.9318 14.1138 27.5671 14.8976 27.5671Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M9.22179 27.5671C10.0055 27.5671 10.6408 26.9318 10.6408 26.1481C10.6408 25.3643 10.0055 24.729 9.22179 24.729C8.43807 24.729 7.80273 25.3643 7.80273 26.1481C7.80273 26.9318 8.43807 27.5671 9.22179 27.5671Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M9.22179 21.8906C10.0055 21.8906 10.6408 21.2553 10.6408 20.4715C10.6408 19.6878 10.0055 19.0525 9.22179 19.0525C8.43807 19.0525 7.80273 19.6878 7.80273 20.4715C7.80273 21.2553 8.43807 21.8906 9.22179 21.8906Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M14.8976 21.8906C15.6813 21.8906 16.3166 21.2553 16.3166 20.4715C16.3166 19.6878 15.6813 19.0525 14.8976 19.0525C14.1138 19.0525 13.4785 19.6878 13.4785 20.4715C13.4785 21.2553 14.1138 21.8906 14.8976 21.8906Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M20.5734 21.8916C21.3571 21.8916 21.9924 21.2562 21.9924 20.4725C21.9924 19.6888 21.3571 19.0535 20.5734 19.0535C19.7896 19.0535 19.1543 19.6888 19.1543 20.4725C19.1543 21.2562 19.7896 21.8916 20.5734 21.8916Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M26.2491 21.8916C27.0329 21.8916 27.6682 21.2562 27.6682 20.4725C27.6682 19.6888 27.0329 19.0535 26.2491 19.0535C25.4654 19.0535 24.8301 19.6888 24.8301 20.4725C24.8301 21.2562 25.4654 21.8916 26.2491 21.8916Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M26.2491 16.2148C27.0329 16.2148 27.6682 15.5795 27.6682 14.7958C27.6682 14.012 27.0329 13.3767 26.2491 13.3767C25.4654 13.3767 24.8301 14.012 24.8301 14.7958C24.8301 15.5795 25.4654 16.2148 26.2491 16.2148Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M20.5734 16.2148C21.3571 16.2148 21.9924 15.5795 21.9924 14.7958C21.9924 14.012 21.3571 13.3767 20.5734 13.3767C19.7896 13.3767 19.1543 14.012 19.1543 14.7958C19.1543 15.5795 19.7896 16.2148 20.5734 16.2148Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        <path d="M14.8976 16.2148C15.6813 16.2148 16.3166 15.5795 16.3166 14.7958C16.3166 14.012 15.6813 13.3767 14.8976 13.3767C14.1138 13.3767 13.4785 14.012 13.4785 14.7958C13.4785 15.5795 14.1138 16.2148 14.8976 16.2148Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    </svg>
                                    <input className={`rounded-md  w-full h-10 p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC] " : "bg-theme_white"}`} type="date" placeholder="Wednesday, 13th April, 2022" />

                                </div>
                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-5 lg:flex`}>
                                <div className="mt-3 lg:w-1/2 pr-2">
                                    <h3>Event Start time</h3>
                                    <div className={`flex items-center rounded-md px-2  ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC] " : "bg-theme_white"}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                            <path opacity="0.35" d="M26.2507 30.4054H9.22201C6.87063 30.4054 4.96484 28.4997 4.96484 26.1483V9.11963H30.5078V26.1483C30.5078 28.4997 28.602 30.4054 26.2507 30.4054Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M26.2507 4.86182H9.22201C6.87063 4.86182 4.96484 6.76761 4.96484 9.11898V10.538H30.5078V9.11898C30.5078 6.76761 28.602 4.86182 26.2507 4.86182Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M16.3171 26.148C16.3171 26.9313 15.6813 27.567 14.898 27.567C14.1147 27.567 13.479 26.9313 13.479 26.148C13.479 25.3646 14.1147 24.7289 14.898 24.7289C15.6813 24.7289 16.3171 25.3646 16.3171 26.148ZM9.22179 24.7289C8.43847 24.7289 7.80273 25.3646 7.80273 26.148C7.80273 26.9313 8.43847 27.567 9.22179 27.567C10.0051 27.567 10.6408 26.9313 10.6408 26.148C10.6408 25.3646 10.0051 24.7289 9.22179 24.7289ZM12.0599 13.3765C9.70852 13.3765 7.80273 15.2823 7.80273 17.6336C7.80273 19.985 9.70852 21.8908 12.0599 21.8908C14.4113 21.8908 16.3171 19.985 16.3171 17.6336C16.3171 15.2823 14.4113 13.3765 12.0599 13.3765ZM23.4123 19.0527C21.061 19.0527 19.1552 20.9585 19.1552 23.3098C19.1552 25.6612 21.061 27.567 23.4123 27.567C25.7637 27.567 27.6695 25.6612 27.6695 23.3098C27.6695 20.9585 25.7637 19.0527 23.4123 19.0527ZM26.2504 13.3765C25.4671 13.3765 24.8314 14.0122 24.8314 14.7955C24.8314 15.5788 25.4671 16.2146 26.2504 16.2146C27.0338 16.2146 27.6695 15.5788 27.6695 14.7955C27.6695 14.0122 27.0338 13.3765 26.2504 13.3765ZM20.5742 13.3765C19.7909 13.3765 19.1552 14.0122 19.1552 14.7955C19.1552 15.5788 19.7909 16.2146 20.5742 16.2146C21.3575 16.2146 21.9933 15.5788 21.9933 14.7955C21.9933 14.0122 21.3575 13.3765 20.5742 13.3765Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        </svg>
                                        <input className={`rounded-md  w-full h-10 p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC] " : "bg-theme_white"}`} type="time" placeholder="Wednesday, 13th April, 2022" />

                                    </div>
                                </div>
                                <div className="mt-3 lg:w-1/2">
                                    <h3>Event End time</h3>
                                    <div className={`flex items-center rounded-md px-2  ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC] " : "bg-theme_white"}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                            <path opacity="0.35" d="M26.2507 30.4054H9.22201C6.87063 30.4054 4.96484 28.4997 4.96484 26.1483V9.11963H30.5078V26.1483C30.5078 28.4997 28.602 30.4054 26.2507 30.4054Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M26.2507 4.86182H9.22201C6.87063 4.86182 4.96484 6.76761 4.96484 9.11898V10.538H30.5078V9.11898C30.5078 6.76761 28.602 4.86182 26.2507 4.86182Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M16.3171 26.148C16.3171 26.9313 15.6813 27.567 14.898 27.567C14.1147 27.567 13.479 26.9313 13.479 26.148C13.479 25.3646 14.1147 24.7289 14.898 24.7289C15.6813 24.7289 16.3171 25.3646 16.3171 26.148ZM9.22179 24.7289C8.43847 24.7289 7.80273 25.3646 7.80273 26.148C7.80273 26.9313 8.43847 27.567 9.22179 27.567C10.0051 27.567 10.6408 26.9313 10.6408 26.148C10.6408 25.3646 10.0051 24.7289 9.22179 24.7289ZM12.0599 13.3765C9.70852 13.3765 7.80273 15.2823 7.80273 17.6336C7.80273 19.985 9.70852 21.8908 12.0599 21.8908C14.4113 21.8908 16.3171 19.985 16.3171 17.6336C16.3171 15.2823 14.4113 13.3765 12.0599 13.3765ZM23.4123 19.0527C21.061 19.0527 19.1552 20.9585 19.1552 23.3098C19.1552 25.6612 21.061 27.567 23.4123 27.567C25.7637 27.567 27.6695 25.6612 27.6695 23.3098C27.6695 20.9585 25.7637 19.0527 23.4123 19.0527ZM26.2504 13.3765C25.4671 13.3765 24.8314 14.0122 24.8314 14.7955C24.8314 15.5788 25.4671 16.2146 26.2504 16.2146C27.0338 16.2146 27.6695 15.5788 27.6695 14.7955C27.6695 14.0122 27.0338 13.3765 26.2504 13.3765ZM20.5742 13.3765C19.7909 13.3765 19.1552 14.0122 19.1552 14.7955C19.1552 15.5788 19.7909 16.2146 20.5742 16.2146C21.3575 16.2146 21.9933 15.5788 21.9933 14.7955C21.9933 14.0122 21.3575 13.3765 20.5742 13.3765Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        </svg>
                                        <input className={`rounded-md  w-full h-10 p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC] " : "bg-theme_white"}`} type="time" placeholder="Wednesday, 13th April, 2022" />

                                    </div>                                </div>
                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-5 `}>
                                <h3>Event Address</h3>
                                <input className={`rounded-md  w-full h-10 p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white"}`} type="email" placeholder="Enter address" />
                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-5 lg:flex`}>
                                <div className="mt-3 lg:w-1/2 pr-2">
                                    <h3>Zip Code</h3>
                                    <input className={`rounded-md border border-theme_red  text-center w-full h-10 p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white"}`} type="number" placeholder="2017" />
                                </div>
                                <div className="mt-3 lg:w-1/2">
                                    <h3>Check User Availability </h3>
                                    <input className={`rounded-md  border border-theme_red text-center w-full h-10 p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white"}`} type="number" placeholder="20" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className={`h-12  font rounded-lg text-lg w-full ${styleMode ? "bg-white text-black" : "bg-black text-white"} `} onClick={() => checkavial()}>
                                    Check User Availability
                                </button>
                                <p className={`text-sm  ${styleMode ? " text-[#C4C4C4]" : " text-light_text"}`}> <span className="text-theme_red">*</span> To use this, Please choose event category, zip code and number of guests.  </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="text-right px-5">
                    <button className={`rounded-md border-2  w-60 text-lg h-12 font-medium ${styleMode ? "border-white text-white" : "border-black  text-black"} `} onClick={() => setEvent(true)}>Preview Event</button>
                </div>
            </div>
            {event ?
                <EventDetails setEvent={setEvent} type="2" />
                :
                null}
            {checkAvaib == 1 ?
                <div className={` ${styleMode ? "bg-white" : " bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "bg-black" : " bg-white"} modal md:w-[450px] w-[320px] h-96  md:p-8 p-4 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out `}>
                        <span className="absolute top-5 right-7 cursor-pointer" onClick={() => setCheckAviab(0)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </span>
                        <div>
                            <div className="cup_gif w-28 h-28"></div>
                            <div className="py-4 text-start mt-6 ">
                                <h3 className={` ${styleMode ? "text-white" : ""} text-2xl font-bold font-plus `}>No users around</h3>
                                <p className={` ${styleMode ? "text-[#BCBCBC]" : "text-[#262626] "} text-lg font-plus font-medium mt-3`} >
                                    Unfortunately, no potential matches currently but get rewarded by referring us to new users.
                                    It’s a win, win.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null}
            {checkAvaib == 2 ?
                <div className={` ${styleMode ? "bg-white" : " bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "bg-black" : " bg-white"} modal md:w-[450px] w-[320px] h-96 md:p-8 p-4 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out `}>
                        <span className="absolute top-5 right-7 cursor-pointer" onClick={() => setCheckAviab(0)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </span>
                        <div>
                            <div className="cup_gif w-28 h-28"></div>
                            <div className="py-4 text-start mt-6 ">
                                <h3 className={` ${styleMode ? "text-white" : ""} text-2xl font-bold font-plus `}>Users around</h3>
                                <p className={` ${styleMode ? "text-[#BCBCBC]" : "text-[#262626] "} text-lg font-plus font-medium mt-3`} >
                                    Potential matches matching your criteria found currently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> :
                null
            }
            {addUser ?
                <div className={` ${styleMode ? "bg-white" : " bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "bg-black" : " bg-white"} modal md:w-[370px] w-[340px] md:p-6 p-3 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out `}>
                        <div className="cup_gif w-20 h-20 mx-auto"></div>
                        <div className="font-plus text-xl font-bold py-3">
                            <h6 className={`${styleMode ? "text-white" : ""} `}>Guest Prices</h6>
                        </div>
                        <ul className={`${styleMode ? "text-white" : ""} `}>
                            <li className="flex justify-between items-center cursor-pointer py-1">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M9.91873 13.8847H37.6887C38.74 13.8847 39.7119 14.1803 40.5688 14.6583C41.0131 13.8252 41.6479 13.0953 42.4473 12.5518L41.8641 10.3203C41.0489 7.19615 37.8553 5.32564 34.7312 6.14089L8.33783 13.0358C5.50529 13.7756 3.72603 16.4693 4.02357 19.2939C4.29928 16.265 6.81643 13.8847 9.91873 13.8847Z" fill={styleMode ? "white" : "black"} />
                                        <path opacity="0.35" d="M43.6391 22.1843V19.8357C43.6391 16.5489 40.9752 13.885 37.6884 13.885H9.91848C6.63171 13.885 3.96777 16.5489 3.96777 19.8357V22.1843C6.27466 23.0035 7.93491 25.1834 7.93491 27.77C7.93491 30.3566 6.27466 32.5365 3.96777 33.3557V35.7043C3.96777 38.991 6.63171 41.655 9.91848 41.655H37.6884C40.9752 41.655 43.6391 38.991 43.6391 35.7043V33.3557C41.3322 32.5365 39.672 30.3566 39.672 27.77C39.672 25.1834 41.3322 23.0035 43.6391 22.1843Z" fill={styleMode ? "white" : "black"} />
                                    </svg>
                                    <span className="text-lg font-bold ">0-5 guests</span>
                                </div>
                                <span className="text-[#F4C755] text-lg font-bold">Free</span>
                            </li>
                            <li className="flex justify-between items-center cursor-pointer py-1">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M9.91873 13.8847H37.6887C38.74 13.8847 39.7119 14.1803 40.5688 14.6583C41.0131 13.8252 41.6479 13.0953 42.4473 12.5518L41.8641 10.3203C41.0489 7.19615 37.8553 5.32564 34.7312 6.14089L8.33783 13.0358C5.50529 13.7756 3.72603 16.4693 4.02357 19.2939C4.29928 16.265 6.81643 13.8847 9.91873 13.8847Z" fill={styleMode ? "white" : "black"} />
                                        <path opacity="0.35" d="M43.6391 22.1843V19.8357C43.6391 16.5489 40.9752 13.885 37.6884 13.885H9.91848C6.63171 13.885 3.96777 16.5489 3.96777 19.8357V22.1843C6.27466 23.0035 7.93491 25.1834 7.93491 27.77C7.93491 30.3566 6.27466 32.5365 3.96777 33.3557V35.7043C3.96777 38.991 6.63171 41.655 9.91848 41.655H37.6884C40.9752 41.655 43.6391 38.991 43.6391 35.7043V33.3557C41.3322 32.5365 39.672 30.3566 39.672 27.77C39.672 25.1834 41.3322 23.0035 43.6391 22.1843Z" fill={styleMode ? "white" : "black"} />
                                    </svg>
                                    <span className="text-lg font-bold ">21-40 guests</span>
                                </div>
                                <span className="text-[#F4C755] text-lg font-bold">$10.61</span>
                            </li>
                            <li className="flex justify-between items-center cursor-pointer py-1">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M9.91873 13.8847H37.6887C38.74 13.8847 39.7119 14.1803 40.5688 14.6583C41.0131 13.8252 41.6479 13.0953 42.4473 12.5518L41.8641 10.3203C41.0489 7.19615 37.8553 5.32564 34.7312 6.14089L8.33783 13.0358C5.50529 13.7756 3.72603 16.4693 4.02357 19.2939C4.29928 16.265 6.81643 13.8847 9.91873 13.8847Z" fill={styleMode ? "white" : "black"} />
                                        <path opacity="0.35" d="M43.6391 22.1843V19.8357C43.6391 16.5489 40.9752 13.885 37.6884 13.885H9.91848C6.63171 13.885 3.96777 16.5489 3.96777 19.8357V22.1843C6.27466 23.0035 7.93491 25.1834 7.93491 27.77C7.93491 30.3566 6.27466 32.5365 3.96777 33.3557V35.7043C3.96777 38.991 6.63171 41.655 9.91848 41.655H37.6884C40.9752 41.655 43.6391 38.991 43.6391 35.7043V33.3557C41.3322 32.5365 39.672 30.3566 39.672 27.77C39.672 25.1834 41.3322 23.0035 43.6391 22.1843Z" fill={styleMode ? "white" : "black"} />
                                    </svg>
                                    <span className="text-lg font-bold ">41-60 guests</span>
                                </div>
                                <span className="text-[#F4C755] text-lg font-bold">$14.15</span>
                            </li>
                            <li className="flex justify-between items-center cursor-pointer py-1">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M9.91873 13.8847H37.6887C38.74 13.8847 39.7119 14.1803 40.5688 14.6583C41.0131 13.8252 41.6479 13.0953 42.4473 12.5518L41.8641 10.3203C41.0489 7.19615 37.8553 5.32564 34.7312 6.14089L8.33783 13.0358C5.50529 13.7756 3.72603 16.4693 4.02357 19.2939C4.29928 16.265 6.81643 13.8847 9.91873 13.8847Z" fill={styleMode ? "white" : "black"} />
                                        <path opacity="0.35" d="M43.6391 22.1843V19.8357C43.6391 16.5489 40.9752 13.885 37.6884 13.885H9.91848C6.63171 13.885 3.96777 16.5489 3.96777 19.8357V22.1843C6.27466 23.0035 7.93491 25.1834 7.93491 27.77C7.93491 30.3566 6.27466 32.5365 3.96777 33.3557V35.7043C3.96777 38.991 6.63171 41.655 9.91848 41.655H37.6884C40.9752 41.655 43.6391 38.991 43.6391 35.7043V33.3557C41.3322 32.5365 39.672 30.3566 39.672 27.77C39.672 25.1834 41.3322 23.0035 43.6391 22.1843Z" fill={styleMode ? "white" : "black"} />
                                    </svg>
                                    <span className="text-lg font-bold ">61-80 guests</span>
                                </div>
                                <span className="text-[#F4C755] text-lg font-bold">$17.69</span>
                            </li>
                            <li className="flex justify-between items-center cursor-pointer py-1">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path d="M9.91873 13.8847H37.6887C38.74 13.8847 39.7119 14.1803 40.5688 14.6583C41.0131 13.8252 41.6479 13.0953 42.4473 12.5518L41.8641 10.3203C41.0489 7.19615 37.8553 5.32564 34.7312 6.14089L8.33783 13.0358C5.50529 13.7756 3.72603 16.4693 4.02357 19.2939C4.29928 16.265 6.81643 13.8847 9.91873 13.8847Z" fill={styleMode ? "white" : "black"} />
                                        <path opacity="0.35" d="M43.6391 22.1843V19.8357C43.6391 16.5489 40.9752 13.885 37.6884 13.885H9.91848C6.63171 13.885 3.96777 16.5489 3.96777 19.8357V22.1843C6.27466 23.0035 7.93491 25.1834 7.93491 27.77C7.93491 30.3566 6.27466 32.5365 3.96777 33.3557V35.7043C3.96777 38.991 6.63171 41.655 9.91848 41.655H37.6884C40.9752 41.655 43.6391 38.991 43.6391 35.7043V33.3557C41.3322 32.5365 39.672 30.3566 39.672 27.77C39.672 25.1834 41.3322 23.0035 43.6391 22.1843Z" fill={styleMode ? "white" : "black"} />
                                    </svg>
                                    <span className="text-lg font-bold ">81-150 guests </span>
                                </div>
                                <span className="text-[#F4C755] text-lg font-bold">$21.23</span>
                            </li>

                        </ul>
                        <span className="absolute top-4 right-4 cursor-pointer" onClick={() => setAddUser(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </span>
                    </div>
                </div> :
                null
            }

        </Dashboardlayout >

    )
}
export default CreateEvent;