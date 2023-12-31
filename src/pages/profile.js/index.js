import Dashboardlayout from "../../layouts/dashboardlayout";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserSecurity from "../../components/userSecurity";
import ContactUs from "../../components/contactUs";
import ReferFriends from "../../components/referFriends";
import DeleteAccount from "../../components/deleteAccount";
import SignOut from "../../components/signOut";
import { lightMode, darkMode } from '../../redux/slice/style';
import { useSelector, useDispatch } from "react-redux";
const UserProfile = () => {
    const dispatch = useDispatch();
    const styleMode = useSelector((state) => state.styleModer.mode);
    const userStatus = useSelector((state) => state.userData.status);
    // console.log("my create mode", styleMode);
    const navigate = useNavigate();
    ////////////////////////////////////////////////////////////////////////////
    //      Modals controlls start
    ////////////////////////////////////////////////////////////////////////////
    const [profileEdit, setProfileEdit] = useState(false);
    const [sound, setSound] = useState(false);
    const [paypal, setPaypal] = useState(false);
    const [security, setSecurity] = useState(false);
    const [content, setContent] = useState(false);
    const [referFrd, setReferFrd] = useState(false);
    const [deleteAc, setDeleteAc] = useState(false);
    const [signOut, setSignOut] = useState(false);
    ////////////////////////////////////////////////////////////////////////////
    //      Modals controlls End
    ////////////////////////////////////////////////////////////////////////////
    // Buttoon slider1
    const [isOn1, setIsOn1] = useState(false);

    const handleToggle1 = () => {
        setIsOn1(!isOn1);
    };
    // Buttoon slider2


    const handleToggle2 = () => {
        if (styleMode) {
            dispatch(lightMode());
        }
        else {
            dispatch(darkMode());
        }

    };
    return (
        <Dashboardlayout>
            <div className="lg:max-w-4xl lg:mx-auto md:mx-5 sm:mx-5 mx-1 mb-4 font-plus mt-3">
                <div className={`${styleMode ? "bg-black" : "bg-white"} sm:p-5 p-2  rounded-2xl profile_shadow relative`}>
                    <div className="sm:flex gap-3">
                        {userStatus == 2 ? <img src="/img/clientLogo.png" className="w-20 h-20" /> : <img src="/img/profile1.png" className="w-20 h-20" />}

                        <div className="">
                            <div className="md:flex items-center gap-3">
                                <h3 className={`text-xl font-bold ${styleMode ? "text-white" : "text-black"}`}>

                                    {userStatus == 2 ? "Spotify" : "Alkesh Kumar"}
                                </h3>
                                {userStatus == 2 ? null : <button className="w-24 h-6 rounded-md text-sm bg-theme_blue text-white">Follow</button>}

                            </div>
                            <p className={` ${styleMode ? "text-theme_border" : "text-dark "}  text-sm md:w-4/5`}> Hello, I am Alkesh Kumar from Cuberto  dsn  cdn zxnc nzc njzcn nzcjcnzjncjcnzjcnzc ncnz cjkznkcnzc kcnznczn cznzxnc  czc znc zncznc z nzcxnjcc ncjcnz nc nzcnnz cc </p>
                        </div>
                    </div>
                    {userStatus == 2 ? null : <div className="mt-5 flex text-center rounded-b-lg border border-light_border">
                        <div className="w-1/3 sm:h-20 h-16 flex items-center justify-center">
                            <Link to="/dashboard/user/follower" className="cursor-pointer">
                                <p className={` ${styleMode ? " text-white" : ""} text-sm `}>Following</p>
                                <span className="text-lg font-bold text-theme_blue">8</span>
                            </Link>

                        </div>
                        <div className="w-1/3 sm:h-20 h-16 flex items-center justify-center border border-t-0 border-b-0 border-light_border">
                            <Link to="/dashboard/user/follower" className="cursor-pointer">
                                <p className={` ${styleMode ? " text-white" : ""} text-sm `}>Followers</p>
                                <span className="text-lg font-bold text-theme_blue">23</span>
                            </Link>
                        </div>
                        <div className="w-1/3 sm:h-20 h-16 flex items-center justify-center">
                            <Link to="/dashboard/user/follower" className="cursor-pointer">

                                <p className={` ${styleMode ? " text-white" : ""} text-sm `}>Gold Status</p>
                                <span className="text-lg font-bold text-theme_blue">23</span>
                            </Link>
                        </div>
                    </div>}

                    <div className=" cursor-pointer absolute w-10 h-10 rounded-full bg-theme top-1 right-1 flex justify-center items-center md:translate-x-1/2 md:-translate-y-1/2" onClick={() => setProfileEdit(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 46 46" fill="none">
                            <path opacity="0.35" d="M37.8003 8.20023C35.3953 5.79523 31.3253 5.79523 28.9203 8.20023L8.57025 28.5502C8.01525 29.1052 7.64525 29.8452 7.46025 30.5852L6.35025 37.2452C6.16525 38.7252 7.27525 39.8352 8.75525 39.6502L15.2303 38.5402C15.9703 38.3552 16.7102 37.9852 17.2653 37.4302L37.8003 17.0802C40.2053 14.4902 40.2053 10.6052 37.8003 8.20023Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M37.4296 17.4503L33.7296 20.9653L24.8496 12.2703L28.5496 8.57031L37.4296 17.4503Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M12.8253 38.9098L8.75525 39.6498C7.27525 39.8348 6.16525 38.7248 6.35025 37.2448L7.09025 33.1748L12.8253 38.9098Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg>
                    </div>
                </div>
                <div className={` ${styleMode ? "bg-black" : "bg-white"}  rounded-2xl mt-5 profile_shadow`}>
                    <ul>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between cursor-pointer " onClick={() => setSound(true)}>
                            <div className="flex gap-4 items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path opacity="0.35" d="M20.9626 5.31491C19.6502 4.86105 18.1887 5.27231 17.3187 6.36191L11.7494 13.3238H11.6855V26.4317H11.7494L17.3187 33.3936C17.9527 34.1866 18.9014 34.6241 19.878 34.6241C20.2417 34.6241 20.6071 34.5635 20.9626 34.4406C22.2767 33.9786 23.1549 32.7399 23.1549 31.3471V8.40837C23.1549 7.01566 22.2767 5.77697 20.9626 5.31491Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M8.40862 13.3232C5.69856 13.3232 3.49316 15.5286 3.49316 18.2387V21.5157C3.49316 24.2257 5.69856 26.4311 8.40862 26.4311H11.6856V13.3232H8.40862Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M26.9578 26.838C26.4466 26.838 25.9436 26.5988 25.6241 26.1531C25.0981 25.4175 25.2669 24.3951 26.0025 23.8658C27.2969 22.9401 28.0703 21.4491 28.0703 19.8778C28.0703 18.3064 27.2969 16.8154 26.0025 15.888C25.2669 15.3605 25.0965 14.338 25.6241 13.6007C26.15 12.8667 27.1708 12.6946 27.9114 13.2222C30.0627 14.764 31.3473 17.2513 31.3473 19.8778C31.3473 22.5042 30.0627 24.9915 27.9097 26.5333C27.6214 26.7397 27.2871 26.838 26.9578 26.838Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M30.7664 32.1725C30.2552 32.1725 29.7522 31.9333 29.4327 31.4876C28.9067 30.7519 29.0755 29.7279 29.8111 29.2003C32.8243 27.0457 34.6234 23.5606 34.6234 19.8773C34.6234 16.194 32.8243 12.7089 29.8111 10.5543C29.0755 10.0284 28.9051 9.00432 29.4327 8.267C29.9586 7.53296 30.981 7.36256 31.72 7.88851C35.5901 10.6575 37.9003 15.1388 37.9003 19.8773C37.9003 24.6158 35.5901 29.097 31.72 31.8661C31.43 32.0725 31.0973 32.1725 30.7664 32.1725Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Sound notifications
                                </h4>
                            </div>
                            <div className="flex gap-2 items-center">
                                <button
                                    onClick={handleToggle1}
                                    className={`w-12 h-6 rounded-full relative ${isOn1 ? 'bg-black' : 'bg-gray-300'
                                        } transition-colors`}
                                >
                                    <span className={`block w-4 h-4 rounded-full transform transition-transform absolute top-1/2 -translate-y-1/2 ${isOn1 ? 'left-1' : ''} ${!isOn1 ? 'right-1' : ''} ${isOn1 ? 'bg-white' : 'bg-gray-500'}`} />
                                </button>
                            </div>
                        </li>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between border border-r-0 border-l-0 border-light_border cursor-pointer" onClick={() => { setPaypal(true) }}>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path opacity="0.35" d="M16.3512 11.8866L16.3545 11.8883C16.4413 11.5262 16.751 11.2591 17.1377 11.2591H28.1745C28.1876 11.2591 28.2024 11.2542 28.2155 11.2542C27.9812 7.33985 24.6976 5.52441 21.7992 5.52441H10.764C10.3756 5.52441 10.0643 5.79968 9.98077 6.16015H9.97586L5.15216 28.3092H5.16363C5.15216 28.3632 5.13086 28.4124 5.13086 28.4697C5.13086 28.9236 5.49788 29.2824 5.9501 29.2824H12.5614L16.3512 11.8866Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path opacity="0.35" d="M28.2171 11.2549C28.2613 11.9725 28.2122 12.7525 28.0286 13.6159C26.9784 18.5265 23.1853 21.0825 18.4959 21.0825C18.4959 21.0825 15.6532 21.0825 14.9634 21.0825C14.5374 21.0825 14.3342 21.3332 14.2424 21.5249L12.817 28.1182L12.5663 29.2897H12.563L11.5291 34.038H11.5389C11.5275 34.0904 11.5078 34.1396 11.5078 34.1969C11.5078 34.6508 11.8732 35.0162 12.3271 35.0162H18.3337L18.3452 35.008C18.7319 35.0031 19.0399 34.7262 19.1186 34.3624L19.1333 34.351L20.6178 27.4562C20.6178 27.4562 20.721 26.7992 21.4124 26.7992C22.1039 26.7992 24.8352 26.7992 24.8352 26.7992C29.5246 26.7992 33.3554 24.2546 34.4073 19.3424C35.587 13.8044 31.6366 11.2745 28.2171 11.2549Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M17.1374 11.2591C16.7491 11.2591 16.4394 11.5262 16.3558 11.8899L16.3509 11.8866L14.2422 21.5258C14.3356 21.3341 14.5355 21.0834 14.9631 21.0834C15.6546 21.0834 18.4318 21.0834 18.4318 21.0834C23.1195 21.0834 26.9781 18.5274 28.0268 13.6169C28.2103 12.755 28.2578 11.9735 28.2152 11.2558C28.2021 11.2525 28.1873 11.2591 28.1742 11.2591H17.1374Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Update paypal
                                </h4>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.2424 14.3753C18.4423 15.1755 10.4847 23.133 9.68456 23.9332C8.08431 25.5334 8.08431 28.1263 9.68456 29.7266C11.2848 31.3268 13.8777 31.3268 15.478 29.7266C16.2781 28.9264 24.2357 20.9689 25.0358 20.1687C26.636 18.5685 26.636 15.9756 25.0358 14.3753C23.4355 12.7751 20.8413 12.7751 19.2424 14.3753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M25.0338 14.3755C24.2337 13.5754 16.2761 5.61785 15.476 4.81772C13.8758 3.21747 11.2829 3.21747 9.68261 4.81772C8.08236 6.41797 8.08236 9.01087 9.68261 10.6111C10.4827 11.4113 18.4403 19.3688 19.2404 20.169C20.8407 21.7692 23.4336 21.7692 25.0338 20.169C26.6341 18.5687 26.6341 15.9744 25.0338 14.3755Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </div>
                        </li>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between cursor-pointer" onClick={() => setSecurity(true)}>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path opacity="0.35" d="M29.7081 34.4114H10.0463C7.33134 34.4114 5.13086 32.2109 5.13086 29.496V16.3881C5.13086 13.6731 7.33134 11.4727 10.0463 11.4727H29.7081C32.4231 11.4727 34.6236 13.6731 34.6236 16.3881V29.496C34.6236 32.2109 32.4231 34.4114 29.7081 34.4114Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M13.3238 11.4725C13.3238 7.85309 16.2584 4.91857 19.8778 4.91857C23.4972 4.91857 26.4317 7.85309 26.4317 11.4725H29.7087C29.7087 6.04257 25.3077 1.6416 19.8778 1.6416C14.4478 1.6416 10.0469 6.04257 10.0469 11.4725H13.3238Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M19.8776 25.3998C21.235 25.3998 22.3354 24.2995 22.3354 22.9421C22.3354 21.5847 21.235 20.4844 19.8776 20.4844C18.5203 20.4844 17.4199 21.5847 17.4199 22.9421C17.4199 24.2995 18.5203 25.3998 19.8776 25.3998Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M28.07 25.3998C29.4274 25.3998 30.5278 24.2995 30.5278 22.9421C30.5278 21.5847 29.4274 20.4844 28.07 20.4844C26.7127 20.4844 25.6123 21.5847 25.6123 22.9421C25.6123 24.2995 26.7127 25.3998 28.07 25.3998Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M11.6853 25.3998C13.0426 25.3998 14.143 24.2995 14.143 22.9421C14.143 21.5847 13.0426 20.4844 11.6853 20.4844C10.3279 20.4844 9.22754 21.5847 9.22754 22.9421C9.22754 24.2995 10.3279 25.3998 11.6853 25.3998Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Security
                                </h4>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.2424 14.3753C18.4423 15.1755 10.4847 23.133 9.68456 23.9332C8.08431 25.5334 8.08431 28.1263 9.68456 29.7266C11.2848 31.3268 13.8777 31.3268 15.478 29.7266C16.2781 28.9264 24.2357 20.9689 25.0358 20.1687C26.636 18.5685 26.636 15.9756 25.0358 14.3753C23.4355 12.7751 20.8413 12.7751 19.2424 14.3753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M25.0338 14.3755C24.2337 13.5754 16.2761 5.61785 15.476 4.81772C13.8758 3.21747 11.2829 3.21747 9.68261 4.81772C8.08236 6.41797 8.08236 9.01087 9.68261 10.6111C10.4827 11.4113 18.4403 19.3688 19.2404 20.169C20.8407 21.7692 23.4336 21.7692 25.0338 20.169C26.6341 18.5687 26.6341 15.9744 25.0338 14.3755Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`${styleMode ? "bg-black" : "bg-white"}  rounded-2xl mt-5 profile_shadow `}>
                    <ul>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between cursor-pointer " onClick={() => { setContent(true) }} >
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path opacity="0.35" d="M19.878 3.49316C10.8287 3.49316 3.49316 10.8287 3.49316 19.878V26.4319H8.40862V19.878C8.40862 13.5436 13.5436 8.40862 19.878 8.40862C26.2124 8.40862 31.3474 13.5436 31.3474 19.878V26.4319H36.2628V19.878C36.2628 10.8287 28.9274 3.49316 19.878 3.49316Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M34.6242 19.8779H31.3473C29.5368 19.8779 28.0703 21.3444 28.0703 23.1549V26.4319C28.0703 28.2424 29.5368 29.7088 31.3473 29.7088H34.6242C35.5287 29.7088 36.2627 28.9748 36.2627 28.0703V21.5164C36.2627 20.612 35.5287 19.8779 34.6242 19.8779Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M5.13165 19.8779H8.40862C10.2191 19.8779 11.6856 21.3444 11.6856 23.1549V26.4319C11.6856 28.2424 10.2191 29.7088 8.40862 29.7088H5.13165C4.2272 29.7088 3.49316 28.9748 3.49316 28.0703V21.5164C3.49316 20.612 4.2272 19.8779 5.13165 19.8779Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path opacity="0.35" d="M8.40783 29.7088V28.0703H5.13086V29.7088C5.13086 33.3282 8.06538 36.2627 11.6848 36.2627H19.8772V32.9858H11.6848C9.87427 32.9858 8.40783 31.5193 8.40783 29.7088Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M19.8776 37.9006C21.6874 37.9006 23.1545 36.4335 23.1545 34.6236C23.1545 32.8138 21.6874 31.3467 19.8776 31.3467C18.0677 31.3467 16.6006 32.8138 16.6006 34.6236C16.6006 36.4335 18.0677 37.9006 19.8776 37.9006Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Contact
                                </h4>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.2424 14.3753C18.4423 15.1755 10.4847 23.133 9.68456 23.9332C8.08431 25.5334 8.08431 28.1263 9.68456 29.7266C11.2848 31.3268 13.8777 31.3268 15.478 29.7266C16.2781 28.9264 24.2357 20.9689 25.0358 20.1687C26.636 18.5685 26.636 15.9756 25.0358 14.3753C23.4355 12.7751 20.8413 12.7751 19.2424 14.3753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M25.0338 14.3755C24.2337 13.5754 16.2761 5.61785 15.476 4.81772C13.8758 3.21747 11.2829 3.21747 9.68261 4.81772C8.08236 6.41797 8.08236 9.01087 9.68261 10.6111C10.4827 11.4113 18.4403 19.3688 19.2404 20.169C20.8407 21.7692 23.4336 21.7692 25.0338 20.169C26.6341 18.5687 26.6341 15.9744 25.0338 14.3755Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </div>
                        </li>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between border-t border-light_border cursor-pointer" onClick={() => navigate("/dashboard/user/guideline")}>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path d="M29.5445 7.32753C29.0529 7.32753 28.5614 7.16369 28.0698 7.16369H14.962C12.1765 7.16369 10.0465 9.29372 10.0465 12.0791V31.7409C10.0465 32.2325 10.2103 32.724 10.2103 33.2156C8.24417 32.5602 6.76953 30.7579 6.76953 28.464V8.80217C6.76953 6.01675 8.89956 3.88672 11.685 3.88672H24.7929C27.0867 3.88672 28.8891 5.36135 29.5445 7.32753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path opacity="0.35" d="M10.0467 31.7402L8.4082 12.0784C8.4082 9.29293 12.1767 5.52441 14.9621 5.52441L28.07 7.1629C30.8554 7.1629 32.9855 9.29293 32.9855 12.0784V31.7402C32.9855 34.5256 30.8554 36.6556 28.07 36.6556H14.9621C12.1767 36.6556 10.0467 34.5256 10.0467 31.7402Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M26.4313 16.9938H16.6004C15.6173 16.9938 14.9619 16.3384 14.9619 15.3553C14.9619 14.3722 15.6173 13.7168 16.6004 13.7168H26.4313C27.4144 13.7168 28.0698 14.3722 28.0698 15.3553C28.0698 16.3384 27.4144 16.9938 26.4313 16.9938Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M26.4313 23.5485H16.6004C15.6173 23.5485 14.9619 22.8931 14.9619 21.91C14.9619 20.9269 15.6173 20.2715 16.6004 20.2715H26.4313C27.4144 20.2715 28.0698 20.9269 28.0698 21.91C28.0698 22.8931 27.4144 23.5485 26.4313 23.5485Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M26.4313 30.1022H16.6004C15.6173 30.1022 14.9619 29.4468 14.9619 28.4637C14.9619 27.4806 15.6173 26.8252 16.6004 26.8252H26.4313C27.4144 26.8252 28.0698 27.4806 28.0698 28.4637C28.0698 29.4468 27.4144 30.1022 26.4313 30.1022Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Guidelines
                                </h4>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.2424 14.3753C18.4423 15.1755 10.4847 23.133 9.68456 23.9332C8.08431 25.5334 8.08431 28.1263 9.68456 29.7266C11.2848 31.3268 13.8777 31.3268 15.478 29.7266C16.2781 28.9264 24.2357 20.9689 25.0358 20.1687C26.636 18.5685 26.636 15.9756 25.0358 14.3753C23.4355 12.7751 20.8413 12.7751 19.2424 14.3753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M25.0338 14.3755C24.2337 13.5754 16.2761 5.61785 15.476 4.81772C13.8758 3.21747 11.2829 3.21747 9.68261 4.81772C8.08236 6.41797 8.08236 9.01087 9.68261 10.6111C10.4827 11.4113 18.4403 19.3688 19.2404 20.169C20.8407 21.7692 23.4336 21.7692 25.0338 20.169C26.6341 18.5687 26.6341 15.9744 25.0338 14.3755Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </div>
                        </li>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between border-t border-light_border cursor-pointer " onClick={() => setReferFrd(true)}>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path opacity="0.35" d="M12.5042 16.3874C15.6714 16.3874 18.2389 13.8198 18.2389 10.6527C18.2389 7.48548 15.6714 4.91797 12.5042 4.91797C9.33704 4.91797 6.76953 7.48548 6.76953 10.6527C6.76953 13.8198 9.33704 16.3874 12.5042 16.3874Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path opacity="0.35" d="M27.2503 16.3874C30.4175 16.3874 32.985 13.8198 32.985 10.6527C32.985 7.48548 30.4175 4.91797 27.2503 4.91797C24.0831 4.91797 21.5156 7.48548 21.5156 10.6527C21.5156 13.8198 24.0831 16.3874 27.2503 16.3874Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path opacity="0.35" d="M17.4199 22.9414H30.5278C33.6901 22.9414 36.2625 25.5138 36.2625 28.6761C36.2625 31.8384 33.6901 34.4108 30.5278 34.4108H17.4199V22.9414Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M23.155 28.6761C23.155 31.8384 20.5826 34.4108 17.4203 34.4108H9.22786C7.65491 34.4108 6.21305 33.7718 5.1808 32.7232C4.13217 31.6909 3.49316 30.249 3.49316 28.6761C3.49316 25.5138 6.06558 22.9414 9.22786 22.9414H17.4203C18.9932 22.9414 20.4351 23.5804 21.4673 24.629C22.516 25.6613 23.155 27.1032 23.155 28.6761Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Refer a Friend
                                </h4>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.2424 14.3753C18.4423 15.1755 10.4847 23.133 9.68456 23.9332C8.08431 25.5334 8.08431 28.1263 9.68456 29.7266C11.2848 31.3268 13.8777 31.3268 15.478 29.7266C16.2781 28.9264 24.2357 20.9689 25.0358 20.1687C26.636 18.5685 26.636 15.9756 25.0358 14.3753C23.4355 12.7751 20.8413 12.7751 19.2424 14.3753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M25.0338 14.3755C24.2337 13.5754 16.2761 5.61785 15.476 4.81772C13.8758 3.21747 11.2829 3.21747 9.68261 4.81772C8.08236 6.41797 8.08236 9.01087 9.68261 10.6111C10.4827 11.4113 18.4403 19.3688 19.2404 20.169C20.8407 21.7692 23.4336 21.7692 25.0338 20.169C26.6341 18.5687 26.6341 15.9744 25.0338 14.3755Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </div>
                        </li>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between border-t border-light_border cursor-pointer" onClick={() => navigate("/dashboard/user/terms&conditions")}>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path d="M26.4319 33.1661C25.5291 33.1661 24.7934 32.432 24.7934 31.5276V20.0582C24.7934 18.2477 23.327 16.7812 21.5165 16.7812H13.324C12.4196 16.7812 11.6855 17.5153 11.6855 18.4197C11.6855 19.3242 12.4098 20.0582 13.324 20.0582C14.2383 20.0582 14.9625 20.7923 14.9625 21.6967V31.5276C14.9625 32.432 14.2498 33.1661 13.324 33.1661C12.3983 33.1661 11.6855 33.9001 11.6855 34.8046C11.6855 35.709 12.4196 36.4431 13.324 36.4431H26.4319C27.3363 36.4431 28.0704 35.709 28.0704 34.8046C28.0704 33.9001 27.3347 33.1661 26.4319 33.1661Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path opacity="0.35" d="M19.8774 13.5047C22.5921 13.5047 24.7928 11.304 24.7928 8.58928C24.7928 5.87455 22.5921 3.67383 19.8774 3.67383C17.1626 3.67383 14.9619 5.87455 14.9619 8.58928C14.9619 11.304 17.1626 13.5047 19.8774 13.5047Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Terms and Conditions
                                </h4>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.2424 14.3753C18.4423 15.1755 10.4847 23.133 9.68456 23.9332C8.08431 25.5334 8.08431 28.1263 9.68456 29.7266C11.2848 31.3268 13.8777 31.3268 15.478 29.7266C16.2781 28.9264 24.2357 20.9689 25.0358 20.1687C26.636 18.5685 26.636 15.9756 25.0358 14.3753C23.4355 12.7751 20.8413 12.7751 19.2424 14.3753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M25.0338 14.3755C24.2337 13.5754 16.2761 5.61785 15.476 4.81772C13.8758 3.21747 11.2829 3.21747 9.68261 4.81772C8.08236 6.41797 8.08236 9.01087 9.68261 10.6111C10.4827 11.4113 18.4403 19.3688 19.2404 20.169C20.8407 21.7692 23.4336 21.7692 25.0338 20.169C26.6341 18.5687 26.6341 15.9744 25.0338 14.3755Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </div>
                        </li>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between border-t border-light_border cursoir-pointer">
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 40 41" fill="none">
                                    <g clip-path="url(#clip0_1_2778)">
                                        <path opacity="0.35" d="M32.0381 14.2303C30.1793 9.27963 25.4165 5.75 19.8158 5.75C13.0996 5.75 7.57235 10.8199 6.83899 17.3385C3.06762 18.0621 0.21582 21.3679 0.21582 25.35C0.21582 29.8596 3.87285 33.5167 8.38249 33.5167H29.6158C35.0287 33.5167 39.4158 29.1295 39.4158 23.7167C39.4158 19.1417 36.2766 15.3115 32.0381 14.2303Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        <path d="M8.38285 10.658C6.83772 12.2015 4.83198 12.9806 2.80992 13.0198C1.66985 13.041 0.993651 14.2758 1.62248 15.2264C2.29542 16.244 3.22968 17.1407 4.46612 17.8169C7.13662 19.2771 10.5062 19.1415 13.0019 17.3987C17.3074 14.3918 17.6912 8.42029 14.1551 4.88412C13.7843 4.51336 13.3874 4.19159 12.9693 3.91229C12.0105 3.27365 10.7643 3.93352 10.743 5.08502C10.7071 7.10546 9.92798 9.11119 8.38285 10.658Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_2778">
                                            <rect width="39.2" height="39.2" fill="white" transform="translate(0.21582 0.849609)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Night Mode
                                </h4>
                            </div>
                            <div className="flex gap-2 items-center">
                                <button
                                    onClick={handleToggle2}
                                    className={`w-12 h-6 rounded-full relative ${styleMode ? 'bg-black' : 'bg-gray-300'
                                        } transition-colors`}
                                >
                                    <span className={`block w-4 h-4 rounded-full transform transition-transform absolute top-1/2 -translate-y-1/2 ${styleMode ? 'left-1 bg-white' : 'right-1 bg-gray-500'} `} />
                                </button>
                            </div>
                        </li>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between border-t border-light_border cursor-pointer" onClick={() => setDeleteAc(true)}>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path opacity="0.35" d="M19.8158 36.1745C28.8364 36.1745 36.1491 28.8618 36.1491 19.8411C36.1491 10.8205 28.8364 3.50781 19.8158 3.50781C10.7951 3.50781 3.48242 10.8205 3.48242 19.8411C3.48242 28.8618 10.7951 36.1745 19.8158 36.1745Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M27.9824 26.5887C27.9824 27.848 29.5014 28.4817 30.3965 27.5948L36.7551 21.2967C37.5636 20.4947 37.5636 19.188 36.7551 18.3861L30.3965 12.0879C29.5014 11.201 27.9824 11.8348 27.9824 13.0941V26.5887Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M32.5538 16.5747H19.8154V23.108H32.5538V16.5747Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M19.8155 23.108C21.6196 23.108 23.0822 21.6455 23.0822 19.8414C23.0822 18.0372 21.6196 16.5747 19.8155 16.5747C18.0114 16.5747 16.5488 18.0372 16.5488 19.8414C16.5488 21.6455 18.0114 23.108 19.8155 23.108Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Delete Account
                                </h4>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.2424 14.3753C18.4423 15.1755 10.4847 23.133 9.68456 23.9332C8.08431 25.5334 8.08431 28.1263 9.68456 29.7266C11.2848 31.3268 13.8777 31.3268 15.478 29.7266C16.2781 28.9264 24.2357 20.9689 25.0358 20.1687C26.636 18.5685 26.636 15.9756 25.0358 14.3753C23.4355 12.7751 20.8413 12.7751 19.2424 14.3753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M25.0338 14.3755C24.2337 13.5754 16.2761 5.61785 15.476 4.81772C13.8758 3.21747 11.2829 3.21747 9.68261 4.81772C8.08236 6.41797 8.08236 9.01087 9.68261 10.6111C10.4827 11.4113 18.4403 19.3688 19.2404 20.169C20.8407 21.7692 23.4336 21.7692 25.0338 20.169C26.6341 18.5687 26.6341 15.9744 25.0338 14.3755Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </div>
                        </li>
                        <li className="flex md:h-14 sm:h-12 h-12 items-center px-5 justify-between border-t border-light_border cursor-pointer" onClick={() => setSignOut(true)}>
                            <div className="flex gap-4 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                    <path opacity="0.35" d="M19.8158 36.5685C28.8364 36.5685 36.1491 29.2558 36.1491 20.2352C36.1491 11.2145 28.8364 3.90186 19.8158 3.90186C10.7951 3.90186 3.48242 11.2145 3.48242 20.2352C3.48242 29.2558 10.7951 36.5685 19.8158 36.5685Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M27.9824 26.9827C27.9824 28.242 29.5014 28.8758 30.3965 27.9889L36.7551 21.6907C37.5636 20.8888 37.5636 19.5821 36.7551 18.7801L30.3965 12.482C29.5014 11.5951 27.9824 12.2288 27.9824 13.4881V26.9827Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M32.5538 16.9688H19.8154V23.5021H32.5538V16.9688Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M19.8155 23.5021C21.6196 23.5021 23.0822 22.0395 23.0822 20.2354C23.0822 18.4313 21.6196 16.9688 19.8155 16.9688C18.0114 16.9688 16.5488 18.4313 16.5488 20.2354C16.5488 22.0395 18.0114 23.5021 19.8155 23.5021Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                                <h4 className={` ${styleMode ? "text-white" : "text-dark"} text-lg`}>
                                    Signout
                                </h4>
                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.2424 14.3753C18.4423 15.1755 10.4847 23.133 9.68456 23.9332C8.08431 25.5334 8.08431 28.1263 9.68456 29.7266C11.2848 31.3268 13.8777 31.3268 15.478 29.7266C16.2781 28.9264 24.2357 20.9689 25.0358 20.1687C26.636 18.5685 26.636 15.9756 25.0358 14.3753C23.4355 12.7751 20.8413 12.7751 19.2424 14.3753Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M25.0338 14.3755C24.2337 13.5754 16.2761 5.61785 15.476 4.81772C13.8758 3.21747 11.2829 3.21747 9.68261 4.81772C8.08236 6.41797 8.08236 9.01087 9.68261 10.6111C10.4827 11.4113 18.4403 19.3688 19.2404 20.169C20.8407 21.7692 23.4336 21.7692 25.0338 20.169C26.6341 18.5687 26.6341 15.9744 25.0338 14.3755Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            {/* User Profile Edit */}
            <div className={`${styleMode ? "bg-white" : "bg-black"} font-plus w-full h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${profileEdit ? " block" : "hidden"}`}>
                <div className={`${styleMode ? "bg-black text-white" : "bg-white"} modal sm:px-10 px-6 py-7 rounded-2xl relative `} >
                    <div className="sm:w-96 w-72">
                        <div className="flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 42 42" fill="none" onClick={() => { setProfileEdit(false) }}>
                                <path opacity="0.35" d="M17.7796 24.636C18.7842 23.6315 28.775 13.6406 29.7796 12.636C31.7887 10.6269 31.7887 7.37147 29.7796 5.36233C27.7705 3.35318 24.515 3.35318 22.5059 5.36233C21.5013 6.3669 11.5105 16.3578 10.5059 17.3623C8.49674 19.3715 8.49674 22.6269 10.5059 24.636C12.515 26.6452 15.7722 26.6452 17.7796 24.636Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M10.5069 24.636C11.5114 25.6406 21.5023 35.6315 22.5069 36.636C24.516 38.6452 27.7714 38.6452 29.7806 36.636C31.7897 34.6269 31.7897 31.3715 29.7806 29.3623C28.776 28.3578 18.7851 18.3669 17.7806 17.3623C15.7714 15.3532 12.516 15.3532 10.5069 17.3623C8.49771 19.3715 8.49771 22.6286 10.5069 24.636Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                            <h3 className="text-xl font-bold">Edit Profile &nbsp; &nbsp;&nbsp;</h3>
                            <div></div>
                        </div>
                        <div className="text-center py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 91 90" fill="none" className="mx-auto">
                                <rect x="0.5" width="90" height="90" rx="45" fill="#F4C755" />
                                <path opacity="0.35" d="M59.5117 52.9346H31.4854V64.1451H59.5117V52.9346Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path opacity="0.35" d="M45.4985 44.5263C53.2378 44.5263 59.5117 38.2524 59.5117 30.5132C59.5117 22.7739 53.2378 16.5 45.4985 16.5C37.7593 16.5 31.4854 22.7739 31.4854 30.5132C31.4854 38.2524 37.7593 44.5263 45.4985 44.5263Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M70.5634 59.6777C69.7982 55.684 66.0791 52.9346 62.0125 52.9346H53.9073L45.4994 64.1451L37.0915 52.9346H31.4891C24.9197 52.9346 21.2006 55.684 20.4355 59.6777C19.4041 65.0503 23.496 69.7504 28.6836 69.7504H62.3152C67.5029 69.7504 71.5947 65.0503 70.5634 59.6777Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </div>
                        <div className="h-60 overflow-y-auto custom_auto_h">
                            <form>
                                <div className="mt-4">
                                    <label className="text-sm">First name</label>
                                    <input type="text" className={` text-sm h-8 w-full rounded-md custom_input py-1 px-3 ${styleMode ? "bg-[#242424] ftext-[#BCBCBC] " : "bg-bg_light "}`} placeholder="Enter your firstname" />
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm">Last name</label>
                                    <input type="text" className={` text-sm h-8 w-full rounded-md custom_input py-1 px-3 ${styleMode ? " bg-[#242424] text-[#BCBCBC]" : "bg-bg_light "}`} placeholder="Enter your lastname" />
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm">About</label>
                                    <textarea className={` w-full rounded-md custom_input py-1 px-3 ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-bg_light"} `} rows={5}></textarea>
                                </div>
                                <div className="text-right mt-4">
                                    <button className={` h-8 rounded-md px-10 ${styleMode ? "bg-white text-black " : "bg-black text-white "}`}>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Edit user Sound setting */}
            <div className={`${styleMode ? "bg-white" : "bg-black"} font-plus w-full h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${sound ? " block" : "hidden"}`}>
                <div className={`${styleMode ? "bg-black text-white" : "bg-white"} modal  sm:px-10 px-5 py-7 rounded-2xl relative`}  >
                    <div className="sm:w-96 w-72">
                        <div className="flex justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 42 42" fill="none" onClick={() => { setSound(false) }}>
                                <path opacity="0.35" d="M17.7796 24.636C18.7842 23.6315 28.775 13.6406 29.7796 12.636C31.7887 10.6269 31.7887 7.37147 29.7796 5.36233C27.7705 3.35318 24.515 3.35318 22.5059 5.36233C21.5013 6.3669 11.5105 16.3578 10.5059 17.3623C8.49674 19.3715 8.49674 22.6269 10.5059 24.636C12.515 26.6452 15.7722 26.6452 17.7796 24.636Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M10.5069 24.636C11.5114 25.6406 21.5023 35.6315 22.5069 36.636C24.516 38.6452 27.7714 38.6452 29.7806 36.636C31.7897 34.6269 31.7897 31.3715 29.7806 29.3623C28.776 28.3578 18.7851 18.3669 17.7806 17.3623C15.7714 15.3532 12.516 15.3532 10.5069 17.3623C8.49771 19.3715 8.49771 22.6286 10.5069 24.636Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                            <h3 className="text-xl font-bold">Sound notification</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none" onClick={() => { setSound(false) }}>
                                <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </div>
                        <div className="sm:h-60 h-40">
                            <div className="mt-10 flex items-center justify-between py-5 border-b border-light_border">
                                <h6 className="sm:text-xl">Turn on Sound notifications</h6>
                                <div className="flex gap-2 items-center">
                                    <button
                                        onClick={handleToggle1}
                                        className={`w-12 h-6 rounded-full relative ${isOn1 ? 'bg-black' : 'bg-gray-300'
                                            } transition-colors`}
                                    >
                                        <span className={`block w-4 h-4 rounded-full transform transition-transform absolute top-1/2 -translate-y-1/2 ${isOn1 ? 'left-1' : ''} ${!isOn1 ? 'right-1' : ''} ${isOn1 ? 'bg-white' : 'bg-gray-500'}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* user paypal setting */}
            <div className={`${styleMode ? "bg-white" : "bg-black"} font-plus w-full h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${paypal ? " block" : "hidden"}`}>
                <div className={`${styleMode ? "bg-black text-white" : "bg-white"} modal  sm:px-10 px-5 py-7 rounded-2xl relative`}  >
                    <div className="sm:w-72 w-60 sm:h-72 h-60 flex justify-center items-center">
                        <div className="">
                            <div className="sm:w-40 w-32 sm:h-40 h-32 wrong_img mx-auto">

                            </div>
                            <h6 className="sm:text-3xl text-xl font-bold font-plus">Action not allowed.</h6>
                        </div>
                    </div>
                    <div className="absolute sm:top-4 top-4 sm:right-5 right-5 cursor-pointer" onClick={() => { setPaypal(false) }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                            <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Edit user Security */}
            <div className={`${styleMode ? "bg-white" : "bg-black"} font-plus w-full h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${security ? " block" : "hidden"}`}>
                <div className={`${styleMode ? "bg-black text-white" : "bg-white"} modal  sm:px-10 px-5 py-7 rounded-2xl relative`}  >

                    <UserSecurity setSecurity={setSecurity} />
                </div>
            </div>
            {/* User Contect Us*/}
            <ContactUs content={content} setContent={setContent} />
            {/* User Refer Friends */}
            <ReferFriends referFrd={referFrd} setReferFrd={setReferFrd} />
            {/* Delete Account setting */}
            <DeleteAccount deleteAc={deleteAc} setDeleteAc={setDeleteAc} />
            {/* Sign Out Account */}
            <SignOut signOut={signOut} setSignOut={setSignOut} />
        </Dashboardlayout>
    )
}
export default UserProfile;