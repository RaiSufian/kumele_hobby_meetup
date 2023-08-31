import { Link } from "react-router-dom";
const BlogCard = () => {
    return (
        < Link to={`/blogs/singleton of Glen Ord 38-year old and the Singleton range`}>
            <div className="bg-white p-2 rounded-2xl flex gap-2">
                <div>
                    <img src="/img/blog_pro.png" alt="img" />
                </div>
                <div>
                    <h2 className="sm:text-lg font-plus ">Singleton of Glen Ord 38-year old and the Singleton range.</h2>
                    <span className=" text-dark font-plus text-sm  sm:text-base">Steve Austin • 23 August, 2022</span>
                </div>
            </div>
        </Link>

    )
}
export default BlogCard;