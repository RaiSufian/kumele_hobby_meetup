import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
const AuthLayout = ({ children }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={` ${styleMode ? "bg-black" : ""} sm:max-h-screen overflow-hidden `}>
            <div className="relative ">
                <img src="/img/authheader.png" alt="bg_img" className="w-100 h-auto" />
                <Link to="/">
                    <img src="/img/icon.png" alt="logo_icon" className="absolute xl:top-16 md:top-8 sm:top-6 top-4 xl:left-36 md:left-24 sm:left-16 left-12  md:w-20 sm:w-14 w-10 cursor-pointer" />
                </Link>

            </div>
            <div className="sm:flex lg:gap-6 gap-1 items-center">
                <div className=" sm:w-1/2 flex justify-center items-center lg:px-10">
                    {styleMode ? <img src="/img/auth_dark.png" className="my-4"/> : <img src="/img/authimg1.png" />}

                </div>
                <div className=" sm:w-1/2 pt-8 custom_auto_h overflow-y-auto">
                    {children}
                </div>
            </div>

        </div>
    )
}
export default AuthLayout;