import { useSelector } from "react-redux";
const ChatCard = () => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={` ${styleMode ? "bg-black border border-#6B6B6B" : "bg-white"}  rounded-lg p-3 mt-2`}>
            <div className="flex items-center justify-between">
                <div className={` flex gap-2  ${styleMode ? "text-[#BCBCBC]" : "text-dark"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 24 25" fill="none">
                        <path opacity="0.35" d="M22.38 12.7851C22.234 12.5571 21.976 12.4301 21.711 12.4491C21.615 12.4561 19.945 12.5881 18.216 12.8481C19.578 10.2911 20.033 5.98405 20.054 5.78105C20.086 5.46605 19.922 5.16505 19.642 5.02805C19.365 4.89105 19.031 4.94805 18.81 5.17005C18.678 5.30305 16.234 7.77906 14.415 10.1341C14.163 6.45106 13.032 2.72005 12.565 2.21305C12.413 2.04705 12.212 1.95605 12 1.95605C11.797 1.95605 11.572 2.06105 11.433 2.21305C10.93 2.76305 10.018 6.72406 9.814 10.1761C7.528 7.32205 4.762 5.20705 4.622 5.10105C4.384 4.91905 4.06 4.90405 3.806 5.06205C3.551 5.22005 3.415 5.52005 3.462 5.82105C3.49 6.00005 4.122 9.91306 6.003 12.8841C4.177 12.5991 2.388 12.4561 2.289 12.4481C2.009 12.4271 1.75 12.5641 1.607 12.8051C1.464 13.0461 1.464 13.3481 1.609 13.5881C1.683 13.7101 3.321 16.3841 5.998 17.4611C5.409 17.9671 4.788 18.6201 4.157 19.4021L4.116 19.4521C3.965 19.6321 3.907 19.8751 3.959 20.1061C4.01 20.3371 4.167 20.5301 4.379 20.6251C4.532 20.6941 5.444 20.9561 6.706 20.9561C7.104 20.9561 7.536 20.9301 7.991 20.8641C8.999 20.7171 11.177 19.7731 12 19.3451C12.035 19.3271 15.319 20.7261 16.266 20.8641C18.229 21.1501 19.529 20.6621 19.584 20.6411C19.803 20.5571 19.97 20.3701 20.032 20.1381C20.094 19.9071 20.044 19.6591 19.898 19.4721C19.85 19.4111 19.056 18.4011 18.071 17.5341C20.86 16.5001 22.35 13.6731 22.416 13.5471C22.539 13.3051 22.526 13.0131 22.38 12.7851Z" fill={` ${styleMode ? "white" : "black"}`} />
                        <path d="M12 19.3439C11.812 19.4419 11.548 19.5679 11.248 19.7039C11.119 21.5059 10.545 22.0469 10.48 22.1009C10.032 22.3729 9.86804 22.9509 10.115 23.4209C10.294 23.7619 10.642 23.9559 11.001 23.9559C11.158 23.9559 11.317 23.9189 11.466 23.8409C11.743 23.6949 13.032 22.8499 13.244 19.8309C12.549 19.5569 12.014 19.3369 12 19.3439Z" fill={` ${styleMode ? "white" : "black"}`} />
                    </svg>
                    <span >Cannabis</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                    <path opacity="0.35" d="M12.9856 14.9561C14.0902 14.9561 14.9856 14.0606 14.9856 12.9561C14.9856 11.8515 14.0902 10.9561 12.9856 10.9561C11.881 10.9561 10.9856 11.8515 10.9856 12.9561C10.9856 14.0606 11.881 14.9561 12.9856 14.9561Z" fill={` ${styleMode ? "white" : "black"}`} />
                    <path d="M12.9856 7.95605C14.0902 7.95605 14.9856 7.06062 14.9856 5.95605C14.9856 4.85149 14.0902 3.95605 12.9856 3.95605C11.881 3.95605 10.9856 4.85149 10.9856 5.95605C10.9856 7.06062 11.881 7.95605 12.9856 7.95605Z" fill={` ${styleMode ? "white" : "black"}`} />
                    <path d="M12.9856 21.9561C14.0902 21.9561 14.9856 21.0606 14.9856 19.9561C14.9856 18.8515 14.0902 17.9561 12.9856 17.9561C11.881 17.9561 10.9856 18.8515 10.9856 19.9561C10.9856 21.0606 11.881 21.9561 12.9856 21.9561Z" fill={` ${styleMode ? "white" : "black"}`} />
                </svg>
            </div>
            <div className="flex py-1 justify-between">
                <div className="">
                    <h4 className={`text-lg font-bold ${styleMode ? "text-white" : ""} `}>Getting High</h4>
                    <p className="text-sm text-theme_blue">Hosted by Alkesh Kumar</p>
                    <span className={`text-sm  ${styleMode ? "text-[#BCBCBC]" : "text-light_text"}  `}>8th Oct, 2022</span>
                </div>
                <div className=" text-right">
                    <p className={`${styleMode ? "text-[#BCBCBC]" : "text-dark"}  text-sm `}>4 days left to rate & review</p>
                    <div className={` w-full ${styleMode ? "bg-#BCBCBC" : "bg-gray-200"}  rounded-full  p-0.5 `}>
                        <div className="bg-theme h-1.5 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <span className={` ${styleMode ? "text-white" : "text-light_text"} text-sm`}>Scanned list: 13</span>
                </div>
            </div>
            <button className={`${styleMode ? "bg-white text-black" : "bg-black text-white "}  w-20 text-sm font-medium py-0.5 mt-2 rounded-md `}> Chat </button>
        </div>
    )
}
export default ChatCard;