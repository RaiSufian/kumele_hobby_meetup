import Header from "../components/header";
import MainMenu from '../components/mainMenu';
import { useState } from "react";
const Dashboardlayout = ({ children }) => {
    const [menu, setmenu] = useState(false);
    return (
        <div className="bg-page_bg">
            <Header menu={menu} setmenu={setmenu} />
            <div className="flex">
                <MainMenu menu={menu} setmenu={setmenu} />
                <div className="flex-1 mt-24 lg:ml-24">
                    {children}
                </div>
            </div>

        </div>
    )
}
export default Dashboardlayout;