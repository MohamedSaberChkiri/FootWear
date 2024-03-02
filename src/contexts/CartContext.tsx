"use client"
import React, { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';
import axios from 'axios'; // Import Axios library

interface Product {
  id: string;
  name: string;
  price: number;
  backgroundLink: string;
  manufacturer: string;
  category: string;
  currentStock: number;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (userId: string, product: Product, quantity: number) => void;
  removeFromCart: (userId: string, productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const addToCart = (userId: string, product: Product, quantity: number) => {
    const updatedCart = [...cart, { ...product, quantity }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);

    // Send request to server to add item to user's cart using Axios
    axios.post(`http://localhost:5500/api/addToCart/${userId}/${product.id}`, { quantity })
      .then(response => {
        if (!response.data.success) {
         console.log("error")
        }
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
      });
  };

  const removeFromCart = (userId: string, productId: string) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);

    // Send request to server to remove item from user's cart using Axios
    axios.delete(`http://localhost:5500/api/removeFromCart/${userId}/${productId}`)
      .then(response => {
        if (!response.data.success) {
          console.log("error")
        }
      })
      .catch(error => {
        console.error('Error removing from cart:', error);
      });
  };

 
      useEffect(() => {
        if (typeof window !== 'undefined') { 
          localStorage.setItem('cart', JSON.stringify(cart));
        }
      }, [cart]);


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

