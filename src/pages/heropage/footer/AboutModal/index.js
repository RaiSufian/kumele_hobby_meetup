import { useSelector } from "react-redux";
const AboutModal = ({ setabout }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <>
            <div className={` ${styleMode ? "bg-white" : "bg-black"} w-full  h-screen  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center `}>
                <div className={` ${styleMode ? "bg-black" : "bg-white text-black"} modal  rounded-3xl relative `} >
                    <div className="sm:w-[45rem] w-[28rem] text-center">
                        <div className={`py-3 px-5 flex justify-start  items-center gap-5 border-b ${styleMode ? " bg-[#454545] rounded-t-3xl border-[#6B6B6B]" : "border-[#EEECEC]"} cursor-pointer`} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 38 38" fill="none" onClick={() => setabout(false)}>
                                <path opacity="0.35" d="M25.9981 7.83928C25.6975 8.13842 21.8301 12.0073 19.0753 14.7621C16.3205 12.0073 12.4531 8.13994 12.1524 7.83928C10.9605 6.64732 9.02832 6.64732 7.83635 7.83928C6.64439 9.03125 6.64439 10.9634 7.83635 12.1554C8.13549 12.456 12.0044 16.3234 14.7592 19.0782C12.0044 21.833 8.13702 25.7004 7.83635 26.0011C6.64439 27.193 6.64439 29.1252 7.83635 30.3171C9.02832 31.5091 10.9605 31.5091 12.1524 30.3171C12.3692 30.1004 30.0975 12.3721 30.3142 12.1554C31.5062 10.9634 31.5062 9.03125 30.3142 7.83928C29.1223 6.64732 27.1901 6.64732 25.9981 7.83928Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M30.3141 30.3132C31.5061 29.1212 31.5061 27.189 30.3141 25.9971C30.015 25.6979 26.1461 21.829 23.3913 19.0742L19.0752 23.3903C21.83 26.1451 25.6974 30.0125 25.998 30.3132C27.19 31.5051 29.1222 31.5051 30.3141 30.3132Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                            <h6 className={` text-xl font-bold font-plus  ${styleMode ? "text-white" : "text-black"}`}>About Us</h6>
                        </div>
                        <div className="px-6 py-4 text-start">
                            <h3 className="text-xl font-plus font-semibold">Our Inspiration</h3>
                            <div className="text-sm">
                                <p className="mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu fermentum augue, sit amet convallis augue. Integer eu iaculis sem, sed euismod eros. Nulla facilisi. Proin luctus odio nunc, sed laoreet est bibendum vitae. Sed a eleifend ex. Integer varius rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend ligula. Aliquam faucibus erat ut tincidunt cursus. Cras et ullamcorper velit. In hac habitasse platea dictumst. Nunc vitae dui quis risus elementum auctor.
                                </p>
                                <p className="mt-1">
                                    Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.
                                </p>
                                <p className="mt-1">
                                    Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutModal;
