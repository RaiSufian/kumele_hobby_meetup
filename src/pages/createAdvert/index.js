import Dashboardlayout from "../../layouts/dashboardlayout";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import AdsDetailsCard from "../../components/adsDetailsCard";
import Addpayment from "../../components/addpayment";
const CreateAdvert = () => {
    const listCat = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [showAd, setShowAd] = useState(false);
    const [succes, setSucces] = useState(false);
    const [priceNote, setPriceNote] = useState(false);
    const [payModal, setPayModal] = useState(false);
    // Add user age values
    function valuetext(value) {
        return `${value}°C`;
    }
    const [value, setValue] = useState([18, 28]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Add user age values
    function valuetext1(value) {
        return `${value}°C`;
    }
    const [value1, setValue1] = useState([18, 28]);

    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    };
    return (
        <Dashboardlayout>
            <div className={`xl:p-5 font-plus ${styleMode ? "bg-black text-white" : ""} rounded-md mx-2`}>
                <h2 className="text-2xl font-bold">Create Advert</h2>
                <div className="xl:max-w-4xl xl:mx-auto mt-5">
                    <div className={`mt-2  py-2 lg:py-4 sm:px-4 px-1 xl:px-14 rounded-md ${styleMode ? "bg-[#454545]" : "bg-white"} `}>
                        <h3 className="text-xl">Advert Category</h3>
                        <div className="flex flex-wrap mt-2">
                            {listCat.map((value, index) => {
                                return (
                                    <div className={` w-16 h-16 lg:w-20 lg:h-20 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} key={index}>
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
                                )
                            })}
                        </div>
                        <h3 className="text-xl">Advert Image</h3>
                        <span className={` text-sm ${styleMode ? "text-[#BCBCBC]" : "text-[#808080]"}`}>(Recommended size 400*400px)</span>
                        <div className={` ${styleMode ? "border-[#BCBCBC]" : "border-theme_border  "} cursor-pointer w-full h-64 border border-dashed  rounded-lg flex items-center justify-center mt-2  `} >
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
                    <div className={`mt-3  px-6 py-5 rounded-md ${styleMode ? "bg-[#454545]" : "bg-white"}`}>
                        <div className={`${styleMode ? "text-white" : ""} `}>
                            <h3 className="text-xl">Advert Name</h3>
                            <input className={`rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Add a title" />
                        </div>
                        <div className={`${styleMode ? "text-white" : ""} mt-4 `}>
                            <h3 className="text-xl">Description</h3>
                            <textarea className={`rounded-md  w-full  p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white"}`} rows="8" cols="50" placeholder="More about the event">

                            </textarea>
                        </div>
                        <div className={`${styleMode ? "text-white" : ""} mt-4`}>
                            <h3 className="text-xl">Advert Address</h3>
                            <input className={`rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Enter address" />
                        </div>
                        <div className="flex gap-5 flex-wrap">
                            <div className={`${styleMode ? "text-white" : ""} mt-4 md:w-1/5 w-2/5`}>
                                <h3 className="text-xl">Ad Start time</h3>
                                <div className="relative">
                                    <input className={`pl-12 rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white "}`} type="time" placeholder="Enter address" />
                                    <span className="absolute top-1/2 left-1 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 46" fill="none">
                                            <path d="M10.082 13.625C6.97516 13.625 4.45703 16.1431 4.45703 19.25V26.75C4.45703 29.8569 6.97516 32.375 10.082 32.375H17.582V13.625H10.082Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path opacity="0.35" d="M37.7683 4.53305C36.362 3.94992 34.7552 4.27242 33.6808 5.3468C31.3783 7.64742 23.9983 13.623 17.582 13.623C15.512 13.623 13.832 15.303 13.832 17.373V28.6231C13.832 30.6931 15.512 32.3731 17.582 32.3731C23.957 32.3731 31.367 38.3505 33.6808 40.6493C34.3989 41.3674 35.3552 41.7481 36.332 41.7481C36.8158 41.7481 37.3033 41.6543 37.7683 41.4631C39.1689 40.8818 40.082 39.5149 40.082 37.9981V7.99805C40.082 6.48117 39.1689 5.1143 37.7683 4.53305Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M17.582 24.875H10.082C10.082 24.875 11.957 38.6075 11.957 38.9375C11.957 40.49 13.217 41.75 14.7695 41.75C16.322 41.75 17.582 40.49 17.582 38.9375C17.582 38.6075 17.582 24.875 17.582 24.875Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M40.082 17.7188V28.2806C42.2627 27.5063 43.832 25.4456 43.832 23.0006C43.832 20.5556 42.2627 18.4931 40.082 17.7188Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        </svg>
                                    </span>
                                </div>

                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-4 md:w-1/5 w-2/5`}>
                                <h3 className="text-xl">Zip Code</h3>
                                <div className="relative">
                                    <select className={`pl-12 rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white "}`}>
                                        <option className="bg-white py-2">
                                            5020
                                        </option>
                                        <option className="bg-white py-2">
                                            5021
                                        </option>
                                        <option className="bg-white py-2">
                                            5021
                                        </option>
                                        <option className="bg-white py-2">
                                            5022
                                        </option>
                                        <option className="bg-white py-2">
                                            5023
                                        </option>
                                        <option className="bg-white py-2">
                                            5024
                                        </option>
                                    </select>
                                    <span className="absolute top-1/2 left-1 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 46 46" fill="none">
                                            <path opacity="0.35" d="M8.21484 19.25C8.21484 10.9662 14.9311 4.25 23.2148 4.25C31.4986 4.25 38.2148 10.9662 38.2148 19.25C38.2148 25.9325 30.5948 35.4725 26.2167 40.4C24.6211 42.1963 21.8086 42.1963 20.213 40.4C15.8348 35.4725 8.21484 25.9325 8.21484 19.25Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M23.2148 24.875C26.3214 24.875 28.8398 22.3566 28.8398 19.25C28.8398 16.1434 26.3214 13.625 23.2148 13.625C20.1082 13.625 17.5898 16.1434 17.5898 19.25C17.5898 22.3566 20.1082 24.875 23.2148 24.875Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-4 flex-1`}>
                                <h3 className="text-xl">Date</h3>
                                <div className="relative">
                                    <input className={`pl-12 rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] input_dark text-[#BCBCBC]" : "bg-theme_white "}`} type="date" placeholder="Enter address" />
                                    <span className="absolute top-1/2 left-1 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 46" fill="none">
                                            <path opacity="0.35" d="M34.457 39.875H11.957C8.85016 39.875 6.33203 37.3569 6.33203 34.25V13.625H40.082V34.25C40.082 37.3569 37.5639 39.875 34.457 39.875Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M34.457 6.125H11.957C8.85016 6.125 6.33203 8.64313 6.33203 11.75V13.625H40.082V11.75C40.082 8.64313 37.5639 6.125 34.457 6.125Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M26.957 36.125C27.9926 36.125 28.832 35.2855 28.832 34.25C28.832 33.2145 27.9926 32.375 26.957 32.375C25.9215 32.375 25.082 33.2145 25.082 34.25C25.082 35.2855 25.9215 36.125 26.957 36.125Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M19.457 36.125C20.4926 36.125 21.332 35.2855 21.332 34.25C21.332 33.2145 20.4926 32.375 19.457 32.375C18.4215 32.375 17.582 33.2145 17.582 34.25C17.582 35.2855 18.4215 36.125 19.457 36.125Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M11.957 36.125C12.9926 36.125 13.832 35.2855 13.832 34.25C13.832 33.2145 12.9926 32.375 11.957 32.375C10.9215 32.375 10.082 33.2145 10.082 34.25C10.082 35.2855 10.9215 36.125 11.957 36.125Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M11.957 28.625C12.9926 28.625 13.832 27.7855 13.832 26.75C13.832 25.7145 12.9926 24.875 11.957 24.875C10.9215 24.875 10.082 25.7145 10.082 26.75C10.082 27.7855 10.9215 28.625 11.957 28.625Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M19.457 28.625C20.4926 28.625 21.332 27.7855 21.332 26.75C21.332 25.7145 20.4926 24.875 19.457 24.875C18.4215 24.875 17.582 25.7145 17.582 26.75C17.582 27.7855 18.4215 28.625 19.457 28.625Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M26.957 28.625C27.9926 28.625 28.832 27.7855 28.832 26.75C28.832 25.7145 27.9926 24.875 26.957 24.875C25.9215 24.875 25.082 25.7145 25.082 26.75C25.082 27.7855 25.9215 28.625 26.957 28.625Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M34.4551 28.625C35.4906 28.625 36.3301 27.7855 36.3301 26.75C36.3301 25.7145 35.4906 24.875 34.4551 24.875C33.4195 24.875 32.5801 25.7145 32.5801 26.75C32.5801 27.7855 33.4195 28.625 34.4551 28.625Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M34.4551 21.125C35.4906 21.125 36.3301 20.2855 36.3301 19.25C36.3301 18.2145 35.4906 17.375 34.4551 17.375C33.4195 17.375 32.5801 18.2145 32.5801 19.25C32.5801 20.2855 33.4195 21.125 34.4551 21.125Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M26.957 21.125C27.9926 21.125 28.832 20.2855 28.832 19.25C28.832 18.2145 27.9926 17.375 26.957 17.375C25.9215 17.375 25.082 18.2145 25.082 19.25C25.082 20.2855 25.9215 21.125 26.957 21.125Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            <path d="M19.457 21.125C20.4926 21.125 21.332 20.2855 21.332 19.25C21.332 18.2145 20.4926 17.375 19.457 17.375C18.4215 17.375 17.582 18.2145 17.582 19.25C17.582 20.2855 18.4215 21.125 19.457 21.125Z" fill={`${styleMode ? "white" : "black"}  `} />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className={` ${styleMode ? "text-white" : ""} mt-5 `}>
                            <h3 className="text-xl">Age range</h3>
                            <div className="w-full px-5 mt-4">
                                <Box >
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
                            <h3 className="text-xl">Distance range in <span className="text-red-600"> km</span></h3>
                            <div className="w-full px-5 mt-4">
                                <Box >
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={value1}
                                        onChange={handleChange1}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={valuetext1}
                                        aria-label="Always visible"
                                        min={1}  // Minimum value
                                        max={100} // Maximum value
                                        className="w-1/2"
                                    />
                                </Box>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className={` text-sm  ${styleMode ? "text-[white]" : "text-[#545454]"}`}> <span className="text-red-600">*  </span>Distance range in Km. Keep ranges within <span className="text-red-600"> 100 </span>km for best results.</p>
                        </div>
                    </div>
                    <div className={`mt-3  px-6 py-5 rounded-md ${styleMode ? "bg-[#454545]" : "bg-white"}`}>
                        <div className="flex gap-5 md:flex-nowrap flex-wrap">
                            <div className="md:w-1/2 w-full">
                                <h3 className="text-xl">Add Target  Reach</h3>
                                <div className="mt-3 flex gap-3 flex-wrap">
                                    <div className={`w-2/5   h-11 rounded-md flex items-center justify-center ${styleMode ? "bg-[#242424] text-[#808080]" : "bg-[#F1F1F1]"} `}>
                                        300
                                    </div>
                                    <div className={`flex-1  h-11 rounded-md flex items-center text-lg justify-center ${styleMode ? "bg-white text-black" : "bg-black text-white"}`}>
                                        Check Now
                                    </div>


                                </div>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <h3 className="text-xl">Potential Reach</h3>
                                <div className="mt-3 px-5">
                                    <button className={`h-11  bg-[#F4C755]  w-full rounded-md ${styleMode ? "text-black" : "text-white"}`}>
                                        30000
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5 gap-3">
                            <div className="w-1/2">
                                <h3 className="text-xl">Call to Action</h3>
                                <select className={`h-11 w-full text-lg mt-1 custom_input input_dark text-center px-3 rounded-lg ${styleMode ? "bg-[#242424] text-white" : "bg-[#F1F1F1] "}`}>
                                    <option className={` ${styleMode ? "bg-black" : "bg-white"}  font-semibold py-1`} >
                                        Select
                                    </option>
                                    <option className={` ${styleMode ? "bg-black" : "bg-white"}  font-semibold py-1`}>
                                        Buy now
                                    </option>
                                    <option className={` ${styleMode ? "bg-black" : "bg-white"}  font-semibold py-1`}>
                                        Learn more
                                    </option>
                                    <option className={` ${styleMode ? "bg-black" : "bg-white"}  font-semibold py-1`}>
                                        Install now
                                    </option>
                                    <option className={` ${styleMode ? "bg-black" : "bg-white"}  font-semibold py-1`}>
                                        Subscribe
                                    </option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl">Call to Action Link</h3>
                                <input className={` rounded-md w-full h-10 p-2 custom_input mt-1 input_dark  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Enter link" />

                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl">Bottom Link Text</h3>
                            <input className={` rounded-md w-full h-10 p-2 custom_input mt-1 input_dark  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Enter text" />
                        </div>
                        <div className="mt-5 text-start text-xl font-plus ">
                            <p className="flex items-center cursor-pointer" onClick={() => setPriceNote(true)}> Price per Audience Reach
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" fill="none">
                                    <path d="M32 40C30.898 40 30 39.104 30 38V24C30 21.79 28.21 20 26 20H16C14.896 20 14 20.896 14 22C14 23.104 14.884 24 16 24C17.116 24 18 24.896 18 26V38C18 39.104 17.13 40 16 40C14.87 40 14 40.896 14 42C14 43.104 14.896 44 16 44H32C33.104 44 34 43.104 34 42C34 40.896 33.102 40 32 40Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    <path opacity="0.35" d="M24 16C27.3137 16 30 13.3137 30 10C30 6.68629 27.3137 4 24 4C20.6863 4 18 6.68629 18 10C18 13.3137 20.6863 16 24 16Z" fill={`${styleMode ? "white" : "black"}  `} />
                                </svg></p>
                            <p className="mt-3"> Purchase advert in oder to go live</p>
                        </div>
                        <div className="mt-3">
                            <button className={`h-11 w-52  rounded-lg text-lg ${styleMode ? "text-black bg-white" : "text-white bg-black"} `} onClick={() => setPayModal(true)}> Buy </button>
                        </div>
                    </div>

                    <div className={`rounded-b-md mt-5 flex justify-between xl:px-10 py-4 px-2 mb-4 ${styleMode ? "bg-[#454545]" : ""}`} >
                        <button className={`md:h-12 h-10 md:w-64 w-40  rounded-md border-2  font-medium ${styleMode ? "border-white" : "border-black"} `} onClick={() => setShowAd(true)}>
                            Preview Advert
                        </button>
                        <button className={`md:h-12 h-10 md:w-64  w-40 rounded-md Create Advert border-2  ${styleMode ? "bg-[#A2A2A2] border-[#A2A2A2] text-black" : "border-[#808080] bg-[#808080] text-white"} `} onClick={() => setSucces(true)}>
                            Create Advert
                        </button>
                    </div>

                </div>
            </div>
            {showAd ? <AdsDetailsCard setShowAd={setShowAd} /> : ""}
            {succes ? <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                <div className={` ${styleMode ? "bg-black" : "bg-white "} modal p-10 rounded-3xl relative `} >
                    <div className="md:w-72 w-60">
                        <div className="md:w-52 w-40 md:h-52 h-40 login_gif mx-auto">

                        </div>
                        <p className={` ${styleMode ? "text-white" : ""} text-4xl font-bold text-center mt-5 `}>Advert Created</p>
                    </div>
                    <div className="absolute top-4 right-4" onClick={() => setSucces(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48" fill="none">
                            <path opacity="0.35" d="M33.0721 9.27306C32.6781 9.66506 27.6101 14.7351 24.0001 18.3451C20.3901 14.7351 15.3221 9.66706 14.9281 9.27306C13.3661 7.71106 10.8341 7.71106 9.27209 9.27306C7.71009 10.8351 7.71009 13.3671 9.27209 14.9291C9.66409 15.3231 14.7341 20.3911 18.3441 24.0011C14.7341 27.6111 9.66609 32.6791 9.27209 33.0731C7.71009 34.6351 7.71009 37.1671 9.27209 38.7291C10.8341 40.2911 13.3661 40.2911 14.9281 38.7291C15.2121 38.4451 38.4441 15.2131 38.7281 14.9291C40.2901 13.3671 40.2901 10.8351 38.7281 9.27306C37.1661 7.71106 34.6341 7.71106 33.0721 9.27306Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg>
                    </div>
                </div>
            </div> : null}
            {priceNote ?
                <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "bg-black" : "bg-white "} modal p-10 rounded-3xl relative `} >
                        <div className="md:w-96 w-60 font-plus">
                            <div className="w-28 h-28 cup_gif ">

                            </div>
                            <div className="mt-2">
                                <h3 className="font-bold text-2xl">Prices for Audience Reach</h3>
                                <div className="text-[#444] mt-1">
                                    <p>Our prices are based on two options:</p>
                                    <ul className="pl-2">
                                        <li className="flex items-center">
                                            Option1:  35 &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                                <path opacity="0.35" d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                <path d="M18.9049 17.7655C18.9049 13.513 14.2112 14.0942 14.2112 11.878C14.2112 10.573 15.2374 10.4355 15.5924 10.4355C15.9424 10.4355 16.2524 10.5192 16.5149 10.6367C17.1324 10.9155 17.8637 10.6567 18.2549 10.1042C18.7562 9.39547 18.4974 8.39922 17.7062 8.04172C17.2724 7.84672 16.7312 7.68922 16.0749 7.62672V7.00922C16.0749 6.44047 15.6137 5.98047 15.0462 5.98047C14.4787 5.98047 14.0174 6.44172 14.0174 7.00922V7.84422C12.2937 8.41797 11.1737 9.99422 11.1737 12.0117C11.1737 16.4742 15.8099 15.668 15.8099 17.988C15.8099 18.4342 15.5987 19.408 14.4487 19.408C13.9374 19.408 13.4962 19.2642 13.1374 19.0755C12.5274 18.7567 11.7712 18.9917 11.3824 19.5605L11.3412 19.6205C10.8924 20.2767 11.0737 21.1967 11.7649 21.5892C12.3462 21.9192 13.0574 22.1755 13.9149 22.2655V22.988C13.9149 23.5567 14.3762 24.0167 14.9437 24.0167C15.5124 24.0167 15.9724 23.5555 15.9724 22.988V22.0805C17.8774 21.498 18.9049 19.7605 18.9049 17.7655Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            </svg>&nbsp;  for 60 user reach
                                        </li>
                                        <li className="flex items-center">
                                            Option2: 70       &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                                <path opacity="0.35" d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                <path d="M18.9049 17.7655C18.9049 13.513 14.2112 14.0942 14.2112 11.878C14.2112 10.573 15.2374 10.4355 15.5924 10.4355C15.9424 10.4355 16.2524 10.5192 16.5149 10.6367C17.1324 10.9155 17.8637 10.6567 18.2549 10.1042C18.7562 9.39547 18.4974 8.39922 17.7062 8.04172C17.2724 7.84672 16.7312 7.68922 16.0749 7.62672V7.00922C16.0749 6.44047 15.6137 5.98047 15.0462 5.98047C14.4787 5.98047 14.0174 6.44172 14.0174 7.00922V7.84422C12.2937 8.41797 11.1737 9.99422 11.1737 12.0117C11.1737 16.4742 15.8099 15.668 15.8099 17.988C15.8099 18.4342 15.5987 19.408 14.4487 19.408C13.9374 19.408 13.4962 19.2642 13.1374 19.0755C12.5274 18.7567 11.7712 18.9917 11.3824 19.5605L11.3412 19.6205C10.8924 20.2767 11.0737 21.1967 11.7649 21.5892C12.3462 21.9192 13.0574 22.1755 13.9149 22.2655V22.988C13.9149 23.5567 14.3762 24.0167 14.9437 24.0167C15.5124 24.0167 15.9724 23.5555 15.9724 22.988V22.0805C17.8774 21.498 18.9049 19.7605 18.9049 17.7655Z" fill={`${styleMode ? "white" : "black"}  `} />
                                            </svg>&nbsp;   for 150 user reach
                                        </li>
                                    </ul>
                                    <ul className="mt-3 list-disc pl-4">
                                        <li>
                                            Choose either options then click the - or + button that best matches your total reach
                                        </li>
                                        <li>
                                            Please pay attention to the potential reach based on your criteria and click buy.
                                        </li>
                                        <li>
                                            Preview your Advert then click “Create Advert” to publish
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <span className="absolute top-5 right-5 cursor-pointer" onClick={() => setPriceNote(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0731 9.27306C32.6791 9.66506 27.6111 14.7351 24.0011 18.3451C20.3911 14.7351 15.3231 9.66706 14.9291 9.27306C13.3671 7.71106 10.8351 7.71106 9.27306 9.27306C7.71106 10.8351 7.71106 13.3671 9.27306 14.9291C9.66506 15.3231 14.7351 20.3911 18.3451 24.0011C14.7351 27.6111 9.66706 32.6791 9.27306 33.0731C7.71106 34.6351 7.71106 37.1671 9.27306 38.7291C10.8351 40.2911 13.3671 40.2911 14.9291 38.7291C15.2131 38.4451 38.4451 15.2131 38.7291 14.9291C40.2911 13.3671 40.2911 10.8351 38.7291 9.27306C37.1671 7.71106 34.6351 7.71106 33.0731 9.27306Z" fill={`${styleMode ? "white" : "black"}  `} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={`${styleMode ? "white" : "black"}  `} />
                            </svg>
                        </span>
                    </div>
                </div> : null
            }
            {payModal ? <Addpayment setPayModal={setPayModal} /> : null}
        </Dashboardlayout >
    )
}
export default CreateAdvert;