import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";



import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "./ui/button";




export default function Footer(){
    return (
            <div className="bg-neutral-900 gap-12 sm:gap-[50vh] flex flex-wrap items-center justify-center min-h-[50vh] pt-[5vh]">

                    <div className="flex flex-col items-center sm:items-start justify-center gap-12 max-w-[600px]">
                        <p className="text-white text-xl sm:text-2xl text-center sm:text-start font-bold">SUBSCRIBE TODAY AND BE THE FIRST TO KNOW ABOUT NEW ARRIVALS</p>
                        <div className="flex items-center justify-center h-[5vh]">
                            <input type="email" className="text-white bg-transparent outline-none border-b-2 border-white w-[250px] h-full" placeholder="EMAIL"/>
                            <Button className="border-b-2 border-white rounded-none h-full bg-transparent hover:bg-transparent">SUBSCRIBE</Button>
                            </div>
                         
                    
                        <div className="flex text-white items-center justify-center gap-4">
                            <FacebookIcon className="cursor-pointer"/>
                            <InstagramIcon className="cursor-pointer"/>
                            <YouTubeIcon className="cursor-pointer"/>
                            <PinterestIcon className="cursor-pointer"/>

                        </div>
                        <p className="text-white">MADE WITH BY <FavoriteIcon className="text-indigo-700"/> MOHAMED SABER CHKIRI</p>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    <div className="flex flex-col gap-10 flex-wrap items-center justify-center">
                        <div className="flex flex-wrap items-center justify-center gap-24" >

                        <div className="flex flex-col items-start ">
                            <p className="text-white font-bold">LAW & ORDER</p>
                            <p className="text-neutral-200 cursor-pointer">Terms of Service</p>
                            <p className="text-neutral-200 cursor-pointer">Data Protection</p>
                            <p className="text-neutral-200 cursor-pointer">Cookies</p>
                            <p className="text-neutral-200 cursor-pointer">Legal Notices</p>


                        </div>
                        <div className="flex flex-col items-start ">
                            <p className="text-white font-bold">MENU</p>
                            <p className="text-neutral-200 cursor-pointer">Home</p>
                            <p className="text-neutral-200 cursor-pointer">New Arrivals</p>
                            <p className="text-neutral-200 cursor-pointer">Collections</p>
                            <p className="text-neutral-200 cursor-pointer">Reviews</p>
                        </div>

                        </div>


                        <div className="flex items-center justify-center gap-3">
                            <FaCcMastercard className="text-6xl text-white"/>
                            <FaCcPaypal className="text-6xl text-white"/>
                            <FaCcVisa className="text-6xl text-white"/>
                            <FaCcStripe className="text-6xl text-white"/>
                        </div>



                    </div>
                
            </div>
    )
}