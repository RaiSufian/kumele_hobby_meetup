import { useSelector } from "react-redux";
import AdsDetailsCard from "../adsDetailsCard";
import { useState } from "react";

const AdvertCard = () => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [showAd, setShowAd] = useState(false);
    console.log("current event status is", showAd);
    return (
        <>

            <div className={` ${styleMode ? "border-[#6B6B6B] hover:bg-[#262626]" : "border-light_border hover:bg-[#F0F0F0]"} border  rounded-md px-3 py-4 font-plus cursor-pointer relative group `} onClick={() => setShowAd(true)}>
                <div className="gap-2 flex items-center">
                    <img src="/img/client.png" alt="img_profile" className="w-16 h-16" />
                    <div className="flex-1">
                        <div className="flex justify-between items-center">
                            <h3 className={` ${styleMode ? "text-white" : ""} text-lg`}>Special Offer</h3>
                            <p className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 45 44" fill="none">
                                    <path d="M26.1333 18.477C25.6668 18.477 25.2003 18.2984 24.8449 17.943C24.1324 17.2305 24.1324 16.0788 24.8449 15.3663L26.1333 14.0779C26.8222 13.3891 27.737 13.01 28.7101 13.01H29.7779C29.7779 11 31.4126 9.36538 33.4226 9.36538V7.54307C33.4226 5.53305 35.0572 3.89844 37.0672 3.89844H38.8895C39.8954 3.89844 40.7118 4.71301 40.7118 5.72075C40.7118 6.72849 39.8954 7.54307 38.8895 7.54307H37.0672V9.36538C37.0672 11.3754 35.4326 13.01 33.4226 13.01C33.4226 15.02 31.788 16.6546 29.7779 16.6546H28.7101L27.4217 17.943C27.0663 18.2984 26.5998 18.477 26.1333 18.477Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    <path opacity="0.35" d="M27.4004 29.9664L14.6442 17.2102C13.9317 16.4976 12.78 16.4976 12.0674 17.2102C11.4478 17.8298 11.4005 18.7701 11.8615 19.4771L6.26154 34.8356C5.46336 37.0242 7.58636 39.1472 9.77496 38.349L25.1353 32.7491C25.4359 32.9459 25.7676 33.0771 26.1138 33.0771C26.5804 33.0771 27.0469 32.8985 27.4022 32.5431C28.1111 31.8324 28.1111 30.6789 27.4004 29.9664Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    <path d="M32.5108 40.3459C34.0205 40.3459 35.2443 39.122 35.2443 37.6124C35.2443 36.1027 34.0205 34.8789 32.5108 34.8789C31.0012 34.8789 29.7773 36.1027 29.7773 37.6124C29.7773 39.122 31.0012 40.3459 32.5108 40.3459Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    <path d="M39.8018 20.299C41.3115 20.299 42.5353 19.0752 42.5353 17.5655C42.5353 16.0558 41.3115 14.832 39.8018 14.832C38.2922 14.832 37.0684 16.0558 37.0684 17.5655C37.0684 19.0752 38.2922 20.299 39.8018 20.299Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    <path d="M6.9991 16.6544C8.50875 16.6544 9.73257 15.4306 9.73257 13.921C9.73257 12.4113 8.50875 11.1875 6.9991 11.1875C5.48944 11.1875 4.26562 12.4113 4.26562 13.921C4.26562 15.4306 5.48944 16.6544 6.9991 16.6544Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    <path d="M27.044 7.54116C28.5537 7.54116 29.7775 6.31735 29.7775 4.80769C29.7775 3.29804 28.5537 2.07422 27.044 2.07422C25.5344 2.07422 24.3105 3.29804 24.3105 4.80769C24.3105 6.31735 25.5344 7.54116 27.044 7.54116Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    <path d="M12.4641 3.89844C10.9552 3.89844 9.73242 5.12303 9.73242 6.63191C9.73242 8.14079 10.957 9.36538 12.4659 9.36538H13.9037C15.6258 9.36538 17.0217 10.7613 17.0217 12.4834V14.8323C17.0217 15.8382 17.8381 16.6546 18.844 16.6546C19.8499 16.6546 20.6663 15.8382 20.6663 14.8323V11.1877C20.6663 7.1622 17.4025 3.89844 13.3771 3.89844H12.4641Z" fill={`${styleMode ? "white" : "black"}  `} />
                                    <path d="M40.7113 30.3233C40.7113 31.8322 39.4867 33.055 37.9778 33.055C36.4689 33.055 35.2443 31.8304 35.2443 30.3215V28.8837C35.2443 27.1616 33.8484 25.7657 32.1264 25.7657H29.7774C28.7715 25.7657 27.9551 24.9493 27.9551 23.9434C27.9551 22.9375 28.7715 22.1211 29.7774 22.1211H33.422C37.4475 22.1211 40.7113 25.3849 40.7113 29.4104V30.3233Z" fill={`${styleMode ? "white" : "black"}  `} />
                                </svg>
                                <span className={` ${styleMode ? "text-[#BCBCBC]" : "text-dark"}  `}>House Party</span>
                            </p>
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
            {showAd ? <AdsDetailsCard setShowAd={setShowAd} /> : null}
        </>
    )
}
export default AdvertCard;