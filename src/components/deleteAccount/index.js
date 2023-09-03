import { useSelector } from "react-redux";
const DeleteAccount = ({ deleteAc, setDeleteAc }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={`font-plus w-full  h-screen ${styleMode ? "bg-white" : "bg-black"}  bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${deleteAc ? " block" : "hidden"}`}>
            <div className={` ${styleMode ? "bg-black" : "bg-white"} modal  py-7 rounded-2xl relative `}>
                <div className="w-72 px-3">

                    <div className="w-20 h-20 wrong_img mx-auto">

                    </div>
                    <h6 className={`text-lg font-bold font-plus text-center ${styleMode ? "text-white" : ""}`}>Are you sure? This action cannot be undone. Please type delete in capital letters.</h6>
                    <div className="py-2">
                        <input type="text" placeholder="Enter DELETE to remove account..." className={` ${styleMode ? "bg-[#242424] text-[#BCBCBC]" : "bg-theme_white"} w-full h-8 text-sm px-2 custom_input rounded-md  `} />
                        <div className="mt-3 flex justify-center gap-2 ">
                            <button className={`w-1/2 h-9 border rounded-lg ${styleMode ? "border-white text-white" : "border-black border"} `} onClick={() => setDeleteAc(false)}>No</button>
                            <button className={` ${styleMode ? "text-black bg-white" : "bg-black text-white"} w-1/2 h-9  rounded-lg  `}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteAccount;