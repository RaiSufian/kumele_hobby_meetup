import { useSelector } from "react-redux";
import { useState } from 'react';
import NotiDetailsCard from "../notiDetailCard";
const NotiCard = () => {
    const [noteDete, setNoteDete] = useState("");
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <>

            <div className={` ${styleMode ? "border-[#6B6B6B] hover:bg-[#262626]" : "border-light_border hover:bg-[#F0F0F0]"} border  rounded-md px-3 py-4 font-plus cursor-pointer relative group `} onClick={() => setNoteDete(true)}>
                <div className="gap-2 flex items-center">
                    <img src="/img/notiicon.png" alt="img_profile" className="w-16 h-16 object-contain" />
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <h3 className={` ${styleMode ? "text-white" : ""} text-lg`}>Holiday</h3>
                        </div>
                        <p className={`  ${styleMode ? "text-[#BCBCBC]" : "text-dark"} text-sm mt-1`}>23 August, 2022, 12:40</p>
                    </div>

                </div>
                <div className="absolute bottom-2 right-2 hidden group-hover:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 26 28" fill="none">
                        <g clip-path="url(#clip0_416_10701)">
                            <path opacity="0.35" d="M19.2103 27.5091H5.87695C3.66762 27.5091 1.87695 25.7184 1.87695 23.5091V6.17578H23.2103V23.5091C23.2103 25.7184 21.4196 27.5091 19.2103 27.5091Z" fill={`${styleMode ? "white" : "black"}  `} />
                            <path d="M17.8757 3.51042H7.20898V2.17708C7.20898 1.44108 7.80632 0.84375 8.54232 0.84375H16.5423C17.2783 0.84375 17.8757 1.44108 17.8757 2.17708V3.51042Z" fill={`${styleMode ? "white" : "black"}  `} />
                            <path d="M21.8763 2.17578C21.075 2.17578 4.01097 2.17578 3.20964 2.17578C1.7363 2.17578 0.542969 3.36911 0.542969 4.84245C0.542969 6.31578 1.7363 7.50911 3.20964 7.50911C4.01097 7.50911 21.075 7.50911 21.8763 7.50911C23.3496 7.50911 24.543 6.31578 24.543 4.84245C24.543 3.36911 23.3496 2.17578 21.8763 2.17578Z" fill={`${styleMode ? "white" : "black"}  `} />
                        </g>
                        <defs>
                            <clipPath id="clip0_416_10701">
                                <rect width="25" height="28" fill="white" transform="translate(0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            {noteDete ? <NotiDetailsCard setNoteDete={setNoteDete} /> : null}
        </>
    )
}
export default NotiCard;