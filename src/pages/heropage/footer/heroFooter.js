import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import AboutModal from "./AboutModal";
import ConatactModal from "./contectModal";
import GuideLineModal from "./guideLine";
import BlogsModal from "./blogsModal";
const HeroFooter = () => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [blog, setBlog] = useState(false);
    const [about, setabout] = useState(false);
    const [contact, setContact] = useState(false);
    const [guidelLine, setGuidelLine] = useState(false);
    return (
        <>
            <div className="xl:pt-6 pt-3 lg:container mx-auto px-3">
                <div className="lg:flex justify-between gap-32">
                    <div className="flex justify-between lg:w-1/4 sm:w-1/2 w-3/4 mx-auto lg:mx-1 lg:py-3 py-1 gap-2">
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48" fill="none" className="mx-auto">
                                <rect width="47.9288" height="47.9288" rx="10.363" fill="#F4C755" />
                                <path opacity="0.35" d="M37.1394 8.50057C33.9597 8.11887 29.5882 7.77344 24.1805 7.77344C18.7727 7.77344 14.4012 8.11887 11.2215 8.50057C7.76548 8.91509 5.18164 11.8737 5.18164 15.3557V31.2819C5.18164 34.7621 7.76548 37.7208 11.2215 38.137C14.4012 38.517 18.7727 38.8624 24.1805 38.8624C29.5882 38.8624 33.9597 38.517 37.1394 38.1353C40.5954 37.719 43.1793 34.7621 43.1793 31.2802V15.3557C43.1793 11.8737 40.5954 8.91509 37.1394 8.50057Z" fill="black" />
                                <path d="M30.2611 21.7686L21.8913 16.1882C21.3196 15.8082 20.5838 15.7702 19.9828 16.0949C19.3782 16.4196 19 17.05 19 17.7357V28.8967C19 29.5841 19.3782 30.2128 19.9828 30.5375C20.2574 30.6843 20.5596 30.7568 20.8602 30.7568C21.2211 30.7568 21.5804 30.6515 21.8913 30.4442L30.2611 24.8637C30.7793 24.5183 31.0902 23.938 31.0902 23.3162C31.0902 22.6944 30.7793 22.1141 30.2611 21.7686Z" fill="black" />
                            </svg>
                        </Link>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.929688" width="47.9288" height="47.9288" rx="10.363" fill="#F4C755" />
                                <path d="M26.3674 38.8624H22.128C21.3479 38.8624 20.7148 38.2293 20.7148 37.4493V16.2522C20.7148 10.5997 23.5411 7.77344 29.1937 7.77344H32.0199C32.8 7.77344 33.4331 8.40652 33.4331 9.18657V13.426C33.4331 14.206 32.8 14.8391 32.0199 14.8391H29.1937C28.4136 14.8391 27.7805 15.4722 27.7805 16.2522V37.4493C27.7805 38.2293 27.1474 38.8624 26.3674 38.8624Z" fill="black" />
                                <g opacity="0.35">
                                    <path d="M31.6216 19.0781H27.7793V26.1438H30.915C31.5637 26.1438 32.1289 25.7029 32.2858 25.0726L32.9923 20.8332C33.2156 19.9415 32.5416 19.0781 31.6216 19.0781Z" fill="black" />
                                    <path d="M20.714 19.0781H17.8877C17.1077 19.0781 16.4746 19.7112 16.4746 20.4913V24.7307C16.4746 25.5107 17.1077 26.1438 17.8877 26.1438H20.714V19.0781Z" fill="black" />
                                </g>
                            </svg>
                        </Link>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.857422" width="47.9288" height="47.9288" rx="10.363" fill="#F4C755" />
                                <path opacity="0.35" d="M31.0821 38.8624H17.2647C12.496 38.8624 8.62891 34.9953 8.62891 30.2266V16.4093C8.62891 11.6406 12.496 7.77344 17.2647 7.77344H31.0821C35.8508 7.77344 39.7179 11.6406 39.7179 16.4093V30.2266C39.7179 34.9953 35.8508 38.8624 31.0821 38.8624Z" fill="black" />
                                <path d="M24.1729 14.6836C19.4042 14.6836 15.5371 18.5507 15.5371 23.3194C15.5371 28.0881 19.4042 31.9552 24.1729 31.9552C28.9416 31.9552 32.8088 28.0881 32.8088 23.3194C32.8088 18.5507 28.9416 14.6836 24.1729 14.6836ZM24.1729 28.5009C21.311 28.5009 18.9914 26.1813 18.9914 23.3194C18.9914 20.4575 21.311 18.1379 24.1729 18.1379C27.0348 18.1379 29.3544 20.4575 29.3544 23.3194C29.3544 26.1813 27.0348 28.5009 24.1729 28.5009Z" fill="black" />
                                <path d="M32.8092 16.4075C33.7631 16.4075 34.5364 15.6342 34.5364 14.6803C34.5364 13.7264 33.7631 12.9531 32.8092 12.9531C31.8553 12.9531 31.082 13.7264 31.082 14.6803C31.082 15.6342 31.8553 16.4075 32.8092 16.4075Z" fill="black" />
                            </svg>
                        </Link>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.787109" width="47.9288" height="47.9288" rx="10.363" fill="#F4C755" />
                                <path opacity="0.35" d="M24.1031 38.8624C32.6881 38.8624 39.6476 31.9029 39.6476 23.3179C39.6476 14.7329 32.6881 7.77344 24.1031 7.77344C15.5181 7.77344 8.55859 14.7329 8.55859 23.3179C8.55859 31.9029 15.5181 38.8624 24.1031 38.8624Z" fill="black" />
                                <path d="M24.4476 13.5391C17.7386 13.5391 14.1758 18.0439 14.1758 22.9466C14.1758 25.227 15.3898 28.0638 17.3313 28.9685C17.6251 29.1053 17.7837 29.0462 17.8505 28.7618C17.9018 28.5457 18.1645 27.4902 18.2826 26.999C18.3199 26.842 18.3013 26.7068 18.1754 26.5529C17.5334 25.7726 17.0189 24.3409 17.0189 23.0057C17.0189 19.5765 19.6148 16.2593 24.0372 16.2593C27.8565 16.2593 30.5301 18.8615 30.5301 22.5828C30.5301 26.7876 28.4068 29.7007 25.6445 29.7007C24.118 29.7007 22.9755 28.4385 23.3424 26.8918C23.7807 25.0451 24.6294 23.0507 24.6294 21.717C24.6294 20.5232 23.989 19.5284 22.6631 19.5284C21.104 19.5284 19.8511 21.1403 19.8511 23.3026C19.8511 24.6782 20.3159 25.6094 20.3159 25.6094C20.3159 25.6094 18.7754 32.124 18.4925 33.3365C18.18 34.6749 18.3013 36.5558 18.4365 37.7853C18.7878 37.9221 19.1376 38.0605 19.5013 38.1724C20.1355 37.1403 21.0822 35.4475 21.4335 34.0982C21.6231 33.3707 22.4019 30.4017 22.4019 30.4017C22.9087 31.3686 24.3885 32.1862 25.9647 32.1862C30.6529 32.1862 34.0307 27.8757 34.0307 22.5176C34.0307 17.3817 29.84 13.5391 24.4476 13.5391Z" fill="black" />
                            </svg>
                        </Link>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.714844" width="47.9288" height="47.9288" rx="10.363" fill="#F4C755" />
                                <path d="M32.4507 12.4922C31.4548 12.4922 30.6465 13.3005 30.6465 14.2964C30.6465 15.2924 31.4548 16.1007 32.4507 16.1007C33.4467 16.1007 34.255 15.2924 34.255 14.2964C34.255 13.3005 33.4467 12.4922 32.4507 12.4922Z" fill="black" />
                                <path opacity="0.35" d="M42.6142 10.2849C43.1789 9.62099 42.4698 8.64308 41.6651 8.98048C40.321 9.5434 38.8505 10.0468 37.8077 10.2525C37.7553 10.2669 37.712 10.2831 37.6615 10.2976C36.081 8.73871 33.9177 7.77344 31.5217 7.77344C26.6935 7.77344 22.7783 11.6887 22.7783 16.5168C22.7783 16.7712 22.7566 17.2403 22.7783 17.4875C17.3186 17.4875 12.9524 15.0915 9.58925 11.75C8.73584 10.902 7.28523 11.4758 7.22027 12.6756C7.20043 13.0058 7.19141 13.3377 7.19141 13.6643C7.19141 16.3869 9.31861 19.0608 12.633 20.7171C12.0232 20.8741 11.3502 20.9877 10.6501 20.9877C10.0096 20.9877 9.12015 20.7243 8.40025 20.4447C7.83372 20.2245 7.26718 20.7478 7.43318 21.3324C8.292 24.3454 11.7435 26.377 14.8595 27.0031C14.1305 27.4325 12.6619 27.4758 11.9456 27.4758C11.7345 27.4758 11.2979 27.4361 10.827 27.382C10.0656 27.2954 9.55136 28.156 10.0024 28.7749C11.5306 30.875 14.4264 32.0388 17.2104 32.0875C15.3231 33.5669 12.2198 34.3933 9.12375 34.7523C8.03038 34.8804 7.79222 36.3762 8.79358 36.8326C11.6353 38.1299 14.4733 38.8624 17.6218 38.8624C32.0593 38.8624 40.265 27.8583 40.265 17.4857C40.265 17.3179 40.2614 16.9697 40.256 16.6179C40.256 16.5836 40.265 16.5493 40.265 16.515C40.265 16.4627 40.2488 16.4122 40.2488 16.3598C40.2434 16.0964 40.238 15.8492 40.2308 15.7211C41.3205 14.9345 42.3074 14.0107 43.1645 12.9787C43.4658 12.616 43.1049 12.0856 42.6575 12.2317C41.6904 12.5475 40.6818 12.7694 39.6426 12.8939C40.5609 12.3454 41.6958 11.3657 42.6142 10.2849Z" fill="black" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-between lg:w-1/5 text-center font-plus py-2 lg:py-0">
                        <div className="cursor-pointer" onClick={() => setabout(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 48 47" fill="none" className="mx-auto">
                                <rect x="0.644531" width="47" height="47" rx="12" fill="#F4C755" />
                                <path opacity="0.35" d="M16.4224 19.4444C19.8589 19.4444 22.6446 16.6587 22.6446 13.2222C22.6446 9.78578 19.8589 7 16.4224 7C12.986 7 10.2002 9.78578 10.2002 13.2222C10.2002 16.6587 12.986 19.4444 16.4224 19.4444Z" fill="black" />
                                <path opacity="0.35" d="M32.4224 19.4444C35.8589 19.4444 38.6446 16.6587 38.6446 13.2222C38.6446 9.78578 35.8589 7 32.4224 7C28.986 7 26.2002 9.78578 26.2002 13.2222C26.2002 16.6587 28.986 19.4444 32.4224 19.4444Z" fill="black" />
                                <path opacity="0.35" d="M21.7559 26.5547H35.9781C39.4092 26.5547 42.2003 29.3458 42.2003 32.7769C42.2003 36.208 39.4092 38.9991 35.9781 38.9991H21.7559V26.5547Z" fill="black" />
                                <path d="M27.9779 32.7769C27.9779 36.208 25.1868 38.9991 21.7556 38.9991H12.8668C11.1601 38.9991 9.59564 38.3058 8.47564 37.168C7.33786 36.048 6.64453 34.4836 6.64453 32.7769C6.64453 29.3458 9.43564 26.5547 12.8668 26.5547H21.7556C23.4623 26.5547 25.0268 27.248 26.1468 28.3858C27.2845 29.5058 27.9779 31.0702 27.9779 32.7769Z" fill="black" />
                            </svg>
                            <span className="pt-2 text-xs md:text-base">About us</span>
                        </div >
                        <div className="cursor-pointer" onClick={() => setContact(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 48 47" fill="none" className="mx-auto">
                                <rect x="0.644531" width="47" height="47" rx="12" fill="#F4C755" />
                                <path opacity="0.35" d="M24.3112 6C15.1062 6 7.64453 13.4617 7.64453 22.6667V29.3333H12.6445V22.6667C12.6445 16.2233 17.8679 11 24.3112 11C30.7545 11 35.9779 16.2233 35.9779 22.6667V29.3333H40.9779V22.6667C40.9779 13.4617 33.5162 6 24.3112 6Z" fill="black" />
                                <path d="M39.3112 22.668H35.9779C34.1362 22.668 32.6445 24.1596 32.6445 26.0013V29.3346C32.6445 31.1763 34.1362 32.668 35.9779 32.668H39.3112C40.2312 32.668 40.9779 31.9213 40.9779 31.0013V24.3346C40.9779 23.4146 40.2312 22.668 39.3112 22.668Z" fill="black" />
                                <path d="M9.3112 22.668H12.6445C14.4862 22.668 15.9779 24.1596 15.9779 26.0013V29.3346C15.9779 31.1763 14.4862 32.668 12.6445 32.668H9.3112C8.3912 32.668 7.64453 31.9213 7.64453 31.0013V24.3346C7.64453 23.4146 8.3912 22.668 9.3112 22.668Z" fill="black" />
                                <path opacity="0.35" d="M12.6439 32.6667V31H9.31055V32.6667C9.31055 36.3483 12.2955 39.3333 15.9772 39.3333H24.3105V36H15.9772C14.1355 36 12.6439 34.5083 12.6439 32.6667Z" fill="black" />
                                <path d="M24.3109 40.9987C26.1518 40.9987 27.6442 39.5063 27.6442 37.6654C27.6442 35.8244 26.1518 34.332 24.3109 34.332C22.4699 34.332 20.9775 35.8244 20.9775 37.6654C20.9775 39.5063 22.4699 40.9987 24.3109 40.9987Z" fill="black" />
                            </svg>
                            <span className="pt-2 text-xs md:text-base">Contact</span>
                        </div >
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.144531" width="48" height="48" rx="12" fill="#F4C755" />
                                <path opacity="0.35" d="M4.91211 28.1701L7.95541 15.2034C8.40431 13.2929 9.90828 12.1406 11.4953 11.1227C15.0936 8.81102 18.0838 6.14062 20.6765 6.14062C24.9905 6.14062 27.8058 9.76007 29.7887 12.4623C32.3213 15.9103 39.3693 26.1076 40.2653 27.0284C41.3893 28.1825 41.3875 30.2608 40.1911 31.7241C38.627 33.6364 36.3754 32.9241 36.3754 32.9241C36.3754 32.9241 36.3967 34.6402 34.9669 35.849C33.5018 37.0879 31.7522 36.6744 31.7522 36.6744C31.7522 36.6744 31.6461 38.0811 30.128 39.039C28.5763 40.0181 26.5722 38.8658 26.5722 38.8658C26.5722 38.8658 26.505 40.3203 25.5843 40.9177C24.5469 41.591 23.2744 41.4231 22.3254 40.7586C21.1059 39.9032 4.91211 28.1701 4.91211 28.1701Z" fill="black" />
                                <path d="M42.636 23.2277C41.4607 19.944 40.0628 14.2233 39.3541 12.0442C38.6454 9.8651 37.7776 9.10692 35.2716 8.35228C34.6106 8.15435 28.3897 6 26.4068 6C25.7582 6 24.6766 6.22445 22.9482 6.77761C21.8418 7.13108 19.836 7.67541 19.1449 8.4919C18.5034 9.25007 16.699 13.1364 15.6192 15.5275C15.096 16.6834 15.727 18.0689 16.9093 18.3287C18.3691 18.6486 20.0869 18.4471 21.6545 17.0174C22.8527 15.9234 24.4044 14.5838 25.41 13.7231C26.0021 13.2124 26.8469 13.246 27.4089 13.7938C28.2501 14.6138 29.3918 15.7343 29.7983 16.1673C30.8039 17.2348 39.6245 26.2957 40.2324 27.015C40.8987 27.805 41.086 28.7028 41.086 28.7028C41.086 28.7028 44.0003 27.038 42.636 23.2277Z" fill="black" />
                                <path d="M21.7171 40.4505C22.2738 39.8938 22.1077 40.06 22.6644 39.5033C23.8591 38.3086 23.8591 36.3698 22.6644 35.1734C21.4697 33.9787 19.531 33.9787 18.3345 35.1734C17.7778 35.7301 17.9439 35.5639 17.3872 36.1206C16.1925 37.3153 16.1925 39.2541 17.3872 40.4505C18.5837 41.6452 20.5207 41.6452 21.7171 40.4505Z" fill="black" />
                                <path d="M13.5296 34.4317C14.0863 33.875 13.9202 34.0411 14.4769 33.4844C15.6716 32.2897 15.6716 30.351 14.4769 29.1545C13.2822 27.958 11.3435 27.9598 10.147 29.1545C9.59031 29.7112 9.75644 29.5451 9.19973 30.1018C8.00504 31.2965 8.00504 33.2352 9.19973 34.4317C10.3962 35.6281 12.3332 35.6281 13.5296 34.4317Z" fill="black" />
                                <path d="M9.22592 31.1231C9.78262 30.5664 9.6165 30.7325 10.1732 30.1758C11.3679 28.9811 11.3679 27.0424 10.1732 25.8459C8.9785 24.6494 7.03977 24.6512 5.8433 25.8459C5.2866 26.4026 5.45273 26.2365 4.89602 26.7932C3.70133 27.9879 3.70133 29.9266 4.89602 31.1231C6.09249 32.3195 8.02946 32.3195 9.22592 31.1231Z" fill="black" />
                                <path d="M17.4574 37.9572C18.0141 37.4005 18.3976 37.017 18.9543 36.4603C20.149 35.2656 20.149 33.3269 18.9543 32.1304C17.7596 30.9357 15.8208 30.9357 14.6244 32.1304C14.0677 32.6871 13.6842 33.0706 13.1275 33.6273C11.9328 34.822 11.9328 36.7607 13.1275 37.9572C14.3239 39.1537 16.2627 39.1537 17.4574 37.9572Z" fill="black" />
                            </svg>
                            <span className="pt-2 text-xs md:text-base">Partnership</span>
                        </Link>
                        <div onClick={() => setBlog(true)} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.144531" width="48" height="48" rx="12" fill="#F4C755" />
                                <path d="M39.5334 31.1094C38.8472 31.1094 9.99742 31.1094 9.3112 31.1094C7.8392 31.1094 6.64453 32.304 6.64453 33.776C6.64453 35.248 7.8392 36.4427 9.3112 36.4427C9.99742 36.4427 38.8472 36.4427 39.5334 36.4427C41.0054 36.4427 42.2001 35.248 42.2001 33.776C42.2001 32.304 41.0054 31.1094 39.5334 31.1094Z" fill="black" />
                                <path d="M15.5335 34.668H10.2002C10.2002 34.668 10.2002 36.6484 10.2002 37.3346C10.2002 38.8066 11.3949 40.0013 12.8669 40.0013C14.3389 40.0013 15.5335 38.8066 15.5335 37.3346C15.5335 36.6484 15.5335 34.668 15.5335 34.668Z" fill="black" />
                                <path d="M38.6449 34.668H33.3115C33.3115 34.668 33.3115 36.6484 33.3115 37.3346C33.3115 38.8066 34.5062 40.0013 35.9782 40.0013C37.4502 40.0013 38.6449 38.8066 38.6449 37.3346C38.6449 36.6484 38.6449 34.668 38.6449 34.668Z" fill="black" />
                                <path opacity="0.35" d="M15.534 31.1111H11.9784C10.014 31.1111 8.42285 29.52 8.42285 27.5556V11.5556C8.42285 9.59111 10.014 8 11.9784 8H15.534C17.4984 8 19.0895 9.59111 19.0895 11.5556V27.5556C19.0895 29.52 17.4984 31.1111 15.534 31.1111Z" fill="black" />
                                <path d="M26.1995 31.1102H22.644C21.6627 31.1102 20.8662 30.3138 20.8662 29.3325V13.3325C20.8662 12.3511 21.6627 11.5547 22.644 11.5547H26.1995C27.1809 11.5547 27.9773 12.3511 27.9773 13.3325V29.3325C27.9773 30.3138 27.1809 31.1102 26.1995 31.1102Z" fill="black" />
                                <path opacity="0.35" d="M38.7672 30.4002L37.7397 30.8678C36.3815 31.4847 34.7815 30.8856 34.1646 29.5273L28.2926 16.6136C27.6757 15.2553 28.2748 13.6553 29.633 13.0384L30.6606 12.5709C32.0188 11.954 33.6188 12.5531 34.2357 13.9113L40.1077 26.8251C40.7246 28.1816 40.1255 29.7816 38.7672 30.4002Z" fill="black" />
                                <path d="M15.5331 22.2227H11.9775V25.7782H15.5331V22.2227Z" fill="black" />
                                <path d="M15.5336 25.7782C16.5155 25.7782 17.3114 24.9823 17.3114 24.0004C17.3114 23.0186 16.5155 22.2227 15.5336 22.2227C14.5518 22.2227 13.7559 23.0186 13.7559 24.0004C13.7559 24.9823 14.5518 25.7782 15.5336 25.7782Z" fill="black" />
                                <path d="M11.978 25.7782C12.9598 25.7782 13.7558 24.9823 13.7558 24.0004C13.7558 23.0186 12.9598 22.2227 11.978 22.2227C10.9961 22.2227 10.2002 23.0186 10.2002 24.0004C10.2002 24.9823 10.9961 25.7782 11.978 25.7782Z" fill="black" />
                            </svg>
                            <span className="pt-2 text-xs md:text-base">Blog</span>
                        </div>
                        <div className="cursor-pointer" onClick={() => setGuidelLine(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.144531" width="48" height="48" rx="12" fill="#F4C755" />
                                <path d="M33.8845 11.36C33.4045 11.36 32.9245 11.2 32.4445 11.2H19.6445C16.9245 11.2 14.8445 13.28 14.8445 16V35.2C14.8445 35.68 15.0045 36.16 15.0045 36.64C13.0845 36 11.6445 34.24 11.6445 32V12.8C11.6445 10.08 13.7245 8 16.4445 8H29.2445C31.4845 8 33.2445 9.44 33.8845 11.36Z" fill="black" />
                                <path opacity="0.35" d="M14.8441 35.2016L13.2441 16.0016C13.2441 13.2816 16.9241 9.60156 19.6441 9.60156L32.4441 11.2016C35.1641 11.2016 37.2441 13.2816 37.2441 16.0016V35.2016C37.2441 37.9216 35.1641 40.0016 32.4441 40.0016H19.6441C16.9241 40.0016 14.8441 37.9216 14.8441 35.2016Z" fill="black" />
                                <path d="M30.8445 20.8016H21.2445C20.2845 20.8016 19.6445 20.1616 19.6445 19.2016C19.6445 18.2416 20.2845 17.6016 21.2445 17.6016H30.8445C31.8045 17.6016 32.4445 18.2416 32.4445 19.2016C32.4445 20.1616 31.8045 20.8016 30.8445 20.8016Z" fill="black" />
                                <path d="M30.8445 27.2H21.2445C20.2845 27.2 19.6445 26.56 19.6445 25.6C19.6445 24.64 20.2845 24 21.2445 24H30.8445C31.8045 24 32.4445 24.64 32.4445 25.6C32.4445 26.56 31.8045 27.2 30.8445 27.2Z" fill="black" />
                                <path d="M30.8445 33.5984H21.2445C20.2845 33.5984 19.6445 32.9584 19.6445 31.9984C19.6445 31.0384 20.2845 30.3984 21.2445 30.3984H30.8445C31.8045 30.3984 32.4445 31.0384 32.4445 31.9984C32.4445 32.9584 31.8045 33.5984 30.8445 33.5984Z" fill="black" />
                            </svg>
                            <span className="pt-2 text-xs md:text-base">Guideline</span>
                        </div>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.144531" width="48" height="48" rx="12" fill="#F4C755" />
                                <path opacity="0.35" d="M32.7194 17.7393L35.0365 14.2629C35.4831 13.5953 35.3027 12.6905 34.6336 12.2455C33.9616 11.7975 33.0613 11.9807 32.6162 12.6484L30.174 16.3124C28.1784 15.4193 25.9733 14.9102 23.6445 14.9102C21.3158 14.9102 19.1107 15.4193 17.1151 16.3124L14.6729 12.6484C14.2278 11.9807 13.3274 11.7975 12.6554 12.2455C11.9863 12.6905 11.806 13.5938 12.2525 14.2629L14.5696 17.7393C10.3893 20.6251 7.64453 25.4455 7.64453 30.9102V32.3647C7.64453 33.972 8.94635 35.2738 10.5536 35.2738H36.7354C38.3427 35.2738 39.6445 33.972 39.6445 32.3647V30.9102C39.6445 25.4455 36.8998 20.6251 32.7194 17.7393Z" fill="black" />
                                <path d="M30.1896 29.4574C31.3946 29.4574 32.3714 28.4806 32.3714 27.2756C32.3714 26.0706 31.3946 25.0938 30.1896 25.0938C28.9846 25.0938 28.0078 26.0706 28.0078 27.2756C28.0078 28.4806 28.9846 29.4574 30.1896 29.4574Z" fill="black" />
                                <path d="M17.0988 29.4574C18.3038 29.4574 19.2806 28.4806 19.2806 27.2756C19.2806 26.0706 18.3038 25.0938 17.0988 25.0938C15.8938 25.0938 14.917 26.0706 14.917 27.2756C14.917 28.4806 15.8938 29.4574 17.0988 29.4574Z" fill="black" />
                            </svg>
                            <span className="pt-2 text-xs md:text-base">Android app</span>
                        </Link>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 49 48" fill="none" className="mx-auto">
                                <rect x="0.144531" width="48" height="48" rx="12" fill="#F4C755" />
                                <path opacity="0.35" d="M31.9595 14.8711C29.0369 14.8711 27.8148 16.6661 25.7896 16.6661C23.7066 16.6661 21.8034 14.9823 19.283 14.9823C15.8544 14.9839 10.6445 18.161 10.6445 25.6413C10.6445 32.4482 16.8114 40.0017 20.2917 40.0017C22.4068 40.023 22.9203 38.6699 25.7896 38.6562C28.662 38.6348 29.2807 40.02 31.3988 40.0017C33.7835 39.9834 35.6471 37.3655 37.0079 35.2901C37.2364 34.9411 37.433 34.6333 37.6113 34.3438C38.4479 32.9769 38.1172 31.2383 36.8799 30.2189C33.942 27.7975 33.5168 22.6943 36.7945 20.1678C37.9679 19.2627 37.913 17.4372 36.6803 16.6158C35.1305 15.5797 33.2776 14.8711 31.9595 14.8711Z" fill="black" />
                                <path d="M31.3862 9.23568C31.4989 8.50273 30.8604 7.84597 30.1427 8.03187C28.7302 8.39759 27.3085 9.2052 26.3774 10.1728C25.5683 11.0185 24.8871 12.169 24.7332 13.3759C24.6464 14.0616 25.2285 14.6741 25.9081 14.5538C27.4273 14.284 28.8536 13.4322 29.7801 12.4067C30.5618 11.5442 31.2033 10.4334 31.3862 9.23568Z" fill="black" />
                            </svg>
                            <span className="pt-2 text-xs md:text-base">iOS</span>
                        </Link>
                    </div>
                </div>
            </div>
            {about ? <AboutModal setabout={setabout} /> : null}
            {contact ? <ConatactModal setContact={setContact} /> : null}
            {guidelLine ? <GuideLineModal setGuidelLine={setGuidelLine} /> : null}
            {blog ? <BlogsModal setBlog={setBlog}/> : null}
        </>
    )
}
export default HeroFooter;