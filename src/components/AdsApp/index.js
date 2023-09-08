import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdsDetailsCard from "../adsDetailsCard";
const Ads = () => {
    const [showAd, setShowAd] = useState(false)



    const styleMode = useSelector((state) => state.styleModer.mode)
    return (
        <>
            <div className={` p-3 rounded-lg mb-3 ${styleMode ? "bg-black" : "bg-white"} `}>
                <div className="flex flex-wrap">
                    <div className="w-1/2 p-1">
                        <div className="cursor-pointer" onClick={() => setShowAd(true)}>
                            <img src="/img/add1.jpg" />
                        </div>
                    </div>
                    <div className="w-1/2 p-1">
                        <div className="cursor-pointer" onClick={() => setShowAd(true)}>
                            <img src="/img/add2.png" />
                        </div>
                    </div>
                    <div className="w-1/2 p-1">
                        <div className="cursor-pointer" onClick={() => setShowAd(true)}>
                            <img src="/img/add3.png" />
                        </div>
                    </div>
                    <div className="w-1/2 p-1">
                        <div className="cursor-pointer" onClick={() => setShowAd(true)}>
                            <img src="/img/add4.png" />
                        </div>
                    </div>
                </div>
            </div>
            {showAd ? <AdsDetailsCard setShowAd={setShowAd} /> : null}

        </>
    )
}
export default Ads;