"use client"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
  
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { IoMdPerson } from "react-icons/io"
import { IoCartOutline, IoLogIn } from 'react-icons/io5';
import { IoSearchOutline } from "react-icons/io5"
import '../app/globals.css'
import TemporaryDrawer from "./Drawer"
import { MdKeyboardArrowDown } from "react-icons/md";





import {GiHamburgerMenu} from 'react-icons/gi'
import React, { useEffect, useState } from "react";

import CartPage from "./CartProducts";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import Link from "next/link";

import { FaUserPlus } from "react-icons/fa";

import DisplaySearchedItems from "./DisplaySearchedItems";
import { Button } from "./ui/button";
import { Menu, MenuItem } from "@mui/material";
import { useCart } from "@/contexts/CartContext";



interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

}

  




function NavBar(props : {navStyle: string}){

    

    const {cart} = useCart()
    
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const handleShowSearch = ()=>{
      setShowSearch(!showSearch)
    }
     
    const [loggedIn, setLoggedIn] = useState<string>('false');
    const [UserName, setUserName] = useState<string>('')

    useEffect(() => {
      const USER = localStorage.getItem('userName')
      if(USER){
  
        setLoggedIn('true')
        setUserName(USER)
      }}, []);

    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    return(
        <div className={cn("w-full h-24 flex items-center justify-around bg-neutral-900	 text-white ", props.navStyle)}>


                <Link href="/" ><div className="logo py-6"></div></Link>
                

                <div className="hidden sm:flex sm:gap-4">
                  <Link href='/collections'><Button className="bg-transparent hover:bg-white hover:text-black  duration-200">New Arrivals</Button></Link>
                  
                <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="bg-transparent hover:bg-white hover:text-black flex items-center justify-center gap-2 duration-200"
                      >
                        Browse
                        <MdKeyboardArrowDown className="text-xl"/>

                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        
                        <Link href='/collections?collection=men'>   <MenuItem onClick={handleClose}>Men Sneakers</MenuItem></Link>
                        <Link href='/collections?collection=women'>   <MenuItem onClick={handleClose}>Women Sneakers</MenuItem></Link>
                        <Link href='/collections?collection=kids'> <MenuItem onClick={handleClose}>kids Sneaker</MenuItem></Link>
                      </Menu>
                    </div>
                    <Link href='/contact'> <Button className="bg-transparent hover:bg-white hover:text-black  duration-200">Contact Us</Button></Link>
                </div>

                <div className="hidden sm:flex items-center justify-between w-fit gap-4 h-12 ">
               <IoSearchOutline className="text-2xl cursor-pointer" onClick={handleShowSearch}/>
                   
                   <TemporaryDrawer title="YOUR CART"  opener={<IoCartOutline className="text-2xl cursor-pointer" />} contente={<CartPage/>} closeOnClick={true} cartLen={cart.length} />
                   
                  {loggedIn === 'true' ? 
                  
                 
                   <Menubar className="bg-transparent border-none p-0 m-0">
                    <MenubarMenu>
                        <MenubarTrigger className="p-[5px] active:bg-transparent"><div>Welcome, {UserName}</div></MenubarTrigger>
                        <MenubarContent>



                                 <Button className="bg-white hover:bg-gray-200 w-full text-black" onClick={()=>{
                                      localStorage.removeItem("isLoggedIn");
                                      localStorage.removeItem("userName");
                                      window.location.reload()
                                    }}>Logout</Button>
                        </MenubarContent>
                    </MenubarMenu>
                   </Menubar>
              

                  
                  : 
                   <Menubar className="bg-transparent border-none p-0 m-0 active:bg-transparent">
                    <MenubarMenu>
                        <MenubarTrigger className="p-0 active:bg-transparent"><IoMdPerson  className="text-2xl cursor-pointer"/></MenubarTrigger>
                        <MenubarContent>
                               <Link href='/login'><MenubarItem className="flex items-center justify-between cursor-pointer"><p>LOGIN</p> <IoLogIn className="text-xl font-bold"/></MenubarItem></Link> 
                               <Link href='/register'> <MenubarItem className="flex items-center justify-between cursor-pointer"><p>REGISTER</p> <FaUserPlus className="text-xl font-bold"/></MenubarItem></Link>
                              
                        </MenubarContent>
                    </MenubarMenu>
                   </Menubar>
                  }
               
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