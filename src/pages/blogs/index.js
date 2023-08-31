import Dashboardlayout from "../../layouts/dashboardlayout";
import BlogCard from "../../components/blogCard";
import { useState } from "react";
const Blogs = () => {
    const [active, setactive] = useState("all")
    return (

        <Dashboardlayout >
            <div className="min-h-screen sm:px-4 px-1">
                <div className="md:flex justify-between">
                    <ul className="flex-1 text-center mt-2 md:mt-0">
                        <li className={`inline-block sm:px-6 px-3 mt-2 sm:mt-0 py-1 text-lg font-plus border  rounded-3xl mx-1 cursor-pointer ${active === "all" ? 'bg-theme border-theme' : 'border-dark'}`} onClick={() => setactive("all")}>
                            All
                        </li>
                        <li className={`inline-block sm:px-6 px-3 mt-2 sm:mt-0 py-1 text-lg font-plus border  rounded-3xl mx-1 cursor-pointer ${active === "pubs_bars" ? 'bg-theme border-theme' : 'border-dark'}`} onClick={() => setactive("pubs_bars")} >Pubs & Bars</li>
                        <li className={`inline-block sm:px-6 px-3 mt-2 sm:mt-0 py-1 text-lg font-plus border  rounded-3xl mx-1 cursor-pointer ${active === "cannabis" ? 'bg-theme border-theme' : 'border-dark'}`} onClick={() => setactive("cannabis")}>Cannabis</li>
                        <li className={`inline-block sm:px-6 px-3 mt-2 sm:mt-0 py-1 text-lg font-plus border  rounded-3xl mx-1 cursor-pointer ${active === "sports" ? 'bg-theme border-theme' : 'border-dark'}`} onClick={() => setactive("sports")}>Sports</li>
                    </ul>
                    <div className="md:w-1/3 bg-white flex items-center px-4 gap-1 rounded-lg mt-2 md:mt-0">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 40 41" fill="none">
                                <path d="M18.333 3.8335C26.613 3.8335 33.333 10.5535 33.333 18.8335C33.333 27.1135 26.613 33.8335 18.333 33.8335C10.053 33.8335 3.33301 27.1135 3.33301 18.8335C3.33301 10.5535 10.053 3.8335 18.333 3.8335ZM18.333 30.5002C24.778 30.5002 29.9997 25.2785 29.9997 18.8335C29.9997 12.3868 24.778 7.16683 18.333 7.16683C11.8863 7.16683 6.66634 12.3868 6.66634 18.8335C6.66634 25.2785 11.8863 30.5002 18.333 30.5002ZM32.4747 30.6185L37.1897 35.3318L34.8313 37.6902L30.118 32.9752L32.4747 30.6185Z" fill="#808080" />
                            </svg>
                        </span>
                        <input type="text" className="flex-1 custom_input " placeholder="Search" />
                    </div>
                </div>
                <div className="md:py-8 py-3 px-2 flex flex-wrap max-w-6xl ">
                    <div className="md:w-1/2 w-full px-2 mt-3">
                        <BlogCard />
                    </div>
                    <div className="md:w-1/2 w-full px-2 mt-3">
                        <BlogCard />
                    </div>
                    <div className="md:w-1/2 w-full px-2 mt-3">
                        <BlogCard />
                    </div>
                    <div className="md:w-1/2 w-full px-2 mt-3">
                        <BlogCard />
                    </div>
                </div>
            </div>
        </Dashboardlayout>
    )
}
export default Blogs;