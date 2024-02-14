"use client"
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'




function MobileNav() {
  return (
    <div className='flex flex-col gap-14 h-full'>
      
        <div className='font-bold text-5xl cursor-pointer'>FootWear</div> 
        <div className='flex flex-col gap-4'>
          <Link href='/collections'><Button className='rounded-none bg-black hover:bg-black text-white w-full'>COLLECTIONS</Button></Link>
          <Link href='/collections'><Button className='rounded-none bg-black hover:bg-black text-white w-full'>NEW ARRIVALS</Button></Link>
            <Link href='/contact'> <Button className='rounded-none bg-black hover:bg-black text-white w-full'>CONTACT US</Button></Link>
            
           

        </div>
        <div className='absolute bottom-[50px] right-0 w-full gap-2 flex flex-col'>
          <Link href='/cart'> <Button className='rounded-none bg-black hover:bg-black text-white w-full '>CART</Button></Link>
          <Link href='/login'><Button className='rounded-none bg-black hover:bg-black text-white w-full '>LOGIN</Button></Link>           
            
           
        </div>
    </div>
  )
}

export default MobileNav