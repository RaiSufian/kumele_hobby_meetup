import Slider from "react-slick";
import EventCard from "../eventCard";
const BlogsSlider = ({setEvent}) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
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
        <div className="bg-white rounded-md px-4 py-4">
            <h2 className="text-xl font-bold font-plus"> Hobby events in your location</h2>
            <Slider {...settings} className="event_slider mt-5 px-3">
                <div>
                    <EventCard setEvent={setEvent}/>
                </div>
                <div>
                    <EventCard setEvent={setEvent}/>
                </div>
                <div>
                    <EventCard setEvent={setEvent}/>
                </div>
                <div>
                    <EventCard setEvent={setEvent}/>
                </div>
                <div>
                    <EventCard setEvent={setEvent}/>
                </div>
                <div>
                    <EventCard setEvent={setEvent}/>
                </div>
            </Slider>
        </div>

    )
}
export default BlogsSlider