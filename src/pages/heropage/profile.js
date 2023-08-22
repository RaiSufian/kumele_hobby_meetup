import HeroFooter from "./heroFooter";
const ProfileHero = ({ slide, setSlide }) => {
    return (

        <div className="text-center font-fredoka pt-14 relative">
            <div className="logo absolute top-14 left-16">
                <img src="/img/logo_light.png" />
            </div>
            <h1 className="text-5xl font-medium">Hobby Meetup</h1>
            <h6 className="p-3 text-2xl font-medium text-theme">We play. We overcome. We unite. We live.</h6>
            {slide == 1 ?
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center gap-20 items-center">
                        <div className="w-1/2 ">
                            <img src="/img/hero1.png" className="max-w-lg h-auto ml-auto" />
                        </div>
                        <div className="text-start w-1/2">
                            <h2 className="text-4xl font-medium">1Why Kuleme?</h2>
                            <ul className="py-5 text-xl font-medium list-disc px-4">
                                <li className="py-3">
                                    kumele is an app by hobby-enthusiasts for the hobby enthusiast.
                                </li>
                                <li className="py-3">
                                    We value our physical and mental health. Hence, we support real-life over virtual reality.
                                </li>
                                <li className="py-3">
                                    We respect your privacy.
                                </li>
                                <li className="py-3">Paid hobby events or activities go through PAYPAL to protect your funds. </li>
                                <li className="py-3">Earn Money doing what you love.</li>
                            </ul>
                        </div>
                    </div>
                </div> : slide == 2 ?
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-center gap-20 items-center">
                            <div className="w-1/2 ">
                                <img src="/img/hero1.png" className="max-w-lg h-auto ml-auto" />
                            </div>
                            <div className="text-start w-1/2">
                                <h2 className="text-4xl font-medium">2Why Kuleme?</h2>
                                <ul className="py-5 text-xl font-medium list-disc px-4">
                                    <li className="py-3">
                                        kumele is an app by hobby-enthusiasts for the hobby enthusiast.
                                    </li>
                                    <li className="py-3">
                                        We value our physical and mental health. Hence, we support real-life over virtual reality.
                                    </li>
                                    <li className="py-3">
                                        We respect your privacy.
                                    </li>
                                    <li className="py-3">Paid hobby events or activities go through PAYPAL to protect your funds. </li>
                                    <li className="py-3">Earn Money doing what you love.</li>
                                </ul>
                            </div>
                        </div>
                    </div> :
                    <div className="max-w-7xl mx-auto">
                        <div className="flex justify-center gap-20 items-center">
                            <div className="w-1/2 ">
                                <img src="/img/hero1.png" className="max-w-lg h-auto ml-auto" />
                            </div>
                            <div className="text-start w-1/2">
                                <h2 className="text-4xl font-medium">3Why Kuleme?</h2>
                                <ul className="py-5 text-xl font-medium list-disc px-4">
                                    <li className="py-3">
                                        kumele is an app by hobby-enthusiasts for the hobby enthusiast.
                                    </li>
                                    <li className="py-3">
                                        We value our physical and mental health. Hence, we support real-life over virtual reality.
                                    </li>
                                    <li className="py-3">
                                        We respect your privacy.
                                    </li>
                                    <li className="py-3">Paid hobby events or activities go through PAYPAL to protect your funds. </li>
                                    <li className="py-3">Earn Money doing what you love.</li>
                                </ul>
                            </div>
                        </div>
                    </div>}

            <div className="hero_nav">
                <div className="flex justify-center gap-10">
                    <div className={`w-2  ${slide == 1 ? "bg-white" : "bg-theme"}  h-2 rounded-full cursor-pointer borderborder-theme hover:border-white`} onClick={() => setSlide(1)}></div>
                    <div className={`w-2  ${slide == 2 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(2)}></div>
                    <div className={`w-2  ${slide == 3 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(3)}></div>
                    <div className={`w-2  ${slide == 4 ? "bg-white" : "bg-theme"}  bg-theme h-2 rounded-full cursor-pointer border border-theme hover:border-white`} onClick={() => setSlide(4)}></div>
                </div>
            </div>

            <div className="hero_footer">
                <HeroFooter />
            </div>
        </div>

    )
}
export default ProfileHero;