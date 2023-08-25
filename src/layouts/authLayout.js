import { Link } from 'react-router-dom'
const AuthLayout = ({ children }) => {
    return (
        <div>
            <div className="relative bg-[#7929FF]">
                <img src="/img/authheader.png" alt="bg_img" className="w-100 h-auto" />
                <Link to="/">
                    <img src="/img/icon.png" alt="logo_icon" className="absolute top-16 left-36 w-28 cursor-pointer" />
                </Link>

            </div>
            <div className="flex gap-6">
                <div className=" w-1/2 flex justify-center items-center px-10">
                    <img src="/img/authimg1.png"/>
                </div>
                <div className=" w-1/2 pt-8 custom_auto_h overflow-y-auto">
                    {children}
                </div>
            </div>

        </div>
    )
}
export default AuthLayout;