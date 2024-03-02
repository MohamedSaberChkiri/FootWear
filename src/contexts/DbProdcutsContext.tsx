'use client'

import React, { createContext, useState, useEffect, useContext, PropsWithChildren } from 'react';

// Define the product type
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  manufacturer: string;
  category: string;
  currentStock: number;
  description: string;
  backgroundLink: string;
}

// Define the context type
interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// Create a new context
const ProductContext = createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
});

// Custom hook to access the context
export const useProductContext = () => useContext(ProductContext);

// Create a provider component
export const ProductProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from backend endpoint when component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://footwearserver.vercel.app/getallproducts'); 
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
  
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    // Provide the products state and update function as values to the context
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
