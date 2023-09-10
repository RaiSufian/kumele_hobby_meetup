import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Addpayment = ({ setPayModal }) => {
    const [payment, setPayment] = useState(false);
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <>
            {payment ?
                <div className={` w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${styleMode ? "bg-white" : "bg-black"} `}>
                    <div className={` ${styleMode ? "bg-black" : "bg-white"} modal  sm:p-10 p-6 rounded-3xl relative`}>
                        <div className="sm:w-72 w-60">
                            <div className="w-52 h-52 login_gif mx-auto">

                            </div>
                            <p className={` ${styleMode ? "text-white" : ""} text-3xl font-bold text-center mt-5`}>Payment successful</p>
                        </div>
                        <div className="absolute top-9 right-9" onClick={() => setPayModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27306C32.6781 9.66506 27.6101 14.7351 24.0001 18.3451C20.3901 14.7351 15.3221 9.66706 14.9281 9.27306C13.3661 7.71106 10.8341 7.71106 9.27209 9.27306C7.71009 10.8351 7.71009 13.3671 9.27209 14.9291C9.66409 15.3231 14.7341 20.3911 18.3441 24.0011C14.7341 27.6111 9.66609 32.6791 9.27209 33.0731C7.71009 34.6351 7.71009 37.1671 9.27209 38.7291C10.8341 40.2911 13.3661 40.2911 14.9281 38.7291C15.2121 38.4451 38.4441 15.2131 38.7281 14.9291C40.2901 13.3671 40.2901 10.8351 38.7281 9.27306C37.1661 7.71106 34.6341 7.71106 33.0721 9.27306Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </div>
                    </div>
                </div>
                :
                <div className={` w-full  h-screen bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${styleMode ? "bg-white" : "bg-black"}`}>
                    <div className={`modal sm:w-[480px] w-[360px]  py-12 sm:px-8 px-4 rounded-xl relative text-center animate-fadeIn duration-1000 ease-in-out  ${styleMode ? "bg-black" : "bg-white"}`}>
                        <div className="flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 42 42" fill="none" onClick={() => setPayModal(false)}>
                                <path opacity="0.35" d="M17.7791 24.636C18.7837 23.6315 28.7745 13.6406 29.7791 12.636C31.7883 10.6269 31.7883 7.37147 29.7791 5.36233C27.77 3.35318 24.5145 3.35318 22.5054 5.36233C21.5008 6.3669 11.51 16.3578 10.5054 17.3623C8.49625 19.3715 8.49625 22.6269 10.5054 24.636C12.5145 26.6452 15.7717 26.6452 17.7791 24.636Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M10.5069 24.636C11.5114 25.6406 21.5023 35.6315 22.5069 36.636C24.516 38.6452 27.7714 38.6452 29.7806 36.636C31.7897 34.6269 31.7897 31.3715 29.7806 29.3623C28.776 28.3578 18.7851 18.3669 17.7806 17.3623C15.7714 15.3532 12.516 15.3532 10.5069 17.3623C8.49771 19.3715 8.49771 22.6286 10.5069 24.636Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                            <h3 className={` ${styleMode ? "text-white" : ""} text-xl font-plus font-bold`}>Payment</h3>
                            <div></div>
                        </div>
                        <div className="text-start py-4">
                            <h2 className={` ${styleMode ? "text-white" : ""} text-lg font-plus`}>Amount to pay</h2>
                            <span className="text-2xl font-plus font-bold text-theme_blue">$23.07</span>
                        </div>
                        <div className={` ${styleMode ? "text-white bg-[#454545] border-[#6B6B6B]" : "border-light_border text-text_dark"} rounded-sm border border-light_border   event_shadow`}>
                            <div className="flex items-start gap-3 px-4 py-2">
                                <input type="radio" name="paypal" className="mt-1 w-4 h-4" />
                                <div className="flex-1 flex items-center justify-between">
                                    <div className="">
                                        <span className="">•••• •••• •••• 4634</span>
                                        <p className="">Expires 12-08-23</p>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 65 39" fill="none">
                                        <path d="M19.0166 38.8873C29.3484 38.8873 37.724 30.4029 37.724 19.9368C37.724 9.47075 29.3484 0.986328 19.0166 0.986328C8.68471 0.986328 0.309082 9.47075 0.309082 19.9368C0.309082 30.4029 8.68471 38.8873 19.0166 38.8873Z" fill="#EA001B" />
                                        <path d="M45.7412 38.8873C56.073 38.8873 64.4487 30.4029 64.4487 19.9368C64.4487 9.47075 56.073 0.986328 45.7412 0.986328C35.4093 0.986328 27.0337 9.47075 27.0337 19.9368C27.0337 30.4029 35.4093 38.8873 45.7412 38.8873Z" fill="#FFA200" fill-opacity="0.8" />
                                    </svg>
                                </div>
                            </div>
                            <div className={` ${styleMode ? "border-[#6B6B6B]" : "border-light_border"} border-t  `}>
                                <div className="py-2 flex justify-between px-4">
                                    <span className="">Pay with Crypto</span>
                                    <Link to="" className="text-theme_blue font-bold"> Crypto</Link>
                                </div>
                            </div>

                        </div>
                        <div className="mt-4">
                            <button className={` ${styleMode ? "border-white text-white " : " border-black "} border  rounded-xl py-2 w-full flex items-center gap-2 justify-center `}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36" fill="none">
                                    <path d="M27.8312 16.9853H19.0849V8.23898C19.0849 7.85236 18.9313 7.48158 18.6579 7.20821C18.3845 6.93483 18.0138 6.78125 17.6271 6.78125C17.2405 6.78125 16.8697 6.93483 16.5964 7.20821C16.323 7.48158 16.1694 7.85236 16.1694 8.23898V16.9853H7.42306C7.03645 16.9853 6.66567 17.1389 6.39229 17.4123C6.11891 17.6857 5.96533 18.0564 5.96533 18.4431C5.96533 18.8297 6.11891 19.2004 6.39229 19.4738C6.66567 19.7472 7.03645 19.9008 7.42306 19.9008H16.1694V28.6471C16.1694 29.0338 16.323 29.4045 16.5964 29.6779C16.8697 29.9513 17.2405 30.1049 17.6271 30.1049C18.0138 30.1049 18.3845 29.9513 18.6579 29.6779C18.9313 29.4045 19.0849 29.0338 19.0849 28.6471V19.9008H27.8312C28.2178 19.9008 28.5886 19.7472 28.862 19.4738C29.1354 19.2004 29.2889 18.8297 29.2889 18.4431C29.2889 18.0564 29.1354 17.6857 28.862 17.4123C28.5886 17.1389 28.2178 16.9853 27.8312 16.9853Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                Add new card
                            </button>
                        </div>
                        <div className="mt-6 text-end">
                            <button className={`${styleMode ? " bg-white text-black" : " bg-black text-white"} py-2 rounded-lg w-32 `} onClick={() => setPayment(true)}>Pay now</button>
                        </div>
                    </div>
                </div>}
        </>
    )
}
export default Addpayment;