import CustomSeparator from "./BreadCrumb";

export default function LayoutTop(props : {
    text? : string 
}){

    const randomNum = Math.floor(Math.random() * 7);

    // Define an array of classNames
    const classNames = ['storydiv', 'storydiv1', 'storydiv2', 'storydiv3', 'storydiv4', 'storydiv5', 'storydiv6'];

    console.log(classNames[randomNum])
    return( 
        <div className={`relative w-full min-h-[30vh] flex  items-start justify-start px-[20%] ${classNames[randomNum]}`}>

            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

            <div className="flex flex-col items-start justify-center text-start text-white z-20 my-[10%] gap-6">
                <p className="font-bold text-5xl">{props.text ? props.text : 'SHOP'}</p>
                <div className="flex flex-wrap items-center justify-around gap-4 text-gray-300"> <div>YOU ARE HERE :</div> <CustomSeparator/></div>
            </div>

           
        </div>
    )
}