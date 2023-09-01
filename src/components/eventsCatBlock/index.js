import EventCard from "../eventCard";
import { useSelector } from "react-redux";
const EventsCatBlock = ({ name, setEvent }) => {
    const styleMode = useSelector((state) => state.styleModer.mode);
    return (
        <div className={` ${styleMode ? "bg-black" : "bg-white"} mt-3  p-3 rounded-md `}>
            <div className="flex items-start justify-between">
                <h2 className={`${styleMode  ? "text-black" : ""} text-xl font-extrabold font-plus `}>{name}</h2>
                <span className="text-theme_blue font-semibold font-plus texxt-lg">View all</span>
            </div>
            <div className="flex mt-5 flex-wrap">
                <div className="xl:w-1/3 sm:w-1/2">
                    <EventCard setEvent={setEvent} />
                </div>
                <div className="xl:w-1/3 sm:w-1/2">
                    <EventCard setEvent={setEvent} />
                </div>
                <div className="xl:w-1/3 sm:w-1/2">
                    <EventCard setEvent={setEvent} />
                </div>

            </div>
        </div>
    )
}
export default EventsCatBlock;