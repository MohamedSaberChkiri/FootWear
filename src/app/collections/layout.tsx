import type { Metadata } from "next";

import "../globals.css";

import LayoutTop from "@/components/LayoutTop";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "Our Collection",
  description: "Browse Our collection and find the perfect Sneaker for You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      
        <NavBar navStyle=""/>
      <LayoutTop text="COLLECTION"/>
     
        {children}
        <Footer/>
       
    </div>
  );
}
