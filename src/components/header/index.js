import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'
const Header = ({ isOpen, setOpen }) => {
    return (
        <header className="bg-white lg:px-12 px-2 py-3 border-b border-white_border fixed top-0 left-0 w-full z-30">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <Hamburger toggled={isOpen} toggle={setOpen} className="text-xl block lg:hidden"/>
                    <img src="/img/dark_logo.png" alt="logo" className="md:w-44 w-28" />
                </div>
                <div className="md:w-14 md:h-14 w-8 h-8">
                    <Link to="/dashboard/profile">
                        <img src="/img/profile1.png" alt="profile" />
                    </Link>
                </div>
            </div>
        </header>
    )
}
export default Header;