const EventStatCard = () => {
    return (
        <div className="border border-light_border rounded-md p-3 font-plus cursor-pointer">
            <div className="gap-2 flex">
                <img src="/img/cardImg.png" alt="img_profile" className="w-16 h-16"/>
                <div className="flex-1">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl">Psychedelic Jazz</h3>
                        <p className="flex gap-1 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 45 45" fill="none">
                                <path d="M31.4595 24.2302H13.0179C9.96207 24.2302 7.48535 21.7535 7.48535 18.6977C7.48535 10.5501 14.0912 3.94434 22.2387 3.94434C30.3862 3.94434 36.992 10.5501 36.992 18.6977C36.992 21.7535 34.5153 24.2302 31.4595 24.2302Z" fill="black" />
                                <path opacity="0.35" d="M22.2386 40.8273C19.1828 40.8273 16.7061 38.3506 16.7061 35.2948V20.5415H27.7711V35.2948C27.7711 38.3506 25.2943 40.8273 22.2386 40.8273Z" fill="black" />
                            </svg>
                            <span className="text-dark text-lg">Psychedelic</span>
                        </p>
                    </div>
                    <p className="text-dark ">Hosted by Alkesh Kumar</p>
                    <span className="text-dark text-sm">23 August, 2022, 12:40</span>
                </div>

            </div>
        </div>
    )
}
export default EventStatCard;