import EventCard from "../eventCard";
const EventsCatBlock = ({ name, setEvent }) => {
    return (
        <div className="mt-3 bg-white p-3 rounded-md">
            <div className="flex items-start justify-between">
                <h2 className="text-xl font-extrabold font-plus">{name}</h2>
                <span className="text-[#38579E] font-semibold font-plus texxt-lg">View all</span>
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