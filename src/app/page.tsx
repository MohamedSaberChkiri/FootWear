"use client";

import Benifits from "@/components/Benifits";
import CategoriesGrid from "@/components/CategoriesGrid";
import FlashSale from "@/components/FlashSale";
import HomeItems from "@/components/Home";

import HomeFeaturedItemsContainer from "@/components/HomeFeaturedItemsContainer";

import Reviews from "@/components/Reviews";
import StoryView from "@/components/StoryView";
import TextTitle from "@/components/TextTitle";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasDialogBeenOpenedBefore = localStorage.getItem(
      "hasDialogBeenOpened"
    );

    if (hasDialogBeenOpenedBefore !== "true") {
      setIsOpen(true);
      localStorage.setItem("hasDialogBeenOpened", "true");
    }
  }, []);

  return (
    <>
      {isOpen && (
        <Dialog defaultOpen>
          <DialogContent className="flex flex-col items-center justify-center">
            <p className="text-xl">FOOTWEAR</p>
            <p className="text-5xl font-bold">Get 5$ off</p>
            <p className="text-gray-500">when you sign up for our newsletter</p>
            <Input
              className="w-[250px]"
              type="email"
              placeholder="Enter your email address"
            />
            <Button className="w-[250px] font-bold"> LET&apos;S GO </Button>
          </DialogContent>
        </Dialog>
      )}

      <NavBar navStyle="" />

      <HomeItems />
      <TextTitle
        preTitle="FRESH PICKS JUST FOR YOU"
        Title="NEW ARRIVALS"
        description="Be the first to discover the latest trends! Browse through our newest arrivals featuring the hottest styles in clothing and accessories. Find your favorites before they're gone"
      />
      <HomeFeaturedItemsContainer />
      <CategoriesGrid />

      <StoryView />
      <FlashSale />
      <Reviews />
      <Benifits />

      <Footer />
    </>
  );
}
