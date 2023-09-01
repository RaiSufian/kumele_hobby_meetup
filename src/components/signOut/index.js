import { useSelector } from "react-redux";
const SignOut = ({ signOut, setSignOut }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={`font-plus w-full  h-screen bg-black bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center ${signOut ? " block" : "hidden"}`}>
            <div className=" bg-white py-7 rounded-2xl relative">
                <div className="sm:w-96 w-72 px-3">

                    <div className="w-20 h-20 login_gif mx-auto">

                    </div>
                    <h6 className="text-lg font-bold font-plus text-center my-4">Are you sure you want to log out?</h6>

                    <div className="mt-3 flex justify-center gap-2 ">
                        <button className="w-1/2 h-10  rounded-lg border-black border" onClick={() => setSignOut(false)}>Cancel</button>
                        <button className="w-1/2 h-10 rounded-lg bg-black text-white">Log out</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SignOut;