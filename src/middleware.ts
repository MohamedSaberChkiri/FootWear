import { NextResponse } from "next/server";


export function middleware() {

    const isSuccessful = localStorage.getItem("isAccess");
    if(!isSuccessful) {
        return NextResponse.redirect("/");
    }
  return NextResponse.next();
 
}

export const config = { 
    matcher: "/success"
    
}