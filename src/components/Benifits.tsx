import { TbTruckDelivery } from "react-icons/tb";
import { RiBarcodeLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";


export default function Benifits(){
    return (
        <div className="min-h-[25vh] flex flex-wrap items-center justify-center gap-[10vh] text-white bg-black w-full py-[3vh]">
            <div className="logo"></div>

                            <div className="flex items-center justify-around w-[250px]">
                                <div className="text-6xl"><TbTruckDelivery /></div>
                                <div>
                                    <div className="text-xl font-bold">FREE DELIVERY</div>
                                    <div className="text-[14px] text-zinc-400">For all orders over $100</div>
                                </div>
                            </div>



                            <div className="flex items-center justify-around w-[250px]">
                                <div className="text-6xl"><RiBarcodeLine /></div>
                                <div>
                                    <div className="text-xl font-bold">SECURE PAYMENT</div>
                                    <div className="text-[14px] text-zinc-400">A unique payment processing</div>
                                </div>
                            </div>



                            <div className="flex items-center justify-around w-[250px]">
                                <div className="text-6xl"><RiCustomerService2Fill /></div>
                                <div>
                                    <div className="text-xl font-bold">24/7 SUPPORT</div>
                                    <div className="text-[14px] text-zinc-400">Respond same day!</div>
                                </div>
                            </div>
        </div>
    )
}