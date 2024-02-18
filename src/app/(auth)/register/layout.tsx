import type { Metadata } from "next";

import "../../globals.css";

import LayoutTop from "@/components/LayoutTop";
import { CartProvider } from "@/contexts/CartContext";




export const metadata: Metadata = {
  title: "Register",
  description: "Register a New Account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      
       
      <LayoutTop text="REGISTER" />
      <CartProvider>
        {children}
        </CartProvider>
       
    </div>
  );
}
