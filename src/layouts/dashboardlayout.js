import Header from "../components/header";
import MainMenu from '../components/mainMenu';
import { useState } from "react";
const Dashboardlayout = ({ children }) => {

    const [isOpen, setOpen] = useState(false);
    return (
        <div className="bg-page_bg">
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