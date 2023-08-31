const EventDetails = ({ setEvent }) => {
    return (
        <div className="w-full  h-screen bg-black bg-opacity-20 fixed top-0 left-0 z-50 flex items-center justify-center">
            <div className="md:w-[690px] w-[520px] bg-white lg:p-14 p-10 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out">
                <span className="absolute top-3 right-3 cursor-pointer z-10" onClick={() => setEvent(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" fill="none">
                        <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill="black" />
                        <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill="black" />
                    </svg>
                </span>
                <div className="md:h-[400px] h-[320px]  relative overflow-y-auto pb-12 custom_scroll">
                    <div className="w-full">
                        <img src="/img/event1.png" className="object-cover" alt="detail_img"/>
                    </div>
                    <div className="py-6">
                        <div className="md:flex items-center justify-between px-1">
                            <h1 className="font-plus text-xl font-bold text-start">Group meditation</h1>
                            <div className="flex items-center">
                                <span className="text-[#808080] font-plus text-lg">Starts in </span>
                                <div className="w-6 h-6 time-icon mx-1">  </div>
                                <span className="text-xl text-[#38579E] font-semibold">7 hrs</span>
                            </div>

                        </div>
                        <div className="md:flex item-center justify-between">
                            <ul className="py-3 flex item-center gap-2">
                                <li className="flex items-center">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path opacity="0.35" d="M7.94773 13.9609C11.2399 13.9609 13.9086 11.2921 13.9086 7.99997C13.9086 4.70785 11.2399 2.03906 7.94773 2.03906C4.65561 2.03906 1.98682 4.70785 1.98682 7.99997C1.98682 11.2921 4.65561 13.9609 7.94773 13.9609Z" fill="black" stroke="black" stroke-width="1.58958" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.0016 9.45631C10.0016 7.20441 7.48477 7.53557 7.48477 6.34339C7.48477 5.68107 8.01462 5.5486 8.21332 5.5486C8.41202 5.5486 8.54448 5.61483 8.67695 5.68107C9.00811 5.81353 9.4055 5.68107 9.6042 5.41614C9.86913 5.01874 9.73667 4.48888 9.33927 4.29019C9.14057 4.15772 8.80941 4.09149 8.47825 4.09149V3.76033C8.47825 3.42917 8.21332 3.23047 7.94839 3.23047C7.68346 3.23047 7.41853 3.4954 7.41853 3.76033V4.22395C6.49128 4.48888 5.89519 5.3499 5.89519 6.40962C5.89519 8.79399 8.34579 8.33036 8.34579 9.58877C8.34579 9.8537 8.21332 10.3173 7.61723 10.3173C7.3523 10.3173 7.08737 10.2511 6.95491 10.1186C6.62374 9.98617 6.22635 10.1186 6.02765 10.3836C5.76272 10.7147 5.89519 11.2446 6.22635 11.4433C6.55751 11.642 6.88867 11.7744 7.3523 11.7744V12.1718C7.3523 12.503 7.61723 12.7017 7.88216 12.7017C8.21332 12.7017 8.41202 12.4368 8.41202 12.1718V11.7082C9.47174 11.4433 10.0016 10.516 10.0016 9.45631Z" fill="black" />
                                    </svg></span>
                                    <span className="text-[#262626] text-xs font-plus">
                                        Free
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path opacity="0.35" d="M8.1496 14.6224C11.8075 14.6224 14.7728 11.6571 14.7728 7.99921C14.7728 4.3413 11.8075 1.37598 8.1496 1.37598C4.49169 1.37598 1.52637 4.3413 1.52637 7.99921C1.52637 11.6571 4.49169 14.6224 8.1496 14.6224Z" fill="black" />
                                        <path d="M8.81182 3.95975L9.14298 7.66876C9.20921 8.19862 8.81182 8.66225 8.21572 8.72848C7.61963 8.79471 7.22224 8.39732 7.15601 7.80123C7.15601 7.735 7.15601 7.66876 7.15601 7.60253L7.48717 3.95975C7.48717 3.56236 7.81833 3.29743 8.21572 3.36366C8.54689 3.42989 8.81182 3.69482 8.81182 3.95975Z" fill="black" />
                                        <path d="M9.34203 10.1193L7.48752 8.52977C7.09012 8.1986 7.02389 7.53628 7.42129 7.13889C7.75245 6.74149 8.41477 6.67526 8.81217 7.07265C8.8784 7.13889 8.94463 7.20512 8.94463 7.27135L10.4017 9.32455C10.6004 9.65572 10.5342 10.0531 10.2693 10.2518C9.93812 10.3843 9.60696 10.318 9.34203 10.1193Z" fill="black" />
                                    </svg></span>
                                    <span className="text-[#262626] text-xs font-plus">
                                        7:45-9:30
                                    </span>
                                </li>
                                <li className="flex items-center">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path opacity="0.35" d="M5.3716 6.67533C6.65187 6.67533 7.68973 5.63746 7.68973 4.35719C7.68973 3.07693 6.65187 2.03906 5.3716 2.03906C4.09133 2.03906 3.05347 3.07693 3.05347 4.35719C3.05347 5.63746 4.09133 6.67533 5.3716 6.67533Z" fill="black" />
                                        <path opacity="0.35" d="M11.3325 6.67533C12.6128 6.67533 13.6507 5.63746 13.6507 4.35719C13.6507 3.07693 12.6128 2.03906 11.3325 2.03906C10.0523 2.03906 9.0144 3.07693 9.0144 4.35719C9.0144 5.63746 10.0523 6.67533 11.3325 6.67533Z" fill="black" />
                                        <path opacity="0.35" d="M7.3584 9.32422H12.657C13.9353 9.32422 14.9751 10.3641 14.9751 11.6424C14.9751 12.9206 13.9353 13.9605 12.657 13.9605H7.3584V9.32422Z" fill="black" />
                                        <path d="M9.67615 11.6424C9.67615 12.9206 8.63631 13.9605 7.35802 13.9605H4.0464C3.41057 13.9605 2.82773 13.7022 2.41046 13.2783C1.98658 12.861 1.72827 12.2782 1.72827 11.6424C1.72827 10.3641 2.76812 9.32422 4.0464 9.32422H7.35802C7.99385 9.32422 8.5767 9.58252 8.99396 10.0064C9.41785 10.4237 9.67615 11.0065 9.67615 11.6424Z" fill="black" />
                                    </svg></span>
                                    <span className="text-[#262626] text-xs font-plus">
                                        12 guests
                                    </span>
                                </li>
                            </ul>
                            <button className="bg-black text-white rounded-md w-20 h-8 flex items-center justify-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none">
                                    <path d="M8.98152 12.3145L15.2715 9.41152C14.5365 8.72152 14.0685 7.76152 14.0185 6.68652L7.72852 9.58952C8.46452 10.2775 8.93152 11.2385 8.98152 12.3145Z" fill="white" />
                                    <path d="M15.2725 15.5885L8.98249 12.6855C8.93249 13.7605 8.46449 14.7215 7.72949 15.4115L14.0195 18.3145C14.0695 17.2385 14.5365 16.2775 15.2725 15.5885Z" fill="white" />
                                    <path opacity="0.35" d="M5 8.5C2.791 8.5 1 10.291 1 12.5C1 14.709 2.791 16.5 5 16.5C7.209 16.5 9 14.709 9 12.5C9 10.291 7.209 8.5 5 8.5Z" fill="white" />
                                    <path opacity="0.35" d="M18 2.5C15.791 2.5 14 4.291 14 6.5C14 8.709 15.791 10.5 18 10.5C20.209 10.5 22 8.709 22 6.5C22 4.291 20.209 2.5 18 2.5Z" fill="white" />
                                    <path opacity="0.35" d="M18 14.5C15.791 14.5 14 16.291 14 18.5C14 20.709 15.791 22.5 18 22.5C20.209 22.5 22 20.709 22 18.5C22 16.291 20.209 14.5 18 14.5Z" fill="white" />
                                </svg>
                                Share
                            </button>

                        </div>
                    </div>
                    <div className="p-2 text-start">
                        <p>Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor

                            ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et neque sodales porta eu eget dui.

                            Nunc eu quam sit amet justo elementum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur

                            ridiculus mus.s quis lectus maximus fermentum.</p>
                    </div>
                    <div className="flex mt-5 items-center justify-between">
                        <div className="flex gap-3 items-center w-2/5 flex-1">
                            <img src="/img/profile1.png" className="w-16 h-16" alt="profile"/>
                            <div className="text-start">
                                <div className="flex items-center justify-between gap-5">
                                    <h1 className="text-xl font-semibold font-plus">Alkash Kumar</h1>
                                    <button className="text-white rounded-md bg-[#38579E] px-2">Follow</button>
                                </div>
                                <span className=" font-plus font-medium pt-2">Host</span>
                            </div>
                        </div>
                        <div className="flex">

                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full footer_shadow z-20 bg-white rounded-b-xl">
                    <div className="flex md:gap-10 gap-2 py-4 md:px-14 px-8">
                        <button onClick={() => setEvent(false)} className="w-1/2 border-2 border-black text-lg font-plus font-medium md:h-12 h-9 flex items-center justify-center rounded-lg">Decline</button>
                        <button className="w-1/2 bg-black text-white text-lg font-plus font-medium md:h-12 h-9 flex items-center justify-center rounded-lg">Interested</button>
                    </div>
                </div>



            </div>

        </div>
    )
}
export default EventDetails;