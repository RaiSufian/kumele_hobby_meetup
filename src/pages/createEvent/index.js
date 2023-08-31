import Dashboardlayout from "../../layouts/dashboardlayout";
import React, { useState } from 'react';
const CreateEvent = () => {
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
    return (
        <Dashboardlayout>
            <div className="mx-4 mb-4 pb-4 layout_bg rounded-lg font-plus">
                <div className="px-5 py-4 bg-white border-b border-light_border rounded-t-lg">
                    <h2 className=" text-xl font-bold">Create event</h2>
                </div>
                <div className="my-4 mx-4 bg-white rounded-lg p-4">
                    <div className="flex">
                        <div className="w-1/2 px-2">
                            <div >
                                <h3>Event Category</h3>
                                <div className="flex flex-wrap">
                                    <div className="w-16 h-16 cursor-pointer py-1 border rounded-lg border-light_border text-center m-1 cat_card hover:bg-theme" >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill="black" />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill="black" />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill="black" />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill="black" />
                                            </svg>
                                        </span>

                                        <span className="font-plus text-dark pt-1 text-xs">Sprituality</span>
                                    </div>
                                    <div className="w-16 h-16 cursor-pointer py-1 border rounded-lg border-light_border text-center m-1 cat_card hover:bg-theme" >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill="black" />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill="black" />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill="black" />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill="black" />
                                            </svg>
                                        </span>

                                        <span className="font-plus text-dark pt-1 text-xs">Sprituality</span>
                                    </div>
                                    <div className="w-16 h-16 cursor-pointer py-1 border rounded-lg border-light_border text-center m-1 cat_card hover:bg-theme" >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill="black" />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill="black" />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill="black" />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill="black" />
                                            </svg>
                                        </span>

                                        <span className="font-plus text-dark pt-1 text-xs">Sprituality</span>
                                    </div>
                                    <div className="w-16 h-16 cursor-pointer py-1 border rounded-lg border-light_border text-center m-1 cat_card hover:bg-theme" >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill="black" />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill="black" />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill="black" />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill="black" />
                                            </svg>
                                        </span>

                                        <span className="font-plus text-dark pt-1 text-xs">Sprituality</span>
                                    </div>
                                    <div className="w-16 h-16 cursor-pointer py-1 border rounded-lg border-light_border text-center m-1 cat_card hover:bg-theme" >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill="black" />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill="black" />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill="black" />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill="black" />
                                            </svg>
                                        </span>

                                        <span className="font-plus text-dark pt-1 text-xs">Sprituality</span>
                                    </div>
                                    <div className="w-16 h-16 cursor-pointer py-1 border rounded-lg border-light_border text-center m-1 cat_card hover:bg-theme" >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill="black" />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill="black" />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill="black" />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill="black" />
                                            </svg>
                                        </span>

                                        <span className="font-plus text-dark pt-1 text-xs">Sprituality</span>
                                    </div>
                                    <div className="w-16 h-16 cursor-pointer py-1 border rounded-lg border-light_border text-center m-1 cat_card hover:bg-theme" >
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill="black" />
                                                <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill="black" />
                                                <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill="black" />
                                                <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill="black" />
                                            </svg>
                                        </span>

                                        <span className="font-plus text-dark pt-1 text-xs">Sprituality</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h3>Event Image</h3>

                                <div className="cursor-pointer w-full h-48 border border-[#BCBCBC] rounded-lg flex items-center justify-center">
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
                            <div className="mt-2">
                                <h3>Age range</h3>
                                <div className="w-full mx-auto mt-4">
                                    <div className="mt-2">
                                        <span>{sliderValue}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={sliderValue}
                                        onChange={handleSliderChange}
                                        className="slider"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <h3 className="flex items-center gap-1">Number of guests
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 25" fill="none">
                                        <path d="M16 20.7108C15.449 20.7108 15 20.2628 15 19.7108V12.7108C15 11.6058 14.105 10.7108 13 10.7108H8C7.448 10.7108 7 11.1588 7 11.7108C7 12.2628 7.442 12.7108 8 12.7108C8.558 12.7108 9 13.1588 9 13.7108V19.7108C9 20.2628 8.565 20.7108 8 20.7108C7.435 20.7108 7 21.1588 7 21.7108C7 22.2628 7.448 22.7108 8 22.7108H16C16.552 22.7108 17 22.2628 17 21.7108C17 21.1588 16.551 20.7108 16 20.7108Z" fill="black" />
                                        <path opacity="0.35" d="M12 8.71082C13.6569 8.71082 15 7.36767 15 5.71082C15 4.05396 13.6569 2.71082 12 2.71082C10.3431 2.71082 9 4.05396 9 5.71082C9 7.36767 10.3431 8.71082 12 8.71082Z" fill="#A6A6A6" />
                                    </svg></span>
                                </h3>
                                <div className="flex mt-1">
                                    <div className="rounded-lg w-1/2 flex px-3">
                                        <input type="number" placeholder="81-150" className="text-center h-8 rounded-l-lg w-1/2 border border-[#F4F4F4] border-r-0" />
                                        <button className="text-center h-8 w-1/2 bg-[#F4C755] text-lg rounded-r-lg">
                                            Pay
                                        </button>
                                    </div>
                                    <button className="h-8 w-1/2 bg-[#F4F4F4] rounded-lg border border-[#F00] text-light_text">
                                        100
                                    </button>
                                </div>
                                <p className="text-xs text-[#4D4D4D] mt-1"><span className="text-[#F00]">*</span> Max 150 Guests</p>
                            </div>
                            <div className="mt-2 flex ">
                                <div className="w-1/2 pr-3">
                                    <h3>Paid Event</h3>
                                    <div className="flex gap-2 items-center">
                                        <button className="h-8 flex-1 bg-[#F1F1F1] rounded-lg">0$</button>
                                        <button
                                            onClick={handleToggle1}
                                            className={`w-12 h-6 rounded-full relative ${isOn1 ? 'bg-black' : 'bg-gray-300'
                                                } transition-colors`}
                                        >
                                            <span className={`block w-4 h-4 rounded-full transform transition-transform absolute top-1/2 -translate-y-1/2 ${isOn1 ? 'left-1' : ''} ${!isOn1 ? 'right-1' : ''} ${isOn1 ? 'bg-white' : 'bg-gray-500'}`} />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-1/2 pr-3">
                                    <h3>Pay in Cash</h3>
                                    <div className="flex gap-2 items-center">
                                        <button className="h-8 flex-1 bg-[#F4C755] rounded-lg">8$</button>
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
                        <div className="w-1/2  px-2">
                            <div>
                                <h3>Event Name</h3>
                                <input className="rounded-md bg-[#F1F1F1] w-full h-10 p-2 custom_input mt-1" type="text" placeholder="Add a title" />
                            </div>
                            <div className="mt-3">
                                <h3>Description</h3>
                                <textarea className="rounded-md bg-[#F1F1F1] w-full  p-2 custom_input mt-1" rows="4" cols="50">>

                                </textarea>
                            </div>
                            <div className="mt-3">
                                <h3>Event starts in</h3>
                                <div className="flex gap-2 mt-1">
                                    <button className="bg-theme rounded-md h-8 px-4 text-white text-sm"> 24 Hrs</button>
                                    <div className="flex ">
                                        <button className="h-8 rounded-l-md border border-r-0 px-3">- </button>
                                        <button className="h-8 rounded-r-md border border-l-0 px-3">+ </button>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h3>Date</h3>
                                <input className="rounded-md bg-[#F1F1F1] w-full h-10 p-2 custom_input mt-1" type="date" placeholder="Wednesday, 13th April, 2022" />
                            </div>
                            <div className="flex">
                                <div className="mt-3 w-1/2 pr-2">
                                    <h3>Event Start time</h3>
                                    <input className="rounded-md bg-[#F1F1F1] w-full h-10 p-2 custom_input mt-1" type="time" placeholder="Wednesday, 13th April, 2022" />
                                </div>
                                <div className="mt-3 w-1/2">
                                    <h3>Event End time</h3>
                                    <input className="rounded-md bg-[#F1F1F1] w-full h-10 p-2 custom_input mt-1" type="time" placeholder="Wednesday, 13th April, 2022" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3>Event Address</h3>
                                <input className="rounded-md bg-[#F1F1F1] w-full h-10 p-2 custom_input mt-1" type="email" placeholder="Enter address" />
                            </div>
                            <div className="flex">
                                <div className="mt-3 w-1/2 pr-2">
                                    <h3>Zip Code</h3>
                                    <input className="rounded-md bg-[#F1F1F1] border border-[#F00]  text-center w-full h-10 p-2 custom_input mt-1" type="number" placeholder="2017" />
                                </div>
                                <div className="mt-3 w-1/2">
                                    <h3>Check User Availability </h3>
                                    <input className="rounded-md bg-[#F1F1F1] border border-[#f00] text-center w-full h-10 p-2 custom_input mt-1" type="number" placeholder="20" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <button className="h-12 bg-black text-white font rounded-lg text-lg w-full">
                                    Check User Availability
                                </button>
                                <p className="text-sm text-[#4D4D4D]"> <span className="text-[#f00]">*</span> To use this, Please choose event category, zip code and number of guests.  </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="text-right px-5">
                    <button className="rounded-md border-2 border-black h-12 text-black w-60 text-lg font-medium">Preview Event</button>
                </div>
            </div>
        </Dashboardlayout >

    )
}
export default CreateEvent;