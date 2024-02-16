import { cn } from "@/lib/utils";
import CustomSeparator from "./BreadCrumb";

export default function LayoutTop(props : {
    text? : string 
   
}){

    const randomNum = Math.floor(Math.random() * 7);

    
    const classNames = ['storydiv', 'storydiv1', 'storydiv2', 'storydiv3', 'storydiv4', 'storydiv5', 'storydiv6'];

   
    return( 
        <div className={cn('relative w-full min-h-[30vh] flex sm:items-start sm:justify-start items-center justify-center sm:px-[20%] animate-fad', classNames[randomNum])}>

            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            <div className="flex flex-col items-start justify-center text-start text-white z-20 my-[10%] gap-6">
                <p className="font-bold text-3xl sm:text-5xl">{props.text ? props.text : 'SHOP'}</p>
                <div className="flex flex-wrap items-center justify-around gap-4 text-gray-300"> <CustomSeparator/></div>
            </div>

           
        </div>
    )
}