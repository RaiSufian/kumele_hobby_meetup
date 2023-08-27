const Chatbox = () => {
    return (
        <div className="bg-white rounded-lg font-plus">
            <div className="flex justify-between items-center py-2 px-5 border-b border-[#EEECEC]">
                <div className="flex gap-7 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
                        <path opacity="0.35" d="M15.3159 21.03C16.1531 20.1929 24.4788 11.8672 25.3159 11.03C26.9902 9.35575 26.9902 6.64289 25.3159 4.9686C23.6416 3.29432 20.9288 3.29432 19.2545 4.9686C18.4174 5.80575 10.0916 14.1315 9.25449 14.9686C7.58021 16.6429 7.58021 19.3557 9.25449 21.03C10.9288 22.7043 13.6431 22.7043 15.3159 21.03Z" fill="black" />
                        <path d="M9.25596 21.03C10.0931 21.8672 18.4188 30.1929 19.256 31.03C20.9302 32.7043 23.6431 32.7043 25.3174 31.03C26.9917 29.3557 26.9917 26.6429 25.3174 24.9686C24.4802 24.1315 16.1545 15.8057 15.3174 14.9686C13.6431 13.2943 10.9302 13.2943 9.25596 14.9686C7.58167 16.6429 7.58167 19.3572 9.25596 21.03Z" fill="black" />
                    </svg>
                    <div className="">
                        <h5 className="font-bold text-lg font-plus">Group Meditation</h5>
                        <span className="text-sm text-[#262626]">93 guests</span>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                        <path opacity="0.35" d="M30 5H10C7.23833 5 5 7.23833 5 10V30C5 32.7617 7.23833 35 10 35H30C32.7617 35 35 32.7617 35 30V10C35 7.23833 32.7617 5 30 5Z" fill="black" />
                        <path d="M35.0002 25H28.3335V28.3333H35.0002V25Z" fill="black" />
                        <path d="M31.6668 18.3333V15H28.3335V18.3333V21.6667H31.6668H35.0002V18.3333H31.6668Z" fill="black" />
                        <path d="M28.3335 24.9998V21.6665H25.0002V24.9998H28.3335Z" fill="black" />
                        <path d="M28.3335 14.9998V11.6665H25.0002V14.9998H28.3335Z" fill="black" />
                        <path d="M35 14.9998V11.6665H31.6667V14.9998H35Z" fill="black" />
                        <path d="M30 5V8.33333H31.6667V11.6667H35V10C35 7.23833 32.7617 5 30 5Z" fill="black" />
                        <path d="M25 18.3333V15H21.6667V18.3333H25Z" fill="black" />
                        <path d="M21.6665 14.9998V11.6665H18.3332V14.9998H21.6665Z" fill="black" />
                        <path d="M25 28.3333V25H21.6667V28.3333H25Z" fill="black" />
                        <path d="M21.6665 21.6668V18.3335H18.3332V21.6668H21.6665Z" fill="black" />
                        <path d="M18.3335 18.3333V15H15.0002V18.3333H18.3335Z" fill="black" />
                        <path d="M15 14.9998V11.6665H11.6667V14.9998H15Z" fill="black" />
                        <path d="M26.6665 5H18.3332H14.9998H11.6665V8.33333H14.9998V11.6667H18.3332V8.33333H26.6665V5Z" fill="black" />
                        <path d="M28.3333 31.6666V28.3333H25V31.6666H18.3333V21.6666H15V25H11.6667V28.3333H15V31.6666H11.6667V28.3333H8.33333V21.6666H11.6667V15H8.33333V11.6666H11.6667V8.33331H8.33333V5.30664C6.395 5.99497 5 7.82664 5 9.99997V30C5 31.1316 5.385 32.1666 6.02167 33C6.035 33.0166 6.05 33.0316 6.06167 33.0483C6.19167 33.2133 6.32667 33.375 6.47667 33.5233C6.625 33.6733 6.78667 33.8083 6.95167 33.9383C6.96833 33.9516 6.98333 33.9666 7 33.9783C7.83333 34.615 8.86833 35 10 35H30C32.1733 35 34.005 33.605 34.6933 31.6666H28.3333Z" fill="black" />
                    </svg>
                </div>
            </div>
            <div className="h-80 px-3 flex flex-col justify-end">
                <div className="flex items-center justify-center w-full">
                    <span className="text-sm px-5 py-1 bg-[#F4F4F4] rounded-xl">Today</span>
                </div>
                <div className="flex items-center justify-end w-full">
                    <span className="text-sm p-2 rounded-br-none rounded-xl bg-theme">
                        <div className="flex justify-between text-xs">
                            <span > Steve Austin</span>
                            <span>22:54</span>
                        </div>
                        <p className="">Hello spritual gangsters :)</p>
                    </span>
                </div>
                <div className="flex items-center justify-start w-full">
                    <span className="text-sm p-2 rounded-bl-none rounded-xl bg-[#EEECEC]">
                        <div className="flex justify-between text-xs">
                            <span > Steve Austin</span>
                            <span>22:54</span>
                        </div>
                        <p className="">Hello spritual gangsters :)</p>
                    </span>
                </div>
            </div>
            <div className="p-2">
                <div className="h-11 bg-[#F4F4F4] flex items-center justify-around px-3 gap-2">
                    <input type="text" className="flex-1 custom_input bg-[#F4F4F4] text-sm" placeholder="Type a message" />
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none" className="cursor-pointer">
                            <path opacity="0.35" d="M26.2213 13.3413C25.8517 13.3413 22.9682 13.3413 19.5741 13.3413C19.5741 9.9472 19.5741 7.06363 19.5741 6.69405C19.5741 5.22501 18.3842 4.03516 16.9152 4.03516C15.4462 4.03516 14.2563 5.22501 14.2563 6.69405C14.2563 7.06363 14.2563 9.9472 14.2563 13.3413C10.8622 13.3413 7.97867 13.3413 7.60909 13.3413C6.14005 13.3413 4.9502 14.5311 4.9502 16.0002C4.9502 17.4692 6.14005 18.6591 7.60909 18.6591C7.87498 18.6591 25.9554 18.6591 26.2213 18.6591C27.6904 18.6591 28.8802 17.4692 28.8802 16.0002C28.8802 14.5311 27.6904 13.3413 26.2213 13.3413Z" fill="black" />
                            <path d="M16.9152 27.9653C18.3843 27.9653 19.5741 26.7754 19.5741 25.3064C19.5741 24.9368 19.5741 22.0533 19.5741 18.6592H14.2563C14.2563 22.0533 14.2563 24.9368 14.2563 25.3064C14.2563 26.7754 15.4462 27.9653 16.9152 27.9653Z" fill="black" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none" className="cursor-pointer">
                            <path opacity="0.35" d="M26.0815 4.03516H7.4693C5.2664 4.03516 3.48096 5.8206 3.48096 8.02349V25.3063V26.4071C3.48096 28.7283 6.10528 30.079 7.99443 28.7296L11.7461 26.0495C12.4228 25.5655 13.2338 25.3063 14.0647 25.3063H26.0815C28.2844 25.3063 30.0699 23.5208 30.0699 21.318V8.02349C30.0699 5.8206 28.2844 4.03516 26.0815 4.03516Z" fill="black" />
                            <path d="M18.105 18.219V11.1225C18.105 10.3195 19.0529 9.89406 19.6538 10.4258L23.6528 13.9741C24.0702 14.3437 24.0702 14.9965 23.6528 15.3661L19.6538 18.9144C19.0529 19.4488 18.105 19.022 18.105 18.219Z" fill="black" />
                            <path d="M19.4345 16.6651H12.1226C11.0218 16.6651 10.1284 15.7717 10.1284 14.6709C10.1284 13.5701 11.0218 12.6768 12.1226 12.6768H19.4345V16.6651Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chatbox;