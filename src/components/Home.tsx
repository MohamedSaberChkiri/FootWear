import  Button  from "@mui/material/Button"
import '../app/globals.css'
import Link from "next/link"







export default function HomeItems(){
    return (
        <div className="w-full h-fit p-20 flex items-center justify-center bg-zinc-300 sm:gap-[10rem] gap-[2rem] flex-wrap">


            
            <div className="flex flex-col items-start  justify-around h-fit gap-[2rem] ">
                <h1 className="font-bold text-7xl">NEW ARRIVAL <br />SNEAKERS</h1>
                <p className="text-xl">Introducing Our Latest Collection elevate Your Style with <br />Premium Sneakers</p>
                <Link href="/collections"><Button className="bg-black text-white hover:bg-black hover:text-white rounded-none w-[150px] h-[6vh] font-bold">SHOP NOW</Button></Link>
                
            </div>




            <div className="sneaker w-[30rem] sm:h-[35rem] h-[20rem] ">

            </div>
        </div>
    )
}