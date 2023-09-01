import Slider from "react-slick";
import EventCard from "../eventCard";
const BlogsSlider = ({ setEvent }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="bg-white rounded-md px-4 py-4 relative">
            <h2 className="text-xl font-bold font-plus"> Hobby events in your location</h2>
            <Slider {...settings} className="event_slider mt-5 px-3">
                <div>
                    <EventCard setEvent={setEvent} />
                </div>
                <div>
                    <EventCard setEvent={setEvent} />
                </div>
                <div>
                    <EventCard setEvent={setEvent} />
                </div>
                <div>
                    <EventCard setEvent={setEvent} />
                </div>
                <div>
                    <EventCard setEvent={setEvent} />
                </div>
                <div>
                    <EventCard setEvent={setEvent} />
                </div>
            </Slider>
            <div className="cursor-pointer w-7 h-7 rounded-xl button_shadow flex items-center justify-center absolute top-1/2 left-0 z-10 bg-white translate-y-2 translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 27 27" fill="none">
                    <path opacity="0.35" d="M11.4253 15.8427C12.0723 15.1957 18.5074 8.76059 19.1544 8.11355C20.4485 6.81946 20.4485 4.72265 19.1544 3.42857C17.8604 2.13449 15.7635 2.13449 14.4695 3.42857C13.8224 4.07561 7.38734 10.5107 6.7403 11.1577C5.44621 12.4518 5.44621 14.5486 6.7403 15.8427C8.03438 17.1368 10.1323 17.1368 11.4253 15.8427Z" fill="black" />
                    <path d="M6.74225 15.8421C7.38929 16.4891 13.8244 22.9242 14.4714 23.5712C15.7655 24.8653 17.8623 24.8653 19.1564 23.5712C20.4505 22.2771 20.4505 20.1803 19.1564 18.8863C18.5093 18.2392 12.0743 11.8041 11.4272 11.1571C10.1331 9.863 8.03633 9.863 6.74225 11.1571C5.44816 12.4512 5.44816 14.5491 6.74225 15.8421Z" fill="black" />
                </svg>
            </div>
            <div className="cursor-pointer w-7 h-7 rounded-xl button_shadow flex items-center justify-center absolute top-1/2 right-0 z-10 bg-white translate-y-2 -translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 27 27" fill="none">
                    <path opacity="0.35" d="M15.5747 11.1573C14.9277 11.8043 8.4926 18.2394 7.84556 18.8865C6.55148 20.1805 6.55148 22.2773 7.84556 23.5714C9.13965 24.8655 11.2365 24.8655 12.5305 23.5714C13.1776 22.9244 19.6127 16.4893 20.2597 15.8423C21.5538 14.5482 21.5538 12.4514 20.2597 11.1573C18.9656 9.8632 16.8677 9.8632 15.5747 11.1573Z" fill="black" />
                    <path d="M20.2578 11.1579C19.6107 10.5109 13.1756 4.07581 12.5286 3.42877C11.2345 2.13469 9.13769 2.13469 7.84361 3.42877C6.54953 4.72285 6.54953 6.81966 7.84361 8.11375C8.49065 8.76079 14.9257 15.1959 15.5728 15.8429C16.8669 17.137 18.9637 17.137 20.2578 15.8429C21.5518 14.5488 21.5518 12.4509 20.2578 11.1579Z" fill="black" />
                </svg>
            </div>
        </div>

    )
}
export default BlogsSlider