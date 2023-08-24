const Slider1 = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto mt-1">
                <div className="flex justify-center xl:gap-20 lg:gap-10 items-center">
                    <div className="xl:w-1/2 lg:w-2/5">
                        <img src="/img/hero1.png" className="xl:max-w-md lg:max-w-sm h-auto ml-auto" alt="img" />
                    </div>
                    <div className="text-start w-1/2">
                        <h2 className="z-10 text-3xl font-medium relative after:absolute after:top-full after:left-16 after:bg-theme after:h-3 after:w-32 after:-z-10 after:-translate-y-3">Why Kuleme?</h2>
                        <ul className="xl:py-5 py-2 text-md font-medium list-disc px-4">
                            <li className="xl:py-3 py-1">
                                kumele is an app by hobby-enthusiasts for the hobby enthusiast.
                            </li>
                            <li className="xl:py-3 py-1">
                                We value our physical and mental health. Hence, we support real-life over virtual reality.
                            </li>
                            <li className="xl:py-3 py-1">
                                We respect your privacy.
                            </li>
                            <li className="xl:py-3 py-1">Paid hobby events or activities go through PAYPAL to protect your funds. </li>
                            <li className="xl:py-3 py-1">Earn Money doing what you love.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Slider1;