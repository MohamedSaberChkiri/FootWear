"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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
  addToCart: (
    userId: string,
    product: Product,
    quantity: number,
    token: string
  ) => void;
  removeFromCart: (userId: string, productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  fetchUserCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const fetchUserCart = async () => {
    try {
      const userId = localStorage.getItem("userName");
      if (!userId) {
        return;
      }

      const response = await axios.get(
        `https://foot-wear-server.vercel.app/api/getUserCart/${userId}`
      );
      const fetchedCart = response.data;
      setCart(fetchedCart);
    } catch (error) {
      console.error("Error fetching user cart:", error);
    }
  };

  useEffect(() => {
    fetchUserCart();
  }, []);

  const addToCart = async (
    userId: string,
    product: Product,
    quantity: number,
    token: string
  ) => {
    try {
      const existingProductIndex = cart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // Update quantity of existing product
        const updatedCart = [...cart]; // Create a copy once
        updatedCart[existingProductIndex].quantity += quantity;
        setCart(updatedCart);
      } else {
        // Add new product with quantity
        const updatedCart = [...cart, { ...product, quantity }];
        setCart(updatedCart);
      }

      // Send request to server to add item to user's cart using Axios
      await axios.post(
        `https://foot-wear-server.vercel.app/api/addToCart/${userId}/${product.id}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (userId: string, productId: string) => {
    try {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      await axios.delete(
        `https://foot-wear-server.vercel.app/api/removeFromCart/${userId}/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    try {
      const userId = localStorage.getItem("userName");
      const updatedCart = cart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
      setCart(updatedCart);
      await axios.patch(
        `https://foot-wear-server.vercel.app/api/updateQuantity/${userId}/${productId}`,
        { quantity },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, fetchUserCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
