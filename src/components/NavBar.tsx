"use client"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { IoIosArrowDown, IoMdPerson } from "react-icons/io"
import { IoCartOutline, IoLogIn } from 'react-icons/io5';
import { IoSearchOutline } from "react-icons/io5"
import '../app/globals.css'
import TemporaryDrawer from "./Drawer"



import {GiHamburgerMenu} from 'react-icons/gi'
import React, { useState } from "react";

import CartPage from "./CartProducts";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import Link from "next/link";

import { FaUserPlus } from "react-icons/fa";

import DisplaySearchedItems from "./DisplaySearchedItems";




  




function NavBar(props : {navStyle: string}){

    
   
    
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const handleShowSearch = ()=>{
      setShowSearch(!showSearch)
    }
     
  

    
    

    return(
        <div className={cn("w-full h-24 flex items-center justify-around bg-neutral-900	 text-white ", props.navStyle)}>


                <Link href="/" className="w-fit h-fit"><div className="logo"></div></Link>
                

                <div className="hidden sm:flex">
                <Menubar className="border-none text-white bg-transparent">
                    <Link href='/collections'>
                    <MenubarMenu >
                       <MenubarTrigger>New Arrivals </MenubarTrigger>
                    </MenubarMenu>
                    </Link>
        <MenubarMenu>
            <MenubarTrigger>Shop <MenubarShortcut className="ml-[5px]"><IoIosArrowDown /></MenubarShortcut></MenubarTrigger>
            <MenubarContent>
            <Link href='/collections'>  <MenubarItem> Men </MenubarItem>  </Link>
            <Link href='/collections'>    <MenubarItem> Women </MenubarItem>  </Link>
            <Link href='/collections'>   <MenubarItem> Kids </MenubarItem>  </Link>
            <Link href='/collections'>   <MenubarItem>Sports </MenubarItem>  </Link>
            <Link href='/collections'>     <MenubarItem> Boots </MenubarItem>  </Link>
            </MenubarContent>
        </MenubarMenu>
                <MenubarMenu>


             <Link href='/contact'>   <MenubarTrigger>Contact Us</MenubarTrigger> </Link>
                                                    
            </MenubarMenu>
    </Menubar>

                </div>

                <div className="hidden sm:flex items-center justify-between w-28 h-12">
               <IoSearchOutline className="text-2xl cursor-pointer" onClick={handleShowSearch}/>
                   
                   <TemporaryDrawer title="YOUR CART"  opener={<IoCartOutline className="text-2xl cursor-pointer" />} contente={<CartPage/>} closeOnClick/>
                   

                   <Menubar className="bg-transparent border-none p-0 m-0 active:bg-transparent">
                    <MenubarMenu>
                        <MenubarTrigger className="p-0 active:bg-transparent"><IoMdPerson  className="text-2xl cursor-pointer"/></MenubarTrigger>
                        <MenubarContent>
                               <Link href='/login'><MenubarItem className="flex items-center justify-between cursor-pointer"><p>LOGIN</p> <IoLogIn className="text-xl font-bold"/></MenubarItem></Link> 
                               <Link href='/register'> <MenubarItem className="flex items-center justify-between cursor-pointer"><p>REGISTER</p> <FaUserPlus className="text-xl font-bold"/></MenubarItem></Link>
                              
                        </MenubarContent>
                    </MenubarMenu>
                   </Menubar>
                 
               
                </div>
                <div className="flex sm:hidden cursor-pointer items-center justify-center gap-6">
                <IoSearchOutline className="text-3xl cursor-pointer" onClick={handleShowSearch}/>
                <TemporaryDrawer title=""  opener={<GiHamburgerMenu className="text-4xl"/>} contente={<MobileNav/>} closeOnClick/>
                
                </div>

        
                {showSearch && (
                    <div className="absolute top-24 left-0 w-full h-full flex items-center justify-center z-900">
                      
                      <DisplaySearchedItems /> 
                    </div>
                  )}


        
          


        </div>
    )
}

export default NavBar