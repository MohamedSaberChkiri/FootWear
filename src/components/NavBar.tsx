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

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import {GiHamburgerMenu} from 'react-icons/gi'
import React from "react";

import CartPage from "./CartProducts";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import Link from "next/link";

import { FaUserPlus } from "react-icons/fa";



  




function NavBar(props : {navStyle: string}){

    
    

    return(
        <div className={cn("w-full h-24 flex items-center justify-around bg-black text-white ", props.navStyle)}>


                <Link href="/"><div className="text-4xl logo">FootWear</div></Link>
                

                <div className="hidden sm:flex">
                <Menubar className="border-none text-white bg-black">
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
                <Dialog>
                        <DialogTrigger><IoSearchOutline className="text-2xl cursor-pointer"/></DialogTrigger>
                        <DialogContent className="w-full h-fit bg-transparent border-none shadow-none">
                            <DialogHeader>
                           
                            <DialogDescription className="w-full">
                              <input type="text" className="w-full text-white text-2xl border-b border-b-white outline-none bg-transparent pb-[20px] " placeholder="Search Products" />
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                   
                   <TemporaryDrawer title="YOUR CART" badgeContent={0} opener={<IoCartOutline className="text-2xl cursor-pointer" />} contente={<CartPage/>} />
                   

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
                <div className="flex sm:hidden cursor-pointer">
                <TemporaryDrawer title="" badgeContent={0} opener={<GiHamburgerMenu className="text-4xl"/>} contente={<MobileNav/>} />
                
                </div>





        </div>
    )
}

export default NavBar