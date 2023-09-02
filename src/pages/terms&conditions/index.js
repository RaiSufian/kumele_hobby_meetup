import Dashboardlayout from "../../layouts/dashboardlayout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const TermsConditions = () => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <Dashboardlayout>
            <div className="min-h-screen  m-4 font-plus">
                <div className={`rounded-lg ${styleMode ? "bg-black text-white" : "bg-white "}`}>
                    <div className={`flex items-center gap-10 p-5 border-b  ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`}>
                        <Link to="/dashboard/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36" fill="none">
                                <path opacity="0.35" d="M15.3162 21.03C16.1533 20.1929 24.479 11.8672 25.3162 11.03C26.9905 9.35575 26.9905 6.64289 25.3162 4.9686C23.6419 3.29432 20.929 3.29432 19.2547 4.9686C18.4176 5.80575 10.0919 14.1315 9.25474 14.9686C7.58045 16.6429 7.58045 19.3557 9.25474 21.03C10.929 22.7043 13.6433 22.7043 15.3162 21.03Z" fill={` ${styleMode ? "white" : "black"}`} />
                                <path d="M9.25571 21.03C10.0929 21.8672 18.4186 30.1929 19.2557 31.03C20.93 32.7043 23.6429 32.7043 25.3171 31.03C26.9914 29.3557 26.9914 26.6429 25.3171 24.9686C24.48 24.1315 16.1543 15.8057 15.3171 14.9686C13.6429 13.2943 10.93 13.2943 9.25571 14.9686C7.58143 16.6429 7.58143 19.3572 9.25571 21.03Z" fill={` ${styleMode ? "white" : "black"}`} />
                            </svg>
                        </Link >
                        <h2 className=" text-xl font-bold">Terms & Conditions</h2>
                    </div>
                    <div className="p-5">
                        <div className={`my-4 px-2 `}>
                            <h2 className="font-semibold text-xl">Kumele Terms of use</h2>
                            <p className="pb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu fermentum augue, sit amet convallis augue. Integer eu iaculis sem, sed euismod eros. Nulla facilisi. Proin luctus odio nunc, sed laoreet est bibendum vitae. Sed a eleifend ex. Integer varius rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend ligula. Aliquam faucibus erat ut tincidunt cursus. Cras et ullamcorper velit. In hac habitasse platea dictumst. Nunc vitae dui quis risus elementum auctor.
                            </p>
                            <p className="pb-5">
                                Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.
                            </p>
                            <p className="pb-5">
                                Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere. Cras non leo at ipsum fringilla ullamcorper. Etiam velit est, tempor id lobortis eu, lacinia id sem. Nam ornare mattis dui a porta. Aliquam a ullamcorper velit, et hendrerit eros. Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboardlayout>

    )
}
export default TermsConditions;