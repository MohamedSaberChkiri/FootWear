"use client"

import { Button } from "@/components/ui/button"
import { Rating } from "@mui/material"
import { useState } from "react"
import Divider from '@mui/material/Divider';

export default function ItemInfo(
    props :{
        productName : string,
        price: number ,
        manufactor : string,
        currentStock : number,
        productDescription : string ,
        details : string,
        reviews : number
    }
){

    const backGround = 'url("https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b01c67f2-2481-45d7-b383-a1476d768f6e/air-force-1-07-damenschuh-dgr2tk.png")'
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

                <div className="w-[40rem] h-[40rem]" style={{ background:  backGround, backgroundPosition: "center", backgroundSize: 'cover' }}></div>

                               {/* -------------------------------------------------------------------------------------------------------------          */}

                <div className="w-[40rem] h-[40rem] flex flex-col items-start justify-around  p-[4vh]">
                            <Rating name="read-only" value={5} readOnly/>
                                    <p className="text-5xl font-bold">AERODAILY BASEBALL CAP</p>
                                    <p className="font-bold text-xl">$102</p>
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="flex items-center font-bold justify-around w-[150px] h-[5vh] border-black border">
                                                <button onClick={RmCon} >-</button>
                                                <div>{Con}</div>
                                                <button onClick={AddCon}>+</button>
                                            </div>
                                            <Button className="w-[150px] h-[5vh] rounded-none">ADD TO CART</Button>
                                        </div>

                                        <p>here goes the long description qsfjioqsdjfisdjfiqosjf sqofjsiofj sqjf 
                                            sfiojsqfijs fsiofjs qdfioqsjf qsdfoqs ifjiosqjdfjsdf qsof qsifjisoqdfishdfioqsj 
                                            fjsfihsqfoijdsqfijf qsdhere goes the long description qsfjioqsdjfisdjfiqosjf sqofjsiofj sqjf 
                                            sfiojsqfijs fsiofjs qdfioqsjf qsdfoqs ifjiosqjdfjsdf qsof qsifjisoqdfishdfioqsj 
                                            fjsfihsqfoijdsqfijf qsdhere goes the long description qsfjioqsdjfisdjfiqosjf sqofjsiofj sqjf 
                                            sfiojsqfijs fsiofjs qdfioqsjf qsdfoqs ifjiosqjdfjsdf qsof qsifjisoqdfishdfioqsj 
                                            fjsfihsqfoijdsqfijf qsdhere goes the long description qsfjioqsdjfisdjfiqosjf sqofjsiofj sqjf 
                                            sfiojsqfijs fsiofjs qdfioqsjf qsdfoqs ifjiosqjdfjsdf qsof qsifjisoqdfishdfioqsj 
                                            fjsfihsqfoijdsqfijf qsd</p>
                                        <h1 className="font-bold text-2xl">REVIEWS :</h1>
                                        <Divider className="w-full"/>
                                        <p>There are yet no reviews for this product.</p>
                                       
                    </div>
                       {/* -------------------------------------------------------------------------------------------------------------          */}
            </div>



           


        </div>
    )
}