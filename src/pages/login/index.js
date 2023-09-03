import AuthLayout from "../../layouts/authLayout";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useState } from "react";
const Login = () => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    const [login, setlogin] = useState(false);
    const navigate = useNavigate();
    const getlogin = (event) => {
        event.preventDefault();
        setlogin(true);
        setTimeout(() => {
            navigate("/dashboard")
        }, 1000);

    }
    return (
        <AuthLayout >
            <div className="px-3 xl:pr-20">
                <h3 className={` lg:text-5xl text-4xl font-bold font-plus ${styleMode ? "text-white" : ""} `}>
                    Login</h3>
                <p className={` ${styleMode ? "text-[#959595]" : "text-light "} font-plus py-2 `}> Don’t  have an account? <Link to="/Signup" className="text-theme_blue font-semibold">Signup</Link></p>
                <form className="lg:pr-8" onSubmit={getlogin}>
                    <div className={`${styleMode ? "bg-[#242424]" : "bg-bg_light "} rounded-lg flex gap-3 p-2 mt-5 `}>
                        <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 39 38" fill="none">
                            <path opacity="0.35" d="M3.43066 26.9154V11.082C3.43066 8.45845 5.55708 6.33203 8.18066 6.33203H30.3473C32.9709 6.33203 35.0973 8.45845 35.0973 11.082V26.9154C35.0973 29.5389 32.9709 31.6654 30.3473 31.6654H8.18066C5.55708 31.6654 3.43066 29.5389 3.43066 26.9154Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M35.0973 11.0823C35.0973 10.3255 34.9042 9.61929 34.5891 8.98438L21.6263 16.7617C20.1712 17.6357 18.3599 17.6357 16.9032 16.7617L3.93891 8.98438C3.62383 9.61929 3.43066 10.3255 3.43066 11.0823V14.2189L14.457 20.8356C15.9406 21.7255 17.6015 22.1704 19.264 22.1704C20.9249 22.1704 22.589 21.7255 24.0694 20.8356L35.0973 14.2189V11.0823Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg></span>
                        <input type="email" placeholder="Enter email" className={` ${styleMode ? "text-[#808080] bg-[#242424]" : "bg-bg_light text-light "} w-full custom_input `} />
                    </div>
                    <div className={`${styleMode ? "bg-[#242424]" : "bg-bg_light "}  rounded-lg flex gap-3 p-2 mt-5 `}>
                        <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 39 38" fill="none">
                            <path opacity="0.35" d="M28.7642 33.2487H9.76416C7.14058 33.2487 5.01416 31.1223 5.01416 28.4987V15.832C5.01416 13.2084 7.14058 11.082 9.76416 11.082H28.7642C31.3877 11.082 33.5142 13.2084 33.5142 15.832V28.4987C33.5142 31.1223 31.3877 33.2487 28.7642 33.2487Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M12.9308 11.082C12.9308 7.58445 15.7666 4.7487 19.2642 4.7487C22.7617 4.7487 25.5975 7.58445 25.5975 11.082H28.7642C28.7642 5.83487 24.5113 1.58203 19.2642 1.58203C14.017 1.58203 9.76416 5.83487 9.76416 11.082H12.9308Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M19.2642 24.543C20.5758 24.543 21.6392 23.4796 21.6392 22.168C21.6392 20.8563 20.5758 19.793 19.2642 19.793C17.9525 19.793 16.8892 20.8563 16.8892 22.168C16.8892 23.4796 17.9525 24.543 19.2642 24.543Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M27.1807 24.543C28.4923 24.543 29.5557 23.4796 29.5557 22.168C29.5557 20.8563 28.4923 19.793 27.1807 19.793C25.869 19.793 24.8057 20.8563 24.8057 22.168C24.8057 23.4796 25.869 24.543 27.1807 24.543Z" fill={` ${styleMode ? "white" : "black"}`} />
                            <path d="M11.3477 24.543C12.6593 24.543 13.7227 23.4796 13.7227 22.168C13.7227 20.8563 12.6593 19.793 11.3477 19.793C10.036 19.793 8.97266 20.8563 8.97266 22.168C8.97266 23.4796 10.036 24.543 11.3477 24.543Z" fill={` ${styleMode ? "white" : "black"}`} />
                        </svg></span>
                        <input type="email" placeholder="Enter Password" className={` ${styleMode ? "text-[#808080] bg-[#242424]" : "bg-bg_light text-light "} w-full custom_input `} />
                        <span className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="33" viewBox="0 0 39 38" fill="none">
                                <path opacity="0.35" d="M3.85674 24.7396C1.20465 21.3671 1.20465 16.6313 3.85674 13.2588C6.96957 9.30208 12.1059 4.75 19.2642 4.75C26.4224 4.75 31.5587 9.30208 34.6716 13.2604C37.3237 16.6329 37.3237 21.3687 34.6716 24.7412C31.5587 28.6979 26.4224 33.25 19.2642 33.25C12.1059 33.25 6.96957 28.6979 3.85674 24.7396Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M19.2642 9.5C14.017 9.5 9.76416 13.7528 9.76416 19C9.76416 24.2472 14.017 28.5 19.2642 28.5C24.5113 28.5 28.7642 24.2472 28.7642 19C28.7642 13.7528 24.5113 9.5 19.2642 9.5ZM20.8475 20.5833C19.0979 20.5833 17.6808 19.1663 17.6808 17.4167C17.6808 15.6671 19.0979 14.25 20.8475 14.25C22.5971 14.25 24.0142 15.6671 24.0142 17.4167C24.0142 19.1663 22.5971 20.5833 20.8475 20.5833Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </span>
                    </div>
                    <div className="flex justify-between py-8 px-1 ">
                        <div className="flex gap-4 items-center">
                            <input type="checkbox" className="w-5 h-5 border-2 border-gray-400 bg-black" />
                            <span className={` text-xl ${styleMode ?  "text-white" : "text-dark "}`}>Remember me</span>
                        </div>
                        <Link to="#" className="font-bold text-theme_blue text-lg font-plus">Forgot Password?
                        </Link>
                    </div>
                    <div className="py-2 text-center">
                        <span className={` ${styleMode ? "bg-black text-white before:bg-white" :  "bg-white text-dark before:bg-black" } mx-auto text-lg  px-3 z-10 font-semibold font-plus  relative before:absolute before:top-1/2 before:left-1/2 before:h-0.5 before:w-80  before:content-[''] before:-translate-y-1/2 before:-translate-x-1/2 before:-z-10 `}>
                            Or Signin with

                        </span>
                        <ul className="pt-7">
                            <li className="inline-flex mx-3 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 59 59" fill="none">
                                    <path opacity="0.35" d="M39.0849 51.5672H19.6522C12.9455 51.5672 7.50684 46.1284 7.50684 39.4218V19.9891C7.50684 13.2825 12.9455 7.84375 19.6522 7.84375H39.0849C45.7915 7.84375 51.2302 13.2825 51.2302 19.9891V39.4218C51.2302 46.1284 45.7915 51.5672 39.0849 51.5672Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M29.3685 17.5586C22.6618 17.5586 17.2231 22.9973 17.2231 29.704C17.2231 36.4107 22.6618 41.8494 29.3685 41.8494C36.0752 41.8494 41.5139 36.4107 41.5139 29.704C41.5139 22.9973 36.0752 17.5586 29.3685 17.5586ZM29.3685 36.9912C25.3436 36.9912 22.0813 33.729 22.0813 29.704C22.0813 25.679 25.3436 22.4167 29.3685 22.4167C33.3935 22.4167 36.6558 25.679 36.6558 29.704C36.6558 33.729 33.3935 36.9912 29.3685 36.9912Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M41.514 19.9871C42.8556 19.9871 43.9431 18.8995 43.9431 17.558C43.9431 16.2164 42.8556 15.1289 41.514 15.1289C40.1725 15.1289 39.085 16.2164 39.085 17.558C39.085 18.8995 40.1725 19.9871 41.514 19.9871Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </li>
                            <li className="inline-flex mx-3 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 59 59" fill="none">
                                    <path opacity="0.35" d="M46.5354 10.2734H12.5283V49.1387H46.5354V10.2734Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    <path d="M46.5355 10.2734L29.532 22.3945L12.5284 10.2734C8.50346 10.2734 5.24121 13.5357 5.24121 17.5607V41.8514C5.24121 45.8764 8.50346 49.1387 12.5284 49.1387V19.278L29.532 31.3238L46.5355 19.278V49.1387C50.5605 49.1387 53.8228 45.8764 53.8228 41.8514V17.5607C53.8228 13.5357 50.5605 10.2734 46.5355 10.2734Z" fill={` ${styleMode ? "white" : "black"}`} />
                                </svg>
                            </li>
                            <li className="inline-flex mx-3 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 59 59" fill="none">
                                    <g clip-path="url(#clip0_1_16499)">
                                        <path opacity="0.35" d="M41.811 11.5039C37.152 11.5039 35.2039 14.3654 31.9756 14.3654C28.6551 14.3654 25.6211 11.6812 21.6035 11.6812C16.138 11.6837 7.83301 16.7483 7.83301 28.6726C7.83301 39.5233 17.6635 51.5643 23.2115 51.5643C26.5831 51.5983 27.4017 49.4412 31.9756 49.4194C36.5544 49.3854 37.5406 51.5934 40.9171 51.5643C44.7186 51.5351 47.6893 47.362 49.8585 44.0536C50.2229 43.4973 50.5362 43.0066 50.8204 42.5451C52.154 40.3662 51.6269 37.5946 49.6544 35.9696C44.9712 32.1098 44.2935 23.9748 49.5184 19.9474C51.3888 18.5045 51.3014 15.5945 49.3362 14.2852C46.8659 12.6334 43.9121 11.5039 41.811 11.5039Z" fill={` ${styleMode ? "white" : "black"}`} />
                                        <path d="M40.8974 2.52447C41.0772 1.35608 40.0594 0.309151 38.9153 0.605499C36.6635 1.18848 34.3972 2.47589 32.913 4.01835C31.6232 5.36649 30.5374 7.20045 30.2921 9.12428C30.1536 10.2174 31.0815 11.1939 32.1649 11.002C34.5867 10.572 36.8603 9.21415 38.3372 7.57938C39.5833 6.20452 40.6059 4.43373 40.8974 2.52447Z" fill={` ${styleMode ? "white" : "black"}`} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_16499">
                                            <rect width="58.2979" height="58.2979" fill="white" transform="translate(0.545898 0.554688)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                        </ul>
                    </div>

                    <button className={` ${styleMode  ? "bg-white text-black" : "bg-black text-white"} w-full  mt-3 rounded-lg text-lg font-plus py-2 `} >Login</button>

                </form>
            </div>
            {login ?
                <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                    <div className={` ${styleMode  ? "bg-black" :  "bg-white "} modal p-10 rounded-3xl relative `} >
                        <div className="md:w-72 w-60">
                            <div className="md:w-52 w-40 md:h-52 h-40 login_gif mx-auto">

                            </div>
                            <p className={` ${styleMode ? "text-white" : ""} text-4xl font-bold text-center mt-5 `}>Login Succesful</p>
                        </div>
                        <div className="absolute top-9 right-9" onClick={() => setlogin(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27306C32.6781 9.66506 27.6101 14.7351 24.0001 18.3451C20.3901 14.7351 15.3221 9.66706 14.9281 9.27306C13.3661 7.71106 10.8341 7.71106 9.27209 9.27306C7.71009 10.8351 7.71009 13.3671 9.27209 14.9291C9.66409 15.3231 14.7341 20.3911 18.3441 24.0011C14.7341 27.6111 9.66609 32.6791 9.27209 33.0731C7.71009 34.6351 7.71009 37.1671 9.27209 38.7291C10.8341 40.2911 13.3661 40.2911 14.9281 38.7291C15.2121 38.4451 38.4441 15.2131 38.7281 14.9291C40.2901 13.3671 40.2901 10.8351 38.7281 9.27306C37.1661 7.71106 34.6341 7.71106 33.0721 9.27306Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </div>
                    </div>
                </div>
                : null}

        </AuthLayout >
    )
}
export default Login;