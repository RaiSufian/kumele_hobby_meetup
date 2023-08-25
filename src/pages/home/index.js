import Dashboardlayout from "../../layouts/dashboardlayout";
import SidebarSub from "../../components/sidebarSab";
// import SidebarUnSub from "../../components/sidebarUnSub";
 import BlogsSlider from "../../components/BlogsSlider";
const Home = () => {
    return (
        <Dashboardlayout>
            <div className="px-8 py-6 w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold font-plus">Explore</h2>
                    <ul >
                        <li className=" inline-block mx-1">
                            <div className="flex items-center gap-2 cursor-pointer py-2 px-5 bg-white rounded-full border border-[#38579E]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.35" d="M22.434 10.68L20.78 6.818C20.307 5.715 19.222 5 18.022 5H4C2.343 5 1 6.343 1 8V16C1 17.657 2.343 19 4 19H15H20C21.657 19 23 17.657 23 16V13.437C23 12.489 22.808 11.551 22.434 10.68Z" fill="black" />
                                    <path d="M6.5 21C7.88071 21 9 19.8807 9 18.5C9 17.1193 7.88071 16 6.5 16C5.11929 16 4 17.1193 4 18.5C4 19.8807 5.11929 21 6.5 21Z" fill="black" />
                                    <path d="M17.5 21C18.8807 21 20 19.8807 20 18.5C20 17.1193 18.8807 16 17.5 16C16.1193 16 15 17.1193 15 18.5C15 19.8807 16.1193 21 17.5 21Z" fill="black" />
                                    <path d="M15 12V8C15 7.448 15.448 7 16 7H17.66C18.471 7 19.202 7.49 19.51 8.24L20.894 11.607C21.166 12.271 20.678 13 19.96 13H16C15.448 13 15 12.552 15 12Z" fill="black" />
                                </svg>

                                <span className="font-semibold font-plus">Van Life</span>
                            </div>
                        </li>
                        <li className=" inline-block mx-1">
                            <div className="flex items-center gap-2 cursor-pointer py-2 px-5 bg-white rounded-full border border-[#38579E]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17 13H7C5.343 13 4 11.657 4 10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10C20 11.657 18.657 13 17 13Z" fill="black" />
                                    <path opacity="0.35" d="M12 22C10.343 22 9 20.657 9 19V11H15V19C15 20.657 13.657 22 12 22Z" fill="black" />
                                </svg>

                                <span className="font-semibold font-plus">Psychedelic</span>
                            </div>
                        </li>
                        <li className=" inline-block mx-1">
                            <div className="flex items-center gap-2 cursor-pointer py-2 px-5 bg-white rounded-full border border-[#38579E]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.35" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C9.239 22 7 19.761 7 17C7 14.239 9.239 12 12 12C14.761 12 17 9.761 17 7C17 4.239 14.761 2 12 2Z" fill="black" />
                                    <path d="M12 2C14.761 2 17 4.239 17 7C17 9.761 14.761 12 12 12C9.239 12 7 14.239 7 17C7 19.761 9.239 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 19C10.895 19 10 18.105 10 17C10 15.895 10.895 15 12 15C13.105 15 14 15.895 14 17C14 18.105 13.105 19 12 19Z" fill="black" />
                                    <path d="M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z" fill="black" />
                                    <path opacity="0.35" d="M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z" fill="black" />
                                </svg>

                                <span className="font-semibold font-plus">Sprituality</span>
                            </div>
                        </li>
                        <li className=" inline-block mx-1">
                            <div className="flex items-center gap-2 cursor-pointer py-2 px-5 bg-white rounded-full border border-[#38579E]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M18.5 18C18.324 18 5.676 18 5.5 18C4.672 18 4 18.672 4 19.5C4 20.328 4.672 21 5.5 21C5.676 21 18.324 21 18.5 21C19.328 21 20 20.328 20 19.5C20 18.672 19.328 18 18.5 18Z" fill="black" />
                                    <path opacity="0.35" d="M18 18.0001V17.9751C18 16.8241 17.388 15.7761 16.418 15.1561C14.953 14.2191 13 12.5001 13 10.0001H16C17.105 10.0001 18 9.10513 18 8.00013C18 7.37013 17.704 6.77813 17.2 6.40013L14 4.00013V3.07913C14 2.47313 13.463 1.99513 12.863 2.08013C8.983 2.63213 6 5.96813 6 10.0001V18.0001H18Z" fill="black" />
                                </svg>

                                <span className="font-semibold font-plus">Board Games</span>
                            </div>
                        </li>
                    </ul>
                    <div>
                    </div>
                </div>
                <div className="flex mt-5 gap-3 justify-between">
                    <div className="flex-1">
                        <div className="bg-white rounded-md flex justify-center items-center py-10">
                            <div className="homePage w-1/2 h-96"> </div>
                        </div>

                    </div>
                    {/* <div className="max-w-5xl">
                             <BlogsSlider/> 
                    </div> */}
                    <div className="w-96">
                        <SidebarSub />
                        {/* <SidebarUnSub/> */}
                    </div>
                </div>
            </div>
        </Dashboardlayout>
    )
}
export default Home;