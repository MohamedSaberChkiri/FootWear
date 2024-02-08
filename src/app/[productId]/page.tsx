"use client"

import { Button } from "@/components/ui/button"
import { Rating } from "@mui/material"
import { useState } from "react"
import Divider from '@mui/material/Divider';
import { useParams } from "next/navigation";

import products from '../../data/Shoes';





export default function ItemInfo(){

 const productId = useParams()
 const product = products.find((product) => product.id === productId.productId);

    const backGround = product.backgroundLink
    if (!product) {
        return <div>Product not found</div>;
      }

    const [Con, setCon] = useState<number>(1)
    const AddCon =()=>{
        if(Con < 10){
            setCon(Con +1)
        }
    }
    const RmCon= ()=>{
        if(Con > 1){
            setCon(Con -1)
        }else{
            setCon(1)
        }
    }
    return(
        <div>
            
            <div className="flex flex-wrap items-center justify-center my-[3vh] gap-4">

                <img src={backGround} className="w-[40rem] h-[40rem]"></img>

                               {/* -------------------------------------------------------------------------------------------------------------          */}

                <div className="w-[40rem] h-[40rem] flex flex-col items-start justify-around  p-[4vh]">
                            <Rating name="read-only" value={5} readOnly/>
                                    <p className="text-5xl font-bold">{product.name}</p>
                                    <p className="font-bold text-xl">${product.price}</p>
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="flex items-center font-bold justify-around w-[150px] h-[5vh] border-black border">
                                                <button onClick={RmCon} >-</button>
                                                <div>{Con}</div>
                                                <button onClick={AddCon}>+</button>
                                            </div>
                                            <Button className="w-[150px] h-[5vh] rounded-none">ADD TO CART</Button>
                                        </div>
                                        <div className="flex flex-col items-start text-[12px] justify-around">
                                            <p className="font-bold cursor-pointer">ASK A QUESTION ABOUT THIS PRODUCT</p>
                                            <p>MANUFACTURER : {product.manufacturer}</p>
                                            <p>QUANTITY : {product.currentStock}</p>
                                        </div>

                                        <p>{product.description }</p>
                                        <h1 className="font-bold text-2xl">REVIEWS :</h1>
                                        <Divider className="w-full"/>
                                        <p>There are yet no reviews for this product.</p>
                                       
                    </div>
                       {/* -------------------------------------------------------------------------------------------------------------          */}
            </div>



           


        </div>
    )
}