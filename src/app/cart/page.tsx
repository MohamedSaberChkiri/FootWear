"use client"

import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import React, { useEffect, useState } from 'react'

function page() {

    const { removeFromCart } = useCart();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        const parsedCartItems = JSON.parse(cartData);
        setCartItems(parsedCartItems);
      }
    }, []);

    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
        window.location.reload()
        
       
      };
    
    
  return (
    <div className='flex flex-col w-full min-h-[30vh] items-center justify-center p-[5vh]'>
            {cartItems.length>0 ? 
            
            cartItems.map((item : any) => ( 
                <div key={item.id} className='flex items-center flex-wrap justify-between w-fit h-fit bg-white border p-[3vh] gap-14'>
                  <img src={item.backgroundLink} className='w-[100px] h-[100px]' />
                  <div className='flex items-start flex-wrap justify-start min-w-[150px] gap-4'>
                    <h3 className='flex flex-wrap font-bold'>{item.name}</h3>
                    <p>Quantity : {item.quantity}</p>
                    <p className='text-green-600 font-bold'>${item.price * item.quantity}</p>
                    
                  </div>
                  <Button className='w-fit p-0 bg-transparent text-red-600 hover:text-red-600 hover:bg-transparent h-[3vh]' onClick={() => handleRemoveFromCart(item.id)}>REMOVE</Button>
                </div>
              ))
            
            : <p className='font-bold text-3xl'>YOUR CART IS EMPTY</p>}

            {cartItems.length>0 ? <Button className='w-[250px] rounded-none bg-green-600 hover:bg-green-700 mt-[5vh]'>Check Out</Button> : ""}
        
         </div>
  )
}

export default page