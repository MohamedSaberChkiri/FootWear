
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
import { IoSearchOutline } from "react-icons/io5"
import '../app/globals.css'
import TemporaryDrawer from "./Drawer"




function NavBar(){
    return(
        <div className="w-full h-24 flex items-center justify-around bg-black text-white m-0 p-0">


                <div className="text-4xl logo">FootWear</div>

                <div>
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

                <div className="flex items-center justify-around w-40 h-12 ">
                   <IoSearchOutline className="text-2xl cursor-pointer"/>
                   <TemporaryDrawer/>
                   <IoMdPerson className="text-2xl cursor-pointer"/>
                   
                </div>





        </div>
    )
}

export default NavBar