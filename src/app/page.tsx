import Benifits from "@/components/Benifits";
import CategoriesGrid from "@/components/CategoriesGrid";
import FlashSale from "@/components/FlashSale";
import HomeItems from "@/components/Home";
import HomeBrowser from "@/components/HomeBrowser";
import HomeFeaturedItemsContainer from "@/components/HomeFeaturedItemsContainer";
import NavBar from "@/components/NavBar";
import Reviews from "@/components/Reviews";
import StoryView from "@/components/StoryView";
import TextTitle from "@/components/TextTitle";


export default function Home() {
  return (
    <>
      <NavBar/>
      <HomeItems/>
      <TextTitle preTitle="FRESH PICKS JUST FOR YOU"
      Title="NEW ARRIVALS"
      description="Be the first to discover the latest trends! Browse through our newest arrivals featuring the hottest styles in clothing and accessories. Find your favorites before they're gone"/>
    <HomeFeaturedItemsContainer/>
    <CategoriesGrid/>
    <HomeBrowser/>
    <StoryView/>
    <FlashSale/>
    <Reviews/>
    <Benifits/>
    
    </>
  );
}
