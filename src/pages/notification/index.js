import Dashboardlayout from "../../layouts/dashboardlayout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Notification = () => {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <Dashboardlayout>
            <div className={`  px-2 py-2 w-full `}>
                <div className={`${styleMode ? "bg-black rounded-md" : ""} `}>
                    <div className={` flex items-center gap-10 px-4 py-5 border-b   ${styleMode ? "border-[#6B6B6B]" : ""}`}>
                        <Link to="/dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 42 42" fill="none">
                                <path opacity="0.35" d="M17.7791 24.636C18.7837 23.6315 28.7745 13.6406 29.7791 12.636C31.7883 10.6269 31.7883 7.37147 29.7791 5.36233C27.77 3.35318 24.5145 3.35318 22.5054 5.36233C21.5008 6.3669 11.51 16.3578 10.5054 17.3623C8.49625 19.3715 8.49625 22.6269 10.5054 24.636C12.5145 26.6452 15.7717 26.6452 17.7791 24.636Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M10.5069 24.636C11.5114 25.6406 21.5023 35.6315 22.5069 36.636C24.516 38.6452 27.7714 38.6452 29.7806 36.636C31.7897 34.6269 31.7897 31.3715 29.7806 29.3623C28.776 28.3578 18.7851 18.3669 17.7806 17.3623C15.7714 15.3532 12.516 15.3532 10.5069 17.3623C8.49771 19.3715 8.49771 22.6286 10.5069 24.636Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </Link>

                        <h2 className={` md:text-2xl text-xl font-bold font-plus ${styleMode ? "text-white" : ""} `}>Notifications</h2>
                    </div>
                    <div className="md:mt-7 mt-3 p-4">
                        <ul className=" flex flex-wrap ">
                            {list.map((value, index) => {
                                return (
                                    <li className="flex gap-3 py-2 xl:w-1/2 lg:w-1/2 mt-5 relative box-border pr-4" key={index}>
                                        <img src="/img/profileSub.png" alt="profile_img" className="w-16 h-16" />
                                        <div className=" text-start relative">
                                            <div className="flex justify-between">
                                                <h6 className={`text-md font-plus font-semibold ${styleMode ? "text-white" : ""}`}>Karaoke Evening</h6>
                                                <span className="text-theme_blue text-sm font-plus font-semibold">12:33 PM</span>
                                            </div>

                                            <div className="flex items-center py-1">
                                                <span className={`bg-black h-7 px-3 flex items-center rounded-l-3xl ${styleMode ? "border border-white border-r-0" : ""}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <g clip-path="url(#clip0_243_10765)">
                                                            <path opacity="0.35" d="M15.2593 15.2589L17.181 13.893L17.4493 6.92303C17.481 6.21803 17.031 5.58803 16.3568 5.3797C15.7685 5.19803 15.046 5.02637 14.4235 5.02637C13.8151 5.02637 13.1126 5.19053 12.5326 5.3672C11.8368 5.57887 11.3843 6.2447 11.4443 6.96887L11.9185 12.1847C11.9185 12.1839 14.986 15.4114 15.2593 15.2589Z" fill="white" />
                                                            <path opacity="0.35" d="M8.999 11.038C9.1965 10.443 9.23067 9.77467 9.0415 9.0805C8.72734 7.92967 7.76817 7.013 6.604 6.75217C4.42734 6.2655 2.49984 7.90717 2.49984 9.99967C2.49984 10.348 2.55484 10.6838 2.65484 10.9988C2.81484 11.5005 2.7265 12.0522 2.40484 12.4688C1.9415 13.0697 1.6665 13.7955 1.6665 14.583C1.6665 16.6538 3.53234 18.333 5.83317 18.333C8.134 18.333 9.99984 16.6538 9.99984 14.583C9.99984 13.7963 9.72567 13.0705 9.26234 12.4705C8.94984 12.0647 8.83734 11.5247 8.999 11.038Z" fill="white" />
                                                            <path d="M5 1.66699V10.0003H6.66667V1.66699H5Z" fill="white" />
                                                            <path d="M6.32898 4.16667H5.33731C4.90898 4.16667 4.55064 3.8425 4.50814 3.41667L4.25814 0.916667C4.20898 0.425833 4.59398 0 5.08731 0H6.57898C7.07231 0 7.45731 0.425833 7.40814 0.916667L7.15814 3.41667C7.11564 3.8425 6.75731 4.16667 6.32898 4.16667Z" fill="white" />
                                                            <path d="M6.6665 15.8337H4.99984C4.53984 15.8337 4.1665 15.4603 4.1665 15.0003C4.1665 14.5403 4.53984 14.167 4.99984 14.167H6.6665C7.1265 14.167 7.49984 14.5403 7.49984 15.0003C7.49984 15.4603 7.1265 15.8337 6.6665 15.8337Z" fill="white" />
                                                            <path d="M16.8509 17.7104C16.7809 18.0721 16.4643 18.3337 16.0959 18.3337H15.1926C14.7676 18.3337 14.4234 17.9896 14.4234 17.5646C13.8543 17.8879 12.6384 18.3337 12.1159 18.3337C11.5893 18.3337 9.97759 18.3337 9.80842 18.3337C9.29509 18.3337 8.82342 18.2121 8.44258 18.0654C7.86758 17.8446 7.50342 17.2754 7.50342 16.6596V16.6487C7.50342 16.2837 7.50008 16.0254 8.58008 16.0812C9.14425 16.1104 12.1159 15.2562 12.0234 13.4029L11.9184 12.1846C12.7801 12.1846 13.4384 12.5254 13.6543 12.9479C13.9026 13.4321 13.7993 14.4879 15.1918 14.4879C16.1467 14.4879 17.1801 13.8929 17.1801 13.8929C17.2717 14.1221 17.4993 14.5679 17.4993 15.2571C17.5001 15.9096 16.8509 17.7104 16.8509 17.7104Z" fill="white" />
                                                            <path d="M14.4235 7.50013C13.9985 7.50013 13.6543 7.15596 13.6543 6.73096V4.42346C13.6543 3.99846 13.9985 3.6543 14.4235 3.6543C14.8485 3.6543 15.1926 3.99846 15.1926 4.42346V6.73096C15.1926 7.15596 14.8485 7.50013 14.4235 7.50013Z" fill="white" />
                                                            <path d="M5.83317 12.5003C6.75365 12.5003 7.49984 11.7541 7.49984 10.8337C7.49984 9.91318 6.75365 9.16699 5.83317 9.16699C4.9127 9.16699 4.1665 9.91318 4.1665 10.8337C4.1665 11.7541 4.9127 12.5003 5.83317 12.5003Z" fill="white" />
                                                        </g>
                                                        <div>

                                                        </div>
                                                    </svg>
                                                </span>
                                                <span className={` ${styleMode ? "border border-white border-l-0" : ""} bg-bg_dark h-7 px-4 text-xs font-plus text-white flex items-center rounded-r-3xl `} >
                                                    Music
                                                </span>
                                            </div>
                                            <div className="flex items-start pr-5">
                                                <p className="text-light_text font-plus text-sm">
                                                    Amet  Amet   Amet   Amet  Amet  minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                                </p>
                                                <div className="cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="none">
                                                        <path opacity="0.35" d="M22.6668 29.3333H9.3335C7.12416 29.3333 5.3335 27.5427 5.3335 25.3333V8H26.6668V25.3333C26.6668 27.5427 24.8762 29.3333 22.6668 29.3333Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                        <path d="M21.3332 5.33366H10.6665V4.00033C10.6665 3.26433 11.2638 2.66699 11.9998 2.66699H19.9998C20.7358 2.66699 21.3332 3.26433 21.3332 4.00033V5.33366Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                        <path d="M25.3333 4C24.532 4 7.468 4 6.66667 4C5.19333 4 4 5.19333 4 6.66667C4 8.14 5.19333 9.33333 6.66667 9.33333C7.468 9.33333 24.532 9.33333 25.3333 9.33333C26.8067 9.33333 28 8.14 28 6.66667C28 5.19333 26.8067 4 25.3333 4Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>
                <div className="fade_bar  w-full fixed bottom-0 right-0 h-52 opacity-30">

                </div>
            </div>
        </Dashboardlayout>
    )
}
export default Notification;