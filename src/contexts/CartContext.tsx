"use client"
import React, { createContext, useContext, useState, PropsWithChildren, useEffect } from 'react';








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
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  
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
    if (typeof window !== 'undefined') { // Check if window object is defined (browser environment)
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const addToCart = (product: Product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity++;
      setCart(updatedCart);

   

    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
       
        

 
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Update localStorage whenever cart changes
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
