import type { Metadata } from "next";

import "./globals.css";

import { CartProvider } from "@/contexts/CartContext";
import { ProductProvider } from "@/contexts/DbProdcutsContext";


export const metadata: Metadata = {
  title: "FOOTWEAR",
  description: "Elevate your performance with premium running shoes at FOOTWEAR. Shop performance footwear from top brands like Nike, Adidas, and Puma. Find your perfect fit for race day or the gym.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
    <html lang="en">
      <body className="overflow-x-none">
        <CartProvider>
        <ProductProvider> 
        {children}
        </ProductProvider>
        </CartProvider>
        </body>
    </html>
  );
}
