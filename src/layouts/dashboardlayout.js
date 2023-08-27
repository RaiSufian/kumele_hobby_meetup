import Header from "../components/header";
import MainMenu from '../components/mainMenu'
const Dashboardlayout = ({ children }) => {
    return (
        <div className="bg-[#f0f0f0]">
            <Header />
            <div className="flex">
                <MainMenu />
                <div className="flex-1 mt-24 ml-24">
                    {children}
                </div>
            </div>

        </div>
    )
}
export default Dashboardlayout;