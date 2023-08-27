const ShoppingCard = ({value , setPayModal}) => {
    return (
        <div className={`${value.active ? "bg-theme" : "bg-white"} py-2 px-3  card_shadow rounded-lg mt-4`}>

            <div className="flex gap-2">
                <div>
                    {value.icons}
                </div>
                <div className="flex-1">
                    <div className="flex justify-between text-xl font-bold font-plus">
                        <h2 className="">  {value.name}</h2>
                        <span className={ `${value.active ? "text-[#38579E]" : "text-theme"} `}> $ {value.price}</span>
                    </div>
                    <p className="font-lg py-1">{value.des}</p>
                    <div className="mt-5">
                        <button className="bg-black text-white float-right w-48 rounded-lg text-lg py-1" onClick={()=>setPayModal(true)}>  {value.button}</button>
                    </div>


                </div>

            </div>
        </div>
    )
}
export default ShoppingCard;