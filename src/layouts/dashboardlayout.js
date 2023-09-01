import Header from "../components/header";
import MainMenu from '../components/mainMenu';
import { useState } from "react";
import { useSelector } from "react-redux";
const Dashboardlayout = ({ children }) => {

    const [isOpen, setOpen] = useState(false);
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={` ${styleMode ? "bg-[#454545]" : "bg-page_bg "}  `}>
            <Header isOpen={isOpen} setOpen={setOpen} />
            <div className="flex">
                <MainMenu isOpen={isOpen} setOpen={setOpen} />
                <div className="flex-1 mt-16 md:mt-24 lg:ml-24">
                    {children}
                </div>
            </div>

        </div>
    )
}
export default Dashboardlayout;