import Dashboardlayout from "../../layouts/dashboardlayout";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import AdsDetailsCard from "../../components/adsDetailsCard";
const CreateAdvert = () => {
    const listCat = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [showAd, setShowAd] = useState(false);
    const [succes, setSucces] = useState(false)
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
            <div className="p-2 font-plus">
                <h2 className="text-2xl font-bold">Create Advert</h2>
                <div className="xl:max-w-5xl xl:mx-auto mt-5">
                    <div className="mt-2 bg-white px-6 py-5 rounded-md">
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
                        <span className="text-[#808080] text-sm">(Recommended size 400*400px)</span>
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
                    <div className="mt-3 bg-white px-6 py-5 rounded-md">
                        <div className={`${styleMode ? "text-white" : ""} `}>
                            <h3 className="text-xl">Advert Name</h3>
                            <input className={`rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Add a title" />
                        </div>
                        <div className={`${styleMode ? "text-white" : ""} mt-4 `}>
                            <h3 className="text-xl">Description</h3>
                            <textarea className={`rounded-md  w-full  p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white"}`} rows="8" cols="50" placeholder="More about the event">

                            </textarea>
                        </div>
                        <div className={`${styleMode ? "text-white" : ""} mt-4`}>
                            <h3 className="text-xl">Advert Address</h3>
                            <input className={`rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Enter address" />
                        </div>
                        <div className="flex gap-5">
                            <div className={`${styleMode ? "text-white" : ""} mt-4 w-1/5`}>
                                <h3 className="text-xl">Ad Start time</h3>
                                <div className="relative">
                                    <input className={`pl-12 rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="time" placeholder="Enter address" />
                                    <span className="absolute top-1/2 left-1 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 46" fill="none">
                                            <path d="M10.082 13.625C6.97516 13.625 4.45703 16.1431 4.45703 19.25V26.75C4.45703 29.8569 6.97516 32.375 10.082 32.375H17.582V13.625H10.082Z" fill="black" />
                                            <path opacity="0.35" d="M37.7683 4.53305C36.362 3.94992 34.7552 4.27242 33.6808 5.3468C31.3783 7.64742 23.9983 13.623 17.582 13.623C15.512 13.623 13.832 15.303 13.832 17.373V28.6231C13.832 30.6931 15.512 32.3731 17.582 32.3731C23.957 32.3731 31.367 38.3505 33.6808 40.6493C34.3989 41.3674 35.3552 41.7481 36.332 41.7481C36.8158 41.7481 37.3033 41.6543 37.7683 41.4631C39.1689 40.8818 40.082 39.5149 40.082 37.9981V7.99805C40.082 6.48117 39.1689 5.1143 37.7683 4.53305Z" fill="black" />
                                            <path d="M17.582 24.875H10.082C10.082 24.875 11.957 38.6075 11.957 38.9375C11.957 40.49 13.217 41.75 14.7695 41.75C16.322 41.75 17.582 40.49 17.582 38.9375C17.582 38.6075 17.582 24.875 17.582 24.875Z" fill="black" />
                                            <path d="M40.082 17.7188V28.2806C42.2627 27.5063 43.832 25.4456 43.832 23.0006C43.832 20.5556 42.2627 18.4931 40.082 17.7188Z" fill="black" />
                                        </svg>
                                    </span>
                                </div>

                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-4 w-1/5`}>
                                <h3 className="text-xl">Zip Code</h3>
                                <div className="relative">
                                    <select className={`pl-12 rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`}>
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
                                            <path opacity="0.35" d="M8.21484 19.25C8.21484 10.9662 14.9311 4.25 23.2148 4.25C31.4986 4.25 38.2148 10.9662 38.2148 19.25C38.2148 25.9325 30.5948 35.4725 26.2167 40.4C24.6211 42.1963 21.8086 42.1963 20.213 40.4C15.8348 35.4725 8.21484 25.9325 8.21484 19.25Z" fill="black" />
                                            <path d="M23.2148 24.875C26.3214 24.875 28.8398 22.3566 28.8398 19.25C28.8398 16.1434 26.3214 13.625 23.2148 13.625C20.1082 13.625 17.5898 16.1434 17.5898 19.25C17.5898 22.3566 20.1082 24.875 23.2148 24.875Z" fill="black" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className={`${styleMode ? "text-white" : ""} mt-4 flex-1`}>
                                <h3 className="text-xl">Date</h3>
                                <div className="relative">
                                    <input className={`pl-12 rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="date" placeholder="Enter address" />
                                    <span className="absolute top-1/2 left-1 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 46" fill="none">
                                            <path opacity="0.35" d="M34.457 39.875H11.957C8.85016 39.875 6.33203 37.3569 6.33203 34.25V13.625H40.082V34.25C40.082 37.3569 37.5639 39.875 34.457 39.875Z" fill="black" />
                                            <path d="M34.457 6.125H11.957C8.85016 6.125 6.33203 8.64313 6.33203 11.75V13.625H40.082V11.75C40.082 8.64313 37.5639 6.125 34.457 6.125Z" fill="black" />
                                            <path d="M26.957 36.125C27.9926 36.125 28.832 35.2855 28.832 34.25C28.832 33.2145 27.9926 32.375 26.957 32.375C25.9215 32.375 25.082 33.2145 25.082 34.25C25.082 35.2855 25.9215 36.125 26.957 36.125Z" fill="black" />
                                            <path d="M19.457 36.125C20.4926 36.125 21.332 35.2855 21.332 34.25C21.332 33.2145 20.4926 32.375 19.457 32.375C18.4215 32.375 17.582 33.2145 17.582 34.25C17.582 35.2855 18.4215 36.125 19.457 36.125Z" fill="black" />
                                            <path d="M11.957 36.125C12.9926 36.125 13.832 35.2855 13.832 34.25C13.832 33.2145 12.9926 32.375 11.957 32.375C10.9215 32.375 10.082 33.2145 10.082 34.25C10.082 35.2855 10.9215 36.125 11.957 36.125Z" fill="black" />
                                            <path d="M11.957 28.625C12.9926 28.625 13.832 27.7855 13.832 26.75C13.832 25.7145 12.9926 24.875 11.957 24.875C10.9215 24.875 10.082 25.7145 10.082 26.75C10.082 27.7855 10.9215 28.625 11.957 28.625Z" fill="black" />
                                            <path d="M19.457 28.625C20.4926 28.625 21.332 27.7855 21.332 26.75C21.332 25.7145 20.4926 24.875 19.457 24.875C18.4215 24.875 17.582 25.7145 17.582 26.75C17.582 27.7855 18.4215 28.625 19.457 28.625Z" fill="black" />
                                            <path d="M26.957 28.625C27.9926 28.625 28.832 27.7855 28.832 26.75C28.832 25.7145 27.9926 24.875 26.957 24.875C25.9215 24.875 25.082 25.7145 25.082 26.75C25.082 27.7855 25.9215 28.625 26.957 28.625Z" fill="black" />
                                            <path d="M34.4551 28.625C35.4906 28.625 36.3301 27.7855 36.3301 26.75C36.3301 25.7145 35.4906 24.875 34.4551 24.875C33.4195 24.875 32.5801 25.7145 32.5801 26.75C32.5801 27.7855 33.4195 28.625 34.4551 28.625Z" fill="black" />
                                            <path d="M34.4551 21.125C35.4906 21.125 36.3301 20.2855 36.3301 19.25C36.3301 18.2145 35.4906 17.375 34.4551 17.375C33.4195 17.375 32.5801 18.2145 32.5801 19.25C32.5801 20.2855 33.4195 21.125 34.4551 21.125Z" fill="black" />
                                            <path d="M26.957 21.125C27.9926 21.125 28.832 20.2855 28.832 19.25C28.832 18.2145 27.9926 17.375 26.957 17.375C25.9215 17.375 25.082 18.2145 25.082 19.25C25.082 20.2855 25.9215 21.125 26.957 21.125Z" fill="black" />
                                            <path d="M19.457 21.125C20.4926 21.125 21.332 20.2855 21.332 19.25C21.332 18.2145 20.4926 17.375 19.457 17.375C18.4215 17.375 17.582 18.2145 17.582 19.25C17.582 20.2855 18.4215 21.125 19.457 21.125Z" fill="black" />
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
                    <div className="mt-3 bg-white px-6 py-5 rounded-md">
                        <div className="flex gap-5">
                            <div className="md:w-1/2">
                                <h3 className="text-xl">Add Target  Reach</h3>
                                <div className="mt-3 flex gap-3">
                                    <div className="w-2/5 bg-[#F1F1F1] h-11 rounded-md flex items-center justify-center">
                                        300
                                    </div>
                                    <div className="flex-1 bg-black text-white h-11 rounded-md flex items-center justify-center">
                                        Check Now
                                    </div>


                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-xl">Potential Reach</h3>
                                <div className="mt-3 px-5">
                                    <button className="h-12 w-64 rounded-md" className="h-11 bg-[#F4C755] text-white w-full rounded-md ">
                                        30000
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5 gap-3">
                            <div className="w-1/2">
                                <h3 className="text-xl">Call to Action</h3>
                                <select className="h-11 w-full mt-1 bg-[#F1F1F1] custom_input text-center px-3 rounded-lg">
                                    <option >
                                        Select
                                    </option>
                                    <option>
                                        option 1
                                    </option>
                                    <option>
                                        option 2
                                    </option>
                                    <option>
                                        option 3
                                    </option>
                                    <option>
                                        option 4
                                    </option>
                                    <option>
                                        option 5
                                    </option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl">Call to Action Link</h3>
                                <input className={` rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Enter link" />

                            </div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-xl">Bottom Link Text</h3>
                            <input className={` rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Enter text" />
                        </div>
                        <div className="mt-5 text-start text-xl font-plus ">
                            <p className="flex items-center "> Price per Audience Reach
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" fill="none">
                                    <path d="M32 40C30.898 40 30 39.104 30 38V24C30 21.79 28.21 20 26 20H16C14.896 20 14 20.896 14 22C14 23.104 14.884 24 16 24C17.116 24 18 24.896 18 26V38C18 39.104 17.13 40 16 40C14.87 40 14 40.896 14 42C14 43.104 14.896 44 16 44H32C33.104 44 34 43.104 34 42C34 40.896 33.102 40 32 40Z" fill="black" />
                                    <path opacity="0.35" d="M24 16C27.3137 16 30 13.3137 30 10C30 6.68629 27.3137 4 24 4C20.6863 4 18 6.68629 18 10C18 13.3137 20.6863 16 24 16Z" fill="black" />
                                </svg></p>
                            <p className="mt-3"> Purchase advert in oder to go live</p>
                        </div>
                        <div className="mt-3">
                            <button className="h-11 w-52 text-white bg-black rounded-lg text-lg "> Buy </button>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-between xl:px-10 px-2 mb-4">
                        <button className="h-12 w-64 rounded-md border-2 border-black font-medium" onClick={() => setShowAd(true)}>
                            Preview Advert
                        </button>
                        <button className="h-12 w-64 rounded-md Create Advert border-2 border-[#808080] bg-[#808080] text-white" onClick={()=>setSucces(true)}>
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
        </Dashboardlayout>
    )
}
export default CreateAdvert;