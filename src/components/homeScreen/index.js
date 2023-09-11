import { useSelector } from "react-redux";
const HomeScreen = ({ setSlide }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);

    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 z-50">

            {/* <div className="w-full h-screen homePage ">
            </div> */}
            <div style={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                position: 'relative',
            }}>
                <video autoPlay
                    loop
                    muted
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}  >
                    <source src="/img/front_img.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="absolute top-3 left-3 z-20">
                <img src="/img/icon.png" alt="logo" className="md:w-24 w-16"  />
            </div>
            <button className={`skip_shadow w-20 h-7 rounded-xl absolute md:bottom-14 bottom-5 md:right-16 right-5 border font-medium text-theme_blue border-theme_blue  ${styleMode ? "bg-black" : " bg-white  "}`} onClick={() => setSlide(1)}>Skip</button>
        </div>
    )
}
export default HomeScreen