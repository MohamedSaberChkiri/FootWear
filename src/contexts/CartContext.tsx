"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types
type Product = {
    id: string;
    name: string;
    price: number;
    backgroundLink : string;
};

type CartItem = {
    product: Product;
    quantity: number;
};

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

type CartProviderProps = {
    children: ReactNode;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        // Check if product is already in cart
        const existingItem = cart.find(item => item.product.id === product.id);
        if (existingItem) {
            setCart(cart.map(item => 
                item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ));
            console.log('item exists')
        } else {
            setCart([...cart, { product, quantity: 1 }]);
            console.log('item added successfully')
        }
    };

    const removeFromCart = (productId: string) => {
        setCart(cart.filter(item => item.product.id !== productId));
        
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
