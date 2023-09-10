import Dashboardlayout from "../../layouts/dashboardlayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const BlogPreview = () => {
    const navigate = useNavigate();
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [succesMsg, setsuccesMsg] = useState(false);
    const createBlog = () => {

        setsuccesMsg(true);
        setTimeout(() => {
            navigate("/dashboard/client/history&statistic");
        }, 1000);

    }
    return (
        <Dashboardlayout>
            <div className="min-h-screen lg:px-10 md:px-5 px-2">
                <div className={` ${styleMode ? "bg-black text-white border-b-" : "bg-white"} styleMode  rounded-lg my-5 `}>
                    <div className={`px-3 flex items-center gap-6 py-2 border-b  ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`}>
                        <span className="w-10 h-10 flex items-center justify-center" onClick={() => navigate("/blogs")}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27306C32.6781 9.66506 27.6101 14.7351 24.0001 18.3451C20.3901 14.7351 15.3221 9.66706 14.9281 9.27306C13.3661 7.71106 10.8341 7.71106 9.27209 9.27306C7.71009 10.8351 7.71009 13.3671 9.27209 14.9291C9.66409 15.3231 14.7341 20.3911 18.3441 24.0011C14.7341 27.6111 9.66609 32.6791 9.27209 33.0731C7.71009 34.6351 7.71009 37.1671 9.27209 38.7291C10.8341 40.2911 13.3661 40.2911 14.9281 38.7291C15.2121 38.4451 38.4441 15.2131 38.7281 14.9291C40.2901 13.3671 40.2901 10.8351 38.7281 9.27306C37.1661 7.71106 34.6341 7.71106 33.0721 9.27306Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </span>
                        <span className="text-2xl font-bold font-plus">Blogs</span>
                    </div>
                    <div className="lg:px-12 md:px-7 px-3 py-3">
                        <img src="/img/blogpreImg.png" alt="detail_img" />
                        <div className="py-4">
                            <h1 className='md:text-3xl sm:text-2xl text- font-bold font-plus'>Singleton of Glen Ord 38-year old and the Singleton range.</h1>
                            <div className="py-1 md:flex items-center gap-4">
                                <img src="/img/clientLogo.png" alt="" className="w-8 h-8" />
                                <span className={` font-plus  ${styleMode ? "text-white" : "text-dark"}`}  >Steve Austin • 23 August, 2022</span>
                                <ul className="flex items-center py-3 gap-4">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                            <path opacity="0.35" d="M37.1384 8.4996C33.9587 8.11789 29.5872 7.77246 24.1795 7.77246C18.7717 7.77246 14.4003 8.11789 11.2206 8.4996C7.7645 8.91412 5.18066 11.8728 5.18066 15.3547V31.2809C5.18066 34.7611 7.7645 37.7198 11.2206 38.136C14.4003 38.516 18.7717 38.8614 24.1795 38.8614C29.5872 38.8614 33.9587 38.516 37.1384 38.1343C40.5945 37.718 43.1783 34.7611 43.1783 31.2792V15.3547C43.1783 11.8728 40.5945 8.91412 37.1384 8.4996Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <path d="M30.2601 21.7691L21.8903 16.1887C21.3186 15.8087 20.5828 15.7707 19.9818 16.0954C19.3773 16.4201 18.999 17.0505 18.999 17.7362V28.8971C18.999 29.5846 19.3773 30.2132 19.9818 30.538C20.2564 30.6848 20.5587 30.7573 20.8592 30.7573C21.2202 30.7573 21.5794 30.6519 21.8903 30.4447L30.2601 24.8642C30.7783 24.5188 31.0892 23.9385 31.0892 23.3167C31.0892 22.6949 30.7783 22.1146 30.2601 21.7691Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 49 48" fill="none">
                                            <path d="M26.3664 38.8614H22.127C21.347 38.8614 20.7139 38.2283 20.7139 37.4483V16.2513C20.7139 10.5987 23.5401 7.77246 29.1927 7.77246H32.0189C32.799 7.77246 33.4321 8.40555 33.4321 9.1856V13.425C33.4321 14.2051 32.799 14.8381 32.0189 14.8381H29.1927C28.4126 14.8381 27.7795 15.4712 27.7795 16.2513V37.4483C27.7795 38.2283 27.1465 38.8614 26.3664 38.8614Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <g opacity="0.35">
                                                <path d="M31.6206 19.0776H27.7783V26.1433H30.9141C31.5627 26.1433 32.1279 25.7024 32.2848 25.0722L32.9914 20.8327C33.2146 19.9411 32.5406 19.0776 31.6206 19.0776Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                <path d="M20.713 19.0776H17.8868C17.1067 19.0776 16.4736 19.7107 16.4736 20.4908V24.7302C16.4736 25.5102 17.1067 26.1433 17.8868 26.1433H20.713V19.0776Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            </g>
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 49 48" fill="none">
                                            <path opacity="0.35" d="M31.083 38.8614H17.2657C12.497 38.8614 8.62988 34.9943 8.62988 30.2256V16.4083C8.62988 11.6396 12.497 7.77246 17.2657 7.77246H31.083C35.8517 7.77246 39.7189 11.6396 39.7189 16.4083V30.2256C39.7189 34.9943 35.8517 38.8614 31.083 38.8614Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <path d="M24.1749 14.6812C19.4062 14.6812 15.5391 18.5483 15.5391 23.317C15.5391 28.0857 19.4062 31.9528 24.1749 31.9528C28.9436 31.9528 32.8107 28.0857 32.8107 23.317C32.8107 18.5483 28.9436 14.6812 24.1749 14.6812ZM24.1749 28.4985C21.313 28.4985 18.9934 26.1789 18.9934 23.317C18.9934 20.4551 21.313 18.1355 24.1749 18.1355C27.0368 18.1355 29.3564 20.4551 29.3564 23.317C29.3564 26.1789 27.0368 28.4985 24.1749 28.4985Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <path d="M32.8102 16.4084C33.7641 16.4084 34.5373 15.6352 34.5373 14.6813C34.5373 13.7274 33.7641 12.9541 32.8102 12.9541C31.8563 12.9541 31.083 13.7274 31.083 14.6813C31.083 15.6352 31.8563 16.4084 32.8102 16.4084Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 49 48" fill="none">
                                            <path opacity="0.35" d="M24.1031 38.8614C32.6881 38.8614 39.6476 31.9019 39.6476 23.3169C39.6476 14.732 32.6881 7.77246 24.1031 7.77246C15.5181 7.77246 8.55859 14.732 8.55859 23.3169C8.55859 31.9019 15.5181 38.8614 24.1031 38.8614Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <path d="M24.4476 13.5361C17.7386 13.5361 14.1758 18.0409 14.1758 22.9437C14.1758 25.224 15.3898 28.0609 17.3313 28.9656C17.6251 29.1024 17.7837 29.0433 17.8505 28.7588C17.9018 28.5428 18.1645 27.4873 18.2826 26.9961C18.3199 26.8391 18.3013 26.7039 18.1754 26.55C17.5334 25.7696 17.0189 24.338 17.0189 23.0027C17.0189 19.5736 19.6148 16.2564 24.0372 16.2564C27.8565 16.2564 30.5301 18.8586 30.5301 22.5799C30.5301 26.7847 28.4068 29.6977 25.6445 29.6977C24.118 29.6977 22.9755 28.4355 23.3424 26.8888C23.7807 25.0422 24.6294 23.0478 24.6294 21.7141C24.6294 20.5203 23.989 19.5254 22.6631 19.5254C21.104 19.5254 19.8511 21.1374 19.8511 23.2996C19.8511 24.6753 20.3159 25.6064 20.3159 25.6064C20.3159 25.6064 18.7754 32.1211 18.4925 33.3336C18.18 34.672 18.3013 36.5529 18.4365 37.7824C18.7878 37.9192 19.1376 38.0576 19.5013 38.1695C20.1355 37.1373 21.0822 35.4445 21.4335 34.0953C21.6231 33.3678 22.4019 30.3988 22.4019 30.3988C22.9087 31.3657 24.3885 32.1833 25.9647 32.1833C30.6529 32.1833 34.0307 27.8728 34.0307 22.5146C34.0307 17.3787 29.84 13.5361 24.4476 13.5361Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 49 48" fill="none">
                                            <path d="M32.4507 12.4922C31.4548 12.4922 30.6465 13.3005 30.6465 14.2964C30.6465 15.2924 31.4548 16.1007 32.4507 16.1007C33.4467 16.1007 34.255 15.2924 34.255 14.2964C34.255 13.3005 33.4467 12.4922 32.4507 12.4922Z" fill={` ${styleMode ? "white" : "black"}`} />
                                            <path opacity="0.35" d="M42.6142 10.284C43.1789 9.62001 42.4698 8.64211 41.6651 8.9795C40.321 9.54243 38.8505 10.0458 37.8077 10.2515C37.7553 10.2659 37.712 10.2822 37.6615 10.2966C36.081 8.73773 33.9177 7.77246 31.5217 7.77246C26.6935 7.77246 22.7783 11.6877 22.7783 16.5158C22.7783 16.7702 22.7566 17.2393 22.7783 17.4865C17.3186 17.4865 12.9524 15.0905 9.58925 11.749C8.73584 10.901 7.28523 11.4748 7.22027 12.6746C7.20043 13.0048 7.19141 13.3368 7.19141 13.6633C7.19141 16.3859 9.31861 19.0598 12.633 20.7161C12.0232 20.8731 11.3502 20.9868 10.6501 20.9868C10.0096 20.9868 9.12015 20.7233 8.40025 20.4437C7.83372 20.2236 7.26718 20.7468 7.43318 21.3314C8.292 24.3445 11.7435 26.376 14.8595 27.0021C14.1305 27.4315 12.6619 27.4748 11.9456 27.4748C11.7345 27.4748 11.2979 27.4351 10.827 27.381C10.0656 27.2944 9.55136 28.155 10.0024 28.7739C11.5306 30.874 14.4264 32.0378 17.2104 32.0865C15.3231 33.566 12.2198 34.3923 9.12375 34.7514C8.03038 34.8795 7.79222 36.3752 8.79358 36.8317C11.6353 38.1289 14.4733 38.8614 17.6218 38.8614C32.0593 38.8614 40.265 27.8573 40.265 17.4847C40.265 17.3169 40.2614 16.9687 40.256 16.6169C40.256 16.5826 40.265 16.5483 40.265 16.514C40.265 16.4617 40.2488 16.4112 40.2488 16.3589C40.2434 16.0955 40.238 15.8483 40.2308 15.7202C41.3205 14.9335 42.3074 14.0097 43.1645 12.9777C43.4658 12.6151 43.1049 12.0846 42.6575 12.2308C41.6904 12.5465 40.6818 12.7684 39.6426 12.8929C40.5609 12.3444 41.6958 11.3647 42.6142 10.284Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        </svg>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 49 48" fill="none">
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
                            <p className={` font-plus text-lg ${styleMode ? "text-[#808080]" : "text-light_text "}`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <p className={` font-plus text-lg ${styleMode ? "text-[#808080]" : "text-light_text "}`}> Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                            <p className={` font-plus text-lg ${styleMode ? "text-[#808080]" : "text-light_text "}`}>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                        </div>

                        <div className="mt-7">
                            <h5 className="text-3xl">Comments</h5>
                            <input type="text" className={` w-full h-10 p-2 my-5 custom_input  rounded-lg ${styleMode ? "bg-[#171717] text-[#BCBCBC] " : "bg-theme_white"} `} placeholder="Add your commint" />
                            <div className="flex justify-between">
                                <div className="flex gap-3 sm:text-lg sm:font-medium justify-center">
                                    <button className={` md:w-80 sm:w-60 w-1/2 h-12 rounded-md ${styleMode ? "bg-white text-black " : "bg-black text-white "} `}>Login/Signup to Comment</button>
                                    <button className={` md:w-80 sm:w-60 w-1/2 h-12 border-2  rounded-md ${styleMode ? "text-white border-white " : "border-black"} `}>Publish Comment</button>
                                </div>
                                <button className={` w-64 rounded-lg ${styleMode  ? "bg-white text-black" : "bg-black text-white"} `} onClick={createBlog}>
                                    Create Blog
                                </button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            {succesMsg ?
                <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode ? "bg-black" : "bg-white "} modal p-10 rounded-3xl relative `} >
                        <div className="md:w-72 w-60">
                            <div className="md:w-52 w-40 md:h-52 h-40 login_gif mx-auto">

                            </div>
                            <p className={` ${styleMode ? "text-white" : ""} text-4xl font-bold text-center mt-5 `}>Blog Created</p>
                        </div>
                        {/* <div className="absolute top-9 right-9" onClick={() => setsuccesMsg(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="438" height="38" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27306C32.6781 9.66506 27.6101 14.7351 24.0001 18.3451C20.3901 14.7351 15.3221 9.66706 14.9281 9.27306C13.3661 7.71106 10.8341 7.71106 9.27209 9.27306C7.71009 10.8351 7.71009 13.3671 9.27209 14.9291C9.66409 15.3231 14.7341 20.3911 18.3441 24.0011C14.7341 27.6111 9.66609 32.6791 9.27209 33.0731C7.71009 34.6351 7.71009 37.1671 9.27209 38.7291C10.8341 40.2911 13.3661 40.2911 14.9281 38.7291C15.2121 38.4451 38.4441 15.2131 38.7281 14.9291C40.2901 13.3671 40.2901 10.8351 38.7281 9.27306C37.1661 7.71106 34.6341 7.71106 33.0721 9.27306Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </div> */}
                    </div>
                </div>
                : null}
        </Dashboardlayout>

    )
}
export default BlogPreview;