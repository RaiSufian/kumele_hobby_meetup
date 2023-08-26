import Dashboardlayout from "../../layouts/dashboardlayout";
import SidebarSub from "../../components/sidebarSab";
// import SidebarUnSub from "../../components/sidebarUnSub";
import BlogsSlider from "../../components/BlogsSlider";
import EventsCatBlock from "../../components/eventsCatBlock";
import DashboardSlider from "../../components/dashboardSilder";
import { useState, useEffect } from 'react';
import EventDetails from "../../components/eventDetails";
const Home = () => {
    const [slide, setSlide] = useState(0);
    const [evnet, setEvent] = useState(false)
    useEffect(() => {
        if (slide < 3) {
            const interval = setInterval(() => {

                setSlide(prevNumber => prevNumber + 1);

            }, 6000); // 6000 milliseconds = 6 seconds

            return () => {
                clearInterval(interval); // Clear the interval when the component unmounts
            };
        }
    }, [slide]);

    return (
        <>
            <Dashboardlayout>
                <div className="px-8 py-6 w-full">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold font-plus">Explore</h2>
                        <ul >
                            <li className=" inline-block mx-1">
                                <div className="flex items-center gap-2 cursor-pointer py-2 px-5 bg-white rounded-full border border-[#38579E]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.35" d="M22.434 10.68L20.78 6.818C20.307 5.715 19.222 5 18.022 5H4C2.343 5 1 6.343 1 8V16C1 17.657 2.343 19 4 19H15H20C21.657 19 23 17.657 23 16V13.437C23 12.489 22.808 11.551 22.434 10.68Z" fill="black" />
                                        <path d="M6.5 21C7.88071 21 9 19.8807 9 18.5C9 17.1193 7.88071 16 6.5 16C5.11929 16 4 17.1193 4 18.5C4 19.8807 5.11929 21 6.5 21Z" fill="black" />
                                        <path d="M17.5 21C18.8807 21 20 19.8807 20 18.5C20 17.1193 18.8807 16 17.5 16C16.1193 16 15 17.1193 15 18.5C15 19.8807 16.1193 21 17.5 21Z" fill="black" />
                                        <path d="M15 12V8C15 7.448 15.448 7 16 7H17.66C18.471 7 19.202 7.49 19.51 8.24L20.894 11.607C21.166 12.271 20.678 13 19.96 13H16C15.448 13 15 12.552 15 12Z" fill="black" />
                                    </svg>

                                    <span className="font-semibold font-plus">Van Life</span>
                                </div>
                            </li>
                            <li className=" inline-block mx-1">
                                <div className="flex items-center gap-2 cursor-pointer py-2 px-5 bg-white rounded-full border border-[#38579E]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17 13H7C5.343 13 4 11.657 4 10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10C20 11.657 18.657 13 17 13Z" fill="black" />
                                        <path opacity="0.35" d="M12 22C10.343 22 9 20.657 9 19V11H15V19C15 20.657 13.657 22 12 22Z" fill="black" />
                                    </svg>

                                    <span className="font-semibold font-plus">Psychedelic</span>
                                </div>
                            </li>
                            <li className=" inline-block mx-1">
                                <div className="flex items-center gap-2 cursor-pointer py-2 px-5 bg-white rounded-full border border-[#38579E]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.35" d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C9.239 22 7 19.761 7 17C7 14.239 9.239 12 12 12C14.761 12 17 9.761 17 7C17 4.239 14.761 2 12 2Z" fill="black" />
                                        <path d="M12 2C14.761 2 17 4.239 17 7C17 9.761 14.761 12 12 12C9.239 12 7 14.239 7 17C7 19.761 9.239 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 19C10.895 19 10 18.105 10 17C10 15.895 10.895 15 12 15C13.105 15 14 15.895 14 17C14 18.105 13.105 19 12 19Z" fill="black" />
                                        <path d="M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z" fill="black" />
                                        <path opacity="0.35" d="M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z" fill="black" />
                                    </svg>

                                    <span className="font-semibold font-plus">Sprituality</span>
                                </div>
                            </li>
                            <li className=" inline-block mx-1">
                                <div className="flex items-center gap-2 cursor-pointer py-2 px-5 bg-white rounded-full border border-[#38579E]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M18.5 18C18.324 18 5.676 18 5.5 18C4.672 18 4 18.672 4 19.5C4 20.328 4.672 21 5.5 21C5.676 21 18.324 21 18.5 21C19.328 21 20 20.328 20 19.5C20 18.672 19.328 18 18.5 18Z" fill="black" />
                                        <path opacity="0.35" d="M18 18.0001V17.9751C18 16.8241 17.388 15.7761 16.418 15.1561C14.953 14.2191 13 12.5001 13 10.0001H16C17.105 10.0001 18 9.10513 18 8.00013C18 7.37013 17.704 6.77813 17.2 6.40013L14 4.00013V3.07913C14 2.47313 13.463 1.99513 12.863 2.08013C8.983 2.63213 6 5.96813 6 10.0001V18.0001H18Z" fill="black" />
                                    </svg>

                                    <span className="font-semibold font-plus">Board Games</span>
                                </div>
                            </li>
                        </ul>
                        <div>
                        </div>
                    </div>
                    <div className="lg:flex mt-5 gap-3 justify-between">
                        {/* <div className="max-w-5xl">
                        <div className="bg-white rounded-md flex justify-center items-center py-10">
                            <div className="homePage w-1/2 h-96"> </div>
                        </div>

                    </div> */}
                        <div className="xl:max-w-5xl lg:max-w-xl ">
                            <BlogsSlider setEvent={setEvent} />
                            <EventsCatBlock name={"Matched events"} setEvent={setEvent} />
                            <EventsCatBlock name={"Created events"} setEvent={setEvent} />
                        </div>
                        <div className="flex-1 ">
                            <SidebarSub />
                            {/* <SidebarUnSub/> */}
                        </div>
                    </div>
                </div>
            </Dashboardlayout>
            {slide === 1 ?
                <div className="w-full  h-screen bg-black bg-opacity-20 absolute top-0 left-0 z-50 flex items-center justify-center">
                    <DashboardSlider setSlide={setSlide} />
                </div>
                : null}
            {slide === 2 ?
                <div className="w-full  h-screen bg-black bg-opacity-20 absolute top-0 left-0 z-50 flex items-center justify-center">
                    <div className="w-[490px] bg-white p-14 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out">
                        <span className="absolute top-10 right-7 cursor-pointer" onClick={() => setSlide(4)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill="black" />
                                <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill="black" />
                            </svg>
                        </span>
                        <div>
                            <div className="home_pop2 w-28 h-28"></div>
                            <div className="py-1 text-start">
                                <h3 className="text-2xl font-bold font-plus">Welcome to Kumele</h3>
                                <p className=" font-plus text-sm py-1 text-[#525252]">Enjoy our premium In-app purchase for 14days. Invite 10 friends to get an extra  14 days.</p>
                                <h6 className="font-plus text-lg font-semibold py-1">Premium In-app purchase include:</h6>
                                <ul className="text-[#525252] text-md list-disc ml-5">
                                    <li>
                                        Location Change
                                    </li>
                                    <li>
                                        canabis event (Max guest 5)
                                    </li>
                                    <li>
                                        Erotic event ( Max guest 5)
                                    </li>
                                    <li>
                                        No Ads
                                    </li>
                                    <li>
                                        7 days pre event Advertising
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null}
            {
                slide === 3 ?
                    <div className="w-full  h-screen bg-black bg-opacity-20 absolute top-0 left-0 z-50 flex items-center justify-center">
                        <div className="w-[490px] bg-white p-14 rounded-3xl relative text-center animate-fadeIn duration-1000 ease-in-out">
                            <span className="absolute top-10 right-7 cursor-pointer" onClick={() => setSlide(4)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none">
                                    <path opacity="0.35" d="M33.0721 9.27209C32.6781 9.66409 27.6101 14.7341 24.0001 18.3441C20.3901 14.7341 15.3221 9.66609 14.9281 9.27209C13.3661 7.71009 10.8341 7.71009 9.27209 9.27209C7.71009 10.8341 7.71009 13.3661 9.27209 14.9281C9.66409 15.3221 14.7341 20.3901 18.3441 24.0001C14.7341 27.6101 9.66609 32.6781 9.27209 33.0721C7.71009 34.6341 7.71009 37.1661 9.27209 38.7281C10.8341 40.2901 13.3661 40.2901 14.9281 38.7281C15.2121 38.4441 38.4441 15.2121 38.7281 14.9281C40.2901 13.3661 40.2901 10.8341 38.7281 9.27209C37.1661 7.71009 34.6341 7.71009 33.0721 9.27209Z" fill="black" />
                                    <path d="M38.728 38.728C40.29 37.166 40.29 34.634 38.728 33.072C38.336 32.68 33.266 27.61 29.656 24L24 29.656C27.61 33.266 32.678 38.334 33.072 38.728C34.634 40.29 37.166 40.29 38.728 38.728Z" fill="black" />
                                </svg>
                            </span>
                            <div>
                                <div className="home_pop2 w-28 h-28"></div>
                                <div className="py-1 text-start">
                                    <h3 className="text-2xl font-bold font-plus">Guest Invites</h3>
                                    <p className=" font-plus text-sm py-6 text-[#525252]">We found 6 out 10 guest invites. Will you like to match with them? Click yes to confirm match or no to cancel event.</p>
                                    <div className="mt-8 flex justify-center gap-2">
                                        <button className="w-44 border border-black rounded-lg text-lg h-10">No</button>
                                        <button className="w-44 bg-black text-white rounded-lg text-lg h-10">Yes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
            }
            {evnet ?
                <EventDetails />
                :
                null}
        </>
    )
}
export default Home;