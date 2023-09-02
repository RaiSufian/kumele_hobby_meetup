import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogCard = () => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        < Link to={`/blogs/singleton of Glen Ord 38-year old and the Singleton range `}>
            <div className={`${ styleMode ? "bg-black border border-[#EEECEC]" : "bg-white"} p-2 rounded-2xl flex gap-2`}>
                <div>
                    <img src="/img/blog_pro.png" alt="img" />
                </div>
                <div>
                    <h2 className={` ${styleMode ? "text-white" : ""} sm:text-lg font-plus `}>Singleton of Glen Ord 38-year old and the Singleton range.</h2>
                    <span className={` ${styleMode ? "border-#EEECEC text-[#BCBCBC] " : "text-dark"}  font-plus text-sm  sm:text-base`}>Steve Austin • 23 August, 2022</span>
                </div>
            </div>
        </Link>

    )
}
export default BlogCard;