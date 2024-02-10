import React from 'react'
import { Button } from './ui/button'


function MobileNav() {
  return (
    <div className='flex flex-col gap-14 h-full'>
        <div className='font-bold text-5xl'>FootWear</div>
        <div className='flex flex-col gap-4'>
            <Button className='rounded-none bg-black hover:bg-black text-white'>COLLECTIONS</Button>
            <Button className='rounded-none bg-black hover:bg-black text-white'>NEW ARRIVALS</Button>
            <Button className='rounded-none bg-black hover:bg-black text-white'>CONTACT US</Button>

        </div>
        <div className='absolute bottom-[50px] right-0 w-full gap-2 flex flex-col'>
            <Button className='rounded-none bg-black hover:bg-black text-white w-full '>CART</Button>
            <Button className='rounded-none bg-black hover:bg-black text-white w-full '>LOGIN</Button>
           
        </div>
    </div>
  )
}

export default MobileNav