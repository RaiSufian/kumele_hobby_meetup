import { Link } from "react-router-dom"
const SidebarSub = () => {
    const list = [0, 1, 2, 3, 4]
    return (
        <div className="bg-white p-3 rounded-md">
            <div className="text-end">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold font-plus text-2xl">Notifications</h2>
                    <Link className="text-[#38579E] font-semibold font-plus texxt-lg" to="/user/notificaitons">View all</Link>
                </div>

                <ul className="mt-5">
                    {list.map((value, index) => {
                        return (
                            <li className="flex gap-3 py-2" key={index}>
                                <img src="/img/profileSub.png" alt="profile_img" className="w-16 h-16" />
                                <div className=" text-start">
                                    <div className="flex justify-between">
                                        <h6 className="text-md font-plus font-semibold">Karaoke Evening</h6>
                                        <span className="text-[#38579E] text-sm font-plus font-semibold">12:33 PM</span>
                                    </div>

                                    <div className="flex items-center py-1">
                                        <span className="bg-black h-7 px-3 flex items-center rounded-l-3xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <g clip-path="url(#clip0_243_10765)">
                                                    <path opacity="0.35" d="M15.2593 15.2589L17.181 13.893L17.4493 6.92303C17.481 6.21803 17.031 5.58803 16.3568 5.3797C15.7685 5.19803 15.046 5.02637 14.4235 5.02637C13.8151 5.02637 13.1126 5.19053 12.5326 5.3672C11.8368 5.57887 11.3843 6.2447 11.4443 6.96887L11.9185 12.1847C11.9185 12.1839 14.986 15.4114 15.2593 15.2589Z" fill="white" />
                                                    <path opacity="0.35" d="M8.999 11.038C9.1965 10.443 9.23067 9.77467 9.0415 9.0805C8.72734 7.92967 7.76817 7.013 6.604 6.75217C4.42734 6.2655 2.49984 7.90717 2.49984 9.99967C2.49984 10.348 2.55484 10.6838 2.65484 10.9988C2.81484 11.5005 2.7265 12.0522 2.40484 12.4688C1.9415 13.0697 1.6665 13.7955 1.6665 14.583C1.6665 16.6538 3.53234 18.333 5.83317 18.333C8.134 18.333 9.99984 16.6538 9.99984 14.583C9.99984 13.7963 9.72567 13.0705 9.26234 12.4705C8.94984 12.0647 8.83734 11.5247 8.999 11.038Z" fill="white" />
                                                    <path d="M5 1.66699V10.0003H6.66667V1.66699H5Z" fill="white" />
                                                    <path d="M6.32898 4.16667H5.33731C4.90898 4.16667 4.55064 3.8425 4.50814 3.41667L4.25814 0.916667C4.20898 0.425833 4.59398 0 5.08731 0H6.57898C7.07231 0 7.45731 0.425833 7.40814 0.916667L7.15814 3.41667C7.11564 3.8425 6.75731 4.16667 6.32898 4.16667Z" fill="white" />
                                                    <path d="M6.6665 15.8337H4.99984C4.53984 15.8337 4.1665 15.4603 4.1665 15.0003C4.1665 14.5403 4.53984 14.167 4.99984 14.167H6.6665C7.1265 14.167 7.49984 14.5403 7.49984 15.0003C7.49984 15.4603 7.1265 15.8337 6.6665 15.8337Z" fill="white" />
                                                    <path d="M16.8509 17.7104C16.7809 18.0721 16.4643 18.3337 16.0959 18.3337H15.1926C14.7676 18.3337 14.4234 17.9896 14.4234 17.5646C13.8543 17.8879 12.6384 18.3337 12.1159 18.3337C11.5893 18.3337 9.97759 18.3337 9.80842 18.3337C9.29509 18.3337 8.82342 18.2121 8.44258 18.0654C7.86758 17.8446 7.50342 17.2754 7.50342 16.6596V16.6487C7.50342 16.2837 7.50008 16.0254 8.58008 16.0812C9.14425 16.1104 12.1159 15.2562 12.0234 13.4029L11.9184 12.1846C12.7801 12.1846 13.4384 12.5254 13.6543 12.9479C13.9026 13.4321 13.7993 14.4879 15.1918 14.4879C16.1467 14.4879 17.1801 13.8929 17.1801 13.8929C17.2717 14.1221 17.4993 14.5679 17.4993 15.2571C17.5001 15.9096 16.8509 17.7104 16.8509 17.7104Z" fill="white" />
                                                    <path d="M14.4235 7.50013C13.9985 7.50013 13.6543 7.15596 13.6543 6.73096V4.42346C13.6543 3.99846 13.9985 3.6543 14.4235 3.6543C14.8485 3.6543 15.1926 3.99846 15.1926 4.42346V6.73096C15.1926 7.15596 14.8485 7.50013 14.4235 7.50013Z" fill="white" />
                                                    <path d="M5.83317 12.5003C6.75365 12.5003 7.49984 11.7541 7.49984 10.8337C7.49984 9.91318 6.75365 9.16699 5.83317 9.16699C4.9127 9.16699 4.1665 9.91318 4.1665 10.8337C4.1665 11.7541 4.9127 12.5003 5.83317 12.5003Z" fill="white" />
                                                </g>
                                                <div>

                                                </div>
                                            </svg>
                                        </span>
                                        <span className="bg-[#4a454e] h-7 px-4 text-xs font-plus text-white flex items-center rounded-r-3xl" >
                                            Music
                                        </span>
                                    </div>
                                    <p className="text-[#808080] font-plus text-sm">
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    </p>
                                </div>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    )
}
export default SidebarSub;