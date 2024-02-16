import Link from "next/link";
import Timer from "./Timer";
import { Button } from "./ui/button";

export default function FlashSale(){
    return (
            <div className="w-full min-h-[30vh] gap-6 sm:gap-0 overflow-x-hidden h-fit bg-black text-white flex flex-wrap items-center justify-around pb-[10px] p-12 sm:p-0">

                <div className="sm:text-6xl text-4xl w-[100px] sm:w-[350px] flex items-center justify-center">FLASH <br />SALE</div>
                <div className="sm:text-6xl text-4xl w-[100px] sm:w-[350px] flex items-center justify-center">50% <br />OFF</div>
                <div><Timer durationInDays={30} /></div>
                <Link href='/collections'><Button className="rounded-none sm:w-[250px] sm:h-[10vh] w-[200px] h-[5vh] bg-white text-black hover:text-black hover:bg-slate-300	">SHOP NOW</Button></Link>
                
            </div>
    )
}