import { useSelector } from "react-redux";
import { useState } from "react";

const BlogsModal = ({ setBlog }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [active, setactive] = useState("all");
    const [blogList, setBlogList] = useState(true);
    return (
        <>
            {blogList ?
                <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "bg-black" : "bg-white text-black"} modal  rounded-3xl relative `} >
                        <div className="sm:w-[45rem] w-[28rem] text-center">
                            <div className={`flex justify-between items-center  px-5 border-b  ${styleMode ? "bg-[#454545] rounded-t-3xl border-[#6B6B6B]" : "border-[#EEECEC]"}`}>
                                <div className=" flex justify-start py-3 items-center gap-5  cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 38 38" fill="none" onClick={() => setBlog(false)}>
                                        <path opacity="0.35" d="M25.9981 7.83928C25.6975 8.13842 21.8301 12.0073 19.0753 14.7621C16.3205 12.0073 12.4531 8.13994 12.1524 7.83928C10.9605 6.64732 9.02832 6.64732 7.83635 7.83928C6.64439 9.03125 6.64439 10.9634 7.83635 12.1554C8.13549 12.456 12.0044 16.3234 14.7592 19.0782C12.0044 21.833 8.13702 25.7004 7.83635 26.0011C6.64439 27.193 6.64439 29.1252 7.83635 30.3171C9.02832 31.5091 10.9605 31.5091 12.1524 30.3171C12.3692 30.1004 30.0975 12.3721 30.3142 12.1554C31.5062 10.9634 31.5062 9.03125 30.3142 7.83928C29.1223 6.64732 27.1901 6.64732 25.9981 7.83928Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        <path d="M30.3141 30.3132C31.5061 29.1212 31.5061 27.189 30.3141 25.9971C30.015 25.6979 26.1461 21.829 23.3913 19.0742L19.0752 23.3903C21.83 26.1451 25.6974 30.0125 25.998 30.3132C27.19 31.5051 29.1222 31.5051 30.3141 30.3132Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    </svg>
                                    <h6 className={` text-xl font-bold font-plus  ${styleMode ? "text-white" : "text-black"}`}>Blogs</h6>
                                </div>
                                <div className="pl-2">
                                    <ul className="flex-1 text-center md:text-left mt-2 md:mt-0">
                                        <li className={`inline-block sm:px-4 px-3 mt-2 sm:mt-0 py-1 text-sm font-plus border  rounded-3xl mx-1 cursor-pointer ${active === "all" ? 'bg-theme border-theme text-white' : styleMode ? "border-[#EEECEC] text-white" : "border-[#262626]"}`} onClick={() => setactive("all")}>
                                            All
                                        </li>
                                        <li className={`inline-block sm:px-4 px-3 mt-2 sm:mt-0 py-1 text-sm font-plus border  rounded-3xl mx-1 cursor-pointer ${active === "pubs_bars" ? 'bg-theme border-theme text-white' : styleMode ? "border-[#EEECEC] text-white" : "border-[#262626]"}`} onClick={() => setactive("pubs_bars")} >Pubs & Bars</li>
                                        <li className={`inline-block sm:px-4 px-3 mt-2 sm:mt-0 py-1 text-sm font-plus border  rounded-3xl mx-1 cursor-pointer ${active === "cannabis" ? 'bg-theme border-theme text-white' : styleMode ? "border-[#EEECEC] text-white" : "border-[#262626]"}`} onClick={() => setactive("cannabis")}>Cannabis</li>
                                        <li className={`inline-block sm:px-4 px-3 mt-2 sm:mt-0 py-1 text-sm font-plus border  rounded-3xl mx-1 cursor-pointer ${active === "sports" ? 'bg-theme border-theme text-white' : styleMode ? "border-[#EEECEC] text-white" : "border-[#262626]"}`} onClick={() => setactive("sports")}>Sports</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="px-6 py-4 text-start">
                                <div className="flex flex-wrap font-plus">
                                    <div className="w-1/2 p-2">
                                        <div className="border-[#EEECEC] border rounded-lg flex p-2 gap-2 cursor-pointer" onClick={() => setBlogList(false)}>
                                            <img src="/img/blog_pro.png" alt="blogs" className="w-20" />
                                            <div>
                                                <h3 className={`${styleMode ? "" : "text-[#262626]"} text-sm`}> Singleton of Glen Ord 38-year old and the Singleton range.</h3>
                                                <p className="text-xs mt-1">Steve Austin • 23 August, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <div className="border-[#EEECEC] border rounded-lg flex p-2 gap-2 cursor-pointer" onClick={() => setBlogList(false)}>
                                            <img src="/img/blog_pro.png" alt="blogs" className="w-20" />
                                            <div>
                                                <h3 className={`${styleMode ? "" : "text-[#262626]"} text-sm`}> Singleton of Glen Ord 38-year old and the Singleton range.</h3>
                                                <p className="text-xs mt-1">Steve Austin • 23 August, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <div className="border-[#EEECEC] border rounded-lg flex p-2 gap-2 cursor-pointer" onClick={() => setBlogList(false)}>
                                            <img src="/img/blog_pro.png" alt="blogs" className="w-20" />
                                            <div>
                                                <h3 className={`${styleMode ? "" : "text-[#262626]"} text-sm`}> Singleton of Glen Ord 38-year old and the Singleton range.</h3>
                                                <p className="text-xs mt-1">Steve Austin • 23 August, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <div className="border-[#EEECEC] border rounded-lg flex p-2 gap-2 cursor-pointer" onClick={() => setBlogList(false)}>
                                            <img src="/img/blog_pro.png" alt="blogs" className="w-20" />
                                            <div>
                                                <h3 className={`${styleMode ? "" : "text-[#262626]"} text-sm`}> Singleton of Glen Ord 38-year old and the Singleton range.</h3>
                                                <p className="text-xs mt-1">Steve Austin • 23 August, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <div className="border-[#EEECEC] border rounded-lg flex p-2 gap-2 cursor-pointer" onClick={() => setBlogList(false)}>
                                            <img src="/img/blog_pro.png" alt="blogs" className="w-20" />
                                            <div>
                                                <h3 className={`${styleMode ? "" : "text-[#262626]"} text-sm`}> Singleton of Glen Ord 38-year old and the Singleton range.</h3>
                                                <p className="text-xs mt-1">Steve Austin • 23 August, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <div className="border-[#EEECEC] border rounded-lg flex p-2 gap-2 cursor-pointer" onClick={() => setBlogList(false)}>
                                            <img src="/img/blog_pro.png" alt="blogs" className="w-20" />
                                            <div>
                                                <h3 className={`${styleMode ? "" : "text-[#262626]"} text-sm`}> Singleton of Glen Ord 38-year old and the Singleton range.</h3>
                                                <p className="text-xs mt-1">Steve Austin • 23 August, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <div className="border-[#EEECEC] border rounded-lg flex p-2 gap-2 cursor-pointer" onClick={() => setBlogList(false)}>
                                            <img src="/img/blog_pro.png" alt="blogs" className="w-20" />
                                            <div>
                                                <h3 className={`${styleMode ? "" : "text-[#262626]"} text-sm`}> Singleton of Glen Ord 38-year old and the Singleton range.</h3>
                                                <p className="text-xs mt-1">Steve Austin • 23 August, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 p-2">
                                        <div className="border-[#EEECEC] border rounded-lg flex p-2 gap-2 cursor-pointer" onClick={() => setBlogList(false)}>
                                            <img src="/img/blog_pro.png" alt="blogs" className="w-20" />
                                            <div>
                                                <h3 className={`${styleMode ? "" : "text-[#262626]"} text-sm`}> Singleton of Glen Ord 38-year old and the Singleton range.</h3>
                                                <p className="text-xs mt-1">Steve Austin • 23 August, 2022</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "bg-black" : "bg-white text-black"} modal  rounded-3xl relative `} >
                        <div className="sm:w-[45rem] w-[28rem] text-center">
                            <div className="flex justify-between items-center  px-5 border-b border-[#EEECEC]">
                                <div className=" flex justify-start py-3 items-center gap-5  cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" onClick={() => setBlog(false)}>
                                        <path opacity="0.35" d="M11.2997 16.088C11.9434 15.4444 18.3448 9.04301 18.9884 8.39935C20.2757 7.11205 20.2757 5.02622 18.9884 3.73892C17.7011 2.45161 15.6153 2.45161 14.328 3.73892C13.6843 4.38257 7.28296 10.7839 6.63931 11.4276C5.352 12.7149 5.352 14.8007 6.63931 16.088C7.92661 17.3753 10.0135 17.3753 11.2997 16.088Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        <path d="M6.64028 16.0869C7.28394 16.7305 13.6853 23.1319 14.329 23.7755C15.6163 25.0628 17.7021 25.0628 18.9894 23.7755C20.2767 22.4882 20.2767 20.4024 18.9894 19.1151C18.3457 18.4714 11.9444 12.0701 11.3007 11.4264C10.0134 10.1391 7.92759 10.1391 6.64028 11.4264C5.35298 12.7137 5.35298 14.8006 6.64028 16.0869Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    </svg>
                                    <h6 className={` text-xl font-bold font-plus  ${styleMode ? "text-white" : "text-black"}`}>Blogs</h6>
                                </div>

                            </div>

                            <div className="px-6 py-4 text-start">
                                <img src="/img/blog_details.jpg" alt="detail_img" />
                                <div className="py-2">
                                    <h1 className='md:text-xl sm:text-2xl text- font-bold font-plus'>Singleton of Glen Ord 38-year old and the Singleton range.</h1>
                                    <div className="py-1 md:flex items-center gap-5">
                                        <span className={` text-lg font-plus  ${styleMode ? "text-white" : "text-dark"}`}  >Steve Austin • 23 August, 2022</span>
                                        <ul className="flex items-center py-1 gap-4">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none">
                                                    <path opacity="0.35" d="M37.1384 8.4996C33.9587 8.11789 29.5872 7.77246 24.1795 7.77246C18.7717 7.77246 14.4003 8.11789 11.2206 8.4996C7.7645 8.91412 5.18066 11.8728 5.18066 15.3547V31.2809C5.18066 34.7611 7.7645 37.7198 11.2206 38.136C14.4003 38.516 18.7717 38.8614 24.1795 38.8614C29.5872 38.8614 33.9587 38.516 37.1384 38.1343C40.5945 37.718 43.1783 34.7611 43.1783 31.2792V15.3547C43.1783 11.8728 40.5945 8.91412 37.1384 8.4996Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path d="M30.2601 21.7691L21.8903 16.1887C21.3186 15.8087 20.5828 15.7707 19.9818 16.0954C19.3773 16.4201 18.999 17.0505 18.999 17.7362V28.8971C18.999 29.5846 19.3773 30.2132 19.9818 30.538C20.2564 30.6848 20.5587 30.7573 20.8592 30.7573C21.2202 30.7573 21.5794 30.6519 21.8903 30.4447L30.2601 24.8642C30.7783 24.5188 31.0892 23.9385 31.0892 23.3167C31.0892 22.6949 30.7783 22.1146 30.2601 21.7691Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 49 48" fill="none">
                                                    <path d="M26.3664 38.8614H22.127C21.347 38.8614 20.7139 38.2283 20.7139 37.4483V16.2513C20.7139 10.5987 23.5401 7.77246 29.1927 7.77246H32.0189C32.799 7.77246 33.4321 8.40555 33.4321 9.1856V13.425C33.4321 14.2051 32.799 14.8381 32.0189 14.8381H29.1927C28.4126 14.8381 27.7795 15.4712 27.7795 16.2513V37.4483C27.7795 38.2283 27.1465 38.8614 26.3664 38.8614Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <g opacity="0.35">
                                                        <path d="M31.6206 19.0776H27.7783V26.1433H30.9141C31.5627 26.1433 32.1279 25.7024 32.2848 25.0722L32.9914 20.8327C33.2146 19.9411 32.5406 19.0776 31.6206 19.0776Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                        <path d="M20.713 19.0776H17.8868C17.1067 19.0776 16.4736 19.7107 16.4736 20.4908V24.7302C16.4736 25.5102 17.1067 26.1433 17.8868 26.1433H20.713V19.0776Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    </g>
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 49 48" fill="none">
                                                    <path opacity="0.35" d="M31.083 38.8614H17.2657C12.497 38.8614 8.62988 34.9943 8.62988 30.2256V16.4083C8.62988 11.6396 12.497 7.77246 17.2657 7.77246H31.083C35.8517 7.77246 39.7189 11.6396 39.7189 16.4083V30.2256C39.7189 34.9943 35.8517 38.8614 31.083 38.8614Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path d="M24.1749 14.6812C19.4062 14.6812 15.5391 18.5483 15.5391 23.317C15.5391 28.0857 19.4062 31.9528 24.1749 31.9528C28.9436 31.9528 32.8107 28.0857 32.8107 23.317C32.8107 18.5483 28.9436 14.6812 24.1749 14.6812ZM24.1749 28.4985C21.313 28.4985 18.9934 26.1789 18.9934 23.317C18.9934 20.4551 21.313 18.1355 24.1749 18.1355C27.0368 18.1355 29.3564 20.4551 29.3564 23.317C29.3564 26.1789 27.0368 28.4985 24.1749 28.4985Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path d="M32.8102 16.4084C33.7641 16.4084 34.5373 15.6352 34.5373 14.6813C34.5373 13.7274 33.7641 12.9541 32.8102 12.9541C31.8563 12.9541 31.083 13.7274 31.083 14.6813C31.083 15.6352 31.8563 16.4084 32.8102 16.4084Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 49 48" fill="none">
                                                    <path opacity="0.35" d="M24.1031 38.8614C32.6881 38.8614 39.6476 31.9019 39.6476 23.3169C39.6476 14.732 32.6881 7.77246 24.1031 7.77246C15.5181 7.77246 8.55859 14.732 8.55859 23.3169C8.55859 31.9019 15.5181 38.8614 24.1031 38.8614Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path d="M24.4476 13.5361C17.7386 13.5361 14.1758 18.0409 14.1758 22.9437C14.1758 25.224 15.3898 28.0609 17.3313 28.9656C17.6251 29.1024 17.7837 29.0433 17.8505 28.7588C17.9018 28.5428 18.1645 27.4873 18.2826 26.9961C18.3199 26.8391 18.3013 26.7039 18.1754 26.55C17.5334 25.7696 17.0189 24.338 17.0189 23.0027C17.0189 19.5736 19.6148 16.2564 24.0372 16.2564C27.8565 16.2564 30.5301 18.8586 30.5301 22.5799C30.5301 26.7847 28.4068 29.6977 25.6445 29.6977C24.118 29.6977 22.9755 28.4355 23.3424 26.8888C23.7807 25.0422 24.6294 23.0478 24.6294 21.7141C24.6294 20.5203 23.989 19.5254 22.6631 19.5254C21.104 19.5254 19.8511 21.1374 19.8511 23.2996C19.8511 24.6753 20.3159 25.6064 20.3159 25.6064C20.3159 25.6064 18.7754 32.1211 18.4925 33.3336C18.18 34.672 18.3013 36.5529 18.4365 37.7824C18.7878 37.9192 19.1376 38.0576 19.5013 38.1695C20.1355 37.1373 21.0822 35.4445 21.4335 34.0953C21.6231 33.3678 22.4019 30.3988 22.4019 30.3988C22.9087 31.3657 24.3885 32.1833 25.9647 32.1833C30.6529 32.1833 34.0307 27.8728 34.0307 22.5146C34.0307 17.3787 29.84 13.5361 24.4476 13.5361Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 49 48" fill="none">
                                                    <path d="M32.4507 12.4922C31.4548 12.4922 30.6465 13.3005 30.6465 14.2964C30.6465 15.2924 31.4548 16.1007 32.4507 16.1007C33.4467 16.1007 34.255 15.2924 34.255 14.2964C34.255 13.3005 33.4467 12.4922 32.4507 12.4922Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path opacity="0.35" d="M42.6142 10.284C43.1789 9.62001 42.4698 8.64211 41.6651 8.9795C40.321 9.54243 38.8505 10.0458 37.8077 10.2515C37.7553 10.2659 37.712 10.2822 37.6615 10.2966C36.081 8.73773 33.9177 7.77246 31.5217 7.77246C26.6935 7.77246 22.7783 11.6877 22.7783 16.5158C22.7783 16.7702 22.7566 17.2393 22.7783 17.4865C17.3186 17.4865 12.9524 15.0905 9.58925 11.749C8.73584 10.901 7.28523 11.4748 7.22027 12.6746C7.20043 13.0048 7.19141 13.3368 7.19141 13.6633C7.19141 16.3859 9.31861 19.0598 12.633 20.7161C12.0232 20.8731 11.3502 20.9868 10.6501 20.9868C10.0096 20.9868 9.12015 20.7233 8.40025 20.4437C7.83372 20.2236 7.26718 20.7468 7.43318 21.3314C8.292 24.3445 11.7435 26.376 14.8595 27.0021C14.1305 27.4315 12.6619 27.4748 11.9456 27.4748C11.7345 27.4748 11.2979 27.4351 10.827 27.381C10.0656 27.2944 9.55136 28.155 10.0024 28.7739C11.5306 30.874 14.4264 32.0378 17.2104 32.0865C15.3231 33.566 12.2198 34.3923 9.12375 34.7514C8.03038 34.8795 7.79222 36.3752 8.79358 36.8317C11.6353 38.1289 14.4733 38.8614 17.6218 38.8614C32.0593 38.8614 40.265 27.8573 40.265 17.4847C40.265 17.3169 40.2614 16.9687 40.256 16.6169C40.256 16.5826 40.265 16.5483 40.265 16.514C40.265 16.4617 40.2488 16.4112 40.2488 16.3589C40.2434 16.0955 40.238 15.8483 40.2308 15.7202C41.3205 14.9335 42.3074 14.0097 43.1645 12.9777C43.4658 12.6151 43.1049 12.0846 42.6575 12.2308C41.6904 12.5465 40.6818 12.7684 39.6426 12.8929C40.5609 12.3444 41.6958 11.3647 42.6142 10.284Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                </svg>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 49 48" fill="none">
                                                    <path d="M18.5805 23.5955L31.1421 17.798C29.6743 16.42 28.7396 14.5028 28.6398 12.356L16.0781 18.1535C17.548 19.5275 18.4806 21.4467 18.5805 23.5955Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path d="M31.1421 30.134L18.5805 24.3364C18.4806 26.4833 17.546 28.4025 16.0781 29.7805L28.6398 35.578C28.7396 33.4291 29.6723 31.5099 31.1421 30.134Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path opacity="0.35" d="M10.629 15.9766C6.2174 15.9766 2.64062 19.5533 2.64062 23.9649C2.64062 28.3765 6.2174 31.9532 10.629 31.9532C15.0405 31.9532 18.6173 28.3765 18.6173 23.9649C18.6173 19.5533 15.0405 15.9766 10.629 15.9766Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path opacity="0.35" d="M36.5909 3.99414C32.1793 3.99414 28.6025 7.57092 28.6025 11.9825C28.6025 16.394 32.1793 19.9708 36.5909 19.9708C41.0024 19.9708 44.5792 16.394 44.5792 11.9825C44.5792 7.57092 41.0024 3.99414 36.5909 3.99414Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    <path opacity="0.35" d="M36.5909 27.959C32.1793 27.959 28.6025 31.5358 28.6025 35.9473C28.6025 40.3589 32.1793 43.9357 36.5909 43.9357C41.0024 43.9357 44.5792 40.3589 44.5792 35.9473C44.5792 31.5358 41.0024 27.959 36.5909 27.959Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <p className={` font-plus  ${styleMode ? "text-[#808080]" : "text-light_text "}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    <p className={` font-plus  ${styleMode ? "text-[#808080]" : "text-light_text "}`}> Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                                    <p className={` font-plus  ${styleMode ? "text-[#808080]" : "text-light_text "}`}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                                </div>


                                <div className="flex items-center justify-between py-1 mt-1">
                                    <button className="flex items-center gap-6" onClick={() => setBlog(false)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36" fill="none">
                                            <path opacity="0.35" d="M15.3162 20.9602C16.1533 20.1231 24.479 11.7974 25.3162 10.9602C26.9905 9.28592 26.9905 6.57307 25.3162 4.89878C23.6419 3.2245 20.929 3.2245 19.2547 4.89878C18.4176 5.73592 10.0919 14.0616 9.25474 14.8988C7.58045 16.5731 7.58045 19.2859 9.25474 20.9602C10.929 22.6345 13.6433 22.6345 15.3162 20.9602Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <path d="M9.25571 20.9602C10.0929 21.7974 18.4186 30.1231 19.2557 30.9602C20.93 32.6345 23.6429 32.6345 25.3171 30.9602C26.9914 29.2859 26.9914 26.5731 25.3171 24.8988C24.48 24.0616 16.1543 15.7359 15.3171 14.8988C13.6429 13.2245 10.93 13.2245 9.25571 14.8988C7.58143 16.5731 7.58143 19.2874 9.25571 20.9602Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        </svg>
                                        <span className="sm:text-lg font-plus font-semibold">
                                            Previous
                                        </span>
                                    </button>
                                    <button className="flex items-center gap-6">
                                        <span className="sm:text-lg font-plus font-semibold text-theme_blue">
                                            Next
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <path opacity="0.35" d="M20.6838 20.9602C19.8467 20.1231 11.521 11.7974 10.6838 10.9602C9.00955 9.28592 9.00955 6.57307 10.6838 4.89878C12.3581 3.2245 15.071 3.2245 16.7453 4.89878C17.5824 5.73592 25.9081 14.0616 26.7453 14.8988C28.4195 16.5731 28.4195 19.2859 26.7453 20.9602C25.071 22.6345 22.3567 22.6345 20.6838 20.9602Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <path d="M26.7443 20.9602C25.9071 21.7974 17.5814 30.1231 16.7443 30.9602C15.07 32.6345 12.3571 32.6345 10.6829 30.9602C9.00857 29.2859 9.00857 26.5731 10.6829 24.8988C11.52 24.0616 19.8457 15.7359 20.6829 14.8988C22.3571 13.2245 25.07 13.2245 26.7443 14.8988C28.4186 16.5731 28.4186 19.2874 26.7443 20.9602Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>}

        </>
    )
}
export default BlogsModal;