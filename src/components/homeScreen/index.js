import { useSelector } from "react-redux";
const HomeScreen = ({ setSlide }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    console.log("my current style mode is", styleMode)
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-50">
            <div className="w-full h-screen homePage ">
            </div>
            <button className={`skip_shadow w-20 h-7 rounded-xl absolute md:bottom-14 bottom-5 md:right-16 right-5 border font-medium text-theme_blue border-theme_blue  ${styleMode ? "bg-black" : " bg-white  "}`} onClick={() => setSlide(1)}>Skip</button>
        </div>
    )
}
export default HomeScreen