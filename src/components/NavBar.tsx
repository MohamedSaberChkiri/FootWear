
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { IoIosArrowDown, IoMdPerson } from "react-icons/io"
import { IoCartOutline } from 'react-icons/io5';
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
import LoginForm from "./LoginForm"
import {GiHamburgerMenu} from 'react-icons/gi'
import React from "react";
import ReviewCard from "./ReviewCard";

  




function NavBar(){

    

    

    return(
        <div className="w-full h-24 flex items-center justify-around bg-black text-white m-0 p-0">


                <div className="text-4xl logo">FootWear</div>

                <div className="hidden sm:flex">
                <Menubar className="border-none text-white bg-black">
                    <MenubarMenu >
                       <MenubarTrigger>New Arrivals </MenubarTrigger>
                    </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Shop <MenubarShortcut className="ml-[5px]"><IoIosArrowDown /></MenubarShortcut></MenubarTrigger>
            <MenubarContent>
                <MenubarItem> Men </MenubarItem>
                    <MenubarItem> Women </MenubarItem>
                    <MenubarItem> Kids </MenubarItem>
                    <MenubarItem>Sports </MenubarItem>
                        <MenubarItem> Boots </MenubarItem>
            </MenubarContent>
        </MenubarMenu>
                <MenubarMenu>
                <MenubarTrigger>Contact Us</MenubarTrigger>
                                                    
            </MenubarMenu>
    </Menubar>

                </div>

                <div className="hidden sm:flex items-center justify-around w-40 h-12 ">
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
                   
                   <TemporaryDrawer title="YOUR CART" badgeContent={1} opener={<IoCartOutline className="text-2xl cursor-pointer" />} contente="Your Cart Is Empty"/>
                   
                   <Dialog>
                        <DialogTrigger><IoMdPerson  className="text-2xl cursor-pointer"/></DialogTrigger>
                        <DialogContent className="w-fit ">
                            <DialogHeader>
                            <DialogTitle className="text-3xl">Login</DialogTitle>
                            <DialogDescription className="w-full">
                                    <LoginForm/>
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                </div>
                <div className="flex sm:hidden cursor-pointer">
                <TemporaryDrawer title="FootWear" badgeContent={0} opener={<GiHamburgerMenu className="text-4xl"/>} contente="here goes the buttons"/>
                
                </div>





        </div>
    )
}

export default NavBar