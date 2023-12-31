const Slider1 = () => {
    return (
        
            <div className="max-w-5xl mx-auto mt-1">
                <div className="sm:flex justify-center xl:gap-20 lg:gap-10 items-center">
                    <div className="sm:w-1/2">
                        <img src="/img/hero1.png" className="xl:w-96 lg:w-72 md:w-80 sm:w-72 w-60 h-auto sm:ml-auto mx-auto" alt="img" />
                    </div>
                    <div className="text-start sm:w-1/2 px-3">
                        <h2 className="z-10 text-3xl font-medium relative after:absolute after:top-full after:left-16 after:bg-theme after:h-3 after:w-32 after:-z-10 after:-translate-y-3 text-center sm:text-left">Why Kuleme?</h2>
                        <ul className="xl:py-3 py-2 text-md font-medium list-disc px-4">
                            <li className="xl:py-2 py-1">
                                kumele is an app by hobby-enthusiasts for the hobby enthusiast.
                            </li>
                            <li className="xl:py-2 py-1">
                                We value our physical and mental health. Hence, we support real-life over virtual reality.
                            </li>
                            <li className="xl:py-2 py-1">
                                We respect your privacy.
                            </li>
                            <li className="xl:py-2 py-1">Paid hobby events or activities go through PAYPAL to protect your funds. </li>
                            <li className="xl:py-2 py-1">Earn Money doing what you love.</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
export default Slider1;