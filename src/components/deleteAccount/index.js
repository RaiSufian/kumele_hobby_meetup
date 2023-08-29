const DeleteAccount = ({ deleteAc, setDeleteAc }) => {
    return (
        <div className={`font-plus w-full  h-screen bg-black bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${deleteAc ? " block" : "hidden"}`}>
            <div className=" bg-white py-7 rounded-2xl relative">
                <div className="w-72 px-3">

                    <div className="w-20 h-20 wrong_img mx-auto">

                    </div>
                    <h6 className="text-lg font-bold font-plus text-center">Are you sure? This action cannot be undone. Please type delete in capital letters.</h6>
                    <div className="py-2">
                        <input type="text" placeholder="Enter DELETE to remove account..." className="w-full h-8 text-sm px-2 custom_input rounded-md bg-[#F1F1F1]" />
                    <div className="mt-3 flex justify-center gap-2 ">
                            <button className="w-1/2 h-9  rounded-lg border-black border" onClick={()=>setDeleteAc(false)}>No</button>
                            <button className="w-1/2 h-9  rounded-lg bg-black text-white">Yes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteAccount;