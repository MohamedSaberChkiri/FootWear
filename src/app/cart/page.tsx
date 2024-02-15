"use client"

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import React, { useEffect, useState } from 'react';

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    backgroundLink?: string; 
    
}


function Page() {






    const { removeFromCart } = useCart();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedCartItems: CartItem[] = JSON.parse(cartData);
            setCartItems(parsedCartItems);

            // Calculate total
            let totalPrice = 0;
            parsedCartItems.forEach(item => {
                totalPrice += item.price * item.quantity;
            });
            setTotal(totalPrice);
        }
    }, []);

    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
        window.location.reload()
    };



        {/* ----------------------API START------------------------------ */}


        
                const cartData: CartItem[] = cartItems.map((item) => ({
                    id: item.id,
                    quantity: item.quantity,
                    price: item.price,
                    name: item.name,
                }));
                    const handleSubmit = async () => {
                
                    try {
                        const response = await fetch('http://localhost:5500/create-payment-session', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ cartData }),
                        });
                
                        if (response.ok) {
                            const responseData = await response.json();
                            window.location = responseData.url

                        } else {
                        console.error('Error posting IDs:', response.statusText);
                        // Handle error here
                        }
                    } catch (error) {
                        console.error('Error posting IDs:', error);
                        // Handle network or other errors here
                    }
                    };
    
    
    
    {/* ----------------------API ENDS----------------------------- */}



    return (
        <div className='flex flex-col w-full min-h-[30vh] items-center justify-center p-[5vh]'>
            {cartItems.length > 0 ? (
                <div className='flex flex-col flex-wrap w-full items-start justify-around'>
                    <div className='w-full flex flex-wrap items-center justify-start gap-4'>
                        {cartItems.map((item: CartItem) => (
                            <div key={item.id} className='flex items-center justify-between w-full bg-white border p-[1vh] gap-2'>
                                <div className='flex items-center justify-around gap-2'>
                                    <img src={item.backgroundLink} className='w-[70px] h-[70px]' alt={item.name} />
                                    <h3 className='flex flex-wrap'>{item.name}</h3>
                                </div>
                                <div className='flex items-center justify-around flex-wrap gap-4'>
                                    <p className='text-green-700 font-bold'>${item.price * item.quantity}</p>
                                    <Button className='w-fit p-0 bg-transparent text-red-600 hover:bg-transparent h-[3vh]' onClick={() => handleRemoveFromCart(item.id)}>REMOVE</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex items-center flex-wrap justify-between w-full border p-[5vh] mt-[2vh]'>
                        <div className='flex flex-col w-[300px] gap-4'>
                          <p className='font-bold'>Special instuctions ?</p>
                          <Textarea className='w-full h-[10vh]' placeholder='"Add a pair of matching socks to the order."'/>
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                            <p className='font-bold'>Total: <span className='font-bold text-green-700'> ${total}</span></p>
                            <p className='text-gray-500 text-[14px]'>Taxes and shipping included</p>
                            <Button className='rounded-none bg-green-800 hover:bg-green-700 mt-[5vh] w-full' onClick={handleSubmit}>Check Out</Button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className='font-bold text-3xl'>YOUR CART IS EMPTY</p>
            )}
        </div>
    );
}

export default Page;
