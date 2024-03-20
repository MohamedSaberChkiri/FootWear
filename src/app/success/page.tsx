"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { CiCircleCheck } from "react-icons/ci";


function page() {

  useEffect(() => {
    const isAccess = localStorage.getItem('isAccess');

    if (isAccess) {
      // Allow access to the page
      setTimeout(() => {
        localStorage.removeItem('isAccess');
      }, 5000);
    } else {
      // Redirect user to home page
      window.location.href = '/';
    }
  }, []);



  return (
    <div className='w-full h-[100vh] bg-green-100 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center max-w-[460px] p-4 gap-6 animate-fad'>
        <div><CiCircleCheck  className='text-[100px] text-green-700'/></div>
        <div className='text-4xl text-green-700 font-bold text-center'>Your Order is Confirmed!</div>
        <div className='text-center text-gray-700'> We&apos;ll send you a shipping confirmation email as soon as your order ships.</div>
       <Link href='/'><Button className='text-white bg-green-700 hover:bg-green-600 font-bold'>Continue Shopping</Button></Link>
        
        </div>
    </div>
  )
}

export default page