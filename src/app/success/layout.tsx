import type { Metadata } from "next";

import "../globals.css";




export const metadata: Metadata = {
  title: "Confirmed",
  description: "Order Confirmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  
  return (
   <div>

{children}
   </div>
     
        
      
       
        
       
       
        
   
  );
}
