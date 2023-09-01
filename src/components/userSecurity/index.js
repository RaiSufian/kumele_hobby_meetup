import { useState } from "react";
const UserSecurity = ({ setSecurity }) => {
    const [value, setvalue] = useState(1);
    // Buttoon slider1
    const [isOn1, setIsOn1] = useState(false);

    const handleToggle1 = () => {
        setIsOn1(!isOn1);
    };
    return (
        <>
            {value == 1 ?
                <div className="sm:w-96 w-72">
                    <div className="flex justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 42 42" fill="none" onClick={() => { setSecurity(false) }}>
                            <path opacity="0.35" d="M17.7796 24.636C18.7842 23.6315 28.775 13.6406 29.7796 12.636C31.7887 10.6269 31.7887 7.37147 29.7796 5.36233C27.7705 3.35318 24.515 3.35318 22.5059 5.36233C21.5013 6.3669 11.5105 16.3578 10.5059 17.3623C8.49674 19.3715 8.49674 22.6269 10.5059 24.636C12.515 26.6452 15.7722 26.6452 17.7796 24.636Z" fill="black" />
                            <path d="M10.5069 24.636C11.5114 25.6406 21.5023 35.6315 22.5069 36.636C24.516 38.6452 27.7714 38.6452 29.7806 36.636C31.7897 34.6269 31.7897 31.3715 29.7806 29.3623C28.776 28.3578 18.7851 18.3669 17.7806 17.3623C15.7714 15.3532 12.516 15.3532 10.5069 17.3623C8.49771 19.3715 8.49771 22.6286 10.5069 24.636Z" fill="black" />
                        </svg>
                        <h3 className="text-xl font-bold">Security</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48" fill="none" onClick={() => { setSecurity(false) }}>
                            <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill="black" />
                            <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill="black" />
                        </svg>
                    </div>
                    <div className="h-60 mt-14">
                        <ul>
                            <li className="flex items-center justify-between py-3 cursor-pointer" onClick={() => setvalue(2)}>
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                        <path opacity="0.35" d="M29.999 35.0003H9.99902C7.23736 35.0003 4.99902 32.762 4.99902 30.0003V16.667C4.99902 13.9053 7.23736 11.667 9.99902 11.667H29.999C32.7607 11.667 34.999 13.9053 34.999 16.667V30.0003C34.999 32.762 32.7607 35.0003 29.999 35.0003Z" fill="black" />
                                        <path d="M13.3324 11.667C13.3324 7.98533 16.3174 5.00033 19.999 5.00033C23.6807 5.00033 26.6657 7.98533 26.6657 11.667H29.999C29.999 6.14366 25.5224 1.66699 19.999 1.66699C14.4757 1.66699 9.99902 6.14366 9.99902 11.667H13.3324Z" fill="black" />
                                        <path d="M19.999 25.833C21.3797 25.833 22.499 24.7137 22.499 23.333C22.499 21.9523 21.3797 20.833 19.999 20.833C18.6183 20.833 17.499 21.9523 17.499 23.333C17.499 24.7137 18.6183 25.833 19.999 25.833Z" fill="black" />
                                        <path d="M28.333 25.833C29.7137 25.833 30.833 24.7137 30.833 23.333C30.833 21.9523 29.7137 20.833 28.333 20.833C26.9523 20.833 25.833 21.9523 25.833 23.333C25.833 24.7137 26.9523 25.833 28.333 25.833Z" fill="black" />
                                        <path d="M11.666 25.833C13.0467 25.833 14.166 24.7137 14.166 23.333C14.166 21.9523 13.0467 20.833 11.666 20.833C10.2853 20.833 9.16602 21.9523 9.16602 23.333C9.16602 24.7137 10.2853 25.833 11.666 25.833Z" fill="black" />
                                    </svg>
                                    <h6 className="sm:text-lg text-base ">Change Password</h6>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34" fill="none">
                                    <path opacity="0.35" d="M19.7185 14.0727C18.9097 14.8815 10.8658 22.9254 10.057 23.7342C8.43935 25.3518 8.43935 27.9729 10.057 29.5905C11.6746 31.2081 14.2956 31.2081 15.9132 29.5905C16.722 28.7817 24.766 20.7378 25.5748 19.929C27.1924 18.3113 27.1924 15.6903 25.5748 14.0727C23.9572 12.4551 21.3347 12.4551 19.7185 14.0727Z" fill="black" />
                                    <path d="M25.5728 14.0731C24.764 13.2643 16.7201 5.22035 15.9113 4.41154C14.2937 2.79392 11.6726 2.79392 10.055 4.41154C8.43739 6.02916 8.43739 8.6502 10.055 10.2678C10.8638 11.0766 18.9077 19.1206 19.7166 19.9294C21.3342 21.547 23.9552 21.547 25.5728 19.9294C27.1905 18.3117 27.1905 15.6893 25.5728 14.0731Z" fill="black" />
                                </svg>
                            </li>
                            <li className="flex items-center justify-between py-3">
                                <div className="flex gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
                                        <path opacity="0.35" d="M29.999 35.0003H9.99902C7.23736 35.0003 4.99902 32.762 4.99902 30.0003V16.667C4.99902 13.9053 7.23736 11.667 9.99902 11.667H29.999C32.7607 11.667 34.999 13.9053 34.999 16.667V30.0003C34.999 32.762 32.7607 35.0003 29.999 35.0003Z" fill="black" />
                                        <path d="M13.3324 11.667C13.3324 7.98533 16.3174 5.00033 19.999 5.00033C23.6807 5.00033 26.6657 7.98533 26.6657 11.667H29.999C29.999 6.14366 25.5224 1.66699 19.999 1.66699C14.4757 1.66699 9.99902 6.14366 9.99902 11.667H13.3324Z" fill="black" />
                                        <path d="M19.999 25.833C21.3797 25.833 22.499 24.7137 22.499 23.333C22.499 21.9523 21.3797 20.833 19.999 20.833C18.6183 20.833 17.499 21.9523 17.499 23.333C17.499 24.7137 18.6183 25.833 19.999 25.833Z" fill="black" />
                                        <path d="M28.333 25.833C29.7137 25.833 30.833 24.7137 30.833 23.333C30.833 21.9523 29.7137 20.833 28.333 20.833C26.9523 20.833 25.833 21.9523 25.833 23.333C25.833 24.7137 26.9523 25.833 28.333 25.833Z" fill="black" />
                                        <path d="M11.666 25.833C13.0467 25.833 14.166 24.7137 14.166 23.333C14.166 21.9523 13.0467 20.833 11.666 20.833C10.2853 20.833 9.16602 21.9523 9.16602 23.333C9.16602 24.7137 10.2853 25.833 11.666 25.833Z" fill="black" />
                                    </svg>
                                    <h6 className="sm:text-lg text-base ">Two factor authentication</h6>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <button
                                        onClick={handleToggle1}
                                        className={`w-12 h-6 rounded-full relative ${isOn1 ? 'bg-black' : 'bg-gray-300'
                                            } transition-colors`}
                                    >
                                        <span className={`block w-4 h-4 rounded-full transform transition-transform absolute top-1/2 -translate-y-1/2 ${isOn1 ? 'left-1' : ''} ${!isOn1 ? 'right-1' : ''} ${isOn1 ? 'bg-white' : 'bg-gray-500'}`} />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                :
                <div className="w-96">
                    <div className="flex justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 42 42" fill="none" onClick={() => setvalue(1)}>
                            <path opacity="0.35" d="M17.7796 24.636C18.7842 23.6315 28.775 13.6406 29.7796 12.636C31.7887 10.6269 31.7887 7.37147 29.7796 5.36233C27.7705 3.35318 24.515 3.35318 22.5059 5.36233C21.5013 6.3669 11.5105 16.3578 10.5059 17.3623C8.49674 19.3715 8.49674 22.6269 10.5059 24.636C12.515 26.6452 15.7722 26.6452 17.7796 24.636Z" fill="black" />
                            <path d="M10.5069 24.636C11.5114 25.6406 21.5023 35.6315 22.5069 36.636C24.516 38.6452 27.7714 38.6452 29.7806 36.636C31.7897 34.6269 31.7897 31.3715 29.7806 29.3623C28.776 28.3578 18.7851 18.3669 17.7806 17.3623C15.7714 15.3532 12.516 15.3532 10.5069 17.3623C8.49771 19.3715 8.49771 22.6286 10.5069 24.636Z" fill="black" />
                        </svg>
                        <h3 className="text-xl font-bold">Change password</h3>
                        <div></div>
                    </div>
                    <div className="mt-6">
                        <form>
                            <div className="mt-4">
                                <label className="text-sm">Current password</label>
                                <input type="password" className="text-sm h-8 bg-bg_light w-full rounded-md custom_input py-1 px-3" placeholder="Enter current password" />
                            </div>
                            <div className="mt-4">
                                <label className="text-sm">New password</label>
                                <input type="password" className="text-sm h-8 bg-bg_light w-full rounded-md custom_input py-1 px-3" placeholder="Enter new password" />
                            </div>
                            <div className="mt-4">
                                <label className="text-sm">Confirm new password</label>
                                <input type="password" className="text-sm h-8 bg-bg_light w-full rounded-md custom_input py-1 px-3" placeholder="Re-enter new password" />
                            </div>
                            <div className="text-right mt-10">
                                <button className="h-9 bg-black text-white rounded-md px-10">Update password</button>
                            </div>
                        </form>

                    </div>
                </div>}

        </>
    )
}
export default UserSecurity;