import Dashboardlayout from "../../layouts/dashboardlayout";
import { useSelector } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const CreateBlog = () => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    const listCat = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [editorHtml, setEditorHtml] = useState('');
    const [code, setCode] = useState("hellllo");
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ size: [] }],
            [{ font: [] }],
            [{ align: ["right", "center", "justify"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ color: ["red", "#785412"] }],
            [{ background: ["red", "#785412"] }]
        ]
    };
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font"
    ];
    const handleProcedureContentChange = (content, delta, source, editor) => {
        setCode(content);

    };
    const navigate = useNavigate();
    const blogPreview = () => {
        navigate("/blog/preview");
    }
    return (
        <Dashboardlayout >
            <div className={` ${styleMode ? " bg-black" : " layout_bg"} md:mx-4 mx-2 mb-4 pb-4  rounded-lg font-plus `} >
                <div className={`${styleMode ? " bg-black border-[#6B6B6B] text-white" : " bg-white border-light_border"}  md:px-5 px-2 py-4  border-b  rounded-t-lg  `}>
                    <h2 className=" text-xl font-bold">Create Blog</h2>
                </div>
                <div className={`my-4 md:mx-4 mx-1 font-plus xl:max-w-4xl xl:mx-auto rounded-lg py-2 lg:py-4 sm:px-4 px-1 xl:px-14 ${styleMode ? " bg-[#454545]" : " bg-white"} `}>
                    <div className="md:flex">
                        <div className="px-2 font-plus">
                            <div className={`${styleMode ? "text-white " : ""} `}>
                                <h3 className="text-xl">Blog Category</h3>
                                <div className="flex flex-wrap mt-2">
                                    {listCat.map((value, index) => {
                                        return (
                                            <div className={` w-16 h-16 lg:w-20 lg:h-20 cursor-pointer py-1 border rounded-lg  text-center m-1 cat_card hover:bg-theme ${styleMode ? "border-[#6B6B6B]" : "border-light_border"}`} key={index}>
                                                <span >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="31" viewBox="0 0 36 37" fill="none">
                                                        <path opacity="0.35" d="M17.8855 3.45117C9.67073 3.45117 3.01172 10.1102 3.01172 18.325C3.01172 26.5398 9.67073 33.1988 17.8855 33.1988C13.7789 33.1988 10.4486 29.8686 10.4486 25.7619C10.4486 21.6552 13.7789 18.325 17.8855 18.325C21.9922 18.325 25.3224 14.9947 25.3224 10.8881C25.3224 6.78142 21.9922 3.45117 17.8855 3.45117Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                        <path d="M17.8842 3.45117C21.9908 3.45117 25.3211 6.78142 25.3211 10.8881C25.3211 14.9947 21.9908 18.325 17.8842 18.325C13.7775 18.325 10.4473 21.6552 10.4473 25.7619C10.4473 29.8686 13.7775 33.1988 17.8842 33.1988C26.099 33.1988 32.758 26.5398 32.758 18.325C32.758 10.1102 26.099 3.45117 17.8842 3.45117ZM17.8842 28.7367C16.2406 28.7367 14.9094 27.4055 14.9094 25.7619C14.9094 24.1183 16.2406 22.7871 17.8842 22.7871C19.5277 22.7871 20.8589 24.1183 20.8589 25.7619C20.8589 27.4055 19.5277 28.7367 17.8842 28.7367Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                        <path d="M17.8839 13.8638C19.5269 13.8638 20.8587 12.532 20.8587 10.8891C20.8587 9.24615 19.5269 7.91431 17.8839 7.91431C16.241 7.91431 14.9092 9.24615 14.9092 10.8891C14.9092 12.532 16.241 13.8638 17.8839 13.8638Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                        <path opacity="0.35" d="M17.8839 28.7381C19.5269 28.7381 20.8587 27.4063 20.8587 25.7633C20.8587 24.1204 19.5269 22.7886 17.8839 22.7886C16.241 22.7886 14.9092 24.1204 14.9092 25.7633C14.9092 27.4063 16.241 28.7381 17.8839 28.7381Z" fill={` ${styleMode ? "white" : "black"}`} />
                                                    </svg>
                                                </span>
                                                <span className={` font-plus pt-1 text-xs ${styleMode ? "text-[#BCBCBC] hover:text-black" : "text-dark "} `}>Sprituality</span>
                                            </div>
                                        )
                                    })}


                                </div>
                                <div className={`${styleMode ? "text-white" : ""} mt-2`}>
                                    <h3 className="text-xl">Blog title</h3>
                                    <input className={`rounded-md w-full h-10 p-2 custom_input mt-1  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="Add a title" />
                                </div>
                                <div className={`${styleMode ? "text-white" : ""} mt-4`}>
                                    <div className="flex gap-2 flex-wrap">
                                        <div className="md:w-1/3 w-full">
                                            <h3 className="text-xl">Banner Image</h3>
                                            <button className={` flex  items-center gap-1 h-11 px-3 rounded-md mt-2 ${styleMode ? "bg-white text-black" : "bg-black text-white"}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 45 46" fill="none">
                                                    <path opacity="0.35" d="M35.625 38H9.375C6.26813 38 3.75 35.4819 3.75 32.375V13.625C3.75 10.5181 6.26813 8 9.375 8H35.625C38.7319 8 41.25 10.5181 41.25 13.625V32.375C41.25 35.4819 38.7319 38 35.625 38Z" fill={` ${styleMode ? "black" : "white"} `} />
                                                    <path d="M31.875 19.25C33.9461 19.25 35.625 17.5711 35.625 15.5C35.625 13.4289 33.9461 11.75 31.875 11.75C29.8039 11.75 28.125 13.4289 28.125 15.5C28.125 17.5711 29.8039 19.25 31.875 19.25Z" fill={` ${styleMode ? "black" : "white"} `} />
                                                    <path d="M7.5 30.5C7.5 31.5275 8.34 32.375 9.375 32.375H35.625C36.66 32.375 37.5 31.5425 37.5 30.5C37.5 27.9425 34.335 24.875 32.8125 24.875C31.29 24.875 29.91 26.75 26.25 26.75C21.6713 26.75 18.75 17.375 15 17.375C11.25 17.375 7.5 25.5538 7.5 30.5Z" fill={` ${styleMode ? "black" : "white"} `} />
                                                </svg>
                                                Insert banner image
                                            </button>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl">Social Media Links</h3>
                                            <div className="flex gap-4">
                                                <input className={`rounded-md w-full h-10 p-2 custom_input mt-1 ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`} type="text" placeholder="www.example.com/user" />
                                                <select className={`rounded-md  h-10 p-2 custom_input mt-1 w-24  ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white "}`}>
                                                    <option className="py-1">
                                                        <span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                                                                <path opacity="0.35" d="M39.2435 8.86793C35.9264 8.46974 31.3661 8.10938 25.7246 8.10938C20.0832 8.10938 15.5228 8.46974 12.2057 8.86793C8.60028 9.30037 5.90479 12.3869 5.90479 16.0193V32.6337C5.90479 36.2643 8.60028 39.3508 12.2057 39.7851C15.5228 40.1815 20.0832 40.5418 25.7246 40.5418C31.3661 40.5418 35.9264 40.1815 39.2435 39.7833C42.8489 39.349 45.5444 36.2643 45.5444 32.6319V16.0193C45.5444 12.3869 42.8489 9.30037 39.2435 8.86793Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                                <path d="M32.0681 22.7108L23.3365 16.8892C22.7401 16.4928 21.9726 16.4532 21.3455 16.7919C20.7149 17.1307 20.3203 17.7883 20.3203 18.5036V30.1469C20.3203 30.864 20.7149 31.5198 21.3455 31.8586C21.632 32.0117 21.9473 32.0874 22.2609 32.0874C22.6374 32.0874 23.0122 31.9775 23.3365 31.7613L32.0681 25.9397C32.6086 25.5793 32.9329 24.9739 32.9329 24.3253C32.9329 23.6766 32.6086 23.0712 32.0681 22.7108Z" fill={`${styleMode ? "white" : "black"}  `} />
                                                            </svg>
                                                        </span>

                                                    </option>
                                                    <option className="py-1">
                                                        1
                                                    </option>
                                                    <option className="py-1">
                                                        1
                                                    </option>
                                                </select>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className={` ${styleMode ? "dark_mode" : ""} mt-4 h-96 `}>
                                    <ReactQuill
                                        theme="snow"
                                        modules={modules}
                                        formats={formats}
                                        value={code}
                                        onChange={handleProcedureContentChange}
                                        className="h-80"
                                    />
                                </div>
                                <div className="md:mt-4 mt-7 text-center">
                                    <button className={`${styleMode ? "border-white " :  "border-black" } py-2 w-60 border-2  rounded-md `} onClick={blogPreview}>
                                        Preview Blog
                                    </button>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>


            </div>
        </Dashboardlayout >
    )
}
export default CreateBlog;