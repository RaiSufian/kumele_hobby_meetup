import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';
import { useSelector } from "react-redux";
const Header = ({ isOpen, setOpen }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <header className={` ${styleMode ? "bg-[#0D0D0D] border-black" : "bg-white  border-white_border "} lg:px-12 px-2 py-3 border-b fixed top-0 left-0 w-full z-30 `}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <Hamburger toggled={isOpen} toggle={setOpen} className={` ${styleMode ? "text-white" : ""} text-xl block lg:hidden `} />
                    <img src="/img/dark_logo.png" alt="logo" className="md:w-44 w-28" />
                </div>
                <div className={` ${styleMode ? "border border-white rounded-full" : ""} md:w-14 md:h-14 w-8 h-8 `}>
                    <Link to="/dashboard/profile">
                        <img src="/img/profile1.png" alt="profile" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header;