"use client"
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button'; // Adjust path
import { useCart } from '../contexts/CartContext'; // Adjust path

const CartPage: React.FC = () => {
    
  const { cart, removeFromCart } = useCart();

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
  };



  return (
    <div className='flex flex-col w-full h-[100px] items-center justify-around gap-4'>
      
      {cartItems.map((item : any) => ( 
        <div key={item.id} className='flex items-center justify-around w-[300px] h-fit bg-white border p-[1vh] gap-2'>
          <img src={item.backgroundLink} className='w-[70px] h-[70px]' />
          <div className='flex flex-col items-start flex-wrap justify-start w-[150px]'>
            <h3 className='flex flex-wrap '>{item.name}</h3>
            <p>${item.price}</p>
            
          </div>
          <Button className='w-fit p-0 bg-transparent text-back hover:bg-transparent h-[3vh]' onClick={() => handleRemoveFromCart(item.id)}>REMOVE</Button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
